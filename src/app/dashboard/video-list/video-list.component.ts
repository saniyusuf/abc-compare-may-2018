import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Video} from '../video-thumbnail/video-thumbnail.component';
import {HttpClient} from '@angular/common/http';
import {VideoService} from '../../video.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList$: Observable<Video[]>;
  selectedVideo;
  @Output() selectVideo = new EventEmitter<Video>();

  constructor(videoService: VideoService) {
    this.videoList$ = videoService.getVideos();
  }

  ngOnInit() {
  }

  setSelectedVideo(video) {
    this.selectedVideo = video;
    this.selectVideo.emit(video);
  }
}

