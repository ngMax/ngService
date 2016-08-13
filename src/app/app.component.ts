import { Component } from '@angular/core';
import { ServiceComponent } from './service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ServiceComponent]
})
export class AppComponent {
  title = 'app works!';
}
