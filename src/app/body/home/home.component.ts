import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MyAnimation } from '../../util/animationUtil';
import { howItWorksAni } from '../../util/animationUtil';
 import { spinAni } from '../../util/animationUtil';

// import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContentReader } from '../../util/ContentReader';
import { NgForm } from '@angular/forms';
import { Helper } from '../../util/Helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation, howItWorksAni,spinAni]
})
export class HomeComponent implements OnInit {

  constructor(private _contentReader: ContentReader) { }

  ngOnInit(): void {
    this.mobile = Helper.isMobile();
  }
 
  @ViewChild('home') home: ElementRef;
  @ViewChild('aboutus') aboutus: ElementRef;
  @ViewChild('services') services: ElementRef;
  @ViewChild('howitworks') howitworks: ElementRef;
  @ViewChild('faq') faq: ElementRef;
  @ViewChild('contactus') contactus: ElementRef;

  private mobile = false;

  get isMobile(): boolean {
    return this.mobile;
  }
 
  shallSpin="move";
  spintutor=true;  
  decide(){
    if(this.spintutor==true){
      this.shallSpinfun();
    } else if(this.spintutor==false){
      this.shallSpinfun2();
    }
    
  }
  shallSpinfun(){
    this.spintutor=false;
    this.shallSpin="spin";
 //   this.spintutor = !this.spintutor; 
    this.studentFlow = this.howItWorks[1];
    this.person ="STUDENT";
  //  alert('shallSpinfun');
   //this.shallSpin="move";
    return this.shallSpin;
  }
  shallSpinfun2(){
   this.spintutor=true;
    this.shallSpin="move";
 ///   this.spintutor = !this.spintutor; 
    this.studentFlow = this.howItWorks[0];
    this.person ="TUTOR";
  // alert('shallSpinfun2');
   //this.shallSpin="move";
    return this.shallSpin;
  }
  
  //About Us
  aboutUs = this._contentReader.getAboutUsData();

  //how-It-Works
public person ="TUTOR";
  public howItWorks = this._contentReader.getHowItWorksData();
  public studentFlow =this.howItWorks[0];
  public tutorFlow = this.howItWorks[0];

  // Home Carousel
  public homeData = this._contentReader.getHomeData();


  // Services
  public selectedIndex = 0;
  public serviceData = this._contentReader.getserviceData();
  showTab(index, data) {
    this.selectedIndex = index;
  }

  // faq
  student_faq = this._contentReader.getFaqData()[0];
  tutor_faq = this._contentReader.getFaqData()[1];

  // The
  member = this._contentReader.getTeamInfo();

  //contact Us
  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  // sendEmail(e: Event) {
  //   console.log("email");
  //   e.preventDefault();
  //   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
  //   //   .then((result: EmailJSResponseStatus) => {
  //   //     console.log(result.text);
  //   //   }, (error) => {
  //   //     console.log(error.text);
  //   //   });
  // }

  // how it works
  tutor = true;
  student = true;
  positionStu = "center";
  arrow = false;
  step = false;
  positiontutor = "center";


  showStudent() {
    this.tutor = false;
    this.positionStu = "left";
    this.arrow = true;
    this.step = true;
  }

  showtutor() {
    this.student = false;
    this.positiontutor = "left";
    this.arrow = true;
    this.step = true;
  }

}
