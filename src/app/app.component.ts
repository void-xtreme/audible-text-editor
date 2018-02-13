import { Component } from '@angular/core';
import {FestivalService} from './services/festival.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public realtimeEnabled = false;
  public ttsType = 'document';
  public ttsText: string;

  constructor(private festivalService: FestivalService) {

  }

  onClickReadButton() {
    this.festivalService.speak(this.ttsText);
  }
}
