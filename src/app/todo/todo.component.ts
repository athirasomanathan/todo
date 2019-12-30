import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
title="Todo";
todos=[
  {name:"todo1", desc:"desc1"},
  {name:"todo2",desc:"desc2"},
  {name:"todo3",desc:"desc3"}
];
newTodo="";
todoForm;
  constructor(private fb:FormBuilder) {//injection
    this.todoForm=fb.group({
      name :'',
      desc : ''
    })
    
   }

  ngOnInit() {
  }
delete(todo)
{
  alert(todo.name);
  this.todos=this.todos.filter(function (t){
  
    return t!=todo;
  })
}
add(){
  if(!this.todoForm.valid){
   alert("enter all required fields");
   return;

  }
  this.todos.push({
    name:this.todoForm.value.name,
    desc:this.todoForm.value.desc
  
  });
  this.todoForm.reset;
  //this.newTodo=" ";
}
onTextChange(event){
  //alert(event.target.value);
  this.newTodo=event.target.value;
}
}
