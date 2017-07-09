import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    displayName;
    photoURL;
    constructor( private af: AngularFire) {
    }
  
    ngOnInit () {
        this.af.auth.subscribe(authState => {
            if(!authState){
                this.displayName =  null;
                this.photoURL = null;
                return;
            }
            this.displayName = authState.auth.displayName;
            this.photoURL = authState.auth.photoURL;
       });
    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then(authState => {
            console.log(`AFTER LOGIN ${authState}`);
        });
    }

    logout() {
        this.af.auth.logout();
    }
}

