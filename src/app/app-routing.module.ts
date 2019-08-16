import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'produit',
        component: ProduitComponent
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
    exports: [ RouterModule ]
})

export class AppRoutingModule { }