import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './modal-windows/confirmation-dialog/confirmation-dialog.component';
import { DurationInputComponent } from './inputs/duration-input/duration-input.component';
import { DateInputComponent } from './inputs/date-input/date-input.component';
import { DurationPipe } from './pipes/duration.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from '../app.routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    DurationInputComponent,
    DateInputComponent,
    DurationPipe,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ConfirmationDialogComponent,
    DurationInputComponent,
    DateInputComponent,
    DurationPipe]
})
export class SharedModule { }
