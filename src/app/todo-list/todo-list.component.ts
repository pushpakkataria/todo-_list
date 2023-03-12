import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

  task = ""
  list: any[] = [];

  clearTask(){
    this.task = "";
  }

  addtask(item: string) {
    if (item.length > 0) {
      this.list.push({ id: this.list.length, name: item })
      console.warn("todo liast==>", this.list)
      this.clearTask();
    } else {
      alert("Please enter some text");
    }
  }
  removetask(id: number) {
    console.warn(id)
    this.list = this.list.filter(item => item.id !== id)
  }

}
