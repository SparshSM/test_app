import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { user } from './user';
@Injectable({
  providedIn: 'root'
})
export class userdata implements InMemoryDbService {
  createDb(){
    const tusers: user[] = [
      {id: 101, name: 'Raj', email:'raj@example.com', password:'rajpass'},
      {id: 102, name: 'Raja', email:'raja@example.com', password:'rajapass'},
      {id: 103, name: 'Rajan', email:'rajan@example.com', password:'rajanpass'},
      {id: 104, name: 'Rajesh', email:'rajesh@example.com', password:'rajeshpass'},
    ];
    return {tusers};
  }
}
