import { Component ,OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-KD';
  constructor(private spinner:NgxSpinnerService){}
  ngOnInit() {
  
   
    setInterval(() => {
      if(localStorage.getItem('showLoader'))
    this.spinner.show() 
    else this.spinner.hide();
    }, 50);     
  }
}
