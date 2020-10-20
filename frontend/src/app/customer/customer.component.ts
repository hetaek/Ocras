import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  // this is mock for my data, it's probably unnecesarry
  items: any = [
    {
      item: "Lobster",
      price: "$25.99"
    },
    {
      item: "Beef Steak",
      price: "$11.39"
    },
    {
      item: "Fried cocroach",
      price: "$22.29"
    },
    {
      item: "Lobster fresh",
      price: "$52.99"
    },
    {
      item: "Bat soup",
      price: "$6monthsofquarantine"
    },
  ];

  // this is where selected items are pushed
  selectedItems = [];

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    let backgr = document.querySelector('#background-content')
    console.log(backgr);
    
    this.getMenu();
  }

  // I'm still not entirely sure why this works. - P
  orders
  menu
  
  // Not needed by this part of the app.
  // getOrders = () => {
  //   this.crudService.getOrders()
  //       .subscribe(res => {
  //       this.orders = res.map((snapshot) => (snapshot.payload.doc.data()));
  //       console.log(this.orders)
  // })
  // }

  getMenu = () => {
    this.crudService.getMenu()
        .subscribe(res => {
        this.menu = res.map((snapshot) => (snapshot.payload.doc.data()));
        console.log(this.menu)
  })
  }
  
  createNewOrders(): void {
    const orders = this.crudService.createNewOrder();
    console.log(orders)
  }

  //Not required
  handleClick(event): void {
    this.selectedItems.push(event.currentTarget.childNodes[0].childNodes[0].innerHTML);
    event.currentTarget.style.backgroundColor = '#abcdeb';
    event.currentTarget.style.transform = `rotate(${Math.floor(Math.random() * (4 - -4) + -4)}deg) translateX(-15%)`;
    console.log(event.currentTarget.childNodes[0].childNodes[0]);
  }
}
