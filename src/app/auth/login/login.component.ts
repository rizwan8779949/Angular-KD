import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/Services/Login/login.service';
import { APIService } from 'src/app/shared/Services/api/api.service';
import { UtilsService } from 'src/app/shared/Services/utils/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  constructor(private toaster:ToastrService,private router:Router,private api:APIService,private utils:UtilsService,
    private loginService:LoginService,private formBuilder: FormBuilder) { }
loginDto=new LoginData()
  ngOnInit() {    
  }  
  handleFormControl()
  {
    this.form = this.formBuilder.group({
      userName: [null],
      password: [null], 
    });
  }  
chekLoginData(){
  if(!this.loginDto.email)
  this.toaster.error("Please enter username");
  else if(!this.loginDto.password)
  this.toaster.error("Please enter password");
  else this.submitLoginData()
}   
submitLoginData(){
  // this.goto("dashboard");  
  this.utils.setLocalStorage("showLoader",'Yes')
  this.api.loginApi(this.loginDto).subscribe(
    (data: any) => {
      this.utils.removeLocalStorage("showLoader")
      this.utils.setLocalStorage('userData',data.data)
      this.goto("dashboard");
      
      this.toaster.success("Login Successfully");
    },  
    (err: any) => { 
      this.utils.removeLocalStorage("showLoader")
      this.toaster.error(err.error.errorMessage);
    });
}  
goto(data){
  this.router.navigateByUrl(data)
}
}    
class LoginData{
  email='prakhar@gmail.com';
  password='123456';
}
