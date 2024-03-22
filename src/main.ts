import { type IPurchaseLogger } from './Services/PurchaseLogger/IPurchaseLogger.ts';
import { PurchaseLogger } from './Services/PurchaseLogger/PurchaseLogger.ts';
import { type IDataService } from './Services/DataService/IDataService.ts';
import { DataService } from './Services/DataService/DataService.ts';

const dataService: IDataService = new DataService();
const purchaseLogger: IPurchaseLogger = new PurchaseLogger();

const InputSubmit = document.getElementById('submit');

InputSubmit.addEventListener('click', function () {

});
