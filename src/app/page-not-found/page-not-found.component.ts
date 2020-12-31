import { Component, OnInit } from '@angular/core';
import { ContentReader } from '../util/ContentReader';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private _contentReader: ContentReader) { }

  ngOnInit(): void {
  }
   // Home Carousel
   public homeData = this._contentReader.getHomeData();

}
