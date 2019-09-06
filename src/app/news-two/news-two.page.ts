import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/providers/api.service';

@Component({
  selector: 'app-news-two',
  templateUrl: './news-two.page.html',
  styleUrls: ['./news-two.page.scss'],
})
export class NewsTwoPage implements OnInit {
  news: any;
  constructor(
    public apiService: ApiService
  ) { }


  ngOnInit() {
    this.apiService.getNews().subscribe((data) => {
      this.news = data['data']
      console.log(this.news)
    },
      (error) => {
        console.error(error)
      })
  }

}
