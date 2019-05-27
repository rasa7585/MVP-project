import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {


  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.changePass();
  }

  async changePass() {
    const alert = await this.alertController.create({
      header: 'Change Password',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'New Password'
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Re-type Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Save',
          handler: data =>{
            if(data.password == data.confirmPassword){
              console.log('successfully changed! ');
            }
        }
        }
      ]
    });

    await alert.present();
  }

  changePassword(){
    this.changePass();
  }

}
