import axios from 'axios';
import { type Product } from '../../Data/Model/Product.ts';
import { type IDataService } from './IDataService.ts';

export class DataService implements IDataService {
  cardsArea = document.getElementById('CardsArea') as HTMLDivElement;
  backendUrl: string = import.meta.env.VITE_BACKENDURL;
  products: Product[] = [];

  async FetchData (): Promise<void> {
    this.products = await axios.get(`${this.backendUrl}/getdata`).then(res => res.data);
    if (this.products.length > 0) {
      this.CreateCards();
    }
  }

  CreateCards (): void {
    for (let i = 0; i < this.products.length - 1; i++) {
      const BOUGHTITEM = this.products[i];
      const card = document.createElement('div');
      card.innerHTML = `
        <div class="flex flex-row items-center gap-2">
                <div>
                <img src="${this.backendUrl}/storage/BoughtItems/${BOUGHTITEM.id}/productimage.png" alt="productimage" />
                </div>
                <div class="flex flex-col items-center gap-4">
                    <p class="text-white font-light">${BOUGHTITEM.date}</p>
                    <h3 class="font-bold">${BOUGHTITEM.title}</h3>
                    <div class="flex flex-row items-center gap-4">
                        <p class="font-normal">${BOUGHTITEM.storename}</p>
                        <p class="font-bold">${BOUGHTITEM.price}</p>
                    </div>
                </div>
        </div>
      `;
      this.cardsArea.append(card);
    }
  }
}
