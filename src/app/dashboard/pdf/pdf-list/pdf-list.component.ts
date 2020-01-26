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
    nameDefault='test';
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
  uploadFiles(file){
    this.utils.setLocalStorage("showLoader",'Yes')
    this.api.uploadFileApi(this.utils.uploadFile(file,this.nameDefault)).subscribe((res:any)=>{
      // this.fileUrl=res.data;
      this.utils.removeLocalStorage("showLoader")
      this.toast.success("File Upload Successfully")
    },(err:any)=>{
      this.utils.removeLocalStorage("showLoader")
      this.toast.error(err.error.message)
    })
  }
  viewPdfAnothePlace(dto){
    this.pdfService.setData(dto);
    this.goto("dashboard/pdf-view")
  }
  files: any = [];

  uploadMultipleFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
    console.log("this files",this.files)
    this.uploadMultiPleFiles()
  }
  uploadMultiPleFiles(){
    this.api.uploadFileApi(this.files).subscribe((res:any)=>{
      // this.fileUrl=res.data;
      this.toast.success("File Upload Successfully")
    },(err:any)=>{
      this.toast.error(err.error.message)
    })
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  openDocumentModal(){
    this.utils.showModalNonClick("add-document-name")
  }

}