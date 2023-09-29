import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[] = [];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });

  selectedLog!: Observable<Log>;

  constructor() {
    this.selectedLog = this.logSource.asObservable();

    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date(),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date(),
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date(),
      },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
