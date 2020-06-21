import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

import $ from 'jquery';

@Directive({
  selector: '[appSidenav]'
})
export class SidenavDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    $(this.el.nativeElement).sidenav();
  }

  ngOnDestroy(): void {
    $(this.el.nativeElement).sidenav('destroy');
  }
}
