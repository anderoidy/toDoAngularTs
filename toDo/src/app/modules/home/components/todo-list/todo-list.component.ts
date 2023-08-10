import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList:Array<TaskList> =[
    { task: "Minha nova task", checked: true},
    { task: "Minha nova task2", checked: false}
  ];

//O dele tem um contrutor

//O delel tem o NgOnInit

}
