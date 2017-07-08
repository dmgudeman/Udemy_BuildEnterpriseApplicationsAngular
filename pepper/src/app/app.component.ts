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
import 'rxjs/add/operator/map'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    cuisines: FirebaseListObservable<any[]>;
    restaurants: Observable<any[]>;

    constructor(
        private af: AngularFire,
    ) { }
  
    ngOnInit () {
        this.cuisines = this.af.database.list('/cuisines');
 
        this.restaurants = this.af.database.list('/restaurants')
            .map(restaurants => {
                restaurants.map( restaurant => {
                    restaurant.featureTypes = [];
                    for ( let f in restaurant.features ) 
                       restaurant.featureTypes.push(this.af.database.object('/features/' + f))
                    
                });
                return restaurants;
            });
    }
}

