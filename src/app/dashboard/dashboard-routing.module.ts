import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { 
        path: "",
        component: HomeComponent,
        children: [  
            {
                path: "",
                loadChildren:'./pdf/pdf.module#PdfModule'
            }, 
            {
                path: "pdf",
                loadChildren:'./pdf/pdf.module#PdfModule'
            }, 

        ]
    }
];        

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
