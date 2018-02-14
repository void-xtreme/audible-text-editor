import { Component, OnInit } from '@angular/core';
import {FestivalService} from './services/festival.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private fileText;
 
  public realtimeEnabled = false;
  public ttsType = 'document';
  public ttsText: string;

  constructor(private festivalService: FestivalService) {

  }

  onClickReadButton() {
    this.festivalService.speak(this.ttsText);
  }

  ngOnInit() { }
 
  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    var me = this;
    reader.onload = function () {
      me.ttsText = reader.result;
    }
  }
  
}
