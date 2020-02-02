import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs";
import { JsonResponse } from '../model/json-response.class';
import { Actor } from '../model/actor.class';

const url = "http://localhost:8080/actors/"

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  list():Observable<JsonResponse>{
    return this.http.get(`${url}`) as Observable<JsonResponse>;
  }

  getActor(id: number):Observable<JsonResponse>{
    return this.http.get(`${url}${id}`) as Observable<JsonResponse>;
  }

  create(actor: Actor):Observable<JsonResponse>{
    return this.http.post(url,actor) as Observable<JsonResponse>;
  }

  edit(actor: Actor):Observable<JsonResponse>{
    return this.http.put(`${url}`,actor) as Observable<JsonResponse>;
  }

  delete(id:number):Observable<JsonResponse>{
    return this.http.delete(`${url}${id}`) as Observable<JsonResponse>;
  }
}
