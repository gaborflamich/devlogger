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
  isNew = true;
  isEditing = false;

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
        (this.isNew = false),
          this.form.setValue({
            id: log.id,
            text: log.text,
            date: log.date,
          });
      }
      if (log.text !== null) {
        this.isEditing = true;
      } else {
        this.isEditing = false;
      }
    });
  }

  onSubmit(): void {
    // Extract values from form
    const id = this.form.get('id')?.value;
    const text = this.form.get('text')?.value;
    // Check if new log
    if (this.isNew) {
      // Create new log
      const newLog = {
        id: this.generateId(),
        text: text,
        date: new Date(),
      };
      // Add log
      this.logService.addLog(newLog);
      this.form.reset();
    } else {
      // Create log to be updated
      const updLog = {
        id: id,
        text: text,
        date: new Date(),
      };
      // Update log
      this.logService.updateLog(updLog);
    }
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  clearForm(): void {
    this.form.reset();
    this.isNew = true;
    this.isEditing = false;
  }
}
