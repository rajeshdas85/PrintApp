import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent  { //implements OnInit
    // users : User;
   //  users = new User();
     
    // currentUser: User;
    // users: User[] = [];
user1 = [
    new userDetails('Kalyan', 20),
    new userDetails('Shiva', 22),
    new userDetails('Raj', 30),
    new userDetails('Mahesh', 20),
    new userDetails('Krishna', 22),
    new userDetails('Narendra', 30),
    new userDetails('Ravi', 20),
    new userDetails('John', 22),
    new userDetails('Joy', 30),
    new userDetails('Nikhil', 20),
    new userDetails('Chandra', 22),
    new userDetails('Rahul', 30)
]
//     constructor(private users : User) {

//   //      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     }

    // ngOnInit() {
    //     this.loadAllUsers();
    // }

    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => { 
    //         this.loadAllUsers() 
    //     });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().pipe(first()).subscribe(users => { 
    //         this.users = users; 
    //     });
    // }
}
export class userDetails {
    constructor(public name: string, public age: number) {
  }  
}