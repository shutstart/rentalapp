import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {
  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();
  constructor() { }
  @HostListener('drop', ['$event'])
  ondrop($event){
    $event.preventDefault();
    this.hovered.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }
  @HostListener('dragover', ['$event'])
  ondragover($event){
    $event.preventDefault();
    this.hovered.emit(true);
  }
  @HostListener('dragleave', ['$event'])
  dragLeave($event){
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
