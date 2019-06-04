import { Component, OnInit } from '@angular/core';
import { ApodService } from '../services/apod.service';
import { InvalidRequest } from '../common/invalidrrequest.error';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apodService: ApodService) { }

  pictureOftheDay;
  loadingImage = '../../assets/loading.gif';
  ngOnInit() {    
    this.apodService.getAPOD()
    .subscribe((data)=>{
      this.pictureOftheDay = data;
      console.log("Picture of the day : ", this.pictureOftheDay)
      },(error)=>{
      if(error instanceof InvalidRequest){
        console.log("Invalid Request");
      }
      else{
        console.log("Generic Error");
      }
    })      
  }

}
