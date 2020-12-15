import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

export interface user {
  email: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: user;

  constructor() {
  }

  setUser(user: user) {
    this.user = user;
  }

  getUID() {
    return this.user.uid;
  }
}
