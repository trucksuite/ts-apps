import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';

export const fakeWarrantyProductCategory = await client.warrantyProductCategory.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Commercial'
  }
});

export const fakeWarrantyProductCategory2 = await client.warrantyProductCategory.create({
  data: {
    id: 2,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Vocational'
  }
});
