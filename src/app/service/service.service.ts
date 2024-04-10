import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  url='http://localhost:8080/';

  geturl()
  {
    return this.url;
  }
}
