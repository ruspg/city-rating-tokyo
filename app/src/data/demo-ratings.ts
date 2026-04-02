import { StationRatings, TransitMinutes, RentAvg } from '@/lib/types';

interface DemoData {
  ratings: StationRatings;
  transit_minutes: TransitMinutes;
  rent_avg: RentAvg;
}

// Demo data for key stations - to be replaced by AI research + Suumo scraping
export const DEMO_RATINGS: Record<string, DemoData> = {
  shinjuku: {
    ratings: { food: 9, nightlife: 10, transport: 10, rent: 3, safety: 6, green: 5, gym_sports: 8, vibe: 8, crowd: 2 },
    transit_minutes: { shibuya: 5, shinjuku: 0, tokyo: 15, ikebukuro: 8, shinagawa: 18 },
    rent_avg: { '1k_1ldk': 135000, '2ldk': 250000, source: 'estimate', updated: '2026-04' },
  },
  shibuya: {
    ratings: { food: 9, nightlife: 9, transport: 10, rent: 3, safety: 7, green: 6, gym_sports: 8, vibe: 9, crowd: 2 },
    transit_minutes: { shibuya: 0, shinjuku: 5, tokyo: 25, ikebukuro: 20, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 140000, '2ldk': 260000, source: 'estimate', updated: '2026-04' },
  },
  ikebukuro: {
    ratings: { food: 8, nightlife: 8, transport: 9, rent: 4, safety: 6, green: 4, gym_sports: 7, vibe: 7, crowd: 3 },
    transit_minutes: { shibuya: 20, shinjuku: 8, tokyo: 20, ikebukuro: 0, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 110000, '2ldk': 200000, source: 'estimate', updated: '2026-04' },
  },
  tokyo: {
    ratings: { food: 7, nightlife: 5, transport: 10, rent: 2, safety: 9, green: 5, gym_sports: 6, vibe: 6, crowd: 3 },
    transit_minutes: { shibuya: 25, shinjuku: 15, tokyo: 0, ikebukuro: 20, shinagawa: 10 },
    rent_avg: { '1k_1ldk': 155000, '2ldk': 300000, source: 'estimate', updated: '2026-04' },
  },
  ueno: {
    ratings: { food: 8, nightlife: 6, transport: 8, rent: 5, safety: 7, green: 9, gym_sports: 5, vibe: 8, crowd: 4 },
    transit_minutes: { shibuya: 30, shinjuku: 25, tokyo: 8, ikebukuro: 18, shinagawa: 18 },
    rent_avg: { '1k_1ldk': 105000, '2ldk': 185000, source: 'estimate', updated: '2026-04' },
  },
  akihabara: {
    ratings: { food: 7, nightlife: 7, transport: 8, rent: 4, safety: 7, green: 3, gym_sports: 5, vibe: 9, crowd: 3 },
    transit_minutes: { shibuya: 28, shinjuku: 20, tokyo: 5, ikebukuro: 22, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 120000, '2ldk': 210000, source: 'estimate', updated: '2026-04' },
  },
  shinagawa: {
    ratings: { food: 6, nightlife: 5, transport: 9, rent: 3, safety: 8, green: 5, gym_sports: 6, vibe: 5, crowd: 5 },
    transit_minutes: { shibuya: 15, shinjuku: 18, tokyo: 10, ikebukuro: 25, shinagawa: 0 },
    rent_avg: { '1k_1ldk': 145000, '2ldk': 270000, source: 'estimate', updated: '2026-04' },
  },
  nakano: {
    ratings: { food: 8, nightlife: 7, transport: 7, rent: 6, safety: 8, green: 6, gym_sports: 7, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 15, shinjuku: 5, tokyo: 20, ikebukuro: 15, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 160000, source: 'estimate', updated: '2026-04' },
  },
  kichijoji: {
    ratings: { food: 9, nightlife: 7, transport: 6, rent: 5, safety: 9, green: 10, gym_sports: 8, vibe: 10, crowd: 5 },
    transit_minutes: { shibuya: 20, shinjuku: 15, tokyo: 30, ikebukuro: 25, shinagawa: 35 },
    rent_avg: { '1k_1ldk': 100000, '2ldk': 170000, source: 'estimate', updated: '2026-04' },
  },
  shimokitazawa: {
    ratings: { food: 9, nightlife: 8, transport: 7, rent: 5, safety: 8, green: 6, gym_sports: 6, vibe: 10, crowd: 5 },
    transit_minutes: { shibuya: 5, shinjuku: 10, tokyo: 25, ikebukuro: 20, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 105000, '2ldk': 175000, source: 'estimate', updated: '2026-04' },
  },
  ebisu: {
    ratings: { food: 9, nightlife: 8, transport: 8, rent: 3, safety: 8, green: 6, gym_sports: 7, vibe: 9, crowd: 5 },
    transit_minutes: { shibuya: 3, shinjuku: 8, tokyo: 22, ikebukuro: 18, shinagawa: 12 },
    rent_avg: { '1k_1ldk': 145000, '2ldk': 270000, source: 'estimate', updated: '2026-04' },
  },
  meguro: {
    ratings: { food: 8, nightlife: 6, transport: 7, rent: 4, safety: 9, green: 7, gym_sports: 7, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 5, shinjuku: 12, tokyo: 25, ikebukuro: 20, shinagawa: 10 },
    rent_avg: { '1k_1ldk': 125000, '2ldk': 220000, source: 'estimate', updated: '2026-04' },
  },
  koenji: {
    ratings: { food: 8, nightlife: 8, transport: 6, rent: 6, safety: 8, green: 5, gym_sports: 6, vibe: 9, crowd: 6 },
    transit_minutes: { shibuya: 18, shinjuku: 8, tokyo: 22, ikebukuro: 18, shinagawa: 28 },
    rent_avg: { '1k_1ldk': 88000, '2ldk': 145000, source: 'estimate', updated: '2026-04' },
  },
  sangenjaya: {
    ratings: { food: 8, nightlife: 7, transport: 6, rent: 5, safety: 8, green: 5, gym_sports: 6, vibe: 8, crowd: 6 },
    transit_minutes: { shibuya: 5, shinjuku: 15, tokyo: 30, ikebukuro: 25, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 100000, '2ldk': 170000, source: 'estimate', updated: '2026-04' },
  },
  nakameguro: {
    ratings: { food: 9, nightlife: 7, transport: 7, rent: 4, safety: 9, green: 8, gym_sports: 7, vibe: 9, crowd: 5 },
    transit_minutes: { shibuya: 4, shinjuku: 12, tokyo: 25, ikebukuro: 22, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 135000, '2ldk': 240000, source: 'estimate', updated: '2026-04' },
  },
  asakusa: {
    ratings: { food: 9, nightlife: 6, transport: 6, rent: 6, safety: 7, green: 5, gym_sports: 4, vibe: 9, crowd: 3 },
    transit_minutes: { shibuya: 30, shinjuku: 28, tokyo: 15, ikebukuro: 25, shinagawa: 25 },
    rent_avg: { '1k_1ldk': 95000, '2ldk': 155000, source: 'estimate', updated: '2026-04' },
  },
  roppongi: {
    ratings: { food: 8, nightlife: 10, transport: 7, rent: 2, safety: 5, green: 5, gym_sports: 8, vibe: 7, crowd: 3 },
    transit_minutes: { shibuya: 10, shinjuku: 15, tokyo: 18, ikebukuro: 25, shinagawa: 15 },
    rent_avg: { '1k_1ldk': 165000, '2ldk': 320000, source: 'estimate', updated: '2026-04' },
  },
  ginza: {
    ratings: { food: 10, nightlife: 8, transport: 9, rent: 2, safety: 9, green: 4, gym_sports: 7, vibe: 8, crowd: 3 },
    transit_minutes: { shibuya: 15, shinjuku: 18, tokyo: 5, ikebukuro: 22, shinagawa: 12 },
    rent_avg: { '1k_1ldk': 170000, '2ldk': 350000, source: 'estimate', updated: '2026-04' },
  },
  jiyugaoka: {
    ratings: { food: 8, nightlife: 5, transport: 6, rent: 4, safety: 9, green: 7, gym_sports: 7, vibe: 9, crowd: 6 },
    transit_minutes: { shibuya: 10, shinjuku: 20, tokyo: 30, ikebukuro: 28, shinagawa: 20 },
    rent_avg: { '1k_1ldk': 115000, '2ldk': 200000, source: 'estimate', updated: '2026-04' },
  },
  ogikubo: {
    ratings: { food: 7, nightlife: 5, transport: 7, rent: 6, safety: 9, green: 7, gym_sports: 7, vibe: 7, crowd: 7 },
    transit_minutes: { shibuya: 20, shinjuku: 12, tokyo: 28, ikebukuro: 22, shinagawa: 30 },
    rent_avg: { '1k_1ldk': 88000, '2ldk': 145000, source: 'estimate', updated: '2026-04' },
  },
};
