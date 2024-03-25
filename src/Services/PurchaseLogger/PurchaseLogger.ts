import { type Purchase } from '../../Data/Model/Purchase.ts';
import axios from 'axios';
import { type IPurchaseLogger } from './IPurchaseLogger.ts';

export class PurchaseLogger implements IPurchaseLogger {
  backendurl = import.meta.env.VITE_BACKENDURL;
  async AddNewBought (newPurchase: Purchase): Promise<boolean> {
    return await axios.post<boolean>('https://myapi.thegenericcompany.xyz/dailybuyer/submitpurchase', newPurchase).then(res => res.data);
  }
}
