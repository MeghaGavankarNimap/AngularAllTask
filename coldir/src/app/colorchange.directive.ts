import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  // constructor(private EL:ElementRef) {
  //   EL.nativeElement.style.color="green"
  //  }

}
