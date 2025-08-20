import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/sanity';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err: any, fields: formidable.Fields, files: formidable.Files) => {
    if (err) {
      return res.status(500).json({ error: 'File upload error', details: err });
    }
    const { name, email, program } = fields;
    if (!name || !email || !program) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
      // Upload files to Sanity
      let uploadedFiles = [];
      if (files.documents) {
        const docs = Array.isArray(files.documents) ? files.documents : [files.documents];
        for (const file of docs) {
          const fileData = fs.readFileSync(file.filepath);
          const asset = await client.assets.upload('file', fileData, { filename: file.originalFilename ?? '' });
          uploadedFiles.push({ asset: { _ref: asset._id } });
        }
      }
      const doc = {
        _type: 'application',
        name,
        email,
        program,
        documents: uploadedFiles,
        submittedAt: new Date().toISOString(),
      };
      const result = await client.create(doc);
      return res.status(200).json({ success: true, id: result._id });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to submit application', details: error });
    }
  });
}
