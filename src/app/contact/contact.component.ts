import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  line = {
    id: "@slotv8",
    name: "@slotv8",
    link: "https://line.me/R/ti/p/%40V8slot"
  }

  facebook = {
    id: "V8slot Plus",
    name: "V8slot Plus",
    link: "https://www.facebook.com/V8slotPlus/"
  }

  instagram = {
    id: "V8slot",
    name: "V8slot",
    link: "https://www.facebook.com/V8slotPlus/"
  }

  constructor() { }

  ngOnInit() {
  }

}
