import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';
import { fakeWarrantyProductCategory } from './productCategory.seed';

export const fakeWarrantyProduct = await client.warrantyProduct.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Class 8',
    fuelType: 'DIESEL',
    warrantyProductCategoryId: fakeWarrantyProductCategory.id,
    warrantyAgreementId: 1,
    ratesPackages: {
      create: [
        {
          id: 1,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 12,
          termUnit: 'MONTHS',
          mileageValue: 10000,
          mileageUnit: 'MILES',
          yearMileageLimit: 'NEWER_LOW_MILEAGE',
          deductible: 500,
          aggregateLimit: 10000,
          rate: 1000
        },
        {
          id: 2,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 12,
          termUnit: 'MONTHS',
          mileageValue: 20000,
          mileageUnit: 'MILES',
          yearMileageLimit: 'NEWER_HIGH_MILEAGE',
          deductible: 500,
          aggregateLimit: 20000,
          rate: 2000
        },
        {
          id: 3,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 12,
          termUnit: 'MONTHS',
          mileageValue: 30000,
          mileageUnit: 'MILES',
          yearMileageLimit: 'OLDER_LOW_MILEAGE',
          deductible: 500,
          aggregateLimit: 30000,
          rate: 3000
        },
        {
          id: 4,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 12,
          termUnit: 'MONTHS',
          mileageValue: 40000,
          mileageUnit: 'MILES',
          yearMileageLimit: 'OLDER_HIGH_MILEAGE',
          deductible: 500,
          aggregateLimit: 40000,
          rate: 4000
        }
      ]
    },
    optionsPackages: {
      create: [
        {
          id: 1,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          type: 'HVAC',
          termValue: 12,
          termUnit: 'MONTHS',
          rate: 1000
        },
        {
          id: 2,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          type: 'APU',
          termValue: 12,
          termUnit: 'MONTHS',
          rate: 2000
        },
        {
          id: 3,
          publicId: generatePublicId(),
          createdAt: new Date(),
          updatedAt: new Date(),
          type: 'Trans & Diff',
          termValue: 12,
          termUnit: 'MONTHS',
          rate: 3000
        }
      ]
    }
  }
});
