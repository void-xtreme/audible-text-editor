import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Howl, Howler} from 'howler';

@Injectable()
export class FestivalService {

  private speaking = false;
  private queue: string[];

  constructor(private http: HttpClient) {

  }

  speak(text: string) {
    this.http.get('/api/generate/' + text).subscribe(data => {
      console.log(data);

      // Setup the new Howl.
      const sound = new Howl({
        src: ['/output/' + data]
      });

      // Play the sound.
      sound.play();

      // Change global volume.
      Howler.volume(1);
    });
  }
}
