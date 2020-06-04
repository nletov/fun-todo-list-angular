import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToDoStyle]'
})
export class ToDoStyleDirective {
  @Input('appToDoStyle') isDone: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('click') ononClick() {
    console.log(this.isDone);
    this.el.nativeElement.style.textDecoration = this.isDone ? 'unset' : 'line-through';
  }
}
