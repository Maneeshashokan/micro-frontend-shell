import { Component, Inject, OnInit } from '@angular/core';
// import {CommonService}  from "./public-api";
import { SharedLibService } from "angular-shared-lib"
// import { OtherLibService } from "other-lib";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shell';
  cService: any;
  public message: any = ""
  constructor(private sharedLibService: SharedLibService, @Inject(DOCUMENT) private document: Document) {

  }

  onChangeInput = () => {
    this.sharedLibService.setMsg(this.message)
  }

  ngOnInit(): void {
    // this.commonService.setVal("from shell");
    // this.commonService.showAlert();
    // this.otherLibService.showAlert()
    // this.loadStyle("_color_b.css")
    document.body.classList.add('dark');
    this.loadStyle("theme-b.css")
  }

  onChangeTheme =(event : any) =>{
    this.document.body.classList.remove('light');
    this.document.body.classList.remove('dark');
    if(event.target.value === "theme-a") {
      this.document.body.classList.add('light');
    }else {
      this.document.body.classList.add('dark');
    }
    this.loadStyle(event.target.value + ".css")
  }

  onChangeColor(style:any) {
    this.loadStyle(style)
    // document.body.classList.remove('light');
    // document.body.classList.remove('dark');
    //  document.body.classList.add(style);
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }

}