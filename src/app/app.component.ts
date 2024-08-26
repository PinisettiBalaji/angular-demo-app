import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  latestProducts = [{
    "id": 1,
    "name": "Pimento - Canned",
    "price": 20,
    "description": "massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum"
  }, {
    "id": 2,
    "name": "Lemonade - Strawberry, 591 Ml",
    "price": 95,
    "description": "quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo"
  }, {
    "id": 3,
    "name": "Nescafe - Frothy French Vanilla",
    "price": 50,
    "description": "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque"
  }, {
    "id": 4,
    "name": "Prunes - Pitted",
    "price": 24,
    "description": "viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus"
  }, {
    "id": 5,
    "name": "Wine - Fino Tio Pepe Gonzalez",
    "price": 94,
    "description": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum"
  }, {
    "id": 6,
    "name": "Soap - Mr.clean Floor Soap",
    "price": 37,
    "description": "non pretium quis lectus suspendisse potenti in eleifend quam a odio in"
  }, {
    "id": 7,
    "name": "Kippers - Smoked",
    "price": 78,
    "description": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus"
  }, {
    "id": 8,
    "name": "Mudslide",
    "price": 6,
    "description": "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus"
  }, {
    "id": 9,
    "name": "Containter - 3oz Microwave Rect.",
    "price": 20,
    "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus"
  }, {
    "id": 10,
    "name": "Lamb - Whole Head Off,nz",
    "price": 39,
    "description": "interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus"
  }]



  topProducts = [{
    "id": 1,
    "name": "Sandwich Wrap",
    "price": 68,
    "description": "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at"
  }, {
    "id": 2,
    "name": "Truffle Cups - Red",
    "price": 99,
    "description": "aenean sit amet justo morbi ut odio cras mi pede"
  }, {
    "id": 3,
    "name": "Cake - Cake Sheet Macaroon",
    "price": 91,
    "description": "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit"
  }, {
    "id": 4,
    "name": "Pasta - Angel Hair",
    "price": 48,
    "description": "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend"
  }, {
    "id": 5,
    "name": "Evaporated Milk - Skim",
    "price": 25,
    "description": "ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus"
  }, {
    "id": 6,
    "name": "Lettuce - Green Leaf",
    "price": 37,
    "description": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et"
  }, {
    "id": 7,
    "name": "Sproutsmustard Cress",
    "price": 67,
    "description": "consequat in consequat ut nulla sed accumsan felis ut at dolor quis"
  }, {
    "id": 8,
    "name": "Veal - Nuckle",
    "price": 62,
    "description": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat"
  }, {
    "id": 9,
    "name": "Wine - Touraine Azay - Le - Rideau",
    "price": 74,
    "description": "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae"
  }, {
    "id": 10,
    "name": "Pastry - Apple Muffins - Mini",
    "price": 42,
    "description": "vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia"
  }]

}
