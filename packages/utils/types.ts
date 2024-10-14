import { type WarrantyProduct, type WarrantyProductCategory } from '@repo/db';

export type WarrantyProductCategoryWithIncludes = WarrantyProductCategory & {
  warrantyProducts: WarrantyProduct[];
};
