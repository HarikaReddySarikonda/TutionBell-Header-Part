import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

  export const MyAnimation = trigger('myAni',[  
    transition('* => void' ,[ animate('600ms ease-out', style({ opacity: 0 }))]),
    transition('void => *' ,[style({ opacity: 0 }), animate('600ms ease-in', style({ opacity: 1 }))])
 ])

 export const spinAni = trigger('hwItWWrks',[
  state('spin',style({
    transform:'rotateY(360deg) '
  })),
  state('move',style({
    transform:''
})),
  transition('move => spin', animate('600ms ease-out')
  ),
  transition('spin => move', animate('600ms ease-out')
  ),
])

 export const howItWorksAni = [
  trigger('studentAni', [
    state('center', style({
      transform: 'translateX(29px)',
      opacity: 1,  
    })),
    state('left', style({    
      opacity: 1,
      transform: 'translateX(0px)'   
    })),
    transition('center => left', [
      style({ transform: 'translateX(30px)' }), animate('.3s ease-out', style({ transform: 'translateX(0px)' }))
    ]),
    transition('left => center', [
      //animate('0.5s')
    ]),
  ]),
  trigger('tutorAni',[ 
    state('center', style({
      transform: 'translateX(0px)',
       opacity: 1,         
     })),
     state('left', style({      
       opacity: 1,
       transform: 'translateX(-1030px)'          
     })), 
     transition('center => left', [
      style({ transform: 'translateX(0px)' }), animate('.3s ease-out', style({ transform: 'translateX(-1030%)' }))
    ]),
    transition('* => void' ,[style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(300%)' }))])
   ]),
   trigger('arrow1',[  
    transition('void => *' ,[style({ opacity: 0 }), animate('2000ms ease-in', style({ opacity: 1 }))])
 ]),
 trigger('step1',[  
  transition('void => *' ,[style({ opacity: 0 }), animate('3000ms ease-in', style({ opacity: 1 }))])
]),
trigger('arrow2',[  
transition('void => *' ,[style({ opacity: 0 }), animate('4000ms ease-in', style({ opacity: 1 }))])
]),
trigger('step2',[  
transition('void => *' ,[style({ opacity: 0 }), animate('5000ms ease-in', style({ opacity: 1 }))])
]),
trigger('arrow3',[  
transition('void => *' ,[style({ opacity: 0 }), animate('6000ms ease-in', style({ opacity: 1 }))])
]),
trigger('step3',[  
transition('void => *' ,[style({ opacity: 0 }), animate('7000ms ease-in', style({ opacity: 1 }))])
]),
trigger('arrow4',[  
transition('void => *' ,[style({ opacity: 0 }), animate('8000ms ease-in', style({ opacity: 1 }))])
]),
trigger('step4',[  
transition('void => *' ,[style({ opacity: 0 }), animate('9000ms ease-in', style({ opacity: 1 }))])
]),
trigger('arrow5',[  
transition('void => *' ,[style({ opacity: 0 }), animate('10000ms ease-in', style({ opacity: 1 }))])
]),
trigger('step5',[  
transition('void => *' ,[style({ opacity: 0 }), animate('11000ms ease-in', style({ opacity: 1 }))])
]),
];