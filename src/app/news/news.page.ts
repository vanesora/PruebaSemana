import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/providers/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService 
    ) {}

  ngOnInit() {
  }

  goNewsTwo(){
    this.navCtrl.navigateForward('news-two');
  }

  goNewsOne(){
    this.navCtrl.navigateForward('news-one');
  }



}
