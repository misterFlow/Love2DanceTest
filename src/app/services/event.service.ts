import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Event } from '../models/event';
import { Observable } from 'rxjs';
import {SearchComponent} from '../search/search.component'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  itemsCollection: AngularFirestoreCollection<Event>;
  events: Observable<Event[]>;
  //searchStyle: string = "salsa";
  //result: any;
  //events:any;
  dance:any

  constructor(public afstore: AngularFirestore) {

  }


  getEvents() {
    this.events = this.afstore.collection('events').valueChanges();
    //this.events = this.afstore.collection('events').valueChanges();
    //this.events = this.afstore.collection('events').valueChanges({idField:'danceStyle'}) as Observable<Event[]>;
    //this.events = this.afstore.collection<Event[]>('events', (ref) => ref.where('danceStyle','==','salsa'))
    //this.events = this.afstore.collection('events', ref => ref.where('danceStyle',"==",'salsa'));
    //this.afstore.collection=events
    //this.events=this.afstore.collection('events').doc<any>('salsa')

    /*console.log(this.events)
    console.log(this.test)
    console.log(this.test1)*/

    //this.result = this.afstore.collection('events', ref => ref.where('danceStyle','array-contains', 'salsa'));
    //this.events = this.result
    //console.log(this.result)
    return this.events;
  }

  /*getEventsByLocation() {
    this.searchStyle = this.afstore.collection('events', ref => ref.where('danseStyle','==','searchStyle'))
    console.log('new new', this.searchStyle)
  }*/
}
