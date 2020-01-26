import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from './Services/utils/utils.service';
import { APIService } from './Services/api/api.service';
import { AuthGuard, LoginGuardSuccess, LoginGuardFailed } from './Guard/Auth/auth.guard';
import { LoginService } from './Services/Login/login.service';
import { PdfService } from './Services/pdf/pdf.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from './Services/Loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Interceptor/auth-interceptor.service';
import { DragDropDirective } from './directives/dragAndDrop.directive';
import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [DragDropDirective],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,FileUploadModule
  ],
  providers:[UtilsService,APIService,LoginService,PdfService,LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  },   ]
})   
export class SharedModule { }
