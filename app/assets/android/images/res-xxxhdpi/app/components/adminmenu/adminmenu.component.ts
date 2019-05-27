import { Component, OnInit } from '@angular/core';
import { AdminPage } from 'src/app/pages/admin/admin.page';
import { Router } from '@angular/router';
import { PasswordComponent } from 'src/app/components/password/password.component';
import { AlertController } from '@ionic/angular';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.scss'],
})
export class AdminmenuComponent implements OnInit {
  
 
  constructor(private router: Router, public alertController: AlertController) { }
  passwordComponent = new PasswordComponent(this.alertController);
  languageComponent = new LanguageComponent(this.alertController);
  adminPage = new AdminPage(this.router, this.alertController);
  ngOnInit() {}

  showProducts(){
    this.adminPage.selectedPage = "products";
    // this.adminPage.showAlert();
    // alert(this.adminPage.selectedPage);
    // this.router.navigateByUrl('admin');
  }

  showCategories(){
    this.adminPage.selectedPage = "categories";
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
