import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

  language = 'english';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.showLanguageList();
  }

  async showLanguageList() {
    const alert = await this.alertController.create({
      header: 'Select Language',
      inputs: [
        {
          name: 'english',
          type: 'radio',
          label: 'English',
          value: 'english',
          checked: true
        },
        {
          name: 'arabic',
          type: 'radio',
          label: 'Arabic',
          value: 'arabic'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: data => {
            console.log(JSON.stringify(data));
            // this.storage.set('lang', JSON.stringify(data));
            
          }
        }
      ]
    });

    await alert.present();
  }

}
