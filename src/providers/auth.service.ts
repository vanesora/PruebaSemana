import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string;

  constructor( public afAuth: AngularFireAuth,) { }

  isAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}
