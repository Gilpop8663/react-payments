import { PAGE } from '../constants/constant';

export interface CardInfo {
  id: string;
  company: CardCompanyType;
  title: string;
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  expirationDate: {
    month: string;
    year: string;
  };
  owner: string;
}

export type CardCompanyRecord = Record<CardCompanyType, CardCompanyDetail>;

export type PageInfo = (typeof PAGE)[number];

export type CardCompanyType =
  | 'default'
  | 'bc'
  | 'shinhan'
  | 'kakao'
  | 'hyundai'
  | 'woori'
  | 'lotte'
  | 'hana'
  | 'kb';

export interface CardCompanyDetail {
  source: string;
  title: string;
  backgroundColor: string;
  color: string;
}
