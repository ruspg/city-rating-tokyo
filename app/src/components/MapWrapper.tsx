'use client';

import dynamic from 'next/dynamic';
import { Station } from '@/lib/types';

const MapView = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">
      Loading map...
    </div>
  ),
});

export default function MapWrapper({ stations }: { stations: Station[] }) {
  return <MapView stations={stations} />;
}
