import { Component } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  providers: [MessageService],
  templateUrl: './app.component.html'
})
export class AppComponent { 
   
}
