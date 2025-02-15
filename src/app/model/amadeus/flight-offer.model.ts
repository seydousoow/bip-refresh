import { IDictionaries, IFlightOffer, TTravelerType } from './flight-offer-price.model';

export interface IFlightOfferResponse {
  meta: ISearchMetaData;
  data: IFlightOffer[];
  dictionaries: IDictionaries;
}

export interface ISearchMetaData {
  count: number;
  links: { self: string; };
}

export const TravelerTypeNarrative: (item: TTravelerType) => string = item => {
  switch (item) {
    case 'SEATED_INFANT':
    case 'HELD_INFANT':
      return 'Bébé';
    case 'YOUNG':
    case 'CHILD':
      return 'Enfant';
    default:
      return 'Adulte';
  }
};

export const TravelerTypeNarrativeDetailed: (travelerType: TTravelerType) => string = travelerType => ({
  SEATED_INFANT: 'Bébé assis',
  HELD_INFANT: 'Bébé sur genoux',
  CHILD: 'Enfant',
  STUDENT: 'Étudiant',
  YOUNG: 'Jeune',
  SENIOR: 'Sénior',
  ADULT: 'Adulte'
}[travelerType] ?? 'Adulte');
