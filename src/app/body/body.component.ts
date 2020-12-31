import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {HomeComponent} from '../body/home/home.component'
import {BlogListComponent} from '../body/blogList/blogList.component'


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }

  public elemtops = [] ;

  @Input() elemtops2;
  @Output() offsetTopEvent: EventEmitter<any> = new EventEmitter();
  @ViewChild(HomeComponent) home: HomeComponent;
  // @ViewChild(BlogListComponent) blog: BlogListComponent;

  eventEmiterFun(elemtops){
    this.offsetTopEvent.emit(elemtops);
  }
  public item;

  ngAfterViewChecked(){
    this.elemtops = [];
    // this.item = {id : this.home.home.nativeElement.id,
    //   top : this.home.home.nativeElement.offsetTop}
    this.elemtops.push({id : this.home.home.nativeElement.id,
      top : this.home.home.nativeElement.offsetTop});

    this.elemtops.push({id : this.home.aboutus.nativeElement.id,
      top : this.home.aboutus.nativeElement.offsetTop});

    this.elemtops.push({id : this.home.services.nativeElement.id,
      top : this.home.services.nativeElement.offsetTop});

    this.elemtops.push({id : this.home.howitworks.nativeElement.id,
      top : this.home.howitworks.nativeElement.offsetTop});

    this.elemtops.push({id : this.home.faq.nativeElement.id,
      top : this.home.faq.nativeElement.offsetTop});

    this.elemtops.push({id : this.home.contactus.nativeElement.id,
      top : this.home.contactus.nativeElement.offsetTop});
    // this.eventEmiterFun(this.elemtops);
  }
  
  backToTop() {
    document.documentElement.scrollTop = 0;
    this.eventEmiterFun(this.elemtops);
  }
  get scrollTopArrow(){  
    return   document.documentElement.scrollTop ;
  }
}
