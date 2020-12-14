import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public user: AuthService,
    public afstore: AngularFirestore
    ) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password)

      if(res.user) {
          this.user.setUser({
            email,
            uid: res.user.uid
          })
          this.router.navigate(['home'])
      }

    } catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found") {
        console.log("User not found")
      }
      if(err.code === "auth/wrong-password") {
        console.log("Wrong password")
      }
    }
  }

  goToRegister() {
    this.router.navigate(['register'])
  }

}
