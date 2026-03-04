export type Language = 'en' | 'ms' | 'zh';

export interface Car {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  specs: {
    passengers: number;
    transmission: 'Auto' | 'Manual';
    fuel: string;
  };
}

export interface Review {
  id: string;
  text: string;
}

export interface Translation {
  nav: {
    home: string;
    cars: string;
    about: string;
    contact: string;
    terms: string;
    reviews: string;
    location: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  search: {
    pickup: string;
    dropoff: string;
    date: string;
    search: string;
  };
  cars: {
    title: string;
    perDay: string;
    bookNow: string;
  };
  terms: {
    title: string;
    content: string[];
  };
  reviews: {
    title: string;
  };
  footer: {
    rights: string;
    privacy: string;
    service: string;
  };
  privacy: {
    title: string;
    content: string[];
  };
  service: {
    title: string;
    content: string[];
  };
}
