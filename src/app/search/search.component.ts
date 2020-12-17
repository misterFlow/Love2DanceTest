import { Component, OnInit, ViewChild  } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { map } from 'rxjs/operators';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { Event } from '../models/event';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  events: Event[];
  latitude : number;
  longitude : number;
  searchStyle: string
  searchDate: string
  searchAddress: any
  formattedAddress = "";

  options = {
    componentRestrictions : {
      country: ['CH','FR','DE','IT']
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
    public afstore: AngularFirestore,
    public router: Router,
    private eventService: EventService
  ) {}

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

  getValue() {
    console.log('searchStyle', this.searchStyle)
    return this.searchStyle
  }

  readItems() {
    this.eventService.getEvents().subscribe(events => {
      console.log(events);
      this.events = events;
    })
    console.log(this.searchStyle)
  }

}
