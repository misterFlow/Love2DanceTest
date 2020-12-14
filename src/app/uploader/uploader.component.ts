import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { CameraService } from '../camera.service';
import { IonButton } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import firebase from 'firebase';
import "firebase/firestore";
"firebase/firestore";


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {

  entityName: string
  eventName: string
  eventAddress: string
  eventDate: Date
  danceStyle: string
  price: string
  eventImage: string
  files: any
  camera: any
  imgUrl: string = null
  selectedFile: File = null

  constructor(
    public afstore: AngularFirestore,
    public user: AuthService,
    private _camera: CameraService,
    private http: HttpClient
  ) { }


  ngOnInit() {
  }

  async takePicture(btn: IonButton) {
    btn.disabled = true;
    this.imgUrl = await this._camera.takePicture();
    btn.disabled = false;
  }

  submitEvent() {
    let Event = {};
    Event['entityName'] = this.entityName;
    Event['eventName'] = this.eventName;
    Event['eventDate'] = this.eventDate;
    Event['danceStyle'] = this.danceStyle;
    Event['price'] = this.price;
    Event['image'] = this.imgUrl;


    this.afstore.collection('users').add(Event);
    console.log(Event);

  }
}
