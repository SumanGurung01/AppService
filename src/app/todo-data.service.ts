import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todo = [
    {"task":"Breakfast","start_time":700,"end_time":730},
    {"task":"Work","start_time":800,"end_time":1300},
    {"task":"Lunch","start_time":1300,"end_time":1400},
    {"task":"Meeting","start_time":1400,"end_time":1600},
    {"task":"Relaxing","start_time":1700,"end_time":1800},
    ]

  getdata()
  {
    return this.todo
  }
  constructor() { }
}
