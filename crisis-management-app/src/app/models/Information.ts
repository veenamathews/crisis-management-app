import { Coordinates } from "../shared/maps";

export interface Information {
  id?: string;
  originalContent?: string;
  coords?: Coordinates;
  source?: string;
  sourceData?: any;
}
