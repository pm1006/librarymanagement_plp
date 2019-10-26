import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Books } from './books';
import { Requests } from './request-book';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(private httpClient:HttpClient){}
    login(userDetails){
        return this.httpClient.post<User>(`http://localhost:8080/login`,userDetails)
    }

    register(userDetails){
        return this.httpClient.post<User>(`http://localhost:8080/addStudent`,userDetails);
    }
    updateUser(userDetails){
        return this.httpClient.post<User>(``,userDetails);
    }
    addBooks(books){
        return this.httpClient.post<Books>(`https://localhost:8080/addBook`,books);
    }
    updateBook(bookDetails){
        return this.httpClient.post<Books>(``,bookDetails);
    }
    requestBook(books){
        return this.httpClient.post<Requests>(``,books);
    }
    issueBook(book){
        return this.httpClient.post<Requests>(``,book);
    }
    deleteBook(bookDetails){
        return this.httpClient.post<Books>(``,bookDetails);
    }
    deleteUser(userDetails){
        return this.httpClient.post<User>(``,userDetails);
    }
    getAllBooks(bookDetails){
        return this.httpClient.post<Books>(``,bookDetails);
    }
    getAllUsers(userDetails){
        return this.httpClient.post<User>(``,userDetails);
    }
    getAllIssuedBooks(issueBook){
        return this.httpClient.post<Books>(``,issueBook);
    }
    addLibrarian(userDetails){
        return this.httpClient.post<User>(``,userDetails);
    }
    updateLibrarian(userDetails){
        return this.httpClient.post<User>(``,userDetails);
    }
    deleteLibrarian(userDetails){
        return this.httpClient.post<User>(``,userDetails);
    }
}