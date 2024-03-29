import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() idModal: string = '';
  @ViewChild('modalContainer') modalContainer: ElementRef | undefined ;
  @Input() closeOnBodyClick: boolean = true;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit(): void {
  }

  closeOnBodyClickEvent() {
    if(this.closeOnBodyClick) {
      this.closeModal()
    }
  }

  closeModal() {
      this.$(this.modalContainer?.nativeElement).modal('hide');
  }

}
