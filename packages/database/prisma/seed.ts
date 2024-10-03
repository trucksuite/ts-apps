import { PrismaClient } from '@prisma/client';
import { generatePublicId } from '@repo/utils/public-id';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const fakeTsSalesRep = await prisma.truckSuiteSalesRepresentative.create({
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

  console.log('Created sales rep with public id: ', fakeTsSalesRep.publicId);

  const fakeProducer = await prisma.producer.create({
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
      logoUrl: 'https://www.joestrucking.com/logo.png',
      producerAgreementId: generatePublicId(),
      truckSuiteSalesRepresentativeId: fakeTsSalesRep.id
    }
  });

  console.log('Created producer with public id: ', fakeProducer.publicId);

  const fakeProducerLocation1 = await prisma.producerLocation.create({
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

  const fakeProducerLocation2 = await prisma.producerLocation.create({
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

  const fakeProducerLocation3 = await prisma.producerLocation.create({
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

  console.log('Created producer location with public id: ', fakeProducerLocation1.publicId);
  console.log('Created producer location with public id: ', fakeProducerLocation2.publicId);
  console.log('Created producer location with public id: ', fakeProducerLocation3.publicId);

  const fakeWarrantyProductCategory = await prisma.warrantyProductCategory.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Commercial'
    }
  });

  console.log(
    'Created warranty product category with public id: ',
    fakeWarrantyProductCategory.publicId
  );
  const fakeWarrantyProductCategory2 = await prisma.warrantyProductCategory.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Vocational'
    }
  });

  console.log(
    'Created warranty product category with public id: ',
    fakeWarrantyProductCategory2.publicId
  );

  const fakeWarrantyProduct = await prisma.warrantyProduct.create({
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

  console.log('Created warranty product with public id: ', fakeWarrantyProduct.publicId);

  const fakeWarrantyAgreement = await prisma.warrantyAgreement.create({
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

  console.log('Created warranty agreement with public id: ', fakeWarrantyAgreement.publicId);

  const fakeLocationWarrantyProductAssigned1 = await prisma.locationAssignedWarrantyProduct.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      warrantyProductId: fakeWarrantyProduct.id,
      locationId: fakeProducerLocation1.id
    }
  });

  const fakeLocationWarrantyProductAssigned2 = await prisma.locationAssignedWarrantyProduct.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      warrantyProductId: fakeWarrantyProduct.id,
      locationId: fakeProducerLocation2.id
    }
  });

  const fakeLocationWarrantyProductAssigned3 = await prisma.locationAssignedWarrantyProduct.create({
    data: {
      id: 3,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      warrantyProductId: fakeWarrantyProduct.id,
      locationId: fakeProducerLocation3.id
    }
  });

  const fakeLocationWarrantyRatesheetRateOutput =
    await prisma.locationWarrantyRatesheetRateOutput.create({
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

  console.log(
    'Created ratesheet rate output with public id: ',
    fakeLocationWarrantyRatesheetRateOutput.publicId
  );

  const fakeLocationWarrantyProductMarkup1 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup2 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup3 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup4 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup5 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup6 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup7 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup8 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup9 = await prisma.locationWarrantyProductMarkup.create({
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
  });

  const fakeLocationWarrantyProductMarkup10 = await prisma.locationWarrantyProductMarkup.create({
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

  const fakeLocationWarrantyProductMarkup11 = await prisma.locationWarrantyProductMarkup.create({
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

  const fakeLocationWarrantyProductMarkup12 = await prisma.locationWarrantyProductMarkup.create({
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

  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup1.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup2.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup3.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup4.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup5.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup6.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup7.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup8.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup9.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup10.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup11.publicId
  );
  console.log(
    'Created location warranty product markup with public id: ',
    fakeLocationWarrantyProductMarkup12.publicId
  );

  console.log(
    'Created location warranty product assigned with public id: ',
    fakeLocationWarrantyProductAssigned1.publicId
  );
  console.log(
    'Created location warranty product assigned with public id: ',
    fakeLocationWarrantyProductAssigned2.publicId
  );
  console.log(
    'Created location warranty product assigned with public id: ',
    fakeLocationWarrantyProductAssigned3.publicId
  );

  const fakeLocationNoteCreated = await prisma.locationNote.create({
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

  const fakeLocationNoteManual = await prisma.locationNote.create({
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

  console.log('Created location note with public id: ', fakeLocationNoteCreated.publicId);
  console.log('Created location note with public id: ', fakeLocationNoteManual.publicId);

  const fakeLocationContact = await prisma.locationContact.create({
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

  console.log('Created location contact with public id: ', fakeLocationContact.publicId);

  const fakeProducerAdmin = await prisma.producerAdmin.create({
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

  console.log('Created producer admin with public id: ', fakeProducerAdmin.publicId);

  const fakeWarrantyRatesheet = await prisma.warrantyRatesheet.create({
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

  console.log('Created warranty ratesheet with public id: ', fakeWarrantyRatesheet.publicId);

  const fakeWarrantyRatesheetVoc = await prisma.warrantyRatesheet.create({
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

  console.log('Created warranty ratesheet with public id: ', fakeWarrantyRatesheetVoc.publicId);

  const fakeCustomer1 = await prisma.customer.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: 'John',
      lastName: 'Doe',
      email: 'customer@mail.com',
      phone: '1234567890',
      address: '123 Main St',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85012',
      country: 'USA'
    }
  });

  console.log('Created customer with public id: ', fakeCustomer1.publicId);

  const fakeCustomer2 = await prisma.customer.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: 'Danny',
      lastName: 'Trejo',
      email: 'bigD@hotmail.com',
      phone: '9876543210',
      address: '4389 Second St',
      city: 'Tucson',
      state: 'AZ',
      zip: '85088',
      country: 'USA'
    }
  });

  console.log('Created customer with public id: ', fakeCustomer2.publicId);

  const fakeTruck1 = await prisma.truck.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      vin: '1FUJHTFW9RLVD9985',
      odometer: 100000,
      odometerUnit: 'MILES',
      ecm: 123456,
      ecmUnit: 'MILES',
      year: 2020,
      make: 'Volvo',
      model: 'VNL',
      engineMakeModel: 'Volvo',
      engineSerialNum: 'D13',
      gvwr: 'Class 8',
      vehicleType: 'Truck',
      fuelType: 'DIESEL',
      apuMake: 'Thermo King',
      apuSerialNum: '123456',
      apuHours: 5000,
      customerId: fakeCustomer1.id,
      truckLienholderId: 1
    }
  });

  console.log('Created truck with public id: ', fakeTruck1.publicId);
  const fakeTruck2 = await prisma.truck.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      vin: '1FVACXFE0RHVA8913',
      odometer: 100000,
      odometerUnit: 'MILES',
      ecm: 123456,
      ecmUnit: 'MILES',
      year: 2020,
      make: 'Volvo',
      model: 'VNL',
      engineMakeModel: 'Volvo',
      engineSerialNum: 'D13',
      gvwr: 'Class 8',
      vehicleType: 'Truck',
      fuelType: 'DIESEL',
      apuMake: 'Thermo King',
      apuSerialNum: '123456',
      apuHours: 5000,
      customerId: fakeCustomer2.id,
      truckLienholderId: 1
    }
  });

  console.log('Created truck with public id: ', fakeTruck2.publicId);

  const fakeTruckLienholder = await prisma.truckLienholder.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Bank of America',
      address: '123 Main St',
      city: 'Phoenix',
      state: 'AZ',
      zip: '85012',
      country: 'USA',
      phone: '1234567890',
      email: 'boa@mail.com',
      truckId: fakeTruck1.id
    }
  });

  console.log('Created truck lienholder with public id: ', fakeTruckLienholder.publicId);

  const fakeWarrantySignedAgreement = await prisma.signedWarrantyAgreement.create({
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

  console.log('Created signed agreement with public id: ', fakeWarrantySignedAgreement.publicId);

  const fakeWarrantyTermSelected = await prisma.selectedWarrantyTerm.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ratesPackageId: 1,
      selectedWarrantyProductId: 1
    }
  });

  console.log('Created warranty term selected with public id: ', fakeWarrantyTermSelected.publicId);

  const fakeWarrantyOptionsSelected = await prisma.selectedWarrantyOptions.create({
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

  console.log(
    'Created warranty options selected with public id: ',
    fakeWarrantyOptionsSelected.publicId
  );

  const fakeWarrantyProductSelected = await prisma.selectedWarrantyProduct.create({
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

  console.log(
    'Created warranty product selected with public id: ',
    fakeWarrantyProductSelected.publicId
  );

  const fakeCustomerSaleInvoice1 = await prisma.customerSaleInvoice.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate: new Date(),
      customerSaleId: 1,
      invoiceAmount: 9500,
      invoiceStatus: 'DUE_SOON',
      producerLocationId: fakeProducerLocation1.id,
      producerAdminId: fakeProducerAdmin.id,
      locationInvoicePaymentId: 1
    }
  });

  console.log(
    'Created customer sale 1 invoice with public id: ',
    fakeCustomerSaleInvoice1.publicId
  );

  const fakeCustomerSale1 = await prisma.customerSale.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: fakeCustomer1.id,
      truckId: fakeTruck1.id,
      lienholderId: fakeTruckLienholder.id,
      selectedWarrantyProductId: fakeWarrantyProductSelected.id,
      saleDate: new Date(),
      includedInRetailPrice: false,
      financedDeal: false,
      quotedSalePrice: 10000,
      finalRetailWarrantyPurchasePrice: 9500,
      saleCurrency: 'USD',
      // 🔥🔥🔥🔥🔥🔥🔥 Change: These are status so not sure if we need them
      // savedAsQuote: false,
      // customerHasDeclined: false,
      customerSaleInvoiceId: fakeCustomerSaleInvoice1.id,
      customerSaleStatus: 'IN_PROGRESS',
      producerId: fakeProducer.id,
      producerLocationId: 1,
      producerAdminId: 1,
      expirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      notes: {
        create: [
          {
            id: 1,
            publicId: generatePublicId(),
            createdAt: new Date(),
            updatedAt: new Date(),
            note: 'User created on 2021-01-01',
            type: 'CREATED'
          },
          {
            id: 2,
            publicId: generatePublicId(),
            createdAt: new Date(),
            updatedAt: new Date(),
            note: 'This is a note',
            type: 'MANUAL'
          }
        ]
      }
    }
  });

  console.log('Created customer sale with public id: ', fakeCustomerSale1.publicId);

  const fakeCustomerSaleDownPayment = await prisma.customerSaleDownPayment.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      paymentAmount: 2000,
      paymentAuthorized: true,
      paymentMethod: 'CREDIT_CARD',
      paymentDate: new Date(),
      paymentReferenceId: generatePublicId(),
      paymentAmountCollectedByDealer: 0,
      customerSaleId: 2
    }
  });

  console.log(
    'Created customer sale down payment with public id: ',
    fakeCustomerSaleDownPayment.publicId
  );

  const fakeCustomerSaleInvoice2 = await prisma.customerSaleInvoice.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate: new Date(),
      customerSaleId: 2,
      invoiceAmount: 9500,
      invoiceStatus: 'DUE_SOON',
      producerLocationId: fakeProducerLocation1.id,
      producerAdminId: fakeProducerAdmin.id,
      locationInvoicePaymentId: 1
    }
  });

  console.log(
    'Created customer sale 2 invoice with public id: ',
    fakeCustomerSaleInvoice1.publicId
  );

  const fakeCustomerSale2 = await prisma.customerSale.create({
    data: {
      id: 2,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: fakeCustomer2.id,
      truckId: fakeTruck2.id,
      lienholderId: fakeTruckLienholder.id,
      selectedWarrantyProductId: fakeWarrantyProductSelected.id,
      saleDate: new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
      includedInRetailPrice: false,
      financedDeal: false,
      quotedSalePrice: 10000,
      finalRetailWarrantyPurchasePrice: 9500,
      saleCurrency: 'USD',
      customerSaleDownPaymentId: fakeCustomerSaleDownPayment.id,
      customerSummaryOrDeclinationUrl: 'https://www.example.com',
      customerSaleInvoiceId: fakeCustomerSaleInvoice2.id,
      customerSaleStatus: 'QUOTE',
      producerId: fakeProducer.id,
      producerLocationId: 1,
      producerAdminId: 1,
      expirationDate: new Date()
    }
  });

  console.log('Created customer sale 2 with public id: ', fakeCustomerSale2.publicId);

  const fakeLocationInvoicePayment = await prisma.locationInvoicePayment.create({
    data: {
      id: 1,
      publicId: generatePublicId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      paymentMethod: 'CREDIT_CARD',
      paymentDate: new Date(),
      paymentAmount: 9500,
      producerLocationId: fakeProducerLocation1.id,
      producerAdminId: fakeProducerAdmin.id
    }
  });

  console.log(
    'Created location invoice payment with public id: ',
    fakeLocationInvoicePayment.publicId
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
