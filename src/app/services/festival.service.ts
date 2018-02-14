import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Howl, Howler} from 'howler';

@Injectable()
export class FestivalService {

  private speaking = false;

  constructor(private http: HttpClient) {

  }

  speak(text: string) {
    this.http.get('http://localhost:3000/api/generate/' + text).subscribe(data => {
      console.log(data);

      // Setup the new Howl.
      const sound = new Howl({
        src: ['http://localhost:3000/output/' + data]
      });

      // Play the sound.
      sound.play();

      // Change global volume.
      Howler.volume(1);
    });
  }
}
