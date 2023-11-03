import { IShoe } from './components/shoe-card/shoe.interface';
import { IProduct } from './sections/popular-products/product.interface';
import { IService } from './sections/services/service.interface';

const bigShoe1 = 'assets/images/big-shoe1.png';
const bigShoe2 = 'assets/images/big-shoe2.png';
const bigShoe3 = 'assets/images/big-shoe3.png';
const customer1 = 'assets/images/customer1.png';
const customer2 = 'assets/images/customer2.png';
const shoe4 = 'assets/images/shoe4.svg';
const shoe5 = 'assets/images/shoe5.svg';
const shoe6 = 'assets/images/shoe6.svg';
const shoe7 = 'assets/images/shoe7.svg';
const thumbnailShoe1 = 'assets/images/thumbnail-shoe1.svg';
const thumbnailShoe2 = 'assets/images/thumbnail-shoe2.svg';
const thumbnailShoe3 = 'assets/images/thumbnail-shoe3.svg';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const shoes: IShoe[] = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products: IProduct[] = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
    rating: 4.5,
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
    rating: 4.2,
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
    rating: 5.0,
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
    rating: 3.5,
  },
];

export const services: IService[] = [
  {
    imgURL: 'assets/icons/truck-fast.svg',
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgURL: 'assets/icons/shield-tick.svg',
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgURL: 'assets/icons/support.svg',
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const socialMedia = [
  { src: 'assets/icons/facebook.svg', alt: 'facebook logo' },
  { src: 'assets/icons/twitter.svg', alt: 'twitter logo' },
  { src: 'assets/icons/instagram.svg', alt: 'instagram logo' },
];
