import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProduitService } from './produit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-produit',
    templateUrl: './produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

    products: Produit[];
    produitForm: FormGroup;
    selectedProduct: Produit;
    operation: string;

    constructor(private formBuilder: FormBuilder, private produitService: ProduitService, private activatedRoute: ActivatedRoute) {
        this.initForm();
    }

    ngOnInit() {
        this.products = this.activatedRoute.snapshot.data.products;
        this.initProduit();
        this.operation = 'add';
    }

    initForm() {
        this.produitForm = this.formBuilder.group({
            ref: ['', Validators.required],
            quantite: '',
            prixUnitaire: ''
        });
    }

    initProduit() {
        this.selectedProduct = new Produit();
        this.initForm();
    }

    loadProducts() {
        this.produitService.getProduits().subscribe(
            data => { this.products = data; },
            error => { console.log(error); },
            () => { console.log('les produits sont bien chargéés'); }
        );
    }

    addProduit() {
        const product = this.produitForm.value;
        this.produitService.addProduit(product).subscribe(
            () => {
                this.initProduit();
                this.loadProducts();
                this.initForm();
            }
        );
    }

    updateProduit() {
        const product = this.produitForm.value;
        this.produitService.updateProduit(product).subscribe(
            () => {
                this.initProduit();
                this.loadProducts();
            }
        );
    }

    deleteProduit(ref) {
        this.produitService.deleteProduit(ref).subscribe(
            () => {
                this.operation = 'add';
                this.initProduit();
                this.loadProducts();
            }
        );
    }
}
