import { type IPurchaseLogger } from './Services/PurchaseLogger/IPurchaseLogger.ts';
import { PurchaseLogger } from './Services/PurchaseLogger/PurchaseLogger.ts';
import { type IDataService } from './Services/DataService/IDataService.ts';
import { DataService } from './Services/DataService/DataService.ts';
import { type Purchase } from './Data/Model/Purchase.ts';

const dataService: IDataService = new DataService();
const purchaseLogger: IPurchaseLogger = new PurchaseLogger();

void dataService.FetchData();

const imagePickerIcon = document.getElementById('PreviewImage') as HTMLImageElement;
const imageInput = document.getElementById('ImageFileSelector') as HTMLInputElement;
const InputSubmit = document.getElementById('SubmitButton') as HTMLInputElement;
const form = document.getElementById('form') as HTMLFormElement;

imagePickerIcon.addEventListener('click', function () {
  imageInput.click();
});

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  const filereader = new FileReader();
  filereader.onload = function () {
    imagePickerIcon.src = filereader.result as string;
  };
  filereader.readAsDataURL(file);
});

InputSubmit.addEventListener('click', function () {
  void SubmitPurchase();
});

async function SubmitPurchase (): Promise<void> {
  const formProducTitle = document.getElementById('ProductTitle') as HTMLInputElement;
  const formStoreName = document.getElementById('StoreName') as HTMLInputElement;
  const formProductPrice = document.getElementById('ProductPrice') as HTMLInputElement;
  const formImageFile = document.getElementById('ImageFile') as HTMLInputElement;

  const newproduct: Purchase = {
    isverified: true,
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
    await dataService.FetchData();
  }
}
