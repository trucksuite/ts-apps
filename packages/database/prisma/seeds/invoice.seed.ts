import { generatePublicId } from '@repo/utils/public-id';
import { client } from '../../client';
import { fakeProducerLocation1, fakeProducerAdmin } from './location.seed';

export const fakeCustomerSaleInvoice1 = await client.customerSaleInvoice.create({
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

export const fakeCustomerSaleInvoice2 = await client.customerSaleInvoice.create({
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

export const fakeCustomerSaleDownPayment = await client.customerSaleDownPayment.create({
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

export const fakeLocationInvoicePayment = await client.locationInvoicePayment.create({
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
