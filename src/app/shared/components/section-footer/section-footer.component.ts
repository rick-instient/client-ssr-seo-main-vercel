import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from '../../urls';
import { environment } from 'src/environments/environment'; 

import { CommonService } from '../../services/common.config'; 
import { DOCUMENT } from '@angular/common';


export interface CustomWindow extends Window {

  customProperty: boolean;
}


@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss'],
})
export class SectionFooterComponent implements OnInit {
  private window: CustomWindow;
  public URLS = URLS;
  @Input() data_: any;
  @Input() aboutUsUrl: any;
  @Input() contactUrl: any;
  @Output() onComponentDataOutput = new EventEmitter<any>();
  @Output() headerInit = new EventEmitter<any>();
  epochNow: any;
  stateUrl: string;
  cityUrl: string;
  countiesUrl: string;
  regionUrl: string;
  routerType: any;
  @Input() companyName: any;
  showHeatingOil: any;
  // this.onComponentDataOutput.emit(user);
  constructor(
    private router: Router ,
    public config: CommonService ,
    @Inject(DOCUMENT) private document: Document,
    // @Inject(WINDOW) public window: Window
  ) {
    this.window = <any>this.document.defaultView;
    this.epochNow = '16800000000';
    this.stateUrl = 'States.html';
    this.regionUrl = 'Regions.html';
    this.countiesUrl = 'Counties.html';
    this.cityUrl = 'Cities.html';
  }
  ngOnInit() {
    let routerType = this.router.url.split('/')[1].replace('/', '');

    this.routerType = routerType.replace('.html', '');

    this.showHeatingOil =
      this.routerType.includes('oil_companies') ||
      this.routerType.includes('heating_oil_prices') ||
      this.routerType.includes('oil_delivery') ||
      this.routerType.includes('heating_oil');
  }

  public getUrl() {
    return `${environment.vendor_url}` + '#/sign-up';
  }

  public getUrl_login() {
    return `${environment.vendor_url}`;
  }

  navigateTo(event:any, n:any) {
    event.preventDefault();
    if (n == 'about') {
      if (this.aboutUsUrl) {
        this.window.open(this.aboutUsUrl, '_self');
        return;
      }
      this.router.navigate([URLS.PAGE_ABOUT_US]);
    }
    if (n == 'contact') {
      if (this.contactUrl) {
        this.window.open(this.contactUrl, '_self');
        return;
      }
      this.router.navigate([URLS.PAGE_CONTACT]);
    }
    if (n == 'faqs') {
      this.router.navigate([URLS.PAGE_FAQS]);
    }
    if (n == 'loginvendor') {
      let url = this.getUrl_login();
      this.window.open(url, '_self');
    }
    if (n == 'learnabout') {
      let url = this.getUrl();
      this.window.open(url, '_self');
    }
    if (n == 'aboutheatfleet') {
      this.router.navigate([URLS.PAGE_ABOUT_US]);
      let url = "https://infocenter.heatfleet.com/";
      this.window.open(url, "_blank");
    }
    if (n == 'terms') {
      this.router.navigate([URLS.TERMS_CONDITIONS]);
    }
    if (n == 'policy') {
      this.router.navigate([URLS.PRIVACY_POLICY]);
    }

    if (n == 'heatfleet') {
      this.window.open('https://heatfleet.com/', '_blank');
    }

    if (n == 'state') {
      this.config.isRegion = false;
      this.router.navigate([this.stateUrl]);
      // this.navCtrl.navigateForward(this.stateUrl);
    }

    if (n == 'region') {
      this.config.isRegion = true;
      this.router.navigate([this.regionUrl]);
      // this.navCtrl.navigateForward(this.stateUrl);
    }
    if (n == 'city') {
      this.router.navigate([this.cityUrl]);
    }

    if (n == 'counties') {
      this.router.navigate([this.countiesUrl]);
    }
  }

  // navigateRoute(event, city, fig) {
  //   let url = this.router.url.replace(this.routerType, city);
  //   if (fig == true) {
  //     event.preventDefault();
  //     this.router.navigate([url]);

  //     setTimeout(() => {
  //       // this.window.location.reload();
  //     }, 1000);
  //   } else {
  //     return url;
  //   }
  // }

  // TypeChange(event:any, n: string, fig: any) {
  //   if (n == '1') {
  //     if (!fig) {
  //       return 'heating_oil.html';
  //     }
  //     this.config.typeURL = 'heating_oil/';

  //     this.config.typeComp = 'type=1';
  //     this.config.typeParam = 'type=1';
  //     event.preventDefault();
  //     this.router.navigate(['heating_oil.html']);
  //   }
  //   if (n == '2') {
  //     this.config.typeURL = 'repair';
  //     this.config.typeComp = 'type=2';
  //     this.config.typeParam = 'type=2';
  //     this.headerInit.emit('oil');
  //   }
  //   if (n == 'subType1') {
  //     if (!fig) {
  //       return 'oil_companies.html';
  //     }
  //     this.config.typeURL = 'oil_companies/';
  //     this.config.typeCategory = 'type=1';
  //     this.config.typeParam = 'subType=1';
  //     this.headerInit.emit('subType1');
  //     event.preventDefault();
  //     this.router.navigate(['oil_companies.html']);
  //   }
  //   if (n == 'subType2') {
  //     if (!fig) {
  //       return 'heating_oil_prices.html';
  //     }

  //     this.config.typeURL = 'heating_oil_prices/';
  //     this.config.typeCategory = 'type=1';
  //     this.config.typeParam = 'subType=2';
  //     this.headerInit.emit('subType2');
  //     event.preventDefault();
  //     this.router.navigate(['heating_oil_prices.html']);
  //   }
  //   if (n == 'subType3') {
  //     if (!fig) {
  //       return 'oil_delivery.html';
  //     }
  //     this.config.typeURL = 'oil_delivery/';
  //     this.config.typeCategory = 'type=1';
  //     this.config.typeParam = 'subType=3';
  //     this.headerInit.emit('subType3');
  //     event.preventDefault();
  //     this.router.navigate(['oil_delivery.html']);
  //   }
  // }
}
