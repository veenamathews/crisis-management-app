import { Coordinates } from '../shared/maps';

export interface Information {
  id?: string;
  coords?: Coordinates;
  date?: string | Date;
  source?: string;
  sourceData?: any;
  tags?: string[];
  category?: string;
  sourceMessagePlainText?: string;
  gmapLink?: string | null;
  aiErrors?: { key: string, value: string | null, error: string}[];
  address?: any;
  sentiment?: any;
  aiLog?: { q: string, a: string}[];
}

export interface InformationNode {
  name: string;
  children?: InformationNode[];
}
