import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private router:Router) {}
  getData = new BehaviorSubject(null);
  editDto = this.getData.asObservable();

  setData(dto) {
      this.getData.next(dto);
  }
  setLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalStorage(key: string) {
      return JSON.parse(localStorage.getItem(key));
  }
  removeLocalStorage(key: string) {
      return localStorage.removeItem(key);
  }
  /**Check User Logged In */

  getUserDetails(){
    if(localStorage.getItem('userData')){
    var userDto=this.getLocalStorage('userData').userDto;
    return userDto 
}
}
  showModal(value: string) {
      $("#" + value).modal("show", { backdrop: "static", keyboard: false });
  }
  showModalNonClick(value: string) {
      $("#" + value).modal({ backdrop: "static", keyboard: false });
  }
  hideModal(value: string) {
      $("#" + value).modal("hide");
  }  
  fileToUpload: File = null;
  uploadFile(files: FileList,name) {
      this.fileToUpload = files.item(0);
      const formData: FormData = new FormData();
      formData.append("name",name);
      formData.append("file", this.fileToUpload, this.fileToUpload.name);
      return formData;
  }
 
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('auth')
  }
  getToken(){
      if(localStorage.getItem('userData')){
      var token=this.getLocalStorage('userData').token;
      return token 
  }
  }
}
