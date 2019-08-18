import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URLS } from '../config/api.url.config';
import { Produit } from '../shared/produit';

@Injectable()
export class ProduitService {
    constructor(private http: HttpClient) {}
    getProduits(): Observable<any> {
        return this.http.get(API_URLS.PRODUITS_URLS);
    }
    addProduit(p: Produit): Observable<any> {
        return this.http.post(API_URLS.PRODUITS_URLS, p);
    }
    updateProduit(p: Produit): Observable<any> {
        return this.http.put(API_URLS.PRODUITS_URLS, p);
    }
    deleteProduit(ref: string): Observable<any> {
        return this.http.delete(API_URLS.PRODUITS_URLS + `/${ref}`);
    }
}
