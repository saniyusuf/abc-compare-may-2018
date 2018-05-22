import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {

  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}

interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
