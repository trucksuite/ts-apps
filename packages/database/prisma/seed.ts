import { client } from '../client';
import { fakeTsSalesRep } from './seeds/tsSalesRep.seed';
import { fakeProducer, fakeProducer2, fakeProducer3 } from './seeds/producer.seed';
import {
  fakeLocationContact,
  fakeLocationNoteCreated,
  fakeLocationNoteManual,
  fakeLocationWarrantyProductAssigned1,
  fakeLocationWarrantyProductAssigned2,
  fakeLocationWarrantyProductAssigned3,
  fakeLocationWarrantyProductMarkup1,
  fakeLocationWarrantyProductMarkup10,
  fakeLocationWarrantyProductMarkup11,
  fakeLocationWarrantyProductMarkup12,
  fakeLocationWarrantyProductMarkup2,
  fakeLocationWarrantyProductMarkup3,
  fakeLocationWarrantyProductMarkup4,
  fakeLocationWarrantyProductMarkup5,
  fakeLocationWarrantyProductMarkup6,
  fakeLocationWarrantyProductMarkup7,
  fakeLocationWarrantyProductMarkup8,
  fakeLocationWarrantyProductMarkup9,
  fakeLocationWarrantyRatesheetRateOutput,
  fakeProducerAdmin,
  fakeProducerLocation1,
  fakeProducerLocation2,
  fakeProducerLocation3
} from './seeds/location.seed';
import { fakeWarrantyProduct } from './seeds/product.seed';
import {
  fakeWarrantyProductCategory,
  fakeWarrantyProductCategory2
} from './seeds/productCategory.seed';
import { fakeWarrantyAgreement } from './seeds/productAgreement.seed';
import { fakeWarrantyRatesheet, fakeWarrantyRatesheetVoc } from './seeds/ratesheet.seed';
import {
  fakeCustomer1,
  fakeCustomer2,
  fakeTruck1,
  fakeTruck2,
  fakeTruckLienholder
} from './seeds/customer-truck.seed';
import {
  fakeWarrantySignedAgreement,
  fakeWarrantyTermSelected,
  fakeWarrantyOptionsSelected,
  fakeWarrantyProductSelected
} from './seeds/selectedProduct.seed';
import { fakeCustomerSale1, fakeCustomerSale2 } from './seeds/customerSale.seed';
import {
  fakeCustomerSaleInvoice1,
  fakeCustomerSaleDownPayment,
  fakeLocationInvoicePayment
} from './seeds/invoice.seed';

async function main() {
  console.log(`Start seeding ...`);
  console.log('Created sales rep with public id: ', fakeTsSalesRep.publicId);
  console.log('Created producer with public id: ', fakeProducer.publicId);
  console.log('Created producer with public id: ', fakeProducer2.publicId);
  console.log('Created producer with public id: ', fakeProducer3.publicId);
  console.log('Created producer location with public id: ', fakeProducerLocation1.publicId);
  console.log('Created producer location with public id: ', fakeProducerLocation2.publicId);
  console.log('Created producer location with public id: ', fakeProducerLocation3.publicId);
  console.log(
    'Created warranty product category with public id: ',
    fakeWarrantyProductCategory.publicId
  );
  console.log(
    'Created warranty product category with public id: ',
    fakeWarrantyProductCategory2.publicId
  );
  console.log('Created warranty product with public id: ', fakeWarrantyProduct.publicId);
  console.log('Created warranty agreement with public id: ', fakeWarrantyAgreement.publicId);

  console.log(
    'Created ratesheet rate output with public id: ',
    fakeLocationWarrantyRatesheetRateOutput.publicId
  );
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
  console.log('Created producer admin with public id: ', fakeProducerAdmin.publicId);
  console.log('Created location contact with public id: ', fakeLocationContact.publicId);
  console.log('Created location note with public id: ', fakeLocationNoteCreated.publicId);
  console.log('Created location note with public id: ', fakeLocationNoteManual.publicId);
  console.log('Created warranty ratesheet with public id: ', fakeWarrantyRatesheet.publicId);
  console.log('Created warranty ratesheet with public id: ', fakeWarrantyRatesheetVoc.publicId);
  console.log('Created customer with public id: ', fakeCustomer1.publicId);
  console.log('Created customer with public id: ', fakeCustomer2.publicId);
  console.log('Created truck with public id: ', fakeTruck1.publicId);
  console.log('Created truck with public id: ', fakeTruck2.publicId);
  console.log('Created truck lienholder with public id: ', fakeTruckLienholder.publicId);
  console.log('Created signed agreement with public id: ', fakeWarrantySignedAgreement.publicId);
  console.log(
    'Created warranty options selected with public id: ',
    fakeWarrantyOptionsSelected.publicId
  );
  console.log('Created warranty term selected with public id: ', fakeWarrantyTermSelected.publicId);
  console.log(
    'Created warranty product selected with public id: ',
    fakeWarrantyProductSelected.publicId
  );
  console.log(
    'Created customer sale 1 invoice with public id: ',
    fakeCustomerSaleInvoice1.publicId
  );
  console.log('Created customer sale with public id: ', fakeCustomerSale1.publicId);
  console.log(
    'Created customer sale down payment with public id: ',
    fakeCustomerSaleDownPayment.publicId
  );
  console.log(
    'Created customer sale 2 invoice with public id: ',
    fakeCustomerSaleInvoice1.publicId
  );
  console.log('Created customer sale 2 with public id: ', fakeCustomerSale2.publicId);
  console.log(
    'Created location invoice payment with public id: ',
    fakeLocationInvoicePayment.publicId
  );
}

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
