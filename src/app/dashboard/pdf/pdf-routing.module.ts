import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PdfListComponent } from './pdf-list/pdf-list.component';
import { PdfViewPageComponent } from './pdf-view-page/pdf-view-page.component';

const routes: Routes = [
            {
                path: "",
                redirectTo:'pdf-list',
                pathMatch:"full"
            }, 
            {
                path: "pdf-list",
                component:PdfListComponent
            }, 
            {
                path: "pdf-view",
                component:PdfViewPageComponent
            }, 
];   

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]       
})
export class PdfRoutingModule {}
