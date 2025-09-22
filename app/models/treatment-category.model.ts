import { TreatmentOption } from "./treatment-option.model";

export interface TreatmentCategory {
  name: string;
  options: TreatmentOption[];
}
