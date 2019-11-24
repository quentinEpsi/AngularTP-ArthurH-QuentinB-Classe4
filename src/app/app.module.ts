import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { DisplayValueComponent } from './display-value/display-value.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayValueComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
