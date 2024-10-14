import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';

export const fakeWarrantySignedAgreement = await client.signedWarrantyAgreement.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    warrantyAgreementId: 1,
    abodeSignId: generatePublicId(),
    url: 'https://www.example.com',
    selectedWarrantyProductId: 1
  }
});

export const fakeWarrantyTermSelected = await client.selectedWarrantyTerm.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ratesPackageId: 1,
    selectedWarrantyProductId: 1
  }
});

export const fakeWarrantyOptionsSelected = await client.selectedWarrantyOptions.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    selectedWarrantyProductId: 1,
    optionsPackages: {
      connect: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    }
  }
});

export const fakeWarrantyProductSelected = await client.selectedWarrantyProduct.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    locationWarrantyProductId: 1,
    signedAgreementId: 1, // Add this line
    termSelected: {
      connect: {
        id: 1
      }
    },
    optionsSelected: {
      connect: {
        id: 1
      }
    }
  }
});
