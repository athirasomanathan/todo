import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title="Todo";
todos=["todo1","todo2","todo3"];
newTodo="";
  constructor() { }

  ngOnInit() {
  }
delete(todo)
{
  alert(todo);
  this.todos=this.todos.filter(function (t){
  
    return t!=todo;
  })
}
add(){
 // alert(this.newTodo);
  this.todos.push(this.newTodo);
  this.newTodo=" ";
}
onTextChange(event){
  //alert(event.target.value);
  this.newTodo=event.target.value;
}
}
