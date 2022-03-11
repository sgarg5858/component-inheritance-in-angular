import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}


  export interface Geo {
      lat: string;
      lng: string;
  }

  export interface Address {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: Geo;
  }

  export interface Company {
      name: string;
      catchPhrase: string;
      bs: string;
  }

  export interface User {
      id: number;
      name: string;
      username: string;
      email: string;
      address: Address;
      phone: string;
      website: string;
      company: Company;
  }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  private postsSubject = new BehaviorSubject<Post[]>([]);
  private usersSubject = new BehaviorSubject<User[]>([]);

  public posts$ = this.postsSubject.asObservable();
  public users$ = this.usersSubject.asObservable();


  getPosts():void
  {
    this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe((posts:Post[])=>{
      this.postsSubject.next(posts);
    })
  }

  getUsers()
  {
     this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((users:User[])=>{
      this.usersSubject.next(users);
    })
  }

}
