import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public responseData: any;

  constructor(
    private listService: ListService
  ) { 
    this.getListData();
   }

  getListData() {
    this.listService.getTodoList().subscribe(response => {
      this.responseData = response;
      console.log("response ====>", response);
    })
  }


}
