import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  url: string = 'http://api.weatherapi.com/v1/current.json';

  sendRequest(postalCode: any) {
    let response = fetch(
      this.url + `?key=71eac67a0ab341a68f8204526220504&q=${postalCode}&aqi=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return response;
  }

  constructor() {}
}
