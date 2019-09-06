import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/providers/auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public authService: AuthService 
  ) {}

  login(){
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider()).then((data)=>{
      console.log(data);
      this.authService.email=data.user.email;
      console.log(this.authService.email);
      this.navCtrl.navigateRoot('news');
    })
    
  }

}
