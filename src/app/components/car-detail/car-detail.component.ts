import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
car:Car[]=[]
carImages:CarImage[]=[]
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarsById(params["carId"])
        this.getImagesByCarId(params["carId"])
      }
    })
  }
getCarsById(carId:number){
  this.carDetailService.getCarsById(carId).subscribe(response => {
   this.car = response.data
  })
}
getImagesByCarId(carId:number){
  this.carDetailService.getImagesByCarId(carId).subscribe(response=>{
    this.carImages = response.data
    console.log(response.data)
  })
}


}
