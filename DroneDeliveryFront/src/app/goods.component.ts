import { Component } from "@angular/core";
import { GoodsService } from "./goods.service";

@Component({
    selector: 'goods',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let goodItem of goods">
                {{ goodItem }}
            </li>
        </ul>
        `
})
export class GoodsComponent {
    title = "List of goods"
    goods;

    /**
     *
     */
    constructor(service: GoodsService) {
        this.goods = service.getGoods();
    }
}