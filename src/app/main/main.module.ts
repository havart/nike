import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { CustomerReviewsComponent } from './sections/customer-reviews/customer-reviews.component';
import { PopularProductsComponent } from './sections/popular-products/popular-products.component';
import { SuperQualityComponent } from './sections/super-quality/super-quality.component';
import { ServicesComponent } from './sections/services/services.component';
import { SpecialOfferComponent } from './sections/special-offer/special-offer.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SubscribeComponent } from './sections/subscribe/subscribe.component';
import { HeroComponent } from './sections/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { BtnDirective } from './ui/btn.directive';
import { ShoeCardComponent } from './components/shoe-card/shoe-card.component';
import { PopularProductCardComponent } from './components/popular-product-card/popular-product-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

@NgModule({
  declarations: [
    MainComponent,
    CustomerReviewsComponent,
    PopularProductsComponent,
    SuperQualityComponent,
    ServicesComponent,
    SpecialOfferComponent,
    FooterComponent,
    SubscribeComponent,
    HeroComponent,
    NavComponent,
    ShoeCardComponent,
    PopularProductCardComponent,
    ServiceCardComponent,
  ],
  imports: [CommonModule, MainRoutingModule, BtnDirective],
})
export class MainModule {}
