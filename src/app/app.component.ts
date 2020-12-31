import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // public elemtops;
  public routerElem;
  title = 'tuitionbell';
  constructor(public router: Router){
    
  }
  ngOnInit(): void {
  if(this.router){
   // console.log("ap.compo");
    document.getElementById('spinner') .style.display = 'none';
  }
}  
childEvent(e){
  this.routerElem = e;
  console.log(this.routerElem);
}
}
