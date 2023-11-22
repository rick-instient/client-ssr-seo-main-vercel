import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AboutUsPageRoutingModule } from "./about-us-routing.module";

import { AboutUsPage } from "./about-us.page";
import { ComponentsModule } from "src/app/shared/components/components.module"; 
import { SectionImgComponent } from "./section-img/section-img.component";
import { SectionOneComponent } from "./section-one/section-one.component";
import { SectionSecondComponent } from "./section-second/section-second.component";
import { SectionThirdComponent } from "./section-third/section-third.component";
import { AdvisorsSectionComponent } from "./advisors-section/advisors-section.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AboutUsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    AboutUsPage,
    SectionImgComponent,
    SectionOneComponent,
    SectionSecondComponent,
    SectionThirdComponent,
    AdvisorsSectionComponent,
  ],
})
export class AboutUsPageModule {}
