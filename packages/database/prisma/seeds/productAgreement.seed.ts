import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';
import { fakeWarrantyProduct } from './product.seed';

export const fakeWarrantyAgreement = await client.warrantyAgreement.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    url: 'https://www.example.com',
    warrantyProductId: fakeWarrantyProduct.id,
    version: '1.0'
  }
});
