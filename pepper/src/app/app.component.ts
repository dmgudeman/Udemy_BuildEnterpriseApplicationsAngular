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
            console.log("authState", authState);
            this.displayName = authState.auth.displayName;
            this.photoURL = authState.auth.photoURL;
       });
    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
            scope: ['public_profile', 'user_friends']
        }).then((authState: any) => {
            this.af.database.object('/users/' + authState.uid).update({
                accessToken: authState.facebook.accessToken
            })
        });
    }

    logout() {
        this.af.auth.logout();
    }
}

