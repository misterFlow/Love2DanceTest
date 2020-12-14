import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { environment } from '../../environments/environment';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../services/item.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  latitude = 46.191245166604446;
  longitude = 6.135809955994405;

  searchStyle: string
  searchDate: string
  searchAddress: any

  onChoseLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  constructor(
    public afstore: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  /*searchEvent() {
    var docRef = db.collection("users").doc();
    let Event = {};
    this.searchDate = Event['eventDate'];
    this.searchStyle = Event['danceStyle'];

    this.afstore.collection('users').get().then( function () {
      console.log(doc.data());
      console.log(Event['eventName'], Event['eventStyle'], Event['eventDate']);
    });

  }*/

  readItems() {}
}
