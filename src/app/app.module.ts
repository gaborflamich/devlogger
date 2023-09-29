import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogFormComponent } from './components/log-form/log-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    LogsComponent,
    NavbarComponent,
    LogFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
