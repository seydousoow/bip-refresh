export interface TAirline {
  id?: number;
  name: string;
  iata: string;
}

const airlines: TAirline[] = [
  {
    id: 1,
    name: 'Air Senegal S.A',
    iata: 'HC'
  },
  {
    id: 2,
    name: 'Adam Air',
    iata: 'KI'
  },
  {
    id: 3,
    name: 'Afrinat International Airlines',
    iata: 'Q9'
  },
  {
    id: 4,
    name: 'Aigle Azur',
    iata: 'ZI'
  },
  {
    id: 5,
    name: 'Aero Asia International',
    iata: 'E4'
  },
  {
    id: 6,
    name: 'Air Ukraine',
    iata: '6U'
  },
  {
    id: 7,
    name: 'Air Serbia',
    iata: 'JU'
  },
  {
    id: 8,
    name: 'Afriqiyah Airways',
    iata: '8U'
  },
  {
    id: 9,
    name: 'Ozark Air Lines',
    iata: 'OZ'
  },
  {
    id: 10,
    name: 'Mandarin Airlines',
    iata: 'AE'
  },
  {
    id: 11,
    name: 'Eastwind Airlines',
    iata: 'W9'
  },
  {
    id: 12,
    name: 'Abacus International',
    iata: '1B'
  },
  {
    id: 13,
    name: 'Caspian Airlines',
    iata: 'RV'
  },
  {
    id: 14,
    name: 'Benin Golf Air',
    iata: 'A8'
  },
  {
    id: 15,
    name: 'Kyrgyzstan',
    iata: 'QH'
  },
  {
    id: 16,
    name: 'Air Turks and Caicos',
    iata: 'JY'
  },
  {
    id: 17,
    name: 'Express Air Cargo',
    iata: '7A'
  },
  {
    id: 18,
    name: 'Interjet',
    iata: '4O'
  },
  {
    id: 19,
    name: '40-Mile Air',
    iata: 'Q5'
  },
  {
    id: 20,
    name: 'Bulgarian Air Charter',
    iata: '1T'
  },
  {
    id: 21,
    name: 'Georgian National Airlines',
    iata: 'QB'
  },
  {
    id: 22,
    name: 'Air Hong Kong',
    iata: 'LD'
  },
  {
    id: 23,
    name: 'Air Europa',
    iata: 'UX'
  },
  {
    id: 24,
    name: 'Air Macau',
    iata: 'NX'
  },
  {
    id: 25,
    name: 'Air Midwest',
    iata: 'ZV'
  },
  {
    id: 26,
    name: 'Air Seychelles',
    iata: 'HM'
  },
  {
    id: 27,
    name: 'Air France',
    iata: 'AF'
  },
  {
    id: 28,
    name: 'Air Caledonie International',
    iata: 'SB'
  },
  {
    id: 29,
    name: 'SAETA',
    iata: 'EH'
  },
  {
    id: 30,
    name: 'Air Wisconsin',
    iata: 'ZW'
  },
  {
    id: 31,
    name: 'Air Gabon',
    iata: 'GN'
  },
  {
    id: 32,
    name: 'Air Japan',
    iata: 'NQ'
  },
  {
    id: 33,
    name: 'SwedJet Airways',
    iata: 'VD'
  },
  {
    id: 34,
    name: 'Tigerair Australia',
    iata: 'TT'
  },
  {
    id: 35,
    name: 'Air North Charter - Canada',
    iata: '4N'
  },
  {
    id: 36,
    name: 'Eagle Airways',
    iata: 'NZ'
  },
  {
    id: 37,
    name: 'Air Malawi',
    iata: 'QM'
  },
  {
    id: 38,
    name: 'Pantanal Linhas Aéreas',
    iata: 'P8'
  },
  {
    id: 39,
    name: 'BMI Regional',
    iata: 'BM'
  },
  {
    id: 40,
    name: 'Air Georgian',
    iata: 'ZX'
  },
  {
    id: 41,
    name: 'Gujarat Airways',
    iata: 'G8'
  },
  {
    id: 42,
    name: 'Tobruk Air',
    iata: '7T'
  },
  {
    id: 43,
    name: 'Mars RK',
    iata: '6V'
  },
  {
    id: 44,
    name: 'All Nippon Airways',
    iata: 'NH'
  },
  {
    id: 45,
    name: 'ATA Airlines',
    iata: 'TZ'
  },
  {
    id: 46,
    name: 'Air Cargo Carriers',
    iata: '2Q'
  },
  {
    id: 47,
    name: 'Volotea',
    iata: 'V7'
  },
  {
    id: 48,
    name: 'Air Berlin',
    iata: 'AB'
  },
  {
    id: 49,
    name: 'Air Sinai',
    iata: '4D'
  },
  {
    id: 50,
    name: 'Air Armenia',
    iata: 'QN'
  },
  {
    id: 51,
    name: 'Air India Limited',
    iata: 'AI'
  },
  {
    id: 52,
    name: 'Air Saint Pierre',
    iata: 'PJ'
  },
  {
    id: 53,
    name: 'Air Southwest',
    iata: 'SZ'
  },
  {
    id: 54,
    name: 'Shanxi Airlines',
    iata: '8C'
  },
  {
    id: 55,
    name: 'Air Vanuatu',
    iata: 'NF'
  },
  {
    id: 56,
    name: 'Monarch Airlines',
    iata: 'ZB'
  },
  {
    id: 57,
    name: 'Macair Airlines',
    iata: 'CC'
  },
  {
    id: 58,
    name: 'Syrian Arab Airlines',
    iata: 'RB'
  },
  {
    id: 59,
    name: 'Air Tahiti Nui',
    iata: 'TN'
  },
  {
    id: 60,
    name: 'Air Namibia',
    iata: 'SW'
  },
  {
    id: 61,
    name: 'Dirgantara Air Service',
    iata: 'AW'
  },
  {
    id: 62,
    name: 'People\\\'s Viennaline',
    iata: 'PE'
  },
  {
    id: 63,
    name: 'Jetstar Hong Kong Airways',
    iata: 'JM'
  },
  {
    id: 64,
    name: 'Air Wales',
    iata: '6G'
  },
  {
    id: 65,
    name: 'Transportes Aéreos Nacionales',
    iata: 'TX'
  },
  {
    id: 66,
    name: 'Air India Express',
    iata: 'IX'
  },
  {
    id: 67,
    name: 'Air Baltic',
    iata: 'BT'
  },
  {
    id: 68,
    name: 'Ellinair',
    iata: 'EL'
  },
  {
    id: 69,
    name: 'Air Nostrum',
    iata: 'YW'
  },
  {
    id: 70,
    name: 'Air Niugini',
    iata: 'PX'
  },
  {
    id: 71,
    name: 'Air Arabia',
    iata: 'G9'
  },
  {
    id: 72,
    name: 'Air Canada',
    iata: 'AC'
  },
  {
    id: 73,
    name: 'Air One',
    iata: 'AP'
  },
  {
    id: 74,
    name: 'SkyStar Airways',
    iata: 'XT'
  },
  {
    id: 75,
    name: 'Air Zimbabwe',
    iata: 'UM'
  },
  {
    id: 76,
    name: 'Air Sahara',
    iata: 'S2'
  },
  {
    id: 77,
    name: 'Air Tanzania',
    iata: 'TC'
  },
  {
    id: 78,
    name: 'Air Burkina',
    iata: '2J'
  },
  {
    id: 79,
    name: 'Air Malta',
    iata: 'KM'
  },
  {
    id: 80,
    name: 'Air Togo',
    iata: 'YT'
  },
  {
    id: 81,
    name: 'Allegiant Air',
    iata: 'G4'
  },
  {
    id: 82,
    name: 'North Flying',
    iata: 'M3'
  },
  {
    id: 83,
    name: 'Antrak Air',
    iata: 'O4'
  },
  {
    id: 84,
    name: 'ABX Air',
    iata: 'GB'
  },
  {
    id: 85,
    name: 'Wright Air Service',
    iata: '8V'
  },
  {
    id: 86,
    name: 'Air Tindi',
    iata: '8T'
  },
  {
    id: 87,
    name: 'Adria Airways',
    iata: 'JP'
  },
  {
    id: 88,
    name: 'Aegean Airlines',
    iata: 'A3'
  },
  {
    id: 89,
    name: 'Aerogal',
    iata: '2K'
  },
  {
    id: 90,
    name: 'KD Avia',
    iata: 'KD'
  },
  {
    id: 91,
    name: 'Alaska Central Express',
    iata: 'KO'
  },
  {
    id: 92,
    name: 'Virgin America',
    iata: 'VX'
  },
  {
    id: 93,
    name: 'Aloha Air Cargo',
    iata: 'KH'
  },
  {
    id: 94,
    name: 'American Airlines',
    iata: 'AA'
  },
  {
    id: 95,
    name: 'Trans States Airlines',
    iata: 'AX'
  },
  {
    id: 96,
    name: 'Ansett Australia',
    iata: 'AN'
  },
  {
    id: 97,
    name: 'Astraeus',
    iata: '5W'
  },
  {
    id: 98,
    name: 'Aerosvit Airlines',
    iata: 'VV'
  },
  {
    id: 99,
    name: 'Edelweiss Air',
    iata: 'WK'
  },
  {
    id: 100,
    name: 'Reno Air',
    iata: 'QQ'
  },
  {
    id: 101,
    name: 'Ariana Afghan Airlines',
    iata: 'FG'
  },
  {
    id: 102,
    name: 'Flyglobespan',
    iata: 'Y2'
  },
  {
    id: 103,
    name: 'Aeroflot Russian Airlines',
    iata: 'SU'
  },
  {
    id: 104,
    name: 'VivaColombia',
    iata: '5Z'
  },
  {
    id: 105,
    name: 'DonbassAero',
    iata: '5D'
  },
  {
    id: 106,
    name: 'Amadeus IT Group',
    iata: '1A'
  },
  {
    id: 107,
    name: 'LATAM Brasil',
    iata: 'JJ'
  },
  {
    id: 108,
    name: 'Airstars',
    iata: 'PL'
  },
  {
    id: 109,
    name: 'Atlas Blue',
    iata: '8A'
  },
  {
    id: 110,
    name: 'Air Alpha Greenland',
    iata: 'GD'
  },
  {
    id: 111,
    name: 'Aeromist-Kharkiv',
    iata: 'HT'
  },
  {
    id: 112,
    name: 'Azerbaijan Airlines',
    iata: 'J2'
  },
  {
    id: 113,
    name: 'Avies',
    iata: 'U3'
  },
  {
    id: 114,
    name: 'Yute Air Alaska',
    iata: '4Y'
  },
  {
    id: 115,
    name: 'Alpine Air Express',
    iata: '5A'
  },
  {
    id: 116,
    name: 'Aero Services Executive',
    iata: 'W4'
  },
  {
    id: 117,
    name: 'Arkia Israel Airlines',
    iata: 'IZ'
  },
  {
    id: 118,
    name: 'Amerijet International',
    iata: 'M6'
  },
  {
    id: 119,
    name: 'Air Kiribati',
    iata: '4A'
  },
  {
    id: 120,
    name: 'ExpressJet',
    iata: 'EV'
  },
  {
    id: 121,
    name: 'Phoenix Airways',
    iata: 'HP'
  },
  {
    id: 122,
    name: 'Aeropostal Alas de Venezuela',
    iata: 'VH'
  },
  {
    id: 123,
    name: 'Aeroméxico',
    iata: 'AM'
  },
  {
    id: 124,
    name: 'Trans Mediterranean Airlines',
    iata: 'TL'
  },
  {
    id: 125,
    name: 'Omni Air International',
    iata: 'OY'
  },
  {
    id: 126,
    name: 'Wings Air',
    iata: 'IW'
  },
  {
    id: 127,
    name: 'AVCOM',
    iata: 'J6'
  },
  {
    id: 128,
    name: 'Aero VIP',
    iata: '2D'
  },
  {
    id: 129,
    name: 'VIVA Aerobus',
    iata: 'VB'
  },
  {
    id: 130,
    name: 'Asia Overnight Express',
    iata: 'OE'
  },
  {
    id: 131,
    name: 'Aero Flight',
    iata: 'GV'
  },
  {
    id: 132,
    name: 'Vanilla Air',
    iata: 'JW'
  },
  {
    id: 133,
    name: 'Aerocondor',
    iata: '2B'
  },
  {
    id: 134,
    name: 'Aerolíneas Argentinas',
    iata: 'AR'
  },
  {
    id: 135,
    name: 'Alaska Airlines, Inc',
    iata: 'AS'
  },
  {
    id: 136,
    name: 'Oasis International Airlines',
    iata: 'OB'
  },
  {
    id: 138,
    name: 'Airlines of Tasmania',
    iata: 'FO'
  },
  {
    id: 139,
    name: 'Austrian Airlines',
    iata: 'OS'
  },
  {
    id: 140,
    name: 'Augsburg Airways',
    iata: 'IQ'
  },
  {
    id: 141,
    name: 'SkyKing Turks and Caicos Airways',
    iata: 'RU'
  },
  {
    id: 142,
    name: 'Calm Air',
    iata: 'MO'
  },
  {
    id: 143,
    name: 'Gemini Air Cargo',
    iata: 'GR'
  },
  {
    id: 144,
    name: 'Neos',
    iata: 'NO'
  },
  {
    id: 145,
    name: 'Austral Líneas Aéreas',
    iata: 'AU'
  },
  {
    id: 146,
    name: 'Australian Airlines',
    iata: 'AO'
  },
  {
    id: 147,
    name: 'Avianca - Aerovías del Continente Americano S.A',
    iata: 'AV'
  },
  {
    id: 148,
    name: 'Avianca Argentina',
    iata: 'A0'
  },
  {
    id: 149,
    name: 'Avianca Brazil',
    iata: 'O6'
  },
  {
    id: 150,
    name: 'Airlink Zambia',
    iata: 'K8'
  },
  {
    id: 151,
    name: 'Air Bangladesh',
    iata: 'B9'
  },
  {
    id: 152,
    name: 'Hellas Jet',
    iata: 'HJ'
  },
  {
    id: 153,
    name: 'Air Bridge Carriers',
    iata: 'AK'
  },
  {
    id: 154,
    name: 'FlyAsianXpress',
    iata: 'D7'
  },
  {
    id: 155,
    name: 'Polynesian Blue',
    iata: 'DJ'
  },
  {
    id: 156,
    name: 'AirAsia India',
    iata: 'I5'
  },
  {
    id: 157,
    name: 'Air Santo Domingo',
    iata: 'EX'
  },
  {
    id: 158,
    name: 'Atlant-Soyuz Airlines',
    iata: '3G'
  },
  {
    id: 159,
    name: 'Alitalia',
    iata: 'AZ'
  },
  {
    id: 160,
    name: 'Líneas Aéreas Azteca',
    iata: 'ZE'
  },
  {
    id: 161,
    name: 'Cielos Airlines',
    iata: 'A2'
  },
  {
    id: 162,
    name: 'Aserca Airlines',
    iata: 'R7'
  },
  {
    id: 163,
    name: 'Aviaexpress',
    iata: 'RX'
  },
  {
    id: 164,
    name: 'American Eagle Airlines',
    iata: 'MQ'
  },
  {
    id: 165,
    name: 'Sama Airlines',
    iata: 'ZS'
  },
  {
    id: 166,
    name: 'Airshop',
    iata: 'FF'
  },
  {
    id: 167,
    name: 'Air Ivoire',
    iata: 'VU'
  },
  {
    id: 168,
    name: 'Air Botswana',
    iata: 'BP'
  },
  {
    id: 169,
    name: 'Tianjin Airlines',
    iata: 'GS'
  },
  {
    id: 170,
    name: 'Air Tahiti',
    iata: 'VT'
  },
  {
    id: 171,
    name: 'Air Urga',
    iata: '3N'
  },
  {
    id: 172,
    name: 'Air VIA',
    iata: 'VL'
  },
  {
    id: 173,
    name: 'Keewatin Air',
    iata: 'FK'
  },
  {
    id: 174,
    name: 'Avirex',
    iata: 'G2'
  },
  {
    id: 175,
    name: 'Iliamna Air Taxi',
    iata: 'V8'
  },
  {
    id: 176,
    name: 'Khalifa Airways',
    iata: 'K6'
  },
  {
    id: 177,
    name: 'C.A.I. Second',
    iata: 'VE'
  },
  {
    id: 178,
    name: 'Royal Aruban Airlines',
    iata: 'V5'
  },
  {
    id: 179,
    name: 'Air China',
    iata: 'CA'
  },
  {
    id: 180,
    name: 'Aero Condor Peru',
    iata: 'Q6'
  },
  {
    id: 181,
    name: 'Fly One',
    iata: '5F'
  },
  {
    id: 182,
    name: 'Air Corridor',
    iata: 'QC'
  },
  {
    id: 183,
    name: 'Air Central',
    iata: 'NV'
  },
  {
    id: 184,
    name: 'Cargolux',
    iata: 'CV'
  },
  {
    id: 185,
    name: 'Air Marshall Islands',
    iata: 'CW'
  },
  {
    id: 186,
    name: 'Interavia Airlines',
    iata: 'ZA'
  },
  {
    id: 187,
    name: 'Air Algérie',
    iata: 'AH'
  },
  {
    id: 188,
    name: 'Astar Air Cargo',
    iata: 'ER'
  },
  {
    id: 189,
    name: 'Juneyao Airlines',
    iata: 'HO'
  },
  {
    id: 190,
    name: 'Air Dolomiti',
    iata: 'EN'
  },
  {
    id: 191,
    name: 'Mount Cook Airlines',
    iata: 'NM'
  },
  {
    id: 192,
    name: 'Aero Airlines',
    iata: 'EE'
  },
  {
    id: 193,
    name: 'Air City',
    iata: '4F'
  },
  {
    id: 194,
    name: 'Aer Lingus',
    iata: 'EI'
  },
  {
    id: 195,
    name: 'Alpi Eagles',
    iata: 'E8'
  },
  {
    id: 196,
    name: 'Air São Tomé and Príncipe',
    iata: 'KY'
  },
  {
    id: 197,
    name: 'Pegasus Airlines',
    iata: 'PC'
  },
  {
    id: 198,
    name: 'Transports et Travaux Aériens de Madagascar',
    iata: 'OF'
  },
  {
    id: 199,
    name: 'Fiji Airways',
    iata: 'FJ'
  },
  {
    id: 200,
    name: 'Atlantic Airways',
    iata: 'RC'
  },
  {
    id: 201,
    name: 'Air Iceland',
    iata: 'NY'
  },
  {
    id: 202,
    name: 'Air Philippines',
    iata: '2P'
  },
  {
    id: 203,
    name: 'Air Guinee Express',
    iata: '2U'
  },
  {
    id: 204,
    name: 'Amber Air',
    iata: '0A'
  },
  {
    id: 205,
    name: 'Air Georgia',
    iata: 'DA'
  },
  {
    id: 206,
    name: 'Miami Air International',
    iata: 'GL'
  },
  {
    id: 207,
    name: 'Allegro',
    iata: 'LL'
  },
  {
    id: 208,
    name: 'Atlas Air',
    iata: '5Y'
  },
  {
    id: 209,
    name: 'Cargo 360',
    iata: 'GG'
  },
  {
    id: 210,
    name: 'Izair',
    iata: 'H9'
  },
  {
    id: 211,
    name: 'AIRDO',
    iata: 'HD'
  },
  {
    id: 212,
    name: 'Atyrau Air Ways',
    iata: 'IP'
  },
  {
    id: 213,
    name: 'Air Canada Jazz',
    iata: 'QK'
  },
  {
    id: 214,
    name: 'Atlasjet',
    iata: 'KK'
  },
  {
    id: 215,
    name: 'Air Koryo',
    iata: 'JS'
  },
  {
    id: 216,
    name: 'Air Astana',
    iata: 'KC'
  },
  {
    id: 217,
    name: 'Albanian Airlines',
    iata: 'LV'
  },
  {
    id: 218,
    name: 'Air Guyane Express',
    iata: '3S'
  },
  {
    id: 219,
    name: 'Alidaunia',
    iata: 'D4'
  },
  {
    id: 220,
    name: 'Thai Sky Airlines',
    iata: '9I'
  },
  {
    id: 221,
    name: 'Aerolane',
    iata: 'XL'
  },
  {
    id: 222,
    name: 'Hongtu Airlines',
    iata: 'A6'
  },
  {
    id: 223,
    name: 'Tulip Air',
    iata: 'TD'
  },
  {
    id: 224,
    name: 'Air Luxor GB',
    iata: 'L8'
  },
  {
    id: 225,
    name: 'Air Luxor',
    iata: 'LK'
  },
  {
    id: 226,
    name: 'Air Mauritius',
    iata: 'MK'
  },
  {
    id: 227,
    name: 'Air Madagascar',
    iata: 'MD'
  },
  {
    id: 228,
    name: 'Air Moldova',
    iata: '9U'
  },
  {
    id: 229,
    name: 'Teamline Air',
    iata: 'L9'
  },
  {
    id: 230,
    name: 'Air Plus Comet',
    iata: 'A7'
  },
  {
    id: 231,
    name: 'Origin Pacific Airways',
    iata: 'QO'
  },
  {
    id: 232,
    name: 'Air Mauritanie',
    iata: 'MR'
  },
  {
    id: 233,
    name: 'Albarka Air',
    iata: 'F4'
  },
  {
    id: 234,
    name: 'Aero Contractors',
    iata: 'AJ'
  },
  {
    id: 235,
    name: 'China Postal Airlines',
    iata: '8Y'
  },
  {
    id: 236,
    name: 'Aeropelican Air Services',
    iata: 'OT'
  },
  {
    id: 237,
    name: 'Azul Linhas Aéreas Brasileiras',
    iata: 'AD'
  },
  {
    id: 238,
    name: 'Air Class Líneas Aéreas',
    iata: 'QD'
  },
  {
    id: 239,
    name: 'Travel Service',
    iata: 'QS'
  },
  {
    id: 240,
    name: 'Air Mobility Command',
    iata: 'MC'
  },
  {
    id: 241,
    name: 'Stobart Air',
    iata: 'RE'
  },
  {
    id: 242,
    name: 'Air Austral',
    iata: 'UU'
  },
  {
    id: 243,
    name: 'Silk Way Airlines',
    iata: 'ZP'
  },
  {
    id: 244,
    name: 'Asian Spirit',
    iata: '6K'
  },
  {
    id: 245,
    name: 'Hop!',
    iata: 'A5'
  },
  {
    id: 246,
    name: 'Línea Aérea de Servicio Ejecutivo Regional',
    iata: 'QL'
  },
  {
    id: 247,
    name: 'Yakutia Airlines',
    iata: 'R3'
  },
  {
    id: 248,
    name: 'Armenian International Airways',
    iata: 'MV'
  },
  {
    id: 249,
    name: 'Air Salone',
    iata: '2O'
  },
  {
    id: 250,
    name: 'Armavia',
    iata: 'U8'
  },
  {
    id: 251,
    name: 'Baltia Air Lines',
    iata: 'BQ'
  },
  {
    id: 252,
    name: 'AeroRepública',
    iata: 'P5'
  },
  {
    id: 253,
    name: 'Bluebird Cargo',
    iata: 'BF'
  },
  {
    id: 254,
    name: 'AeroSur',
    iata: '5L'
  },
  {
    id: 255,
    name: 'Aero California',
    iata: 'JR'
  },
  {
    id: 256,
    name: 'Avient Aviation',
    iata: 'Z3'
  },
  {
    id: 257,
    name: 'Air Slovakia',
    iata: 'GM'
  },
  {
    id: 258,
    name: 'Aeromar',
    iata: 'VW'
  },
  {
    id: 259,
    name: 'TUI Airlines Netherlands',
    iata: 'OR'
  },
  {
    id: 260,
    name: 'Airlines PNG',
    iata: 'CG'
  },
  {
    id: 261,
    name: 'Iberworld',
    iata: 'TY'
  },
  {
    id: 262,
    name: 'AirTran Airways',
    iata: 'FL'
  },
  {
    id: 263,
    name: 'Air Transat',
    iata: 'TS'
  },
  {
    id: 264,
    name: 'Avialeasing Aviation Company',
    iata: 'EC'
  },
  {
    id: 265,
    name: 'Aero-Charter Ukraine',
    iata: 'DW'
  },
  {
    id: 266,
    name: 'USA Jet Airlines',
    iata: 'U7'
  },
  {
    id: 267,
    name: 'Alrosa Air Company',
    iata: '6R'
  },
  {
    id: 268,
    name: 'Aviacsa',
    iata: '6A'
  },
  {
    id: 269,
    name: 'Skyways Express',
    iata: 'JZ'
  },
  {
    id: 270,
    name: 'MAP-Management and Planung',
    iata: 'AQ'
  },
  {
    id: 271,
    name: 'Zip',
    iata: '3J'
  },
  {
    id: 272,
    name: 'Swedline Express',
    iata: 'SM'
  },
  {
    id: 273,
    name: 'British Mediterranean Airways',
    iata: 'KJ'
  },
  {
    id: 274,
    name: 'Coast Air',
    iata: 'BX'
  },
  {
    id: 275,
    name: 'Aryan Cargo Express',
    iata: 'YE'
  },
  {
    id: 276,
    name: 'Vietjet Air',
    iata: 'VJ'
  },
  {
    id: 277,
    name: 'Air Arabia Maroc',
    iata: '3O'
  },
  {
    id: 278,
    name: 'Avion Express',
    iata: 'X9'
  },
  {
    id: 279,
    name: 'Beijing Capital Airlines',
    iata: 'JD'
  },
  {
    id: 280,
    name: 'Interlink Airlines',
    iata: 'ID'
  },
  {
    id: 281,
    name: 'British Airways',
    iata: 'BA'
  },
  {
    id: 282,
    name: 'Biman Bangladesh Airlines',
    iata: 'BG'
  },
  {
    id: 283,
    name: 'Bankair',
    iata: 'B4'
  },
  {
    id: 284,
    name: 'CityJet',
    iata: 'WX'
  },
  {
    id: 285,
    name: 'Keystone Air Service',
    iata: 'BZ'
  },
  {
    id: 286,
    name: 'JetSMART',
    iata: 'JA'
  },
  {
    id: 287,
    name: 'Jordan International Air Cargo',
    iata: 'J4'
  },
  {
    id: 288,
    name: 'BH Air',
    iata: '8H'
  },
  {
    id: 289,
    name: 'Belair Airlines',
    iata: '4T'
  },
  {
    id: 290,
    name: 'Bahamasair',
    iata: 'UP'
  },
  {
    id: 291,
    name: 'Bringer Air Cargo Taxi Aéreo',
    iata: 'E6'
  },
  {
    id: 292,
    name: 'Balkan Bulgarian Airlines',
    iata: 'LZ'
  },
  {
    id: 293,
    name: 'Transmile Air Services',
    iata: 'TH'
  },
  {
    id: 294,
    name: 'British International Helicopters',
    iata: 'BS'
  },
  {
    id: 295,
    name: 'Bangkok Airways',
    iata: 'PG'
  },
  {
    id: 296,
    name: 'Blue1',
    iata: 'KF'
  },
  {
    id: 297,
    name: 'Bearskin Lake Air Service',
    iata: 'JV'
  },
  {
    id: 298,
    name: 'Bellview Airlines',
    iata: 'B3'
  },
  {
    id: 299,
    name: 'BMI',
    iata: 'BD'
  },
  {
    id: 300,
    name: 'WOW air',
    iata: 'WW'
  },
  {
    id: 301,
    name: 'Bemidji Airlines',
    iata: 'CH'
  },
  {
    id: 302,
    name: 'Bouraq Indonesia Airlines',
    iata: 'BO'
  },
  {
    id: 303,
    name: 'Blue Panorama Airlines',
    iata: 'BV'
  },
  {
    id: 304,
    name: 'BRA-Transportes Aéreos',
    iata: '7R'
  },
  {
    id: 305,
    name: 'Bering Air',
    iata: '8E'
  },
  {
    id: 306,
    name: 'Belavia Belarusian Airlines',
    iata: 'B2'
  },
  {
    id: 307,
    name: 'Horizon Airlines',
    iata: 'BN'
  },
  {
    id: 308,
    name: 'Big Sky Airlines',
    iata: 'GQ'
  },
  {
    id: 309,
    name: 'Star1 Airlines',
    iata: 'V9'
  },
  {
    id: 310,
    name: 'Batavia Air',
    iata: 'Y6'
  },
  {
    id: 311,
    name: 'Buryat Airlines Aircompany',
    iata: 'BU'
  },
  {
    id: 312,
    name: 'Berjaya Air',
    iata: 'J8'
  },
  {
    id: 313,
    name: 'Blue Wings',
    iata: 'QW'
  },
  {
    id: 314,
    name: 'Brussels Airlines',
    iata: 'SN'
  },
  {
    id: 315,
    name: 'Brit Air',
    iata: 'DB'
  },
  {
    id: 316,
    name: 'Boston-Maine Airways',
    iata: 'E9'
  },
  {
    id: 317,
    name: 'Binter Canarias',
    iata: 'NT'
  },
  {
    id: 318,
    name: 'Blue Air',
    iata: '0B'
  },
  {
    id: 319,
    name: 'Bulgaria Air',
    iata: 'FB'
  },
  {
    id: 320,
    name: 'Barents AirLink',
    iata: '8N'
  },
  {
    id: 321,
    name: 'CityFlyer Express',
    iata: 'CJ'
  },
  {
    id: 322,
    name: 'Borajet',
    iata: 'YB'
  },
  {
    id: 323,
    name: 'Caribbean Airlines',
    iata: 'BW'
  },
  {
    id: 324,
    name: 'PAWA Dominicana',
    iata: '7N'
  },
  {
    id: 325,
    name: 'CAL Cargo Air Lines',
    iata: '5C'
  },
  {
    id: 326,
    name: 'RegionsAir',
    iata: '3C'
  },
  {
    id: 327,
    name: 'Camai Air',
    iata: 'R9'
  },
  {
    id: 328,
    name: 'Cameroon Airlines',
    iata: 'UY'
  },
  {
    id: 329,
    name: 'CanJet',
    iata: 'C6'
  },
  {
    id: 330,
    name: 'Compass Airlines',
    iata: 'CP'
  },
  {
    id: 331,
    name: 'Canadian North',
    iata: '5T'
  },
  {
    id: 332,
    name: 'Canadian Western Airlines',
    iata: 'W2'
  },
  {
    id: 333,
    name: 'Cape Air',
    iata: '9K'
  },
  {
    id: 334,
    name: 'West Air Sweden',
    iata: 'PT'
  },
  {
    id: 335,
    name: 'Cargoitalia',
    iata: '2G'
  },
  {
    id: 336,
    name: 'Cargojet Airways',
    iata: 'W8'
  },
  {
    id: 337,
    name: 'Chicago Express Airlines',
    iata: 'C8'
  },
  {
    id: 338,
    name: 'Caribbean Star Airlines',
    iata: '8B'
  },
  {
    id: 339,
    name: 'Carpatair',
    iata: 'V3'
  },
  {
    id: 340,
    name: 'Cathay Pacific',
    iata: 'CX'
  },
  {
    id: 341,
    name: 'Cayman Airways',
    iata: 'KX'
  },
  {
    id: 342,
    name: 'Cebu Pacific',
    iata: '5J'
  },
  {
    id: 343,
    name: 'Central Connect Airlines',
    iata: '3B'
  },
  {
    id: 344,
    name: 'Central Mountain Air',
    iata: '9M'
  },
  {
    id: 345,
    name: 'ValuJet Airlines',
    iata: 'J7'
  },
  {
    id: 346,
    name: 'Thai Smile Airways',
    iata: 'WE'
  },
  {
    id: 347,
    name: 'Chalk\\\'s International Airlines',
    iata: 'OP'
  },
  {
    id: 348,
    name: 'Champion Air',
    iata: 'MG'
  },
  {
    id: 349,
    name: 'Chang An Airlines',
    iata: '2Z'
  },
  {
    id: 350,
    name: 'Skywise Airline',
    iata: 'S8'
  },
  {
    id: 351,
    name: 'China Airlines',
    iata: 'CI'
  },
  {
    id: 352,
    name: 'China Cargo Airlines',
    iata: 'CK'
  },
  {
    id: 353,
    name: 'China Eastern Airlines',
    iata: 'MU'
  },
  {
    id: 354,
    name: 'China Express Airlines',
    iata: 'G5'
  },
  {
    id: 355,
    name: 'WebJet Linhas Aéreas',
    iata: 'WH'
  },
  {
    id: 356,
    name: 'China Southern Airlines',
    iata: 'CZ'
  },
  {
    id: 357,
    name: 'China United Airlines',
    iata: 'KN'
  },
  {
    id: 358,
    name: 'LTE International Airways',
    iata: 'XO'
  },
  {
    id: 359,
    name: 'China Yunnan Airlines',
    iata: '3Q'
  },
  {
    id: 360,
    name: 'Chitaavia',
    iata: 'X7'
  },
  {
    id: 361,
    name: 'Cimber Sterling',
    iata: 'QI'
  },
  {
    id: 362,
    name: 'Rico Linhas Aéreas',
    iata: 'C7'
  },
  {
    id: 363,
    name: 'Cirrus Airlines',
    iata: 'C9'
  },
  {
    id: 364,
    name: 'City Airline',
    iata: 'CF'
  },
  {
    id: 365,
    name: 'Gol Transportes Aéreos',
    iata: 'G3'
  },
  {
    id: 366,
    name: 'Civil Air Transport',
    iata: 'CT'
  },
  {
    id: 367,
    name: 'Club Air',
    iata: '6P'
  },
  {
    id: 368,
    name: 'Coastal Air',
    iata: 'DQ'
  },
  {
    id: 369,
    name: 'Colgan Air',
    iata: '9L'
  },
  {
    id: 370,
    name: 'Cologne Air Transport GmbH',
    iata: 'YD'
  },
  {
    id: 371,
    name: 'PSA Airlines',
    iata: 'OH'
  },
  {
    id: 372,
    name: 'Comair',
    iata: 'MN'
  },
  {
    id: 373,
    name: 'CommutAir',
    iata: 'C5'
  },
  {
    id: 374,
    name: 'Comores Airlines',
    iata: 'KR'
  },
  {
    id: 375,
    name: 'Eurofly',
    iata: 'GJ'
  },
  {
    id: 376,
    name: 'Condor Flugdienst',
    iata: 'DE'
  },
  {
    id: 377,
    name: 'Continental Express',
    iata: 'CO'
  },
  {
    id: 378,
    name: 'Continental Micronesia',
    iata: 'CS'
  },
  {
    id: 379,
    name: 'Conviasa',
    iata: 'V0'
  },
  {
    id: 380,
    name: 'Copa Airlines',
    iata: 'CM'
  },
  {
    id: 381,
    name: 'Sunshine Express Airlines',
    iata: 'CQ'
  },
  {
    id: 382,
    name: 'Corendon Airlines',
    iata: 'XC'
  },
  {
    id: 383,
    name: 'Corendon Dutch Airlines',
    iata: 'CD'
  },
  {
    id: 384,
    name: 'Corsairfly',
    iata: 'SS'
  },
  {
    id: 385,
    name: 'Corse Méditerranée',
    iata: 'XK'
  },
  {
    id: 386,
    name: 'Cosmic Air',
    iata: 'F5'
  },
  {
    id: 387,
    name: 'Croatia Airlines',
    iata: 'OU'
  },
  {
    id: 388,
    name: 'Jeju Air',
    iata: '7C'
  },
  {
    id: 389,
    name: 'Crossair Europe',
    iata: 'QE'
  },
  {
    id: 390,
    name: 'Cubana de Aviación',
    iata: 'CU'
  },
  {
    id: 391,
    name: 'Cyprus Airways',
    iata: 'CY'
  },
  {
    id: 392,
    name: 'Cyprus Turkish Airlines',
    iata: 'YK'
  },
  {
    id: 393,
    name: 'Czech Airlines',
    iata: 'OK'
  },
  {
    id: 394,
    name: 'Redhill Aviation',
    iata: '8L'
  },
  {
    id: 395,
    name: 'Clickair',
    iata: 'XG'
  },
  {
    id: 396,
    name: 'WDL Aviation',
    iata: 'WD'
  },
  {
    id: 397,
    name: 'DAT Danish Air Transport',
    iata: 'DX'
  },
  {
    id: 398,
    name: 'DHL International',
    iata: 'ES'
  },
  {
    id: 399,
    name: 'LTU Austria',
    iata: 'L3'
  },
  {
    id: 400,
    name: 'Daallo Airlines',
    iata: 'D3'
  },
  {
    id: 401,
    name: 'Kabo Air',
    iata: 'N2'
  },
  {
    id: 402,
    name: 'Dalavia',
    iata: 'H8'
  },
  {
    id: 403,
    name: 'Darwin Airline',
    iata: '0D'
  },
  {
    id: 404,
    name: 'Dauair',
    iata: 'D5'
  },
  {
    id: 405,
    name: 'Delta Air Lines',
    iata: 'DL'
  },
  {
    id: 406,
    name: 'Deutsche Bahn',
    iata: '2A'
  },
  {
    id: 407,
    name: 'Sky Trek International Airlines',
    iata: '1I'
  },
  {
    id: 408,
    name: 'Independence Air',
    iata: 'DH'
  },
  {
    id: 409,
    name: 'Dniproavia',
    iata: 'Z6'
  },
  {
    id: 410,
    name: 'Dominair',
    iata: 'YU'
  },
  {
    id: 411,
    name: 'Dominicana de Aviación',
    iata: 'DO'
  },
  {
    id: 412,
    name: 'Domodedovo Airlines',
    iata: 'E3'
  },
  {
    id: 413,
    name: 'Donavia',
    iata: 'D9'
  },
  {
    id: 414,
    name: 'Dragonair - Hong Kong Dragon Airlines',
    iata: 'KA'
  },
  {
    id: 415,
    name: 'Druk Air',
    iata: 'KB'
  },
  {
    id: 416,
    name: 'Dba',
    iata: 'DI'
  },
  {
    id: 417,
    name: 'Eagle Express Air Charter',
    iata: '9A'
  },
  {
    id: 418,
    name: 'Everbread',
    iata: 'E1'
  },
  {
    id: 419,
    name: 'Electronic Data Systems',
    iata: '1C'
  },
  {
    id: 420,
    name: 'Electronic Data Systems',
    iata: '1Y'
  },
  {
    id: 421,
    name: 'EVA Air',
    iata: 'BR'
  },
  {
    id: 422,
    name: 'Etihad Airways',
    iata: 'EY'
  },
  {
    id: 423,
    name: 'Eagle Air',
    iata: 'H7'
  },
  {
    id: 424,
    name: 'Uganda Airlines',
    iata: 'QU'
  },
  {
    id: 425,
    name: 'East African Safari Air',
    iata: 'S9'
  },
  {
    id: 426,
    name: 'European Air Express',
    iata: 'EA'
  },
  {
    id: 427,
    name: 'Eastern Airways',
    iata: 'T3'
  },
  {
    id: 428,
    name: 'Sunstate Airlines',
    iata: 'QF'
  },
  {
    id: 429,
    name: 'Eastland Air',
    iata: 'DK'
  },
  {
    id: 430,
    name: 'Egyptair',
    iata: 'MS'
  },
  {
    id: 431,
    name: 'El Al Israel Airlines',
    iata: 'LY'
  },
  {
    id: 432,
    name: 'El-Buraq Air Transport',
    iata: 'UZ'
  },
  {
    id: 433,
    name: 'Emirates Airlines',
    iata: 'EK'
  },
  {
    id: 434,
    name: 'Empire Airlines',
    iata: 'EM'
  },
  {
    id: 435,
    name: 'Empresa Ecuatoriana De Aviación',
    iata: 'EU'
  },
  {
    id: 436,
    name: 'Eos Airlines',
    iata: 'E0'
  },
  {
    id: 437,
    name: 'Eritrean Airlines',
    iata: 'B8'
  },
  {
    id: 438,
    name: 'European Aviation Air Charter',
    iata: 'E7'
  },
  {
    id: 439,
    name: 'SalamAir',
    iata: 'OV'
  },
  {
    id: 440,
    name: 'Ethiopian Airlines',
    iata: 'ET'
  },
  {
    id: 441,
    name: 'Euro Exec Express',
    iata: 'RZ'
  },
  {
    id: 442,
    name: 'SAM Colombia',
    iata: 'MM'
  },
  {
    id: 443,
    name: 'Eurocypria Airlines',
    iata: 'UI'
  },
  {
    id: 444,
    name: 'Eurolot',
    iata: 'K2'
  },
  {
    id: 445,
    name: 'Euromanx Airways',
    iata: '3W'
  },
  {
    id: 446,
    name: 'Europe Airpost',
    iata: '5O'
  },
  {
    id: 447,
    name: 'European Air Transport',
    iata: 'QY'
  },
  {
    id: 448,
    name: 'Eurowings',
    iata: 'EW'
  },
  {
    id: 449,
    name: 'Sun Air of Scandinavia',
    iata: 'EZ'
  },
  {
    id: 450,
    name: 'Excel Airways',
    iata: 'JN'
  },
  {
    id: 451,
    name: 'MNG Airlines',
    iata: 'MB'
  },
  {
    id: 452,
    name: 'Executive Airlines',
    iata: 'OW'
  },
  {
    id: 453,
    name: 'Hewa Bora Airways',
    iata: 'EO'
  },
  {
    id: 454,
    name: 'United Feeder Service',
    iata: 'U2'
  },
  {
    id: 455,
    name: 'easyJet Switzerland',
    iata: 'DS'
  },
  {
    id: 456,
    name: 'Irtysh Air',
    iata: 'IH'
  },
  {
    id: 457,
    name: 'Far Eastern Air Transport',
    iata: 'EF'
  },
  {
    id: 458,
    name: 'Thai AirAsia',
    iata: 'FD'
  },
  {
    id: 459,
    name: 'FaroeJet',
    iata: 'F6'
  },
  {
    id: 460,
    name: 'Faso Airways',
    iata: 'F3'
  },
  {
    id: 461,
    name: 'Federal Express',
    iata: 'FX'
  },
  {
    id: 462,
    name: 'National Air Cargo dba National Airlines',
    iata: 'N8'
  },
  {
    id: 463,
    name: 'Finalair Congo',
    iata: '4S'
  },
  {
    id: 464,
    name: 'Finnair',
    iata: 'AY'
  },
  {
    id: 465,
    name: 'Finncomm Airlines',
    iata: 'FC'
  },
  {
    id: 466,
    name: 'Northwest Regional Airlines',
    iata: 'FY'
  },
  {
    id: 467,
    name: 'First Air',
    iata: '7F'
  },
  {
    id: 468,
    name: 'First Choice Airways',
    iata: 'DP'
  },
  {
    id: 469,
    name: 'Fischer Air',
    iata: '8F'
  },
  {
    id: 470,
    name: 'Servant Air',
    iata: '8D'
  },
  {
    id: 471,
    name: 'Flightline',
    iata: 'B5'
  },
  {
    id: 472,
    name: 'Pan American World Airways',
    iata: 'PA'
  },
  {
    id: 473,
    name: 'Florida West International Airways',
    iata: 'RF'
  },
  {
    id: 474,
    name: 'Fly Air',
    iata: 'F2'
  },
  {
    id: 475,
    name: 'Overland Airways',
    iata: 'OJ'
  },
  {
    id: 476,
    name: 'Fly Me Sweden',
    iata: 'SH'
  },
  {
    id: 477,
    name: 'Skytaxi',
    iata: 'TE'
  },
  {
    id: 478,
    name: 'FlyNordic',
    iata: 'LF'
  },
  {
    id: 479,
    name: 'Flybaboo',
    iata: 'F7'
  },
  {
    id: 480,
    name: 'Flybe',
    iata: 'BE'
  },
  {
    id: 481,
    name: 'Switfair Cargo',
    iata: 'W3'
  },
  {
    id: 482,
    name: 'Vueling Airlines',
    iata: 'VY'
  },
  {
    id: 483,
    name: 'Four Star Aviation / Four Star Cargo',
    iata: 'HK'
  },
  {
    id: 484,
    name: 'Futura International Airways',
    iata: 'FH'
  },
  {
    id: 485,
    name: 'Freedom Air',
    iata: 'SJ'
  },
  {
    id: 486,
    name: 'Servicios Aéreos de los Andes',
    iata: 'FP'
  },
  {
    id: 487,
    name: 'Frontier Airlines',
    iata: 'F9'
  },
  {
    id: 488,
    name: 'Frontier Flying Service',
    iata: '2F'
  },
  {
    id: 489,
    name: 'Flydubai',
    iata: 'FZ'
  },
  {
    id: 490,
    name: 'Fly Georgia',
    iata: '9Y'
  },
  {
    id: 491,
    name: 'Virgin Nigeria Airways',
    iata: 'VK'
  },
  {
    id: 492,
    name: 'Pacificair',
    iata: 'GX'
  },
  {
    id: 493,
    name: 'Pace Airlines',
    iata: 'Y5'
  },
  {
    id: 494,
    name: 'GB Airways',
    iata: 'GT'
  },
  {
    id: 495,
    name: 'GMG Airlines',
    iata: 'Z5'
  },
  {
    id: 496,
    name: 'Galaxy Air',
    iata: '7O'
  },
  {
    id: 497,
    name: 'Galileo International',
    iata: '1G'
  },
  {
    id: 498,
    name: 'Gambia International Airlines',
    iata: 'GC'
  },
  {
    id: 499,
    name: 'GoJet Airlines',
    iata: 'G7'
  },
  {
    id: 500,
    name: 'Garuda Indonesia',
    iata: 'GA'
  },
  {
    id: 501,
    name: 'Gazpromavia',
    iata: '4G'
  },
  {
    id: 502,
    name: 'Georgian Airways',
    iata: 'A9'
  },
  {
    id: 503,
    name: 'Germania',
    iata: 'ST'
  },
  {
    id: 504,
    name: 'Germanwings',
    iata: '4U'
  },
  {
    id: 505,
    name: 'Palau Trans Pacific Airlines',
    iata: 'GP'
  },
  {
    id: 506,
    name: 'Ghana Airways',
    iata: 'GH'
  },
  {
    id: 507,
    name: 'Ghana International Airlines',
    iata: 'G0'
  },
  {
    id: 508,
    name: 'JetStar Japan',
    iata: 'GK'
  },
  {
    id: 509,
    name: 'Golden Air',
    iata: 'DC'
  },
  {
    id: 510,
    name: 'Gorkha Airlines',
    iata: 'G1'
  },
  {
    id: 511,
    name: 'Great Lakes Airlines',
    iata: 'ZK'
  },
  {
    id: 512,
    name: 'Spring Airlines Japan',
    iata: 'IJ'
  },
  {
    id: 513,
    name: 'Air Volga',
    iata: 'G6'
  },
  {
    id: 514,
    name: 'Jazeera Airways',
    iata: 'J9'
  },
  {
    id: 515,
    name: 'Gulf Air Bahrain',
    iata: 'GF'
  },
  {
    id: 516,
    name: 'Tri-MG Intra Asia Airlines',
    iata: 'GY'
  },
  {
    id: 517,
    name: 'Hageland Aviation Services',
    iata: 'H6'
  },
  {
    id: 518,
    name: 'Hahn Air',
    iata: 'HR'
  },
  {
    id: 519,
    name: 'Hainan Airlines',
    iata: 'HU'
  },
  {
    id: 520,
    name: 'Hainan Phoenix Information Systems',
    iata: '1R'
  },
  {
    id: 521,
    name: 'Haiti Ambassador Airlines',
    iata: '2T'
  },
  {
    id: 522,
    name: 'Hamburg International',
    iata: '4R'
  },
  {
    id: 523,
    name: 'Hapag-Lloyd Express (TUIfly)',
    iata: 'X3'
  },
  {
    id: 524,
    name: 'Hapagfly',
    iata: 'HF'
  },
  {
    id: 525,
    name: 'Harbor Airlines',
    iata: 'HB'
  },
  {
    id: 526,
    name: 'Thomas Cook Airlines',
    iata: 'HQ'
  },
  {
    id: 527,
    name: 'Hawaiian Airlines',
    iata: 'HA'
  },
  {
    id: 528,
    name: 'Hawkair',
    iata: 'BH'
  },
  {
    id: 529,
    name: 'Heavylift Cargo Airlines',
    iata: 'HN'
  },
  {
    id: 530,
    name: 'Helijet',
    iata: 'JB'
  },
  {
    id: 531,
    name: 'Helios Airways',
    iata: 'ZU'
  },
  {
    id: 532,
    name: 'North-Wright Airways',
    iata: 'HW'
  },
  {
    id: 533,
    name: 'Helvetic Airways',
    iata: '2L'
  },
  {
    id: 534,
    name: 'Hex\\\'Air',
    iata: 'UD'
  },
  {
    id: 535,
    name: 'Hi Fly',
    iata: '5K'
  },
  {
    id: 536,
    name: 'Mavial Magadan Airlines',
    iata: 'H5'
  },
  {
    id: 537,
    name: 'Hong Kong Airlines',
    iata: 'HX'
  },
  {
    id: 538,
    name: 'Republic Express Airlines',
    iata: 'RH'
  },
  {
    id: 539,
    name: 'Hong Kong Express Airways',
    iata: 'UO'
  },
  {
    id: 540,
    name: 'Hope Air',
    iata: 'HH'
  },
  {
    id: 541,
    name: 'Horizon Air',
    iata: 'QX'
  },
  {
    id: 542,
    name: 'Inter Island Airways',
    iata: 'H4'
  },
  {
    id: 543,
    name: 'Lankair',
    iata: 'IK'
  },
  {
    id: 544,
    name: 'IBC Airways',
    iata: 'II'
  },
  {
    id: 545,
    name: 'IBL Aviation',
    iata: '0C'
  },
  {
    id: 546,
    name: 'Independent Carrier (ICAR)',
    iata: 'C3'
  },
  {
    id: 547,
    name: 'INFINI Travel Information',
    iata: '1F'
  },
  {
    id: 548,
    name: 'Polyot Sirena',
    iata: '1U'
  },
  {
    id: 549,
    name: 'Iberia Airlines',
    iata: 'IB'
  },
  {
    id: 550,
    name: 'Iberia Express',
    iata: 'I2'
  },
  {
    id: 551,
    name: 'Ibex Airlines',
    iata: 'FW'
  },
  {
    id: 552,
    name: 'Icelandair',
    iata: 'FI'
  },
  {
    id: 553,
    name: 'IndiGo Airlines',
    iata: '6E'
  },
  {
    id: 554,
    name: 'Indian Airlines',
    iata: 'IC'
  },
  {
    id: 555,
    name: 'Indigo Airlines',
    iata: 'I9'
  },
  {
    id: 556,
    name: 'Indonesia AirAsia',
    iata: 'QZ'
  },
  {
    id: 557,
    name: 'Indonesian Airlines',
    iata: 'IO'
  },
  {
    id: 558,
    name: 'Interair South Africa',
    iata: 'D6'
  },
  {
    id: 559,
    name: 'Sky Regional Airlines',
    iata: 'RS'
  },
  {
    id: 560,
    name: 'International Business Air',
    iata: '6I'
  },
  {
    id: 561,
    name: 'Intersky',
    iata: '3L'
  },
  {
    id: 562,
    name: 'Interstate Airlines',
    iata: 'I4'
  },
  {
    id: 563,
    name: 'Iran Air',
    iata: 'IR'
  },
  {
    id: 564,
    name: 'Iran Aseman Airlines',
    iata: 'EP'
  },
  {
    id: 565,
    name: 'Iraqi Airways',
    iata: 'IA'
  },
  {
    id: 566,
    name: 'Satgur Air Transport',
    iata: '2S'
  },
  {
    id: 567,
    name: 'Westward Airways',
    iata: 'CN'
  },
  {
    id: 568,
    name: 'Islas Airways',
    iata: 'IF'
  },
  {
    id: 569,
    name: 'Islena De Inversiones',
    iata: 'WC'
  },
  {
    id: 570,
    name: 'Israir',
    iata: '6H'
  },
  {
    id: 571,
    name: 'Servicios de Transportes Aéreos Fueguinos',
    iata: 'FS'
  },
  {
    id: 572,
    name: 'Itek Air',
    iata: 'GI'
  },
  {
    id: 573,
    name: 'J-Air',
    iata: 'XM'
  },
  {
    id: 574,
    name: 'JAL Express',
    iata: 'JC'
  },
  {
    id: 575,
    name: 'Jettime',
    iata: 'JO'
  },
  {
    id: 576,
    name: 'Thomas Cook Airlines',
    iata: 'MT'
  },
  {
    id: 577,
    name: 'JSC Transport Automated Information Systems',
    iata: '1M'
  },
  {
    id: 578,
    name: 'Japan Air Commuter',
    iata: '3X'
  },
  {
    id: 579,
    name: 'Japan Airlines Domestic',
    iata: 'JL'
  },
  {
    id: 580,
    name: 'Japan Asia Airways',
    iata: 'EG'
  },
  {
    id: 581,
    name: 'Japan Transocean Air',
    iata: 'NU'
  },
  {
    id: 582,
    name: 'Linear Air',
    iata: 'O2'
  },
  {
    id: 583,
    name: 'Jet Airways',
    iata: '9W'
  },
  {
    id: 584,
    name: 'Jet Airways',
    iata: 'QJ'
  },
  {
    id: 585,
    name: 'Jet Aviation',
    iata: 'PP'
  },
  {
    id: 586,
    name: 'Jetstar Asia Airways',
    iata: '3K'
  },
  {
    id: 587,
    name: 'Jet2.com',
    iata: 'LS'
  },
  {
    id: 588,
    name: 'JetBlue Airways',
    iata: 'B6'
  },
  {
    id: 589,
    name: 'L.A.B. Flying Service',
    iata: 'JF'
  },
  {
    id: 590,
    name: 'Jetclub',
    iata: '0J'
  },
  {
    id: 591,
    name: 'Spicejet',
    iata: 'SG'
  },
  {
    id: 592,
    name: 'Jetstar Airways',
    iata: 'JQ'
  },
  {
    id: 593,
    name: 'Jett8 Airlines Cargo',
    iata: 'JX'
  },
  {
    id: 594,
    name: 'Malta Air Charter',
    iata: 'R5'
  },
  {
    id: 595,
    name: 'Skynet Asia Airways',
    iata: '6J'
  },
  {
    id: 596,
    name: 'Wataniya Airways',
    iata: 'KW'
  },
  {
    id: 597,
    name: 'Western Airlines',
    iata: 'WA'
  },
  {
    id: 598,
    name: 'KLM',
    iata: 'KL'
  },
  {
    id: 599,
    name: 'Kalitta Air',
    iata: 'K4'
  },
  {
    id: 600,
    name: 'Krylo Airlines',
    iata: 'K9'
  },
  {
    id: 601,
    name: 'Kam Air',
    iata: 'RQ'
  },
  {
    id: 602,
    name: 'Rio Grande Air',
    iata: 'E2'
  },
  {
    id: 603,
    name: 'Vision Airlines',
    iata: 'V2'
  },
  {
    id: 604,
    name: 'Kavminvodyavia',
    iata: 'KV'
  },
  {
    id: 605,
    name: 'Kenmore Air',
    iata: 'M5'
  },
  {
    id: 606,
    name: 'Kenya Airways',
    iata: 'KQ'
  },
  {
    id: 607,
    name: 'Tigerair Taiwan',
    iata: 'IT'
  },
  {
    id: 608,
    name: 'Kish Air',
    iata: 'Y9'
  },
  {
    id: 609,
    name: 'Kiwi International Air Lines',
    iata: 'KP'
  },
  {
    id: 610,
    name: 'Kogalymavia Air Company',
    iata: '7K'
  },
  {
    id: 611,
    name: 'Komiinteravia',
    iata: '8J'
  },
  {
    id: 612,
    name: 'Korean Air',
    iata: 'KE'
  },
  {
    id: 613,
    name: 'Krasnojarsky Airlines',
    iata: '7B'
  },
  {
    id: 614,
    name: 'SkyGreece Airlines',
    iata: 'GW'
  },
  {
    id: 615,
    name: 'Kuwait Airways',
    iata: 'KU'
  },
  {
    id: 616,
    name: 'Kuzu Airlines Cargo',
    iata: 'GO'
  },
  {
    id: 617,
    name: 'Skagway Air Service',
    iata: 'N5'
  },
  {
    id: 618,
    name: 'Kyrgyzstan Airlines',
    iata: 'R8'
  },
  {
    id: 619,
    name: 'TAR Aerolineas',
    iata: 'YQ'
  },
  {
    id: 620,
    name: 'LACSA',
    iata: 'LR'
  },
  {
    id: 621,
    name: 'LAI - Línea Aérea IAACA',
    iata: 'KG'
  },
  {
    id: 622,
    name: 'LATAM Chile',
    iata: 'LA'
  },
  {
    id: 623,
    name: 'LATAM Argentina',
    iata: '4M'
  },
  {
    id: 624,
    name: 'TAM Mercosur',
    iata: 'PZ'
  },
  {
    id: 625,
    name: 'LATAM Express',
    iata: 'LU'
  },
  {
    id: 626,
    name: 'LATAM Peru',
    iata: 'LP'
  },
  {
    id: 627,
    name: 'Portugalia',
    iata: 'NI'
  },
  {
    id: 628,
    name: 'Lufttransport',
    iata: 'L5'
  },
  {
    id: 629,
    name: 'LOT Polish Airlines',
    iata: 'LO'
  },
  {
    id: 630,
    name: 'LongJiang Airlines',
    iata: 'LT'
  },
  {
    id: 631,
    name: 'Nuevo Continente',
    iata: 'N6'
  },
  {
    id: 632,
    name: 'Lao Airlines',
    iata: 'QV'
  },
  {
    id: 633,
    name: 'Línea Aérea SAPSA',
    iata: 'L7'
  },
  {
    id: 634,
    name: 'Lauda Air',
    iata: 'NG'
  },
  {
    id: 635,
    name: 'Lebanese Air Transport',
    iata: 'LQ'
  },
  {
    id: 636,
    name: 'Leeward Islands Air Transport',
    iata: 'LI'
  },
  {
    id: 637,
    name: 'Libyan Arab Airlines',
    iata: 'LN'
  },
  {
    id: 638,
    name: 'Linhas Aéreas de Moçambique',
    iata: 'TM'
  },
  {
    id: 639,
    name: 'Lion Mentari Airlines',
    iata: 'JT'
  },
  {
    id: 640,
    name: 'Livingston',
    iata: 'LM'
  },
  {
    id: 641,
    name: 'Lloyd Aéreo Boliviano',
    iata: 'LB'
  },
  {
    id: 642,
    name: 'Varig Logística',
    iata: 'LC'
  },
  {
    id: 643,
    name: 'Luftfahrtgesellschaft Walter',
    iata: 'HE'
  },
  {
    id: 644,
    name: 'Lufthansa Cargo',
    iata: 'LH'
  },
  {
    id: 645,
    name: 'Lufthansa CityLine',
    iata: 'CL'
  },
  {
    id: 646,
    name: 'Lufthansa Systems',
    iata: 'L1'
  },
  {
    id: 647,
    name: 'Nantucket Airlines',
    iata: 'DV'
  },
  {
    id: 648,
    name: 'Luxair',
    iata: 'LG'
  },
  {
    id: 649,
    name: 'Lviv Airlines',
    iata: '5V'
  },
  {
    id: 650,
    name: 'Lynden Air Cargo',
    iata: 'L2'
  },
  {
    id: 651,
    name: 'Lynx Aviation',
    iata: 'L4'
  },
  {
    id: 652,
    name: 'Línea Aérea Amaszonas',
    iata: 'Z8'
  },
  {
    id: 653,
    name: 'Mihin Lanka',
    iata: 'MJ'
  },
  {
    id: 654,
    name: 'Maldivian (airline)',
    iata: 'Q2'
  },
  {
    id: 655,
    name: 'Malindo Airways',
    iata: 'OD'
  },
  {
    id: 656,
    name: 'Tropical Airways',
    iata: 'M7'
  },
  {
    id: 657,
    name: 'Malaysia Airlines',
    iata: 'MH'
  },
  {
    id: 658,
    name: 'NAM Air',
    iata: 'IN'
  },
  {
    id: 659,
    name: 'MIAT Mongolian Airlines',
    iata: 'OM'
  },
  {
    id: 660,
    name: 'Maersk',
    iata: 'DM'
  },
  {
    id: 661,
    name: 'Mahan Air',
    iata: 'W5'
  },
  {
    id: 662,
    name: 'MHS Aviation GmbH',
    iata: 'M2'
  },
  {
    id: 663,
    name: 'Malmö Aviation',
    iata: 'TF'
  },
  {
    id: 664,
    name: 'Malév Hungarian Airlines',
    iata: 'MA'
  },
  {
    id: 665,
    name: 'Mandala Airlines',
    iata: 'RI'
  },
  {
    id: 666,
    name: 'Mango',
    iata: 'JE'
  },
  {
    id: 667,
    name: 'Martinair',
    iata: 'MP'
  },
  {
    id: 668,
    name: 'Starlink Aviation',
    iata: 'Q4'
  },
  {
    id: 669,
    name: 'Myanmar Airways International',
    iata: '8M'
  },
  {
    id: 670,
    name: 'Mokulele Airlines',
    iata: 'MW'
  },
  {
    id: 671,
    name: 'Mayair',
    iata: '7M'
  },
  {
    id: 672,
    name: 'Mekong Airlines',
    iata: 'M8'
  },
  {
    id: 673,
    name: 'Menajet',
    iata: 'IM'
  },
  {
    id: 674,
    name: 'Meridiana',
    iata: 'IG'
  },
  {
    id: 675,
    name: 'Merpati Nusantara Airlines',
    iata: 'MZ'
  },
  {
    id: 676,
    name: 'Mesa Airlines',
    iata: 'YV'
  },
  {
    id: 677,
    name: 'Thai AirAsia X',
    iata: 'XJ'
  },
  {
    id: 678,
    name: 'Mexicana de Aviación',
    iata: 'MX'
  },
  {
    id: 679,
    name: 'Middle East Airlines',
    iata: 'ME'
  },
  {
    id: 680,
    name: 'Midwest Airlines',
    iata: 'YX'
  },
  {
    id: 681,
    name: 'Mistral Air',
    iata: 'M4'
  },
  {
    id: 682,
    name: 'Moldavian Airlines',
    iata: '2M'
  },
  {
    id: 683,
    name: 'Myway Airlines',
    iata: '8I'
  },
  {
    id: 684,
    name: 'Montenegro Airlines',
    iata: 'YM'
  },
  {
    id: 685,
    name: 'Sibaviatrans',
    iata: '5M'
  },
  {
    id: 686,
    name: 'Moskovia Airlines',
    iata: '3R'
  },
  {
    id: 687,
    name: 'Motor Sich',
    iata: 'M9'
  },
  {
    id: 688,
    name: 'Nordwind Airlines',
    iata: 'N4'
  },
  {
    id: 689,
    name: 'Thai Vietjet Air',
    iata: 'VZ'
  },
  {
    id: 690,
    name: 'Myanma Airways',
    iata: 'UB'
  },
  {
    id: 691,
    name: 'Nordic Regional',
    iata: '6N'
  },
  {
    id: 692,
    name: 'Peruvian Airlines',
    iata: 'P9'
  },
  {
    id: 693,
    name: 'Transeuropean Airlines',
    iata: 'UE'
  },
  {
    id: 694,
    name: 'National Airlines',
    iata: 'N7'
  },
  {
    id: 695,
    name: 'North American Airlines',
    iata: 'NA'
  },
  {
    id: 696,
    name: 'National Airways Cameroon',
    iata: '9O'
  },
  {
    id: 697,
    name: 'Northern Air Cargo',
    iata: 'NC'
  },
  {
    id: 698,
    name: 'Nationwide Airlines',
    iata: 'CE'
  },
  {
    id: 699,
    name: 'Navitaire',
    iata: '1N'
  },
  {
    id: 700,
    name: 'Nepal Airlines',
    iata: 'RA'
  },
  {
    id: 701,
    name: 'New England Airlines',
    iata: 'EJ'
  },
  {
    id: 702,
    name: 'Yuzhmashavia',
    iata: '2N'
  },
  {
    id: 703,
    name: 'Niki',
    iata: 'HG'
  },
  {
    id: 704,
    name: 'Nippon Cargo Airlines',
    iata: 'KZ'
  },
  {
    id: 705,
    name: 'Nok Air',
    iata: 'DD'
  },
  {
    id: 706,
    name: 'Nordavia',
    iata: '5N'
  },
  {
    id: 707,
    name: 'Nordeste Linhas Aéreas Regionais',
    iata: 'JH'
  },
  {
    id: 708,
    name: 'North Coast Aviation',
    iata: 'N9'
  },
  {
    id: 709,
    name: 'Northwest Airlines',
    iata: 'NW'
  },
  {
    id: 710,
    name: 'Northwestern Air',
    iata: 'J3'
  },
  {
    id: 711,
    name: 'Norwegian Air Shuttle',
    iata: 'DY'
  },
  {
    id: 712,
    name: 'Norwegian Air International',
    iata: 'D8'
  },
  {
    id: 713,
    name: 'Norwegian Long Haul',
    iata: 'DU'
  },
  {
    id: 714,
    name: 'Nouvel Air Tunisie',
    iata: 'BJ'
  },
  {
    id: 715,
    name: 'Nova Airline',
    iata: 'O9'
  },
  {
    id: 716,
    name: 'Novo Air',
    iata: 'VQ'
  },
  {
    id: 717,
    name: 'Spirit Airlines',
    iata: 'NK'
  },
  {
    id: 718,
    name: 'O\\\'Connor Airlines',
    iata: 'UQ'
  },
  {
    id: 719,
    name: 'Oasis Hong Kong Airlines',
    iata: 'O8'
  },
  {
    id: 720,
    name: 'Voyageur Airways',
    iata: 'VC'
  },
  {
    id: 721,
    name: 'Olympic Airlines',
    iata: 'OA'
  },
  {
    id: 722,
    name: 'Oman Air',
    iata: 'WY'
  },
  {
    id: 723,
    name: 'Princess Air',
    iata: '8Q'
  },
  {
    id: 724,
    name: 'Orenburg Airlines',
    iata: 'R2'
  },
  {
    id: 725,
    name: 'Orient Thai Airlines',
    iata: 'OX'
  },
  {
    id: 726,
    name: 'OLT Express Germany',
    iata: 'OL'
  },
  {
    id: 727,
    name: 'Our Airline',
    iata: 'ON'
  },
  {
    id: 728,
    name: 'Ozjet Airlines',
    iata: 'O7'
  },
  {
    id: 729,
    name: 'St Barth Commuter',
    iata: 'PV'
  },
  {
    id: 730,
    name: 'PB Air',
    iata: '9Q'
  },
  {
    id: 731,
    name: 'PLUNA',
    iata: 'PU'
  },
  {
    id: 732,
    name: 'PMTair',
    iata: 'U4'
  },
  {
    id: 733,
    name: 'Pacific Airlines',
    iata: 'BL'
  },
  {
    id: 734,
    name: 'Pacific Coastal Airlines',
    iata: '8P'
  },
  {
    id: 735,
    name: 'Pacific East Asia Cargo Airlines',
    iata: 'Q8'
  },
  {
    id: 736,
    name: 'Sun Air International',
    iata: 'LW'
  },
  {
    id: 737,
    name: 'Pakistan International Airlines',
    iata: 'PK'
  },
  {
    id: 738,
    name: 'Palestinian Airlines',
    iata: 'PF'
  },
  {
    id: 739,
    name: 'Pamir Airways',
    iata: 'NR'
  },
  {
    id: 740,
    name: 'Pan American Airways',
    iata: 'PN'
  },
  {
    id: 741,
    name: 'Paramount Airways',
    iata: 'I7'
  },
  {
    id: 742,
    name: 'Passaredo Transportes Aéreos',
    iata: 'P3'
  },
  {
    id: 743,
    name: 'Peninsula Airways',
    iata: 'KS'
  },
  {
    id: 744,
    name: 'EZD',
    iata: 'Z2'
  },
  {
    id: 745,
    name: 'Philippine Airlines',
    iata: 'PR'
  },
  {
    id: 746,
    name: 'Phuket Air',
    iata: '9R'
  },
  {
    id: 747,
    name: 'Sun Air (Fiji)',
    iata: 'PI'
  },
  {
    id: 748,
    name: 'Pinnacle Airlines',
    iata: '9E'
  },
  {
    id: 749,
    name: 'Polar Air Cargo',
    iata: 'PO'
  },
  {
    id: 750,
    name: 'Polynesian Airlines',
    iata: 'PH'
  },
  {
    id: 751,
    name: 'Porter Airlines',
    iata: 'PD'
  },
  {
    id: 752,
    name: 'Potomac Air',
    iata: 'BK'
  },
  {
    id: 753,
    name: 'Precision Air',
    iata: 'PW'
  },
  {
    id: 754,
    name: 'Transavia France',
    iata: 'TO'
  },
  {
    id: 755,
    name: 'Primaris Airlines',
    iata: 'FE'
  },
  {
    id: 756,
    name: 'Private Wings Flugcharter',
    iata: '8W'
  },
  {
    id: 757,
    name: 'Privilege Style Líneas Aéreas',
    iata: 'P6'
  },
  {
    id: 758,
    name: 'Proflight Zambia',
    iata: 'P0'
  },
  {
    id: 759,
    name: 'Rossiya',
    iata: 'FV'
  },
  {
    id: 760,
    name: 'Qatar Airways',
    iata: 'QR'
  },
  {
    id: 761,
    name: 'RACSA',
    iata: 'R6'
  },
  {
    id: 762,
    name: 'Radixx Solutions International',
    iata: '1D'
  },
  {
    id: 763,
    name: 'Vieques Air Link',
    iata: 'V4'
  },
  {
    id: 764,
    name: 'Regional Air Lines',
    iata: 'FN'
  },
  {
    id: 765,
    name: 'Regional Express',
    iata: 'ZL'
  },
  {
    id: 766,
    name: 'Russian Sky Airlines',
    iata: 'P7'
  },
  {
    id: 767,
    name: 'Republic Airlines',
    iata: 'RW'
  },
  {
    id: 768,
    name: 'Royal Phnom Penh Airways',
    iata: 'RL'
  },
  {
    id: 769,
    name: 'Thai Lion Mentari',
    iata: 'SL'
  },
  {
    id: 770,
    name: 'Air Rarotonga',
    iata: 'GZ'
  },
  {
    id: 771,
    name: 'Royal Air Force',
    iata: 'RR'
  },
  {
    id: 772,
    name: 'Royal Air Maroc',
    iata: 'AT'
  },
  {
    id: 773,
    name: 'Royal Airlines',
    iata: 'R0'
  },
  {
    id: 774,
    name: 'Royal Brunei Airlines',
    iata: 'BI'
  },
  {
    id: 775,
    name: 'Royal Jordanian',
    iata: 'RJ'
  },
  {
    id: 776,
    name: 'Royal Khmer Airlines',
    iata: 'RK'
  },
  {
    id: 777,
    name: 'WestJet Encore',
    iata: 'WR'
  },
  {
    id: 778,
    name: 'Rwandair Express',
    iata: 'WB'
  },
  {
    id: 779,
    name: 'Ryan Air Service',
    iata: '7S'
  },
  {
    id: 780,
    name: 'Ryan International Airlines',
    iata: 'RD'
  },
  {
    id: 781,
    name: 'Ryanair',
    iata: 'FR'
  },
  {
    id: 782,
    name: 'Régional Compagnie Aérienne Européenne',
    iata: 'YS'
  },
  {
    id: 783,
    name: 'Tigerair Singapore',
    iata: 'TR'
  },
  {
    id: 784,
    name: 'Smartlynx Airlines',
    iata: '6Y'
  },
  {
    id: 785,
    name: 'Sylt Air GmbH',
    iata: '7E'
  },
  {
    id: 786,
    name: 'SATA International',
    iata: 'S4'
  },
  {
    id: 787,
    name: 'South African Airways',
    iata: 'SA'
  },
  {
    id: 788,
    name: 'Western Pacific Airlines',
    iata: 'W7'
  },
  {
    id: 789,
    name: 'Shaheen Air International',
    iata: 'NL'
  },
  {
    id: 790,
    name: 'SAS Braathens',
    iata: 'SK'
  },
  {
    id: 791,
    name: 'Tuninter',
    iata: 'UG'
  },
  {
    id: 792,
    name: 'S7 Airlines',
    iata: 'S7'
  },
  {
    id: 793,
    name: 'Seaborne Airlines',
    iata: 'BB'
  },
  {
    id: 794,
    name: 'SeaPort Airlines',
    iata: 'K5'
  },
  {
    id: 795,
    name: 'SriLankan Airlines',
    iata: 'UL'
  },
  {
    id: 796,
    name: 'Sun Country Airlines',
    iata: 'SY'
  },
  {
    id: 797,
    name: 'Sky Eyes',
    iata: 'I6'
  },
  {
    id: 798,
    name: 'Star Flyer',
    iata: '7G'
  },
  {
    id: 799,
    name: 'Safair',
    iata: 'FA'
  },
  {
    id: 800,
    name: 'Sat Airlines',
    iata: 'HZ'
  },
  {
    id: 801,
    name: 'SATA Air Acores',
    iata: 'SP'
  },
  {
    id: 802,
    name: 'Scorpio Aviation',
    iata: '8S'
  },
  {
    id: 803,
    name: 'Sky Airlines',
    iata: 'ZY'
  },
  {
    id: 804,
    name: 'Singapore Airlines Cargo',
    iata: 'SQ'
  },
  {
    id: 805,
    name: 'Skynet Airlines',
    iata: 'SI'
  },
  {
    id: 806,
    name: 'SITA',
    iata: 'XS'
  },
  {
    id: 807,
    name: 'Siem Reap Airways',
    iata: 'FT'
  },
  {
    id: 808,
    name: 'Skybus Airlines',
    iata: 'SX'
  },
  {
    id: 809,
    name: 'Star Air',
    iata: 'S6'
  },
  {
    id: 810,
    name: 'Severstal Air Company',
    iata: 'D2'
  },
  {
    id: 811,
    name: 'Skyservice Airlines',
    iata: '5G'
  },
  {
    id: 812,
    name: 'Sudan Airways',
    iata: 'SD'
  },
  {
    id: 813,
    name: 'Saudia',
    iata: 'SV'
  },
  {
    id: 814,
    name: 'Southwest Airlines',
    iata: 'WN'
  },
  {
    id: 815,
    name: 'Southern Winds Airlines',
    iata: 'A4'
  },
  {
    id: 816,
    name: 'Sunwing Airlines',
    iata: 'WG'
  },
  {
    id: 817,
    name: 'Swiss International Air Lines',
    iata: 'LX'
  },
  {
    id: 818,
    name: 'Swissair',
    iata: 'SR'
  },
  {
    id: 819,
    name: 'Swe Fly',
    iata: 'WV'
  },
  {
    id: 820,
    name: 'SunExpress',
    iata: 'XQ'
  },
  {
    id: 821,
    name: 'TransAVIAexport Airlines',
    iata: 'AL'
  },
  {
    id: 822,
    name: 'Samara Airlines',
    iata: 'E5'
  },
  {
    id: 823,
    name: 'Shandong Airlines',
    iata: 'SC'
  },
  {
    id: 824,
    name: 'Spring Airlines',
    iata: '9C'
  },
  {
    id: 825,
    name: 'Sichuan Airlines',
    iata: '3U'
  },
  {
    id: 826,
    name: 'Shanghai Airlines',
    iata: 'FM'
  },
  {
    id: 827,
    name: 'Shenzhen Airlines',
    iata: 'ZH'
  },
  {
    id: 828,
    name: 'Sun D\\\'Or',
    iata: '7L'
  },
  {
    id: 829,
    name: 'SkyEurope',
    iata: 'NE'
  },
  {
    id: 830,
    name: 'Sunshine Airlines',
    iata: 'SO'
  },
  {
    id: 831,
    name: 'Spanair',
    iata: 'JK'
  },
  {
    id: 832,
    name: 'Sabre Pacific',
    iata: '1Z'
  },
  {
    id: 833,
    name: 'Sabre',
    iata: '1S'
  },
  {
    id: 834,
    name: 'Siren-Travel',
    iata: '1H'
  },
  {
    id: 835,
    name: 'Sirena',
    iata: '1Q'
  },
  {
    id: 836,
    name: 'Sutra',
    iata: '1K'
  },
  {
    id: 837,
    name: 'SNCF',
    iata: '2C'
  },
  {
    id: 838,
    name: 'Slok Air Gambia',
    iata: 'S0'
  },
  {
    id: 839,
    name: 'Santa Barbara Airlines',
    iata: 'S3'
  },
  {
    id: 840,
    name: 'Sky Airline',
    iata: 'H2'
  },
  {
    id: 841,
    name: 'SkyWest Airlines',
    iata: 'OO'
  },
  {
    id: 842,
    name: 'Skymark Airlines',
    iata: 'BC'
  },
  {
    id: 843,
    name: 'Sierra National Airlines',
    iata: 'LJ'
  },
  {
    id: 844,
    name: 'SilkAir',
    iata: 'MI'
  },
  {
    id: 845,
    name: 'Slovak Airlines',
    iata: '6Q'
  },
  {
    id: 846,
    name: 'Surinam Airways',
    iata: 'PY'
  },
  {
    id: 847,
    name: 'Sterling Airlines',
    iata: 'NB'
  },
  {
    id: 848,
    name: 'Solomon Airlines',
    iata: 'IE'
  },
  {
    id: 849,
    name: 'Saratov Airlines Joint Stock Company',
    iata: '6W'
  },
  {
    id: 850,
    name: 'Trast Aero',
    iata: 'S5'
  },
  {
    id: 851,
    name: 'Sirin',
    iata: 'R1'
  },
  {
    id: 852,
    name: 'SF Airlines',
    iata: 'O3'
  },
  {
    id: 853,
    name: 'TAME',
    iata: 'EQ'
  },
  {
    id: 854,
    name: 'TAP Portugal',
    iata: 'TP'
  },
  {
    id: 855,
    name: 'Tunisair',
    iata: 'TU'
  },
  {
    id: 856,
    name: 'TNT Airways',
    iata: '3V'
  },
  {
    id: 857,
    name: 'Thai Air Cargo',
    iata: 'T2'
  },
  {
    id: 858,
    name: 'Tandem Aero',
    iata: 'TQ'
  },
  {
    id: 859,
    name: 'Titan Airways',
    iata: 'ZT'
  },
  {
    id: 860,
    name: 'Tigerair Philippines',
    iata: 'DG'
  },
  {
    id: 861,
    name: 'Thai Airways International',
    iata: 'TG'
  },
  {
    id: 862,
    name: 'Turkish Airlines',
    iata: 'TK'
  },
  {
    id: 863,
    name: 'Twin Jet',
    iata: 'T7'
  },
  {
    id: 864,
    name: 'Tiara Air',
    iata: '3P'
  },
  {
    id: 865,
    name: 'Tol-Air Services',
    iata: 'TI'
  },
  {
    id: 866,
    name: 'Thomson Airways',
    iata: 'BY'
  },
  {
    id: 867,
    name: 'Tropic Air',
    iata: 'PM'
  },
  {
    id: 868,
    name: 'TAMPA',
    iata: 'QT'
  },
  {
    id: 869,
    name: 'Taquan Air Services',
    iata: 'K3'
  },
  {
    id: 870,
    name: 'TransAsia Airways',
    iata: 'GE'
  },
  {
    id: 871,
    name: 'Transavia Holland',
    iata: 'HV'
  },
  {
    id: 872,
    name: 'TACV',
    iata: 'VR'
  },
  {
    id: 873,
    name: 'Thai Star Airlines',
    iata: 'T9'
  },
  {
    id: 874,
    name: 'Transwest Air',
    iata: '9T'
  },
  {
    id: 875,
    name: 'Transaero Airlines',
    iata: 'UN'
  },
  {
    id: 876,
    name: 'Turkmenhovayollary',
    iata: 'T5'
  },
  {
    id: 877,
    name: 'Tavrey Airlines',
    iata: 'T6'
  },
  {
    id: 878,
    name: 'T\\\'way Air',
    iata: 'TW'
  },
  {
    id: 879,
    name: 'TUIfly Nordic',
    iata: '6B'
  },
  {
    id: 880,
    name: 'TAAG Angola Airlines',
    iata: 'DT'
  },
  {
    id: 881,
    name: 'Tassili Airlines',
    iata: 'SF'
  },
  {
    id: 882,
    name: 'Tradewind Aviation',
    iata: 'TJ'
  },
  {
    id: 883,
    name: 'Travelsky Technology',
    iata: '1E'
  },
  {
    id: 884,
    name: 'Thalys',
    iata: '2H'
  },
  {
    id: 885,
    name: 'Open Skies Consultative Commission',
    iata: '1L'
  },
  {
    id: 886,
    name: 'Tarom',
    iata: 'RO'
  },
  {
    id: 887,
    name: 'Turan Air',
    iata: '3T'
  },
  {
    id: 888,
    name: 'TRIP Linhas Aéreas',
    iata: 'T4'
  },
  {
    id: 889,
    name: 'Tbilaviamsheni',
    iata: 'L6'
  },
  {
    id: 890,
    name: 'XpressAir',
    iata: 'XN'
  },
  {
    id: 891,
    name: 'Tyrolean Airways',
    iata: 'VO'
  },
  {
    id: 892,
    name: 'USA3000 Airlines',
    iata: 'U5'
  },
  {
    id: 893,
    name: 'United Airlines',
    iata: 'UA'
  },
  {
    id: 894,
    name: 'United Airways',
    iata: '4H'
  },
  {
    id: 895,
    name: 'Ural Airlines',
    iata: 'U6'
  },
  {
    id: 896,
    name: 'UM Airlines',
    iata: 'UF'
  },
  {
    id: 897,
    name: 'Ukrainian Cargo Airways',
    iata: '6Z'
  },
  {
    id: 898,
    name: 'United Parcel Service',
    iata: '5X'
  },
  {
    id: 899,
    name: 'US Airways',
    iata: 'US'
  },
  {
    id: 900,
    name: 'US Helicopter',
    iata: 'UH'
  },
  {
    id: 901,
    name: 'UTair Aviation',
    iata: 'UT'
  },
  {
    id: 902,
    name: 'Uzbekistan Airways',
    iata: 'HY'
  },
  {
    id: 903,
    name: 'Ukraine International Airlines',
    iata: 'PS'
  },
  {
    id: 904,
    name: 'Viasa',
    iata: 'VA'
  },
  {
    id: 905,
    name: 'Valuair',
    iata: 'VF'
  },
  {
    id: 906,
    name: 'Vietnam Air Services Company (VASCO)',
    iata: '0V'
  },
  {
    id: 907,
    name: 'Vietnam Airlines',
    iata: 'VN'
  },
  {
    id: 908,
    name: 'VIM Airlines',
    iata: 'NN'
  },
  {
    id: 909,
    name: 'Via Rail Canada',
    iata: '2R'
  },
  {
    id: 910,
    name: 'Volaris',
    iata: 'Y4'
  },
  {
    id: 911,
    name: 'Volga-Dnepr Airlines',
    iata: 'VI'
  },
  {
    id: 912,
    name: 'Virgin Express',
    iata: 'TV'
  },
  {
    id: 913,
    name: 'Virgin Atlantic Airways',
    iata: 'VS'
  },
  {
    id: 914,
    name: 'Viva Macau',
    iata: 'ZG'
  },
  {
    id: 915,
    name: 'Vladivostok Air',
    iata: 'XF'
  },
  {
    id: 916,
    name: 'Viaggio Air',
    iata: 'VM'
  },
  {
    id: 917,
    name: 'Vipair Airlines',
    iata: '9V'
  },
  {
    id: 918,
    name: 'VRG Linhas Aéreas',
    iata: 'RG'
  },
  {
    id: 919,
    name: 'VASP',
    iata: 'VP'
  },
  {
    id: 920,
    name: 'VLM Airlines',
    iata: 'VG'
  },
  {
    id: 921,
    name: 'Wasaya Airways',
    iata: 'WT'
  },
  {
    id: 922,
    name: 'Welcome Air',
    iata: '2W'
  },
  {
    id: 923,
    name: 'West African Airlines',
    iata: 'WZ'
  },
  {
    id: 924,
    name: 'West Caribbean Airways',
    iata: 'YH'
  },
  {
    id: 925,
    name: 'West Coast Air',
    iata: '8O'
  },
  {
    id: 926,
    name: 'WestJet',
    iata: 'WS'
  },
  {
    id: 927,
    name: 'Xtra Airways',
    iata: 'XP'
  },
  {
    id: 928,
    name: 'Widerøe',
    iata: 'WF'
  },
  {
    id: 929,
    name: 'Wind Jet',
    iata: 'IV'
  },
  {
    id: 930,
    name: 'Windrose Air',
    iata: '7W'
  },
  {
    id: 931,
    name: 'Wizz Air Bulgaria',
    iata: '8Z'
  },
  {
    id: 932,
    name: 'Wizz Air',
    iata: 'W6'
  },
  {
    id: 933,
    name: 'World Airways',
    iata: 'WO'
  },
  {
    id: 934,
    name: 'Worldspan',
    iata: '1P'
  },
  {
    id: 935,
    name: 'Xiamen Airlines',
    iata: 'MF'
  },
  {
    id: 936,
    name: 'XL Airways France',
    iata: 'SE'
  },
  {
    id: 937,
    name: 'Yamal Airlines',
    iata: 'YL'
  },
  {
    id: 938,
    name: 'Yangtze River Express',
    iata: 'Y8'
  },
  {
    id: 939,
    name: 'Yemenia',
    iata: 'IY'
  },
  {
    id: 940,
    name: 'Zimex Aviation',
    iata: 'C4'
  },
  {
    id: 941,
    name: 'Zambian Airways',
    iata: 'Q3'
  },
  {
    id: 942,
    name: 'Zoom Airlines',
    iata: 'Z4'
  }
];

export default airlines;
