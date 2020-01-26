import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfListComponent } from './pdf-list/pdf-list.component';
import { PdfViewPageComponent } from './pdf-view-page/pdf-view-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {PdfRoutingModule} from './pdf-routing.module'
import { FormsModule } from '@angular/forms';
import { PdfAddComponent } from './pdf-add/pdf-add.component';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [PdfListComponent, PdfViewPageComponent, PdfAddComponent],
  imports: [
    CommonModule,SharedModule,PdfRoutingModule,FormsModule,FileUploadModule
  ]
})  
export class PdfModule { }
