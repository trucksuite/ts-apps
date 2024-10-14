import { generatePublicId } from '@repo/utils/public-id';
import { fakeTsSalesRep } from './tsSalesRep.seed';
import { client } from '../../client';

export const fakeProducer = await client.producer.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Joe's Trucking, LLC",
    dba: "Joe's Trucking Emporium",
    taxId: '123456789',
    website: 'https://www.joestrucking.com',
    address: '123 Main St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85012',
    country: 'USA',
    primaryContactName: 'Joe B. Truckin',
    primaryContactTitle: 'Owner',
    primaryContactPhone: '1234567890',
    primaryContactEmail: 'joebtruckin@gmail.com',
    status: 'STARTED',
    logoUrl:
      'https://www.freepik.com/icon/truck_4231188#fromView=search&page=1&position=0&uuid=99507bbd-877f-4e75-b763-3307a21be165',
    producerAgreementId: generatePublicId(),
    truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
  }
});
export const fakeProducer2 = await client.producer.create({
  data: {
    id: 2,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Bob's Transport Devices, LLC",
    dba: '',
    taxId: '123456789',
    website: 'https://www.bobtrans.com',
    address: '123 Main St',
    city: 'Dallas',
    state: 'TX',
    zip: '77444',
    country: 'USA',
    primaryContactName: 'Bob Transportington',
    primaryContactTitle: 'CEO',
    primaryContactPhone: '1234567890',
    primaryContactEmail: 'Bob@gmail.com',
    status: 'ACTIVE',
    logoUrl:
      'https://www.freepik.com/icon/truck_416742#fromView=search&page=1&position=3&uuid=99507bbd-877f-4e75-b763-3307a21be165',
    producerAgreementId: generatePublicId(),
    truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
  }
});
export const fakeProducer3 = await client.producer.create({
  data: {
    id: 3,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Atlas Trucking, LLC',
    dba: 'Atlas Trucking',
    taxId: '123456789',
    website: 'https://www.atlastrucking.com',
    address: '2557 N 1st St',
    city: 'Fresno',
    state: 'CA',
    zip: '93703',
    country: 'USA',
    primaryContactName: 'Atlas Shoulders',
    primaryContactTitle: 'President',
    primaryContactPhone: '1234567890',
    primaryContactEmail: 'atlast@mail.com',
    status: 'PENDING_REVIEW',
    logoUrl:
      'https://www.freepik.com/icon/truck_416742#fromView=search&page=1&position=3&uuid=99507bbd-877f-4e75-b763-3307a21be165',
    producerAgreementId: generatePublicId(),
    truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
  }
});
