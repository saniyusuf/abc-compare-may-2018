import { Component, OnInit } from '@angular/core';
import {Video} from '../video-thumbnail/video-thumbnail.component';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onVideoSelected(video: Video) {
    this.selectedVideo = video;
  }
}
