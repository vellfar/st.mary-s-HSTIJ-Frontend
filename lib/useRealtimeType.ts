"use client";

import { useEffect, useState } from 'react';
import { client } from './sanity';

// Real-time hook for a single document type, with initial fetch
export function useRealtimeType<T extends { _id: string }>(type: string, initial: T[] = []): T[] {
  const [data, setData] = useState<T[]>(initial);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    // Fetch initial data
    client.fetch(`*[_type == "${type}"]`).then((docs: T[]) => {
      setData(docs);
      // Subscribe to real-time updates
      const sub = client.listen(`*[_type == "${type}"]`).subscribe(update => {
        if (!update.result) return;
        setData(prev => {
          if (!update.result) return prev;
          const idx = prev.findIndex((d) => d._id === update.result!._id);
          if (idx > -1) {
            const copy = [...prev];
            copy[idx] = update.result as T;
            return copy;
          }
          return [update.result as T, ...prev];
        });
      });
      unsub = () => sub.unsubscribe();
    });
    return () => {
      if (unsub) unsub();
    };
  }, [type]);
  return data;
}
