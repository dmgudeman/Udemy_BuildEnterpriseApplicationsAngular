import { BrowserModule }     from '@angular/platform-browser';
import { NgModule }          from '@angular/core';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCT8gpFjEQT9SJ-6rYFC62aue3BGTRWR7U",
    authDomain: "pepper-c6623.firebaseapp.com",
    databaseURL: "https://pepper-c6623.firebaseio.com",
    projectId: "pepper-c6623",
    storageBucket: "",
    messagingSenderId: "383592243837"
}

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      AngularFireModule.initializeApp(firebaseConfig),
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
