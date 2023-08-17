import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<TaskList> = [
  ];

  public setEmitTaskList(event: string) {
    //console.log(event)
    this.taskList.push( { task: event, checked: false} )

  }

public deleteItemTaskList(event: number) {
  this.taskList.splice(event, 1)
}

public deleteAllItemTaskList() {
  const confirma = window.confirm("Você realmente deseja deletar todas as tarefas?")

  if(confirma) {
    this.taskList = []
  }


}

}
