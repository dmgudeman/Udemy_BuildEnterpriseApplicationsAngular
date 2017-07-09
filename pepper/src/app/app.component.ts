import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor( private af: AngularFire) {
    }
  
    ngOnInit () {

    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }).then(authState => {
            console.log(`AFTER LOGIN ${authState}`);
        })
    }

    logout() {
        this.af.auth.logout();
    }
}

