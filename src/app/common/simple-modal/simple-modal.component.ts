import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string = '';
  @ViewChild('modalContainer') modalContainer: ElementRef | undefined ;
  @Input() closeOnBodyClick: boolean = true;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit(): void {

    console.log(this.closeOnBodyClick);

  }

  closeModal() {
    if(this.closeOnBodyClick) {
      this.$(this.modalContainer?.nativeElement).modal('hide');
    }
  }

}