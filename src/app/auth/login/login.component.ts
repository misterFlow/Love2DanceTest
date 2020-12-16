import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
    public alert: AlertController,
    public user: AuthService,
    public afstore: AngularFirestore
    ) { }

  ngOnInit() {
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    })
    await alert.present()
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
        this.showAlert("Error!","User not found")
      }
      if(err.code === "auth/wrong-password") {
        this.showAlert("Error!","Wrong password")
      }
    }
  }

  goToRegister() {
    this.router.navigate(['register'])
  }

}
