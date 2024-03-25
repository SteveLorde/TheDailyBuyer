import axios from 'axios';
import { type Purchase } from '../../Data/Model/Purchase.ts';
import { type IDataService } from './IDataService.ts';

export class DataService implements IDataService {
  cardsArea = document.getElementById('CardsArea') as HTMLDivElement;
  backendUrl: string = import.meta.env.VITE_BACKENDURL;
  purchases: Purchase[] = [];

  async FetchData (): Promise<void> {
    this.purchases = await axios.get<Purchase[]>('https://myapi.thegenericcompany.xyz/dailybuyer/getpurchases').then(res => res.data);
    if (this.purchases.length > 0) {
      this.CreateCards();
    }
  }

  CreateCards (): void {
    for (let i = 0; i < this.purchases.length; i++) {
      const purchase = this.purchases[i];
      const card = document.createElement('div');
      card.innerHTML = `
        <div class="flex flex-row items-center gap-2 rounded-2xl">
                <div>
                <img src="https://myapi.thegenericcompany.xyz/storage/BoughtItems/${purchase.id}/productimage.png" alt="productimage" />
                </div>
                <div class="flex flex-col items-center gap-4">
                    <p class="text-white font-light">${purchase.date}</p>
                    <h3 class="font-bold">${purchase.title}</h3>
                    <div class="flex flex-row items-center gap-4">
                        <p class="font-normal">${purchase.storename}</p>
                        <p class="font-bold">${purchase.price}</p>
                    </div>
                </div>
        </div>
      `;
      this.cardsArea.append(card);
    }
  }
}
