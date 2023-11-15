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
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { MatRippleModule } from '@angular/material/core';
import { UserComponent } from './components/user/user.component';
import { CategoriesComponent } from './sections/categories/categories.component';

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
    ReviewCardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BtnDirective,
    MatRippleModule,
    UserComponent,
    CategoriesComponent,
  ],
})
export class MainModule {}
