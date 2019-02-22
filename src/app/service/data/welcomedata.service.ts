import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
     return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }
  executeHelloWorldBeanServiceWithPath(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`)

 }
}
