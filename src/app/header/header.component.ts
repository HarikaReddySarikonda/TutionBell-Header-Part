import { Component, OnInit, HostListener, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bgLight = false;
  bgColor: string = '';
  @ViewChild('menubutton') menubuttonElement: ElementRef;
  @ViewChild('menu') menuElement: ElementRef;
  @Input() routerElem;

  toggleClick() {
    this.bgColor = "rgb(2, 46, 82)";
  }

  //navigation
  public currentActive = '';
  public activElem = '';
  public navbarheight;
  public pagetop;
   

  ngAfterViewChecked() {
    this.navbarheight = document.getElementById("navbarheight").offsetHeight;
  }
  scrollToElement(target) {
    //  alert(target);
    document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  @HostListener('document:scroll') scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.bgLight = true
    }
    else {
      this.bgLight = false
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    this.navbarheight = parseInt(this.navbarheight);
    this.pagetop = window.pageYOffset + this.navbarheight;
    // console.log(this.routerElem);
    if(this.routerElem.elemtops){
      for (let i = this.routerElem.elemtops.length-1; i >=0 ; i--) {
        if(this.routerElem.elemtops[i].top <= this.pagetop){
          console.log(i);
          this.currentActive = this.routerElem.elemtops[i].id;
          break;
        }
      }
    }
  }

  toElem(elem) {
    console.log(elem);
  }

  constructor() { }

  ngOnInit(): void {
    console.log("In Header component");
    console.log(window.pageYOffset);
    this. checkOffsetTop();
  }
  // menu disappears on clicking outside
  //window.onClick = this.myFunction;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.menubuttonElement.nativeElement.contains(event.target) == false) {
      //   this.menubuttonElement.nativeElement.click();
      this.menubuttonElement.nativeElement.getAttribute("aria-expanded");
      this.menubuttonElement.nativeElement.setAttribute("aria-expanded", "false");
      this.menubuttonElement.nativeElement.classList.add("collapsed");
      this.menuElement.nativeElement.classList.remove("show");
    }
  }


}
