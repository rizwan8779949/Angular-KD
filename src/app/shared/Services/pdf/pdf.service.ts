import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  getData = new BehaviorSubject(null);
  editDto = this.getData.asObservable();

  setData(dto) {
      this.getData.next(dto);
  }
}
