import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { ProduitResolver } from './produit/produit.resolver';

const appRoutes: Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'produit',
        component: ProduitComponent,
        resolve: { products: ProduitResolver }
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [ RouterModule ],
    providers: [ProduitResolver]
})

export class AppRoutingModule { }