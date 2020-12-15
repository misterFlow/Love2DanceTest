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

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  latitude : number;
  longitude : number;
  //latitude = 46.191245166604446;
  //longitude = 6.135809955994405;

  searchStyle: string
  searchDate: string
  searchAddress: any

  formattedAddress = "";

  options = {
    componentRestrictions : {
      country: ['CH']
    }
  }

  public handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
  }

  onChoseLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  constructor(
    public afstore: AngularFirestore
  ) { }

  ngOnInit() {
    if(!navigator.geolocation) {
      console.log('Location is not supported')
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
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
