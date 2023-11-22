import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.config'; 
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  // @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private title: Title,
    private meta: Meta,
    public router: Router,
    public config: CommonService,
    private renderer: Renderer2
  ) {
    let title_ = 'Privacy Policy | HeatFleet.com';
    this.title.setTitle(title_);
    let description =
      'Heat Fleet respects homeowners, oil company, and heating contractor privacy. Our directory does not require homeowners to enter personal information.';
    this.meta.updateTag({
      name: 'description',
      content: description,
    });


    if (!environment.production) {
      this.meta.updateTag({
        name: 'robots',
        content: 'noindex, nofollow',
      });
    } else {
      this.meta.updateTag({
        name: 'robots',
        content: 'all',
      });
    }


    this.meta.addTags([
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title_ },
      { property: 'og:url', content: this.router.url },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:description', content: description },
      { property: 'twitter:title', content: title_ },
      { property: 'twitter:site', content: this.router.url },
      {
        property: 'og:image',
        content:
          '/assets/icons/9m-Heat-Fleet-Heating-Oil-Logo.svg',
      },
      {
        property: 'twitter:image',
        content:
          '/assets/icons/9m-Heat-Fleet-Heating-Oil-Logo.svg',
      },
    ]);
  }

  ngOnInit() {
    // this.config.checkCookie();
    // this.scrollTop();

    this.config.updateCanonicalUrl('https://heatfleet.com' + this.router.url);
    let schema = [
      {
        '@context': 'http:\u002F\u002Fschema.org',
        '@type': 'Organization',
        name: 'Privacy Policy | HeatFleet.com',
        url: 'https:\u002F\u002Fheatfleet.com\u002F',
        logo: 'https:\u002F\u002Fmedia-cdn.heatfleet.com\u002F9m-Heat-Fleet-Heating-Oil-Logo.svg',
        description: 'Privacy Policy Page | Heat Fleet',
      },
      {
        '@context': 'http:\u002F\u002Fschema.org',
        '@type': 'WebSite',
        name: 'Privacy Policy | HeatFleet.com',
        url: 'https:\u002F\u002Fheatfleet.com\u002F',
      },
    ];

    this.config.insertSchema(schema, 'structured-data-org');
  }


}
