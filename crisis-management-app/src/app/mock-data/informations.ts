import { LngLat } from 'mapbox-gl';
import { Information } from '../models';


export const INFORMATIONS: Information[] = [
  {
    id: 'a56kjdai',
    date: '2022-04-06T00:04:29',
    source: 'telegram',
    sourceData: {
      'id': 61,
      'type': 'message',
      'date': '2022-03-03T00:04:29',
      'edited': '2022-03-03T00:04:57',
      'from': 'Help to Ukrainians in Germany',
      'from_id': 'channel1650038103',
      'author': 'Andrii Boiko',
      'text': 'Info. Bus, 56 empty seats. Left Berlin by bus to Przemyśl, Polen. If without incident, it should be around 8 o\'clock in the evening. Tomorrow morning people can be picked up.'
    },
    category: "Transportation",
    coords: {
      lat: 52.5109899,
      lng: 13.4719436
    }
  },
  {
    id: 'hbpox7xw',
    date: '2022-04-03T06:10:20',
    source: 'telegram',
    sourceData: {
      'id': 66,
      'type': 'message',
      'date': '2022-03-03T06:10:20',
      'edited': '2022-03-03T06:13:40',
      'from': 'Help to Ukrainians in Germany',
      'from_id': 'channel1650038103',
      'author': 'Kirill',
      'text': 'Aid point Otto-Braun-Straße 70-72, 10178 Berlin needs plastic containers for food packaging and protection against rodents. Please bring them if you can. We would also appreciate food for volunteers working in The point is open until 8 pm Thank you 🙏'
    },
    category: "Food",
    coords: {
      lat: 52.52332,
      lng: 13.41904
    },
  },
  {
    id: 'cbgngmyz',
    date: '2022-03-29T03:49:00',
    source: 'telegram',
    sourceData: {
      'id': 67,
      'type': 'message',
      'date': '2022-03-04T03:49:00',
      'edited': '2022-03-04T03:49:15',
      'from': 'Help to Ukrainians in Germany',
      'from_id': 'channel1650038103',
      'author': 'Kirill',
      'text': 'Aid collection point Otto-Braun-Straße 70-72, 10178 Berlin needs volunteers to sort things, open until 20:00. Thank you 🙏'
    },
    category: "Volunteers Needed",
    coords: {
      lat: 52.52332,
      lng: 13.41904
    },
  },
  {
    id: 'ulzzl4qq',
    date: '2022-03-04T05:04:06',
    coords: {
      lat: 52.6256315,
      lng: 13.2068687,
    },
    tags: ['health'],
    source: 'telegram',
    sourceData: {
      'id': 68,
      'type': 'message',
      'date': '2022-03-04T05:04:06',
      'edited': '2022-03-04T05:10:39',
      'from': 'Help to Ukrainians in Germany',
      'from_id': 'channel1650038103',
      'author': 'Kirill',
      'text': [
        'A new point for receiving humanitarian aid has opened here',
        {
          'type': 'link',
          'text': 'https://goo.gl/maps/Vu423azGfK7zzCXA7'
        },
        ' Philipp-Pforr-Straße 9A, 16761 (KaroMotors garage) Open Mon-Sat 9:00-16:00 Tel: 0176 566 195 47'
      ]
    },
    category: "Shelter"
  },
  {
    id: '06lankgh',
    date: '2022-02-25T01:49:17',
    source: 'telegram',
    sourceData: {
      'id': 13,
      'type': 'message',
      'date': '2022-02-25T01:49:17',
      'edited': '2022-02-25T04:41:31',
      'from': 'Help to Ukrainians in Germany',
      'from_id': 'channel1650038103',
      'text': [
        'Medical care for people without health insurance in Germany\n\n',
        {
          'type': 'link',
          'text': 'https://www.malteser.de/menschen-ohne-krankenversicherung/unsere-standorte.html'
        },
        ''
      ]
    },
    category: "Health Services",
    coords: {
      lat: 52.45548,
      lng: 13.51447
    },
  },
  {
    id: 'ltmsfq7e',
    date: '2022-02-25T01:49:17',
    coords: {
      lng: -77.038659,
      lat: 38.931567,
    },
    tags: ['food'],
    category: "Other"
  },
  {
    id: '42jfhfxr',
    date: '2022-02-25T01:49:17',
    coords: {
      lng: -77.003168,
      lat: 38.894651,
    },
    tags: ['food'],
    category: "Other"
  },
  {
    id: 'gopcqi44',
    date: '2022-02-25T01:49:17',
    coords: {
      lat: 52.6256315,
      lng: 13.2090574
    },
    tags: ['shelter'],
    category: "Legal"
  },
  {
    id: 'h1jfnix5',
    date: '2022-02-25T01:49:17',
    coords: {
      lng: -77.111561,
      lat: 38.882342,
    },
    tags: ['shelter'],
    category: "Other"
  },
  {
    id: 'dqg3rc43',
    date: '2022-02-25T01:49:17',
    coords: {
      lng: -77.052477,
      lat: 38.943951,
    },
    tags: ['health'],
    category: "Translation"
  },
  {
    id: 'd6o3c1y6',
    date: '2022-02-25T01:49:17',
    coords: {
      lng: -77.043444,
      lat: 38.909664,
    },
    tags: ['health'],
    category: "Other"
  },
  {
    id: '1g2j0bqc',
    date: '2022-02-25T01:49:17',
    coords: {
      lat: 52.52332,
      lng: 13.41904
    },
    tags: ['transport'],
    category: "Volunteering"
  },
  {
    id: 'ysdrn7wx',
    date: '2022-02-25T01:49:17',
    coords: {
      lng: -77.020945,
      lat: 38.878241,
    },
    tags: ['transport'],
    category: "Other"
  },
];
