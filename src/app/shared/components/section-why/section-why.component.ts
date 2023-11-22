import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.config';

@Component({
  selector: 'app-section-why',
  templateUrl: './section-why.component.html',
  styleUrls: ['./section-why.component.scss'],
})
export class SectionWhyComponent implements OnInit {
  @Input() townData: any;
  @Input() city: any;

  epochNow: any;
  sectionContent = [
    {
      title: 'Quality Oil',
    },
    {
      title: 'On-time delivery',
    },
    {
      title: 'No contracts',
    },
    {
      title: 'Secure ordering',
    },
    {
      title: 'Trusted local providers',
    },
  ];

  constructor(public config: CommonService) {
    this.epochNow = '16800000000';
  }

  ngOnChanges() {
    if (this.city) {
      this.sectionContent = [
        {
          title: 'Quality Oil',
        },
        {
          title: 'On-time delivery',
        },
        {
          title: 'No contracts',
        },
        {
          title: 'Trusted ' + this.city + ' providers',
        },
      ];
    }
  }
  ngOnInit() {}
}
