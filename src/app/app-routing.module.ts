import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { UploaderComponent } from './uploader/uploader.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { SplashScreen } from '@capacitor/core';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'uploader',
    component: UploaderComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'splash',
    component: SplashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
