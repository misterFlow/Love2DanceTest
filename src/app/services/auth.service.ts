import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: user

  constructor() {
  }

  setUser(user: user) {
    this.user = user;
  }

  getUID() {
    return this.user.uid;
  }
}
