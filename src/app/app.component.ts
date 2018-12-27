import { Component, OnInit } from '@angular/core';
import {FestivalService} from './services/festival.service';
import * as FileSaver from 'file-saver';

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

  prepareText(text){
    while (text.slice(-1) == '.' || text.slice(-1) == ' '){
      text = text.slice(0, text.length - 1);
    }
    return text;
  }

  onClickReadButton() {
    var text = this.prepareText(this.ttsText);
    switch (this.ttsType) {
      case 'document':
        this.festivalService.speak(text);
        break;
      case 'sentence':
        this.festivalService.speak(text.split('.').reverse()[0]);
        break;
      case 'word':
        this.festivalService.speak(text.split(' ').reverse()[0]);
        break;
    }
  }

  onTextChange(event){
    if (this.realtimeEnabled && event.keyCode == 32) {
      this.festivalService.speak(this.ttsText.split(' ').reverse()[0]);
    }
  }

  onClickFileUploadButton(event) {
    const reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    reader.onload = () => {
      this.ttsText = reader.result;
    };
  }

  onClickSaveButton() {
    const blob = new Blob([this.ttsText], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'ATE.txt');
  }
}
