
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface NavProps {
  title: string;
  url: string;
}
export interface ProductsProps {
  [key: string]: Product;
}

interface Product {
  name: string;
  tax_code?: any;
  description: string;
  metadata: Metadata;
  role?: any;
  active: boolean;
  images: any[];
  prices: Prices;
}

interface Prices {
  priceId: string;
  priceData: PriceData;
}

interface PriceData {
  interval_count: number;
  metadata: Metadata;
  description?: any;
  active: boolean;
  trial_period_days?: any;
  tax_behavior: string;
  tiers_mode?: any;
  recurring: Recurring;
  product: string;
  tiers?: any;
  interval: string;
  type: string;
  currency: string;
  unit_amount: number;
  transform_quantity?: any;
  billing_scheme: string;
}

interface Recurring {
  trial_period_days?: any;
  interval_count: number;
  aggregate_usage?: any;
  usage_type: string;
  interval: string;
}

interface Metadata {}
export type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T]