import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ContentReader } from '../../util/ContentReader';
import { Helper } from '../../util/Helper';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogList.component.html',
  styleUrls: ['./blogList.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private _contentReader: ContentReader) { }
  private mobile = false;
  public elemtops = [] ;
  @ViewChild('blogList') blogList: ElementRef;

  get isMobile(): boolean {
    return this.mobile;
  }
  // Home Carousel
  public homeData = this._contentReader.getHomeData();

  // Blog Content
  blogsContent = this._contentReader.getBlogData();
  blogs = [];

  ngOnInit(): void {
    this.mobile = Helper.isMobile();
    for (let i = 0; i < this.blogsContent.length; i++) {
      let index = 0
      while (this.blogsContent[i].subParts[index].data == undefined) {
        index++;
      }
      this.blogs[i] = this.blogsContent[i].subParts[index].title + " " + this.blogsContent[i].subParts[index].data[0].substring(0, 400) + "..";
    }
  }
  
  ngAfterViewChecked(){
    this.elemtops = [];
    this.elemtops.push({top : this.blogList.nativeElement.offsetTop,
                        id : this.blogList.nativeElement.id});
  }

}
