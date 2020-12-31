import { Injectable } from '@angular/core';


//all the json files to be imported here 
import services from '../../content/homePage/services.json';
import team from '../../content/homePage/team.json';
import the from '../../content/homePage/The.json';
import home_data from '../../content/homePage/home-carousel.json';
import faq from '../../content/homePage/faq.json';
import blog from '../../content/blogs/blog.json';
import howItWorks from '../../content/homePage/howItWorks.json';
import aboutUs from '../../content/homePage/aboutUs.json';


@Injectable({
  providedIn:'root'
})
export class ContentReader{

    getHomeData(){
      return home_data;
  }

  
 getserviceData(){
    return services;
 }

 getTeamData(){
  return team;
 }

 getTeamInfo(){
  return the;
 }

 getFaqData() {
  return faq;
 }

 getBlogData() {
   return blog;
 }
 getHowItWorksData(){
   return howItWorks;
 }
 getAboutUsData(){
   return aboutUs;
 }

}
