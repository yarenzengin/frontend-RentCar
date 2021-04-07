import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44368/api/';
  constructor(private httpClient: HttpClient) {}
  
  getCarsById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbyid?id=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
getImagesByCarId(carId:number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl + "carimages/getimagesbycarid?id=" + carId
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}
}
