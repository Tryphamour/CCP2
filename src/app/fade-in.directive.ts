import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

import $ from 'jquery';

const tags = new Set();

function getPageBottom(): number {
  return $(document).scrollTop() + $(window).height();
}

function updateVisibility(tag: any, pageBottom?: number): void {
  if (null == pageBottom) {
    pageBottom = getPageBottom();
  }

  const $tag = $(tag);
  if ($tag.position().top < pageBottom) {
    $tag.addClass("visible");
  } else {
    $tag.removeClass("visible");
  }
}

function onScroll(): void {
  const pageBottom = getPageBottom();

  for (const tag of tags) {
    updateVisibility(tag, pageBottom);
  }
}

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    if (0 === tags.size) {
      $(document).on("scroll", onScroll);
    }
    tags.add(this.el.nativeElement);
    updateVisibility(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    tags.delete(this.el.nativeElement);
    if (0 === tags.size) {
      $(document).off("scroll", onScroll);
    }
  }
}
