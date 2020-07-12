import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces/product';

const API_URL = 'http://localhost:8080/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL, {withCredentials: true});
  }

  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + '/' + id, {withCredentials: true});
  }

  public addProduct(product: Product): Observable<any> {
    return this.httpClient.post(API_URL, product, {withCredentials: true});
  }

  public updateProduct(product: Product): Observable<any> {
    return this.httpClient.put(API_URL, product, {withCredentials: true});
  }

  public deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(API_URL + '/' + id);
  }
}
