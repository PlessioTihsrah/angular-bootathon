import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videos = [];
  selectedIndex = 0;
  constructor(
    private youtubeService: YoutubeService,
    private sanitiser: DomSanitizer
  ) {
    this.videos = this.youtubeService.videos;
    this.youtubeService.newDataInform.subscribe(() => {
      this.videos = this.youtubeService.videos;
      this.selectedIndex = 0;
    });
  }
  getUrl() {
    const url =
      'http://www.youtube.com/embed/' +
      this.videos[this.selectedIndex].id.videoId;
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit(): void {}
}
