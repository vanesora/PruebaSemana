import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/providers/api.service';

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.page.html',
  styleUrls: ['./news-one.page.scss'],
})
export class NewsOnePage implements OnInit {
  news: any;
  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      this.news=data['data']
      console.log(this.news)
    }, 
    (error)=>{
      console.error(error)
    })
  }

}
