import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  videos = [];
  newDataInform = new Subject();
  key = 'PASTE_YOUR_KEY_HERE';
  constructor(private http: HttpClient) {}

  search(term: string) {
    const res = this.http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: '10',
        q: term,
        key: this.key,
      },
    });

    res.subscribe((data: any) => {
      this.videos = data.items;
      console.log(this.videos[0]);
      this.newDataInform.next();
    });
  }
}
