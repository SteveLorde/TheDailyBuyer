import { type Product } from '../../Data/Model/Product.ts';
import axios from 'axios';
import { type IPurchaseLogger } from './IPurchaseLogger.ts';

export class PurchaseLogger implements IPurchaseLogger {
  backendurl = import.meta.env.VITE_BACKENDURL;
  async AddNewBought (newbought: Product): Promise<boolean> {
    return await axios.post(`${this.backendurl}/addbought`, newbought).then(res => res.data);
  }
}
