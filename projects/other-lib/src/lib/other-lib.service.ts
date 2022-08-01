import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherLibService {

  constructor() { }

  showAlert(){
    alert("testhsf")
  }
}
