import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';

export const fakeCustomer1 = await client.customer.create({
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

export const fakeCustomer2 = await client.customer.create({
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

export const fakeTruck1 = await client.truck.create({
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

export const fakeTruck2 = await client.truck.create({
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

export const fakeTruckLienholder = await client.truckLienholder.create({
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
