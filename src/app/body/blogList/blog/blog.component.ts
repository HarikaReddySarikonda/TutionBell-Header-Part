import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentReader } from '../../../util/ContentReader';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public id: number;

  constructor(private route: ActivatedRoute, private _contentReader: ContentReader) {}

  blogs = this._contentReader.getBlogData();

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) - 1;
  }

  updateId(id: number){
    this.id = id - 1;
  }
}
