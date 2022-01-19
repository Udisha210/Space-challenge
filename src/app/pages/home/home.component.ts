import { Component, OnInit } from '@angular/core';
import { NasaApiService } from 'src/app/services/nasaAPI.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nasaApi: NasaApiService) { }

  response: any = {
    photos: []
  };
  isClicked =false;
  ngOnInit(): void {
    this.nasaApi.GetDetails().subscribe(res => {
      this.response = res;
    })
  }

}
