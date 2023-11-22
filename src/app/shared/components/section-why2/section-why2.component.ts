import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.config';

@Component({
  selector: 'app-section-why2',
  templateUrl: './section-why2.component.html',
  styleUrls: ['./section-why2.component.scss'],
})
export class SectionWhy2Component implements OnInit {
  epochNow: any;

  @Input() state: any;
  @Input() townData: any;
  @Input() city: any;

  constructor(public config: CommonService) {
    this.epochNow = '16800000000';
  }

  ngOnInit() {}

  ngOnChanges() {}
}
