import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent  {

//   @ViewChild('searchForm')
//   searchForm!: NgForm;
//   constructor(){}
//   ngAfterViewInit(): void {
//     const serachform=this.searchForm.valueChanges;
    
//  serachform.pipe(map(data=>data['seachform'])

//     )
//     .subscribe(res=>{
//       console.log(res);
//     })
//   }
 
  
  users = [
    { username: 'John', email: 'john@example.com', phone: '1234567890', gender: 'Male' },
    { username: 'Jane', email: 'jane@example.com', phone: '0987654321', gender: 'Female' },
    // Add more user data here
  ];

  searchControl = new FormControl('');

  filteredUsers$!: Observable<any[]>;
  constructor() {
    this.filteredUsers$ = this.searchControl.valueChanges.pipe(
      startWith(''), // Emit an initial value to display all users
      debounceTime(300), // Wait for 300ms of inactivity before triggering the search
      distinctUntilChanged(), // Only emit when the search value has changed
      tap((searchValue: any) => console.log('Search Value:', searchValue)), // Log the search value
      map(searchValue => searchValue.toLowerCase()), // Convert search value to lowercase
      map(lowerCaseSearchValue => this.filterUsers(lowerCaseSearchValue)) // Apply the search filter
    );
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  filterUsers(searchValue: string): any[] {
    if (!searchValue) {
      return this.users; // If search value is empty, return all users
    }

    return this.users.filter(user =>
      user.username.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );
  }
  // searchControl = new FormControl('');

  // filteredUsers$!: Observable<any[]>;
  // constructor() {
  //    this.filteredUsers$ = this.searchControl.valueChanges.pipe(
  //      startWith(''), // Emit an initial value to display all users
  //     // debounceTime(300), // Wait for 300ms of inactivity before triggering the search
  //     // distinctUntilChanged(), // Only emit when the search value has changed
  //     // map(searchValue => this.filterUsers(searchValue)) // Apply the search filter
  //    );
  // }

  // filterUsers(searchValue: string): any[] {
  //   if (!searchValue) {
  //     return this.users; // If search value is empty, return all users
  //   }

  //   const lowerCaseSearchValue = searchValue.toLowerCase();
  //   return this.users.filter(user =>
  //     user.username.toLowerCase().includes(lowerCaseSearchValue) ||
  //     user.email.toLowerCase().includes(lowerCaseSearchValue)
  //   );
  // }

}
