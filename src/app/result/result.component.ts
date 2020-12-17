import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { Router } from '@angular/router';
import { pathToFileURL } from 'url';
import firebase from 'firebase';
import { createStorageRef } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-result',
  //template: '<img [src]="image"/>',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  //events$: Observable<Event[]> = null;

  //image: any;
  events: Event[];
  //events:any;
  //test: any
  //test1:any
  //query: any
  //dance:any
  //result:Event[]
  searchStyle: any;
  /*storageRef: any = firebase.storage().ref();
  imageRef: any = this.storageRef.child('eventPictures');
  fineName: string = '1608118608790jpg';
  storage = firebase.storage();
  pathReference = this.storage.ref('1608118608790jpg');
  gsReference = this.storage.refFromURL('gs://love2dance-89110.appspot.com/eventPictures/1608118608790jpg');*/


  constructor(
    private eventService: EventService,
    public router: Router,
    public afstore: AngularFirestore,
    //public searchC: SearchComponent
    ) {
      //danceChosen = this.searchStyle;
      //const storageRef = firebase.storage().ref().child('1608118608790jpg');
      //storageRef.getDownloadURL().then(url => this.image = url);
    }

  ngOnInit() {
    //this.events = events;
    //showing all events from cloud firestore
    this.eventService.getEvents().subscribe(events => {
      console.log(events);
      this.events = events;
    })
    console.log(this.searchStyle)
  }

  backToSearch () {
    this.router.navigate(['search']);
  }
}
