import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatRadioModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms'; 
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { FestivalService } from './services/festival.service';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    HttpClientModule,

    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    FestivalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
