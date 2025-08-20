import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/sanity';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, program } = req.body;
  // For file uploads, you would need to handle multipart/form-data and upload to Sanity separately
  // This example only stores text fields

  if (!name || !email || !program) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const doc = {
      _type: 'application',
      name,
      email,
      program,
      submittedAt: new Date().toISOString(),
    };
    const result = await client.create(doc);
    return res.status(200).json({ success: true, id: result._id });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to submit application', details: error });
  }
}
