import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
//import firebase from 'firebase';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  items: Item[];
  //firestore = firebase.storage();
  //imgsource: any;

  constructor(
    private itemService: ItemService,
    //public zone: NgZone
    ) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    })
  }

  /*display() {
    this.firestore.ref().child('image').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
       })
    })
  }*/

}
