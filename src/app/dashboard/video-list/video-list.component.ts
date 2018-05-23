import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Video} from '../video-thumbnail/video-thumbnail.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList: Video[];
  selectedVideo;
  @Output() selectVideo = new EventEmitter<Video>();

  constructor(http: HttpClient) {
    http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(videos => this.videoList = videos);
  }

  ngOnInit() {
  }

  setSelectedVideo(video) {
    this.selectedVideo = video;
    this.selectVideo.emit(video);
  }
}

