import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Calling getweather function
  weather: any;

  //Objekt
  location: {
    location: String;
  }

  constructor(public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
    //Pmst sama mis html5 local storage aga on synced

  }

  //Trigerib, kui komponendid on laetud
  ionViewWillEnter() {
    this.storage.get('location').then((val) => { //ANgular promise? :D wtf is that
      if (val != null) {
        this.location = JSON.parse(val) //Peab salvestama Stringina ehk JSON formaadis
      } else {
        //TODO Google API
        this.location = {
          location: 'Tallinn'
        }
      }



    //Tagastab observable, mis on pmst mingi data stream, ja sellele peame subscribema
    this.weatherProvider.getWeather(this.location.location).
      subscribe(weather => {
        this.weather = weather.current_observation;
      });
    });
  }

}
