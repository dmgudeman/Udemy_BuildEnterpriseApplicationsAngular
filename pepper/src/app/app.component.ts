import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Http }        from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    displayName;
    photoURL;
    error;
    constructor( private af: AngularFire,
                 private http: Http) {
    }
  
    ngOnInit () {
        this.af.auth.subscribe(authState => {
       });
    }
    
    register() {
        this.af.auth.createUser({
            email: 'sparky@gmail.com',
            password: 'sparky'
        })
        .then(authState =>{
            authState.auth.sendEmailVerification();
        })
        .catch( err => console.log("REGISTER_-ERROR", err))
    }
    
    login() {
        this.af.auth.login({
            email: 'sparky@gmail.com',
            password: 'sparky2'
        }, {
            method: AuthMethods.Password,
            provider: AuthProviders.Password
        })
        .then(authState => console.log("LOGIN-THEN", authState))
        .catch(error => this.error = error.message);

    }

    logout() {
        this.af.auth.logout();
    }
}

