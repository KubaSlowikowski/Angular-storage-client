import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductGroup} from '../interfaces/product-group';

const API_URL = 'http://localhost:8080/groups';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {

  constructor(private httpClient: HttpClient) { }

  public getAllProductGroups(): Observable<ProductGroup[]> {
    return this.httpClient.get<ProductGroup[]>(API_URL, {withCredentials: true});
  }

  public getProductGroupById(id: number): Observable<ProductGroup> {
    return this.httpClient.get<ProductGroup>(API_URL + '/' + id, {withCredentials: true});
  }

  public addProductGroup(productGroup: ProductGroup): Observable<any> {
    return this.httpClient.post(API_URL, productGroup, {withCredentials: true});
  }

  public updateProductGroup(productGroup: ProductGroup): Observable<any> {
    return this.httpClient.put(API_URL, productGroup, {withCredentials: true});
  }

  public deleteProductGroup(id: number): Observable<any> {
    return this.httpClient.delete(API_URL + '/' + id);
  }
}
