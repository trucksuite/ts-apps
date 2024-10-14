import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';
import { fakeProducer } from './producer.seed';
import { fakeTsSalesRep } from './tsSalesRep.seed';
import { fakeWarrantyProduct } from './product.seed';

export const fakeProducerLocation1 = await client.producerLocation.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Joe's Trucking Emporium - Phoenix",
    phone: '1234567890',
    email: 'joesTrucksphx@mail.com',
    website: 'https://www.joestruckingPHX.com',
    address: '123 Main St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85012',
    country: 'USA',
    mailingAddress: '123 Main St',
    mailingCity: 'Phoenix',
    mailingState: 'AZ',
    mailingZip: '85012',
    mailingCountry: 'USA',
    main: true,
    inspectionRequired: false,
    type: 'DEALERSHIP',
    producerId: fakeProducer.id,
    truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
  }
});

export const fakeProducerLocation2 = await client.producerLocation.create({
  data: {
    id: 2,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Joe's Trucking Emporium - Tucson",
    phone: '1234567890',
    email: 'joesTruckstuc@mail.com',
    website: 'https://www.joestruckingTUC.com',
    address: '123 Main St',
    city: 'Tucson',
    state: 'AZ',
    zip: '87011',
    country: 'USA',
    mailingAddress: '123 Main St',
    mailingCity: 'Tucson',
    mailingState: 'AZ',
    mailingZip: '87011',
    mailingCountry: 'USA',
    main: true,
    inspectionRequired: false,
    type: 'DEALERSHIP',
    producerId: fakeProducer.id,
    truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
  }
});

export const fakeProducerLocation3 = await client.producerLocation.create({
  data: {
    id: 3,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Joe's Trucking Emporium - Flagstaff",
    phone: '1234567890',
    email: 'joesTrucksflag@mail.com',
    website: 'https://www.joestruckingFLAG.com',
    address: '123 Main St',
    city: 'Flagstaff',
    state: 'AZ',
    zip: '89022',
    country: 'USA',
    mailingAddress: '123 Main St',
    mailingCity: 'Flagstaff',
    mailingState: 'AZ',
    mailingZip: '89022',
    mailingCountry: 'USA',
    main: true,
    inspectionRequired: false,
    type: 'DEALERSHIP',
    producerId: fakeProducer.id,
    truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
  }
});

export const fakeLocationWarrantyProductAssigned1 =
  await client.locationAssignedWarrantyProduct.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      warrantyProductId: fakeWarrantyProduct.id,
      locationId: fakeProducerLocation1.id
    }
  });

export const fakeLocationWarrantyProductAssigned2 =
  await client.locationAssignedWarrantyProduct.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      warrantyProductId: fakeWarrantyProduct.id,
      locationId: fakeProducerLocation2.id
    }
  });

export const fakeLocationWarrantyProductAssigned3 =
  await client.locationAssignedWarrantyProduct.create({
    data: {
      id: 3,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      warrantyProductId: fakeWarrantyProduct.id,
      locationId: fakeProducerLocation3.id
    }
  });

export const fakeLocationWarrantyRatesheetRateOutput =
  await client.locationWarrantyRatesheetRateOutput.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      label: 'Class 8 - location 1',
      color: 'primary',
      logoUrl: 'https://www.joestrucking.com/logo.png',
      producerLocationId: fakeProducerLocation1.id,
      ratesheetId: 1,
      LocationAssignedWarrantyProductId: fakeLocationWarrantyProductAssigned1.id
    }
  });

export const fakeLocationWarrantyProductMarkup1 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 12,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned1.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup2 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 24,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned1.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup3 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 3,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 36,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned1.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup4 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 4,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 48,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned1.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup5 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 5,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 12,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned2.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup6 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 6,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 24,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned2.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup7 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 7,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 36,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned2.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup8 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 8,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 48,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned2.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup9 = await client.locationWarrantyProductMarkup.create(
  {
    data: {
      id: 9,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 12,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned3.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  }
);

export const fakeLocationWarrantyProductMarkup10 =
  await client.locationWarrantyProductMarkup.create({
    data: {
      id: 10,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 24,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned3.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  });

export const fakeLocationWarrantyProductMarkup11 =
  await client.locationWarrantyProductMarkup.create({
    data: {
      id: 11,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 36,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned3.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  });

export const fakeLocationWarrantyProductMarkup12 =
  await client.locationWarrantyProductMarkup.create({
    data: {
      id: 12,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      termValue: 48,
      termUnit: 'MONTHS',
      markupValue: 1000,
      locationWarrantyProductAssignedId: fakeLocationWarrantyProductAssigned3.id,
      locationRatesheetRateOutputId: fakeLocationWarrantyRatesheetRateOutput.id
    }
  });

export const fakeLocationNoteCreated = await client.locationNote.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    note: 'This is a note',
    type: 'CREATED',
    locationId: fakeProducerLocation1.id
  }
});

export const fakeLocationNoteManual = await client.locationNote.create({
  data: {
    id: 2,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    note: 'This is a note',
    type: 'MANUAL',
    locationId: fakeProducerLocation1.id
  }
});

export const fakeLocationContact = await client.locationContact.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: 'Jose',
    lastName: 'Martinez',
    email: 'jose@truckco.com',
    phone: '1234567890',
    role: 'Sales Manager',
    locationId: fakeProducerLocation1.id
  }
});

export const fakeProducerAdmin = await client.producerAdmin.create({
  data: {
    id: 1,
    publicId: generatePublicId(),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: generatePublicId(),
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob@joestrucking.com',
    phone: '1234567890',
    producerId: fakeProducer.id
  }
});
