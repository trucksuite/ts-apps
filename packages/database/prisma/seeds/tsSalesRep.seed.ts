import { client } from '../../client';
import { generatePublicId } from '@repo/utils/public-id';

export const fakeTsSalesRep = await client.truckSuiteSalesRepresentative.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: generatePublicId(),
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice@gmail.com',
    phone: '1234567890',
    address: '123 Main St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85012',
    country: 'USA'
  }
});
