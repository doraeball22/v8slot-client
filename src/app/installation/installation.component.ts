import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import $ from 'jquery';

import { BehaviorSubject } from  'rxjs/BehaviorSubject';

import { Installation } from './shared/Installation';
import { INSTALLATIONS } from './shared/mock-installations';



@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {

    installations: Installation[] = INSTALLATIONS;
    selectedInstallation: Installation = this.installations[0];
    steps: Number[];  

    // steps = new BehaviorSubject<String[]>([]);

  // imageUrl: String;
  // baseUrl: String = "assets/img/installation/";
  // fileName: String;
  // fileExtension: String = "jpg";

  // images: String[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

    $owlElement: any;  
    defaultOptions: any = {};
  
    constructor(private el: ElementRef) {}

    ngOnInit() {
      this.onSelected(this.selectedInstallation);
    }
  
    ngAfterViewInit() {
      // use default - empty
      // for (var key in this.options) {
      //   this.defaultOptions[key] = this.options[key];
      // }
      this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
    }
  
    ngOnDestroy() {
      this.$owlElement.data('owlCarousel').destroy();
      this.$owlElement = null;
    }


    onSelected(installation) {
      this.steps = [];
      this.selectedInstallation = installation;
      
      // this.setInstallStep(this.selectedInstallation.totalStep);

      if(this.selectedInstallation.os === 'android'){
        // this.steps.next(1);
        this.steps = [1,2,3,4,5,6,7,8,9,10,11];
      }

      if(this.selectedInstallation.os === 'ios'){
        // this.steps.next(['1','1','1','1']);
        this.steps = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      }
    }

    private setInstallStep(totalStep) {
      for (let i = 1; i <= totalStep; i++) {
        this.steps.push(i);
      }
    }

}
