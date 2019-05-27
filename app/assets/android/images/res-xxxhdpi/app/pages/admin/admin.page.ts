import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PasswordComponent } from 'src/app/components/password/password.component';
import { LanguageComponent } from 'src/app/components/language/language.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  selectedPage = 'categories';
  constructor(public router: Router, private alertController: AlertController) { }
  passwordComponent = new PasswordComponent(this.alertController);
  languageComponent = new LanguageComponent(this.alertController);

  ngOnInit() {
  }

  showAlert(){
    alert(this.selectedPage);
  }

  logout(){
    this.router.navigateByUrl('home');
  }




  showProducts(){
    this.selectedPage = "products";
    // this.adminPage.showAlert();
    // alert(this.adminPage.selectedPage);
    // this.router.navigateByUrl('admin');
  }

  showCategories(){
    this.selectedPage = "categories";
    // alert(this.adminPage.selectedPage);
    // this.router.navigateByUrl('categories');
    // this.adminPage.showAlert();
  }

  changePassword(){
    this.passwordComponent.changePass();
  }


  showLanguage(){
    this.languageComponent.showLanguageList();
  }





}
