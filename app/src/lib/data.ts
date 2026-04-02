import rawStations from '@/data/stations.json';
import { DEMO_RATINGS } from '@/data/demo-ratings';
import { Station } from './types';

export function getStations(): Station[] {
  return (rawStations as Station[]).map((s) => {
    const demo = DEMO_RATINGS[s.slug];
    if (demo) {
      return {
        ...s,
        ratings: demo.ratings,
        transit_minutes: demo.transit_minutes,
        rent_avg: demo.rent_avg,
      };
    }
    return s;
  });
}

export function getStation(slug: string): Station | undefined {
  return getStations().find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return getStations().map((s) => s.slug);
}
