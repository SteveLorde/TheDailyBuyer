import type { Product } from '../../Data/Model/Product.ts';

export interface IPurchaseLogger {
  AddNewBought(newbought: Product): Promise<boolean>
}
