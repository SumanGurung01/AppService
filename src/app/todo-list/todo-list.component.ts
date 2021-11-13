import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task : any = []
  constructor(private mytodo:TodoDataService) { }

  ngOnInit(): void {
    this.task = this.mytodo.getdata()
  }

}
