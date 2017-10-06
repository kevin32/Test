import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey : String = 'b66012fed740b7af';
  url : String;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

  }
    getWeather(location: String){
      return this.http.get(this.url+'/'+location+'.json')
      .map(res => res.json());
  }

}
