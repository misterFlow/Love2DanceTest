import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UploaderComponent } from './uploader/uploader.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SplashComponent } from './splash/splash.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    UploaderComponent,
    HomeComponent,
    ResultComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase, 'Love2DanceTest'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAR5GdtQfvCKkQtcYgC-3TUaz4BvlM6DE'
    }),
    GooglePlaceModule
  ],
  providers: [], //no use maybe, check
  bootstrap: [AppComponent] //APpComponent to be charged first no-link to Bootstrap librairy
})
export class AppModule { }
