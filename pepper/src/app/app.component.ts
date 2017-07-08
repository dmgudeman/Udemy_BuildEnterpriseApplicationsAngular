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
        this.cuisines = this.af.database.list('/cuisines', {
            query: {
                orderByValue: true
            }
        });
        this.restaurants = this.af.database.list('/restaurants', {
            query: {
                orderByChild: 'address/city'
            }
        });

        
    }
}

