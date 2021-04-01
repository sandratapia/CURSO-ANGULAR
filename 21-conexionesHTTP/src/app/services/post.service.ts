import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(_id: number): Promise<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/${_id}`).toPromise();
  }

  create({title, body, userId}): Promise<any>{
    const bodyRequest = {title, body, userId};

    const httpOptions = {
      headers: new HttpHeaders({
        'Conent-Type': 'application/json; charset=UTF-8'
        //HEADERS - SIRVEN PARA AUTENTICARSE EN UN SERVIDOR
      })
    };

    return this.httpClient.post<any>(this.baseUrl, bodyRequest, httpOptions).toPromise();
  }

  update({id, title, body, userId}): Promise<any>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, {id, title, body, userId}).toPromise();
  }

  delete(_id): Promise<any>{
    return this.httpClient.delete(`${this.baseUrl}/${_id}`).toPromise();
  }
}
