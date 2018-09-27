import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../_models';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Product[]>(`${environment.apiUrl}/products`);
    }

    // getById(id: number) {
    //     return this.http.get(`${environment.apiUrl}/users/` + id);
    // }

    // register(user: Product) {
    //     return this.http.post(`${environment.apiUrl}/users/register`, user);
    // }

    // update(user: Product) {
    //     return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${environment.apiUrl}/users/` + id);
    // }
}