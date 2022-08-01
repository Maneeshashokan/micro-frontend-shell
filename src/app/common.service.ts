import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public initVal: string = "";
  private static _instance: CommonService;
  constructor() {
    if(!CommonService._instance) {
      CommonService._instance = this;
    }
    return CommonService._instance;

   }

  setVal(val: string) {
    this.initVal = val; 
  }

  static getInstance() {
    return this._instance;
  }

  showAlert(){
    alert("test = " + this.initVal);
  }
}
