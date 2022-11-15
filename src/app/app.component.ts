import { Component, OnInit } from '@angular/core';
import { SERVICIOService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'LLamando rutas API Rest Tareas';


  constructor(private _httpService: SERVICIOService) { }

  ngOnInit() {
    this.getTasksFromService();
    this.getTaskByIdFromService();
  }

  tasks: any = [];
  task: any = {};

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
      //this.tasks = JSON.stringify(data);
    });
  }


  getTaskByIdFromService() {
    let observable = this._httpService.getTaskById();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.task = data;
      //this.tasks = JSON.stringify(data);
    });
  }



}

