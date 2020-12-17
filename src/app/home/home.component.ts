import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut();
    this.router.navigate(['login'])
  }

  goToSearch () {
    this.router.navigate(['search'])
  }
}
