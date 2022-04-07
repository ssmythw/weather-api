import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weatherAPI';
  location: string = '';
  condition: string = '';
  conditionImg: string = '';
  celcius: string = '';
  wind_kph: string = '';
  precip_mm: string = '';
  pressure_mb: string = '';

  async onSubmit(form: any) {
    let response = await this.getDataService.sendRequest(form.postalCode);
    this.location = response.location.name;
    let current = response.current;
    this.condition = current.condition.text;
    this.conditionImg = current.condition.icon;

    this.celcius = current.feelslike_c;
    this.wind_kph = current.wind_kph;
    this.precip_mm = current.precip_mm;
    this.pressure_mb = current.pressure_mb;
  }

  constructor(private getDataService: GetDataService) {
    this.onSubmit({ postalCode: 'London' });
  }
}
