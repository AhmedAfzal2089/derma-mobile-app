import { TreatmentCategory } from "./treatment-category.model";

export interface TreatmentOptionsMap {
  [categoryId: string]: TreatmentCategory;
}