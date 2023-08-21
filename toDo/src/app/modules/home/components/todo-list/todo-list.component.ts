import { Component, DoCheck } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  //public taskList: Array<TaskList> = localStorage.getItem("list");
    public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');


    ngDoCheck(): void {
      this.setLocalStorage()
    }

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

  public validationInput(event: string, index: number) {

    if(!event.length) {
      const confirm = window.confirm("Tesk esta vazia deseja deletar? ")

      if(confirm)
      this.deleteItemTaskList(index)
    }
  }

  public setLocalStorage() {
    if(this.taskList) {
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked) )
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

}
