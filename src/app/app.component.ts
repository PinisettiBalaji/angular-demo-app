import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  latestProducts = [{
    "id": 1,
    "name": "Bananas",
    "description": "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
    "price": 53,
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 2,
    "name": "Sea Bass - Whole",
    "description": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
    "price": 60,
    "thumbnail": "http://dummyimage.com/250x250.png/cc0000/ffffff"
  }, {
    "id": 3,
    "name": "Fish - Soup Base, Bouillon",
    "description": "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris",
    "price": 59,
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  }, {
    "id": 4,
    "name": "Bread - Focaccia Quarter",
    "description": "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis",
    "price": 31,
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  }, {
    "id": 5,
    "name": "Water - Tonic",
    "description": "proin eu mi nulla ac enim in tempor turpis nec",
    "price": 57,
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  }, {
    "id": 6,
    "name": "Hold Up Tool Storage Rack",
    "description": "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
    "price": 17,
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 7,
    "name": "Zucchini - Mini, Green",
    "description": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac",
    "price": 67,
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 8,
    "name": "Sping Loaded Cup Dispenser",
    "description": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at",
    "price": 54,
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
  }, {
    "id": 9,
    "name": "Beef - Striploin",
    "description": "leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue",
    "price": 88,
    "thumbnail": "http://dummyimage.com/250x250.png/dddddd/000000"
  }, {
    "id": 10,
    "name": "Cocoa Feuilletine",
    "description": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet",
    "price": 57,
    "thumbnail": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
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
