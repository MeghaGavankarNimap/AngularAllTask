import { Component, ElementRef ,HostBinding,HostListener} from '@angular/core';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.scss']
})
export class ColourComponent {
  constructor(private EL:ElementRef) {}

  // Using normal directive
  // ngOnInit() {
  //   this.EL.nativeElement.style.color="green"
  // }

  // Uisng host binding
  @HostBinding('style.color')textColor:any;
  ngOnInit():void {
    this.textColor="green"
  }


//  USing hostListener
  @HostListener('mouseover')onClick(){
   this.textColor="red";
  }

}




