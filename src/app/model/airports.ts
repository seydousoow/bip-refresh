// noinspection SpellCheckingInspection

export interface IAirportModel {
  iata: string;
  airportName: string;
  countryCode: string;
  countryName: string;
  city: string;
  state: string;
}

export interface IAirportSimpleModel {
  iata: string;
  name: string
}

export interface IGroupedAirports {
  city: string,
  countryCode: string,
  countryName: string,
  airports: IAirportSimpleModel[],
}

export function groupAirportsByCityAndCountry(): IGroupedAirports[] {
  const groupedAirports: { [key: string]: IGroupedAirports } = {};

  airports.forEach(airport => {
    const key = `${airport.countryCode}-${airport.city}`;
    if (!groupedAirports[key]) {
      groupedAirports[key] = { city: airport.city, countryCode: airport.countryCode, countryName: airport.countryName, airports: [] };
    }
    groupedAirports[key].airports.push({ iata: airport.iata, name: airport.airportName });
  });

  return Object.values(groupedAirports).sort((a, b) => {
    if (a.countryCode === b.countryCode) {
      return a.city.localeCompare(b.city);
    }
    return a.countryCode.localeCompare(b.countryCode);
  });
}

const airports: IAirportModel[] = [
  {
    airportName: 'Akureyri Airport',
    city: 'Akureyri',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'AEY',
    state: 'Northeast'
  },
  {
    airportName: 'Bildudalur Airport',
    city: 'Bildudalur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'BIU',
    state: 'Westfjords'
  },
  {
    airportName: 'Borgarfjordur eystri Airport',
    city: 'Borgarfjordur eystri',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'BGJ',
    state: 'East'
  },
  {
    airportName: 'Bakkafjordur Airport',
    city: 'Bakkafjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'BJD',
    state: 'Northeast'
  },
  {
    airportName: 'Hjaltabakki Airport',
    city: 'Blonduos',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'BLO',
    state: 'Northwest'
  },
  {
    airportName: 'Budardalur Airport',
    city: 'Budardalur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'BQD',
    state: 'West'
  },
  {
    airportName: 'Breiddalsvik Airport',
    city: 'Breiddalsvik',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'BXV',
    state: 'East'
  },
  {
    airportName: 'Djupivogur Airport',
    city: 'Djupivogur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'DJU',
    state: 'East'
  },
  {
    airportName: 'Egilsstadir Airport',
    city: 'Egilsstadir',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'EGS',
    state: 'East'
  },
  {
    airportName: 'Faskrudsfjordur Airport',
    city: 'Faskrudsfjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'FAS',
    state: 'East'
  },
  {
    airportName: 'Fagurholsmyri Airport',
    city: 'Fagurholsmyri',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'FAG',
    state: 'East'
  },
  {
    airportName: 'Grundarfjordur Airport',
    city: 'Grundarfjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'GUU',
    state: 'West'
  },
  {
    airportName: 'Gjogur Airport',
    city: 'Gjogur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'GJR',
    state: 'Westfjords'
  },
  {
    airportName: 'Grimsey Airport',
    city: 'Grimsey',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'GRY',
    state: 'Northeast'
  },
  {
    airportName: 'Holmavik Airport',
    city: 'Holmavik',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'HVK',
    state: 'Westfjords'
  },
  {
    airportName: 'Hornafjordur Airport',
    city: 'Hornafjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'HFN',
    state: 'East'
  },
  {
    airportName: 'Holt Airport',
    city: 'Flateyri',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'FLI',
    state: 'Westfjords'
  },
  {
    airportName: 'Husavik Airport',
    city: 'Husavik',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'HZK',
    state: 'Northeast'
  },
  {
    airportName: 'Krokstadarmelar Airport',
    city: 'Hvammstangi',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'HVM',
    state: 'Northwest'
  },
  {
    airportName: 'Ingjaldssandur Airport',
    city: 'Onundarfjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'HLO',
    state: 'Westfjords'
  },
  {
    airportName: 'Isafjordur Airport',
    city: 'Isafjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'IFJ',
    state: 'Westfjords'
  },
  {
    airportName: 'Keflavik International Airport',
    city: 'Reykjavik',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'KEF',
    state: 'Southern Peninsula'
  },
  {
    airportName: 'Kopasker Airport',
    city: 'Kopasker',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'OPA',
    state: 'Northeast'
  },
  {
    airportName: 'Saudarkrokur Airport',
    city: 'Saudarkrokur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'SAK',
    state: 'Northwest'
  },
  {
    airportName: 'Nordfjordur Airport',
    city: 'Nordfjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'NOR',
    state: 'East'
  },
  {
    airportName: 'Olafsfjordur Airport',
    city: 'Olafsfjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'OFJ',
    state: 'Northeast'
  },
  {
    airportName: 'Patreksfjordur Airport',
    city: 'Patreksfjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'PFJ',
    state: 'Westfjords'
  },
  {
    airportName: 'Reykholar Airport',
    city: 'Reykholar',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'RHA',
    state: 'Westfjords'
  },
  {
    airportName: 'Rif Airport',
    city: 'Rif',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'OLI',
    state: 'West'
  },
  {
    airportName: 'Raufarhofn Airport',
    city: 'Raufarhofn',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'RFN',
    state: 'Northeast'
  },
  {
    airportName: 'Reykjavik Airport',
    city: 'Reykjavik',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'RKV',
    state: 'Capital Region'
  },
  {
    airportName: 'Reykjahlid Airport',
    city: 'Myvatn',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'MVA',
    state: 'Northeast'
  },
  {
    airportName: 'Siglufjordur Airport',
    city: 'Siglufjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'SIJ',
    state: 'Northeast'
  },
  {
    airportName: 'Stykkisholmur Airport',
    city: 'Stykkisholmur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'SYK',
    state: 'West'
  },
  {
    airportName: 'Tingeyri Airport',
    city: 'Tingeyri',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'TEY',
    state: 'Westfjords'
  },
  {
    airportName: 'Thorshofn Airport',
    city: 'Thorshofn',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'THO',
    state: 'Northeast'
  },
  {
    airportName: 'Vestmannaeyjar Airport',
    city: 'Vestmannaeyjar',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'VEY',
    state: 'South'
  },
  {
    airportName: 'Vopnafjordur Airport',
    city: 'Vopnafjordur',
    countryCode: 'IS',
    countryName: 'Islande',
    iata: 'VPN',
    state: 'East'
  },
  {
    airportName: 'Edmonton International Airport',
    city: 'Edmonton',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YEG',
    state: 'Alberta'
  },
  {
    airportName: 'La Macaza / Mont-Tremblant International Inc Airport',
    city: 'Riviere Rouge',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YTM',
    state: 'Quebec'
  },
  {
    airportName: 'John C. Munro Hamilton International Airport',
    city: 'Hamilton',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YHM',
    state: 'Ontario'
  },
  {
    airportName: 'Halifax / Stanfield International Airport',
    city: 'Halifax',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YHZ',
    state: 'Nova Scotia'
  },
  {
    airportName: 'Montreal International (Mirabel) Airport',
    city: 'Montreal',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YMX',
    state: 'Quebec'
  },
  {
    airportName: 'Ottawa Macdonald-Cartier International Airport',
    city: 'Ottawa',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YOW',
    state: 'Ontario'
  },
  {
    airportName: 'Quebec Jean Lesage International Airport',
    city: 'Quebec',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YQB',
    state: 'Quebec'
  },
  {
    airportName: 'Greater Moncton International Airport',
    city: 'Moncton',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YQM',
    state: 'New Brunswick'
  },
  {
    airportName: 'Regina International Airport',
    city: 'Regina',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YQR',
    state: 'Saskatchewan'
  },
  {
    airportName: 'Gander International Airport',
    city: 'Gander',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YQX',
    state: 'Newfoundland and Labrador'
  },
  {
    airportName: 'Montreal / Pierre Elliott Trudeau International Airport',
    city: 'Montreal',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YUL',
    state: 'Quebec'
  },
  {
    airportName: 'Vancouver International Airport',
    city: 'Vancouver',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YVR',
    state: 'British Columbia'
  },
  {
    airportName: 'Winnipeg / James Armstrong Richardson International Airport',
    city: 'Winnipeg',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YWG',
    state: 'Manitoba'
  },
  {
    airportName: 'Saskatoon John G. Diefenbaker International Airport',
    city: 'Saskatoon',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YXE',
    state: 'Saskatchewan'
  },
  {
    airportName: 'Whitehorse / Erik Nielsen International Airport',
    city: 'Whitehorse',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YXY',
    state: 'Yukon'
  },
  {
    airportName: 'Calgary International Airport',
    city: 'Calgary',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YYC',
    state: 'Alberta'
  },
  {
    airportName: 'Victoria International Airport',
    city: 'Victoria',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YYJ',
    state: 'British-Columbia'
  },
  {
    airportName: 'St. Johns International Airport',
    city: 'St. Johns',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YYT',
    state: 'Newfoundland-and-Labrador'
  },
  {
    airportName: 'Lester B. Pearson International Airport',
    city: 'Toronto',
    countryCode: 'CA',
    countryName: 'Canada',
    iata: 'YYZ',
    state: 'Ontario'
  },
  {
    airportName: 'Houari Boumediene Airport',
    city: 'Algiers',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'ALG',
    state: 'Algiers'
  },
  {
    airportName: 'Djanet Inedbirene Airport',
    city: 'Djanet',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'DJG',
    state: 'Illizi'
  },
  {
    airportName: 'Ain Arnat Airport',
    city: 'Setif',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'QSF',
    state: 'Setif'
  },
  {
    airportName: 'Aguenar – Hadj Bey Akhamok Airport',
    city: 'Tamanrasset',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'TMR',
    state: 'Tamanrasset'
  },
  {
    airportName: 'Mecheria Airport',
    city: 'Mecheria',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'MZW',
    state: 'Naama'
  },
  {
    airportName: 'Annaba Airport',
    city: 'Annabah',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'AAE',
    state: 'Annaba'
  },
  {
    airportName: 'Mohamed Boudiaf International Airport',
    city: 'Constantine',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'CZL',
    state: 'Constantine'
  },
  {
    airportName: 'Hassi RMel Airport',
    city: 'Laghouat',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'HRM',
    state: 'Laghouat'
  },
  {
    airportName: 'Tsletsi Airport',
    city: 'Djelfa',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'QDJ',
    state: 'Djelfa'
  },
  {
    airportName: 'Tafaraoui Airport',
    city: 'Oran',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'TAF',
    state: 'Oran'
  },
  {
    airportName: 'Bechar Boudghene Ben Ali Lotfi Airport',
    city: 'Bechar',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'CBH',
    state: 'Bechar'
  },
  {
    airportName: 'El Bayadh Airport',
    city: 'El Bayadh',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'EBH',
    state: 'El-Bayadh'
  },
  {
    airportName: 'In Guezzam Airport',
    city: 'In Guezzam',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'INF',
    state: 'Tamanrasset'
  },
  {
    airportName: 'Bordj Badji Mokhtar Airport',
    city: 'Bordj Badji Mokhtar',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'BMW',
    state: 'Adrar'
  },
  {
    airportName: 'Touat Cheikh Sidi Mohamed Belkebir Airport',
    city: 'Adrar',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'AZR',
    state: 'Adrar'
  },
  {
    airportName: 'Noumerat - Moufdi Zakaria Airport',
    city: 'Ghardaia',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'GHA',
    state: 'Ghardaia'
  },
  {
    airportName: 'Oued Irara Airport',
    city: 'Hassi Messaoud',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'HME',
    state: 'Ouargla'
  },
  {
    airportName: 'In Salah Airport',
    city: 'In Salah',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'INZ',
    state: 'Tamanrasset'
  },
  {
    airportName: 'Touggourt Sidi Madhi Airport',
    city: 'Touggourt',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'TGR',
    state: 'Ouargla'
  },
  {
    airportName: 'Laghouat Airport',
    city: 'Laghouat',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'LOO',
    state: 'Laghouat'
  },
  {
    airportName: 'Guemar Airport',
    city: 'Guemar',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'ELU',
    state: 'El-Oued'
  },
  {
    airportName: 'Timimoun Airport',
    city: 'Timimoun',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'TMX',
    state: 'Adrar'
  },
  {
    airportName: 'Ain el Beida Airport',
    city: 'Ouargla',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'OGX',
    state: 'Ouargla'
  },
  {
    airportName: 'In Amenas Airport',
    city: 'Amenas',
    countryCode: 'DZ',
    countryName: 'Algerie',
    iata: 'IAM',
    state: 'Illizi'
  },
  {
    airportName: 'Cadjehoun Airport',
    city: 'Cotonou',
    countryCode: 'BJ',
    countryName: 'Benin',
    iata: 'COO',
    state: 'Atlantique'
  },
  {
    airportName: 'Djougou Airport',
    city: 'Djougou',
    countryCode: 'BJ',
    countryName: 'Benin',
    iata: 'DJA',
    state: 'Atakora'
  },
  {
    airportName: 'Kandi Airport',
    city: 'Kandi',
    countryCode: 'BJ',
    countryName: 'Benin',
    iata: 'KDC',
    state: 'Alibori'
  },
  {
    airportName: 'Natitingou Airport',
    city: 'Natitingou',
    countryCode: 'BJ',
    countryName: 'Benin',
    iata: 'NAE',
    state: 'Natitingou'
  },
  {
    airportName: 'Parakou Airport',
    city: 'Parakou',
    countryCode: 'BJ',
    countryName: 'Benin',
    iata: 'PKO',
    state: 'Borgou'
  },
  {
    airportName: 'Save Airport',
    city: 'Save',
    countryCode: 'BJ',
    countryName: 'Benin',
    iata: 'SVF',
    state: 'Zou'
  },
  {
    airportName: 'Kaya Airport',
    city: 'Kaya',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XKY',
    state: 'Kaya'
  },
  {
    airportName: 'Ouahigouya Airport',
    city: 'Ouahigouya',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'OUG',
    state: 'Ouahigouya'
  },
  {
    airportName: 'Djibo Airport',
    city: 'Djibo',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XDJ',
    state: 'Sahel'
  },
  {
    airportName: 'Leo Airport',
    city: 'Leo',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XLU',
    state: 'Leo'
  },
  {
    airportName: 'Po Airport',
    city: 'Po',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'PUP',
    state: 'Centre-Sud'
  },
  {
    airportName: 'Boulsa Airport',
    city: 'Boulsa',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XBO',
    state: 'Boulsa'
  },
  {
    airportName: 'Bogande Airport',
    city: 'Bogande',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XBG',
    state: 'Bogande'
  },
  {
    airportName: 'Diapaga Airport',
    city: 'Diapaga',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'DIP',
    state: 'Diapaga'
  },
  {
    airportName: 'Dori Airport',
    city: 'Dori',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'DOR',
    state: 'Sahel'
  },
  {
    airportName: 'Fada Ngourma Airport',
    city: 'Fada Ngourma',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'FNG',
    state: 'Est'
  },
  {
    airportName: 'Gorom-Gorom Airport',
    city: 'Gorom-Gorom',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XGG',
    state: 'Sahel'
  },
  {
    airportName: 'Kantchari Airport',
    city: 'Kantchari',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XKA',
    state: 'Kantchari'
  },
  {
    airportName: 'Tambao Airport',
    city: 'Tambao',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'TMQ',
    state: 'Sahel'
  },
  {
    airportName: 'Pama Airport',
    city: 'Pama',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XPA',
    state: 'Pama'
  },
  {
    airportName: 'Arly Airport',
    city: 'Arly',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'ARL',
    state: 'Arly'
  },
  {
    airportName: 'Sebba Airport',
    city: 'Sebba',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XSE',
    state: 'Sahel'
  },
  {
    airportName: 'Tenkodogo Airport',
    city: 'Tenkodogo',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'TEG',
    state: 'Tenkodogo'
  },
  {
    airportName: 'Zabre Airport',
    city: 'Zabre',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XZA',
    state: 'Zabre'
  },
  {
    airportName: 'Ouagadougou Airport',
    city: 'Ouagadougou',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'OUA',
    state: 'Ouagadougou'
  },
  {
    airportName: 'Banfora Airport',
    city: 'Banfora',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'BNR',
    state: 'Cascades'
  },
  {
    airportName: 'Dedougou Airport',
    city: 'Dedougou',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'DGU',
    state: 'Dedougou'
  },
  {
    airportName: 'Gaoua Airport',
    city: 'Gaoua',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XGA',
    state: 'Sud-Ouest'
  },
  {
    airportName: 'Nouna Airport',
    city: 'Nouna',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XNU',
    state: 'Nouna'
  },
  {
    airportName: 'Bobo Dioulasso Airport',
    city: 'Bobo Dioulasso',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'BOY',
    state: 'Hauts-Bassins'
  },
  {
    airportName: 'Tougan Airport',
    city: 'Tougan',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'TUQ',
    state: 'Boucle-du-Mouhoun'
  },
  {
    airportName: 'Diebougou Airport',
    city: 'Diebougou',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XDE',
    state: 'Diebougou'
  },
  {
    airportName: 'Aribinda Airport',
    city: 'Aribinda',
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    iata: 'XAR',
    state: 'Sahel'
  },
  {
    airportName: 'Kotoka International Airport',
    city: 'Accra',
    countryCode: 'GH',
    countryName: 'Ghana',
    iata: 'ACC',
    state: 'Accra'
  },
  {
    airportName: 'Tamale Airport',
    city: 'Tamale',
    countryCode: 'GH',
    countryName: 'Ghana',
    iata: 'TML',
    state: 'Tamale'
  },
  {
    airportName: 'Kumasi Airport',
    city: 'Kumasi',
    countryCode: 'GH',
    countryName: 'Ghana',
    iata: 'KMS',
    state: 'Kumasi'
  },
  {
    airportName: 'Sunyani Airport',
    city: 'Sunyani',
    countryCode: 'GH',
    countryName: 'Ghana',
    iata: 'NYI',
    state: 'Brong-Ahafo'
  },
  {
    airportName: 'Takoradi Airport',
    city: 'Sekondi-Takoradi',
    countryCode: 'GH',
    countryName: 'Ghana',
    iata: 'TKD',
    state: 'Western'
  },
  {
    airportName: 'Port Bouet Airport',
    city: 'Abidjan',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'ABJ',
    state: 'Abidjan'
  },
  {
    airportName: 'Abengourou Airport',
    city: 'Abengourou',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'OGO',
    state: 'Abengourou'
  },
  {
    airportName: 'Boundiali Airport',
    city: 'Boundiali',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'BXI',
    state: 'Boundiali'
  },
  {
    airportName: 'Bouake Airport',
    city: 'Vallee-du-Bandama',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'BYK',
    state: 'Vallee-du-Bandama'
  },
  {
    airportName: 'Bouna Airport',
    city: 'Bouna',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'BQO',
    state: 'Bouna'
  },
  {
    airportName: 'Soko Airport',
    city: 'Bondoukou',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'BDK',
    state: 'Bondoukou'
  },
  {
    airportName: 'Dimbokro Airport',
    city: 'Dimbokro',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'DIM',
    state: 'Lacs'
  },
  {
    airportName: 'Daloa Airport',
    city: 'Sassandra-Marahoue',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'DJO',
    state: 'Sassandra-Marahoue'
  },
  {
    airportName: 'Ferkessedougou Airport',
    city: 'Ferkessedougou',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'FEK',
    state: 'Ferkessedougou'
  },
  {
    airportName: 'Gagnoa Airport',
    city: 'Gagnoa',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'GGN',
    state: 'Goh-Djiboua'
  },
  {
    airportName: 'Guiglo Airport',
    city: 'Guiglo',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'GGO',
    state: 'Guiglo'
  },
  {
    airportName: 'Nero-Mer Airport',
    city: 'Grand-Bereby',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'BBV',
    state: 'Bas-Sassandra'
  },
  {
    airportName: 'Korhogo Airport',
    city: 'Savanes',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'HGO',
    state: 'Savanes'
  },
  {
    airportName: 'Man Airport',
    city: 'Montagnes',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'MJC',
    state: 'Montagnes'
  },
  {
    airportName: 'Odienne Airport',
    city: 'Odienne',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'KEO',
    state: 'Denguele'
  },
  {
    airportName: 'Ouango Fitini Airport',
    city: 'Ouango Fitini',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'OFI',
    state: 'Ouango Fitini'
  },
  {
    airportName: 'Seguela Airport',
    city: 'Seguela',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'SEO',
    state: 'Woroba'
  },
  {
    airportName: 'San Pedro Airport',
    city: 'Bas-Sassandra',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'SPY',
    state: 'Bas-Sassandra'
  },
  {
    airportName: 'Sassandra Airport',
    city: 'Sassandra',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'ZSS',
    state: 'Sassandra'
  },
  {
    airportName: 'Tabou Airport',
    city: 'Tabou',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'TXU',
    state: 'Tabou'
  },
  {
    airportName: 'Yamoussoukro Airport',
    city: 'Yamoussoukro',
    countryCode: 'CI',
    countryName: 'Cote D\'Ivoire',
    iata: 'ASK',
    state: 'Yamoussoukro-Autonomous-District'
  },
  {
    airportName: 'Nnamdi Azikiwe International Airport',
    city: 'Abuja',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'ABV',
    state: 'FCT'
  },
  {
    airportName: 'Akure Airport',
    city: 'Akure',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'AKR',
    state: 'Ondo'
  },
  {
    airportName: 'Asaba International Airport',
    city: 'Asaba',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'ABB',
    state: 'Delta'
  },
  {
    airportName: 'Benin Airport',
    city: 'Benin',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'BNI',
    state: 'Edo'
  },
  {
    airportName: 'Margaret Ekpo International Airport',
    city: 'Calabar',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'CBQ',
    state: 'Cross-River'
  },
  {
    airportName: 'Akanu Ibiam International Airport',
    city: 'Enegu',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'ENU',
    state: 'Enugu'
  },
  {
    airportName: 'Gombe Lawanti International Airport',
    city: 'Gombe',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'GMO',
    state: 'Bauchi'
  },
  {
    airportName: 'Gusau Airport',
    city: 'Gusau',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'QUS',
    state: 'Zamfara'
  },
  {
    airportName: 'Ibadan Airport',
    city: 'Ibadan',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'IBA',
    state: 'Oyo'
  },
  {
    airportName: 'Ilorin International Airport',
    city: 'Ilorin',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'ILR',
    state: 'Kwara'
  },
  {
    airportName: 'Sam Mbakwe International Airport',
    city: 'Owerri',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'QOW',
    state: 'Imo'
  },
  {
    airportName: 'Yakubu Gowon Airport',
    city: 'Jos',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'JOS',
    state: 'Plateau'
  },
  {
    airportName: 'Kaduna Airport',
    city: 'Kaduna',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'KAD',
    state: 'Kaduna'
  },
  {
    airportName: 'Mallam Aminu International Airport',
    city: 'Kano',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'KAN',
    state: 'Kano'
  },
  {
    airportName: 'Maiduguri International Airport',
    city: 'Maiduguri',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'MIU',
    state: 'Borno'
  },
  {
    airportName: 'Makurdi Airport',
    city: 'Makurdi',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'MDI',
    state: 'Benue'
  },
  {
    airportName: 'Murtala Muhammed International Airport',
    city: 'Lagos',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'LOS',
    state: 'Lagos'
  },
  {
    airportName: 'Minna Airport',
    city: 'Minna',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'MXJ',
    state: 'Niger'
  },
  {
    airportName: 'Port Harcourt International Airport',
    city: 'Port Harcourt',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'PHC',
    state: 'Rivers'
  },
  {
    airportName: 'Sadiq Abubakar III International Airport',
    city: 'Sokoto',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'SKO',
    state: 'Sokoto'
  },
  {
    airportName: 'Enfidha Zine El Abidine Ben Ali International Airport',
    city: 'Enfidha',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'NBE',
    state: 'Susah'
  },
  {
    airportName: 'Yola Airport',
    city: 'Yola',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'YOL',
    state: 'Adamawa'
  },
  {
    airportName: 'Zaria Airport',
    city: 'Zaria',
    countryCode: 'NG',
    countryName: 'Nigeria',
    iata: 'ZAR',
    state: 'Kaduna'
  },
  {
    airportName: 'Maradi Airport',
    city: 'Maradi',
    countryCode: 'NE',
    countryName: 'Niger',
    iata: 'MFQ',
    state: 'Maradi'
  },
  {
    airportName: 'Diori Hamani International Airport',
    city: 'Niamey',
    countryCode: 'NE',
    countryName: 'Niger',
    iata: 'NIM',
    state: 'Niamey'
  },
  {
    airportName: 'Tahoua Airport',
    city: 'Tahoua',
    countryCode: 'NE',
    countryName: 'Niger',
    iata: 'THZ',
    state: 'Tahoua'
  },
  {
    airportName: 'Mano Dayak International Airport',
    city: 'Agadez',
    countryCode: 'NE',
    countryName: 'Niger',
    iata: 'AJY',
    state: 'Agadez'
  },
  {
    airportName: 'Zinder Airport',
    city: 'Zinder',
    countryCode: 'NE',
    countryName: 'Niger',
    iata: 'ZND',
    state: 'Zinder'
  },
  {
    airportName: 'Tabarka 7 Novembre Airport',
    city: 'Tabarka',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'TBJ',
    state: 'Jundubah'
  },
  {
    airportName: 'Monastir Habib Bourguiba International Airport',
    city: 'Monastir',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'MIR',
    state: 'Al-Munastir'
  },
  {
    airportName: 'Tunis Carthage International Airport',
    city: 'Tunis',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'TUN',
    state: 'Tunis'
  },
  {
    airportName: 'Sidi Ahmed Air Base',
    city: 'Sidi Ahmed',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'OIZ',
    state: 'Banzart'
  },
  {
    airportName: 'Gafsa Ksar International Airport',
    city: 'Gafsa',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'GAF',
    state: 'Gafsa'
  },
  {
    airportName: 'Gabes Matmata International Airport',
    city: 'Gabes',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'GAE',
    state: 'Qabis'
  },
  {
    airportName: 'Djerba Zarzis International Airport',
    city: 'Djerba',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'DJE',
    state: 'Madanin'
  },
  {
    airportName: 'El Borma Airport',
    city: 'El Borma',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'EBM',
    state: 'Tataouine'
  },
  {
    airportName: 'Sfax Thyna International Airport',
    city: 'Sfax',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'SFA',
    state: 'Safaqis'
  },
  {
    airportName: 'Tozeur Nefta International Airport',
    city: 'Tozeur',
    countryCode: 'TN',
    countryName: 'Tunisie',
    iata: 'TOE',
    state: 'Tawzar'
  },
  {
    airportName: 'Niamtougou International Airport',
    city: 'Niamtougou',
    countryCode: 'TG',
    countryName: 'Togo',
    iata: 'LRL',
    state: 'Kara'
  },
  {
    airportName: 'Lome-Tokoin Airport',
    city: 'Lome',
    countryCode: 'TG',
    countryName: 'Togo',
    iata: 'LFW',
    state: 'Maritime'
  },
  {
    airportName: 'Antwerp International Airport (Deurne)',
    city: 'Antwerp',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'ANR',
    state: 'Flanders'
  },
  {
    airportName: 'Brussels Airport',
    city: 'Brussels',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'BRU',
    state: 'Flanders'
  },
  {
    airportName: 'Brussels South Charleroi Airport',
    city: 'Brussels',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'CRL',
    state: 'Wallonia'
  },
  {
    airportName: 'Wevelgem Airport',
    city: 'Wevelgem',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'KJK',
    state: 'Flanders'
  },
  {
    airportName: 'Liege Airport',
    city: 'Liege',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'LGG',
    state: 'Wallonia'
  },
  {
    airportName: 'Suarlee Airport',
    city: 'Namur',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'QNM',
    state: 'Wallonia'
  },
  {
    airportName: 'Ostend-Bruges International Airport',
    city: 'Ostend',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'OST',
    state: 'Flanders'
  },
  {
    airportName: 'Hasselt Airport',
    city: 'Hasselt',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'QHA',
    state: 'Flanders'
  },
  {
    airportName: 'Oostmalle Air Base',
    city: 'Zoersel',
    countryCode: 'BE',
    countryName: 'Belgique',
    iata: 'OBL',
    state: 'Flanders'
  },
  {
    airportName: 'Berlin-Schonefeld International Airport',
    city: 'Berlin',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'SXF',
    state: 'Brandenburg'
  },
  {
    airportName: 'Dresden Airport',
    city: 'Dresden',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'DRS',
    state: 'Saxony'
  },
  {
    airportName: 'Frankfurt am Main International Airport',
    city: 'Frankfurt-am-Main',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'FRA',
    state: 'Hesse'
  },
  {
    airportName: 'Munster Osnabruck Airport',
    city: 'Munster',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'FMO',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Hamburg Airport',
    city: 'Hamburg',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'HAM',
    state: 'Hamburg'
  },
  {
    airportName: 'Berlin Tempelhof Airport',
    city: 'Berlin',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'THF',
    state: 'Berlin'
  },
  {
    airportName: 'Cologne Bonn Airport',
    city: 'Cologne',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'CGN',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Dusseldorf International Airport',
    city: 'Dusseldorf',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'DUS',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Munich International Airport',
    city: 'Munich',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'MUC',
    state: 'Bavaria'
  },
  {
    airportName: 'Nuremberg Airport',
    city: 'Nuremberg',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'NUE',
    state: 'Bavaria'
  },
  {
    airportName: 'Leipzig Halle Airport',
    city: 'Leipzig',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'LEJ',
    state: 'Saxony'
  },
  {
    airportName: 'Stuttgart Airport',
    city: 'Stuttgart',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'STR',
    state: 'Baden-Wuerttemberg'
  },
  {
    airportName: 'Berlin-Tegel International Airport',
    city: 'Berlin',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'TXL',
    state: 'Berlin'
  },
  {
    airportName: 'Hannover Airport',
    city: 'Hannover',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'HAJ',
    state: 'Lower-Saxony'
  },
  {
    airportName: 'Bremen Airport',
    city: 'Bremen',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'BRE',
    state: 'Bremen'
  },
  {
    airportName: 'Frankfurt-Hahn Airport',
    city: 'Hahn',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'HHN',
    state: 'Rheinland-Pfalz'
  },
  {
    airportName: 'Hamburg-Finkenwerder Airport',
    city: 'Hamburg',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'XFW',
    state: 'Hamburg'
  },
  {
    airportName: 'Memmingen Allgau Airport',
    city: 'Memmingen',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'FMM',
    state: 'Bavaria'
  },
  {
    airportName: 'Bonn-Hangelar Airport',
    city: 'Bonn',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'BNJ',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Monchengladbach Airport',
    city: 'Monchengladbach',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'MGL',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Paderborn Lippstadt Airport',
    city: 'Paderborn',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'PAD',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Niederrhein Airport',
    city: 'Weeze',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'NRN',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Dortmund Airport',
    city: 'Dortmund',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'DTM',
    state: 'North-Rhine-Westphalia'
  },
  {
    airportName: 'Friedrichshafen Airport',
    city: 'Friedrichshafen',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'FDH',
    state: 'Baden-Wuerttemberg'
  },
  {
    airportName: 'Karlsruhe Baden-Baden Airport',
    city: 'Baden-Baden',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'FKB',
    state: 'Baden-Wuerttemberg'
  },
  {
    airportName: 'Braunschweig Wolfsburg Airport',
    city: 'Lower-Saxony',
    countryCode: 'DE',
    countryName: 'Allemagne',
    iata: 'BWE',
    state: 'Lower-Saxony'
  },
  {
    airportName: 'Kardla Airport',
    city: 'Kardla',
    countryCode: 'EE',
    countryName: 'Estonie',
    iata: 'KDL',
    state: 'Hiiumaa'
  },
  {
    airportName: 'Kuressaare Airport',
    city: 'Kuressaare',
    countryCode: 'EE',
    countryName: 'Estonie',
    iata: 'URE',
    state: 'Saare'
  },
  {
    airportName: 'Parnu Airport',
    city: 'Parnu',
    countryCode: 'EE',
    countryName: 'Estonie',
    iata: 'EPU',
    state: 'Paernumaa'
  },
  {
    airportName: 'Tallinn Airport',
    city: 'Tallinn',
    countryCode: 'EE',
    countryName: 'Estonie',
    iata: 'TLL',
    state: 'Harjumaa'
  },
  {
    airportName: 'Tartu Airport',
    city: 'Tartu',
    countryCode: 'EE',
    countryName: 'Estonie',
    iata: 'TAY',
    state: 'Tartu'
  },
  {
    airportName: 'Helsinki Vantaa Airport',
    city: 'Helsinki',
    countryCode: 'FI',
    countryName: 'Finlande',
    iata: 'HEL',
    state: 'Uusimaa'
  },
  {
    airportName: 'Kittila Airport',
    city: 'Kittila',
    countryCode: 'FI',
    countryName: 'Finlande',
    iata: 'KTT',
    state: 'Lapland'
  },
  {
    airportName: 'Oulu Airport',
    city: 'Oulu / Oulunsalo',
    countryCode: 'FI',
    countryName: 'Finlande',
    iata: 'OUL',
    state: 'Northern-Ostrobothnia'
  },
  {
    airportName: 'Rovaniemi Airport',
    city: 'Rovaniemi',
    countryCode: 'FI',
    countryName: 'Finlande',
    iata: 'RVN',
    state: 'Lapland'
  },
  {
    airportName: 'Turku Airport',
    city: 'Turku',
    countryCode: 'FI',
    countryName: 'Finlande',
    iata: 'TKU',
    state: 'Finland-Proper'
  },
  {
    airportName: 'Vaasa Airport',
    city: 'Vaasa',
    countryCode: 'FI',
    countryName: 'Finlande',
    iata: 'VAA',
    state: 'Ostrobothnia'
  },
  {
    airportName: 'Belfast International Airport',
    city: 'Belfast',
    countryCode: 'GB',
    countryName: 'Irlande',
    iata: 'BFS',
    state: 'Belfast'
  },
  {
    airportName: 'St Angelo Airport',
    city: 'Enniskillen',
    countryCode: 'GB',
    countryName: 'Irlande',
    iata: 'ENK',
    state: 'Enniskillen'
  },
  {
    airportName: 'George Best Belfast City Airport',
    city: 'Belfast',
    countryCode: 'GB',
    countryName: 'Irlande',
    iata: 'BHD',
    state: 'Belfast'
  },
  {
    airportName: 'City of Derry Airport',
    city: 'Derry',
    countryCode: 'GB',
    countryName: 'Irlande',
    iata: 'LDY',
    state: 'Derry'
  },
  {
    airportName: 'Birmingham International Airport',
    city: 'Birmingham',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BHX',
    state: 'Birmingham'
  },
  {
    airportName: 'Sywell Aerodrome',
    city: 'Northampton',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'ORM',
    state: 'Northampton'
  },
  {
    airportName: 'Nottingham Airport',
    city: 'Nottingham',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'NQT',
    state: 'Nottingham'
  },
  {
    airportName: 'Manchester Airport',
    city: 'Manchester',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'MAN',
    state: 'Manchester'
  },
  {
    airportName: 'Robin Hood Doncaster Sheffield Airport',
    city: 'Doncaster',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'DSA',
    state: 'Doncaster'
  },
  {
    airportName: 'MOD St. Athan',
    city: 'St. Athan',
    countryCode: 'GB',
    countryName: 'Pays de Galles',
    iata: 'DGX',
    state: 'St. Athan'
  },
  {
    airportName: 'RNAS Yeovilton',
    city: 'Yeovil',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'YEO',
    state: 'Yeovil'
  },
  {
    airportName: 'Campbeltown Airport',
    city: 'Campbeltown',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'CAL',
    state: 'Campbeltown'
  },
  {
    airportName: 'Eday Airport',
    city: 'Eday',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'EOI',
    state: 'Eday'
  },
  {
    airportName: 'Fair Isle Airport',
    city: 'Fair Isle',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'FIE',
    state: 'Fair Isle'
  },
  {
    airportName: 'Whalsay Airport',
    city: 'Whalsay',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'WHS',
    state: 'Whalsay'
  },
  {
    airportName: 'Coll Airport',
    city: 'Coll Island',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'COL',
    state: 'Coll Island'
  },
  {
    airportName: 'North Ronaldsay Airport',
    city: 'North Ronaldsay',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'NRL',
    state: 'North Ronaldsay'
  },
  {
    airportName: 'Oban Airport',
    city: 'North Connel',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'OBN',
    state: 'North Connel'
  },
  {
    airportName: 'Papa Westray Airport',
    city: 'Papa Westray',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'PPW',
    state: 'Papa Westray'
  },
  {
    airportName: 'Stronsay Airport',
    city: 'Stronsay',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'SOY',
    state: 'Stronsay'
  },
  {
    airportName: 'Sanday Airport',
    city: 'Sanday',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'NDY',
    state: 'Sanday'
  },
  {
    airportName: 'Lerwick / Tingwall Airport',
    city: 'Lerwick',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'LWK',
    state: 'Lerwick'
  },
  {
    airportName: 'Westray Airport',
    city: 'Westray',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'WRY',
    state: 'Westray'
  },
  {
    airportName: 'Colonsay Airstrip',
    city: 'Colonsay',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'CSA',
    state: 'Colonsay'
  },
  {
    airportName: 'Haverfordwest Airport',
    city: 'Haverfordwest',
    countryCode: 'GB',
    countryName: 'Pays de Galles',
    iata: 'HAW',
    state: 'Haverfordwest'
  },
  {
    airportName: 'Cardiff International Airport',
    city: 'Cardiff',
    countryCode: 'GB',
    countryName: 'Pays de Galles',
    iata: 'CWL',
    state: 'Cardiff'
  },
  {
    airportName: 'Swansea Airport',
    city: 'Swansea',
    countryCode: 'GB',
    countryName: 'Pays de Galles',
    iata: 'SWS',
    state: 'Swansea'
  },
  {
    airportName: 'Bristol International Airport',
    city: 'Bristol',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BRS',
    state: 'Bristol'
  },
  {
    airportName: 'Liverpool John Lennon Airport',
    city: 'Liverpool',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'LPL',
    state: 'Liverpool'
  },
  {
    airportName: 'London Luton Airport',
    city: 'London',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'LTN',
    state: 'London'
  },
  {
    airportName: 'Bournemouth Airport',
    city: 'Bournemouth',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BOH',
    state: 'Bournemouth'
  },
  {
    airportName: 'Southampton Airport',
    city: 'Southampton',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'SOU',
    state: 'Southampton'
  },
  {
    airportName: 'Bembridge Airport',
    city: 'Bembridge',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BBP',
    state: 'Bembridge'
  },
  {
    airportName: 'Chichester/Goodwood Airport',
    city: 'Chichester',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'QUG',
    state: 'Chichester'
  },
  {
    airportName: 'Shoreham Airport',
    city: 'Brighton',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'ESH',
    state: 'Brighton'
  },
  {
    airportName: 'London Biggin Hill Airport',
    city: 'London',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BQH',
    state: 'London'
  },
  {
    airportName: 'London Gatwick Airport',
    city: 'London',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'LGW',
    state: 'London'
  },
  {
    airportName: 'London City Airport',
    city: 'London',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'LCY',
    state: 'London'
  },
  {
    airportName: 'London Heathrow Airport',
    city: 'London',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'LHR',
    state: 'London'
  },
  {
    airportName: 'Kent International Airport',
    city: 'Manston',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'MSE',
    state: 'Manston'
  },
  {
    airportName: 'HUDDERSFIELD (Crosland Moor)',
    city: 'Huddersfield',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: ' We',
    state: 'Huddersfield'
  },
  {
    airportName: 'Blackpool International Airport',
    city: 'Blackpool',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BLK',
    state: 'Blackpool'
  },
  {
    airportName: 'Barrow Walney Island Airport',
    city: 'Barrow-in-Furness',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'BWF',
    state: 'Barrow-in-Furness'
  },
  {
    airportName: 'Leeds Bradford Airport',
    city: 'Leeds',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'LBA',
    state: 'Leeds'
  },
  {
    airportName: 'Hawarden Airport',
    city: 'Hawarden',
    countryCode: 'GB',
    countryName: 'Pays de Galles',
    iata: 'CEG',
    state: 'Hawarden'
  },
  {
    airportName: 'Newcastle Airport',
    city: 'Newcastle',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'NCL',
    state: 'Newcastle'
  },
  {
    airportName: 'Anglesey Airport',
    city: 'Angelsey',
    countryCode: 'GB',
    countryName: 'Pays de Galles',
    iata: 'HLY',
    state: 'Angelsey'
  },
  {
    airportName: 'Kirkwall Airport',
    city: 'Orkney Islands',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'KOI',
    state: 'Orkney Islands'
  },
  {
    airportName: 'Sumburgh Airport',
    city: 'Lerwick',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'LSI',
    state: 'Lerwick'
  },
  {
    airportName: 'Wick Airport',
    city: 'Wick',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'WIC',
    state: 'Wick'
  },
  {
    airportName: 'Aberdeen Dyce Airport',
    city: 'Aberdeen',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'ABZ',
    state: 'Aberdeen'
  },
  {
    airportName: 'Inverness Airport',
    city: 'Inverness',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'INV',
    state: 'Inverness'
  },
  {
    airportName: 'Glasgow International Airport',
    city: 'Glasgow',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'GLA',
    state: 'Glasgow'
  },
  {
    airportName: 'Edinburgh Airport',
    city: 'Edinburgh',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'EDI',
    state: 'Edinburgh'
  },
  {
    airportName: 'Islay Airport',
    city: 'Port Ellen',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'ILY',
    state: 'Port Ellen'
  },
  {
    airportName: 'Glasgow Prestwick Airport',
    city: 'Glasgow',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'PIK',
    state: 'Glasgow'
  },
  {
    airportName: 'Benbecula Airport',
    city: 'Balivanich',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'BEB',
    state: 'Balivanich'
  },
  {
    airportName: 'Scatsta Airport',
    city: 'Shetland Islands',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'SCS',
    state: 'Shetland Islands'
  },
  {
    airportName: 'Dundee Airport',
    city: 'Dundee',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'DND',
    state: 'Dundee'
  },
  {
    airportName: 'Stornoway Airport',
    city: 'Stornoway',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'SYY',
    state: 'Stornoway'
  },
  {
    airportName: 'Barra Airport',
    city: 'Eoligarry',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'BRR',
    state: 'Eoligarry'
  },
  {
    airportName: 'Perth/Scone Airport',
    city: 'Perth',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'PSL',
    state: 'Perth'
  },
  {
    airportName: 'Tiree Airport',
    city: 'Balemartine',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'TRE',
    state: 'Balemartine'
  },
  {
    airportName: 'Unst Airport',
    city: 'Shetland Islands',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'UNT',
    state: 'Shetland Islands'
  },
  {
    airportName: 'Ballykelly Airport',
    city: 'Ballykelly',
    countryCode: 'GB',
    countryName: 'Irlande',
    iata: 'BOL',
    state: 'Ballykelly'
  },
  {
    airportName: 'RAF Kinloss',
    city: 'Kinloss',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'FSS',
    state: 'Kinloss'
  },
  {
    airportName: 'RAF Leuchars',
    city: 'St. Andrews',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'ADX',
    state: 'St. Andrews'
  },
  {
    airportName: 'RAF Lossiemouth',
    city: 'Lossiemouth',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'LMO',
    state: 'Lossiemouth'
  },
  {
    airportName: 'Cambridge Airport',
    city: 'Cambridge',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'CBG',
    state: 'Cambridge'
  },
  {
    airportName: 'Norwich International Airport',
    city: 'Norwich',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'NWI',
    state: 'Norwich'
  },
  {
    airportName: 'London Stansted Airport',
    city: 'London',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'STN',
    state: 'London'
  },
  {
    airportName: 'Wycombe Air Park',
    city: 'High Wycombe',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'HYC',
    state: 'High Wycombe'
  },
  {
    airportName: 'Exeter International Airport',
    city: 'Exeter',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'EXT',
    state: 'Exeter'
  },
  {
    airportName: 'Rochester Airport',
    city: 'Rochester',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'RCS',
    state: 'Rochester'
  },
  {
    airportName: 'Wethersfield Airport',
    city: 'Wethersfield',
    countryCode: 'GB',
    countryName: 'Angleterre',
    iata: 'WXF',
    state: 'Wethersfield'
  },
  {
    airportName: 'Amsterdam Airport Schiphol',
    city: 'Amsterdam',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'AMS',
    state: 'North-Holland'
  },
  {
    airportName: 'Maastricht Aachen Airport',
    city: 'Maastricht',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'MST',
    state: 'Limburg'
  },
  {
    airportName: 'Deelen Air Base',
    city: 'Arnhem',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'QAR',
    state: 'Gelderland'
  },
  {
    airportName: 'Eindhoven Airport',
    city: 'Eindhoven',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'EIN',
    state: 'North-Brabant'
  },
  {
    airportName: 'Eelde Airport',
    city: 'Groningen',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'GRQ',
    state: 'Drenthe'
  },
  {
    airportName: 'Gilze Rijen Air Base',
    city: 'Breda',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'GLZ',
    state: 'North-Brabant'
  },
  {
    airportName: 'De Kooy Airport',
    city: 'Den Helder',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'DHR',
    state: 'North-Holland'
  },
  {
    airportName: 'Lelystad Airport',
    city: 'Lelystad',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'LEY',
    state: 'Flevoland'
  },
  {
    airportName: 'Leeuwarden Air Base',
    city: 'Leeuwarden',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'LWR',
    state: 'Friesland'
  },
  {
    airportName: 'Oostwold Airport',
    city: 'Groningen',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: '---',
    state: 'Groningen'
  },
  {
    airportName: 'Rotterdam Airport',
    city: 'Rotterdam',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'RTM',
    state: 'South-Holland'
  },
  {
    airportName: 'Twenthe Airport',
    city: 'Enschede',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'ENS',
    state: 'Overijssel'
  },
  {
    airportName: 'Volkel Air Base',
    city: 'Uden',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'UDE',
    state: 'North-Brabant'
  },
  {
    airportName: 'Woensdrecht Air Base',
    city: 'Bergen Op Zoom',
    countryCode: 'NL',
    countryName: 'Pays-Bas',
    iata: 'WOE',
    state: 'North-Brabant'
  },
  {
    airportName: 'Bantry Aerodrome',
    city: 'Bantry',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'BYT',
    state: 'Munster'
  },
  {
    airportName: 'Belmullet Aerodrome',
    city: 'Belmullet',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'BLY',
    state: 'Connaught'
  },
  {
    airportName: 'Connemara Regional Airport',
    city: 'Inverin',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'NNR',
    state: 'Connaught'
  },
  {
    airportName: 'Castlebar Airport',
    city: 'Castlebar',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'CLB',
    state: 'Connaught'
  },
  {
    airportName: 'Castlebridge Airport',
    city: 'Wexford',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'WEX',
    state: 'Leinster'
  },
  {
    airportName: 'Cork Airport',
    city: 'Cork',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'ORK',
    state: 'Munster'
  },
  {
    airportName: 'Galway Airport',
    city: 'Galway',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'GWY',
    state: 'Connaught'
  },
  {
    airportName: 'Donegal Airport',
    city: 'Donegal',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'CFN',
    state: 'Ulster'
  },
  {
    airportName: 'Dublin Airport',
    city: 'Dublin',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'DUB',
    state: 'Leinster'
  },
  {
    airportName: 'Inishmore Aerodrome',
    city: 'Inis Mor',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'IOR',
    state: 'Connaught'
  },
  {
    airportName: 'Inisheer Aerodrome',
    city: 'Inis Oirr',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'INQ',
    state: 'Connaught'
  },
  {
    airportName: 'Kilkenny Airport',
    city: 'Kilkenny',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'KKY',
    state: 'Leinster'
  },
  {
    airportName: 'Ireland West Knock Airport',
    city: 'Charleston',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'NOC',
    state: 'Connaught'
  },
  {
    airportName: 'Kerry Airport',
    city: 'Killarney',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'KIR',
    state: 'Munster'
  },
  {
    airportName: 'Letterkenny Airport',
    city: 'Letterkenny',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'LTR',
    state: 'Ulster'
  },
  {
    airportName: 'Inishmaan Aerodrome',
    city: 'Inis Meain',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'IIA',
    state: 'Connaught'
  },
  {
    airportName: 'Shannon Airport',
    city: 'Shannon',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'SNN',
    state: 'Munster'
  },
  {
    airportName: 'Sligo Airport',
    city: 'Sligo',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'SXL',
    state: 'Connaught'
  },
  {
    airportName: 'Waterford Airport',
    city: 'Waterford',
    countryCode: 'IE',
    countryName: 'Irlande',
    iata: 'WAT',
    state: 'Munster'
  },
  {
    airportName: 'Aarhus Airport',
    city: 'Aarhus',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'AAR',
    state: 'Central-Jutland'
  },
  {
    airportName: 'Billund Airport',
    city: 'Billund',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'BLL',
    state: 'South-Denmark'
  },
  {
    airportName: 'Copenhagen Kastrup Airport',
    city: 'Copenhagen',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'CPH',
    state: 'Capital-Region'
  },
  {
    airportName: 'Esbjerg Airport',
    city: 'Esbjerg',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'EBJ',
    state: 'South-Denmark'
  },
  {
    airportName: 'Karup Airport',
    city: 'Karup',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'KRP',
    state: 'Central-Jutland'
  },
  {
    airportName: 'Laeso Airport',
    city: 'Laeso',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'BYR',
    state: 'North-Denmark'
  },
  {
    airportName: 'Lolland Falster Maribo Airport',
    city: 'Lolland Falster / Maribo',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'MRW',
    state: 'Zealand'
  },
  {
    airportName: 'Odense Airport',
    city: 'Odense',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'ODE',
    state: 'South-Denmark'
  },
  {
    airportName: 'Copenhagen Roskilde Airport',
    city: 'Copenhagen',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'RKE',
    state: 'Zealand'
  },
  {
    airportName: 'Bornholm Airport',
    city: 'Ronne',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'RNN',
    state: 'Capital-Region'
  },
  {
    airportName: 'Sonderborg Airport',
    city: 'Sonderborg',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'SGD',
    state: 'South-Denmark'
  },
  {
    airportName: 'Sindal Airport',
    city: 'Sindal',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'CNL',
    state: 'North-Denmark'
  },
  {
    airportName: 'Vojens Skrydstrup Airport',
    city: 'Vojens',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'SKS',
    state: 'South-Denmark'
  },
  {
    airportName: 'Skive Airport',
    city: 'Skive',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'SQW',
    state: 'Central-Jutland'
  },
  {
    airportName: 'Thisted Airport',
    city: 'Thisted',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'TED',
    state: 'North-Denmark'
  },
  {
    airportName: 'Stauning Airport',
    city: 'Skjern / Ringkobing',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'STA',
    state: 'Central-Jutland'
  },
  {
    airportName: 'Aalborg Airport',
    city: 'Aalborg',
    countryCode: 'DK',
    countryName: 'Danemark',
    iata: 'AAL',
    state: 'North-Denmark'
  },
  {
    airportName: 'Luxembourg-Findel International Airport',
    city: 'Luxembourg',
    countryCode: 'LU',
    countryName: 'Luxembourg',
    iata: 'LUX',
    state: 'Luxembourg'
  },
  {
    airportName: 'Alesund Airport',
    city: 'Alesund',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'AES',
    state: 'More-og-Romsdal'
  },
  {
    airportName: 'Andoya Airport',
    city: 'Andenes',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'ANX',
    state: 'Nordland'
  },
  {
    airportName: 'Alta Airport',
    city: 'Alta',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'ALF',
    state: 'Finnmark'
  },
  {
    airportName: 'Bringeland Airport',
    city: 'Forde',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'FDE',
    state: 'Sogn-og-Fjordane'
  },
  {
    airportName: 'Bronnoysund Airport',
    city: 'Bronnoy',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'BNN',
    state: 'Nordland'
  },
  {
    airportName: 'Bodo Airport',
    city: 'Bodo',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'BOO',
    state: 'Nordland'
  },
  {
    airportName: 'Bergen Airport Flesland',
    city: 'Bergen',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'BGO',
    state: 'Hordaland'
  },
  {
    airportName: 'Batsfjord Airport',
    city: 'Batsfjord',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'BJF',
    state: 'Finnmark'
  },
  {
    airportName: 'Berlevag Airport',
    city: 'Berlevag',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'BVG',
    state: 'Finnmark'
  },
  {
    airportName: 'Kristiansand Airport',
    city: 'Kjevik',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'KRS',
    state: 'Vest-Agder'
  },
  {
    airportName: 'Geilo Airport Dagali',
    city: 'Dagali',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'DLD',
    state: 'Buskerud'
  },
  {
    airportName: 'Bardufoss Airport',
    city: 'Malselv',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'BDU',
    state: 'Troms'
  },
  {
    airportName: 'Harstad/Narvik Airport Evenes',
    city: 'Evenes',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'EVE',
    state: 'Nordland'
  },
  {
    airportName: 'Leirin Airport',
    city: 'Oppland',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'VDB',
    state: 'Oppland'
  },
  {
    airportName: 'Floro Airport',
    city: 'Floro',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'FRO',
    state: 'Sogn-og-Fjordane'
  },
  {
    airportName: 'Oslo Gardermoen Airport',
    city: 'Oslo',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'OSL',
    state: 'Akershus'
  },
  {
    airportName: 'Stafsberg Airport',
    city: 'Hamar',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'HMR',
    state: 'Hedmark'
  },
  {
    airportName: 'Haugesund Airport',
    city: 'Karmoy',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'HAU',
    state: 'Rogaland'
  },
  {
    airportName: 'Hammerfest Airport',
    city: 'Hammerfest',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'HFT',
    state: 'Finnmark'
  },
  {
    airportName: 'Hasvik Airport',
    city: 'Hasvik',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'HAA',
    state: 'Finnmark'
  },
  {
    airportName: 'Valan Airport',
    city: 'Honningsvag',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'HVG',
    state: 'Finnmark'
  },
  {
    airportName: 'Kautokeino Air Base',
    city: 'Finnmark',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'QKX',
    state: 'Finnmark'
  },
  {
    airportName: 'Kristiansund Airport Kvernberget',
    city: 'Kvernberget',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'KSU',
    state: 'More-og-Romsdal'
  },
  {
    airportName: 'Gol Airport',
    city: 'Klanten',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'GLL',
    state: 'Buskerud'
  },
  {
    airportName: 'Kirkenes Airport Hoybuktmoen',
    city: 'Kirkenes',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'KKN',
    state: 'Finnmark'
  },
  {
    airportName: 'Lista Airport',
    city: 'Farsund',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'FAN',
    state: 'Vest-Agder'
  },
  {
    airportName: 'Leknes Airport',
    city: 'Leknes',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'LKN',
    state: 'Nordland'
  },
  {
    airportName: 'Mehamn Airport',
    city: 'Mehamn',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'MEH',
    state: 'Finnmark'
  },
  {
    airportName: 'Molde Airport',
    city: 'Aro',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'MOL',
    state: 'More-og-Romsdal'
  },
  {
    airportName: 'Mosjoen Airport Kjaerstad',
    city: 'Nordland',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'MJF',
    state: 'Nordland'
  },
  {
    airportName: 'Banak Airport',
    city: 'Lakselv',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'LKL',
    state: 'Finnmark'
  },
  {
    airportName: 'Narvik Framnes Airport',
    city: 'Narvik',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'NVK',
    state: 'Nordland'
  },
  {
    airportName: 'Namsos Hoknesora Airport',
    city: 'Namsos',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'OSY',
    state: 'Nord-Trondelag'
  },
  {
    airportName: 'Notodden Airport',
    city: 'Telemark',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'NTB',
    state: 'Telemark'
  },
  {
    airportName: 'Orland Airport',
    city: 'Orland',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'OLA',
    state: 'Sor-Trondelag'
  },
  {
    airportName: 'Orsta-Volda Airport Hovden',
    city: 'Orsta',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'HOV',
    state: 'More-og-Romsdal'
  },
  {
    airportName: 'Mo i Rana Airport Rossvoll',
    city: 'Mo i Rana',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'MQN',
    state: 'Nordland'
  },
  {
    airportName: 'Rorvik Airport Ryum',
    city: 'Rorvik',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'RVK',
    state: 'Nord-Trondelag'
  },
  {
    airportName: 'Roros Airport',
    city: 'Roros',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'RRS',
    state: 'Sor-Trondelag'
  },
  {
    airportName: 'Rost Airport',
    city: 'Nordland',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'RET',
    state: 'Nordland'
  },
  {
    airportName: 'Moss Airport Rygge',
    city: 'Rygge',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'RYG',
    state: 'Ostfold'
  },
  {
    airportName: 'Svalbard Airport Longyear',
    city: 'Longyearbyen',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'LYR',
    state: 'Svalbard'
  },
  {
    airportName: 'Sandane Airport Anda',
    city: 'Sandane',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SDN',
    state: 'Sogn-og-Fjordane'
  },
  {
    airportName: 'Sogndal Airport',
    city: 'Sogndal',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SOG',
    state: 'Sogn-og-Fjordane'
  },
  {
    airportName: 'Svolvaer Helle Airport',
    city: 'Svolvaer',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SVJ',
    state: 'Nordland'
  },
  {
    airportName: 'Stokmarknes Skagen Airport',
    city: 'Hadsel',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SKN',
    state: 'Nordland'
  },
  {
    airportName: 'Skien Airport',
    city: 'Geiteryggen',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SKE',
    state: 'Telemark'
  },
  {
    airportName: 'Stord Airport',
    city: 'Leirvik',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SRP',
    state: 'Hordaland'
  },
  {
    airportName: 'Sorkjosen Airport',
    city: 'Sorkjosen',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SOJ',
    state: 'Troms'
  },
  {
    airportName: 'Vardo Airport Svartnes',
    city: 'Vardo',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'VAW',
    state: 'Finnmark'
  },
  {
    airportName: 'Sandnessjoen Airport Stokka',
    city: 'Alstahaug',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SSJ',
    state: 'Nordland'
  },
  {
    airportName: 'Tromso Airport',
    city: 'Tromso',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'TOS',
    state: 'Troms'
  },
  {
    airportName: 'Sandefjord Airport Torp',
    city: 'Torp',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'TRF',
    state: 'Vestfold'
  },
  {
    airportName: 'Trondheim Airport Vaernes',
    city: 'Trondheim',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'TRD',
    state: 'Nord-Trondelag'
  },
  {
    airportName: 'Vadso Airport',
    city: 'Vadso',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'VDS',
    state: 'Finnmark'
  },
  {
    airportName: 'Stavanger Airport Sola',
    city: 'Stavanger',
    countryCode: 'NO',
    countryName: 'Norvege',
    iata: 'SVG',
    state: 'Rogaland'
  },
  {
    airportName: 'Bialystok-Krywlany Airport',
    city: 'Bialystok',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QYY',
    state: 'Podlasie'
  },
  {
    airportName: 'Biala Podlaska Airport',
    city: 'Biala Podlaska',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'BXP',
    state: 'Lublin'
  },
  {
    airportName: 'Bydgoszcz Ignacy Jan Paderewski Airport',
    city: 'Bydgoszcz',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'BZG',
    state: 'Kujawsko-Pomorskie'
  },
  {
    airportName: 'Czestochowa-Rudniki',
    city: 'Czestochowa',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'CZW',
    state: 'Silesia'
  },
  {
    airportName: 'Gdansk Lech Walesa Airport',
    city: 'Gdansk',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'GDN',
    state: 'Pomerania'
  },
  {
    airportName: 'Gliwice Glider Airport',
    city: 'Silesia',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QLC',
    state: 'Silesia'
  },
  {
    airportName: 'John Paul II International Airport Krakow-Balice Airport',
    city: 'Krakow',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'KRK',
    state: 'Lesser-Poland-Voivodeship'
  },
  {
    airportName: 'Koszalin Zegrze Airport',
    city: 'West-Pomerania',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'OSZ',
    state: 'West-Pomerania'
  },
  {
    airportName: 'Katowice International Airport',
    city: 'Katowice',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'KTW',
    state: 'Silesia'
  },
  {
    airportName: 'Bielsko-Bialo Kaniow Airfield',
    city: 'Czechowice-Dziedzice',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QEO',
    state: 'Silesia'
  },
  {
    airportName: 'Lublin Airport',
    city: 'Lublin',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'LUZ',
    state: 'Lublin'
  },
  {
    airportName: 'Lodz Wladyslaw Reymont Airport',
    city: 'Lodz',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'LCJ',
    state: 'Kodz-Voivodeship'
  },
  {
    airportName: 'Lublin Radwiec Airport',
    city: 'Lublin',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QLU',
    state: 'Lublin'
  },
  {
    airportName: 'Nowy Targ Airport',
    city: 'Nowy Targ',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QWS',
    state: 'Lesser-Poland-Voivodeship'
  },
  {
    airportName: 'Oksywie Military Air Base',
    city: 'Gdynia',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QYD',
    state: 'Pomerania'
  },
  {
    airportName: 'Opole-Polska Nowa Wies Airport',
    city: 'Opole',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'QPM',
    state: 'Opole-Voivodeship'
  },
  {
    airportName: 'Poznan-Lawica Airport',
    city: 'Poznan',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'POZ',
    state: 'Greater-Poland'
  },
  {
    airportName: 'Rzeszow-Jasionka Airport',
    city: 'Rzeszow',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'RZE',
    state: 'Subcarpathian-Voivodeship'
  },
  {
    airportName: 'Szczecin-Goleniow Solidarnosc Airport',
    city: 'Goleniow',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'SZZ',
    state: 'West-Pomerania'
  },
  {
    airportName: 'Warsaw Chopin Airport',
    city: 'Warsaw',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'WAW',
    state: 'Mazovia'
  },
  {
    airportName: 'Copernicus Wroclaw Airport',
    city: 'Wroclaw',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'WRO',
    state: 'Lower-Silesia'
  },
  {
    airportName: 'Zielona Gora-Babimost Airport',
    city: 'Babimost',
    countryCode: 'PL',
    countryName: 'Pologne',
    iata: 'IEG',
    state: 'Lubusz'
  },
  {
    airportName: 'Gothenburg-Landvetter Airport',
    city: 'Gothenburg',
    countryCode: 'SE',
    countryName: 'Suede',
    iata: 'GOT',
    state: 'Vaestra-Gotaland'
  },
  {
    airportName: 'Stockholm-Arlanda Airport',
    city: 'Stockholm',
    countryCode: 'SE',
    countryName: 'Suede',
    iata: 'ARN',
    state: 'Stockholm'
  },
  {
    airportName: 'Stockholm-Bromma Airport',
    city: 'Stockholm',
    countryCode: 'SE',
    countryName: 'Suede',
    iata: 'BMA',
    state: 'Stockholm'
  },
  {
    airportName: 'Daugavpils Intrenational Airport',
    city: 'Daugavpils',
    countryCode: 'LV',
    countryName: 'Lettonie',
    iata: 'DGP',
    state: 'Daugavpils-municipality'
  },
  {
    airportName: 'Liepaja International Airport',
    city: 'Liepaja',
    countryCode: 'LV',
    countryName: 'Lettonie',
    iata: 'LPX',
    state: 'Grobina'
  },
  {
    airportName: 'Riga International Airport',
    city: 'Riga',
    countryCode: 'LV',
    countryName: 'Lettonie',
    iata: 'RIX',
    state: 'Marupe'
  },
  {
    airportName: 'Ventspils International Airport',
    city: 'Ventspils',
    countryCode: 'LV',
    countryName: 'Lettonie',
    iata: 'VNT',
    state: 'Ventspils'
  },
  {
    airportName: 'Kaunas International Airport',
    city: 'Kaunas',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'KUN',
    state: 'Kaunas'
  },
  {
    airportName: 'Klaipeda Airport',
    city: 'Klaipeda',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'KLJ',
    state: 'Klaipeda'
  },
  {
    airportName: 'Palanga International Airport',
    city: 'Palanga',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'PLQ',
    state: 'Palanga'
  },
  {
    airportName: 'Panevezys Air Base',
    city: 'Panevezys',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'PNV',
    state: 'Panevezys'
  },
  {
    airportName: 'Siauliai International Airport',
    city: 'Siauliai',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'SQQ',
    state: 'Siauliai'
  },
  {
    airportName: 'Barysiai Airport',
    city: 'Barysiai',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'HLJ',
    state: 'Siauliai'
  },
  {
    airportName: 'Vilnius International Airport',
    city: 'Vilnius',
    countryCode: 'LT',
    countryName: 'Lituanie',
    iata: 'VNO',
    state: 'Vilnius'
  },
  {
    airportName: 'J B M Hertzog International Airport',
    city: 'Bloemfontain',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'BFN',
    state: 'Orange-Free-State'
  },
  {
    airportName: 'Cape Town International Airport',
    city: 'Cape Town',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'CPT',
    state: 'Western-Cape'
  },
  {
    airportName: 'Empangeni Airport',
    city: 'Empangeni',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'EMG',
    state: 'KwaZulu-Natal'
  },
  {
    airportName: 'Ellisras Matimba Airport',
    city: 'Ellisras',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'ELL',
    state: 'Limpopo'
  },
  {
    airportName: 'Rand Airport',
    city: 'Johannesburg',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'QRA',
    state: 'Gauteng'
  },
  {
    airportName: 'Kimberley Airport',
    city: 'Kimberley',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'KIM',
    state: 'Northern-Cape'
  },
  {
    airportName: 'Kruger Mpumalanga International Airport',
    city: 'Mpumalanga',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'MQP',
    state: 'Mpumalanga'
  },
  {
    airportName: 'Lanseria Airport',
    city: 'Johannesburg',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'HLA',
    state: 'Gauteng'
  },
  {
    airportName: 'King Shaka International Airport',
    city: 'Durban',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'DUR',
    state: 'KwaZulu-Natal'
  },
  {
    airportName: 'Langebaanweg Airport',
    city: 'Langebaanweg',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'SDB',
    state: 'Western-Cape'
  },
  {
    airportName: 'Mmabatho International Airport',
    city: 'Mafeking',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'MBD',
    state: 'North-West'
  },
  {
    airportName: 'OR Tambo International Airport',
    city: 'Johannesburg',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'JNB',
    state: 'Gauteng'
  },
  {
    airportName: 'Port Elizabeth Airport',
    city: 'Port Elizabeth',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'PLZ',
    state: 'Eastern-Cape'
  },
  {
    airportName: 'Pilanesberg International Airport',
    city: 'Pilanesberg',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'NTY',
    state: 'North-West'
  },
  {
    airportName: 'Polokwane International Airport',
    city: 'Potgietersrus',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'PTG',
    state: 'Limpopo'
  },
  {
    airportName: 'Queenstown Airport',
    city: 'Queenstown',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'UTW',
    state: 'Eastern-Cape'
  },
  {
    airportName: 'Prince Mangosuthu Buthelezi Airport',
    city: 'Ulundi',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'ULD',
    state: 'KwaZulu-Natal'
  },
  {
    airportName: 'Pierre Van Ryneveld Airport',
    city: 'Upington',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'UTN',
    state: 'Northern-Cape'
  },
  {
    airportName: 'Ulusaba Airport',
    city: 'Ulusaba',
    countryCode: 'ZA',
    countryName: 'Afrique Du Sud',
    iata: 'ULX',
    state: 'Mpumalanga'
  },
  {
    airportName: 'Francistown Airport',
    city: 'Francistown',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'FRW',
    state: 'North-East'
  },
  {
    airportName: 'Ghanzi Airport',
    city: 'Ghanzi',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'GNZ',
    state: 'Ghanzi'
  },
  {
    airportName: 'Jwaneng Airport',
    city: 'Ngwaketsi',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'JWA',
    state: 'Ngwaketsi'
  },
  {
    airportName: 'Kasane Airport',
    city: 'Kasane',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'BBK',
    state: 'North-West'
  },
  {
    airportName: 'Khwai River Lodge Airport',
    city: 'Khwai River Lodge',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'KHW',
    state: 'North-West'
  },
  {
    airportName: 'Maun Airport',
    city: 'Maun',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'MUB',
    state: 'North-West'
  },
  {
    airportName: 'Orapa Airport',
    city: 'Central',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'ORP',
    state: 'Central'
  },
  {
    airportName: 'Palapye Airport',
    city: 'Palapye',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'QPH',
    state: 'Central'
  },
  {
    airportName: 'Sir Seretse Khama International Airport',
    city: 'Gaborone',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'GBE',
    state: 'South-East'
  },
  {
    airportName: 'Sua Pan Airport',
    city: 'Central',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'SXN',
    state: 'Central'
  },
  {
    airportName: 'Shakawe Airport',
    city: 'Shakawe',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'SWX',
    state: 'North-West'
  },
  {
    airportName: 'Limpopo Valley Airport',
    city: 'Tuli Lodge',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'TLD',
    state: 'Central'
  },
  {
    airportName: 'Tshabong Airport',
    city: 'Tshabong',
    countryCode: 'BW',
    countryName: 'Botswana',
    iata: 'TBY',
    state: 'Kgalagadi'
  },
  {
    airportName: 'Maya-Maya Airport',
    city: 'Brazzaville',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'BZV',
    state: 'Brazzaville'
  },
  {
    airportName: 'Djambala Airport',
    city: 'Djambala',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'DJM',
    state: 'Plateaux'
  },
  {
    airportName: 'Kindamba Airport',
    city: 'Kindamba',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'KNJ',
    state: 'Pool'
  },
  {
    airportName: 'Lague Airport',
    city: 'Lague',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'LCO',
    state: 'Plateaux'
  },
  {
    airportName: 'Mouyondzi Airport',
    city: 'Mouyondzi',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'MUY',
    state: 'Bouenza'
  },
  {
    airportName: 'Sibiti Airport',
    city: 'Sibiti',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'SIB',
    state: 'Lekoumou'
  },
  {
    airportName: 'Yokangassi Airport',
    city: 'Nkayi',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'NKY',
    state: 'Bouenza'
  },
  {
    airportName: 'Zanaga Airport',
    city: 'Zanaga',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'ANJ',
    state: 'Lekoumou'
  },
  {
    airportName: 'Mossendjo Airport',
    city: 'Mossendjo',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'MSX',
    state: 'Niari'
  },
  {
    airportName: 'Boundji Airport',
    city: 'Boundji',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'BOE',
    state: 'Cuvette'
  },
  {
    airportName: 'Ewo Airport',
    city: 'Ewo',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'EWO',
    state: 'Cuvette-Ouest'
  },
  {
    airportName: 'Gamboma Airport',
    city: 'Gamboma',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'GMM',
    state: 'Plateaux'
  },
  {
    airportName: 'Impfondo Airport',
    city: 'Impfondo',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'ION',
    state: 'Likouala'
  },
  {
    airportName: 'Kelle Airport',
    city: 'Kelle',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'KEE',
    state: 'Cuvette-Ouest'
  },
  {
    airportName: 'Makoua Airport',
    city: 'Makoua',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'MKJ',
    state: 'Cuvette'
  },
  {
    airportName: 'Owando Airport',
    city: 'Owando',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'FTX',
    state: 'Cuvette'
  },
  {
    airportName: 'Souanke Airport',
    city: 'Souanke',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'SOE',
    state: 'Sangha'
  },
  {
    airportName: 'Betou Airport',
    city: 'Betou',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'BTB',
    state: 'Likouala'
  },
  {
    airportName: 'Ouesso Airport',
    city: 'Sangha',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'OUE',
    state: 'Sangha'
  },
  {
    airportName: 'Makabana Airport',
    city: 'Makabana',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'KMK',
    state: 'Niari'
  },
  {
    airportName: 'Ngot Nzoungou Airport',
    city: 'Dolisie',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'DIS',
    state: 'Niari'
  },
  {
    airportName: 'Pointe Noire Airport',
    city: 'Pointe Noire',
    countryCode: 'CG',
    countryName: 'Congo-Brazzaville',
    iata: 'PNR',
    state: 'Kouilou'
  },
  {
    airportName: 'Carnot Airport',
    city: 'Carnot',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'CRF',
    state: 'Mambere-Kadei'
  },
  {
    airportName: 'Bangui MPoko International Airport',
    city: 'Bangui',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BGF',
    state: 'Ombella-MPoko'
  },
  {
    airportName: 'Bangassou Airport',
    city: 'Bangassou',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BGU',
    state: 'Bangassou'
  },
  {
    airportName: 'Birao Airport',
    city: 'Birao',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'IRO',
    state: 'Vakaga'
  },
  {
    airportName: 'Bossembele Airport',
    city: 'Bossembele',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BEM',
    state: 'Ombella-MPoko'
  },
  {
    airportName: 'Bambari Airport',
    city: 'Bambari',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BBY',
    state: 'Ouaka'
  },
  {
    airportName: 'NDele Airport',
    city: 'NDele',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'NDL',
    state: 'Bamingui-Bangoran'
  },
  {
    airportName: 'Bouar Airport',
    city: 'Bouar',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BOP',
    state: 'Nana-Mambere'
  },
  {
    airportName: 'Bria Airport',
    city: 'Bria',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BIV',
    state: 'Haute-Kotto'
  },
  {
    airportName: 'Bossangoa Airport',
    city: 'Bossangoa',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BSN',
    state: 'Ouham'
  },
  {
    airportName: 'Berberati Airport',
    city: 'Berberati',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BBT',
    state: 'Mambere-Kadei'
  },
  {
    airportName: 'Ouadda Airport',
    city: 'Ouadda',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'ODA',
    state: 'Haute-Kotto'
  },
  {
    airportName: 'Yalinga Airport',
    city: 'Yalinga',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'AIG',
    state: 'Haute-Kotto'
  },
  {
    airportName: 'Zemio Airport',
    city: 'Zemio',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'IMO',
    state: 'Haut-Mbomou'
  },
  {
    airportName: 'MBoki Airport',
    city: 'Mboki',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'MKI',
    state: 'Haut-Mbomou'
  },
  {
    airportName: 'Batangafo Airport',
    city: 'Batangafo',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BTG',
    state: 'Ouham'
  },
  {
    airportName: 'Gordil Airport',
    city: 'Melle',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'GDI',
    state: 'Vakaga'
  },
  {
    airportName: 'Bakouma Airport',
    city: 'Bakouma',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BMF',
    state: 'Mbomou'
  },
  {
    airportName: 'Ouanda Djalle Airport',
    city: 'Ouanda Djalle',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'ODJ',
    state: 'Vakaga'
  },
  {
    airportName: 'Rafai Airport',
    city: 'Rafai',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'RFA',
    state: 'Mbomou'
  },
  {
    airportName: 'Bouca Airport',
    city: 'Bouca',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BCF',
    state: 'Ouham'
  },
  {
    airportName: 'Bozoum Airport',
    city: 'Bozoum',
    countryCode: 'CF',
    countryName: 'Republique Centrafricaine',
    iata: 'BOZ',
    state: 'Ouham-Pende'
  },
  {
    airportName: 'Bata Airport',
    city: 'Litoral',
    countryCode: 'GQ',
    countryName: 'Guinee Equatoriale',
    iata: 'BSG',
    state: 'Litoral'
  },
  {
    airportName: 'Malabo Airport',
    city: 'Malabo',
    countryCode: 'GQ',
    countryName: 'Guinee Equatoriale',
    iata: 'SSG',
    state: 'Malabo'
  },
  {
    airportName: 'Nkongsamba Airport',
    city: 'Nkongsamba',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'NKS',
    state: 'Littoral'
  },
  {
    airportName: 'Kribi Airport',
    city: 'Kribi',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'KBI',
    state: 'South'
  },
  {
    airportName: 'Tiko Airport',
    city: 'Tiko',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'TKC',
    state: 'South-West'
  },
  {
    airportName: 'Douala International Airport',
    city: 'Douala',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'DLA',
    state: 'Littoral'
  },
  {
    airportName: 'Mamfe Airport',
    city: 'Mamfe',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'MMF',
    state: 'South-West'
  },
  {
    airportName: 'Bali Airport',
    city: 'Bali',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'BLC',
    state: 'North-West'
  },
  {
    airportName: 'Kaele Airport',
    city: 'Kaele',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'KLE',
    state: 'Far-North'
  },
  {
    airportName: 'Batouri Airport',
    city: 'Batouri',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'OUR',
    state: 'East'
  },
  {
    airportName: 'Yagoua Airport',
    city: 'Yagoua',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'GXX',
    state: 'Far-North'
  },
  {
    airportName: 'Salak Airport',
    city: 'Maroua',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'MVR',
    state: 'Far-North'
  },
  {
    airportName: 'Foumban Nkounja Airport',
    city: 'Foumban',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'FOM',
    state: 'West'
  },
  {
    airportName: 'NGaoundere Airport',
    city: 'NGaoundere',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'NGE',
    state: 'Adamaoua'
  },
  {
    airportName: 'Bertoua Airport',
    city: 'Bertoua',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'BTA',
    state: 'East'
  },
  {
    airportName: 'Garoua International Airport',
    city: 'Garoua',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'GOU',
    state: 'North'
  },
  {
    airportName: 'Dschang Airport',
    city: 'Dschang',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'DSC',
    state: 'West'
  },
  {
    airportName: 'Bafoussam Airport',
    city: 'Bafoussam',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'BFX',
    state: 'West'
  },
  {
    airportName: 'Bamenda Airport',
    city: 'Bamenda',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'BPC',
    state: 'North-West'
  },
  {
    airportName: 'Ebolowa Airport',
    city: 'Ebolowa',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'EBW',
    state: 'South'
  },
  {
    airportName: 'Yaounde Airport',
    city: 'Yaounde',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'YAO',
    state: 'Centre'
  },
  {
    airportName: 'Yaounde Nsimalen International Airport',
    city: 'Yaounde',
    countryCode: 'CM',
    countryName: 'Cameroun',
    iata: 'NSI',
    state: 'Centre'
  },
  {
    airportName: 'Mbala Airport',
    city: 'Mbala',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'MMQ',
    state: 'Northern'
  },
  {
    airportName: 'Chipata Airport',
    city: 'Chipata',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'CIP',
    state: 'Eastern'
  },
  {
    airportName: 'Jeki Airstrip',
    city: 'Lower Zambezi National Park',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'JEK',
    state: 'Muchinga'
  },
  {
    airportName: 'Kasompe Airport',
    city: 'Kasompe',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'ZKP',
    state: 'Copperbelt'
  },
  {
    airportName: 'Kenneth Kaunda International Airport',
    city: 'Lusaka',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'LUN',
    state: 'Lusaka'
  },
  {
    airportName: 'Kalabo Airport',
    city: 'Kalabo',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'KLB',
    state: 'Western'
  },
  {
    airportName: 'Kaoma Airport',
    city: 'Kaoma',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'KMZ',
    state: 'Western'
  },
  {
    airportName: 'Kasama Airport',
    city: 'Kasama',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'KAA',
    state: 'Northern'
  },
  {
    airportName: 'Kasaba Bay Airport',
    city: 'Kasaba Bay',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'ZKB',
    state: 'Northern'
  },
  {
    airportName: 'Livingstone Airport',
    city: 'Livingstone',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'LVI',
    state: 'Southern'
  },
  {
    airportName: 'Lukulu Airport',
    city: 'Lukulu',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'LXU',
    state: 'Western'
  },
  {
    airportName: 'Mansa Airport',
    city: 'Mansa',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'MNS',
    state: 'Luapula'
  },
  {
    airportName: 'Mfuwe Airport',
    city: 'Mfuwe',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'MFU',
    state: 'Eastern'
  },
  {
    airportName: 'Mongu Airport',
    city: 'Mongu',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'MNR',
    state: 'Western'
  },
  {
    airportName: 'Ngoma Airport',
    city: 'Ngoma',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'ZGM',
    state: 'Southern'
  },
  {
    airportName: 'Ndola Airport',
    city: 'Ndola',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'NLA',
    state: 'Copperbelt'
  },
  {
    airportName: 'Senanga Airport',
    city: 'Senanga',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'SXG',
    state: 'Western'
  },
  {
    airportName: 'Southdowns Airport',
    city: 'Kitwe',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'KIW',
    state: 'Copperbelt'
  },
  {
    airportName: 'Sesheke Airport',
    city: 'Sesheke',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'SJQ',
    state: 'Western'
  },
  {
    airportName: 'Solwesi Airport',
    city: 'Solwesi',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'SLI',
    state: 'North-Western'
  },
  {
    airportName: 'Zambezi Airport',
    city: 'Zambezi',
    countryCode: 'ZM',
    countryName: 'Zambie',
    iata: 'BBZ',
    state: 'North-Western'
  },
  {
    airportName: 'Prince Said Ibrahim International Airport',
    city: 'Moroni',
    countryCode: 'KM',
    countryName: 'Comores',
    iata: 'HAH',
    state: 'Grande-Comore'
  },
  {
    airportName: 'Moheli Bandar Es Eslam Airport',
    city: 'Moheli',
    countryCode: 'KM',
    countryName: 'Comores',
    iata: 'NWA',
    state: 'Moheli'
  },
  {
    airportName: 'Iconi Airport',
    city: 'Moroni',
    countryCode: 'KM',
    countryName: 'Comores',
    iata: 'YVA',
    state: 'Grande-Comore'
  },
  {
    airportName: 'Ouani Airport',
    city: 'Ouani',
    countryCode: 'KM',
    countryName: 'Comores',
    iata: 'AJN',
    state: 'Anjouan'
  },
  {
    airportName: 'Malaimbandy Airport',
    city: 'Malaimbandy',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'WML',
    state: 'Malaimbandy'
  },
  {
    airportName: 'Antsirabe Airport',
    city: 'Antsirabe',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'ATJ',
    state: 'Antsirabe'
  },
  {
    airportName: 'Antsalova Airport',
    city: 'Antsalova',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'WAQ',
    state: 'Antsalova'
  },
  {
    airportName: 'Mahanoro Airport',
    city: 'Mahanoro',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'VVB',
    state: 'Mahanoro'
  },
  {
    airportName: 'Ivato Airport',
    city: 'Antananarivo',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'TNR',
    state: 'Antananarivo'
  },
  {
    airportName: 'Morafenobe Airport',
    city: 'Morafenobe',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'TVA',
    state: 'Morafenobe'
  },
  {
    airportName: 'Toamasina Airport',
    city: 'Atsinanana',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'TMM',
    state: 'Atsinanana'
  },
  {
    airportName: 'Morondava Airport',
    city: 'Menabe',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'MOQ',
    state: 'Menabe'
  },
  {
    airportName: 'Arrachart Airport',
    city: 'Diana',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'DIE',
    state: 'Diana'
  },
  {
    airportName: 'Avaratra Airport',
    city: 'Befandriana',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'WBD',
    state: 'Befandriana'
  },
  {
    airportName: 'Fascene Airport',
    city: 'Nosy Be',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'NOS',
    state: 'Diana'
  },
  {
    airportName: 'Mampikony Airport',
    city: 'Mampikony',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'WMP',
    state: 'Mampikony'
  },
  {
    airportName: 'Besalampy Airport',
    city: 'Melaky',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'BPY',
    state: 'Melaky'
  },
  {
    airportName: 'Tsaratanana Airport',
    city: 'Tsaratanana',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'TTS',
    state: 'Tsaratanana'
  },
  {
    airportName: 'Ambalabe Airport',
    city: 'Antsohihy',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'WAI',
    state: 'Antsohihy'
  },
  {
    airportName: 'Antsoa Airport',
    city: 'Beroroha',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'WBO',
    state: 'Beroroha'
  },
  {
    airportName: 'Tolanaro Airport',
    city: 'Tolanaro',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'FTU',
    state: 'Tolanaro'
  },
  {
    airportName: 'Bekily Airport',
    city: 'Bekily',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'OVA',
    state: 'Bekily'
  },
  {
    airportName: 'Morombe Airport',
    city: 'Atsimo-Andrefana',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'MXM',
    state: 'Atsimo-Andrefana'
  },
  {
    airportName: 'Vangaindrano Airport',
    city: 'Vangaindrano',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'VND',
    state: 'Atsimo-Atsinanana'
  },
  {
    airportName: 'Betioky Airport',
    city: 'Betioky',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'BKU',
    state: 'Atsimo-Andrefana'
  },
  {
    airportName: 'Ampanihy Airport',
    city: 'Ampanihy',
    countryCode: 'MG',
    countryName: 'Madagascar',
    iata: 'AMP',
    state: 'Atsimo-Andrefana'
  },
  {
    airportName: 'Cuito Cuanavale Airport',
    city: 'Cuito Cuanavale',
    countryCode: 'AO',
    countryName: 'Angola',
    iata: 'CTI',
    state: 'Cuando-Cobango'
  },
  {
    airportName: 'Ngjiva Pereira Airport',
    city: 'Ngiva',
    countryCode: 'AO',
    countryName: 'Angola',
    iata: 'VPE',
    state: 'Cunene'
  },
  {
    airportName: 'Quatro De Fevereiro Airport',
    city: 'Luanda',
    countryCode: 'AO',
    countryName: 'Angola',
    iata: 'LAD',
    state: 'Luanda'
  },
  {
    airportName: 'Menongue Airport',
    city: 'Menongue',
    countryCode: 'AO',
    countryName: 'Angola',
    iata: 'SPP',
    state: 'Cuando-Cobango'
  },
  {
    airportName: 'Namibe Airport',
    city: 'Namibe',
    countryCode: 'AO',
    countryName: 'Angola',
    iata: 'MSZ',
    state: 'Namibe'
  },
  {
    airportName: 'Makokou Airport',
    city: 'Makokou',
    countryCode: 'GA',
    countryName: 'Gabon',
    iata: 'MKU',
    state: 'Ogooue-Ivindo'
  },
  {
    airportName: 'Leon M Ba Airport',
    city: 'Libreville',
    countryCode: 'GA',
    countryName: 'Gabon',
    iata: 'LBV',
    state: 'Estuaire'
  },
  {
    airportName: 'MVengue El Hadj Omar Bongo Ondimba International Airport',
    city: 'Franceville',
    countryCode: 'GA',
    countryName: 'Gabon',
    iata: 'MVB',
    state: 'Haut-Ogooue'
  },
  {
    airportName: 'Principe Airport',
    city: 'Principe',
    countryCode: 'ST',
    countryName: 'Sao Tomé-et-Principe',
    iata: 'PCP',
    state: 'Principe'
  },
  {
    airportName: 'Sao Tome International Airport',
    city: 'Sao Tome',
    countryCode: 'ST',
    countryName: 'Sao Tomé-et-Principe',
    iata: 'TMS',
    state: 'Sao-Tome-Island'
  },
  {
    airportName: 'Angoche Airport',
    city: 'Angoche',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'ANO',
    state: 'Nampula'
  },
  {
    airportName: 'Beira Airport',
    city: 'Beira',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'BEW',
    state: 'Sofala'
  },
  {
    airportName: 'Cuamba Airport',
    city: 'Cuamba',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'FXO',
    state: 'Niassa'
  },
  {
    airportName: 'Chimoio Airport',
    city: 'Chimoio',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'VPY',
    state: 'Manica'
  },
  {
    airportName: 'Inhaca Airport',
    city: 'Inhaca',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'IHC',
    state: 'Maputo'
  },
  {
    airportName: 'Inhambane Airport',
    city: 'Inhambabe',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'INH',
    state: 'Inhambane'
  },
  {
    airportName: 'Lichinga Airport',
    city: 'Lichinga',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'VXC',
    state: 'Niassa'
  },
  {
    airportName: 'Lumbo Airport',
    city: 'Lumbo',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'LFB',
    state: 'Nampula'
  },
  {
    airportName: 'Maputo Airport',
    city: 'Maputo',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'MPM',
    state: 'Maputo'
  },
  {
    airportName: 'Mueda Airport',
    city: 'Mueda',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'MUD',
    state: 'Cabo-Delgado'
  },
  {
    airportName: 'Mocimboa da Praia Airport',
    city: 'Mocimboa da Praia',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'MZB',
    state: 'Cabo-Delgado'
  },
  {
    airportName: 'Nacala Airport',
    city: 'Nacala',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'MNC',
    state: 'Nampula'
  },
  {
    airportName: 'Nampula Airport',
    city: 'Nampula',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'APL',
    state: 'Nampula'
  },
  {
    airportName: 'Pemba Airport',
    city: 'Pemba / Porto Amelia',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'POL',
    state: 'Cabo-Delgado'
  },
  {
    airportName: 'Quelimane Airport',
    city: 'Quelimane',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'UEL',
    state: 'Zambezia'
  },
  {
    airportName: 'Chingozi Airport',
    city: 'Tete',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'TET',
    state: 'Tete'
  },
  {
    airportName: 'Vilankulo Airport',
    city: 'Vilanculo',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'VNX',
    state: 'Inhambane'
  },
  {
    airportName: 'Xai-Xai Airport',
    city: 'Xai-Xai',
    countryCode: 'MZ',
    countryName: 'Mozambique',
    iata: 'VJB',
    state: 'Gaza'
  },
  {
    airportName: 'Desroches Airport',
    city: 'Desroches Island',
    countryCode: 'SC',
    countryName: 'Seychelles',
    iata: 'DES',
    state: 'Desroches Island'
  },
  {
    airportName: 'Seychelles International Airport',
    city: 'Mahe Island',
    countryCode: 'SC',
    countryName: 'Seychelles',
    iata: 'SEZ',
    state: 'Pointe-Larue'
  },
  {
    airportName: 'Praslin Airport',
    city: 'Praslin Island',
    countryCode: 'SC',
    countryName: 'Seychelles',
    iata: 'PRI',
    state: 'Grand-Anse-Praslin'
  },
  {
    airportName: 'Bird Island Airport',
    city: 'Bird Island',
    countryCode: 'SC',
    countryName: 'Seychelles',
    iata: 'BDI',
    state: 'Bird Island'
  },
  {
    airportName: 'Denis Island Airport',
    city: 'Denis Island',
    countryCode: 'SC',
    countryName: 'Seychelles',
    iata: 'DEI',
    state: 'Denis Island'
  },
  {
    airportName: 'Fregate Island Airport',
    city: 'Fregate Island',
    countryCode: 'SC',
    countryName: 'Seychelles',
    iata: 'FRK',
    state: 'Inner-Islands'
  },
  {
    airportName: 'Sarh Airport',
    city: 'Sarh',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'SRH',
    state: 'Moyen-Chari'
  },
  {
    airportName: 'Bongor Airport',
    city: 'Bongor',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'OGR',
    state: 'Mayo-Kebbi-Est'
  },
  {
    airportName: 'Abeche Airport',
    city: 'Ouadai',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'AEH',
    state: 'Ouadai'
  },
  {
    airportName: 'Moundou Airport',
    city: 'Logone-Occidental',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'MQQ',
    state: 'Logone-Occidental'
  },
  {
    airportName: 'Lai Airport',
    city: 'Lai',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'LTC',
    state: 'Tandjile'
  },
  {
    airportName: 'Ati Airport',
    city: 'Ati',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'ATV',
    state: 'Batha'
  },
  {
    airportName: 'NDjamena International Airport',
    city: 'NDjamena',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'NDJ',
    state: 'Chari-Baguirmi'
  },
  {
    airportName: 'Bokoro Airport',
    city: 'Bokoro',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'BKR',
    state: 'Hadjer-Lamis'
  },
  {
    airportName: 'Bol Airport',
    city: 'Bol',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'OTC',
    state: 'Lac'
  },
  {
    airportName: 'Mongo Airport',
    city: 'Mongo',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'MVO',
    state: 'Guera'
  },
  {
    airportName: 'Am Timan Airport',
    city: 'Am Timan',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'AMC',
    state: 'Salamat'
  },
  {
    airportName: 'Pala Airport',
    city: 'Pala',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'PLF',
    state: 'Mayo-Kebbi-Ouest'
  },
  {
    airportName: 'Bousso Airport',
    city: 'Bousso',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'OUT',
    state: 'Chari-Baguirmi'
  },
  {
    airportName: 'Mao Airport',
    city: 'Mao',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'AMO',
    state: 'Kanem'
  },
  {
    airportName: 'Faya Largeau Airport',
    city: 'Borkou',
    countryCode: 'TD',
    countryName: 'Tchad',
    iata: 'FYT',
    state: 'Borkou'
  },
  {
    airportName: 'Joshua Mqabuko Nkomo International Airport',
    city: 'Bulawayo',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'BUQ',
    state: 'Matabeleland-North'
  },
  {
    airportName: 'Chipinge Airport',
    city: 'Chipinge',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'CHJ',
    state: 'Manicaland'
  },
  {
    airportName: 'Buffalo Range Airport',
    city: 'Chiredzi',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'BFO',
    state: 'Masvingo'
  },
  {
    airportName: 'Victoria Falls International Airport',
    city: 'Victoria Falls',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'VFA',
    state: 'Victoria Falls'
  },
  {
    airportName: 'Harare International Airport',
    city: 'Harare',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'HRE',
    state: 'Harare'
  },
  {
    airportName: 'Kariba International Airport',
    city: 'Kariba',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'KAB',
    state: 'Kariba'
  },
  {
    airportName: 'Mutare Airport',
    city: 'Manicaland',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'UTA',
    state: 'Manicaland'
  },
  {
    airportName: 'Masvingo International Airport',
    city: 'Masvingo',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'MVZ',
    state: 'Masvingo'
  },
  {
    airportName: 'Thornhill Air Base',
    city: 'Gweru',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'GWE',
    state: 'Gweru'
  },
  {
    airportName: 'Hwange National Park Airport',
    city: 'Hwange',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'HWN',
    state: 'Matabeleland-North'
  },
  {
    airportName: 'Hwange Airport',
    city: 'Hwange',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    iata: 'WKI',
    state: 'Matabeleland-North'
  },
  {
    airportName: 'Chelinda Malawi Airport',
    city: 'Northern-Region',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'CEH',
    state: 'Northern-Region'
  },
  {
    airportName: 'Chileka International Airport',
    city: 'Blantyre',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'BLZ',
    state: 'Southern-Region'
  },
  {
    airportName: 'Club Makokola Airport',
    city: 'Club Makokola',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'CMK',
    state: 'Southern-Region'
  },
  {
    airportName: 'Dwangwa Airport',
    city: 'Dwangwa',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'DWA',
    state: 'Central-Region'
  },
  {
    airportName: 'Karonga Airport',
    city: 'Karonga',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'KGJ',
    state: 'Karonga'
  },
  {
    airportName: 'Kasungu Airport',
    city: 'Kasungu',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'KBQ',
    state: 'Central-Region'
  },
  {
    airportName: 'Lilongwe International Airport',
    city: 'Lilongwe',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'LLW',
    state: 'Central-Region'
  },
  {
    airportName: 'Likoma Island Airport',
    city: 'Likoma Island',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'LIX',
    state: 'Northern-Region'
  },
  {
    airportName: 'Mangochi Airport',
    city: 'Mangochi',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'MAI',
    state: 'Southern-Region'
  },
  {
    airportName: 'Monkey Bay Airport',
    city: 'Monkey Bay',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'MYZ',
    state: 'Southern-Region'
  },
  {
    airportName: 'Salima Airport',
    city: 'Salima',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'LMB',
    state: 'Central-Region'
  },
  {
    airportName: 'Mzuzu Airport',
    city: 'Mzuzu',
    countryCode: 'MW',
    countryName: 'Malawi',
    iata: 'ZZU',
    state: 'Northern-Region'
  },
  {
    airportName: 'Lebakeng Airport',
    city: 'Lebakeng',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'LEF',
    state: 'Thaba-Tseka'
  },
  {
    airportName: 'Leribe Airport',
    city: 'Leribe',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'LRB',
    state: 'Leribe'
  },
  {
    airportName: 'Lesobeng Airport',
    city: 'Lesobeng',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'LES',
    state: 'Thaba-Tseka'
  },
  {
    airportName: 'Mafeteng Airport',
    city: 'Mafeteng',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'MFC',
    state: 'Mafeteng'
  },
  {
    airportName: 'Mokhotlong Airport',
    city: 'Mokhotlong',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'MKH',
    state: 'Mokhotlong'
  },
  {
    airportName: 'Moshoeshoe I International Airport',
    city: 'Maseru',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'MSU',
    state: 'Maseru'
  },
  {
    airportName: 'Nkaus Airport',
    city: 'Nkaus',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'NKU',
    state: 'Mohaleʼs-Hoek'
  },
  {
    airportName: 'Pelaneng Airport',
    city: 'Pelaneng',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'PEL',
    state: 'Leribe'
  },
  {
    airportName: 'Quthing Airport',
    city: 'Quthing',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'UTG',
    state: 'Quthing'
  },
  {
    airportName: 'Qachas Nek Airport',
    city: 'Qachas Nek',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'UNE',
    state: 'Qachaʼs-Nek'
  },
  {
    airportName: 'Sehonghong Airport',
    city: 'Sehonghong',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'SHK',
    state: 'Thaba-Tseka'
  },
  {
    airportName: 'Hong Kong International Airport',
    city: 'Hong Kong',
    countryCode: 'HK',
    countryName: 'Hong Kong',
    iata: 'HKG',
    state: 'Chek Lap Kok'
  },
  {
    airportName: 'Sekakes Airport',
    city: 'Sekakes',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'SKQ',
    state: 'Mohaleʼs-Hoek'
  },
  {
    airportName: 'Semonkong Airport',
    city: 'Semonkong',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'SOK',
    state: 'Maseru'
  },
  {
    airportName: 'Seshutes Airport',
    city: 'Seshutes',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'SHZ',
    state: 'Leribe'
  },
  {
    airportName: 'Thaba-Tseka Airport',
    city: 'Thaba-Tseka',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'THB',
    state: 'Thaba-Tseka'
  },
  {
    airportName: 'Tlokoeng Airport',
    city: 'Tlokoeng',
    countryCode: 'LS',
    countryName: 'Lesotho',
    iata: 'TKO',
    state: 'Mokhotlong'
  },
  {
    airportName: 'Arandis Airport',
    city: 'Arandis',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'ADI',
    state: 'Arandis'
  },
  {
    airportName: 'Gobabis Airport',
    city: 'Gobabis',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'GOG',
    state: 'Gobabis'
  },
  {
    airportName: 'Grootfontein Airport',
    city: 'Grootfontein',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'GFY',
    state: 'Otjozondjupa'
  },
  {
    airportName: 'Katima Mulilo Airport',
    city: 'Mpacha',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'MPA',
    state: 'Zambezi'
  },
  {
    airportName: 'Keetmanshoop Airport',
    city: 'Keetmanshoop',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'KMP',
    state: 'Karas'
  },
  {
    airportName: 'Luderitz Airport',
    city: 'Luderitz',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'LUD',
    state: 'Karas'
  },
  {
    airportName: 'Mokuti Lodge Airport',
    city: 'Mokuti Lodge',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'OKU',
    state: 'Mokuti Lodge'
  },
  {
    airportName: 'Namutoni Airport',
    city: 'Namutoni',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'NNI',
    state: 'Namutoni'
  },
  {
    airportName: 'Ondangwa Airport',
    city: 'Ondangwa',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'OND',
    state: 'Ondangwa'
  },
  {
    airportName: 'Omega Airport',
    city: 'Omega',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'OMG',
    state: 'Omega'
  },
  {
    airportName: 'Oranjemund Airport',
    city: 'Oranjemund',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'OMD',
    state: 'Karas'
  },
  {
    airportName: 'Okaukuejo Airport',
    city: 'Okaukuejo',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'OKF',
    state: 'Kunene'
  },
  {
    airportName: 'Rundu Airport',
    city: 'Rundu',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'NDU',
    state: 'Rundu'
  },
  {
    airportName: 'Swakopmund Airport',
    city: 'Swakopmund',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'SWP',
    state: 'Erongo'
  },
  {
    airportName: 'Tsumeb Airport',
    city: 'Tsumeb',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'TSB',
    state: 'Tsumeb'
  },
  {
    airportName: 'Walvis Bay Airport',
    city: 'Walvis Bay',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'WVB',
    state: 'Erongo'
  },
  {
    airportName: 'Eros Airport',
    city: 'Windhoek',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'ERS',
    state: 'Khomas'
  },
  {
    airportName: 'Hosea Kutako International Airport',
    city: 'Windhoek',
    countryCode: 'NA',
    countryName: 'Namibie',
    iata: 'WDH',
    state: 'Khomas'
  },
  {
    airportName: 'Ndjili International Airport',
    city: 'Kinshasa',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'FIH',
    state: 'Kinshasa'
  },
  {
    airportName: 'Ndolo Airport',
    city: 'Kinshasa',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'NLO',
    state: 'Kinshasa'
  },
  {
    airportName: 'Muanda Airport',
    city: 'Bas-Congo',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MNB',
    state: 'Bas-Congo'
  },
  {
    airportName: 'Luozi Airport',
    city: 'Luozi',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LZI',
    state: 'Bas-Congo'
  },
  {
    airportName: 'Tshimpi Airport',
    city: 'Matadi',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MAT',
    state: 'Bas-Congo'
  },
  {
    airportName: 'Nkolo Fuma Airport',
    city: 'Nkolo Fuma',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'NKL',
    state: 'Bas-Congo'
  },
  {
    airportName: 'Nioki Airport',
    city: 'Nioki',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'NIO',
    state: 'Nioki'
  },
  {
    airportName: 'Basango Mboliasa Airport',
    city: 'Kiri',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KRZ',
    state: 'Kiri'
  },
  {
    airportName: 'Lusanga Airport',
    city: 'Lusanga',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LUS',
    state: 'Lusanga'
  },
  {
    airportName: 'Masi Manimba Airport',
    city: 'Masi Manimba',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MSM',
    state: 'Masi Manimba'
  },
  {
    airportName: 'Mbandaka Airport',
    city: 'Mbandaka',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MDK',
    state: 'Equateur'
  },
  {
    airportName: 'Libenge Airport',
    city: 'Libenge',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LIE',
    state: 'Equateur'
  },
  {
    airportName: 'Gemena Airport',
    city: 'Gemena',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'GMA',
    state: 'Sud-Ubangi'
  },
  {
    airportName: 'Kotakoli Airport',
    city: 'Equateur',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KLI',
    state: 'Equateur'
  },
  {
    airportName: 'Lisala Airport',
    city: 'Equateur',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LIQ',
    state: 'Equateur'
  },
  {
    airportName: 'Bangoka International Airport',
    city: 'Kisangani',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'FKI',
    state: 'Tshopo'
  },
  {
    airportName: 'Yangambi Airport',
    city: 'Yangambi',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'YAN',
    state: 'Yangambi'
  },
  {
    airportName: 'Rughenda Airfield',
    city: 'Butembo',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'RUE',
    state: 'Nord-Kivu'
  },
  {
    airportName: 'Kindu Airport',
    city: 'Kindu',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KND',
    state: 'Maniema'
  },
  {
    airportName: 'Kinkungwa Airport',
    city: 'Kalima',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KLY',
    state: 'Kalima'
  },
  {
    airportName: 'Punia Airport',
    city: 'Punia',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'PUN',
    state: 'Punia'
  },
  {
    airportName: 'Lubumbashi International Airport',
    city: 'Lubumbashi',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'FBM',
    state: 'Lubumbashi'
  },
  {
    airportName: 'Pweto Airport',
    city: 'Pweto',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'PWO',
    state: 'Pweto'
  },
  {
    airportName: 'Kolwezi Airport',
    city: 'Lualaba',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KWZ',
    state: 'Lualaba'
  },
  {
    airportName: 'Manono Airport',
    city: 'Manono',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MNO',
    state: 'Tanganika'
  },
  {
    airportName: 'Kongolo Airport',
    city: 'Kongolo',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KOO',
    state: 'Kongolo'
  },
  {
    airportName: 'Kaniama Airport',
    city: 'Kaniama',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'KNM',
    state: 'Haut-Lomani'
  },
  {
    airportName: 'Luiza Airport',
    city: 'Luiza',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LZA',
    state: 'Luiza'
  },
  {
    airportName: 'Tshikapa Airport',
    city: 'Tshikapa',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'TSH',
    state: 'Tshikapa'
  },
  {
    airportName: 'Lodja Airport',
    city: 'Lodja',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LJA',
    state: 'Kasai-Oriental'
  },
  {
    airportName: 'Lusambo Airport',
    city: 'Lusambo',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'LBO',
    state: 'Sankuru'
  },
  {
    airportName: 'Mweka Airport',
    city: 'Mweka',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MEW',
    state: 'Mweka'
  },
  {
    airportName: 'Ilebo Airport',
    city: 'Ilebo',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'PFR',
    state: 'Kasai'
  },
  {
    airportName: 'Mbuji Mayi Airport',
    city: 'Mbuji Mayi',
    countryCode: 'CD',
    countryName: 'République\r\n démocratique du Congo',
    iata: 'MJM',
    state: 'Kasai-Oriental'
  },
  {
    airportName: 'Senou Airport',
    city: 'Senou',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'BKO',
    state: 'Bamako'
  },
  {
    airportName: 'Goundam Airport',
    city: 'Goundam',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'GUD',
    state: 'Gao'
  },
  {
    airportName: 'Gao Airport',
    city: 'Gao',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'GAQ',
    state: 'Gao'
  },
  {
    airportName: 'Kenieba Airport',
    city: 'Kenieba',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'KNZ',
    state: 'Kayes'
  },
  {
    airportName: 'Koutiala Airport',
    city: 'Koutiala',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'KTX',
    state: 'Sikasso'
  },
  {
    airportName: 'Kayes Dag Dag Airport',
    city: 'Kayes',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'KYS',
    state: 'Kayes'
  },
  {
    airportName: 'Ambodedjo Airport',
    city: 'Mopti',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'MZI',
    state: 'Mopti'
  },
  {
    airportName: 'Nara Airport',
    city: 'Nara',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'NRM',
    state: 'Koulikoro'
  },
  {
    airportName: 'Nioro du Sahel Airport',
    city: 'Nioro du Sahel',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'NIX',
    state: 'Kayes'
  },
  {
    airportName: 'Sikasso Airport',
    city: 'Sikasso',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'KSS',
    state: 'Sikasso'
  },
  {
    airportName: 'Timbuktu Airport',
    city: 'Timbuktu',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'TOM',
    state: 'Tombouctou'
  },
  {
    airportName: 'Yelimane Airport',
    city: 'Yelimane',
    countryCode: 'ML',
    countryName: 'Mali',
    iata: 'EYL',
    state: 'Kayes'
  },
  {
    airportName: 'Banjul International Airport',
    city: 'Banjul',
    countryCode: 'GM',
    countryName: 'Gambie',
    iata: 'BJL',
    state: 'Western'
  },
  {
    airportName: 'Fuerteventura Airport',
    city: 'Fuerteventura Island',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'FUE',
    state: 'Canary-Islands'
  },
  {
    airportName: 'La Palma Airport',
    city: 'Sta Cruz de la Palma',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'SPC',
    state: 'Canary-Islands'
  },
  {
    airportName: 'Gran Canaria Airport',
    city: 'Gran Canaria Island',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'LPA',
    state: 'Canary-Islands'
  },
  {
    airportName: 'Lanzarote Airport',
    city: 'Lanzarote Island',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'ACE',
    state: 'Canary-Islands'
  },
  {
    airportName: 'Sherbro International Airport',
    city: 'Bonthe',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'BTE',
    state: 'Southern-Province'
  },
  {
    airportName: 'Bo Airport',
    city: 'Bo',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'KBS',
    state: 'Southern-Province'
  },
  {
    airportName: 'Gbangbatok Airport',
    city: 'Gbangbatok',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'GBK',
    state: 'Southern-Province'
  },
  {
    airportName: 'Hastings Airport',
    city: 'Freetown',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'HGS',
    state: 'Western-Area'
  },
  {
    airportName: 'Kabala Airport',
    city: 'Kabala',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'KBA',
    state: 'Northern-Province'
  },
  {
    airportName: 'Kenema Airport',
    city: 'Kenema',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'KEN',
    state: 'Eastern-Province'
  },
  {
    airportName: 'Lungi International Airport',
    city: 'Freetown',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'FNA',
    state: 'Northern-Province'
  },
  {
    airportName: 'Yengema Airport',
    city: 'Yengema',
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    iata: 'WYE',
    state: 'Eastern-Province'
  },
  {
    airportName: 'Bubaque Airport',
    city: 'Bubaque',
    countryCode: 'GW',
    countryName: 'Guinée-Bissau',
    iata: 'BQE',
    state: 'Bolama-and-Bijagos'
  },
  {
    airportName: 'Osvaldo Vieira International Airport',
    city: 'Bissau',
    countryCode: 'GW',
    countryName: 'Guinée-Bissau',
    iata: 'OXB',
    state: 'Bissau'
  },
  {
    airportName: 'Buchanan Airport',
    city: 'Buchanan',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'UCN',
    state: 'Sinoe'
  },
  {
    airportName: 'Cape Palmas Airport',
    city: 'Harper',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'CPA',
    state: 'Maryland'
  },
  {
    airportName: 'Greenville Sinoe Airport',
    city: 'Greenville',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'SNI',
    state: 'Sinoe'
  },
  {
    airportName: 'Spriggs Payne Airport',
    city: 'Monrovia',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'MLW',
    state: 'Montserrado'
  },
  {
    airportName: 'Nimba Airport',
    city: 'Nimba',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'NIA',
    state: 'Nimba'
  },
  {
    airportName: 'Roberts International Airport',
    city: 'Monrovia',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'ROB',
    state: 'Margibi'
  },
  {
    airportName: 'Sasstown Airport',
    city: 'Sasstown',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'SAZ',
    state: 'Sinoe'
  },
  {
    airportName: 'Tchien Airport',
    city: 'Tchien',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'THC',
    state: 'Grand-Gedeh'
  },
  {
    airportName: 'Voinjama Airport',
    city: 'Voinjama',
    countryCode: 'LR',
    countryName: 'Liberia',
    iata: 'VOI',
    state: 'Lofa'
  },
  {
    airportName: 'Al Massira Airport',
    city: 'Agadir',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'AGA',
    state: 'Souss-Massa'
  },
  {
    airportName: 'Tan Tan Airport',
    city: 'Tan Tan',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'TTA',
    state: 'Guelmim-Oued-Noun'
  },
  {
    airportName: 'Zagora Airport',
    city: 'Zagora',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'OZG',
    state: 'Draa-Tafilalet'
  },
  {
    airportName: 'Bouarfa Airport',
    city: 'Bouarfa',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'UAR',
    state: 'Bouarfa'
  },
  {
    airportName: 'Saiss Airport',
    city: 'Fes',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'FEZ',
    state: 'Fes-Meknes'
  },
  {
    airportName: 'Moulay Ali Cherif Airport',
    city: 'Errachidia',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'ERH',
    state: 'Errachidia'
  },
  {
    airportName: 'Bassatine Airport',
    city: 'Meknes',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'MEK',
    state: 'Fes-Meknes'
  },
  {
    airportName: 'Angads Airport',
    city: 'Oujda',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'OUD',
    state: 'Oriental'
  },
  {
    airportName: 'Ben Slimane Airport',
    city: 'Ben Slimane',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'GMD',
    state: 'Casablanca-Settat'
  },
  {
    airportName: 'Anfa Airport',
    city: 'Casablanca',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'CAS',
    state: 'Casablanca-Settat'
  },
  {
    airportName: 'Rabat-Sale Airport',
    city: 'Rabat',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'RBA',
    state: 'Rabat'
  },
  {
    airportName: 'Sidi Ifni Xx Airport',
    city: 'Sidi Ifni',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'SII',
    state: 'Guelmim-Oued-Noun'
  },
  {
    airportName: 'Mogador Airport',
    city: 'Essaouira',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'ESU',
    state: 'Essaouira'
  },
  {
    airportName: 'Mohammed V International Airport',
    city: 'Casablanca',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'CMN',
    state: 'Casablanca'
  },
  {
    airportName: 'Safi Airport',
    city: 'Safi',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'SFI',
    state: 'Marrakesh-Safi'
  },
  {
    airportName: 'Nador International Airport',
    city: 'Nador',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'NDR',
    state: 'Oriental'
  },
  {
    airportName: 'Menara Airport',
    city: 'Marrakech',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'RAK',
    state: 'Marrakesh-Safi'
  },
  {
    airportName: 'Ouarzazate Airport',
    city: 'Ouarzazate',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'OZZ',
    state: 'Draa-Tafilalet'
  },
  {
    airportName: 'Cherif Al Idrissi Airport',
    city: 'Al Hoceima',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'AHU',
    state: 'Tanger-Tetouan-Al-Hoceima'
  },
  {
    airportName: 'Ibn Batouta Airport',
    city: 'Tangier',
    countryCode: 'MA',
    countryName: 'Maroc',
    iata: 'TNG',
    state: 'Tangier'
  },
  {
    airportName: 'Blaise Diagne International Airport',
    city: 'Diass',
    countryCode: 'SN',
    countryName: 'Senegal',
    iata: 'DSS',
    state: 'Dakar'
  },
  {
    airportName: 'Ziguinchor Airport',
    city: 'Ziguinchor',
    countryCode: 'SN',
    countryName: 'Senegal',
    iata: 'ZIG',
    state: 'Ziguinchor'
  },
  {
    airportName: 'Cap Skirring Airport',
    city: 'Cap Skirring',
    countryCode: 'SN',
    countryName: 'Senegal',
    iata: 'CSK',
    state: 'Ziguinchor'
  },
  {
    airportName: 'Leopold Sedar Senghor International Airport',
    city: 'Dakar',
    countryCode: 'SN',
    countryName: 'Senegal',
    iata: 'DKR',
    state: 'Dakar'
  },
  {
    airportName: 'Bakel Airport',
    city: 'Bakel',
    countryCode: 'SN',
    countryName: 'Senegal',
    iata: 'BXE',
    state: 'Tambacounda'
  },
  {
    airportName: 'Aioun el Atrouss Airport',
    city: 'Aioun El Atrouss',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'AEO',
    state: 'Aioun El Atrouss'
  },
  {
    airportName: 'Boutilimit Airport',
    city: 'Boutilimit',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'OTL',
    state: 'Trarza'
  },
  {
    airportName: 'Tichitt Airport',
    city: 'Tichitt',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'THI',
    state: 'Tagant'
  },
  {
    airportName: 'Tidjikja Airport',
    city: 'Tidjikja',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'TIY',
    state: 'Tagant'
  },
  {
    airportName: 'Abbaye Airport',
    city: 'Boghe',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'BGH',
    state: 'Brakna'
  },
  {
    airportName: 'Kiffa Airport',
    city: 'Kiffa',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'KFA',
    state: 'Assaba'
  },
  {
    airportName: 'Timbedra Airport',
    city: 'Timbedra',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'TMD',
    state: 'Hodh-ech-Chargui'
  },
  {
    airportName: 'Nema Airport',
    city: 'Nema',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'EMN',
    state: 'Hodh-ech-Chargui'
  },
  {
    airportName: 'Akjoujt Airport',
    city: 'Akjoujt',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'AJJ',
    state: 'Akjoujt'
  },
  {
    airportName: 'Kaedi Airport',
    city: 'Kaedi',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'KED',
    state: 'Gorgol'
  },
  {
    airportName: 'Letfotar Airport',
    city: 'Moudjeria',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'MOM',
    state: 'Brakna'
  },
  {
    airportName: 'Nouakchott International Airport',
    city: 'Nouakchott',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'NKC',
    state: 'Trarza'
  },
  {
    airportName: 'Selibaby Airport',
    city: 'Selibaby',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'SEY',
    state: 'Guidimaka'
  },
  {
    airportName: 'Tamchakett Airport',
    city: 'Tamchakett',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'THT',
    state: 'Hodh-El-Gharbi'
  },
  {
    airportName: 'Atar International Airport',
    city: 'Atar',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'ATR',
    state: 'Adrar'
  },
  {
    airportName: 'Fderik Airport',
    city: 'Fderik',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'FGD',
    state: 'Tiris-Zemmour'
  },
  {
    airportName: 'Nouadhibou International Airport',
    city: 'Nouadhibou',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'NDB',
    state: 'Dakhlet-Nouadhibou'
  },
  {
    airportName: 'Tazadit Airport',
    city: 'Zouerate',
    countryCode: 'MR',
    countryName: 'Mauritanie',
    iata: 'OUZ',
    state: 'Tiris-Zemmour'
  },
  {
    airportName: 'Conakry Airport',
    city: 'Conakry',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'CKY',
    state: 'Conakry'
  },
  {
    airportName: 'Fria Airport',
    city: 'Boke',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'FIG',
    state: 'Boke'
  },
  {
    airportName: 'Faranah Airport',
    city: 'Faranah',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'FAA',
    state: 'Faranah'
  },
  {
    airportName: 'Kissidougou Airport',
    city: 'Kissidougou',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'KSI',
    state: 'Faranah'
  },
  {
    airportName: 'Labe Airport',
    city: 'Labe',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'LEK',
    state: 'Labe'
  },
  {
    airportName: 'Macenta Airport',
    city: 'Macenta',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'MCA',
    state: 'Nzerekore'
  },
  {
    airportName: 'Nzerekore Airport',
    city: 'Nzerekore',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'NZE',
    state: 'Nzerekore'
  },
  {
    airportName: 'Boke Airport',
    city: 'Boke',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'BKJ',
    state: 'Boke'
  },
  {
    airportName: 'Sambailo Airport',
    city: 'Koundara',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'SBI',
    state: 'Boke'
  },
  {
    airportName: 'Siguiri Airport',
    city: 'Siguiri',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'GII',
    state: 'Kankan'
  },
  {
    airportName: 'Kankan Airport',
    city: 'Kankan',
    countryCode: 'GN',
    countryName: 'Guinee',
    iata: 'KNN',
    state: 'Kankan'
  },
  {
    airportName: 'Amilcar Cabral International Airport',
    city: 'Espargos',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'SID',
    state: 'Sal'
  },
  {
    airportName: 'Agostinho Neto Airport',
    city: 'Ponta do Sol',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'NTO',
    state: 'Ribeira-Grande'
  },
  {
    airportName: 'Rabil Airport',
    city: 'Rabil',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'BVC',
    state: 'Boa-Vista'
  },
  {
    airportName: 'Esperadinha Airport',
    city: 'Brava Island',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'BVR',
    state: 'Brava'
  },
  {
    airportName: 'Maio Airport',
    city: 'Vila do Maio',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'MMO',
    state: 'Maio'
  },
  {
    airportName: 'Mosteiros Airport',
    city: 'Vila do Mosteiros',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'MTI',
    state: 'Mosteiros'
  },
  {
    airportName: 'Praia International Airport',
    city: 'Praia',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'RAI',
    state: 'Praia'
  },
  {
    airportName: 'Sao Filipe Airport',
    city: 'Sao Filipe',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'SFL',
    state: 'Sao-Filipe'
  },
  {
    airportName: 'Preguica Airport',
    city: 'Preguica',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'SNE',
    state: 'Ribeira-Brava'
  },
  {
    airportName: 'Sao Pedro Airport',
    city: 'Sao Pedro',
    countryCode: 'CV',
    countryName: 'Cap-Vert',
    iata: 'VXE',
    state: 'Sao-Vicente'
  },
  {
    airportName: 'Bole International Airport',
    city: 'Addis Ababa',
    countryCode: 'ET',
    countryName: 'Ethiopie',
    iata: 'ADD',
    state: 'Addis-Ababa'
  },
  {
    airportName: 'Bahir Dar Airport',
    city: 'Bahir Dar',
    countryCode: 'ET',
    countryName: 'Ethiopie',
    iata: 'BJR',
    state: 'Amhara'
  },
  {
    airportName: 'Aba Tenna Dejazmach Yilma International Airport',
    city: 'Dire Dawa',
    countryCode: 'ET',
    countryName: 'Ethiopie',
    iata: 'DIR',
    state: 'Dire-Dawa'
  },
  {
    airportName: 'Mekele Airport',
    city: 'Tigray',
    countryCode: 'ET',
    countryName: 'Ethiopie',
    iata: 'MQX',
    state: 'Tigray'
  },
  {
    airportName: 'Bujumbura International Airport',
    city: 'Bujumbura',
    countryCode: 'BI',
    countryName: 'Burundi',
    iata: 'BJM',
    state: 'Bujumbura-Mairie'
  },
  {
    airportName: 'Gitega Airport',
    city: 'Gitega',
    countryCode: 'BI',
    countryName: 'Burundi',
    iata: 'GID',
    state: 'Gitega'
  },
  {
    airportName: 'Kirundo Airport',
    city: 'Kirundo',
    countryCode: 'BI',
    countryName: 'Burundi',
    iata: 'KRE',
    state: 'Kirundo'
  },
  {
    airportName: 'Alula Airport',
    city: 'Alula',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'ALU',
    state: 'Bari'
  },
  {
    airportName: 'Baidoa Airport',
    city: 'Baidoa',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'BIB',
    state: 'Bay'
  },
  {
    airportName: 'Candala Airport',
    city: 'Candala',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'CXN',
    state: 'Bari'
  },
  {
    airportName: 'Bardera Airport',
    city: 'Gedo',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'BSY',
    state: 'Gedo'
  },
  {
    airportName: 'Eil Airport',
    city: 'Eil',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'HCM',
    state: 'Nugaal'
  },
  {
    airportName: 'Bosaso Airport',
    city: 'Bosaso',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'BSA',
    state: 'Bari'
  },
  {
    airportName: 'Gardo Airport',
    city: 'Gardo',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'GSR',
    state: 'Bari'
  },
  {
    airportName: 'Egal International Airport',
    city: 'Hargeisa',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'HGA',
    state: 'Woqooyi-Galbeed'
  },
  {
    airportName: 'Berbera Airport',
    city: 'Berbera',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'BBO',
    state: 'Woqooyi-Galbeed'
  },
  {
    airportName: 'Kisimayu Airport',
    city: 'Lower-Juba',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'KMU',
    state: 'Lower-Juba'
  },
  {
    airportName: 'Aden Adde International Airport',
    city: 'Mogadishu',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'MGQ',
    state: 'Banaadir'
  },
  {
    airportName: 'Obbia Airport',
    city: 'Obbia',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'CMO',
    state: 'Mudug'
  },
  {
    airportName: 'Galcaio Airport',
    city: 'Galcaio',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'GLK',
    state: 'Mudug'
  },
  {
    airportName: 'Scusciuban Airport',
    city: 'Scusciuban',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'CMS',
    state: 'Bari'
  },
  {
    airportName: 'Erigavo Airport',
    city: 'Erigavo',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'ERA',
    state: 'Sanaag'
  },
  {
    airportName: 'Burao Airport',
    city: 'Burao',
    countryCode: 'SO',
    countryName: 'Somalie',
    iata: 'BUO',
    state: 'Togdheer'
  },
  {
    airportName: 'Djibouti-Ambouli Airport',
    city: 'Djibouti City',
    countryCode: 'DJ',
    countryName: 'Djibouti',
    iata: 'JIB',
    state: 'Djibouti'
  },
  {
    airportName: 'Ali-Sabieh Airport',
    city: 'Ali-Sabieh',
    countryCode: 'DJ',
    countryName: 'Djibouti',
    iata: 'AII',
    state: 'Ali-Sabieh'
  },
  {
    airportName: 'Moucha Airport',
    city: 'Moucha Island',
    countryCode: 'DJ',
    countryName: 'Djibouti',
    iata: 'MHI',
    state: 'Djibouti'
  },
  {
    airportName: 'Obock Airport',
    city: 'Obock',
    countryCode: 'DJ',
    countryName: 'Djibouti',
    iata: 'OBC',
    state: 'Obock'
  },
  {
    airportName: 'Tadjoura Airport',
    city: 'Tadjoura',
    countryCode: 'DJ',
    countryName: 'Djibouti',
    iata: 'TDJ',
    state: 'Tadjourah'
  },
  {
    airportName: 'Siwa Oasis North Airport',
    city: 'Siwa',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'SEW',
    state: 'Matruh'
  },
  {
    airportName: 'El Alamein International Airport',
    city: 'El Alamein',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'DBB',
    state: 'Matruh'
  },
  {
    airportName: 'El Arish International Airport',
    city: 'El Arish',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'AAC',
    state: 'North-Sinai'
  },
  {
    airportName: 'Assiut International Airport',
    city: 'Assiut',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'ATZ',
    state: 'Asyut'
  },
  {
    airportName: 'El Nouzha Airport',
    city: 'Alexandria',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'ALY',
    state: 'Alexandria'
  },
  {
    airportName: 'Borg El Arab International Airport',
    city: 'Alexandria',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'HBE',
    state: 'Alexandria'
  },
  {
    airportName: 'Abu Simbel Airport',
    city: 'Abu Simbel',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'ABS',
    state: 'Aswan'
  },
  {
    airportName: 'Cairo International Airport',
    city: 'Cairo',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'CAI',
    state: 'Cairo'
  },
  {
    airportName: 'Cairo West Airport',
    city: 'El Cairo',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'CWE',
    state: 'Giza'
  },
  {
    airportName: 'Dakhla Airport',
    city: 'New-Valley',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'DAK',
    state: 'New-Valley'
  },
  {
    airportName: 'Hurghada International Airport',
    city: 'Hurghada',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'HRG',
    state: 'Red-Sea'
  },
  {
    airportName: 'El Gora Airport',
    city: 'North-Sinai',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'EGH',
    state: 'North-Sinai'
  },
  {
    airportName: 'El Kharga Airport',
    city: 'New-Valley',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'UVL',
    state: 'New-Valley'
  },
  {
    airportName: 'Luxor International Airport',
    city: 'Luxor',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'LXR',
    state: 'Qena'
  },
  {
    airportName: 'Marsa Alam International Airport',
    city: 'Marsa Alam',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'RMF',
    state: 'Red-Sea'
  },
  {
    airportName: 'Sohag International Airport',
    city: 'Sohag',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'HMB',
    state: 'New-Valley'
  },
  {
    airportName: 'Mersa Matruh Airport',
    city: 'Mersa Matruh',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'MUH',
    state: 'Matruh'
  },
  {
    airportName: 'Shark El Oweinat International Airport',
    city: 'New-Valley',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'GSQ',
    state: 'New-Valley'
  },
  {
    airportName: 'Port Said Airport',
    city: 'Port Said',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'PSD',
    state: 'Port-Said'
  },
  {
    airportName: 'St Catherine International Airport',
    city: 'South-Sinai',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'SKV',
    state: 'South-Sinai'
  },
  {
    airportName: 'Sharm El Sheikh International Airport',
    city: 'Sharm el-Sheikh',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'SSH',
    state: 'South-Sinai'
  },
  {
    airportName: 'Aswan International Airport',
    city: 'Aswan',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'ASW',
    state: 'Aswan'
  },
  {
    airportName: 'Taba International Airport',
    city: 'Taba',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'TCP',
    state: 'South-Sinai'
  },
  {
    airportName: 'El Tor Airport',
    city: 'South-Sinai',
    countryCode: 'EG',
    countryName: 'Egypte',
    iata: 'ELT',
    state: 'South-Sinai'
  },
  {
    airportName: 'Asmara International Airport',
    city: 'Asmara',
    countryCode: 'ER',
    countryName: 'Erythree',
    iata: 'ASM',
    state: 'Maekel'
  },
  {
    airportName: 'Massawa International Airport',
    city: 'Massawa',
    countryCode: 'ER',
    countryName: 'Erythree',
    iata: 'MSW',
    state: 'Northern-Red-Sea'
  },
  {
    airportName: 'Assab International Airport',
    city: 'Asab',
    countryCode: 'ER',
    countryName: 'Erythree',
    iata: 'ASA',
    state: 'Asab'
  },
  {
    airportName: 'Tessenei Airport',
    city: 'Tessenei',
    countryCode: 'ER',
    countryName: 'Erythree',
    iata: 'TES',
    state: 'Tessenei'
  },
  {
    airportName: 'Eldoret International Airport',
    city: 'Eldoret',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'EDL',
    state: 'Uasin-Gishu'
  },
  {
    airportName: 'Eliye Springs Airport',
    city: 'Eliye Springs',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'EYS',
    state: 'Eliye Springs'
  },
  {
    airportName: 'Jomo Kenyatta International Airport',
    city: 'Nairobi',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'NBO',
    state: 'Nairobi-Area'
  },
  {
    airportName: 'Segel Airport',
    city: 'Marsabit',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'RBT',
    state: 'Marsabit'
  },
  {
    airportName: 'Mombasa Moi International Airport',
    city: 'Mombasa',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'MBA',
    state: 'Mombasa'
  },
  {
    airportName: 'Mara Serena Lodge Airstrip',
    city: 'Masai Mara',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'MRE',
    state: 'Narok'
  },
  {
    airportName: 'Nyeri Airport',
    city: 'Nyeri',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'NYE',
    state: 'Nyeri'
  },
  {
    airportName: 'Nairobi Wilson Airport',
    city: 'Nairobi',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'WIL',
    state: 'Nairobi-Area'
  },
  {
    airportName: 'Samburu South Airport',
    city: 'Samburu South',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'UAS',
    state: 'Samburu South'
  },
  {
    airportName: 'Ukunda Airstrip',
    city: 'Ukunda',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'UKA',
    state: 'Ukunda'
  },
  {
    airportName: 'Wajir Airport',
    city: 'Wajir',
    countryCode: 'KE',
    countryName: 'Kenya',
    iata: 'WJR',
    state: 'Wajir'
  },
  {
    airportName: 'Gardabya Airport',
    city: 'Sirt',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'SRX',
    state: 'Sirt'
  },
  {
    airportName: 'Gamal Abdel Nasser Airport',
    city: 'Tobruk',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'TOB',
    state: 'Tobruk'
  },
  {
    airportName: 'Ghat Airport',
    city: 'Ghat',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'GHT',
    state: 'Sha‘biyat-Ghat'
  },
  {
    airportName: 'Kufra Airport',
    city: 'Kufra',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'AKF',
    state: 'Al-Kufrah'
  },
  {
    airportName: 'Benina International Airport',
    city: 'Benghazi',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'BEN',
    state: 'Banghazi'
  },
  {
    airportName: 'Mitiga Airport',
    city: 'Tripoli',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'MJI',
    state: 'Tripoli'
  },
  {
    airportName: 'La Abraq Airport',
    city: 'Al Bayda',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'LAQ',
    state: 'Al Bayda'
  },
  {
    airportName: 'Sabha Airport',
    city: 'Sabha',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'SEB',
    state: 'Sabha'
  },
  {
    airportName: 'Tripoli International Airport',
    city: 'Tripoli',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'TIP',
    state: 'Tripoli'
  },
  {
    airportName: 'Ghadames East Airport',
    city: 'Ghadames',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'LTD',
    state: 'Ghadames'
  },
  {
    airportName: 'Zwara Airport',
    city: 'Zuwara',
    countryCode: 'LY',
    countryName: 'Libye',
    iata: 'WAX',
    state: 'Zuwara'
  },
  {
    airportName: 'Gisenyi Airport',
    city: 'Gisenyi',
    countryCode: 'RW',
    countryName: 'Rwanda',
    iata: 'GYI',
    state: 'Western-Province'
  },
  {
    airportName: 'Butare Airport',
    city: 'Butare',
    countryCode: 'RW',
    countryName: 'Rwanda',
    iata: 'BTQ',
    state: 'Southern-Province'
  },
  {
    airportName: 'Kigali International Airport',
    city: 'Kigali',
    countryCode: 'RW',
    countryName: 'Rwanda',
    iata: 'KGL',
    state: 'Kigali'
  },
  {
    airportName: 'Ruhengeri Airport',
    city: 'Ruhengeri',
    countryCode: 'RW',
    countryName: 'Rwanda',
    iata: 'RHG',
    state: 'Northern-Province'
  },
  {
    airportName: 'Kamembe Airport',
    city: 'Kamembe',
    countryCode: 'RW',
    countryName: 'Rwanda',
    iata: 'KME',
    state: 'Western-Province'
  },
  {
    airportName: 'Atbara Airport',
    city: 'Atbara',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'ATB',
    state: 'Atbara'
  },
  {
    airportName: 'El Debba Airport',
    city: 'El Debba',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'EDB',
    state: 'El Debba'
  },
  {
    airportName: 'Dongola Airport',
    city: 'Dongola',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'DOG',
    state: 'Northern-State'
  },
  {
    airportName: 'Damazin Airport',
    city: 'Ad Damazin',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'RSS',
    state: 'Blue-Nile'
  },
  {
    airportName: 'El Fasher Airport',
    city: 'El Fasher',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'ELF',
    state: 'Northern-Darfur'
  },
  {
    airportName: 'Azaza Airport',
    city: 'Gedaref',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'GSU',
    state: 'Gedaref'
  },
  {
    airportName: 'Galegu Airport',
    city: 'Dinder',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'DNX',
    state: 'Dinder'
  },
  {
    airportName: 'Geneina Airport',
    city: 'Geneina',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'EGN',
    state: 'Western-Darfur'
  },
  {
    airportName: 'Heglig Airport',
    city: 'Heglig Oilfield',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'HEG',
    state: 'Heglig Oilfield'
  },
  {
    airportName: 'Kassala Airport',
    city: 'Kassala',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'KSL',
    state: 'Kassala'
  },
  {
    airportName: 'Khashm El Girba Airport',
    city: 'Khashm El Girba',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'GBU',
    state: 'Khashm El Girba'
  },
  {
    airportName: 'Kosti Airport',
    city: 'Kosti',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'KST',
    state: 'White-Nile'
  },
  {
    airportName: 'Kadugli Airport',
    city: 'Kadugli',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'KDX',
    state: 'Southern-Kordofan'
  },
  {
    airportName: 'Rumbek Airport',
    city: 'Rumbek',
    countryCode: 'SS',
    countryName: 'Soudan',
    iata: 'RBX',
    state: 'Rumbek'
  },
  {
    airportName: 'Merowe Airport',
    city: 'Merowe',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'MWE',
    state: 'Northern-State'
  },
  {
    airportName: 'En Nahud Airport',
    city: 'En Nahud',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'NUD',
    state: 'West-Kordofan-State'
  },
  {
    airportName: 'Nyala Airport',
    city: 'Nyala',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'UYL',
    state: 'Southern-Darfur'
  },
  {
    airportName: 'New Halfa Airport',
    city: 'New Halfa',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'NHF',
    state: 'Kassala'
  },
  {
    airportName: 'El Obeid Airport',
    city: 'Al-Ubayyid',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'EBD',
    state: 'North-Kordofan'
  },
  {
    airportName: 'Port Sudan New International Airport',
    city: 'Port Sudan',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'PZU',
    state: 'Red-Sea'
  },
  {
    airportName: 'Juba Airport',
    city: 'Juba',
    countryCode: 'SS',
    countryName: 'Soudan',
    iata: 'JUB',
    state: 'Juba'
  },
  {
    airportName: 'Malakal Airport',
    city: 'Malakal',
    countryCode: 'SS',
    countryName: 'Soudan',
    iata: 'MAK',
    state: 'Malakal'
  },
  {
    airportName: 'Khartoum International Airport',
    city: 'Khartoum',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'KRT',
    state: 'Khartoum'
  },
  {
    airportName: 'Wadi Halfa Airport',
    city: 'Wadi Halfa',
    countryCode: 'SD',
    countryName: 'Soudan',
    iata: 'WHF',
    state: 'Northern-State'
  },
  {
    airportName: 'Wau Airport',
    city: 'Wau',
    countryCode: 'SS',
    countryName: 'Soudan',
    iata: 'WUU',
    state: 'Wau'
  },
  {
    airportName: 'Arusha Airport',
    city: 'Arusha',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'ARK',
    state: 'Arusha'
  },
  {
    airportName: 'Bukoba Airport',
    city: 'Bukoba',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'BKZ',
    state: 'Kagera'
  },
  {
    airportName: 'Mwalimu Julius K. Nyerere International Airport',
    city: 'Dar es Salaam',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'DAR',
    state: 'Dar-es-Salaam'
  },
  {
    airportName: 'Dodoma Airport',
    city: 'Dodoma',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'DOD',
    state: 'Dodoma'
  },
  {
    airportName: 'Iringa Airport',
    city: 'Nduli',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'IRI',
    state: 'Iringa'
  },
  {
    airportName: 'Kigoma Airport',
    city: 'Kigoma',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'TKQ',
    state: 'Kigoma'
  },
  {
    airportName: 'Kilwa Masoko Airport',
    city: 'Kilwa Masoko',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'KIY',
    state: 'Lindi'
  },
  {
    airportName: 'Kilimanjaro International Airport',
    city: 'Arusha',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'JRO',
    state: 'Kilimanjaro'
  },
  {
    airportName: 'Kikwetu Airport',
    city: 'Lindi',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'LDI',
    state: 'Lindi'
  },
  {
    airportName: 'Lake Manyara Airport',
    city: 'Lake Manyara National Park',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'LKY',
    state: 'Arusha'
  },
  {
    airportName: 'Mafia Island Airport',
    city: 'Mafia Island',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'MFA',
    state: 'Pwani'
  },
  {
    airportName: 'Mbeya Airport',
    city: 'Mbeya',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'MBI',
    state: 'Mbeya'
  },
  {
    airportName: 'Mwadui Airport',
    city: 'Mwadui',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'MWN',
    state: 'Shinyanga'
  },
  {
    airportName: 'Masasi Airport',
    city: 'Masasi',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'XMI',
    state: 'Mtwara'
  },
  {
    airportName: 'Moshi Airport',
    city: 'Moshi',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'QSI',
    state: 'Kilimanjaro'
  },
  {
    airportName: 'Mtwara Airport',
    city: 'Mtwara',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'MYW',
    state: 'Mtwara'
  },
  {
    airportName: 'Musoma Airport',
    city: 'Musoma',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'MUZ',
    state: 'Mara'
  },
  {
    airportName: 'Mwanza Airport',
    city: 'Mwanza',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'MWZ',
    state: 'Mwanza'
  },
  {
    airportName: 'Nachingwea Airport',
    city: 'Nachingwea',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'NCH',
    state: 'Lindi'
  },
  {
    airportName: 'Njombe Airport',
    city: 'Njombe',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'JOM',
    state: 'Njombe'
  },
  {
    airportName: 'Pemba Airport',
    city: 'Chake',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'PMA',
    state: 'Pemba-South'
  },
  {
    airportName: 'Seronera Airport',
    city: 'Seronera',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'SEU',
    state: 'Mara'
  },
  {
    airportName: 'Songea Airport',
    city: 'Songea',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'SGX',
    state: 'Ruvuma'
  },
  {
    airportName: 'Sumbawanga Airport',
    city: 'Sumbawanga',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'SUT',
    state: 'Rukwa'
  },
  {
    airportName: 'Shinyanga Airport',
    city: 'Shinyanga',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'SHY',
    state: 'Shinyanga'
  },
  {
    airportName: 'Tabora Airport',
    city: 'Tabora',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'TBO',
    state: 'Tabora'
  },
  {
    airportName: 'Tanga Airport',
    city: 'Tanga',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'TGT',
    state: 'Tanga'
  },
  {
    airportName: 'Zanzibar Airport',
    city: 'Kiembi Samaki',
    countryCode: 'TZ',
    countryName: 'Tanzanie',
    iata: 'ZNZ',
    state: 'Zanzibar-Urban/West'
  },
  {
    airportName: 'Arua Airport',
    city: 'Arua',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'RUA',
    state: 'Northern-Region'
  },
  {
    airportName: 'Entebbe International Airport',
    city: 'Kampala',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'EBB',
    state: 'Central-Region'
  },
  {
    airportName: 'Gulu Airport',
    city: 'Gulu',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'ULU',
    state: 'Northern-Region'
  },
  {
    airportName: 'Jinja Airport',
    city: 'Jinja',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'JIN',
    state: 'Eastern-Region'
  },
  {
    airportName: 'Kabalega Falls Airport',
    city: 'Kabalega Falls',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'KBG',
    state: 'Northern-Region'
  },
  {
    airportName: 'Kasese Airport',
    city: 'Kasese',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'KSE',
    state: 'Western-Region'
  },
  {
    airportName: 'Mbarara Airport',
    city: 'Mbarara',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'MBQ',
    state: 'Western-Region'
  },
  {
    airportName: 'Masindi Airport',
    city: 'Masindi',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'KCU',
    state: 'Western-Region'
  },
  {
    airportName: 'Pakuba Airport',
    city: 'Western-Region',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'PAF',
    state: 'Western-Region'
  },
  {
    airportName: 'Soroti Airport',
    city: 'Soroti',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'SRT',
    state: 'Eastern-Region'
  },
  {
    airportName: 'Tororo Airport',
    city: 'Tororo',
    countryCode: 'UG',
    countryName: 'Ouganda',
    iata: 'TRY',
    state: 'Eastern-Region'
  },
  {
    airportName: 'Albuquerque International Sunport Airport',
    city: 'Albuquerque',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'ABQ',
    state: 'New-Mexico'
  },
  {
    airportName: 'Hartsfield Jackson Atlanta International Airport',
    city: 'Atlanta',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'ATL',
    state: 'Georgia'
  },
  {
    airportName: 'Austin Bergstrom International Airport',
    city: 'Austin',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'AUS',
    state: 'Texas'
  },
  {
    airportName: 'Bradley International Airport',
    city: 'Hartford',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BDL',
    state: 'Connecticut'
  },
  {
    airportName: 'Nashville International Airport',
    city: 'Nashville',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BNA',
    state: 'Tennessee'
  },
  {
    airportName: 'Boise Air Terminal/Gowen field',
    city: 'Boise',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BOI',
    state: 'Idaho'
  },
  {
    airportName: 'General Edward Lawrence Logan International Airport',
    city: 'Boston',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BOS',
    state: 'Massachusetts'
  },
  {
    airportName: 'Buffalo Niagara International Airport',
    city: 'Buffalo',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BUF',
    state: 'New-York'
  },
  {
    airportName: 'Bob Hope Airport',
    city: 'Burbank',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BUR',
    state: 'California'
  },
  {
    airportName: 'Baltimore/Washington International Thurgood Marshal Airport',
    city: 'Baltimore',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'BWI',
    state: 'Maryland'
  },
  {
    airportName: 'Charleston Air Force Base-International Airport',
    city: 'Charleston',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'CHS',
    state: 'South-Carolina'
  },
  {
    airportName: 'Cleveland Hopkins International Airport',
    city: 'Cleveland',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'CLE',
    state: 'Ohio'
  },
  {
    airportName: 'Charlotte Douglas International Airport',
    city: 'Charlotte',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'CLT',
    state: 'North-Carolina'
  },
  {
    airportName: 'Port Columbus International Airport',
    city: 'Columbus',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'CMH',
    state: 'Ohio'
  },
  {
    airportName: 'Cincinnati Northern Kentucky International Airport',
    city: 'Hebron',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'CVG',
    state: 'Kentucky'
  },
  {
    airportName: 'Dallas Love Field',
    city: 'Dallas',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'DAL',
    state: 'Texas'
  },
  {
    airportName: 'Ronald Reagan Washington National Airport',
    city: 'Washington',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'DCA',
    state: 'Virginia'
  },
  {
    airportName: 'Denver International Airport',
    city: 'Denver',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'DEN',
    state: 'Colorado'
  },
  {
    airportName: 'Dallas Fort Worth International Airport',
    city: 'Dallas-Fort Worth',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'DFW',
    state: 'Texas'
  },
  {
    airportName: 'Detroit Metropolitan Wayne County Airport',
    city: 'Detroit',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'DTW',
    state: 'Michigan'
  },
  {
    airportName: 'Newark Liberty International Airport',
    city: 'Newark',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'EWR',
    state: 'New-Jersey'
  },
  {
    airportName: 'Fort Lauderdale Hollywood International Airport',
    city: 'Fort Lauderdale',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'FLL',
    state: 'Florida'
  },
  {
    airportName: 'Gerald R. Ford International Airport',
    city: 'Grand Rapids',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'GRR',
    state: 'Michigan'
  },
  {
    airportName: 'William P Hobby Airport',
    city: 'Houston',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'HOU',
    state: 'Texas'
  },
  {
    airportName: 'Washington Dulles International Airport',
    city: 'Washington',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'IAD',
    state: 'Virginia'
  },
  {
    airportName: 'George Bush Intercontinental Houston Airport',
    city: 'Houston',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'IAH',
    state: 'Texas'
  },
  {
    airportName: 'Indianapolis International Airport',
    city: 'Indianapolis',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'IND',
    state: 'Indiana'
  },
  {
    airportName: 'Jacksonville International Airport',
    city: 'Jacksonville',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'JAX',
    state: 'Florida'
  },
  {
    airportName: 'John F Kennedy International Airport',
    city: 'New York',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'JFK',
    state: 'New-York'
  },
  {
    airportName: 'McCarran International Airport',
    city: 'Las Vegas',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'LAS',
    state: 'Nevada'
  },
  {
    airportName: 'Los Angeles International Airport',
    city: 'Los Angeles',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'LAX',
    state: 'California'
  },
  {
    airportName: 'La Guardia Airport',
    city: 'New York',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'LGA',
    state: 'New-York'
  },
  {
    airportName: 'Kansas City International Airport',
    city: 'Kansas City',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MCI',
    state: 'Missouri'
  },
  {
    airportName: 'Orlando International Airport',
    city: 'Orlando',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MCO',
    state: 'Florida'
  },
  {
    airportName: 'Chicago Midway International Airport',
    city: 'Chicago',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MDW',
    state: 'Illinois'
  },
  {
    airportName: 'Memphis International Airport',
    city: 'Memphis',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MEM',
    state: 'Tennessee'
  },
  {
    airportName: 'Miami International Airport',
    city: 'Miami',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MIA',
    state: 'Florida'
  },
  {
    airportName: 'General Mitchell International Airport',
    city: 'Milwaukee',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MKE',
    state: 'Wisconsin'
  },
  {
    airportName: 'Minneapolis-St Paul International/Wold-Chamberlain Airport',
    city: 'Minneapolis',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MSP',
    state: 'Minnesota'
  },
  {
    airportName: 'Louis Armstrong New Orleans International Airport',
    city: 'New Orleans',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'MSY',
    state: 'Louisiana'
  },
  {
    airportName: 'Metropolitan Oakland International Airport',
    city: 'Oakland',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'OAK',
    state: 'California'
  },
  {
    airportName: 'Will Rogers World Airport',
    city: 'Oklahoma City',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'OKC',
    state: 'Oklahoma'
  },
  {
    airportName: 'Eppley Airfield',
    city: 'Omaha',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'OMA',
    state: 'Nebraska'
  },
  {
    airportName: 'Ontario International Airport',
    city: 'Ontario',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'ONT',
    state: 'California'
  },
  {
    airportName: 'Chicago OHare International Airport',
    city: 'Chicago',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'ORD',
    state: 'Illinois'
  },
  {
    airportName: 'Norfolk International Airport',
    city: 'Norfolk',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'ORF',
    state: 'Virginia'
  },
  {
    airportName: 'Palm Beach International Airport',
    city: 'West Palm Beach',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'PBI',
    state: 'Florida'
  },
  {
    airportName: 'Portland International Airport',
    city: 'Portland',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'PDX',
    state: 'Oregon'
  },
  {
    airportName: 'Philadelphia International Airport',
    city: 'Philadelphia',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'PHL',
    state: 'Pennsylvania'
  },
  {
    airportName: 'Phoenix Sky Harbor International Airport',
    city: 'Phoenix',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'PHX',
    state: 'Arizona'
  },
  {
    airportName: 'Pittsburgh International Airport',
    city: 'Pittsburgh',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'PIT',
    state: 'Pennsylvania'
  },
  {
    airportName: 'Raleigh Durham International Airport',
    city: 'Raleigh/Durham',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'RDU',
    state: 'North-Carolina'
  },
  {
    airportName: 'Richmond International Airport',
    city: 'Richmond',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'RIC',
    state: 'Virginia'
  },
  {
    airportName: 'Reno Tahoe International Airport',
    city: 'Reno',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'RNO',
    state: 'Nevada'
  },
  {
    airportName: 'Southwest Florida International Airport',
    city: 'Fort Myers',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'RSW',
    state: 'Florida'
  },
  {
    airportName: 'San Diego International Airport',
    city: 'San Diego',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SAN',
    state: 'California'
  },
  {
    airportName: 'San Antonio International Airport',
    city: 'San Antonio',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SAT',
    state: 'Texas'
  },
  {
    airportName: 'Louisville International Standiford Field',
    city: 'Louisville',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SDF',
    state: 'Kentucky'
  },
  {
    airportName: 'Seattle Tacoma International Airport',
    city: 'Seattle',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SEA',
    state: 'Washington'
  },
  {
    airportName: 'San Francisco International Airport',
    city: 'San Francisco',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SFO',
    state: 'California'
  },
  {
    airportName: 'Norman Y. Mineta San Jose International Airport',
    city: 'San Jose',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SJC',
    state: 'California'
  },
  {
    airportName: 'Salt Lake City International Airport',
    city: 'Salt Lake City',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SLC',
    state: 'Utah'
  },
  {
    airportName: 'Sacramento International Airport',
    city: 'Sacramento',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SMF',
    state: 'California'
  },
  {
    airportName: 'John Wayne Airport-Orange County Airport',
    city: 'Santa Ana',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'SNA',
    state: 'California'
  },
  {
    airportName: 'Lambert St Louis International Airport',
    city: 'St Louis',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'STL',
    state: 'Missouri'
  },
  {
    airportName: 'Tampa International Airport',
    city: 'Tampa',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'TPA',
    state: 'Florida'
  },
  {
    airportName: 'Tucson International Airport',
    city: 'Tucson',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'TUS',
    state: 'Arizona'
  },
  {
    airportName: 'Tirana International Airport Mother Teresa',
    city: 'Tirana',
    countryCode: 'AL',
    countryName: 'Albanie',
    iata: 'TIA',
    state: 'Tirana'
  },
  {
    airportName: 'Burgas Airport',
    city: 'Burgas',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'BOJ',
    state: 'Burgas'
  },
  {
    airportName: 'Gorna Oryahovitsa Airport',
    city: 'Gorna Oryahovitsa',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'GOZ',
    state: 'Veliko-Turnovo'
  },
  {
    airportName: 'Bezmer Air Base',
    city: 'Yambol',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'JAM',
    state: 'Burgas'
  },
  {
    airportName: 'Plovdiv International Airport',
    city: 'Plovdiv',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'PDV',
    state: 'Plovdiv'
  },
  {
    airportName: 'Dolna Mitropoliya Air Base',
    city: 'Dolna Mitropoliya',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'PVN',
    state: 'Lovech'
  },
  {
    airportName: 'Sofia Airport',
    city: 'Sofia',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'SOF',
    state: 'Sofia-Capital'
  },
  {
    airportName: 'Silistra Polkovnik Lambrinovo Airfield',
    city: 'Silistra',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'SLS',
    state: 'Razgrad'
  },
  {
    airportName: 'Stara Zagora Airport',
    city: 'Stara Zagora',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'SZR',
    state: 'Khaskovo'
  },
  {
    airportName: 'Vidin Smurdan Airfield',
    city: 'Vidin',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'VID',
    state: 'Montana'
  },
  {
    airportName: 'Varna Airport',
    city: 'Varna',
    countryCode: 'BG',
    countryName: 'Bulgarie',
    iata: 'VAR',
    state: 'Varna'
  },
  {
    airportName: 'Ercan International Airport',
    city: 'Nicosia',
    countryCode: 'CY',
    countryName: 'Chypre',
    iata: 'ECN',
    state: 'Nicosia'
  },
  {
    airportName: 'Larnaca International Airport',
    city: 'Larnarca',
    countryCode: 'CY',
    countryName: 'Chypre',
    iata: 'LCA',
    state: 'Larnaka'
  },
  {
    airportName: 'Paphos International Airport',
    city: 'Paphos',
    countryCode: 'CY',
    countryName: 'Chypre',
    iata: 'PFO',
    state: 'Pafos'
  },
  {
    airportName: 'Dubrovnik Airport',
    city: 'Dubrovnik',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'DBV',
    state: 'Dubrovacko-Neretvanska'
  },
  {
    airportName: 'Losinj Island Airport',
    city: 'Losinj',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'LSZ',
    state: 'Primorsko-Goranska'
  },
  {
    airportName: 'Osijek Airport',
    city: 'Osijek',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'OSI',
    state: 'Osjecko-Baranjska'
  },
  {
    airportName: 'Pula Airport',
    city: 'Pula',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'PUY',
    state: 'Istria'
  },
  {
    airportName: 'Rijeka Airport',
    city: 'Rijeka',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'RJK',
    state: 'Primorsko-Goranska'
  },
  {
    airportName: 'Brac Airport',
    city: 'Brac Island',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'BWK',
    state: 'Split-Dalmatia'
  },
  {
    airportName: 'Split Airport',
    city: 'Split',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'SPU',
    state: 'Split-Dalmatia'
  },
  {
    airportName: 'Zagreb Airport',
    city: 'Zagreb',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'ZAG',
    state: 'Zagrebacka'
  },
  {
    airportName: 'Zemunik Airport',
    city: 'Zadar',
    countryCode: 'HR',
    countryName: 'Croatie',
    iata: 'ZAD',
    state: 'Zadarska'
  },
  {
    airportName: 'Alicante International Airport',
    city: 'Alicante',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'ALC',
    state: 'Valencia'
  },
  {
    airportName: 'Almeria International Airport',
    city: 'Almeria',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'LEI',
    state: 'Andalusia'
  },
  {
    airportName: 'Cordoba Airport',
    city: 'Cordoba',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'ODB',
    state: 'Andalusia'
  },
  {
    airportName: 'Bilbao Airport',
    city: 'Bilbao',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'BIO',
    state: 'Basque-Country'
  },
  {
    airportName: 'Barcelona International Airport',
    city: 'Barcelona',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'BCN',
    state: 'Catalonia'
  },
  {
    airportName: 'Girona Airport',
    city: 'Girona',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'GRO',
    state: 'Catalonia'
  },
  {
    airportName: 'Ibiza Airport',
    city: 'Ibiza',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'IBZ',
    state: 'Balearic-Islands'
  },
  {
    airportName: 'Madrid Barajas International Airport',
    city: 'Madrid',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'MAD',
    state: 'Madrid'
  },
  {
    airportName: 'Malaga Airport',
    city: 'Malaga',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'AGP',
    state: 'Andalusia'
  },
  {
    airportName: 'Palma De Mallorca Airport',
    city: 'Palma De Mallorca',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'PMI',
    state: 'Balearic-Islands'
  },
  {
    airportName: 'Santiago de Compostela Airport',
    city: 'Santiago de Compostela',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'SCQ',
    state: 'Galicia'
  },
  {
    airportName: 'Valencia Airport',
    city: 'Valencia',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'VLC',
    state: 'Valencia'
  },
  {
    airportName: 'Sevilla Airport',
    city: 'Sevilla',
    countryCode: 'ES',
    countryName: 'Espagne',
    iata: 'SVQ',
    state: 'Andalusia'
  },
  {
    airportName: 'Bordeaux-Merignac (BA 106) Airport',
    city: 'Bordeaux/Merignac',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'BOD',
    state: 'Nouvelle-Aquitaine'
  },
  {
    airportName: 'Toulouse-Blagnac Airport',
    city: 'Toulouse/Blagnac',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'TLS',
    state: 'Occitanie'
  },
  {
    airportName: 'Pau Pyrenees Airport',
    city: 'Pau/Pyrenees (Uzein)',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'PUF',
    state: 'Nouvelle-Aquitaine'
  },
  {
    airportName: 'Biarritz-Anglet-Bayonne Airport',
    city: 'Biarritz/Anglet/Bayonne',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'BIQ',
    state: 'Nouvelle-Aquitaine'
  },
  {
    airportName: 'Bastia-Poretta Airport',
    city: 'Bastia/Poretta',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'BIA',
    state: 'Corsica'
  },
  {
    airportName: 'Figari Sud-Corse Airport',
    city: 'Figari Sud-Corse',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'FSC',
    state: 'Corsica'
  },
  {
    airportName: 'Ajaccio-Napoleon Bonaparte Airport',
    city: 'Ajaccio/Napoleon Bonaparte',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'AJA',
    state: 'Corsica'
  },
  {
    airportName: 'Lyon Saint-Exupery Airport',
    city: 'Lyon',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'LYS',
    state: 'Auvergne-Rhone-Alpes'
  },
  {
    airportName: 'Marseille Provence Airport',
    city: 'Marseille',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'MRS',
    state: 'Provence-Alpes-Cote-dAzur'
  },
  {
    airportName: 'Nice-Cote dAzur Airport',
    city: 'Nice',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'NCE',
    state: 'Provence-Alpes-Cote-dAzur'
  },
  {
    airportName: 'Montpellier-Mediterranee Airport',
    city: 'Montpellier/Mediterranee',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'MPL',
    state: 'Occitanie'
  },
  {
    airportName: 'Paris Beauvais Tille Airport',
    city: 'Beauvais/Tille',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'BVA',
    state: 'Hauts-de-France'
  },
  {
    airportName: 'Paris-Orly Airport',
    city: 'Paris',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'ORY',
    state: 'Ile-de-France'
  },
  {
    airportName: 'Lille-Lesquin Airport',
    city: 'Lille/Lesquin',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'LIL',
    state: 'Hauts-de-France'
  },
  {
    airportName: 'Brest Bretagne Airport',
    city: 'Brest/Guipavas',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'BES',
    state: 'Brittany'
  },
  {
    airportName: 'Paris-Le Bourget Airport',
    city: 'Paris',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'LBG',
    state: 'Ile-de-France'
  },
  {
    airportName: 'Charles de Gaulle International Airport',
    city: 'Paris',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'CDG',
    state: 'Ile-de-France'
  },
  {
    airportName: 'Rennes-Saint-Jacques Airport',
    city: 'Rennes/Saint-Jacques',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'RNS',
    state: 'Brittany'
  },
  {
    airportName: 'Nantes Atlantique Airport',
    city: 'Nantes',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'NTE',
    state: 'Pays-de-la-Loire'
  },
  {
    airportName: 'Strasbourg Airport',
    city: 'Strasbourg',
    countryCode: 'FR',
    countryName: 'France',
    iata: 'SXB',
    state: 'Grand-Est'
  },
  {
    airportName: 'Eleftherios Venizelos International Airport',
    city: 'Athens',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'ATH',
    state: 'Attica'
  },
  {
    airportName: 'Heraklion International Nikos Kazantzakis Airport',
    city: 'Heraklion',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'HER',
    state: 'Crete'
  },
  {
    airportName: 'Ioannis Kapodistrias International Airport',
    city: 'Kerkyra Island',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'CFU',
    state: 'Ionian-Islands'
  },
  {
    airportName: 'Alexander the Great International Airport',
    city: 'Kavala',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'KVA',
    state: 'East-Macedonia-and-Thrace'
  },
  {
    airportName: 'Mytilene International Airport',
    city: 'Mytilene',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'MJT',
    state: 'North-Aegean'
  },
  {
    airportName: 'Chania International Airport',
    city: 'Souda',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'CHQ',
    state: 'Crete'
  },
  {
    airportName: 'Skiathos Island National Airport',
    city: 'Skiathos',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'JSI',
    state: 'Thessaly'
  },
  {
    airportName: 'Thessaloniki Macedonia International Airport',
    city: 'Thessaloniki',
    countryCode: 'GR',
    countryName: 'Grece',
    iata: 'SKG',
    state: 'Central-Macedonia'
  },
  {
    airportName: 'Budapest Listz Ferenc international Airport',
    city: 'Budapest',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'BUD',
    state: 'Budapest'
  },
  {
    airportName: 'Debrecen International Airport',
    city: 'Debrecen',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'DEB',
    state: 'Hajdu-Bihar'
  },
  {
    airportName: 'Miskolc Airport',
    city: 'Miskolc',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'MCQ',
    state: 'Borsod-Abauj-Zemplen'
  },
  {
    airportName: 'Pecs-Pogany Airport',
    city: 'Pecs-Pogany',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'PEV',
    state: 'Baranya'
  },
  {
    airportName: 'Gyor-Per International Airport',
    city: 'Gyor',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'QGY',
    state: 'Gyor-Moson-Sopron'
  },
  {
    airportName: 'Sarmellek International Airport',
    city: 'Sarmellek',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'SOB',
    state: 'Zala'
  },
  {
    airportName: 'Taszar Air Base',
    city: 'Taszar',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'TZR',
    state: 'Somogy'
  },
  {
    airportName: 'Szeged Glider Airport',
    city: 'Szeged',
    countryCode: 'HU',
    countryName: 'Hongrie',
    iata: 'QZD',
    state: 'Csongrad'
  },
  {
    airportName: 'Crotone Airport',
    city: 'Crotone',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'CRV',
    state: 'Calabria'
  },
  {
    airportName: 'Bari / Palese International Airport',
    city: 'Bari',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'BRI',
    state: 'Apulia'
  },
  {
    airportName: 'Pescara International Airport',
    city: 'Pescara',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'PSR',
    state: 'Abruzzo'
  },
  {
    airportName: 'Catania / Fontanarossa Airport',
    city: 'Catania',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'CTA',
    state: 'Sicily'
  },
  {
    airportName: 'Palermo / Punta Raisi Airport',
    city: 'Palermo',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'PMO',
    state: 'Sicily'
  },
  {
    airportName: 'Alghero / Fertilia Airport',
    city: 'Alghero',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'AHO',
    state: 'Sardinia'
  },
  {
    airportName: 'Cagliari / Elmas Airport',
    city: 'Cagliari',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'CAG',
    state: 'Sardinia'
  },
  {
    airportName: 'Malpensa International Airport',
    city: 'Milan',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'MXP',
    state: 'Lombardy'
  },
  {
    airportName: 'Bergamo / Orio Al Serio Airport',
    city: 'Bergamo',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'BGY',
    state: 'Lombardy'
  },
  {
    airportName: 'Torino / Caselle International Airport',
    city: 'Torino',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'TRN',
    state: 'Piedmont'
  },
  {
    airportName: 'Villanova DAlbenga International Airport',
    city: 'Albenga',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'ALL',
    state: 'Liguria'
  },
  {
    airportName: 'Linate Airport',
    city: 'Milan',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'LIN',
    state: 'Lombardy'
  },
  {
    airportName: 'Parma Airport',
    city: 'Parma',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'PMF',
    state: 'Emilia-Romagna'
  },
  {
    airportName: 'Bologna / Borgo Panigale Airport',
    city: 'Bologna',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'BLQ',
    state: 'Emilia-Romagna'
  },
  {
    airportName: 'Brescia / Montichiari Airport',
    city: 'Brescia',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'VBS',
    state: 'Lombardy'
  },
  {
    airportName: 'Trieste / Ronchi Dei Legionari',
    city: 'Trieste',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'TRS',
    state: 'Friuli-Venezia-Giulia'
  },
  {
    airportName: 'Rimini / Miramare - Federico Fellini International Airport',
    city: 'Rimini',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'RMI',
    state: 'Emilia-Romagna'
  },
  {
    airportName: 'Vicenza Airport',
    city: 'Vicenza',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'VIC',
    state: 'Veneto'
  },
  {
    airportName: 'Verona / Villafranca Airport',
    city: 'Verona',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'VRN',
    state: 'Veneto'
  },
  {
    airportName: 'Venezia / Tessera -  Marco Polo Airport',
    city: 'Venezia',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'VCE',
    state: 'Veneto'
  },
  {
    airportName: 'Ciampino Airport',
    city: 'Roma',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'CIA',
    state: 'Latium'
  },
  {
    airportName: 'Leonardo Da Vinci (Fiumicino) International Airport',
    city: 'Rome',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'FCO',
    state: 'Latium'
  },
  {
    airportName: 'Napoli / Capodichino International Airport',
    city: 'Napoli',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'NAP',
    state: 'Campania'
  },
  {
    airportName: 'Pisa / San Giusto - Galileo Galilei International Airport',
    city: 'Pisa',
    countryCode: 'IT',
    countryName: 'Italie',
    iata: 'PSA',
    state: 'Tuscany'
  },
  {
    airportName: 'Ljubljana Joze Pucnik Airport',
    city: 'Ljubljana',
    countryCode: 'SI',
    countryName: 'Slovenie',
    iata: 'LJU',
    state: 'Cerklje-na-Gorenjskem'
  },
  {
    airportName: 'Maribor Airport',
    city: 'Hoce-Slivnica',
    countryCode: 'SI',
    countryName: 'Slovenie',
    iata: 'MBX',
    state: 'Hoce-Slivnica'
  },
  {
    airportName: 'Portoroz Airport',
    city: 'Portoroz',
    countryCode: 'SI',
    countryName: 'Slovenie',
    iata: 'POW',
    state: 'Piran-Pirano'
  },
  {
    airportName: 'Holesov Airport',
    city: 'Holesov',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'GTW',
    state: 'Zlin'
  },
  {
    airportName: 'Kunovice Airport',
    city: 'Uherske Hradiste',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'UHE',
    state: 'Zlin'
  },
  {
    airportName: 'Karlovy Vary International Airport',
    city: 'Karlovy Vary',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'KLV',
    state: 'Karlovarsky'
  },
  {
    airportName: 'Marianske Lazne Airport',
    city: 'Marianske Lazne',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'MKA',
    state: 'Karlovarsky'
  },
  {
    airportName: 'Ostrava Leos Janacek Airport',
    city: 'Ostrava',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'OSR',
    state: 'Moravskoslezsky'
  },
  {
    airportName: 'Pardubice Airport',
    city: 'Pardubice',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'PED',
    state: 'Pardubicky'
  },
  {
    airportName: 'Prerov Air Base',
    city: 'Prerov',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'PRV',
    state: 'Olomoucky'
  },
  {
    airportName: 'Ruzyne International Airport',
    city: 'Prague',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'PRG',
    state: 'Praha'
  },
  {
    airportName: 'Brno-Turany Airport',
    city: 'Brno',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'BRQ',
    state: 'South-Moravian'
  },
  {
    airportName: 'Zabreh Ostrava Airport',
    city: 'Zabreh',
    countryCode: 'CZ',
    countryName: 'Republique Tcheque',
    iata: 'ZBE',
    state: 'Moravskoslezsky'
  },
  {
    airportName: 'Ben Gurion International Airport',
    city: 'Tel Aviv',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'TLV',
    state: 'Central-District'
  },
  {
    airportName: 'Beer Sheva (Teyman) Airport',
    city: 'Beersheva',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'BEV',
    state: 'Southern-District'
  },
  {
    airportName: 'Eilat Airport',
    city: 'Eilat',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'ETH',
    state: 'Southern-District'
  },
  {
    airportName: 'Ein Yahav Airfield',
    city: 'Sapir',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'EIY',
    state: 'Southern-District'
  },
  {
    airportName: 'Haifa International Airport',
    city: 'Haifa',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'HFA',
    state: 'Haifa'
  },
  {
    airportName: 'Ben Yaakov Airport',
    city: 'Rosh Pina',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'RPN',
    state: 'Northern-District'
  },
  {
    airportName: 'Kiryat Shmona Airport',
    city: 'Kiryat Shmona',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'KSW',
    state: 'Northern-District'
  },
  {
    airportName: 'Bar Yehuda Airfield',
    city: 'Masada',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'MTZ',
    state: 'Southern-District'
  },
  {
    airportName: 'Nevatim Air Base',
    city: 'Beersheba',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'VTM',
    state: 'Southern-District'
  },
  {
    airportName: 'Ovda International Airport',
    city: 'Eilat',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'VDA',
    state: 'Southern-District'
  },
  {
    airportName: 'Ramon Air Base',
    city: 'Beersheba',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'MIP',
    state: 'Southern-District'
  },
  {
    airportName: 'Sde Dov Airport',
    city: 'Tel Aviv',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'SDV',
    state: 'Tel-Aviv'
  },
  {
    airportName: 'Yotvata Airfield',
    city: 'Yotvata',
    countryCode: 'IL',
    countryName: 'Israel',
    iata: 'YOT',
    state: 'Southern-District'
  },
  {
    airportName: 'Luqa Airport',
    city: 'Luqa',
    countryCode: 'MT',
    countryName: 'Malte',
    iata: 'MLA',
    state: 'Luqa'
  },
  {
    airportName: 'Hohenems-Dornbirn Airport',
    city: 'Hohenems / Dornbirn',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'HOH',
    state: 'Vorarlberg'
  },
  {
    airportName: 'Graz Airport',
    city: 'Graz',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'GRZ',
    state: 'Styria'
  },
  {
    airportName: 'Innsbruck Airport',
    city: 'Innsbruck',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'INN',
    state: 'Tyrol'
  },
  {
    airportName: 'Klagenfurt Airport',
    city: 'Klagenfurt am Worthersee',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'KLU',
    state: 'Carinthia'
  },
  {
    airportName: 'Linz Airport',
    city: 'Linz',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'LNZ',
    state: 'Upper-Austria'
  },
  {
    airportName: 'Salzburg Airport',
    city: 'Salzburg',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'SZG',
    state: 'Salzburg'
  },
  {
    airportName: 'Vienna International Airport',
    city: 'Vienna',
    countryCode: 'AT',
    countryName: 'Autriche',
    iata: 'VIE',
    state: 'Lower-Austria'
  },
  {
    airportName: 'Santa Maria Airport',
    city: 'Vila do Porto',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'SMA',
    state: 'Azores'
  },
  {
    airportName: 'Braganca Airport',
    city: 'Braganca',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'BGC',
    state: 'Braganca'
  },
  {
    airportName: 'Beja International Airport',
    city: 'Beja',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'BYJ',
    state: 'Beja'
  },
  {
    airportName: 'Braga Municipal Aerodrome',
    city: 'Braga',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'BGZ',
    state: 'Braga'
  },
  {
    airportName: 'Chaves Airport',
    city: 'Chaves',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'CHV',
    state: 'Vila-Real'
  },
  {
    airportName: 'Coimbra Airport',
    city: 'Coimbra',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'CBP',
    state: 'Coimbra'
  },
  {
    airportName: 'Corvo Airport',
    city: 'Corvo',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'CVU',
    state: 'Azores'
  },
  {
    airportName: 'Covilha Airport',
    city: 'Castelo-Branco',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'COV',
    state: 'Castelo-Branco'
  },
  {
    airportName: 'Flores Airport',
    city: 'Santa Cruz das Flores',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'FLW',
    state: 'Azores'
  },
  {
    airportName: 'Faro Airport',
    city: 'Faro',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'FAO',
    state: 'Faro'
  },
  {
    airportName: 'Graciosa Airport',
    city: 'Santa Cruz da Graciosa',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'GRW',
    state: 'Azores'
  },
  {
    airportName: 'Horta Airport',
    city: 'Horta',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'HOR',
    state: 'Azores'
  },
  {
    airportName: 'Lajes Field',
    city: 'Lajes',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'TER',
    state: 'Azores'
  },
  {
    airportName: 'Madeira Airport',
    city: 'Funchal',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'FNC',
    state: 'Madeira'
  },
  {
    airportName: 'Joao Paulo II Airport',
    city: 'Ponta Delgada',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'PDL',
    state: 'Azores'
  },
  {
    airportName: 'Pico Airport',
    city: 'Pico Island',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'PIX',
    state: 'Azores'
  },
  {
    airportName: 'Portimao Airport',
    city: 'Faro',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'PRM',
    state: 'Faro'
  },
  {
    airportName: 'Francisco de Sa Carneiro Airport',
    city: 'Porto',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'OPO',
    state: 'Porto'
  },
  {
    airportName: 'Porto Santo Airport',
    city: 'Vila Baleira',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'PXO',
    state: 'Madeira'
  },
  {
    airportName: 'Lisbon Portela Airport',
    city: 'Lisbon',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'LIS',
    state: 'Lisbon'
  },
  {
    airportName: 'Sines Airport',
    city: 'Setubal',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'SIE',
    state: 'Setubal'
  },
  {
    airportName: 'Sao Jorge Airport',
    city: 'Velas',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'SJZ',
    state: 'Azores'
  },
  {
    airportName: 'Vila Real Airport',
    city: 'Vila-Real',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'VRL',
    state: 'Vila-Real'
  },
  {
    airportName: 'Viseu Airport',
    city: 'Viseu',
    countryCode: 'PT',
    countryName: 'Portugal',
    iata: 'VSE',
    state: 'Viseu'
  },
  {
    airportName: 'Banja Luka International Airport',
    city: 'Banja Luka',
    countryCode: 'BA',
    countryName: 'Bosnie-Herzégovine',
    iata: 'BNX',
    state: 'Srspka'
  },
  {
    airportName: 'Mostar International Airport',
    city: 'Mostar',
    countryCode: 'BA',
    countryName: 'Bosnie-Herzégovine',
    iata: 'OMO',
    state: 'Federation-of-B&H'
  },
  {
    airportName: 'Sarajevo International Airport',
    city: 'Sarajevo',
    countryCode: 'BA',
    countryName: 'Bosnie-Herzégovine',
    iata: 'SJJ',
    state: 'Federation-of-B&H'
  },
  {
    airportName: 'Tuzla International Airport',
    city: 'Tuzla',
    countryCode: 'BA',
    countryName: 'Bosnie-Herzégovine',
    iata: 'TZL',
    state: 'Federation-of-B&H'
  },
  {
    airportName: 'Arad International Airport',
    city: 'Arad',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'ARW',
    state: 'Arad'
  },
  {
    airportName: 'Bacau Airport',
    city: 'Bacau',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'BCM',
    state: 'Bacau'
  },
  {
    airportName: 'Tautii Magheraus Airport',
    city: 'Baia Mare',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'BAY',
    state: 'Maramureş'
  },
  {
    airportName: 'Baneasa International Airport',
    city: 'Bucharest',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'BBU',
    state: 'Bucureşti'
  },
  {
    airportName: 'Mihail Kogalniceanu International Airport',
    city: 'Constanta',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'CND',
    state: 'Constanța'
  },
  {
    airportName: 'Cluj-Napoca International Airport',
    city: 'Cluj-Napoca',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'CLJ',
    state: 'Cluj'
  },
  {
    airportName: 'Caransebes Airport',
    city: 'Caransebes',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'CSB',
    state: 'Caraş-Severin'
  },
  {
    airportName: 'Craiova Airport',
    city: 'Craiova',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'CRA',
    state: 'Dolj'
  },
  {
    airportName: 'Iasi Airport',
    city: 'Iasi',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'IAS',
    state: 'Iaşi'
  },
  {
    airportName: 'Oradea International Airport',
    city: 'Oradea',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'OMR',
    state: 'Bihor'
  },
  {
    airportName: 'Henri Coanda International Airport',
    city: 'Bucharest',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'OTP',
    state: 'Ilfov'
  },
  {
    airportName: 'Sibiu International Airport',
    city: 'Sibiu',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'SBZ',
    state: 'Sibiu'
  },
  {
    airportName: 'Satu Mare Airport',
    city: 'Satu Mare',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'SUJ',
    state: 'Satu-Mare'
  },
  {
    airportName: 'Suceava Stefan cel Mare Airport',
    city: 'Suceava',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'SCV',
    state: 'Suceava'
  },
  {
    airportName: 'Tulcea Airport',
    city: 'Tulcea',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'TCE',
    state: 'Tulcea'
  },
  {
    airportName: 'Transilvania Targu Mures International Airport',
    city: 'Targu Mures',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'TGM',
    state: 'Mureş'
  },
  {
    airportName: 'Timisoara Traian Vuia Airport',
    city: 'Timisoara',
    countryCode: 'RO',
    countryName: 'Roumanie',
    iata: 'TSR',
    state: 'Timiş'
  },
  {
    airportName: 'Geneva Cointrin International Airport',
    city: 'Geneva',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'GVA',
    state: 'Geneva'
  },
  {
    airportName: 'Lausanne-la Blecherette Airport',
    city: 'Lausanne',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'QLS',
    state: 'Vaud'
  },
  {
    airportName: 'Neuchatel Airport',
    city: 'Neuchatel',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'QNC',
    state: 'Neuchatel'
  },
  {
    airportName: 'Sion Airport',
    city: 'Sion',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'SIR',
    state: 'Valais'
  },
  {
    airportName: 'Interlaken Air Base',
    city: 'Bern',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'ZIN',
    state: 'Bern'
  },
  {
    airportName: 'Lugano Airport',
    city: 'Lugano',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'LUG',
    state: 'Ticino'
  },
  {
    airportName: 'Bern Belp Airport',
    city: 'Bern',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'BRN',
    state: 'Bern'
  },
  {
    airportName: 'Buochs Airport',
    city: 'Buochs',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'BXO',
    state: 'Nidwalden'
  },
  {
    airportName: 'Grenchen Airport',
    city: 'Solothurn',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'ZHI',
    state: 'Solothurn'
  },
  {
    airportName: 'Zurich Airport',
    city: 'Zurich',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'ZRH',
    state: 'Zurich'
  },
  {
    airportName: 'Locarno Airport',
    city: 'Ticino',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'ZJI',
    state: 'Ticino'
  },
  {
    airportName: 'EuroAirport Basel-Mulhouse-Freiburg Airport',
    city: 'Bale/Mulhouse',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'MLH',
    state: 'Grand-Est'
  },
  {
    airportName: 'St Gallen Altenrhein Airport',
    city: 'Altenrhein',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'ACH',
    state: 'Saint-Gallen'
  },
  {
    airportName: 'Samedan Airport',
    city: 'Grisons',
    countryCode: 'CH',
    countryName: 'Suisse',
    iata: 'SMV',
    state: 'Grisons'
  },
  {
    airportName: 'Esenboga International Airport',
    city: 'Ankara',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'ESB',
    state: 'Ankara'
  },
  {
    airportName: 'Adana Airport',
    city: 'Adana',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'ADA',
    state: 'Adana'
  },
  {
    airportName: 'Antalya International Airport',
    city: 'Antalya',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'AYT',
    state: 'Antalya'
  },
  {
    airportName: 'Gaziantep International Airport',
    city: 'Gaziantep',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'GZT',
    state: 'Gaziantep'
  },
  {
    airportName: 'Konya Airport',
    city: 'Konya',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'KYA',
    state: 'Konya'
  },
  {
    airportName: 'Kayseri Erkilet Airport',
    city: 'Kayseri',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'ASR',
    state: 'Kayseri'
  },
  {
    airportName: 'Nevsehir Kapadokya International Airport',
    city: 'Nevsehir',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'NAV',
    state: 'Nevşehir'
  },
  {
    airportName: 'Ataturk International Airport',
    city: 'Istanbul',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'IST',
    state: 'Istanbul'
  },
  {
    airportName: 'Adnan Menderes International Airport',
    city: 'Izmir',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'ADB',
    state: 'Izmir'
  },
  {
    airportName: 'Usak Airport',
    city: 'Usak',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'USQ',
    state: 'Uşak'
  },
  {
    airportName: 'Dalaman International Airport',
    city: 'Dalaman',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'DLM',
    state: 'Mugla'
  },
  {
    airportName: 'Diyarbakir Airport',
    city: 'Diyarbakir',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'DIY',
    state: 'Diyarbakir'
  },
  {
    airportName: 'Erzurum International Airport',
    city: 'Erzurum',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'ERZ',
    state: 'Erzurum'
  },
  {
    airportName: 'Trabzon International Airport',
    city: 'Trabzon',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'TZX',
    state: 'Trabzon'
  },
  {
    airportName: 'Van Ferit Melen Airport',
    city: 'Van',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'VAN',
    state: 'Van'
  },
  {
    airportName: 'Hatay Airport',
    city: 'Hatay',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'HTY',
    state: 'Hatay'
  },
  {
    airportName: 'Suleyman Demirel International Airport',
    city: 'Isparta',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'ISE',
    state: 'Isparta'
  },
  {
    airportName: 'Milas Bodrum International Airport',
    city: 'Bodrum',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'BJV',
    state: 'Mugla'
  },
  {
    airportName: 'Samsun Carsamba Airport',
    city: 'Samsun',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'SZF',
    state: 'Samsun'
  },
  {
    airportName: 'Sabiha Gokcen International Airport',
    city: 'Istanbul',
    countryCode: 'TR',
    countryName: 'Turquie',
    iata: 'SAW',
    state: 'Istanbul'
  },
  {
    airportName: 'Balti International Airport',
    city: 'Strymba',
    countryCode: 'MD',
    countryName: 'Moldavie',
    iata: 'BZY',
    state: 'Balţi'
  },
  {
    airportName: 'Chisinau International Airport',
    city: 'Chisinau',
    countryCode: 'MD',
    countryName: 'Moldavie',
    iata: 'KIV',
    state: 'Chișinau-Municipality'
  },
  {
    airportName: 'Gibraltar Airport',
    city: 'Gibraltar',
    countryCode: 'GI',
    countryName: 'Gibraltar',
    iata: 'GIB',
    state: 'Gibraltar'
  },
  {
    airportName: 'Belgrade Nikola Tesla Airport',
    city: 'Belgrad',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'BEG',
    state: 'Belgrad'
  },
  {
    airportName: 'Berane Airport',
    city: 'Berane',
    countryCode: 'ME',
    countryName: 'Montenegro',
    iata: 'IVG',
    state: 'Berane'
  },
  {
    airportName: 'Batajnica Air Base',
    city: 'Batajnica',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'BJY',
    state: 'Batajnica'
  },
  {
    airportName: 'Nis Airport',
    city: 'Nis',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'INI',
    state: 'Central-Serbia'
  },
  {
    airportName: 'Cenej Airport',
    city: 'Novi Sad',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'QND',
    state: 'Novi Sad'
  },
  {
    airportName: 'Podgorica Airport',
    city: 'Podgorica',
    countryCode: 'ME',
    countryName: 'Montenegro',
    iata: 'TGD',
    state: 'Podgorica'
  },
  {
    airportName: 'Tivat Airport',
    city: 'Tivat',
    countryCode: 'ME',
    countryName: 'Montenegro',
    iata: 'TIV',
    state: 'Tivat'
  },
  {
    airportName: 'Ponikve Airport',
    city: 'Uzice',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'UZC',
    state: 'Uzice'
  },
  {
    airportName: 'Divci Airport',
    city: 'Valjevo',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'QWV',
    state: 'Valjevo'
  },
  {
    airportName: 'Zrenjanin Airport',
    city: 'Zrenjanin',
    countryCode: 'RS',
    countryName: 'Serbie',
    iata: 'ZRE',
    state: 'Vojvodina'
  },
  {
    airportName: 'M. R. Stefanik Airport',
    city: 'Bratislava',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'BTS',
    state: 'Bratislavsky'
  },
  {
    airportName: 'Kosice Airport',
    city: 'Kosice',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'KSC',
    state: 'Kosicky'
  },
  {
    airportName: 'Lucenec Airport',
    city: 'Lucenec',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'LUE',
    state: 'Banskobystricky'
  },
  {
    airportName: 'Piestany Airport',
    city: 'Piestany',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'PZY',
    state: 'Piestany'
  },
  {
    airportName: 'Presov Air Base',
    city: 'Presov',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'POV',
    state: 'Presovsky'
  },
  {
    airportName: 'Sliac Airport',
    city: 'Sliac',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'SLD',
    state: 'Banskobystricky'
  },
  {
    airportName: 'Poprad-Tatry Airport',
    city: 'Poprad',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'TAT',
    state: 'Presovsky'
  },
  {
    airportName: 'Zilina Airport',
    city: 'Zilina',
    countryCode: 'SK',
    countryName: 'Slovaquie',
    iata: 'ILZ',
    state: 'Zilinsky'
  },
  {
    airportName: 'Maria Montez International Airport',
    city: 'Barahona',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'BRX',
    state: 'Barahona'
  },
  {
    airportName: 'Cabo Rojo Airport',
    city: 'Cabo Rojo',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'CBJ',
    state: 'Pedernales'
  },
  {
    airportName: 'Samana El Catey International Airport',
    city: 'Samana',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'AZS',
    state: 'Maria-Trinidad-Sanchez'
  },
  {
    airportName: 'Constanza Dom Re Airport',
    city: 'Costanza',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'COZ',
    state: 'La-Vega'
  },
  {
    airportName: 'La Isabela International Airport',
    city: 'La Isabela',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'JBQ',
    state: 'Santo-Domingo'
  },
  {
    airportName: 'Casa De Campo International Airport',
    city: 'La Romana',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'LRM',
    state: 'La-Romana'
  },
  {
    airportName: 'Punta Cana International Airport',
    city: 'Punta Cana',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'PUJ',
    state: 'La-Altagracia'
  },
  {
    airportName: 'Samana El Portillo Airport',
    city: 'Samana',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'EPS',
    state: 'Samana'
  },
  {
    airportName: 'Gregorio Luperon International Airport',
    city: 'Puerto Plata',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'POP',
    state: 'Puerto-Plata'
  },
  {
    airportName: 'Sabana de Mar Airport',
    city: 'Sabana de Mar',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'SNX',
    state: 'Hato-Mayor'
  },
  {
    airportName: 'Las Americas International Airport',
    city: 'Santo Domingo',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'SDQ',
    state: 'Nacional'
  },
  {
    airportName: 'Cibao International Airport',
    city: 'Santiago',
    countryCode: 'DO',
    countryName: 'Republique Dominicaine',
    iata: 'STI',
    state: 'Dajabon'
  },
  {
    airportName: 'Ahuas Airport',
    city: 'Ahuas',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'AHS',
    state: 'Gracias-a-Dios'
  },
  {
    airportName: 'Brus Laguna Airport',
    city: 'Brus Laguna',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'BHG',
    state: 'Gracias-a-Dios'
  },
  {
    airportName: 'Catacamas Airport',
    city: 'Catacamas',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'CAA',
    state: 'Olancho'
  },
  {
    airportName: 'Cauquira Airport',
    city: 'Cauquira',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'CDD',
    state: 'Gracias-a-Dios'
  },
  {
    airportName: 'Jutigalpa airport',
    city: 'Jutigalpa',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'JUT',
    state: 'Olancho'
  },
  {
    airportName: 'Goloson International Airport',
    city: 'La Ceiba',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'LCE',
    state: 'Atlantida'
  },
  {
    airportName: 'La Esperanza Airport',
    city: 'La Esperanza',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'LEZ',
    state: 'Intibuca'
  },
  {
    airportName: 'Ramon Villeda Morales International Airport',
    city: 'La Mesa',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'SAP',
    state: 'Cortes'
  },
  {
    airportName: 'La Laguna Airport',
    city: 'Guanaja',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'GJA',
    state: 'Bay-Islands'
  },
  {
    airportName: 'Puerto Lempira Airport',
    city: 'Puerto Lempira',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'PEU',
    state: 'Gracias-a-Dios'
  },
  {
    airportName: 'Juan Manuel Galvez International Airport',
    city: 'Roatan Island',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'RTB',
    state: 'Bay-Islands'
  },
  {
    airportName: 'Santa Rosa Copan Airport',
    city: 'Santa Rosa de Copan',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'SDH',
    state: 'Copan'
  },
  {
    airportName: 'Copan Ruinas Airport',
    city: 'Ruinas de Copan',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'RUY',
    state: 'Copan'
  },
  {
    airportName: 'Coronel Enrique Soto Cano Air Base',
    city: 'Comayagua',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'XPL',
    state: 'Comayagua'
  },
  {
    airportName: 'Tela Airport',
    city: 'Tela',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'TEA',
    state: 'Atlantida'
  },
  {
    airportName: 'Toncontin International Airport',
    city: 'Tegucigalpa',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'TGU',
    state: 'Francisco-Morazan'
  },
  {
    airportName: 'Trujillo Airport',
    city: 'Trujillo',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'TJI',
    state: 'Colon'
  },
  {
    airportName: 'Sulaco Airport',
    city: 'Sulaco',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'SCD',
    state: 'Comayagua'
  },
  {
    airportName: 'Utila Airport',
    city: 'Utila Island',
    countryCode: 'HN',
    countryName: 'Honduras',
    iata: 'UII',
    state: 'Bay-Islands'
  },
  {
    airportName: 'Federal de Bachigualato International Airport',
    city: 'Culiacan',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'CUL',
    state: 'Sinaloa'
  },
  {
    airportName: 'Don Miguel Hidalgo Y Costilla International Airport',
    city: 'Guadalajara',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'GDL',
    state: 'Jalisco'
  },
  {
    airportName: 'Del Bajio International Airport',
    city: 'Silao',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'BJX',
    state: 'Guanajuato'
  },
  {
    airportName: 'Licenciado Manuel Crescencio Rejon Int Airport',
    city: 'Merida',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'MID',
    state: 'Yucatan'
  },
  {
    airportName: 'Licenciado Benito Juarez International Airport',
    city: 'Mexico City',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'MEX',
    state: 'Mexico-City'
  },
  {
    airportName: 'General Mariano Escobedo International Airport',
    city: 'Monterrey',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'MTY',
    state: 'Nuevo-Leon'
  },
  {
    airportName: 'Licenciado Gustavo Diaz Ordaz International Airport',
    city: 'Puerto Vallarta',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'PVR',
    state: 'Jalisco'
  },
  {
    airportName: 'Los Cabos International Airport',
    city: 'San Jose del Cabo',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'SJD',
    state: 'Baja-California-Sur'
  },
  {
    airportName: 'General Abelardo L. Rodriguez International Airport',
    city: 'Tijuana',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'TIJ',
    state: 'Baja-California-Sur'
  },
  {
    airportName: 'Cancun International Airport',
    city: 'Cancun',
    countryCode: 'MX',
    countryName: 'Mexique',
    iata: 'CUN',
    state: 'Quintana-Roo'
  },
  {
    airportName: 'Bocas Del Toro International Airport',
    city: 'Isla Colon',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'BOC',
    state: 'Bocas-del-Toro'
  },
  {
    airportName: 'Alonso Valderrama Airport',
    city: 'Chitre',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'CTD',
    state: 'Herrera'
  },
  {
    airportName: 'Cap Manuel Nino International Airport',
    city: 'Changuinola',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'CHX',
    state: 'Bocas-del-Toro'
  },
  {
    airportName: 'Enrique Malek International Airport',
    city: 'David',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'DAV',
    state: 'Chiriqui'
  },
  {
    airportName: 'Enrique Adolfo Jimenez Airport',
    city: 'Colon',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'ONX',
    state: 'Colon'
  },
  {
    airportName: 'Jaque Airport',
    city: 'Jaque',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'JQE',
    state: 'Darien'
  },
  {
    airportName: 'Captain Ramon Xatruch Airport',
    city: 'La Palma',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'PLP',
    state: 'Darien'
  },
  {
    airportName: 'Marcos A. Gelabert International Airport',
    city: 'Albrook',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'PAC',
    state: 'Panama'
  },
  {
    airportName: 'Howard/Panama Pacifico International Airport',
    city: 'Panama City',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'BLB',
    state: 'Panama'
  },
  {
    airportName: 'Ruben Cantu Airport',
    city: 'Santiago',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'SYP',
    state: 'Veraguas'
  },
  {
    airportName: 'Tocumen International Airport',
    city: 'Tocumen',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'PTY',
    state: 'Panama'
  },
  {
    airportName: 'San Blas Airport',
    city: 'Wannukandi',
    countryCode: 'PA',
    countryName: 'Panama',
    iata: 'NBL',
    state: 'Guna-Yala'
  },
  {
    airportName: 'Arenal Airport',
    city: 'La Fortuna/San Carlos',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'FON',
    state: 'Alajuela'
  },
  {
    airportName: 'Aerotortuguero Airport',
    city: 'Roxana',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'TTQ',
    state: 'Limon'
  },
  {
    airportName: 'Buenos Aires Airport',
    city: 'Punta Arenas',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'BAI',
    state: 'Puntarenas'
  },
  {
    airportName: 'Barra del Colorado Airport',
    city: 'Pococi',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'BCL',
    state: 'Limon'
  },
  {
    airportName: 'Codela Airport',
    city: 'Guapiles',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'CSC',
    state: 'Guanacaste'
  },
  {
    airportName: 'Coto 47 Airport',
    city: 'Corredores',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'OTR',
    state: 'Puntarenas'
  },
  {
    airportName: 'Carrillo Airport',
    city: 'Nicoya',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'RIK',
    state: 'Guanacaste'
  },
  {
    airportName: 'Drake Bay Airport',
    city: 'Puntarenas',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'DRK',
    state: 'Puntarenas'
  },
  {
    airportName: 'Flamingo Airport',
    city: 'Brasilito',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'FMG',
    state: 'Guanacaste'
  },
  {
    airportName: 'Golfito Airport',
    city: 'Golfito',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'GLF',
    state: 'Puntarenas'
  },
  {
    airportName: 'Guapiles Airport',
    city: 'Pococi',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'GPL',
    state: 'Limon'
  },
  {
    airportName: 'Islita Airport',
    city: 'Nandayure',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'PBP',
    state: 'Guanacaste'
  },
  {
    airportName: 'Daniel Oduber Quiros International Airport',
    city: 'Liberia',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'LIR',
    state: 'Guanacaste'
  },
  {
    airportName: 'Los Chiles Airport',
    city: 'Los Chiles',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'LSL',
    state: 'Alajuela'
  },
  {
    airportName: 'Limon International Airport',
    city: 'Puerto Limon',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'LIO',
    state: 'Limon'
  },
  {
    airportName: 'Guanacaste Airport',
    city: 'Nicoya/Guanacate',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'NCT',
    state: 'Guanacaste'
  },
  {
    airportName: 'Nosara Airport',
    city: 'Nicoya',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'NOB',
    state: 'Guanacaste'
  },
  {
    airportName: 'Juan Santamaria International Airport',
    city: 'San Jose',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'SJO',
    state: 'Alajuela'
  },
  {
    airportName: 'Puerto Jimenez Airport',
    city: 'Puerto Jimenez',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'PJM',
    state: 'Puntarenas'
  },
  {
    airportName: 'Palmar Sur Airport',
    city: 'Palmar Sur',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'PMZ',
    state: 'Puntarenas'
  },
  {
    airportName: 'Tobias Bolanos International Airport',
    city: 'San Jose',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'SYQ',
    state: 'San-Jose'
  },
  {
    airportName: 'Quepos Managua Airport',
    city: 'Quepos',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'XQP',
    state: 'Puntarenas'
  },
  {
    airportName: 'Rio Frio / Progreso Airport',
    city: 'Rio Frio / Progreso',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'RFR',
    state: 'Heredia'
  },
  {
    airportName: 'Playa Samara Airport',
    city: 'Playa Samara',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'PLD',
    state: 'Guanacaste'
  },
  {
    airportName: 'San Vito De Java Airport',
    city: 'Coto Brus',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'TOO',
    state: 'Puntarenas'
  },
  {
    airportName: 'Tamarindo De Santa Cruz Airport',
    city: 'Santa Cruz',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'TNO',
    state: 'Guanacaste'
  },
  {
    airportName: 'Tambor Airport',
    city: 'Nicoya',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'TMU',
    state: 'Puntarenas'
  },
  {
    airportName: 'Upala Airport',
    city: 'Upala',
    countryCode: 'CR',
    countryName: 'Costa Rica',
    iata: 'UPL',
    state: 'Alajuela'
  },
  {
    airportName: 'Les Cayes Airport',
    city: 'Les Cayes',
    countryCode: 'HT',
    countryName: 'Haiti',
    iata: 'CYA',
    state: 'Sud'
  },
  {
    airportName: 'Cap Haitien International Airport',
    city: 'Cap Haitien',
    countryCode: 'HT',
    countryName: 'Haiti',
    iata: 'CAP',
    state: 'Nord'
  },
  {
    airportName: 'Jacmel Airport',
    city: 'Jacmel',
    countryCode: 'HT',
    countryName: 'Haiti',
    iata: 'JAK',
    state: 'Sud-Est'
  },
  {
    airportName: 'Jeremie Airport',
    city: 'Jeremie',
    countryCode: 'HT',
    countryName: 'Haiti',
    iata: 'JEE',
    state: 'GrandʼAnse'
  },
  {
    airportName: 'Toussaint Louverture International Airport',
    city: 'Port-au-Prince',
    countryCode: 'HT',
    countryName: 'Haiti',
    iata: 'PAP',
    state: 'Ouest'
  },
  {
    airportName: 'Port-de-Paix Airport',
    city: 'Port-de-Paix',
    countryCode: 'HT',
    countryName: 'Haiti',
    iata: 'PAX',
    state: 'Nord-Ouest'
  },
  {
    airportName: 'Carlos Manuel de Cespedes Airport',
    city: 'Bayamo',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'BYM',
    state: 'Granma'
  },
  {
    airportName: 'Vilo Acuna International Airport',
    city: 'Cayo Largo del Sur',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'CYO',
    state: 'Isla-de-la-Juventud'
  },
  {
    airportName: 'Ignacio Agramonte International Airport',
    city: 'Camaguey',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'CMW',
    state: 'Camagueey'
  },
  {
    airportName: 'Antonio Maceo International Airport',
    city: 'Santiago',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'SCU',
    state: 'Santiago-de-Cuba'
  },
  {
    airportName: 'Jose Marti International Airport',
    city: 'Havana',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'HAV',
    state: 'La-Habana'
  },
  {
    airportName: 'Frank Pais International Airport',
    city: 'Holguin',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'HOG',
    state: 'Holguin'
  },
  {
    airportName: 'San Nicolas De Bari Airport',
    city: 'San Nicolas',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'QSN',
    state: 'Mayabeque'
  },
  {
    airportName: 'Pinar Del Rio Airport',
    city: 'Pinar del Rio',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'QPD',
    state: 'Pinar-del-Rio'
  },
  {
    airportName: 'Juan Gualberto Gomez International Airport',
    city: 'Varadero',
    countryCode: 'CU',
    countryName: 'Cuba',
    iata: 'VRA',
    state: 'Matanzas'
  },
  {
    airportName: 'Clarence A. Bain Airport',
    city: 'Mangrove Cay',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'MAY',
    state: 'Mangrove-Cay'
  },
  {
    airportName: 'Andros Town Airport',
    city: 'North-Andros',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'ASD',
    state: 'North-Andros'
  },
  {
    airportName: 'Congo Town Airport',
    city: 'Andros',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'COX',
    state: 'South-Andros'
  },
  {
    airportName: 'Marsh Harbour International Airport',
    city: 'Marsh Harbour',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'MHH',
    state: 'Marsh Harbour'
  },
  {
    airportName: 'San Andros Airport',
    city: 'Andros Island',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'SAQ',
    state: 'North-Andros'
  },
  {
    airportName: 'Spring Point Airport',
    city: 'Spring Point',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'AXP',
    state: 'Acklins'
  },
  {
    airportName: 'Treasure Cay Airport',
    city: 'Treasure Cay',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'TCB',
    state: 'Treasure Cay'
  },
  {
    airportName: 'Abaco I Walker C Airport',
    city: 'Grand-Cay',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'WKR',
    state: 'Grand-Cay'
  },
  {
    airportName: 'Chub Cay Airport',
    city: 'Berry-Islands',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'CCZ',
    state: 'Berry-Islands'
  },
  {
    airportName: 'Great Harbour Cay Airport',
    city: 'Berry-Islands',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'GHC',
    state: 'Berry-Islands'
  },
  {
    airportName: 'South Bimini Airport',
    city: 'South Bimini',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'BIM',
    state: 'Bimini'
  },
  {
    airportName: 'Arthurs Town Airport',
    city: 'Arthurs Town',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'ATC',
    state: 'Cat-Island'
  },
  {
    airportName: 'New Bight Airport',
    city: 'Cat Island',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'CAT',
    state: 'Cat-Island'
  },
  {
    airportName: 'Cat Cay Airport',
    city: 'Cat Cay',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'CXY',
    state: 'Bimini'
  },
  {
    airportName: 'Colonel Hill Airport',
    city: 'Colonel Hill',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'CRI',
    state: 'Crooked-Island-and-Long-Cay'
  },
  {
    airportName: 'Pitts Town Airport',
    city: 'Pitts Town',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'PWN',
    state: 'Crooked-Island-and-Long-Cay'
  },
  {
    airportName: 'Exuma International Airport',
    city: 'George Town',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'GGT',
    state: 'Exuma'
  },
  {
    airportName: 'North Eleuthera Airport',
    city: 'North Eleuthera',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'ELH',
    state: 'North-Eleuthera'
  },
  {
    airportName: 'Governors Harbour Airport',
    city: 'Governors Harbour',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'GHB',
    state: 'North-Eleuthera'
  },
  {
    airportName: 'Normans Cay Airport',
    city: 'Black-Point',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'NMC',
    state: 'Black-Point'
  },
  {
    airportName: 'Rock Sound Airport',
    city: 'Rock Sound',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'RSD',
    state: 'South-Eleuthera'
  },
  {
    airportName: 'Staniel Cay Airport',
    city: 'Black-Point',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'TYM',
    state: 'Black-Point'
  },
  {
    airportName: 'Grand Bahama International Airport',
    city: 'Freeport',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'FPO',
    state: 'Freeport'
  },
  {
    airportName: 'West End Airport',
    city: 'West End',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'WTD',
    state: 'West-Grand-Bahama'
  },
  {
    airportName: 'Inagua Airport',
    city: 'Matthew Town',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'IGA',
    state: 'Inagua'
  },
  {
    airportName: 'Deadmans Cay Airport',
    city: 'Deadmans Cay',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'LGI',
    state: 'Long-Island'
  },
  {
    airportName: 'Stella Maris Airport',
    city: 'Stella Maris',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'SML',
    state: 'Long-Island'
  },
  {
    airportName: 'Mayaguana Airport',
    city: 'Mayaguana',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'MYG',
    state: 'Mayaguana'
  },
  {
    airportName: 'Lynden Pindling International Airport',
    city: 'Nassau',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'NAS',
    state: 'New-Providence'
  },
  {
    airportName: 'Nassau Paradise Island Airport',
    city: 'Nassau',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'PID',
    state: 'New-Providence'
  },
  {
    airportName: 'Duncan Town Airport',
    city: 'Ragged-Island',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'DCT',
    state: 'Ragged-Island'
  },
  {
    airportName: 'Rum Cay Airport',
    city: 'Rum-Cay',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'RCY',
    state: 'Rum-Cay'
  },
  {
    airportName: 'San Salvador Airport',
    city: 'San Salvador',
    countryCode: 'BS',
    countryName: 'Bahamas',
    iata: 'ZSA',
    state: 'San-Salvador'
  },
  {
    airportName: 'Nadi International Airport',
    city: 'Nadi',
    countryCode: 'FJ',
    countryName: 'Fidji',
    iata: 'NAN',
    state: 'Western'
  },
  {
    airportName: 'Malolo Lailai Island Airport',
    city: 'Malolo Lailai Island',
    countryCode: 'FJ',
    countryName: 'Fidji',
    iata: 'PTF',
    state: 'Western'
  },
  {
    airportName: 'Nausori International Airport',
    city: 'Nausori',
    countryCode: 'FJ',
    countryName: 'Fidji',
    iata: 'SUV',
    state: 'Central'
  },
  {
    airportName: 'Wakaya Island Airport',
    city: 'Wakaya Island',
    countryCode: 'FJ',
    countryName: 'Fidji',
    iata: 'KAY',
    state: 'Wakaya Island'
  },
  {
    airportName: 'Auckland International Airport',
    city: 'Auckland',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'AKL',
    state: 'Auckland'
  },
  {
    airportName: 'Christchurch International Airport',
    city: 'Christchurch',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'CHC',
    state: 'Canterbury'
  },
  {
    airportName: 'Dunedin Airport',
    city: 'Dunedin',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'DUD',
    state: 'Otago'
  },
  {
    airportName: 'Napier Airport',
    city: 'Hawkes-Bay',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'NPE',
    state: 'Hawkes-Bay'
  },
  {
    airportName: 'Nelson Airport',
    city: 'Nelson',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'NSN',
    state: 'Nelson'
  },
  {
    airportName: 'Queenstown International Airport',
    city: 'Queenstown',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'ZQN',
    state: 'Otago'
  },
  {
    airportName: 'Wellington International Airport',
    city: 'Wellington',
    countryCode: 'NZ',
    countryName: 'Nouvelle-Zélande',
    iata: 'WLG',
    state: 'Wellington'
  },
  {
    airportName: 'Al Ahsa Airport',
    city: 'Eastern-Province',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'HOF',
    state: 'Eastern-Province'
  },
  {
    airportName: 'King Fahd International Airport',
    city: 'Ad Dammam',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'DMM',
    state: 'Eastern-Province'
  },
  {
    airportName: 'Hail Airport',
    city: 'Ḩaʼil',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'HAS',
    state: 'Ḩaʼil'
  },
  {
    airportName: 'Jubail Airport',
    city: 'Jubail',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'QJB',
    state: 'Eastern-Province'
  },
  {
    airportName: 'King Abdulaziz International Airport',
    city: 'Jeddah',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'JED',
    state: 'Makkah'
  },
  {
    airportName: 'Prince Mohammad Bin Abdulaziz Airport',
    city: 'Medina',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'MED',
    state: 'Al-Madinah-al-Munawwarah'
  },
  {
    airportName: 'King Khaled International Airport',
    city: 'Riyadh',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'RUH',
    state: 'Riyadh'
  },
  {
    airportName: 'Riyadh Air Base',
    city: 'Riyadh',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'XXN',
    state: 'Ar-Riyaḑ'
  },
  {
    airportName: 'Sulayel Airport',
    city: 'Ar-Riyaḑ',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'SLF',
    state: 'Ar-Riyaḑ'
  },
  {
    airportName: 'Tabuk Airport',
    city: 'Tabuk',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'TUU',
    state: 'Tabuk'
  },
  {
    airportName: 'Taif Airport',
    city: 'Makkah',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'TIF',
    state: 'Makkah'
  },
  {
    airportName: 'Yenbo Airport',
    city: 'Al-Madinah-al-Munawwarah',
    countryCode: 'SA',
    countryName: 'Arabie Saoudite',
    iata: 'YNB',
    state: 'Al-Madinah-al-Munawwarah'
  },
  {
    airportName: 'Abadan Airport',
    city: 'Abadan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'ABD',
    state: 'Khuzestan'
  },
  {
    airportName: 'Dezful Airport',
    city: 'Khuzestan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'DEF',
    state: 'Khuzestan'
  },
  {
    airportName: 'Omidiyeh Airport',
    city: 'Omidiyeh',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'OMI',
    state: 'Khuzestan'
  },
  {
    airportName: 'Mahshahr Airport',
    city: 'Khuzestan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'MRX',
    state: 'Khuzestan'
  },
  {
    airportName: 'Ahwaz Airport',
    city: 'Ahwaz',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'AWZ',
    state: 'Khuzestan'
  },
  {
    airportName: 'Abumusa Island Airport',
    city: 'Hormozgan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'AEU',
    state: 'Hormozgan'
  },
  {
    airportName: 'Bushehr Airport',
    city: 'Bushehr',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BUZ',
    state: 'Bushehr'
  },
  {
    airportName: 'Asaloyeh Airport',
    city: 'Asaloyeh',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'AOY',
    state: 'Asaloyeh'
  },
  {
    airportName: 'Jam Airport',
    city: 'Kangan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KNR',
    state: 'Bushehr'
  },
  {
    airportName: 'Kish International Airport',
    city: 'Kish Island',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KIH',
    state: 'Hormozgan'
  },
  {
    airportName: 'Bandar Lengeh Airport',
    city: 'Bandar Lengeh',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BDH',
    state: 'Hormozgan'
  },
  {
    airportName: 'Persian Gulf International Airport',
    city: 'Asalouyeh',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'YEH',
    state: 'Bushehr'
  },
  {
    airportName: 'Khark Island Airport',
    city: 'Bushehr',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KHK',
    state: 'Bushehr'
  },
  {
    airportName: 'Sirri Island Airport',
    city: 'Hormozgan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'SXI',
    state: 'Hormozgan'
  },
  {
    airportName: 'Lavan Island Airport',
    city: 'Hormozgan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'LVP',
    state: 'Hormozgan'
  },
  {
    airportName: 'Shahid Ashrafi Esfahani Airport',
    city: 'Kermanshah',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KSH',
    state: 'Kermanshah'
  },
  {
    airportName: 'Ilam Airport',
    city: 'Ilam',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'IIL',
    state: 'Ilam'
  },
  {
    airportName: 'Khoram Abad Airport',
    city: 'Lorestan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KHD',
    state: 'Lorestan'
  },
  {
    airportName: 'Sanandaj Airport',
    city: 'Kordestan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'SDG',
    state: 'Kordestan'
  },
  {
    airportName: 'Hesa Airport',
    city: 'Hesa',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'IFH',
    state: 'Isfahan'
  },
  {
    airportName: 'Esfahan Shahid Beheshti International Airport',
    city: 'Isfahan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'IFN',
    state: 'Isfahan'
  },
  {
    airportName: 'Shahrekord Airport',
    city: 'Shahrekord',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'CQD',
    state: 'Chaharmahal-and-Bakhtiari'
  },
  {
    airportName: 'Sardar-e-Jangal Airport',
    city: 'Rasht',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'RAS',
    state: 'Gilan'
  },
  {
    airportName: 'Hamadan Airport',
    city: 'Hamadan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'HDM',
    state: 'Hamadan'
  },
  {
    airportName: 'Arak Airport',
    city: 'Araak',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'AJK',
    state: 'Markazi'
  },
  {
    airportName: 'Imam Khomeini International Airport',
    city: 'Tehran',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'IKA',
    state: 'Tehran'
  },
  {
    airportName: 'Mehrabad International Airport',
    city: 'Tehran',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'THR',
    state: 'Tehran'
  },
  {
    airportName: 'Bandar Abbas International Airport',
    city: 'Bandar Abbas',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BND',
    state: 'Hormozgan'
  },
  {
    airportName: 'Kerman Airport',
    city: 'Kerman',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KER',
    state: 'Kerman'
  },
  {
    airportName: 'Bam Airport',
    city: 'Kerman',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BXR',
    state: 'Kerman'
  },
  {
    airportName: 'Havadarya Airport',
    city: 'Havadarya',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'HDR',
    state: 'Hormozgan'
  },
  {
    airportName: 'Rafsanjan Airport',
    city: 'Kerman',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'RJN',
    state: 'Kerman'
  },
  {
    airportName: 'Sirjan Airport',
    city: 'Kerman',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'SYJ',
    state: 'Kerman'
  },
  {
    airportName: 'Birjand Airport',
    city: 'Birjand',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'XBJ',
    state: 'Khorasan-e-Jonubi'
  },
  {
    airportName: 'Sarakhs Airport',
    city: 'Sarakhs',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'CKT',
    state: 'Razavi-Khorasan'
  },
  {
    airportName: 'Shahroud Airport',
    city: 'Semnan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'RUD',
    state: 'Semnan'
  },
  {
    airportName: 'Mashhad International Airport',
    city: 'Mashhad',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'MHD',
    state: 'Razavi-Khorasan'
  },
  {
    airportName: 'Bojnord Airport',
    city: 'Bojnord',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BJB',
    state: 'Khorasan-e-Shomali'
  },
  {
    airportName: 'Sabzevar National Airport',
    city: 'Sabzevar',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'AFZ',
    state: 'Razavi-Khorasan'
  },
  {
    airportName: 'Tabas Airport',
    city: 'Tabas',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'TCX',
    state: 'Yazd'
  },
  {
    airportName: 'Babolsar Airport',
    city: 'Babolsar',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BBL',
    state: 'Mazandaran'
  },
  {
    airportName: 'Gorgan Airport',
    city: 'Gorgan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'GBT',
    state: 'Mazandaran'
  },
  {
    airportName: 'Bishe Kola Air Base',
    city: 'Amol',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'BSM',
    state: 'Mazandaran'
  },
  {
    airportName: 'Noshahr Airport',
    city: 'Mazandaran',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'NSH',
    state: 'Mazandaran'
  },
  {
    airportName: 'Ramsar Airport',
    city: 'Mazandaran',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'RZR',
    state: 'Mazandaran'
  },
  {
    airportName: 'Dasht-e Naz Airport',
    city: 'Sari',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'SRY',
    state: 'Mazandaran'
  },
  {
    airportName: 'Fasa Airport',
    city: 'Fasa',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'FAZ',
    state: 'Fars'
  },
  {
    airportName: 'Lar Airport',
    city: 'Lar',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'LRR',
    state: 'Fars'
  },
  {
    airportName: 'Shiraz Shahid Dastghaib International Airport',
    city: 'Shiraz',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'SYZ',
    state: 'Fars'
  },
  {
    airportName: 'Khoy Airport',
    city: 'Khoy',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'KHY',
    state: 'Az̄arbayjan-e-Gharbi'
  },
  {
    airportName: 'Ardabil Airport',
    city: 'Ardabil',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'ADU',
    state: 'Ardabil'
  },
  {
    airportName: 'Sahand Airport',
    city: 'Maragheh',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'ACP',
    state: 'East-Azerbaijan'
  },
  {
    airportName: 'Parsabade Moghan Airport',
    city: 'Parsabad',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'PFQ',
    state: 'Ardabil'
  },
  {
    airportName: 'Urmia Airport',
    city: 'Urmia',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'OMH',
    state: 'Az̄arbayjan-e-Gharbi'
  },
  {
    airportName: 'Tabriz International Airport',
    city: 'Tabriz',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'TBZ',
    state: 'East-Azerbaijan'
  },
  {
    airportName: 'Shahid Sadooghi Airport',
    city: 'Yazd',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'AZD',
    state: 'Yazd'
  },
  {
    airportName: 'Zabol Airport',
    city: 'Sistan-and-Baluchestan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'ACZ',
    state: 'Sistan-and-Baluchestan'
  },
  {
    airportName: 'Konarak Airport',
    city: 'Chabahar',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'ZBR',
    state: 'Sistan-and-Baluchestan'
  },
  {
    airportName: 'Zahedan International Airport',
    city: 'Zahedan',
    countryCode: 'IR',
    countryName: 'Iran',
    iata: 'ZAH',
    state: 'Sistan-and-Baluchestan'
  },
  {
    airportName: 'Queen Alia International Airport',
    city: 'Amman',
    countryCode: 'JO',
    countryName: 'Jordanie',
    iata: 'AMM',
    state: 'Amman'
  },
  {
    airportName: 'Amman-Marka International Airport',
    city: 'Amman',
    countryCode: 'JO',
    countryName: 'Jordanie',
    iata: 'ADJ',
    state: 'Amman'
  },
  {
    airportName: 'Aqaba King Hussein International Airport',
    city: 'Aqaba',
    countryCode: 'JO',
    countryName: 'Jordanie',
    iata: 'AQJ',
    state: 'Aqaba'
  },
  {
    airportName: 'King Hussein Air College',
    city: 'Mafraq',
    countryCode: 'JO',
    countryName: 'Jordanie',
    iata: 'OMF',
    state: 'Mafraq'
  },
  {
    airportName: 'Kuwait International Airport',
    city: 'Kuwait City',
    countryCode: 'KW',
    countryName: 'Koweit',
    iata: 'KWI',
    state: 'Kuwait City'
  },
  {
    airportName: 'Beirut Rafic Hariri International Airport',
    city: 'Beirut',
    countryCode: 'LB',
    countryName: 'Liban',
    iata: 'BEY',
    state: 'Mont-Liban'
  },
  {
    airportName: 'Rene Mouawad Air Base',
    city: 'Tripoli',
    countryCode: 'LB',
    countryName: 'Liban',
    iata: 'KYE',
    state: 'Liban-Nord'
  },
  {
    airportName: 'Abu Dhabi International Airport',
    city: 'Abu Dhabi',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'AUH',
    state: 'Abu-Dhabi'
  },
  {
    airportName: 'Bateen Airport',
    city: 'Abu-Dhabi',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'AZI',
    state: 'Abu-Dhabi'
  },
  {
    airportName: 'Al Ain International Airport',
    city: 'Al Ain',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'AAN',
    state: 'Abu-Dhabi'
  },
  {
    airportName: 'Al Dhafra Air Base',
    city: 'Abu-Dhabi',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'DHF',
    state: 'Abu-Dhabi'
  },
  {
    airportName: 'Dubai International Airport',
    city: 'Dubai',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'DXB',
    state: 'Dubai'
  },
  {
    airportName: 'Al Minhad Air Base',
    city: 'Dubai',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'NHD',
    state: 'Dubai'
  },
  {
    airportName: 'Al Maktoum International Airport',
    city: 'Jebel Ali',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'DWC',
    state: 'Dubai'
  },
  {
    airportName: 'Fujairah International Airport',
    city: 'Al-Fujayrah',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'FJR',
    state: 'Al-Fujayrah'
  },
  {
    airportName: 'Ras Al Khaimah International Airport',
    city: 'Ras Al Khaimah',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'RKT',
    state: 'Raʼs-al-Khaymah'
  },
  {
    airportName: 'Sharjah International Airport',
    city: 'Sharjah',
    countryCode: 'AE',
    countryName: 'Emirats Arabes Unis',
    iata: 'SHJ',
    state: 'Ash-Shariqah'
  },
  {
    airportName: 'Buraimi Airport',
    city: 'Buraimi',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'RMB',
    state: 'Al-Buraimi'
  },
  {
    airportName: 'Fahud Airport',
    city: 'Fahud',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'FAU',
    state: 'Az̧-Z̧ahirah'
  },
  {
    airportName: 'Qarn Alam Airport',
    city: 'Ghaba',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'RNM',
    state: 'Al-Wusţa'
  },
  {
    airportName: 'Khasab Air Base',
    city: 'Khasab',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'KHS',
    state: 'Musandam'
  },
  {
    airportName: 'Lekhwair Airport',
    city: 'Az̧-Z̧ahirah',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'LKW',
    state: 'Az̧-Z̧ahirah'
  },
  {
    airportName: 'Masirah Air Base',
    city: 'Masirah',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'MSH',
    state: 'Southeastern-Governorate'
  },
  {
    airportName: 'Muscat International Airport',
    city: 'Muscat',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'MCT',
    state: 'Muscat'
  },
  {
    airportName: 'Marmul Airport',
    city: 'Marmul',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'OMM',
    state: 'Dhofar'
  },
  {
    airportName: 'Salalah Airport',
    city: 'Salalah',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'SLL',
    state: 'Dhofar'
  },
  {
    airportName: 'Sur Airport',
    city: 'Sur',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'SUH',
    state: 'Southeastern-Governorate'
  },
  {
    airportName: 'Thumrait Air Base',
    city: 'Thumrait',
    countryCode: 'OM',
    countryName: 'Oman',
    iata: 'TTH',
    state: 'Dhofar'
  },
  {
    airportName: 'Faisalabad International Airport',
    city: 'Faisalabad',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'LYP',
    state: 'Punjab'
  },
  {
    airportName: 'Gwadar International Airport',
    city: 'Gwadar',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'GWD',
    state: 'Balochistan'
  },
  {
    airportName: 'Jinnah International Airport',
    city: 'Karachi',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'KHI',
    state: 'Sindh'
  },
  {
    airportName: 'Alama Iqbal International Airport',
    city: 'Lahore',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'LHE',
    state: 'Punjab'
  },
  {
    airportName: 'Multan International Airport',
    city: 'Multan',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'MUX',
    state: 'Punjab'
  },
  {
    airportName: 'Peshawar International Airport',
    city: 'Peshawar',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'PEW',
    state: 'Khyber-Pakhtunkhwa'
  },
  {
    airportName: 'Quetta International Airport',
    city: 'Quetta',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'UET',
    state: 'Balochistan'
  },
  {
    airportName: 'Benazir Bhutto International Airport',
    city: 'Islamabad',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'ISB',
    state: 'Punjab'
  },
  {
    airportName: 'Turbat International Airport',
    city: 'Turbat',
    countryCode: 'PK',
    countryName: 'Pakistan',
    iata: 'TUK',
    state: 'Balochistan'
  },
  {
    airportName: 'Al Asad Air Base',
    city: 'Hit',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'IQA',
    state: 'Anbar'
  },
  {
    airportName: 'Bamarni Airport',
    city: 'Bamarni',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'BMN',
    state: 'Dahuk'
  },
  {
    airportName: 'Baghdad International Airport',
    city: 'Baghdad',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'BGW',
    state: 'Baghdad'
  },
  {
    airportName: 'Mosul International Airport',
    city: 'Mosul',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'OSB',
    state: 'Ninawa'
  },
  {
    airportName: 'Erbil International Airport',
    city: 'Arbil',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'EBL',
    state: 'Arbil'
  },
  {
    airportName: 'Kirkuk Air Base',
    city: 'Kirkuk',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'KIK',
    state: 'Kirkuk'
  },
  {
    airportName: 'Basrah International Airport',
    city: 'Basrah',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'BSR',
    state: 'Basra'
  },
  {
    airportName: 'Al Najaf International Airport',
    city: 'Najaf',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'NJF',
    state: 'Najaf Governorate'
  },
  {
    airportName: 'Qayyarah West Airport',
    city: 'Qayyarah',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'RQW',
    state: 'Ninawa'
  },
  {
    airportName: 'Sulaymaniyah International Airport',
    city: 'Sulaymaniyah',
    countryCode: 'IQ',
    countryName: 'Irak',
    iata: 'ISU',
    state: 'As-Sulaymaniyah'
  },
  {
    airportName: 'Al Udeid Air Base',
    city: 'Ar Rayyan',
    countryCode: 'QA',
    countryName: 'Qatar',
    iata: 'IUD',
    state: 'Baladiyat-ar-Rayyan'
  },
  {
    airportName: 'Hamad International Airport',
    city: 'Doha',
    countryCode: 'QA',
    countryName: 'Qatar',
    iata: 'DOH',
    state: 'Baladiyat-ad-Dawḩah'
  },
  {
    airportName: 'Aden International Airport',
    city: 'Aden',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'ADE',
    state: 'Aden'
  },
  {
    airportName: 'Ataq Airport',
    city: 'Shabwah',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'AXK',
    state: 'Shabwah'
  },
  {
    airportName: 'Beihan Airport',
    city: 'Shabwah',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'BHN',
    state: 'Shabwah'
  },
  {
    airportName: 'Al Ghaidah International Airport',
    city: 'Al-Mahrah',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'AAY',
    state: 'Al-Mahrah'
  },
  {
    airportName: 'Hodeidah International Airport',
    city: 'Hodeida',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'HOD',
    state: 'Al-Hudaydah'
  },
  {
    airportName: 'Mareb Airport',
    city: 'Mareb',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'MYN',
    state: 'Ma’rib'
  },
  {
    airportName: 'Qishn Airport',
    city: 'Qishn',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'IHN',
    state: 'Al-Mahrah'
  },
  {
    airportName: 'Mukalla International Airport',
    city: 'Riyan',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'RIY',
    state: 'Muḩafaz̧at-Ḩaḑramawt'
  },
  {
    airportName: 'Sadah Airport',
    city: 'Sadah',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'SYE',
    state: 'Sa‘dah'
  },
  {
    airportName: 'Sanaa International Airport',
    city: 'Sanaa',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'SAH',
    state: 'Amanat-Al-Asimah'
  },
  {
    airportName: 'Socotra International Airport',
    city: 'Socotra Islands',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'SCT',
    state: 'Soqatra'
  },
  {
    airportName: 'Sayun International Airport',
    city: 'Sayun',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'GXF',
    state: 'Muḩafaz̧at-Ḩaḑramawt'
  },
  {
    airportName: 'Taizz International Airport',
    city: 'Taizz',
    countryCode: 'YE',
    countryName: 'Yemen',
    iata: 'TAI',
    state: 'Ta‘izz'
  },
  {
    airportName: 'Ted Stevens Anchorage International Airport',
    city: 'Anchorage',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'ANC',
    state: 'Alaska'
  },
  {
    airportName: 'Kona International At Keahole Airport',
    city: 'Kailua/Kona',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'KOA',
    state: 'Hawaii'
  },
  {
    airportName: 'Honolulu International Airport',
    city: 'Honolulu',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'HNL',
    state: 'Hawaii'
  },
  {
    airportName: 'Kahului Airport',
    city: 'Kahului',
    countryCode: 'US',
    countryName: 'Etats-Unis',
    iata: 'OGG',
    state: 'Hawaii'
  },
  {
    airportName: 'Kinmen Airport',
    city: 'Shang-I',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'KNH',
    state: 'Fukien'
  },
  {
    airportName: 'Matsu Nangan Airport',
    city: 'Nangang Island',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'LZN',
    state: 'Fukien'
  },
  {
    airportName: 'Taitung Airport',
    city: 'Taitung City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'TTT',
    state: 'Taiwan'
  },
  {
    airportName: 'Lyudao Airport',
    city: 'Lyudao',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'GNI',
    state: 'Taiwan'
  },
  {
    airportName: 'Kaohsiung International Airport',
    city: 'Kaohsiung City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'KHH',
    state: 'Takao'
  },
  {
    airportName: 'Chiayi Airport',
    city: 'Chiayi City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'CYI',
    state: 'Taiwan'
  },
  {
    airportName: 'Hengchun Airport',
    city: 'Hengchung',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'HCN',
    state: 'Taiwan'
  },
  {
    airportName: 'Taichung Airport',
    city: 'Taichung City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'TXG',
    state: 'Taiwan'
  },
  {
    airportName: 'Lanyu Airport',
    city: 'Orchid Island',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'KYD',
    state: 'Taiwan'
  },
  {
    airportName: 'Taichung Ching Chuang Kang Airport',
    city: 'Taichung City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'RMQ',
    state: 'Taiwan'
  },
  {
    airportName: 'Matsu Beigan Airport',
    city: 'Beigan Island',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'MFK',
    state: 'Fukien'
  },
  {
    airportName: 'Tainan Airport',
    city: 'Tainan City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'TNN',
    state: 'Taiwan'
  },
  {
    airportName: 'Makung Airport',
    city: 'Makung City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'MZG',
    state: 'Taiwan'
  },
  {
    airportName: 'Pingtung North Airport',
    city: 'Pingtung',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'PIF',
    state: 'Taiwan'
  },
  {
    airportName: 'Taipei Songshan Airport',
    city: 'Taipei City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'TSA',
    state: 'Taiwan'
  },
  {
    airportName: 'Taiwan Taoyuan International Airport',
    city: 'Taipei',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'TPE',
    state: 'Taiwan'
  },
  {
    airportName: 'Wang-an Airport',
    city: 'Wang-an',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'WOT',
    state: 'Taiwan'
  },
  {
    airportName: 'Hualien Airport',
    city: 'Hualien City',
    countryCode: 'TW',
    countryName: 'Taiwan',
    iata: 'HUN',
    state: 'Taiwan'
  },
  {
    airportName: 'Narita International Airport',
    city: 'Tokyo',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'NRT',
    state: 'Chiba'
  },
  {
    airportName: 'Kansai International Airport',
    city: 'Osaka',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'KIX',
    state: 'Osaka'
  },
  {
    airportName: 'Kobe Airport',
    city: 'Kobe',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'UKB',
    state: 'Hyogo'
  },
  {
    airportName: 'New Chitose Airport',
    city: 'Chitose / Tomakomai',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'CTS',
    state: 'Hokkaido'
  },
  {
    airportName: 'Hakodate Airport',
    city: 'Hakodate',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'HKD',
    state: 'Hokkaido'
  },
  {
    airportName: 'Fukuoka Airport',
    city: 'Fukuoka',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'FUK',
    state: 'Fukuoka'
  },
  {
    airportName: 'Kagoshima Airport',
    city: 'Kagoshima',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'KOJ',
    state: 'Kagoshima'
  },
  {
    airportName: 'Miyazaki Airport',
    city: 'Miyazaki',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'KMI',
    state: 'Miyazaki'
  },
  {
    airportName: 'Oita Airport',
    city: 'Oita',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'OIT',
    state: 'Oita'
  },
  {
    airportName: 'Kitakyushu Airport',
    city: 'Kitakyushu',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'KKJ',
    state: 'Fukuoka'
  },
  {
    airportName: 'Kumamoto Airport',
    city: 'Kumamoto',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'KMJ',
    state: 'Kumamoto'
  },
  {
    airportName: 'Nagasaki Airport',
    city: 'Nagasaki',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'NGS',
    state: 'Nagasaki'
  },
  {
    airportName: 'Chubu Centrair International Airport',
    city: 'Tokoname',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'NGO',
    state: 'Aichi'
  },
  {
    airportName: 'Komatsu Airport',
    city: 'Kanazawa',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'KMQ',
    state: 'Ishikawa'
  },
  {
    airportName: 'Hiroshima Airport',
    city: 'Hiroshima',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'HIJ',
    state: 'Hiroshima'
  },
  {
    airportName: 'Matsuyama Airport',
    city: 'Matsuyama',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'MYJ',
    state: 'Ehime'
  },
  {
    airportName: 'Osaka International Airport',
    city: 'Osaka',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'ITM',
    state: 'Hyogo'
  },
  {
    airportName: 'Takamatsu Airport',
    city: 'Takamatsu',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'TAK',
    state: 'Kagawa'
  },
  {
    airportName: 'Sendai Airport',
    city: 'Sendai',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'SDJ',
    state: 'Miyagi'
  },
  {
    airportName: 'Tokyo International Airport',
    city: 'Tokyo',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'HND',
    state: 'Tokyo'
  },
  {
    airportName: 'Muan International Airport',
    city: 'Jeollanam-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'MWX',
    state: 'Jeollanam-do'
  },
  {
    airportName: 'Gwangju Airport',
    city: 'Gwangju',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'KWJ',
    state: 'Gwangju'
  },
  {
    airportName: 'Kunsan Air Base',
    city: 'Kunsan',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'KUV',
    state: 'Jeollabuk-do'
  },
  {
    airportName: 'Jeon Ju Airport',
    city: 'Jeon Ju',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'CHN',
    state: 'Jeollabuk-do'
  },
  {
    airportName: 'Yeosu Airport',
    city: 'Yeosu',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'RSU',
    state: 'Jeollanam-do'
  },
  {
    airportName: 'A-306 Airport',
    city: 'Chun Chon City',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'QUN',
    state: 'Gangwon-do'
  },
  {
    airportName: 'Sokcho Airport',
    city: 'Gangwon-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'SHO',
    state: 'Gangwon-do'
  },
  {
    airportName: 'Gangneung Airport',
    city: 'Gangwon-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'KAG',
    state: 'Gangwon-do'
  },
  {
    airportName: 'Wonju Airport',
    city: 'Wonju',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'WJU',
    state: 'Gangwon-do'
  },
  {
    airportName: 'Yangyang International Airport',
    city: 'Sokcho / Gangneung',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'YNY',
    state: 'Gangwon-do'
  },
  {
    airportName: 'Jeju International Airport',
    city: 'Jeju City',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'CJU',
    state: 'Jeju-do'
  },
  {
    airportName: 'Jinhae Airport',
    city: 'Jinhae',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'CHF',
    state: 'Gyeongsangnam-do'
  },
  {
    airportName: 'Gimhae International Airport',
    city: 'Busan',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'PUS',
    state: 'Busan'
  },
  {
    airportName: 'Sacheon Air Base',
    city: 'Sacheon',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'HIN',
    state: 'Gyeongsangnam-do'
  },
  {
    airportName: 'Ulsan Airport',
    city: 'Ulsan',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'USN',
    state: 'Ulsan'
  },
  {
    airportName: 'Incheon International Airport',
    city: 'Seoul',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'ICN',
    state: 'Incheon'
  },
  {
    airportName: 'Seoul Air Base',
    city: 'Gyeonggi-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'SSN',
    state: 'Gyeonggi-do'
  },
  {
    airportName: 'Osan Air Base',
    city: 'Gyeonggi-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'OSN',
    state: 'Gyeonggi-do'
  },
  {
    airportName: 'Gimpo International Airport',
    city: 'Seoul',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'GMP',
    state: 'Seoul'
  },
  {
    airportName: 'Suwon Airport',
    city: 'Gyeonggi-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'SWU',
    state: 'Gyeonggi-do'
  },
  {
    airportName: 'Pohang Airport',
    city: 'Pohang',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'KPO',
    state: 'Gyeongsangbuk-do'
  },
  {
    airportName: 'Daegu Airport',
    city: 'Daegu',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'TAE',
    state: 'Daegu'
  },
  {
    airportName: 'Cheongju International Airport',
    city: 'Cheongju',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'CJJ',
    state: 'North-Chungcheong'
  },
  {
    airportName: 'Yecheon Airport',
    city: 'Gyeongsangbuk-do',
    countryCode: 'KR',
    countryName: 'Coree du Sud',
    iata: 'YEC',
    state: 'Gyeongsangbuk-do'
  },
  {
    airportName: 'Naha Airport',
    city: 'Naha',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'OKA',
    state: 'Okinawa'
  },
  {
    airportName: 'Ishigaki Airport',
    city: 'Ishigaki',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'ISG',
    state: 'Okinawa'
  },
  {
    airportName: 'Miyako Airport',
    city: 'Miyako City',
    countryCode: 'JP',
    countryName: 'Japon',
    iata: 'MMY',
    state: 'Okinawa'
  },
  {
    airportName: 'Diosdado Macapagal International Airport',
    city: 'Angeles City',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'CRK',
    state: 'Central-Luzon'
  },
  {
    airportName: 'Ninoy Aquino International Airport',
    city: 'Manila',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'MNL',
    state: 'Manila'
  },
  {
    airportName: 'Francisco Bangoy International Airport',
    city: 'Davao City',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'DVO',
    state: 'Davao'
  },
  {
    airportName: 'Cagayan De Oro Airport',
    city: 'Cagayan De Oro City',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'CGY',
    state: 'Northern-Mindanao'
  },
  {
    airportName: 'Iloilo International Airport',
    city: 'Iloilo City',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'ILO',
    state: 'Western-Visayas'
  },
  {
    airportName: 'Mactan Cebu International Airport',
    city: 'Lapu-Lapu City',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'CEB',
    state: 'Central-Visayas'
  },
  {
    airportName: 'Puerto Princesa Airport',
    city: 'Puerto Princesa City',
    countryCode: 'PH',
    countryName: 'Philippines',
    iata: 'PPS',
    state: 'Mimaropa'
  },
  {
    airportName: 'Ingeniero Ambrosio Taravella Airport',
    city: 'Cordoba',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'COR',
    state: 'Cordoba'
  },
  {
    airportName: 'El Palomar Airport',
    city: 'El Palomar',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'EPA',
    state: 'Buenos-Aires'
  },
  {
    airportName: 'Ministro Pistarini International Airport',
    city: 'Ezeiza',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'EZE',
    state: 'Buenos-Aires'
  },
  {
    airportName: 'Suboficial Ay Santiago Germano Airport',
    city: 'San Rafael',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'AFA',
    state: 'Mendoza'
  },
  {
    airportName: 'Vicecomodoro Angel D. La Paz Aragones Airport',
    city: 'Santiago del Estero',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'SDE',
    state: 'Santiago-del-Estero'
  },
  {
    airportName: 'Teniente Benjamin Matienzo Airport',
    city: 'San Miguel de Tucuman',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'TUC',
    state: 'Tucuman'
  },
  {
    airportName: 'Domingo Faustino Sarmiento Airport',
    city: 'San Juan',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'UAQ',
    state: 'San-Juan'
  },
  {
    airportName: 'Valle Del Conlara International Airport',
    city: 'Merlo',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'RLO',
    state: 'San-Luis'
  },
  {
    airportName: 'Resistencia International Airport',
    city: 'Resistencia',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'RES',
    state: 'Chaco'
  },
  {
    airportName: 'Cataratas Del Iguazu International Airport',
    city: 'Puerto Iguazu',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'IGR',
    state: 'Misiones'
  },
  {
    airportName: 'Libertador Gral D Jose De San Martin Airport',
    city: 'Posadas',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'PSS',
    state: 'Misiones'
  },
  {
    airportName: 'Martin Miguel De Guemes International Airport',
    city: 'Salta',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'SLA',
    state: 'Salta'
  },
  {
    airportName: 'Gobernador Horacio Guzman International Airport',
    city: 'San Salvador de Jujuy',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'JUJ',
    state: 'Jujuy'
  },
  {
    airportName: 'General Enrique Mosconi Airport',
    city: 'Tartagal',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'TTG',
    state: 'Salta'
  },
  {
    airportName: 'Antoine De St Exupery Airport',
    city: 'San Antonio Oeste',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'OES',
    state: 'Rio-Negro'
  },
  {
    airportName: 'Hermes Quijada International Airport',
    city: 'Rio Grande',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'RGA',
    state: 'Tierra-del-Fuego'
  },
  {
    airportName: 'Malvinas Argentinas Airport',
    city: 'Ushuahia',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'USH',
    state: 'Tierra-del-Fuego'
  },
  {
    airportName: '28 De Noviembre Airport',
    city: 'El Turbio',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'RYO',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Astor Piazzola International Airport',
    city: 'Mar del Plata',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'MDQ',
    state: 'Buenos-Aires'
  },
  {
    airportName: 'Presidente Peron Airport',
    city: 'Neuquen',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'NQN',
    state: 'Neuquen'
  },
  {
    airportName: 'San Carlos De Bariloche Airport',
    city: 'San Carlos de Bariloche',
    countryCode: 'AR',
    countryName: 'Argentine',
    iata: 'BRC',
    state: 'Rio-Negro'
  },
  {
    airportName: 'Val de Cans/Julio Cezar Ribeiro International Airport',
    city: 'Belem',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'BEL',
    state: 'Para'
  },
  {
    airportName: 'Pampulha - Carlos Drummond de Andrade Airport',
    city: 'Belo Horizonte',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'PLU',
    state: 'Minas-Gerais'
  },
  {
    airportName: 'Aeroporto Estadual Arthur Siqueira Airport',
    city: 'Braganca Paulista',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'BJP',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Presidente Juscelino Kubistschek International Airport',
    city: 'Brasilia',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'BSB',
    state: 'Federal-District'
  },
  {
    airportName: 'Bauru Airport',
    city: 'Bauru',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'BAU',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Tancredo Neves International Airport',
    city: 'Belo Horizonte',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'CNF',
    state: 'Minas-Gerais'
  },
  {
    airportName: 'Brig. Lysias Augusto Rodrigues Airport',
    city: 'Carolina',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'CLN',
    state: 'Maranhao'
  },
  {
    airportName: 'Corumba International Airport',
    city: 'Corumba',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'CMG',
    state: 'Mato-Grosso-do-Sul'
  },
  {
    airportName: 'Cataratas International Airport',
    city: 'Foz Do Iguacu',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'IGU',
    state: 'Parana'
  },
  {
    airportName: 'Hercilio Luz International Airport',
    city: 'Florianopolis',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'FLN',
    state: 'Santa-Catarina'
  },
  {
    airportName: 'Pinto Martins International Airport',
    city: 'Fortaleza',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'FOR',
    state: 'Ceara'
  },
  {
    airportName: 'Galeao - Antonio Carlos Jobim International Airport',
    city: 'Rio De Janeiro',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'GIG',
    state: 'Rio-de-Janeiro'
  },
  {
    airportName: 'Guarulhos - Governador Andre Franco Montoro International Airport',
    city: 'Sao Paulo',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'GRU',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Viracopos International Airport',
    city: 'Campinas',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'VCP',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Ministro Victor Konder International Airport',
    city: 'Navegantes',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'NVT',
    state: 'Santa-Catarina'
  },
  {
    airportName: 'Santos Dumont Airport',
    city: 'Rio De Janeiro',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'SDU',
    state: 'Rio-de-Janeiro'
  },
  {
    airportName: 'Marechal Cunha Machado International Airport',
    city: 'Sao Luis',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'SLZ',
    state: 'Maranhao'
  },
  {
    airportName: 'Congonhas Airport',
    city: 'Sao Paulo',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'CGH',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Base Aerea de Santos Airport',
    city: 'Guaruja',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'SSZ',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Base de Aviacao de Taubate Airport',
    city: 'Taubate',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'QHP',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Plinio Alarcom Airport',
    city: 'Tres Lagoas',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'TJL',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Tarauaca Airport',
    city: 'Tarauaca',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'TRQ',
    state: 'Acre'
  },
  {
    airportName: 'Ten. Cel. Aviador Cesar Bombonato Airport',
    city: 'Uberlandia',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'UDI',
    state: 'Minas-Gerais'
  },
  {
    airportName: 'Eurico de Aguiar Salles Airport',
    city: 'Vitoria',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'VIX',
    state: 'Espirito-Santo'
  },
  {
    airportName: 'Chacalluta Airport',
    city: 'Arica',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'ARI',
    state: 'Arica-y-Parinacota'
  },
  {
    airportName: 'Desierto de Atacama Airport',
    city: 'Copiapo',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'CPO',
    state: 'Atacama'
  },
  {
    airportName: 'El Loa Airport',
    city: 'Calama',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'CJC',
    state: 'Antofagasta'
  },
  {
    airportName: 'Pdte. Carlos Ibanez del Campo Airport',
    city: 'Punta Arenas',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'PUQ',
    state: 'Magallanes'
  },
  {
    airportName: 'Diego Aracena Airport',
    city: 'Iquique',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'IQQ',
    state: 'Tarapaca'
  },
  {
    airportName: 'Comodoro Arturo Merino Benitez International Airport',
    city: 'Santiago',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'SCL',
    state: 'Santiago-Metropolitan'
  },
  {
    airportName: 'Cerro Moreno Airport',
    city: 'Antofagasta',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'ANF',
    state: 'Antofagasta'
  },
  {
    airportName: 'Maria Dolores Airport',
    city: 'Los Angeles',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'LSQ',
    state: 'Biobio'
  },
  {
    airportName: 'Carriel Sur Airport',
    city: 'Concepcion',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'CCP',
    state: 'Biobio'
  },
  {
    airportName: 'La Florida Airport',
    city: 'La Serena-Coquimbo',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'LSC',
    state: 'Coquimbo'
  },
  {
    airportName: 'El Tepual Airport',
    city: 'Puerto Montt',
    countryCode: 'CL',
    countryName: 'Chili',
    iata: 'PMC',
    state: 'Los-Lagos'
  },
  {
    airportName: 'Sorocaba Airport',
    city: 'Sorocaba',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'SOD',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Dracena Airport',
    city: 'Dracena',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'QDC',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Avare-Arandu Airport',
    city: 'Avare',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'QVP',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Alagoinhas Airport',
    city: 'Alagoinhas',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'QGS',
    state: 'Bahia'
  },
  {
    airportName: 'Votuporanga Airport',
    city: 'Votuporanga',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'VOT',
    state: 'Sao-Paulo'
  },
  {
    airportName: 'Chachoan Airport',
    city: 'Ambato',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'ATF',
    state: 'Tungurahua'
  },
  {
    airportName: 'Francisco De Orellana Airport',
    city: 'Coca',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'OCC',
    state: 'Napo'
  },
  {
    airportName: 'Mariscal Lamar Airport',
    city: 'Cuenca',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'CUE',
    state: 'Azuay'
  },
  {
    airportName: 'Seymour Airport',
    city: 'Baltra',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'GPS',
    state: 'Galapagos'
  },
  {
    airportName: 'Simon Bolivar International Airport',
    city: 'Guayaquil',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'GYE',
    state: 'Guayas'
  },
  {
    airportName: 'General Villamil Airport',
    city: 'Isabela',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'IBB',
    state: 'Galapagos'
  },
  {
    airportName: 'Jipijapa Airport',
    city: 'Jipijapa',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'JIP',
    state: 'Manabi'
  },
  {
    airportName: 'Cotopaxi International Airport',
    city: 'Latacunga',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'LTX',
    state: 'Cotopaxi'
  },
  {
    airportName: 'Jose Maria Velasco Ibarra Airport',
    city: 'Macara',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'MRR',
    state: 'Loja'
  },
  {
    airportName: 'Coronel E Carvajal Airport',
    city: 'Macas',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'XMS',
    state: 'Macas'
  },
  {
    airportName: 'General Manuel Serrano Airport',
    city: 'Machala',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'MCH',
    state: 'El-Oro'
  },
  {
    airportName: 'Eloy Alfaro International Airport',
    city: 'Manta',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'MEC',
    state: 'Manabi'
  },
  {
    airportName: 'Nueva Loja Airport',
    city: 'Lago Agrio',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'LGQ',
    state: 'Sucumbios'
  },
  {
    airportName: 'Putumayo Airport',
    city: 'Puerto Putumayo',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'PYO',
    state: 'Sucumbios'
  },
  {
    airportName: 'Reales Tamarindos Airport',
    city: 'Portoviejo',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'PVO',
    state: 'Manabi'
  },
  {
    airportName: 'Nuevo Aeropuerto Internacional Mariscal Sucre',
    city: 'Quito',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'UIO',
    state: 'Pichincha'
  },
  {
    airportName: 'Coronel Artilleria Victor Larrea Airport',
    city: 'Santa Rosa',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'ETR',
    state: 'El-Oro'
  },
  {
    airportName: 'General Ulpiano Paez Airport',
    city: 'Salinas',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'SNC',
    state: 'Santa-Elena'
  },
  {
    airportName: 'Sucua Airport',
    city: 'Sucua',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'SUQ',
    state: 'Morona-Santiago'
  },
  {
    airportName: 'Rio Amazonas Airport',
    city: 'Shell Mera',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'PTZ',
    state: 'Pastaza'
  },
  {
    airportName: 'San Cristobal Airport',
    city: 'San Cristobal',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'SCY',
    state: 'Galapagos'
  },
  {
    airportName: 'Los Perales Airport',
    city: 'Bahia de Caraquez',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'BHA',
    state: 'Manabi'
  },
  {
    airportName: 'Taisha Airport',
    city: 'Taisha',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'TSC',
    state: 'Morona-Santiago'
  },
  {
    airportName: 'Tiputini Airport',
    city: 'Tiputini',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'TPN',
    state: 'Orellana'
  },
  {
    airportName: 'Camilo Ponce Enriquez Airport',
    city: 'La Toma (Catamayo)',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'LOH',
    state: 'Loja'
  },
  {
    airportName: 'General Rivadeneira Airport',
    city: 'Tachina',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'ESM',
    state: 'Esmeraldas'
  },
  {
    airportName: 'Tarapoa Airport',
    city: 'Tarapoa',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'TPC',
    state: 'Sucumbios'
  },
  {
    airportName: 'Teniente Coronel Luis a Mantilla Airport',
    city: 'Tulcan',
    countryCode: 'EC',
    countryName: 'Equateur',
    iata: 'TUA',
    state: 'Carchi'
  },
  {
    airportName: 'Silvio Pettirossi International Airport',
    city: 'Asuncion',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'ASU',
    state: 'Central'
  },
  {
    airportName: 'Juan De Ayolas Airport',
    city: 'Ayolas',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'AYO',
    state: 'Misiones'
  },
  {
    airportName: 'Bahia Negra Airport',
    city: 'Bahia Negra',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'BFA',
    state: 'Alto-Paraguay'
  },
  {
    airportName: 'Teniente Col Carmelo Peralta Airport',
    city: 'Concepcion',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'CIO',
    state: 'Concepcion'
  },
  {
    airportName: 'Encarnacion Airport',
    city: 'Encarnacion',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'ENO',
    state: 'Itapua'
  },
  {
    airportName: 'Guarani International Airport',
    city: 'Ciudad del Este',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'AGT',
    state: 'Alto-Parana'
  },
  {
    airportName: 'Filadelfia Airport',
    city: 'Filadelfia',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'FLM',
    state: 'Boqueron'
  },
  {
    airportName: 'Dr. Luis Maria Argana International Airport',
    city: 'Mariscal Estigarribia',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'ESG',
    state: 'Boqueron'
  },
  {
    airportName: 'Fuerte Olimpo Airport',
    city: 'Fuerte Olimpo',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'OLK',
    state: 'Alto-Paraguay'
  },
  {
    airportName: 'Carlos Miguel Gimenez Airport',
    city: 'Pilar',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'PIL',
    state: 'Neembucu'
  },
  {
    airportName: 'Dr Augusto Roberto Fuster International Airport',
    city: 'Pedro Juan Caballero',
    countryCode: 'PY',
    countryName: 'Paraguay',
    iata: 'PJC',
    state: 'Amambay'
  },
  {
    airportName: 'Palonegro Airport',
    city: 'Bucaramanga',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'BGA',
    state: 'Santander'
  },
  {
    airportName: 'El Dorado International Airport',
    city: 'Bogota',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'BOG',
    state: 'Bogota-D-C-'
  },
  {
    airportName: 'Ernesto Cortissoz International Airport',
    city: 'Barranquilla',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'BAQ',
    state: 'Atlantico'
  },
  {
    airportName: 'Rafael Nunez International Airport',
    city: 'Cartagena',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'CTG',
    state: 'Bolivar'
  },
  {
    airportName: 'Alfonso Bonilla Aragon International Airport',
    city: 'Cali',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'CLO',
    state: 'Valle-del-Cauca'
  },
  {
    airportName: 'Alfredo Vasquez Cobo International Airport',
    city: 'Leticia',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'LET',
    state: 'Amazonas'
  },
  {
    airportName: 'Jose Maria Cordova International Airport',
    city: 'Rionegro',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'MDE',
    state: 'Antioquia'
  },
  {
    airportName: 'Simon Bolivar International Airport',
    city: 'Santa Marta',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'SMR',
    state: 'Magdalena'
  },
  {
    airportName: 'Gustavo Rojas Pinilla International Airport',
    city: 'San Andres',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'ADZ',
    state: 'San-Andres-y-Providencia'
  },
  {
    airportName: 'Vanguardia Airport',
    city: 'Villavicencio',
    countryCode: 'CO',
    countryName: 'Colombie',
    iata: 'VVC',
    state: 'Meta'
  },
  {
    airportName: 'Monteagudo Airport',
    city: 'El Banado',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'MHW',
    state: 'Chuquisaca'
  },
  {
    airportName: 'Apolo Airport',
    city: 'Apolo',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'APB',
    state: 'La-Paz'
  },
  {
    airportName: 'Ascencion De Guarayos Airport',
    city: 'Ascension de Guarayos',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'ASC',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Baures Airport',
    city: 'Baures',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'BVL',
    state: 'El-Beni'
  },
  {
    airportName: 'Bermejo Airport',
    city: 'Bermejo',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'BJO',
    state: 'Tarija'
  },
  {
    airportName: 'Camiri Airport',
    city: 'Camiri',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'CAM',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Jorge Wilsterman International Airport',
    city: 'Cochabamba',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'CBB',
    state: 'Cochabamba'
  },
  {
    airportName: 'Capitan Anibal Arab Airport',
    city: 'Cobija',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'CIJ',
    state: 'Pando'
  },
  {
    airportName: 'Concepcion Airport',
    city: 'Concepcion',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'CEP',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'El Trompillo Airport',
    city: 'Santa Cruz',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SRZ',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Capitan de Av. Emilio Beltran Airport',
    city: 'Guayaramerin',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'GYA',
    state: 'Rondonia'
  },
  {
    airportName: 'Huacaraje Airport',
    city: 'Itenes',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'BVK',
    state: 'El-Beni'
  },
  {
    airportName: 'San Jose De Chiquitos Airport',
    city: 'San Jose de Chiquitos',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SJS',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'San Joaquin Airport',
    city: 'San Joaquin',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SJB',
    state: 'El-Beni'
  },
  {
    airportName: 'San Javier Airport',
    city: 'San Javier',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SJV',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'El Alto International Airport',
    city: 'La Paz / El Alto',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'LPB',
    state: 'La-Paz'
  },
  {
    airportName: 'Magdalena Airport',
    city: 'Magdalena',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'MGD',
    state: 'El-Beni'
  },
  {
    airportName: 'Juan Mendoza Airport',
    city: 'Oruro',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'ORU',
    state: 'Oruro'
  },
  {
    airportName: 'Capitan Nicolas Rojas Airport',
    city: 'Potosi',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'POI',
    state: 'Potosi'
  },
  {
    airportName: 'Puerto Rico Airport',
    city: 'Puerto Rico/Manuripi',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'PUR',
    state: 'Pando'
  },
  {
    airportName: 'Capitan Av. Salvador Ogaya G. airport',
    city: 'Puerto Suarez',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'PSZ',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'San Ramon Airport',
    city: 'San Ramon / Mamore',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SRD',
    state: 'El-Beni'
  },
  {
    airportName: 'Robore Airport',
    city: 'Robore',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'RBO',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Capitan Av. Selin Zeitun Lopez Airport',
    city: 'Riberalta',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'RIB',
    state: 'El-Beni'
  },
  {
    airportName: 'Rurenabaque Airport',
    city: 'Rurenabaque',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'RBQ',
    state: 'El-Beni'
  },
  {
    airportName: 'Reyes Airport',
    city: 'Reyes',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'REY',
    state: 'El-Beni'
  },
  {
    airportName: 'Santa Ana Del Yacuma Airport',
    city: 'Santa Ana del Yacuma',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SBL',
    state: 'El-Beni'
  },
  {
    airportName: 'Capitan Av. German Quiroga G. Airport',
    city: 'San Borja',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SRJ',
    state: 'El-Beni'
  },
  {
    airportName: 'Capitan Av. Juan Cochamanidis S. Airport',
    city: 'San Ignacio de Velasco',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SNG',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'San Ignacio de Moxos Airport',
    city: 'San Ignacio de Moxos',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SNM',
    state: 'El-Beni'
  },
  {
    airportName: 'Santa Rosa De Yacuma Airport',
    city: 'Santa Rosa',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SRB',
    state: 'El-Beni'
  },
  {
    airportName: 'Juana Azurduy De Padilla Airport',
    city: 'Sucre',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'SRE',
    state: 'Chuquisaca'
  },
  {
    airportName: 'San Matias Airport',
    city: 'San Matias',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'MQK',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Capitan Oriel Lea Plaza Airport',
    city: 'Tarija',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'TJA',
    state: 'Tarija'
  },
  {
    airportName: 'Teniente Av. Jorge Henrich Arauz Airport',
    city: 'Trinidad',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'TDD',
    state: 'El-Beni'
  },
  {
    airportName: 'Uyuni Airport',
    city: 'Quijarro',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'UYU',
    state: 'Potosi'
  },
  {
    airportName: 'Capitan Av. Vidal Villagomez Toledo Airport',
    city: 'Vallegrande',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'VAH',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Teniente Coronel Rafael Pabon Airport',
    city: 'Villamontes',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'VLM',
    state: 'Tarija'
  },
  {
    airportName: 'Viru Viru International Airport',
    city: 'Santa Cruz',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'VVI',
    state: 'Santa-Cruz'
  },
  {
    airportName: 'Yacuiba Airport',
    city: 'Yacuiba',
    countryCode: 'BO',
    countryName: 'Bolivie',
    iata: 'BYC',
    state: 'Tarija'
  },
  {
    airportName: 'Barra Airport',
    city: 'Barra',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'BQQ',
    state: 'Bahia'
  },
  {
    airportName: 'Guarapari Airport',
    city: 'Guarapari',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'GUZ',
    state: 'Espirito-Santo'
  },
  {
    airportName: 'Guanambi Airport',
    city: 'Guanambi',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'GNM',
    state: 'Bahia'
  },
  {
    airportName: 'Sao Mateus Airport',
    city: 'Sao Mateus',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'SBJ',
    state: 'Espirito-Santo'
  },
  {
    airportName: 'Porto de Moz Airport',
    city: 'Porto De Moz',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'PTQ',
    state: 'Para'
  },
  {
    airportName: 'Sobral Airport',
    city: 'Sobral',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'QBX',
    state: 'Ceara'
  },
  {
    airportName: 'Valenca Airport',
    city: 'Valenca',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'VAL',
    state: 'Bahia'
  },
  {
    airportName: 'Camocim Airport',
    city: 'Camocim',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'CMC',
    state: 'Ceara'
  },
  {
    airportName: 'Agropecuaria Castanhais Airport',
    city: 'Cumaru Do Norte',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'ITI',
    state: 'Para'
  },
  {
    airportName: 'Capitan FAP Jose A Quinones Gonzales International Airport',
    city: 'Chiclayo',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'CIX',
    state: 'Lambayeque'
  },
  {
    airportName: 'Jorge Chavez International Airport',
    city: 'Lima',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'LIM',
    state: 'Callao'
  },
  {
    airportName: 'Coronel FAP Francisco Secada Vignetta International Airport',
    city: 'Iquitos',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'IQT',
    state: 'Loreto'
  },
  {
    airportName: 'Rodriguez Ballon International Airport',
    city: 'Arequipa',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'AQP',
    state: 'Arequipa'
  },
  {
    airportName: 'Capitan FAP Carlos Martinez De Pinillos International Airport',
    city: 'Trujillo',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'TRU',
    state: 'La-Libertad'
  },
  {
    airportName: 'Cadete FAP Guillermo Del Castillo Paredes Airport',
    city: 'Tarapoto',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'TPP',
    state: 'San-Martin'
  },
  {
    airportName: 'Capitan FAP Guillermo Concha Iberico International Airport',
    city: 'Piura',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'PIU',
    state: 'Piura'
  },
  {
    airportName: 'Alejandro Velasco Astete International Airport',
    city: 'Cusco',
    countryCode: 'PE',
    countryName: 'Perou',
    iata: 'CUZ',
    state: 'Cusco'
  },
  {
    airportName: 'Videira Airport',
    city: 'Videira',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'VIA',
    state: 'Santa-Catarina'
  },
  {
    airportName: 'Artigas International Airport',
    city: 'Artigas',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'ATI',
    state: 'Artigas'
  },
  {
    airportName: 'Laguna de Los Patos International Airport',
    city: 'Colonia',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'CYR',
    state: 'Colonia'
  },
  {
    airportName: 'Carmelo International Airport',
    city: 'Carmelo',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'CAR',
    state: 'Colonia'
  },
  {
    airportName: 'Santa Bernardina International Airport',
    city: 'Durazno',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'DZO',
    state: 'Durazno'
  },
  {
    airportName: 'Capitan Corbeta CA Curbelo International Airport',
    city: 'Punta del Este',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'PDP',
    state: 'Maldonado'
  },
  {
    airportName: 'Ricardo de Tomasi International Airport',
    city: 'Mercedes',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'MER',
    state: 'Soriano'
  },
  {
    airportName: 'Cerro Largo International Airport',
    city: 'Melo',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'MLZ',
    state: 'Cerro-Largo'
  },
  {
    airportName: 'Carrasco International /General C L Berisso Airport',
    city: 'Montevideo',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'MVD',
    state: 'Canelones'
  },
  {
    airportName: 'El Jaguel / Punta del Este Airport',
    city: 'Maldonado',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'MDO',
    state: 'Maldonado'
  },
  {
    airportName: 'Tydeo Larre Borges Airport',
    city: 'Paysandu',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'PDU',
    state: 'Paysandu'
  },
  {
    airportName: 'Presidente General Don Oscar D. Gestido International Airport',
    city: 'Rivera',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'RVY',
    state: 'Rivera'
  },
  {
    airportName: 'Nueva Hesperides International Airport',
    city: 'Salto',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'STY',
    state: 'Salto'
  },
  {
    airportName: 'Tacuarembo Airport',
    city: 'Tacuarembo',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'TAW',
    state: 'Tacuarembo'
  },
  {
    airportName: 'Treinta y Tres Airport',
    city: 'Treinta y Tres',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'TYT',
    state: 'Treinta-y-Tres'
  },
  {
    airportName: 'Vichadero Airport',
    city: 'Vichadero',
    countryCode: 'UY',
    countryName: 'Uruguay',
    iata: 'VCH',
    state: 'Rivera'
  },
  {
    airportName: 'General Jose Antonio Anzoategui International Airport',
    city: 'Barcelona',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'BLA',
    state: 'Anzoategui'
  },
  {
    airportName: 'Barquisimeto International Airport',
    city: 'Barquisimeto',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'BRM',
    state: 'Lara'
  },
  {
    airportName: 'General Francisco Bermudez Airport',
    city: 'Carupano',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'CUP',
    state: 'Sucre'
  },
  {
    airportName: 'Josefa Camejo International Airport',
    city: 'Paraguana',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'LSP',
    state: 'Falcon'
  },
  {
    airportName: 'La Chinita International Airport',
    city: 'Maracaibo',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'MAR',
    state: 'Zulia'
  },
  {
    airportName: 'Del Caribe Santiago Marino International Airport',
    city: 'Isla Margarita',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'PMV',
    state: 'Nueva-Esparta'
  },
  {
    airportName: 'Maiquetia (Simon Bolivar Internacional) Airport',
    city: 'Caracas',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'CCS',
    state: 'Vargas'
  },
  {
    airportName: 'General Bartolome Salom International Airport',
    city: 'Carabobo',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'PBL',
    state: 'Carabobo'
  },
  {
    airportName: 'General Manuel Carlos Piar International Airport',
    city: 'Puerto Ordaz-Ciudad Guayana',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'PZO',
    state: 'Bolivar'
  },
  {
    airportName: 'Mayor Buenaventura Vivas International Airport',
    city: 'Santo Domingo',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'STD',
    state: 'Tachira'
  },
  {
    airportName: 'Arturo Michelena International Airport',
    city: 'Valencia',
    countryCode: 'VE',
    countryName: 'Venezuela',
    iata: 'VLN',
    state: 'Carabobo'
  },
  {
    airportName: 'Sao Miguel do Araguaia Airport',
    city: 'Sao Miguel Do Araguaia',
    countryCode: 'BR',
    countryName: 'Bresil',
    iata: 'SQM',
    state: 'Goias'
  },
  {
    airportName: 'Canefield Airport',
    city: 'Canefield',
    countryCode: 'DM',
    countryName: 'Dominique',
    iata: 'DCF',
    state: 'Saint-Paul'
  },
  {
    airportName: 'Melville Hall Airport',
    city: 'Marigot',
    countryCode: 'DM',
    countryName: 'Dominique',
    iata: 'DOM',
    state: 'Saint-Andrew'
  },
  {
    airportName: 'La Desirade Airport',
    city: 'Grande Anse',
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    iata: 'DSD',
    state: 'Guadeloupe'
  },
  {
    airportName: 'Baillif Airport',
    city: 'Basse Terre',
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    iata: 'BBR',
    state: 'Guadeloupe'
  },
  {
    airportName: 'St-Francois Airport',
    city: 'St-Francois',
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    iata: 'SFC',
    state: 'Guadeloupe'
  },
  {
    airportName: 'Martinique Aime Cesaire International Airport',
    city: 'Fort-de-France',
    countryCode: 'MQ',
    countryName: 'Martinique',
    iata: 'FDF',
    state: 'Martinique'
  },
  {
    airportName: 'Les Bases Airport',
    city: 'Grand Bourg',
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    iata: 'GBJ',
    state: 'Guadeloupe'
  },
  {
    airportName: 'Pointe-a-Pitre Le Raizet',
    city: 'Pointe-a-Pitre Le Raizet',
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    iata: 'PTP',
    state: 'Guadeloupe'
  },
  {
    airportName: 'Terre-de-Haut Airport',
    city: 'Les Saintes',
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    iata: 'LSS',
    state: 'Guadeloupe'
  },
  {
    airportName: 'Antonio Nery Juarbe Pol Airport',
    city: 'Arecibo',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'ARE',
    state: 'Arecibo'
  },
  {
    airportName: 'Rafael Hernandez Airport',
    city: 'Aguadilla',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'BQN',
    state: 'Aguadilla'
  },
  {
    airportName: 'Benjamin Rivera Noriega Airport',
    city: 'Culebra Island',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'CPX',
    state: 'Culebra'
  },
  {
    airportName: 'Diego Jimenez Torres Airport',
    city: 'Fajardo',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'FAJ',
    state: 'Fajardo'
  },
  {
    airportName: 'Fernando Luis Ribas Dominicci Airport',
    city: 'San Juan',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'SIG',
    state: 'San-Juan'
  },
  {
    airportName: 'Eugenio Maria De Hostos Airport',
    city: 'Mayaguez',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'MAZ',
    state: 'Mayaguez'
  },
  {
    airportName: 'Mercedita Airport',
    city: 'Ponce',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'PSE',
    state: 'Ponce'
  },
  {
    airportName: 'Luis Munoz Marin International Airport',
    city: 'San Juan',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'SJU',
    state: 'Carolina'
  },
  {
    airportName: 'Antonio Rivera Rodriguez Airport',
    city: 'Vieques Island',
    countryCode: 'PR',
    countryName: 'Porto Rico',
    iata: 'VQS',
    state: 'Vieques'
  },
  {
    airportName: 'Almaty Airport',
    city: 'Almaty',
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    iata: 'ALA',
    state: 'Almaty-Oblysy'
  },
  {
    airportName: 'Astana International Airport',
    city: 'Astana',
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    iata: 'TSE',
    state: 'Aqmola'
  },
  {
    airportName: 'Petropavlosk South Airport',
    city: 'Petropavlosk',
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    iata: 'PPK',
    state: 'Soltuestik-Qazaqstan'
  },
  {
    airportName: 'Kzyl-Orda Southwest Airport',
    city: 'Kzyl-Orda',
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    iata: 'KZO',
    state: 'Qyzylorda'
  },
  {
    airportName: 'Ust-Kamennogorsk Airport',
    city: 'Ust Kamenogorsk',
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    iata: 'UKK',
    state: 'East-Kazakhstan'
  },
  {
    airportName: 'Kopitnari Airport',
    city: 'Kutaisi',
    countryCode: 'GE',
    countryName: 'Georgie',
    iata: 'KUT',
    state: 'Kutaisi'
  },
  {
    airportName: 'Batumi International Airport',
    city: 'Batumi',
    countryCode: 'GE',
    countryName: 'Georgie',
    iata: 'BUS',
    state: 'Ajaria'
  },
  {
    airportName: 'Sukhumi Dranda Airport',
    city: 'Sukhumi',
    countryCode: 'GE',
    countryName: 'Georgie',
    iata: 'SUI',
    state: 'Abkhazia'
  },
  {
    airportName: 'Tbilisi International Airport',
    city: 'Tbilisi',
    countryCode: 'GE',
    countryName: 'Georgie',
    iata: 'TBS',
    state: 'Tbilisi'
  },
  {
    airportName: 'Khabarovsk-Novy Airport',
    city: 'Khabarovsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'KHV',
    state: 'Khabarovsk'
  },
  {
    airportName: 'Yuzhno-Sakhalinsk Airport',
    city: 'Yuzhno-Sakhalinsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'UUS',
    state: 'Sakhalin'
  },
  {
    airportName: 'Vladivostok International Airport',
    city: 'Vladivostok',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'VVO',
    state: 'Primorskiy'
  },
  {
    airportName: 'Irkutsk Airport',
    city: 'Irkutsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'IKT',
    state: 'Irkutsk'
  },
  {
    airportName: 'Boryspil International Airport',
    city: 'Kiev',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'KBP',
    state: 'Kyiv'
  },
  {
    airportName: 'Donetsk International Airport',
    city: 'Donetsk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'DOK',
    state: 'Donetsk'
  },
  {
    airportName: 'Kramatorsk Airport',
    city: 'Kramatorsk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'KRQ',
    state: 'Donetsk'
  },
  {
    airportName: 'Mariupol International Airport',
    city: 'Mariupol',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'MPW',
    state: 'Donetsk'
  },
  {
    airportName: 'Sievierodonetsk Airport',
    city: 'Sievierodonetsk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'SEV',
    state: 'Luhansk'
  },
  {
    airportName: 'Luhansk International Airport',
    city: 'Luhansk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'VSG',
    state: 'Luhansk'
  },
  {
    airportName: 'Berdyansk Airport',
    city: 'Berdyansk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'ERD',
    state: 'Zaporizhia'
  },
  {
    airportName: 'Dnipropetrovsk International Airport',
    city: 'Dnipropetrovsk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'DNK',
    state: 'Dnipro'
  },
  {
    airportName: 'Zaporizhzhia International Airport',
    city: 'Zaporizhia',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'OZH',
    state: 'Zaporizhia'
  },
  {
    airportName: 'Kryvyi Rih International Airport',
    city: 'Kryvyi Rih',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'KWG',
    state: 'Kropyvnytskyi'
  },
  {
    airportName: 'Kerch Airport',
    city: 'Kerch',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'KHC',
    state: 'Republic-of-Crimea'
  },
  {
    airportName: 'Kharkiv International Airport',
    city: 'Kharkiv',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'HRK',
    state: 'Kharkiv'
  },
  {
    airportName: 'Suprunovka Airport',
    city: 'Poltava',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'PLV',
    state: 'Poltava'
  },
  {
    airportName: 'Sumy Airport',
    city: 'Sumy',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'UMY',
    state: 'Sumy'
  },
  {
    airportName: 'Cherkasy International Airport',
    city: 'Cherkasy',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'CKC',
    state: 'Cherkasy'
  },
  {
    airportName: 'Kirovograd Airport',
    city: 'Kirovograd',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'KGO',
    state: 'Kropyvnytskyi'
  },
  {
    airportName: 'Kiev Zhuliany International Airport',
    city: 'Kiev',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'IEV',
    state: 'Kyiv-City'
  },
  {
    airportName: 'Gostomel Airport',
    city: 'Kiev',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'GML',
    state: 'Kyiv'
  },
  {
    airportName: 'Zhytomyr Airport',
    city: 'Zhytomyr',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'ZTR',
    state: 'Zhytomyr'
  },
  {
    airportName: 'Lutsk Airport',
    city: 'Lutsk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'UCK',
    state: 'Volyn'
  },
  {
    airportName: 'Khmelnytskyi Airport',
    city: 'Khmelnytskyi',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'HMJ',
    state: 'Khmelnytskyi'
  },
  {
    airportName: 'Ivano-Frankivsk International Airport',
    city: 'Ivano-Frankivsk',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'IFO',
    state: 'Ivano-Frankivsk'
  },
  {
    airportName: 'Lviv International Airport',
    city: 'Lviv',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'LWO',
    state: 'Lviv'
  },
  {
    airportName: 'Chernivtsi International Airport',
    city: 'Chernivtsi',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'CWC',
    state: 'Chernivtsi'
  },
  {
    airportName: 'Rivne International Airport',
    city: 'Rivne',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'RWN',
    state: 'Rivne'
  },
  {
    airportName: 'Ternopil International Airport',
    city: 'Ternopil',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'TNL',
    state: 'Ternopil'
  },
  {
    airportName: 'Uzhhorod International Airport',
    city: 'Uzhhorod',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'UDJ',
    state: 'Transcarpathia'
  },
  {
    airportName: 'Chernobayevka Airport',
    city: 'Kherson',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'KHE',
    state: 'Kherson'
  },
  {
    airportName: 'Mykolaiv International Airport',
    city: 'Nikolayev',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'NLV',
    state: 'Mykolaiv'
  },
  {
    airportName: 'Odessa International Airport',
    city: 'Odessa',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'ODS',
    state: 'Odessa'
  },
  {
    airportName: 'Vinnytsia/Gavyryshivka Airport',
    city: 'Vinnitsa',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'VIN',
    state: 'Vinnytska'
  },
  {
    airportName: 'Pulkovo Airport',
    city: 'St. Petersburg',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'LED',
    state: 'Leningradskaya-Oblast'
  },
  {
    airportName: 'Brest Airport',
    city: 'Brest',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'BQT',
    state: 'Brest'
  },
  {
    airportName: 'Gomel Airport',
    city: 'Gomel',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'GME',
    state: 'Gomel'
  },
  {
    airportName: 'Vitebsk East Airport',
    city: 'Vitebsk',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'VTB',
    state: 'Vitebsk'
  },
  {
    airportName: 'Khrabrovo Airport',
    city: 'Kaliningrad',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'KGD',
    state: 'Kaliningrad'
  },
  {
    airportName: 'Hrodna Airport',
    city: 'Hrodna',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'GNA',
    state: 'Grodnenskaya'
  },
  {
    airportName: 'Minsk 1 Airport',
    city: 'Minsk',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'MHP',
    state: 'Minsk'
  },
  {
    airportName: 'Minsk International Airport',
    city: 'Minsk',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'MSQ',
    state: 'Minsk'
  },
  {
    airportName: 'Mogilev Airport',
    city: 'Mogilev',
    countryCode: 'BY',
    countryName: 'Belarus',
    iata: 'MVQ',
    state: 'Mogilev'
  },
  {
    airportName: 'Yemelyanovo Airport',
    city: 'Krasnoyarsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'KJA',
    state: 'Krasnoyarskiy'
  },
  {
    airportName: 'Tolmachevo Airport',
    city: 'Novosibirsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'OVB',
    state: 'Novosibirsk'
  },
  {
    airportName: 'Omsk Central Airport',
    city: 'Omsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'OMS',
    state: 'Omsk'
  },
  {
    airportName: 'Belbek Airport',
    city: 'Sevastopol',
    countryCode: 'UA',
    countryName: 'Ukraine',
    iata: 'UKS',
    state: 'Republic-of-Crimea'
  },
  {
    airportName: 'Simferopol International Airport',
    city: 'Simferopol',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'SIP',
    state: 'Republic-of-Crimea'
  },
  {
    airportName: 'Anapa Airport',
    city: 'Anapa',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'AAQ',
    state: 'Krasnodarskiy'
  },
  {
    airportName: 'Krasnodar International Airport',
    city: 'Krasnodar',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'KRR',
    state: 'Krasnodarskiy'
  },
  {
    airportName: 'Uytash Airport',
    city: 'Makhachkala',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'MCX',
    state: 'Dagestan'
  },
  {
    airportName: 'Mineralnyye Vody Airport',
    city: 'Mineralnyye Vody',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'MRV',
    state: 'Stavropolskiy'
  },
  {
    airportName: 'Platov International Airport',
    city: 'Rostov-on-Don',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'ROV',
    state: 'Rostov'
  },
  {
    airportName: 'Sochi International Airport',
    city: 'Sochi',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'AER',
    state: 'Krasnodarskiy'
  },
  {
    airportName: 'Volgograd International Airport',
    city: 'Volgograd',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'VOG',
    state: 'Volgograd'
  },
  {
    airportName: 'Chelyabinsk Balandino Airport',
    city: 'Chelyabinsk',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'CEK',
    state: 'Chelyabinsk'
  },
  {
    airportName: 'Bolshoye Savino Airport',
    city: 'Perm',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'PEE',
    state: 'Perm'
  },
  {
    airportName: 'Surgut Airport',
    city: 'Surgut',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'SGC',
    state: 'Khanty-Mansia'
  },
  {
    airportName: 'Koltsovo Airport',
    city: 'Yekaterinburg',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'SVX',
    state: 'Sverdlovsk'
  },
  {
    airportName: 'Roshchino International Airport',
    city: 'Tyumen',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'TJM',
    state: 'Tyumenskaya'
  },
  {
    airportName: 'Andizhan Airport',
    city: 'Andizhan',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'AZN',
    state: 'Andijon'
  },
  {
    airportName: 'Fergana Airport',
    city: 'Fergana',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'FEG',
    state: 'Fergana'
  },
  {
    airportName: 'Namangan Airport',
    city: 'Namangan',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'NMA',
    state: 'Namangan'
  },
  {
    airportName: 'Nukus Airport',
    city: 'Nukus',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'NCU',
    state: 'Karakalpakstan'
  },
  {
    airportName: 'Urgench Airport',
    city: 'Urgench',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'UGC',
    state: 'Xorazm'
  },
  {
    airportName: 'Navoi Airport',
    city: 'Navoi',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'NVI',
    state: 'Navoiy'
  },
  {
    airportName: 'Bukhara Airport',
    city: 'Bukhara',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'BHK',
    state: 'Bukhara'
  },
  {
    airportName: 'Karshi Airport',
    city: 'Karshi',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'KSQ',
    state: 'Qashqadaryo'
  },
  {
    airportName: 'Sugraly Airport',
    city: 'Zarafshan',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'AFS',
    state: 'Navoiy'
  },
  {
    airportName: 'Samarkand Airport',
    city: 'Samarkand',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'SKD',
    state: 'Samarkand'
  },
  {
    airportName: 'Termez Airport',
    city: 'Termez',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'TMJ',
    state: 'Surxondaryo'
  },
  {
    airportName: 'Tashkent International Airport',
    city: 'Tashkent',
    countryCode: 'UZ',
    countryName: 'Ouzbekistan',
    iata: 'TAS',
    state: 'Toshkent-Shahri'
  },
  {
    airportName: 'Domodedovo International Airport',
    city: 'Moscow',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'DME',
    state: 'Moscow-Oblast'
  },
  {
    airportName: 'Sheremetyevo International Airport',
    city: 'Moscow',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'SVO',
    state: 'Moscow-Oblast'
  },
  {
    airportName: 'Vnukovo International Airport',
    city: 'Moscow',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'VKO',
    state: 'Moscow'
  },
  {
    airportName: 'Nizhny Novgorod International Airport',
    city: 'Nizhny Novgorod',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'GOJ',
    state: 'Novgorod'
  },
  {
    airportName: 'Kazan International Airport',
    city: 'Kazan',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'KZN',
    state: 'Tatarstan'
  },
  {
    airportName: 'Ufa International Airport',
    city: 'Ufa',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'UFA',
    state: 'Bashkortostan'
  },
  {
    airportName: 'Kurumoch International Airport',
    city: 'Samara',
    countryCode: 'RU',
    countryName: 'Russie',
    iata: 'KUF',
    state: 'Samara'
  },
  {
    airportName: 'Sardar Vallabhbhai Patel International Airport',
    city: 'Ahmedabad',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'AMD',
    state: 'Gujarat'
  },
  {
    airportName: 'Chhatrapati Shivaji International Airport',
    city: 'Mumbai',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'BOM',
    state: 'Maharashtra'
  },
  {
    airportName: 'Dabolim Airport',
    city: 'Vasco da Gama',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'GOI',
    state: 'Goa'
  },
  {
    airportName: 'Devi Ahilyabai Holkar Airport',
    city: 'Indore',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'IDR',
    state: 'Madhya-Pradesh'
  },
  {
    airportName: 'Pune Airport',
    city: 'Pune',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'PNQ',
    state: 'Maharashtra'
  },
  {
    airportName: 'Bandaranaike International Colombo Airport',
    city: 'Colombo',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'CMB',
    state: 'Western'
  },
  {
    airportName: 'Anuradhapura Air Force Base',
    city: 'Anuradhapura',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'ACJ',
    state: 'North-Central'
  },
  {
    airportName: 'Batticaloa Airport',
    city: 'Batticaloa',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'BTC',
    state: 'Eastern-Province'
  },
  {
    airportName: 'Colombo Ratmalana Airport',
    city: 'Colombo',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'RML',
    state: 'Western'
  },
  {
    airportName: 'Amparai Airport',
    city: 'Amparai',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'GOY',
    state: 'Eastern-Province'
  },
  {
    airportName: 'Hingurakgoda Air Force Base',
    city: 'Polonnaruwa Town',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'MNH',
    state: 'North-Central'
  },
  {
    airportName: 'Kankesanturai Airport',
    city: 'Jaffna',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'JAF',
    state: 'Northern-Province'
  },
  {
    airportName: 'Koggala Airport',
    city: 'Galle',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'KCT',
    state: 'Southern'
  },
  {
    airportName: 'Sigiriya Air Force Base',
    city: 'Sigiriya',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'GIU',
    state: 'Central'
  },
  {
    airportName: 'China Bay Airport',
    city: 'Trincomalee',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'TRR',
    state: 'Eastern-Province'
  },
  {
    airportName: 'Weerawila International Airport',
    city: 'Weerawila',
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    iata: 'WRZ',
    state: 'Southern'
  },
  {
    airportName: 'Bagdogra Airport',
    city: 'Siliguri',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'IXB',
    state: 'West-Bengal'
  },
  {
    airportName: 'Biju Patnaik Airport',
    city: 'Bhubaneswar',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'BBI',
    state: 'Odisha'
  },
  {
    airportName: 'Netaji Subhash Chandra Bose International Airport',
    city: 'Kolkata',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'CCU',
    state: 'West-Bengal'
  },
  {
    airportName: 'Lokpriya Gopinath Bordoloi International Airport',
    city: 'Guwahati',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'GAU',
    state: 'Assam'
  },
  {
    airportName: 'Lok Nayak Jayaprakash Airport',
    city: 'Patna',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'PAT',
    state: 'Bihar'
  },
  {
    airportName: 'Vishakhapatnam Airport',
    city: 'Visakhapatnam',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'VTZ',
    state: 'Andhra-Pradesh'
  },
  {
    airportName: 'Barisal Airport',
    city: 'Barisal',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'BZL',
    state: 'Barisal'
  },
  {
    airportName: 'Coxs Bazar Airport',
    city: 'Coxs Bazar',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'CXB',
    state: 'Chittagong'
  },
  {
    airportName: 'Comilla Airport',
    city: 'Comilla',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'CLA',
    state: 'Chittagong'
  },
  {
    airportName: 'Shah Amanat International Airport',
    city: 'Chittagong',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'CGP',
    state: 'Chittagong'
  },
  {
    airportName: 'Dhaka / Hazrat Shahjalal International Airport',
    city: 'Dhaka',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'DAC',
    state: 'Dhaka'
  },
  {
    airportName: 'Ishurdi Airport',
    city: 'Ishurdi',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'IRD',
    state: 'Rajshahi-Division'
  },
  {
    airportName: 'Jessore Airport',
    city: 'Jashahor',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'JSR',
    state: 'Khulna'
  },
  {
    airportName: 'Lalmonirhat Airport',
    city: 'Lalmonirhat',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'LLJ',
    state: 'Rangpur-Division'
  },
  {
    airportName: 'Shah Mokhdum Airport',
    city: 'Rajshahi',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'RJH',
    state: 'Rajshahi-Division'
  },
  {
    airportName: 'Saidpur Airport',
    city: 'Saidpur',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'SPD',
    state: 'Rangpur-Division'
  },
  {
    airportName: 'Thakurgaon Airport',
    city: 'Thakurgaon',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'TKR',
    state: 'Rangpur-Division'
  },
  {
    airportName: 'Shamshernagar Airport',
    city: 'Shamshernagar',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'ZHM',
    state: 'Sylhet'
  },
  {
    airportName: 'Osmany International Airport',
    city: 'Sylhet',
    countryCode: 'BD',
    countryName: 'Bangladesh',
    iata: 'ZYL',
    state: 'Sylhet'
  },
  {
    airportName: 'Indira Gandhi International Airport',
    city: 'New Delhi',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'DEL',
    state: 'NCT'
  },
  {
    airportName: 'Jaipur International Airport',
    city: 'Jaipur',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'JAI',
    state: 'Rajasthan'
  },
  {
    airportName: 'Chaudhary Charan Singh International Airport',
    city: 'Lucknow',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'LKO',
    state: 'Uttar-Pradesh'
  },
  {
    airportName: 'Bengaluru International Airport',
    city: 'Bangalore',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'BLR',
    state: 'Karnataka'
  },
  {
    airportName: 'Coimbatore International Airport',
    city: 'Coimbatore',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'CJB',
    state: 'Tamil-Nadu'
  },
  {
    airportName: 'Cochin International Airport',
    city: 'Cochin',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'COK',
    state: 'Kerala'
  },
  {
    airportName: 'Calicut International Airport',
    city: 'Calicut',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'CCJ',
    state: 'Kerala'
  },
  {
    airportName: 'Rajiv Gandhi International Airport Shamshabad',
    city: 'Hyderabad',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'HYD',
    state: 'Telangana'
  },
  {
    airportName: 'Chennai International Airport',
    city: 'Chennai',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'MAA',
    state: 'Tamil-Nadu'
  },
  {
    airportName: 'Trivandrum International Airport',
    city: 'Trivandrum',
    countryCode: 'IN',
    countryName: 'Inde',
    iata: 'TRV',
    state: 'Kerala'
  },
  {
    airportName: 'Don Mueang International Airport',
    city: 'Bangkok',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'DMK',
    state: 'Bangkok'
  },
  {
    airportName: 'Suvarnabhumi Airport',
    city: 'Bangkok',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'BKK',
    state: 'Samut-Prakan'
  },
  {
    airportName: 'Chiang Mai International Airport',
    city: 'Chiang Mai',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'CNX',
    state: 'Chiang-Mai'
  },
  {
    airportName: 'Krabi Airport',
    city: 'Krabi',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'KBV',
    state: 'Krabi'
  },
  {
    airportName: 'Samui Airport',
    city: 'Na Thon (Ko Samui Island)',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'USM',
    state: 'Nakhon-Si-Thammarat'
  },
  {
    airportName: 'Phuket International Airport',
    city: 'Phuket',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'HKT',
    state: 'Phuket'
  },
  {
    airportName: 'Hat Yai International Airport',
    city: 'Hat Yai',
    countryCode: 'TH',
    countryName: 'Thailande',
    iata: 'HDY',
    state: 'Songkhla'
  },
  {
    airportName: 'Buon Ma Thuot Airport',
    city: 'Buon Ma Thuot',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'BMV',
    state: 'Ha-Nội'
  },
  {
    airportName: 'Chu Lai International Airport',
    city: 'Dung Quat Bay',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VCL',
    state: 'Dung Quat Bay'
  },
  {
    airportName: 'Cat Bi International Airport',
    city: 'Haiphong',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'HPH',
    state: 'Hải-Phong'
  },
  {
    airportName: 'Ca Mau Airport',
    city: 'Ca Mau City',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'CAH',
    state: 'Cần-Thơ'
  },
  {
    airportName: 'Cam Ranh Airport',
    city: 'Nha Trang',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'CXR',
    state: 'Khanh-Hoa'
  },
  {
    airportName: 'Co Ong Airport',
    city: 'Con Ong',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VCS',
    state: 'Ba-Rịa-Vung-Tau'
  },
  {
    airportName: 'Tra Noc Airport',
    city: 'Can Tho',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VCA',
    state: 'Lao-Cai'
  },
  {
    airportName: 'Dien Bien Phu Airport',
    city: 'Dien Bien Phu',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'DIN',
    state: 'Lai-Chau'
  },
  {
    airportName: 'Dong Hoi Airport',
    city: 'Dong Hoi',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VDH',
    state: 'Yen-Bai'
  },
  {
    airportName: 'Lien Khuong Airport',
    city: 'Dalat',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'DLI',
    state: 'Lam-Dồng'
  },
  {
    airportName: 'Da Nang International Airport',
    city: 'Da Nang',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'DAD',
    state: 'Da-Nẵng'
  },
  {
    airportName: 'Noi Bai International Airport',
    city: 'Hanoi',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'HAN',
    state: 'Ha-Nội'
  },
  {
    airportName: 'Na-San Airport',
    city: 'Son-La',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'SQH',
    state: 'Sơn-La'
  },
  {
    airportName: 'Nha Trang Air Base',
    city: 'Nha Trang',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'NHA',
    state: 'Khanh-Hoa'
  },
  {
    airportName: 'Phu Bai Airport',
    city: 'Hue',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'HUI',
    state: 'Bắc-Ninh'
  },
  {
    airportName: 'Phu Cat Airport',
    city: 'Quy Nohn',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'UIH',
    state: 'Khanh-Hoa'
  },
  {
    airportName: 'Pleiku Airport',
    city: 'Pleiku',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'PXU',
    state: 'Pleiku'
  },
  {
    airportName: 'Phu Quoc Airport',
    city: 'Duong Dong',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'PQC',
    state: 'Binh-Thuận'
  },
  {
    airportName: 'Phan Rang Airport',
    city: 'Phan Rang',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'PHA',
    state: 'Tuyen-Quang'
  },
  {
    airportName: 'Phan Thiet Airport',
    city: 'Phan Thiet',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'PHH',
    state: 'Binh-Thuận'
  },
  {
    airportName: 'Rach Gia Airport',
    city: 'Rach Gia',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VKG',
    state: 'Binh-Thuận'
  },
  {
    airportName: 'Dong Tac Airport',
    city: 'Tuy Hoa',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'TBB',
    state: 'Vinh-Long'
  },
  {
    airportName: 'Tan Son Nhat International Airport',
    city: 'Ho Chi Minh City',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'SGN',
    state: 'Ho-Chi-Minh-City'
  },
  {
    airportName: 'Vinh Airport',
    city: 'Vinh',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VII',
    state: 'Nghệ-An'
  },
  {
    airportName: 'Vung Tau Airport',
    city: 'Vung Tau',
    countryCode: 'VN',
    countryName: 'Viêtnam',
    iata: 'VTG',
    state: 'Ba-Rịa-Vung-Tau'
  },
  {
    airportName: 'Hasanuddin International Airport',
    city: 'Ujung Pandang-Celebes Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'UPG',
    state: 'South-Sulawesi'
  },
  {
    airportName: 'Ngurah Rai (Bali) International Airport',
    city: 'Denpasar-Bali Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'DPS',
    state: 'Bali'
  },
  {
    airportName: 'Bandara International Lombok Airport',
    city: 'Mataram',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'LOP',
    state: 'West-Nusa-Tenggara'
  },
  {
    airportName: 'Sepinggan International Airport',
    city: 'Balikpapan-Borneo Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'BPN',
    state: 'East-Kalimantan'
  },
  {
    airportName: 'Sam Ratulangi Airport',
    city: 'Manado-Celebes Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'MDC',
    state: 'North-Sulawesi'
  },
  {
    airportName: 'Syamsudin Noor Airport',
    city: 'Banjarmasin-Borneo Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'BDJ',
    state: 'South-Kalimantan'
  },
  {
    airportName: 'Adi Sutjipto International Airport',
    city: 'Yogyakarta-Java Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'JOG',
    state: 'Yogyakarta'
  },
  {
    airportName: 'Adi Sumarmo Wiryokusumo Airport',
    city: 'Sukarata(Solo)-Java Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'SOC',
    state: 'Central-Java'
  },
  {
    airportName: 'Juanda International Airport',
    city: 'Surabaya',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'SUB',
    state: 'East-Java'
  },
  {
    airportName: 'Achmad Yani Airport',
    city: 'Semarang-Java Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'SRG',
    state: 'Central-Java'
  },
  {
    airportName: 'Kuching International Airport',
    city: 'Kuching',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'KCH',
    state: 'Sarawak'
  },
  {
    airportName: 'Miri Airport',
    city: 'Miri',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'MYY',
    state: 'Sarawak'
  },
  {
    airportName: 'Kota Kinabalu International Airport',
    city: 'Kota Kinabalu',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'BKI',
    state: 'Sabah'
  },
  {
    airportName: 'Sultan Syarif Kasim Ii (Simpang Tiga) Airport',
    city: 'Pekanbaru-Sumatra Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'PKU',
    state: 'Riau'
  },
  {
    airportName: 'Husein Sastranegara International Airport',
    city: 'Bandung-Java Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'BDO',
    state: 'West-Java'
  },
  {
    airportName: 'Radin Inten II (Branti) Airport',
    city: 'Bandar Lampung-Sumatra Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'TKG',
    state: 'Bandar Lampung-Sumatra Island'
  },
  {
    airportName: 'Hang Nadim Airport',
    city: 'Batam Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'BTH',
    state: 'Batam Island'
  },
  {
    airportName: 'Halim Perdanakusuma International Airport',
    city: 'Jakarta',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'HLP',
    state: 'Jakarta'
  },
  {
    airportName: 'Soekarno-Hatta International Airport',
    city: 'Jakarta',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'CGK',
    state: 'Jakarta'
  },
  {
    airportName: 'Polonia International Airport',
    city: 'Medan-Sumatra Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'KNO',
    state: 'Medan-Sumatra Island'
  },
  {
    airportName: 'Supadio Airport',
    city: 'Pontianak-Borneo Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'PNK',
    state: 'West-Kalimantan'
  },
  {
    airportName: 'Sultan Mahmud Badaruddin Ii Airport',
    city: 'Palembang-Sumatra Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'PLM',
    state: 'South-Sumatra'
  },
  {
    airportName: 'Minangkabau Airport',
    city: 'Ketaping/Padang-Sumatra Island',
    countryCode: 'ID',
    countryName: 'Indonesie',
    iata: 'PDG',
    state: 'West-Sumatra'
  },
  {
    airportName: 'Senai International Airport',
    city: 'Senai',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'JHB',
    state: 'Johor'
  },
  {
    airportName: 'Kuala Lumpur International Airport',
    city: 'Kuala Lumpur',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'KUL',
    state: 'Kuala Lumpur'
  },
  {
    airportName: 'Langkawi International Airport',
    city: 'Langkawi',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'LGK',
    state: 'Kedah'
  },
  {
    airportName: 'Penang International Airport',
    city: 'Penang',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'PEN',
    state: 'Penang'
  },
  {
    airportName: 'Sultan Abdul Aziz Shah International Airport',
    city: 'Subang',
    countryCode: 'MY',
    countryName: 'Malaisie',
    iata: 'SZB',
    state: 'Subang'
  },
  {
    airportName: 'Seletar Airport',
    city: 'Seletar',
    countryCode: 'SG',
    countryName: 'Singapour',
    iata: 'XSP',
    state: 'Seletar'
  },
  {
    airportName: 'Singapore Changi International Airport',
    city: 'Singapore',
    countryCode: 'SG',
    countryName: 'Singapour',
    iata: 'SIN',
    state: 'North-East'
  },
  {
    airportName: 'Skye Bridge Ashaig Airport',
    city: 'Broadford',
    countryCode: 'GB',
    countryName: 'Ecosse',
    iata: 'SKL',
    state: 'Broadford'
  },
  {
    airportName: 'Brisbane Archerfield Airport',
    city: 'Brisbane',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'ACF',
    state: 'Queensland'
  },
  {
    airportName: 'Brisbane International Airport',
    city: 'Brisbane',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'BNE',
    state: 'Queensland'
  },
  {
    airportName: 'Gold Coast Airport',
    city: 'Gold Coast',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'OOL',
    state: 'Queensland'
  },
  {
    airportName: 'Cairns International Airport',
    city: 'Cairns',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'CNS',
    state: 'Queensland'
  },
  {
    airportName: 'Hobart International Airport',
    city: 'Hobart',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'HBA',
    state: 'Tasmania'
  },
  {
    airportName: 'Melbourne Moorabbin Airport',
    city: 'Melbourne',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'MBW',
    state: 'Victoria'
  },
  {
    airportName: 'Melbourne International Airport',
    city: 'Melbourne',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'MEL',
    state: 'Victoria'
  },
  {
    airportName: 'Adelaide International Airport',
    city: 'Adelaide',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'ADL',
    state: 'South-Australia'
  },
  {
    airportName: 'Darwin International Airport',
    city: 'Darwin',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'DRW',
    state: 'Northern-Territory'
  },
  {
    airportName: 'Perth Jandakot Airport',
    city: 'Perth',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'JAD',
    state: 'Western-Australia'
  },
  {
    airportName: 'Perth International Airport',
    city: 'Perth',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'PER',
    state: 'Western-Australia'
  },
  {
    airportName: 'Sydney Bankstown Airport',
    city: 'Sydney',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'BWU',
    state: 'New-South-Wales'
  },
  {
    airportName: 'Canberra International Airport',
    city: 'Canberra',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'CBR',
    state: 'ACT'
  },
  {
    airportName: 'Sydney Kingsford Smith International Airport',
    city: 'Sydney',
    countryCode: 'AU',
    countryName: 'Australie',
    iata: 'SYD',
    state: 'New-South-Wales'
  },
  {
    airportName: 'Beijing Capital International Airport',
    city: 'Beijing',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'PEK',
    state: 'Beijing'
  },
  {
    airportName: 'Baita International Airport',
    city: 'Hohhot',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'HET',
    state: 'Inner-Mongolia'
  },
  {
    airportName: 'Shijiazhuang Daguocun International Airport',
    city: 'Shijiazhuang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'SJW',
    state: 'Hebei'
  },
  {
    airportName: 'Tianjin Binhai International Airport',
    city: 'Tianjin',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'TSN',
    state: 'Tianjin'
  },
  {
    airportName: 'Taiyuan Wusu Airport',
    city: 'Taiyuan',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'TYN',
    state: 'Shanxi'
  },
  {
    airportName: 'Guangzhou Baiyun International Airport',
    city: 'Guangzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'CAN',
    state: 'Guangdong'
  },
  {
    airportName: 'Changsha Huanghua Airport',
    city: 'Changsha',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'CSX',
    state: 'Hunan'
  },
  {
    airportName: 'Guilin Liangjiang International Airport',
    city: 'Guilin City',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'KWL',
    state: 'Guangxi'
  },
  {
    airportName: 'Nanning Wuxu Airport',
    city: 'Nanning',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'NNG',
    state: 'Guangxi'
  },
  {
    airportName: 'Zhuhai Airport',
    city: 'Zhuhai',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'ZUH',
    state: 'Guangdong'
  },
  {
    airportName: 'Shenzhen Baoan International Airport',
    city: 'Shenzhen',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'SZX',
    state: 'Guangdong'
  },
  {
    airportName: 'Xinzheng Airport',
    city: 'Zhengzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'CGO',
    state: 'Henan'
  },
  {
    airportName: 'Wuhan Tianhe International Airport',
    city: 'Wuhan',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'WUH',
    state: 'Hubei'
  },
  {
    airportName: 'Haikou Meilan International Airport',
    city: 'Haikou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'HAK',
    state: 'Hainan'
  },
  {
    airportName: 'Sanya Phoenix International Airport',
    city: 'Sanya',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'SYX',
    state: 'Hainan'
  },
  {
    airportName: 'Lanzhou Zhongchuan Airport',
    city: 'Lanzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'LHW',
    state: 'Gansu'
  },
  {
    airportName: 'Xian Xianyang International Airport',
    city: 'Xianyang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'XIY',
    state: 'Shaanxi'
  },
  {
    airportName: 'Lijiang Airport',
    city: 'Lijiang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'LJG',
    state: 'Yunnan'
  },
  {
    airportName: 'Kunming Wujiaba International Airport',
    city: 'Kunming',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'KMG',
    state: 'Yunnan'
  },
  {
    airportName: 'Xiamen Gaoqi International Airport',
    city: 'Xiamen',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'XMN',
    state: 'Fujian'
  },
  {
    airportName: 'Nanchang Changbei International Airport',
    city: 'Nanchang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'KHN',
    state: 'Jiangxi'
  },
  {
    airportName: 'Fuzhou Changle International Airport',
    city: 'Fuzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'FOC',
    state: 'Fujian'
  },
  {
    airportName: 'Hangzhou Xiaoshan International Airport',
    city: 'Hangzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'HGH',
    state: 'Zhejiang'
  },
  {
    airportName: 'Yaoqiang Airport',
    city: 'Jinan',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'TNA',
    state: 'Shandong'
  },
  {
    airportName: 'Ningbo Lishe International Airport',
    city: 'Ningbo',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'NGB',
    state: 'Zhejiang'
  },
  {
    airportName: 'Nanjing Lukou Airport',
    city: 'Nanjing',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'NKG',
    state: 'Jiangsu'
  },
  {
    airportName: 'Hefei Luogang International Airport',
    city: 'Hefei',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'HFE',
    state: 'Anhui'
  },
  {
    airportName: 'Shanghai Pudong International Airport',
    city: 'Shanghai',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'PVG',
    state: 'Shanghai'
  },
  {
    airportName: 'Liuting Airport',
    city: 'Qingdao',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'TAO',
    state: 'Shandong'
  },
  {
    airportName: 'Quanzhou Airport',
    city: 'Quanzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'JJN',
    state: 'Fujian'
  },
  {
    airportName: 'Shanghai Hongqiao International Airport',
    city: 'Shanghai',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'SHA',
    state: 'Shanghai'
  },
  {
    airportName: 'Sunan Shuofang International Airport',
    city: 'Wuxi',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'WUX',
    state: 'Jiangsu'
  },
  {
    airportName: 'Wenzhou Yongqiang Airport',
    city: 'Wenzhou',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'WNZ',
    state: 'Zhejiang'
  },
  {
    airportName: 'Chongqing Jiangbei International Airport',
    city: 'Chongqing',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'CKG',
    state: 'Chongqing'
  },
  {
    airportName: 'Longdongbao Airport',
    city: 'Guiyang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'KWE',
    state: 'Guizhou'
  },
  {
    airportName: 'Chengdu Shuangliu International Airport',
    city: 'Chengdu',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'CTU',
    state: 'Sichuan'
  },
  {
    airportName: 'Urumqi Diwopu International Airport',
    city: 'Urumqi',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'URC',
    state: 'Xinjiang'
  },
  {
    airportName: 'Longjia Airport',
    city: 'Changchun',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'CGQ',
    state: 'Jilin'
  },
  {
    airportName: 'Taiping Airport',
    city: 'Harbin',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'HRB',
    state: 'Heilongjiang'
  },
  {
    airportName: 'Mudanjiang Hailang International Airport',
    city: 'Mudanjiang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'MDG',
    state: 'Heilongjiang'
  },
  {
    airportName: 'Zhoushuizi Airport',
    city: 'Dalian',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'DLC',
    state: 'Liaoning'
  },
  {
    airportName: 'Taoxian Airport',
    city: 'Shenyang',
    countryCode: 'CN',
    countryName: 'Chine',
    iata: 'SHE',
    state: 'Liaoning'
  }
];

export default airports;
