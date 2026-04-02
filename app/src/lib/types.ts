export interface StationRatings {
  food: number;
  nightlife: number;
  transport: number;
  rent: number;
  safety: number;
  green: number;
  gym_sports: number;
  vibe: number;
  crowd: number;
}

export interface RentAvg {
  '1k_1ldk': number | null;
  '2ldk': number | null;
  source: string;
  updated: string;
}

export interface TransitMinutes {
  shibuya: number;
  shinjuku: number;
  tokyo: number;
  ikebukuro: number;
  shinagawa: number;
}

export interface StationDescription {
  atmosphere: string;
  landmarks: string;
  food: string;
  nightlife: string;
}

export interface Station {
  slug: string;
  name_en: string;
  name_jp: string;
  lat: number;
  lng: number;
  lines: string[];
  line_count: number;
  prefecture: string;
  ratings: StationRatings | null;
  rent_avg: RentAvg | null;
  transit_minutes: TransitMinutes | null;
  description?: StationDescription | null;
}

export interface WeightConfig {
  food: number;
  nightlife: number;
  transport: number;
  rent: number;
  safety: number;
  green: number;
  gym_sports: number;
  vibe: number;
  crowd: number;
}

export const DEFAULT_WEIGHTS: WeightConfig = {
  food: 15,
  nightlife: 10,
  transport: 20,
  rent: 20,
  safety: 10,
  green: 10,
  gym_sports: 5,
  vibe: 5,
  crowd: 5,
};

export const RATING_LABELS: Record<keyof StationRatings, string> = {
  food: 'Food & Dining',
  nightlife: 'Nightlife',
  transport: 'Transport',
  rent: 'Affordability',
  safety: 'Safety',
  green: 'Parks & Green',
  gym_sports: 'Gym & Sports',
  vibe: 'Vibe & Atmosphere',
  crowd: 'Low Crowds',
};

export const HUB_LABELS: Record<keyof TransitMinutes, string> = {
  shibuya: 'Shibuya',
  shinjuku: 'Shinjuku',
  tokyo: 'Tokyo',
  ikebukuro: 'Ikebukuro',
  shinagawa: 'Shinagawa',
};
