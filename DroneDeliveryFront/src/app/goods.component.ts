import { Component } from "@angular/core";

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
    goods = ["goodsItem1", "goodsItem2", "goodsItem3"];
}