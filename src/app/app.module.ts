import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
const URL = 'http://localhost:3000/remoteEntry.js';

function loadAdminStyles(): Promise<void> {
  return new Promise((resolve => {
    const baseUrl = "http://localhost:3000";
    const el = document.getElementById("mfe1_module_styles");

    // Load one instance, do it like this to handle errors and retrying
    if (el) {
      el.remove();
    }
    const headEl = document.getElementsByTagName("head")[0];
    const styleLinkEl = document.createElement("link");
    styleLinkEl.rel = "stylesheet";
    styleLinkEl.id = "mfe1_module_styles";
    styleLinkEl.href = `${baseUrl}/mfe1_module_styles.css`;
    headEl.appendChild(styleLinkEl);
    resolve();
  }));
}

// import('mfe1/Module').then(m => m.DashboardModule)
const APP_ROUTES: Routes = [


  // Your route here:

  {
    path: 'report',
    loadChildren: () => {
      return loadAdminStyles().then(() => import('mfe1/Module').then(m => m.DashboardModule))
    }
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
