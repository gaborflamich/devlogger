import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Log } from 'src/app/models/Log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LogFormComponent implements OnInit {
  form: FormGroup;

  constructor(private readonly logService: LogService) {
    this.form = new FormGroup({
      id: new FormControl(''),
      text: new FormControl(''),
      date: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // Subscribe to selectedLog Observable
    this.logService.selectedLog.subscribe((log: Log) => {
      if (log.id !== null) {
        this.form.setValue({
          id: log.id,
          text: log.text,
          date: log.date,
        });
      }
    });
  }
}
