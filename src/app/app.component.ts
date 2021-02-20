import { Component, OnInit, NgModule } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';


let cards = [
  {
    id: 1,
    title: 'Mobile Internet',
    description: '',
    img: '../assets/images/Data_deals.width-500.png',
    buttonText: 'START HERE >',
  },
  {
    id: 2,
    title: 'Home Internet',
    description: 'fibre connection',
    buttonText: 'START HERE > ',
    img: '../assets/images/Fibre_560.width-500.png'
  },
  {
    id: 3,
    title: 'Get A Device ',
    description: 'new device ',
    buttonText: 'START HERE >',
    img: '../assets/images/photologuephotosIcons_Illustrated-for-Veneer-M.width-500.png'
  },
  {
    id: 4,
    title: 'Add a Phone Number',
    description: 'Get a new phone number',
    buttonText: 'START HERE >',
    img: '../assets/images/250_x_250_Momo_Icon_2.width-500.png'
  },
  {
    id: 5,
    title: 'Upgrade',
    description: 'upgrade to a new phone',
    buttonText: 'START HERE >',
    img: '../assets/images/Icons_Illustrated-for-Veneer_Upgrade_phone.width-500.png'
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})
export class AppComponent{

  title = 'angular-mtn-project';
  cards:any = []
  constructor(){
    this.cards =cards;
  }
  startDragging(event:any) {
    console.log(event.data.slides);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    center:true,
    dots: false,
    navSpeed: 600,
    margin:200,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      }
    },
    nav: true
  }

}



