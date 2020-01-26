import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PdfListComponent } from './pdf-list/pdf-list.component';
import { PdfViewPageComponent } from './pdf-view-page/pdf-view-page.component';
import { PdfAddComponent } from './pdf-add/pdf-add.component';

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
            {
                path: "pdf-add",
                component:PdfAddComponent
            }, 
            
];   

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]       
})
export class PdfRoutingModule {}
