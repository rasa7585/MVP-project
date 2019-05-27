import { Component, OnInit } from '@angular/core';
import { AdminPage } from 'src/app/pages/admin/admin.page';
import { Router } from '@angular/router';
import { AceService } from 'src/app/services/ace.service';
import { AlertController } from '@ionic/angular';
import { AddcategorymodalComponent } from 'src/app/components/addcategorymodal/addcategorymodal.component';
// import { DatabaseService, Dev } from 'src/app/services/database.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  // adminPage = new AdminPage();
  // categories: Dev[] = [];
  categoryList: any;
  constructor(
    private aceServic: AceService, 
    private alertController: AlertController, 
    private router: Router, 
  ) { }

  ngOnInit() {

    // this.db.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.db.getDevs().subscribe(devs => {
    //       this.categories = devs;
    //       console.log(devs);
    //     })
    //     // this.products = this.db.getProducts();
    //   }
    // });

    this.aceServic.getData('categories/all').subscribe(data=>{
      this.categoryList = data;
    });
  }

  async presentAlertPrompt() {
    
    const alert = await this.alertController.create({
      header: 'Add Category',
      cssClass:"alertClass",      
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Category Name'
        },
        {
          name: 'sort',
          type: 'text',
          placeholder: 'Category Sort'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  addCategory(){
    this.presentAlertPrompt();
  }

}
