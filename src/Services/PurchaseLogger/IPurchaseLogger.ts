import type { Purchase } from '../../Data/Model/Purchase.ts';

export interface IPurchaseLogger {
  AddNewBought(newbought: Purchase): Promise<boolean>
}
