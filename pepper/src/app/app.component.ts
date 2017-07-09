import { 
         Component, 
         OnInit, 
         OnDestroy,
        }                        
        from '@angular/core';
import { 
         AngularFire, 
         FirebaseListObservable, 
        }                         from 'angularfire2';
import { Observable }             from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    cuisines: FirebaseListObservable<any[]>;
    restaurants: Observable<any[]>;
    exists;

    constructor(
        private af: AngularFire,
    ) { }
  
    ngOnInit () {
        // this.cuisines = this.af.database.list('/cuisines', {
        //     query: {
        //         orderByValue: true
        //     }
        // });
        // this.restaurants = this.af.database.list('/restaurants', {
        //     query: {
        //         orderByChild: 'rating',
        //         equalTo: 5,
        //         limitToLast: 50 
        //     }
        // });
        
        // WANT TO ADD A CITY IN 2 PLACES
        // /restaurants
        // /restaurants-by-city/camberwell

        this.af.database.list('/restaurants').push({name: ''})
            .then(x => {
                let restaurant = {name: 'My New Restaurant'}

                let update = {} // represents the nodes will we update
                update['/restaurants/' + x.key] = restaurant;
                update['/restaurants-by-city/camberwell/' + x.key] = restaurant;
                this.af.database.object('/').update(update);
            })

        
    }
}

