import { Component, OnInit } from '@angular/core';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'],
})
export class GroceryComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}
  task = {
    name: '',
    id: 0,
  };
  tasks = [];

  onClick(task) {


    for (var i = 0; i < this.tasks.length; i++) {
      if (task.name == this.tasks[i].name) {
        alert("Item already exits in your car!! Kindly delete it:)");
       break;
      }
    
    }
  
    if (this.task.id == 0 && this.task.name !=='') {


      this.tasks.push({
        id: new Date().getTime(),
        name: this.task.name,
        strike: false,
      });
    }

    this.task = {
      name: '',
      id: 0,
    };
  
    
  }

  onEdit(task) {
    this.task = task;
  }

  onDelete(task) {
    this.tasks = this.tasks.filter(i => i.id !== task.id)
  }

  onStrike(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (item.id == this.tasks[i].id) {
        if (this.tasks[i].strike) {
          this.tasks[i].strike = false;
        } else {
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }
}