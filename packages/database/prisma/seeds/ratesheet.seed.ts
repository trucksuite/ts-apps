import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';

export const fakeWarrantyRatesheet = await client.warrantyRatesheet.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Class 8',
    title: 'Class 8 Diesel',
    subtitle: 'Commercial Vehicle Warranty Rates',
    lowMileageCutoff: 600,
    isVocational: false,
    rows: {
      create: [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 12,
          termUnit: 'MONTHS',
          mileageValue: 125,
          nlm: 1000,
          nhm: 2000,
          olm: 3000,
          ohm: 4000,
          deductible: 500,
          aggregateLimit: 10000
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 24,
          termUnit: 'MONTHS',
          mileageValue: 250,
          nlm: 2000,
          nhm: 3000,
          olm: 4000,
          ohm: 5000,
          deductible: 500,
          aggregateLimit: 10000
        },
        {
          id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 36,
          termUnit: 'MONTHS',
          mileageValue: 400,
          nlm: 3000,
          nhm: 4000,
          olm: 5000,
          ohm: 6000,
          deductible: 500,
          aggregateLimit: 10000
        },
        {
          id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 48,
          termUnit: 'MONTHS',
          mileageValue: 550,
          nlm: 1000,
          nhm: 2000,
          olm: 3000,
          ohm: 4000,
          deductible: 500,
          aggregateLimit: 10000
        }
      ]
    },
    options: {
      create: [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          packageName: 'Towing',
          termValue: 12,
          termUnit: 'MONTHS',
          cost: 1000
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          packageName: 'Rental',
          termValue: 12,
          termUnit: 'MONTHS',
          cost: 2000
        },
        {
          id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          packageName: 'Downtime',
          termValue: 12,
          termUnit: 'MONTHS',
          cost: 3000
        }
      ]
    },
    disclosures: {
      create: [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Disclosure 1',
          description: 'This is a disclosure.',
          order: 1
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'Disclosure 2',
          description: 'This is another disclosure.',
          order: 2
        }
      ]
    },
    coverages: {
      create: [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'coverage 1',
          description: 'This is a coverage.',
          order: 1
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          title: 'coverage 2',
          description: 'This is another coverage.',
          order: 2
        }
      ]
    }
  }
});

export const fakeWarrantyRatesheetVoc = await client.warrantyRatesheet.create({
  data: {
    id: 2,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Class 8 Vocational',
    title: 'Class 8 Diesel',
    subtitle: 'Commercial Vehicle Warranty Rates',
    lowMileageCutoff: 600,
    isVocational: false,
    vocationalRows: {
      create: [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 12,
          termUnit: 'MONTHS',
          mileageValue: 125,
          rate: 4000,
          deductible: 500,
          aggregateLimit: 10000,
          vocationalType: 'BOOM BUCKET'
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 24,
          termUnit: 'MONTHS',
          mileageValue: 250,
          rate: 5000,
          deductible: 500,
          aggregateLimit: 10000,
          vocationalType: 'BOOM BUCKET'
        },
        {
          id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 36,
          termUnit: 'MONTHS',
          mileageValue: 400,
          rate: 6000,
          deductible: 500,
          aggregateLimit: 10000,
          vocationalType: 'BOOM BUCKET'
        },
        {
          id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          termValue: 48,
          termUnit: 'MONTHS',
          mileageValue: 550,
          rate: 4000,
          deductible: 500,
          aggregateLimit: 10000,
          vocationalType: 'BOOM BUCKET'
        }
      ]
    },
    options: {
      create: [
        {
          id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          packageName: 'Towing',
          termValue: 12,
          termUnit: 'MONTHS',
          cost: 1000
        },
        {
          id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          packageName: 'Rental',
          termValue: 12,
          termUnit: 'MONTHS',
          cost: 2000
        },
        {
          id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
          packageName: 'Downtime',
          termValue: 12,
          termUnit: 'MONTHS',
          cost: 3000
        }
      ]
    },
    disclosures: {
      connect: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    },
    coverages: {
      connect: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  }
});
