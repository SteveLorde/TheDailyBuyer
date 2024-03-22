import { type IPurchaseLogger } from './Services/PurchaseLogger/IPurchaseLogger.ts';
import { PurchaseLogger } from './Services/PurchaseLogger/PurchaseLogger.ts';
import { type IDataService } from './Services/DataService/IDataService.ts';
import { DataService } from './Services/DataService/DataService.ts';
import { type Product } from './Data/Model/Product.ts';

const dataService: IDataService = new DataService();
const purchaseLogger: IPurchaseLogger = new PurchaseLogger();

void dataService.FetchData();

const InputSubmit = document.getElementById('submit') as HTMLInputElement;
const form = document.getElementById('form') as HTMLFormElement;

InputSubmit.addEventListener('submit', function () {
  void SubmitPurchase();
});

async function SubmitPurchase (): Promise<void> {
  const formProducTitle = document.getElementById('ProductTitle') as HTMLInputElement;
  const formStoreName = document.getElementById('StoreName') as HTMLInputElement;
  const formProductPrice = document.getElementById('ProductPrice') as HTMLInputElement;
  const formImageFile = document.getElementById('ImageFile') as HTMLInputElement;

  const newproduct: Product = {
    id: 0,
    title: formProducTitle.value,
    storename: formStoreName.value,
    price: parseInt(formProductPrice.value),
    // @ts-expect-error TEST FOR FILE
    imagefile: formImageFile.files[0],
    imagename: '',
    date: Date.now().toString()
  };
  const check = await purchaseLogger.AddNewBought(newproduct);
  if (check) {
    form.reset();
  }
}
