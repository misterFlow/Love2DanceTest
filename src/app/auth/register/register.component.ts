import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  uid: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public user: AuthService,
    public afstore: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  async register() {
    const { email, password, cpassword } = this
    if(password !== cpassword) {
      this.showAlert("Error!", "Passwords don't match")
      return console.error("Passwords don't match")
    }

    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)


      this.afstore.doc(`users/${res.user.uid}`).set({
        email,
      })

      this.showAlert("Success!", "Welcome aboard")
      this.router.navigate(['home'])
  } catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    })
    await alert.present()
  }

  backToLogin() {
    this.router.navigate(['login'])
  }
}
