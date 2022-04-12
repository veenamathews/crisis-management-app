import { Coordinates } from '../shared/maps';

export interface Information {
  id?: string;
  coords?: Coordinates;
  date?: string | Date;
  source?: string;
  sourceData?: any;
  tags?: string[];
  category?: string;
}
