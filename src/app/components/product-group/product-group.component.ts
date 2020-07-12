import { Component, OnInit } from '@angular/core';
import {ProductGroupService} from '../../services/product-group.service';
import {ProductGroup} from '../../interfaces/product-group';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  productGroups: ProductGroup[] = [];

  constructor(private productGroupService: ProductGroupService) { }

  ngOnInit(): void {
  }

}
