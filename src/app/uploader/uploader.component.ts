import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
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
import { CameraResultType, Plugins } from '@capacitor/core';
"firebase/firestore";
import { user } from '../models/user';


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
  imgUrl: any = null
  //selectedFile: File = null

  constructor(
    public afstore: AngularFirestore,
    public user: AuthService,
    private _camera: CameraService,
    private http: HttpClient,
    private storage: AngularFireStorage,
  ) { }


  ngOnInit() {
  }

  async takePicture(btn: IonButton) {
    btn.disabled = true;
    this.imgUrl = await this._camera.takePicture();
    btn.disabled = false;

    /*const image: any = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    }).catch(
      err => {
        console.log('error =>' , err)
      }
    );
    const imagename = Date.now() + '.' + image.format; //use maybe user ID instead
    console.log('Image : ', imagename, ' => ', image.base64String);
    const upload = this.storage.ref('eventPictures').child(imagename).putString(image.base64String, 'base64', {contentType: 'image/' + image.format});
    console.log('upload => ', upload);*/
  }

  submitEvent() {
    let Event = {};
    Event['entityName'] = this.entityName;
    Event['eventName'] = this.eventName;
    Event['eventDate'] = this.eventDate;
    Event['danceStyle'] = this.danceStyle;
    Event['eventAddress'] = this.eventAddress;
    Event['price'] = this.price;
    Event['image'] = this.imgUrl;


    this.afstore.collection('events').add(Event);
    console.log(Event);

  }


}
