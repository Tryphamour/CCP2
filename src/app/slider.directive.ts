import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

import $ from 'jquery';

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    $(this.el.nativeElement).slider();
  }

  ngOnDestroy(): void {
    $(this.el.nativeElement).slider('destroy');
  }
}
