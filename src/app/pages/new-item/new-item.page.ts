

import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  todo: Todo = {
		name: '',
		note: '',
		createdAt: new Date().getTime()
	}

	todoId = null;

  constructor(
      private route: ActivatedRoute, 
      private nav: NavController, 
      private todoService: TodoService, 
      private loadingController: LoadingController
    ) { }

  ngOnInit() {
  	this.todoId = this.route.snapshot.params['id'];
  	if(this.todoId){
  		this.loadTodo();
  	}
  }

  async loadTodo(){
  	const loading = await this.loadingController.create({
  		message: 'Loading Todo...'
  	});

  	await loading.present();

  	this.todoService.getTodo(this.todoId).subscribe(res => {
  		loading.dismiss();
  		this.todo = res;
  	})
  }

  async saveTodo(){
  	const loading = await this.loadingController.create({
  		message: 'Saving Note...'
  	})

  	await loading.present();

    

  	if(this.todoId){
  		this.todoService.updateTodo(this.todo, this.todoId).then(() => {

  			loading.dismiss();
  			this.nav.goBack('home');
  		})
  	} else {
  		this.todoService.addTodo(this.todo).then(() => {

  			loading.dismiss();
  			this.nav.goBack('home');

        console.log("ya");

  		})
  	}
  }

}
