import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SERVICIOService {

  constructor(private _http: HttpClient ) {
      console.log("Llamando metodos o rutas API Tasks");
      //this.getTasks();
      // this.getTaskById();
      // this.deleteTaskById();
  }

   getTasks(){
    //  let tempObservable = this._http.get('http://localhost:7778/tasks');
    //  tempObservable.subscribe(data => console.log("1. Obteniendo todas las Tareas", data));
    return this._http.get('http://localhost:7778/tasks');
   }

  getTaskById(){
    // let tempObservable = this._http.get('http://localhost:7778/tasks/6372ef385e549dccad5ae007');
    // tempObservable.subscribe(data => console.log("2. Obteniendo una tarea por Id", data));
    return this._http.get('http://localhost:7778/tasks/6372ef385e549dccad5ae007');
  }

  deleteTaskById(){
    let tempObservable = this._http.delete('http://localhost:7778/tasks/636f90eecf3f25fa130cb637');
    tempObservable.subscribe(data => console.log("3. Eliminando una tarea por Id", data));
  }
}
