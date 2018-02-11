import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public realtimeEnabled = false;
  public ttsType = 'document';
  public ttsText: string;

  constructor() {
  }

  onClickReadButton() {

  }
}
