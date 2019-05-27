import { Component, OnInit } from '@angular/core';
import { AdminPage } from 'src/app/pages/admin/admin.page';
import { Router } from '@angular/router';
import { AceService } from 'src/app/services/ace.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // adminPage = new AdminPage();
  productList: any;
  constructor(private aceService: AceService) { }

  ngOnInit() {
    this.aceService.getData('products/all').subscribe(data=>{
      this.productList = data;
      console.log(data);
    });
  }

}
