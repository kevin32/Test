import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  location: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('location').then((val) => {
      if (val != null) {
        let location = JSON.parse(val);
        this.location = location.location;
      } else {
        this.location = "Tartu";
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location = {
      location: this.location
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
