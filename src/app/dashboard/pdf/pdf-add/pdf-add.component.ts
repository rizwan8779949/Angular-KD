import { Component, OnInit, Output,EventEmitter,HostListener } from '@angular/core';
import { APIService } from 'src/app/shared/Services/api/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilsService } from 'src/app/shared/Services/utils/utils.service';
import { PdfService } from 'src/app/shared/Services/pdf/pdf.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-pdf-add',
  templateUrl: './pdf-add.component.html',
  styleUrls: ['./pdf-add.component.scss']
})
export class PdfAddComponent implements OnInit {

  @Output() action=new EventEmitter();
  constructor(private api:APIService,private toaster:ToastrService,
    private router:Router,private utils:UtilsService,private pdfService:PdfService) { }
    documentName;
files;
fileArrayPush=new Array();
fileUpload: FormData = new FormData();
fileToUpload: File = null;
public uploader: FileUploader = new FileUploader({});
public hasBaseDropZoneOver: boolean = false;

    /***Validate All Form Fields */
 
    formReset(){
      this.documentName=null;
      // this.fileUpload=null;
      // this.fileToUpload=null;
      this.fileArrayPush=[]
    }
    addDocumentValid() {
      if (!this.documentName) this.toaster.error("Please enter document name");
      else {  
        // this.uploadMultiFiles()
        this.addDocumentApi()
      }
    }
    addDocumentApi() {
      // console.log("dto",dto)
      this.fileUpload.append("name",this.documentName)
      this.utils.setLocalStorage("showLoader",'Yes')
      this.api.uploadFileApi(this.fileUpload).subscribe((res:any)=>{
          this.utils.removeLocalStorage("showLoader")
          this.utils.hideModal("add-document-name");
          this.action.emit()
          this.formReset()
          location.reload()
          this.toaster.success("Upload Successfully");
        },
        (err: any) => {
          this.utils.removeLocalStorage("showLoader")
          this.toaster.error(err.error.message);
        }
      );
    }
    goto(data){
this.router.navigateByUrl(data)
    }
    fileOverBase(event):  void {
      this.hasBaseDropZoneOver  =  event;
  }

  getFiles() {
    return this.uploader.queue.map((fileItem) => {
      console.log(this.uploader.queue)
      return fileItem.file;
    }); 
  }
  removeBadges(index){
    this.uploader.queue.splice(index,1)
  }
  removeBadgesUploadText(index){
    this.fileArrayPush.splice(index,1)
  }
  uploadASingleFile(file:FileList){
    this.fileArrayPush.push(file.item(0).name)
   this.fileToUpload = file.item(0);  
  this.fileUpload.append("file", this.fileToUpload, this.fileToUpload.name);
  }  
  dragAreaClass: string;
  onFileChange(file:FileList) {
    this.fileArrayPush.push(file.item(0).name)
    this.fileToUpload = file.item(0);
   this.fileUpload.append("file", this.fileToUpload, this.fileToUpload.name);
   console.log(this.fileUpload)
  // console.log(this.fileUpload)
    // this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(file: FileList) {  
    if (file.length > 1) this.toaster.error("Only one file at time allow");
    console.log("files here",file)
    this.fileArrayPush.push(file.item(0).name)
    this.fileToUpload = file.item(0);
   this.fileUpload.append("file", this.fileToUpload, this.fileToUpload.name);
   console.log(this.fileUpload)
  }
}
  