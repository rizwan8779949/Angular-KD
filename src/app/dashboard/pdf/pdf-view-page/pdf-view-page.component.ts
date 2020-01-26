import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/Services/utils/utils.service';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/shared/Services/pdf/pdf.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-view-page',
  templateUrl: './pdf-view-page.component.html',
  styleUrls: ['./pdf-view-page.component.scss']
})
export class PdfViewPageComponent implements OnInit {

  constructor(private utils:UtilsService,private myRouter:Router,private pdfService:PdfService,public sanitizer: DomSanitizer) { }
  pdfUrl;
  ngOnInit() {
    this.getPdfData();
  }
  getPdfData(){
    this.pdfService.editDto.subscribe((res:any)=>{
      if(res){
        this.pdfUrl=res.thumbnail
      }else this.goto("dashboard/pdf-list")
    })
  }
  goto(url){
    this.myRouter.navigateByUrl(url)
  }

}
