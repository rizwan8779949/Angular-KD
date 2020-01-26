import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/Services/api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilsService } from 'src/app/shared/Services/utils/utils.service';
import { PdfService } from 'src/app/shared/Services/pdf/pdf.service';

@Component({
  selector: 'app-pdf-list',
  templateUrl: './pdf-list.component.html',
  styleUrls: ['./pdf-list.component.scss']
})
export class PdfListComponent implements OnInit {


  constructor(private api: APIService
    ,private myRoute: Router, private toast: ToastrService,private utils:UtilsService,private pdfService:PdfService) { }
    listDto = new Array()
    fileUrl;
    pageNumber: number = 1;;
    ngOnInit() {  
      this.selectedData();
    }        
    selectedData() {
      this.utils.setLocalStorage("showLoader",'Yes')
      this.api.getPdfListApi().subscribe((res: any) => {
        this.listDto=res.data;
        this.utils.removeLocalStorage("showLoader")
      }, (err: any) => {
        this.utils.removeLocalStorage("showLoader")
        this.toast.error(err.error.message)
      });    
    }
  goto(data) {
    this.myRoute.navigateByUrl(data);
  }
  viewPdfAnothePlace(dto){
    this.pdfService.setData(dto);
    this.goto("dashboard/pdf-view")
  }


  openDocumentModal(){
    // this.utils.showModalNonClick("add-document-name")
    this.goto("dashboard/pdf-add")
  }

}