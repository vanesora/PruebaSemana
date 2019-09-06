import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(public navCtrl: NavController,) {}

  ngOnInit() {
  }

  goNewsTwo(){
    this.navCtrl.navigateForward('news-two');
  }

  goNewsOne(){
    this.navCtrl.navigateForward('news-one');
  }



}
