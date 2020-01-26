import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { APIService } from 'src/app/shared/Services/api/api.service';
import { UtilsService } from 'src/app/shared/Services/utils/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private toaster:ToastrService,private api:APIService,private utils:UtilsService) { }

  ngOnInit() {
  }  
  logOut(){
this.utils.logOut()
  }
}
