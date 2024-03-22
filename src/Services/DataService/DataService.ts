import axios from 'axios';
import { type Product } from '../../Data/Model/Product.ts';
import { type IDataService } from './IDataService.ts';

export class DataService implements IDataService {
  cardsArea = document.getElementById('CardsArea');
  backendUrl: string = import.meta.env.VITE_BACKENDURL;
  products: Product[] = [];

  async FetchData (): Promise<void> {
    this.products = await axios.get(`${this.backendUrl}/getdata`).then(res => res.data);
    if (this.products.length > 0) {
      this.CreateCards();
    }
  }

  CreateCards (): void {
    for (let i = 0; i < this.products.length; i++) {
      const BOUGHTITEM = this.products[i];
      let card = document.createElement('div');
      let cardimage = document.createElement('img');
      cardimage.src = `${this.backendUrl}/storage/BoughtItems/${BOUGHTITEM.id}/productimage.png`;
      cardimage.alt = 'productimage';
      let cardtitle = document.createElement('h3');
      let carddescription = document.createElement('div');
      let storename = document.createElement('p');
      let productprice = document.createElement('p');
      carddescription.append(storename);
      carddescription.append(productprice);

    }
  }
}
