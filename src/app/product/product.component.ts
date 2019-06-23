import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../store/market';
import {Product} from '../store/product.model';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as Cart from './../store/actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              private store: Store<Product>) {
  }

  ngOnInit() {
    this.route.params.subscribe((p) => {

      const result = Array.prototype.filter.call(PRODUCTS, (v) => v.id == p.id);
      if (result.length > 0) {
        this.product = result[0];
      }
    });
  }

  addToCart(product) {
    this.store.dispatch(new Cart.AddProduct(product));
  }
}
