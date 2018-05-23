import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Video} from './dashboard/video-thumbnail/video-thumbnail.component';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]>{
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(
        map(videoData=> videoData.slice(0, 3)),
      );
  }
}
