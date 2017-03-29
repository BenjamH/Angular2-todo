import { Component } from '@angular/core';
import {Todo} from './todo';
import { TodoDataService } from './to-do-data.service';
import { IssueDataService } from './services/github/issue-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  issues: any = this.issueDataService.getIssues()
      .subscribe(
          issues => {
            this.issues = issues;
          });

  // private or public shorthand for creating properties with name
  constructor(private todoDataService: TodoDataService,
              private issueDataService: IssueDataService) {

  }

  // application logic ties view with service (business logic)
  // Delegating business logic to a service is a good programming practice as it allows us to centrally manage and test it.

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    console.log(this.todoDataService.getAllTodos().concat(this.issues));
    return this.todoDataService.getAllTodos().concat(this.issues);
  }

}
