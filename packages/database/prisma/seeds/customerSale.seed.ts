import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';
import {
  fakeCustomer1,
  fakeTruck1,
  fakeTruckLienholder,
  fakeCustomer2,
  fakeTruck2
} from './customer-truck.seed';
import {
  fakeCustomerSaleInvoice1,
  fakeCustomerSaleDownPayment,
  fakeCustomerSaleInvoice2
} from './invoice.seed';
import { fakeProducer } from './producer.seed';
import { fakeWarrantyProductSelected } from './selectedProduct.seed';

export const fakeCustomerSale1 = await client.customerSale.create({
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

export const fakeCustomerSale2 = await client.customerSale.create({
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
