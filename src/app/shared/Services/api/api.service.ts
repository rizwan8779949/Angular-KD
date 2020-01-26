import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  authToken;
  constructor(private http:HttpClient,private utils:UtilsService) {
    this.authToken=this.utils.getToken()
   }
  loginApi(dto){
  return this.http.post(environment.baseUrl+'user/login',dto)
  }

  uploadFileApi(dto){
    let header=new HttpHeaders().set("Authorization", 'Bear'+' '+this.authToken)
    return this.http.post(environment.baseUrl+'folder/5e2c5b5d5323c70ae924a815/addPdf',dto,{headers:header})
    }

  getPdfListApi(){    
    let header=new HttpHeaders().set("Authorization", 'Bear'+' '+this.authToken)
    return this.http.get(environment.baseUrl+'user/files',{headers:header})  
  }
}  
