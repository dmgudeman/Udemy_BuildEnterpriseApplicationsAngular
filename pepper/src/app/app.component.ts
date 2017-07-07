import { Component, OnInit, OnDestroy }        from '@angular/core';
import { AngularFire }      from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    cuisines;
    // private subscription;

    constructor(
        private af: AngularFire,
    ) { }
  
    ngOnInit () {
        // cuisines not an array but a firebase observable
        this.cuisines = this.af.database.list('/cuisines');

        // ---when this portion is added an array is returned---
        // .subscribe(x => {
        //     this.cuisines = x;
        //     console.log(this.cuisines);
        // });

    }
    // --not needed when the list is called with the async pipe--
    // ngOnDestroy() {
    //     this.subscription.unsubscribe;
    // }

}

