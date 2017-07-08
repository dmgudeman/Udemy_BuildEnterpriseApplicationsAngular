import { Component, OnInit, OnDestroy }        from '@angular/core';
import { AngularFire, FirebaseListObservable }      from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    cuisines: FirebaseListObservable<any[]>;
    restaurant;
    // private subscription;

    constructor(
        private af: AngularFire,
    ) { }
  
    ngOnInit () {
        // cuisines not an array but a firebase observable
        this.cuisines = this.af.database.list('/cuisines');
        this.restaurant = this.af.database.object('/restaurant');

        // ---when this portion is added an array is returned---
        // .subscribe(x => {
        //     this.cuisines = x;
        //     console.log(this.cuisines);
        // });

    }

    add() {
        this.cuisines.push({
            name: 'Asian',
            details: {
                description: '...'
            }
        });

    }
    // --not needed when the list is called with the async pipe--
    // ngOnDestroy() {
    //     this.subscription.unsubscribe;
    // }

}

