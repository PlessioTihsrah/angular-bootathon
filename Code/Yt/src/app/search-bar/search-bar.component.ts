import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchTerm = '';
  constructor(private youtubeService: YoutubeService) {}
  handleSubmit(event) {
    event.preventDefault();
    this.youtubeService.search(this.searchTerm);
  }
  ngOnInit(): void {}
}
