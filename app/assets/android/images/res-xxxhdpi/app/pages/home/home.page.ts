import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/services/ace.service';
import { LoginalertComponent } from 'src/app/components/loginalert/loginalert.component';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FooditemComponent } from 'src/app/components/fooditem/fooditem.component';
import { forEach } from '@angular/router/src/utils/collection';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categoryList: any;
  catName:String;
  foodList:any;
  count:number;
  view:String = "grid";
  details: String = "hide";
  review: String = "hide";
  vote: String = "empty";
  vote2: String = "empty";
  vote3: String = "empty";
  vote4: String = "empty";
  vote5: String = "empty";
  foodDetails:any;
  constructor(
    public alertController: AlertController, 
    private router:Router, 
    public aceService: AceService,
    public modalController: ModalController
  ){}
  
  // foodComponent = new FooditemComponent(this.aceService);
  // foodCount: any;
  ngOnInit(){
    this.getMenu();
    this.getFood('all');
  }

  getFood(category){
    if(category == 'all'){
      this.aceService.getData('products/all').subscribe(data=>{
        this.foodList = data;
        this.count = data.length;
        // alert(data.length);
        console.log();
      });
    }else{
       this.aceService.getData(`products/getByCategory/${category}`).subscribe(data=>{
        this.foodList = data;
        // alert(data.length);
        this.count = data.length;
        console.log(data);
      });
    }
    
  }

  getMenu(){
    this.aceService.getData('categories/all').subscribe(data=>{
      this.categoryList = data;
    });
  }

  showItemByCategory(category){
    // alert(category);
    this.catName = category;
    this.getFood(category);
    // this.foodComponent.getFood(category);
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Enter Password!',
      cssClass: 'loginAlert',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Please enter your password!'
        }
      ],
      buttons: [
        {
          text: 'Login',
          handler: () => {
            this.router.navigateByUrl('admin');
          }
        }
      ]
    });

    await alert.present();
  }

  showLogin(){
    this.presentAlertPrompt();
  }

  changeView(){
    if(this.view == "grid"){
      this.view = "list";
    }else{
      this.view = "grid";
    }
  }

  showDetails(id){
    this.details = "show";
    this.aceService.getData(`products/getProductById/${id}`).subscribe(data=>{
      this.foodDetails = data;
      // alert(data);
    
    });
  }

  hideSideMenu(){
    this.details = "hide";
  }

  showReview(){
    this.review = "show";
    this.details = "hide";
    // alert(this.review);

  }

  close(){
    this.review = "hide";
    // alert(this.review);
  }

  star1(){
    if(this.vote == 'empty'){
      this.vote = "full";
    }else{
      this.vote = "empty";
      this.vote2 = "empty";
      this.vote3 = "empty";
      this.vote4 = "empty";
      this.vote5 = "empty";
    }
    
  }

  star2(){
    if(this.vote2 == "empty"){
      this.vote2 = "full";
      this.vote = "full";
    }else{
      this.vote2 = "empty";
      this.vote3 = "empty";
      this.vote4 = "empty";
      this.vote5 = "empty";
    }
  }

}