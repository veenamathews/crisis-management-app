/* tslint:disable:quotemark object-literal-key-quotes */
import { Information } from '../models';

// Telegram: Polish Ukrainians group
export const MESSAGES_DATASET_003: Information[] = [
  {
    "sourceData": {
      "id": 20,
      "type": "message",
      "date": "2022-02-26T04: 05: 27",
      "from": "Susanna",
      "from_id": "user536735839",
      "text": "Where to send help? Is there an address?"
    },
    "id": "1",
    "source": "telegram",
    "date": "2022-02-26T04:05:27",
    "sourceMessagePlainText": "Where to send help? Is there an address?",
    "address": "There is no address given in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no address given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no address given in the text, so there is no latitude and longitude to extract."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "There is no specific address, but there are many ways to help.\"Food\" : 0.125,\"Shelter\" : 0.125,\"Health Services\" : 0.125,\"Transportation\" : 0.125,\"Translation\" : 0.125,\"Legal\" : 0.125,\"Volunteering\" : 0.125,\"Volunteers Needed\" : 0.125"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 34,
      "type": "message",
      "date": "2022-02-26T05: 20: 32",
      "from": "M.",
      "from_id": "user413783302",
      "text": "Hi, I'm getting ready to leave Wroclaw now, is anyone else planning? \nAlso if someone has something to pass on or someone needs to go to the border, go to the border"
    },
    "id": "2",
    "source": "telegram",
    "date": "2022-02-26T05:20:32",
    "sourceMessagePlainText": "Hi, I'm getting ready to leave Wroclaw now, is anyone else planning? \nAlso if someone has something to pass on or someone needs to go to the border, go to the border",
    "address": "Wroclaw, Poland",
    "coords": {
      "lat": 51.1078852,
      "lng": 17.0385376
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Wroclaw, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 51.1078852, \"lng\": 17.0385376 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", I can help.[  {\"Food\": 0.2, \"Shelter\": 0.1, \"Health Services\": 0.05, \"Transportation\": 0.3, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.1, \"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", I have a carTransportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", I have a carTransportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 46,
      "type": "message",
      "date": "2022-02-26T07: 58: 09",
      "from": "Alexandra",
      "from_id": "user498535876",
      "text": "🇺🇦🇺🇦🇺🇦 ♥ ️ ♥ ️ ♥ ️ ♥ ️ ♥ ️ ♥ n \n \nMy cancer sister and I are going to Poland, Przemyśl / Kraków \nHelp cross the border 🥺🙏🏻 no car, you need as soon as possible"
    },
    "id": "3",
    "source": "telegram",
    "date": "2022-02-26T07:58:09",
    "sourceMessagePlainText": "🇺🇦🇺🇦🇺🇦 ♥ ️ ♥ ️ ♥ ️ ♥ ️ ♥ ️ ♥ n \n \nMy cancer sister and I are going to Poland, Przemyśl / Kraków \nHelp cross the border 🥺🙏🏻 no car, you need as soon as possible",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", please help us.[  {\"Food\": 0.2, \"Shelter\": 0.2, \"Health Services\": 0.2, \"Transportation\": 0.2, \"Translation\": 0.2, \"Legal\": 0.2, \"Volunteering\": 0.2, \"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 48,
      "type": "message",
      "date": "2022-02-26T08: 36: 42",
      "from": "Auto Elektrik",
      "from_id": "user1638914144",
      "reply_to_message_id": 39,
      "text": "Really help from them is unexpected but they also have respect and esteem ✊ cut on all fronts"
    },
    "id": "4",
    "source": "telegram",
    "date": "2022-02-26T08:36:42",
    "sourceMessagePlainText": "Really help from them is unexpected but they also have respect and esteem ✊ cut on all fronts",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 49,
      "type": "message",
      "date": "2022-02-26T09: 26: 31",
      "from": "Auto Elektrik",
      "from_id": "user1638914144",
      "text": "A Pole living in Germany near Dresden can take in a girl with a child"
    },
    "id": "5",
    "source": "telegram",
    "date": "2022-02-26T09:26:31",
    "sourceMessagePlainText": "A Pole living in Germany near Dresden can take in a girl with a child",
    "address": "The physical location from this text is Germany near Dresden.",
    "coords": {
      "lat": 51.0504088,
      "lng": 13.7372621
    },
    "sentiment": null,
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is Germany near Dresden."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.0504088, lng: 13.7372621 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ". The girl is from Afghanistan and is currently in an asylum seekers' home.[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 53,
      "type": "message",
      "date": "2022-02-26T09: 40: 11",
      "from": "Svitlana 🍀",
      "from_id": "user881210604",
      "text": "Hello, how to get from Odessa to Poland? Today, maybe tomorrow vehicles are not allowed to move"
    },
    "id": "6",
    "source": "telegram",
    "date": "2022-02-26T09:40:11",
    "sourceMessagePlainText": "Hello, how to get from Odessa to Poland? Today, maybe tomorrow vehicles are not allowed to move",
    "address": "Odessa is in Ukraine and Poland is in Europe.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0
      },
      {
        "category": "Shelter",
        "probability": 0
      },
      {
        "category": "Health Services",
        "probability": 0
      },
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Odessa is in Ukraine and Poland is in Europe."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0    },    {        \"category\": \"Shelter\",        \"probability\": 0    },    {        \"category\": \"Health Services\",        \"probability\": 0    },    {        \"category\": \"Transportation\",        \"probability\": 1    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 98,
      "type": "message",
      "date": "2022-02-26T12: 39: 23",
      "from": "Lame Victoria",
      "from_id": "user1013832221",
      "text": "Good evening. Tomorrow we plan to cross the BREAKTHROUGH border (3 adults and a child), please tell me if there is anyone of ours who can help coordinate."
    },
    "id": "7",
    "source": "telegram",
    "date": "2022-02-26T12:39:23",
    "sourceMessagePlainText": "Good evening. Tomorrow we plan to cross the BREAKTHROUGH border (3 adults and a child), please tell me if there is anyone of ours who can help coordinate.",
    "address": "The physical location mentioned in the text is the BREAKTHROUGH border.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is the BREAKTHROUGH border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location mentioned in the text is the BREAKTHROUGH border. { lat: \"\", lng: \"\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " We need:- Food- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed[    {\"Food\": 0.125, \"Shelter\": 0.125, \"Health Services\": 0.125, \"Transportation\": 0.125, \"Translation\": 0.125, \"Legal\": 0.125, \"Volunteering\": 0.125, \"Volunteers Needed\": 0.125}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 101,
      "type": "message",
      "date": "2022-02-26T13: 22: 06",
      "edited": "2022-02-26T13: 22: 22",
      "from": "Maxim",
      "from_id": "user696946692",
      "reply_to_message_id": 98,
      "text": "Tomorrow we go the same way ... A 21-year-old boy with a child on a power of attorney .. I'm worried, maybe I'll catch the eye of a good person 🥺😔🤞"
    },
    "id": "8",
    "source": "telegram",
    "date": "2022-02-26T13:22:06",
    "sourceMessagePlainText": "Tomorrow we go the same way ... A 21-year-old boy with a child on a power of attorney .. I'm worried, maybe I'll catch the eye of a good person 🥺😔🤞",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏼[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "🏻Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "🏻Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 124,
      "type": "message",
      "date": "2022-02-26T14: 12: 25",
      "from": "from Ꮇ ศ ғ เส —͟͟͞͞𖣘",
      "from_id": "user1482807518",
      "text": "Please tell me how to get to the border from Zaporozhye?"
    },
    "id": "9",
    "source": "telegram",
    "date": "2022-02-26T14:12:25",
    "sourceMessagePlainText": "Please tell me how to get to the border from Zaporozhye?",
    "address": "Zaporozhye is located in southeastern Ukraine, on the banks of the Dnieper River. The city is approximately 650 kilometers (400 miles) from the border with Russia.",
    "coords": {
      "lat": 47.8388,
      "lng": 35.1395
    },
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Zaporozhye is located in southeastern Ukraine, on the banks of the Dnieper River. The city is approximately 650 kilometers (400 miles) from the border with Russia."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 47.8388, lng: 35.1395 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 126,
      "type": "message",
      "date": "2022-02-26T14: 14: 21",
      "edited": "2022-02-26T17: 32: 47",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "text": [
        {
          "type": "bold",
          "text": "Free consultations in Poland for foreigners in their native language \n"
        },
        "Foreigners in Poland have another opportunity to receive free consultations on various issues at home \n",
        {
          "type": "text_link",
          "text": "Polish Migration Forum",
          "href": "http://www.forummigracyjne.org/"
        },
        "\nopened records for free consultations on various topics. Support for migrants will be provided in Russian, Polish, English, if necessary, the Polish Migration Forum will provide the necessary translation into other languages. \n \" We invite migrants for free consultations with our experts: lawyer, integration specialist, psychologist, career consultant, company creation and development specialist, mother support specialist with children under 2 years of age \"-, according to the Forum's website. \n",
        {
          "type": "bold",
          "text": "Integration Specialist \n"
        },
        "will help in the preparation of documents in government agencies, in the settlement of issues related to health insurance and social benefits.",
        {
          "type": "bold",
          "text": "\nLawyer. \n"
        },
        "Advise on family, labor law and legalization of stay. Also help in preparing various applications and letters to government agencies.",
        {
          "type": "bold",
          "text": "\nCareer Consultant \n"
        },
        "It will help you choose the best career path, help you write a resume and cover letter, help you find a job.",
        {
          "type": "bold",
          "text": "\nSpecialist in business development and opening. \n"
        },
        "Answer questions about starting your own business, choose the best form of doing business, as well as advise in the field of taxation.",
        {
          "type": "bold",
          "text": "\nMobile and Psychologist of the School of Childbirth \n"
        },
        "It will help to prepare for childbirth. They will talk about the physiological and psychological aspects of childbirth, as well as answer questions on the topic of \" stay in the maternity hospital \"",
        {
          "type": "bold",
          "text": "\nPsychologist. Moms Support Group. \n"
        },
        "Mothers of children under 2 are invited to participate in support group meetings. During the sessions you can discuss the child's development, as well as other topics that are important for young mothers \nPolish Migration Forum is located in Warsaw at: ul. Szpitalna 5/14 \nRecord for free consultations is carried out by phone from 10.00 to 15.00 from Monday to Friday: 692-913-993 and 22-110-00-85. \nYou can also register through the form at the link: ",
        {
          "type": "text_link",
          "text": "https://goo.gl/forms/gWVZVvvo7rPtSXhF3",
          "href": "https://goo.gl/forms/gWVZVvvo7rPtSXhF3"
        },
        "\nor by e-mail:",
        {
          "type": "email",
          "text": "zapisy@forummigracyjne.org"
        },
        ""
      ]
    },
    "id": "10",
    "source": "telegram",
    "date": "2022-02-26T14:14:21",
    "sourceMessagePlainText": "Free consultations in Poland for foreigners in their native language \n Foreigners in Poland have another opportunity to receive free consultations on various issues at home \n Polish Migration Forum \nopened records for free consultations on various topics. Support for migrants will be provided in Russian, Polish, English, if necessary, the Polish Migration Forum will provide the necessary translation into other languages. \n \" We invite migrants for free consultations with our experts: lawyer, integration specialist, psychologist, career consultant, company creation and development specialist, mother support specialist with children under 2 years of age \"-, according to the Forum's website. \n Integration Specialist \n will help in the preparation of documents in government agencies, in the settlement of issues related to health insurance and social benefits. \nLawyer. \n Advise on family, labor law and legalization of stay. Also help in preparing various applications and letters to government agencies. \nCareer Consultant \n It will help you choose the best career path, help you write a resume and cover letter, help you find a job. \nSpecialist in business development and opening. \n Answer questions about starting your own business, choose the best form of doing business, as well as advise in the field of taxation. \nMobile and Psychologist of the School of Childbirth \n It will help to prepare for childbirth. They will talk about the physiological and psychological aspects of childbirth, as well as answer questions on the topic of \" stay in the maternity hospital \" \nPsychologist. Moms Support Group. \n Mothers of children under 2 are invited to participate in support group meetings. During the sessions you can discuss the child's development, as well as other topics that are important for young mothers \nPolish Migration Forum is located in Warsaw at: ul. Szpitalna 5/14 \nRecord for free consultations is carried out by phone from 10.00 to 15.00 from Monday to Friday: 692-913-993 and 22-110-00-85. \nYou can also register through the form at the link:  https://goo.gl/forms/gWVZVvvo7rPtSXhF3 \nor by e-mail: zapisy@forummigracyjne.org  ",
    "gmapLink": null,
    "address": "Polish Migration Forum is located in Warsaw at ul. Szpitalna 5/14.",
    "coords": {
      "lat": 52.2407,
      "lng": 21.0067
    },
    "sentiment": [
      {
        "Food": 0
      },
      {
        "Shelter": 0
      },
      {
        "Health Services": 1
      },
      {
        "Transportation": 0
      },
      {
        "Translation": 1
      },
      {
        "Legal": 1
      },
      {
        "Volunteering": 0
      },
      {
        "Volunteers Needed": 0
      }
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Polish Migration Forum is located in Warsaw at ul. Szpitalna 5/14."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.2407, lng: 21.0067 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.0},    {\"Shelter\": 0.0},    {\"Health Services\": 1.0},    {\"Transportation\": 0.0},    {\"Translation\": 1.0},    {\"Legal\": 1.0},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 127,
      "type": "message",
      "date": "2022-02-26T14: 18: 27",
      "edited": "2022-02-26T14: 25: 27",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "text": [
        {
          "type": "bold",
          "text": "Polish Railways allowed Ukrainians free travel \n"
        },
        "Polish Railways has allowed Ukrainians free travel \nTell TLK and IC trains will be free for Ukrainians. The permit will last until March 25. All you need to do is show your passport or other document proving your citizenship when boarding the train, the newspaper said.",
        {
          "type": "text_link",
          "text": "PKP Intercity"
        }
      ]
    },
    "id": "11",
    "source": "telegram",
    "date": "2022-02-26T14:18:27",
    "sourceMessagePlainText": "Polish Railways allowed Ukrainians free travel \n Polish Railways has allowed Ukrainians free travel \nTell TLK and IC trains will be free for Ukrainians. The permit will last until March 25. All you need to do is show your passport or other document proving your citizenship when boarding the train, the newspaper said. PKP Intercity ",
    "gmapLink": null,
    "address": "The physical location from this text is Poland.",
    "coords": {
      "lat": 52.237049,
      "lng": 21.017532
    },
    "sentiment": [
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Health Services",
        "probability": 0
      },
      {
        "category": "Food",
        "probability": 0
      },
      {
        "category": "Shelter",
        "probability": 0
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.237049, lng: 21.017532 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {\"category\": \"Transportation\", \"probability\": 1.0},  {\"category\": \"Volunteering\", \"probability\": 0.0},  {\"category\": \"Volunteers Needed\", \"probability\": 0.0},  {\"category\": \"Legal\", \"probability\": 0.0},  {\"category\": \"Translation\", \"probability\": 0.0},  {\"category\": \"Health Services\", \"probability\": 0.0},  {\"category\": \"Food\", \"probability\": 0.0},  {\"category\": \"Shelter\", \"probability\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 157,
      "type": "message",
      "date": "2022-02-26T17: 32: 18",
      "from": "Danochka🤪",
      "from_id": "user5031001207",
      "text": "Please help! We need your help financially, who can. \nThank you 🙏"
    },
    "id": "12",
    "source": "telegram",
    "date": "2022-02-26T17:32:18",
    "sourceMessagePlainText": "Please help! We need your help financially, who can. \nThank you 🙏",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 167,
      "type": "message",
      "date": "2022-02-26T17: 39: 38",
      "from": "Alexandra",
      "from_id": "user498535876",
      "text": "People, who gets to Poland? We try asshole here from Lviv, there are a lot of people"
    },
    "id": "13",
    "source": "telegram",
    "date": "2022-02-26T17:39:38",
    "sourceMessagePlainText": "People, who gets to Poland? We try asshole here from Lviv, there are a lot of people",
    "address": "This text is not about a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is not about a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text is not about a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " from Lviv.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " like us, who need help.Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " like us, who need help.Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 168,
      "type": "message",
      "date": "2022-02-26T17: 39: 45",
      "from": "Alexandra",
      "from_id": "user498535876",
      "text": "Much more than in the photo"
    },
    "id": "14",
    "source": "telegram",
    "date": "2022-02-26T17:39:45",
    "sourceMessagePlainText": "Much more than in the photo",
    "address": "The photo was taken in a studio.",
    "coords": null,
    "sentiment": null,
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The photo was taken in a studio."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", the house is in dire need of repairShelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", the house is in dire need of repairShelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 172,
      "type": "message",
      "date": "2022-02-26T17: 43: 23",
      "from": "TK",
      "from_id": "user2104039730",
      "text": "Help financially… we just came without a penny at all (((("
    },
    "id": "15",
    "source": "telegram",
    "date": "2022-02-26T17:43:23",
    "sourceMessagePlainText": "Help financially… we just came without a penny at all ((((",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "([0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Financial"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Financial",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 175,
      "type": "message",
      "date": "2022-02-26T17: 44: 42",
      "from": "Uta Wentzel",
      "from_id": "user1198940182",
      "text": "Sorry, I don't speak ucrainian: \nWe can offer a Transfer vom Breslau / Poland tomorrow Morning to the North of Germany. Two friends of mine drove spontaneously today with a Minivan to Breslau and can bring Four people ( and pets) to nothern Germany (if wanted). We collected money for food and fuel, they also have a Seat for children on Board. In Flensburg / Germany we are preparing to help and find accomodation. \nYou are very welcome to contact me directly of give my contact Details to people who are looking for Transfer. \nKeep safe! "
    },
    "id": "16",
    "source": "telegram",
    "date": "2022-02-26T17:44:42",
    "sourceMessagePlainText": "Sorry, I don't speak ucrainian: \nWe can offer a Transfer vom Breslau / Poland tomorrow Morning to the North of Germany. Two friends of mine drove spontaneously today with a Minivan to Breslau and can bring Four people ( and pets) to nothern Germany (if wanted). We collected money for food and fuel, they also have a Seat for children on Board. In Flensburg / Germany we are preparing to help and find accomodation. \nYou are very welcome to contact me directly of give my contact Details to people who are looking for Transfer. \nKeep safe! ",
    "address": "Breslau, Poland",
    "coords": {
      "lat": 51.1078852,
      "lng": 17.0385376
    },
    "sentiment": [
      {
        "Food": 0,
        "Shelter": 0.125,
        "Health Services": 0,
        "Transportation": 0.25,
        "Translation": 0,
        "Legal": 0,
        "Volunteering": 0,
        "Volunteers Needed": 0
      }
    ],
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Breslau, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 51.1078852, \"lng\": 17.0385376 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\": 0.0, \"Shelter\": 0.125, \"Health Services\": 0.0, \"Transportation\": 0.25, \"Translation\": 0.0, \"Legal\": 0.0, \"Volunteering\": 0.0, \"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 176,
      "type": "message",
      "date": "2022-02-26T17: 46: 40",
      "from": "Uta Wentzel",
      "from_id": "user1198940182",
      "text": "Google translate: Sorry, I don't speak Ukrainian: \nWe can offer a transfer to Breslau / Poland tomorrow morning in northern Germany. Two of my friends spontaneously took a minivan to Breslau today and can bring four people (and pets) to northern Germany (optional) We have raised money for food and fuel, they also have a child seat on board.In Flensburg / Germany we are ready to help and find accommodation. \nPlease contact me directly to provide my contact details. given to people looking for a show. \nKeep secret! \n \nLove, Uta "
    },
    "id": "17",
    "source": "telegram",
    "date": "2022-02-26T17:46:40",
    "sourceMessagePlainText": "Google translate: Sorry, I don't speak Ukrainian: \nWe can offer a transfer to Breslau / Poland tomorrow morning in northern Germany. Two of my friends spontaneously took a minivan to Breslau today and can bring four people (and pets) to northern Germany (optional) We have raised money for food and fuel, they also have a child seat on board.In Flensburg / Germany we are ready to help and find accommodation. \nPlease contact me directly to provide my contact details. given to people looking for a show. \nKeep secret! \n \nLove, Uta ",
    "address": "The text provides a physical location of Flensburg, Germany.",
    "coords": {
      "lat": 54.78,
      "lng": 9.43
    },
    "sentiment": null,
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text provides a physical location of Flensburg, Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 54.78, lng: 9.43 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1, \"Shelter\": 0.2, \"Health Services\": 0.3, \"Transportation\": 0.4, \"Translation\": 0.5, \"Legal\": 0.6, \"Volunteering\": 0.7, \"Volunteers Needed\": 0.8},    {\"Food\": 0.2, \"Shelter\": 0.3, \"Health Services\": 0.4, \"Transportation\": 0.5, \"Translation\": 0.6, \"Legal\": 0.7, \"Volunteering\": 0.8, \"Volunteers Needed\": 0.9},    {\"Food\": 0.3, \"Shelter\": 0.4, \"Health Services\": 0.5, \"Transportation\": 0.6, \"Translation\": 0.7, \"Legal\": 0.8, \"Volunteering\": 0.9, \"Volunteers Needed\": 1.0},    {\"Food\": 0.4, \"Shelter\": 0.5, \"Health Services\": 0.6, \"Transportation\": 0.7, \"Translation\": 0.8, \"Legal\": 0.9,"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 205,
      "type": "message",
      "date": "2022-02-26T18: 03: 28",
      "from": "Victoria Chumak",
      "from_id": "user923932995",
      "text": "Good night, I have two questions: can I buy eye lenses from Medica or somewhere nearby. Do I need a prescription? And if we still cross the border, there is a place where 4 of us women and four children can sleep. For a fee. "
    },
    "id": "18",
    "source": "telegram",
    "date": "2022-02-26T18:03:28",
    "sourceMessagePlainText": "Good night, I have two questions: can I buy eye lenses from Medica or somewhere nearby. Do I need a prescription? And if we still cross the border, there is a place where 4 of us women and four children can sleep. For a fee. ",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0
      },
      {
        "Shelter": 0.125
      },
      {
        "Health Services": 0.125
      },
      {
        "Transportation": 0
      },
      {
        "Translation": 0
      },
      {
        "Legal": 0
      },
      {
        "Volunteering": 0
      },
      {
        "Volunteers Needed": 0
      }
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.0},    {\"Shelter\": 0.125},    {\"Health Services\": 0.125},    {\"Transportation\": 0.0},    {\"Translation\": 0.0},    {\"Legal\": 0.0},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 206,
      "type": "message",
      "date": "2022-02-26T18: 03: 35",
      "edited": "2022-02-26T20: 09: 40",
      "from": "Vera Matvietz",
      "from_id": "user655712746",
      "text": "Good night! Who is in Przemyśl now and can take the woman to Wrocław? Respond!"
    },
    "id": "19",
    "source": "telegram",
    "date": "2022-02-26T18:03:35",
    "sourceMessagePlainText": "Good night! Who is in Przemyśl now and can take the woman to Wrocław? Respond!",
    "address": "Przemyśl, Poland",
    "coords": {
      "lat": 49.78,
      "lng": 22.77
    },
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Przemyśl, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.78, lng: 22.77 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 208,
      "type": "message",
      "date": "2022-02-26T18: 07: 10",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "reply_to_message_id": 207,
      "text": "Give the maximum."
    },
    "id": "20",
    "source": "telegram",
    "date": "2022-02-26T18:07:10",
    "sourceMessagePlainText": "Give the maximum.",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "Food": 1,
        "Shelter": 1,
        "Health Services": 1,
        "Transportation": 1,
        "Translation": 1,
        "Legal": 1,
        "Volunteering": 1,
        "Volunteers Needed": 1
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"Food\": 1,        \"Shelter\": 1,        \"Health Services\": 1,        \"Transportation\": 1,        \"Translation\": 1,        \"Legal\": 1,        \"Volunteering\": 1,        \"Volunteers Needed\": 1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 210,
      "type": "message",
      "date": "2022-02-26T18: 07: 33",
      "edited": "2022-02-26T19: 32: 11",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "text": [
        {
          "type": "link",
          "text": "https://t.me/refugeesinPoland"
        },
        "Help for Ukrainians in Poland"
      ]
    },
    "id": "21",
    "source": "telegram",
    "date": "2022-02-26T18:07:33",
    "sourceMessagePlainText": "https://t.me/refugeesinPoland Help for Ukrainians in Poland ",
    "gmapLink": null,
    "address": "Poland",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{  \"lat\": 52.2296756,  \"lng\": 21.0122287}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "    [        {            \"category\": \"Food\",            \"probability\": 0.1        },        {            \"category\": \"Shelter\",            \"probability\": 0.2        },        {            \"category\": \"Health Services\",            \"probability\": 0.3        },        {            \"category\": \"Transportation\",            \"probability\": 0.4        },        {            \"category\": \"Translation\",            \"probability\": 0.5        },        {            \"category\": \"Legal\",            \"probability\": 0.6        },        {            \"category\": \"Volunteering\",            \"probability\": 0.7        },        {            \"category\": \"Volunteers Needed\",            \"probability\": 0.8        }    ]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 228,
      "type": "message",
      "date": "2022-02-26T18: 22: 10",
      "from": "Nazar Shkribliak",
      "from_id": "user482189988",
      "forwarded_from": "Assistance to Refugees in Poland (NISA)",
      "text": [
        "MEDICA-SHEGINI 13 ️ THERE ARE 13 places of the car depart from Przemyśl. We go to KRAKIV - Belko-Byala - Zywiec, we also provide accommodation of about 70-100 places NOW !!! \nOlena",
        {
          "type": "phone",
          "text": "519783547"
        },
        "or in private"
      ]
    },
    "id": "22",
    "source": "telegram",
    "date": "2022-02-26T18:22:10",
    "sourceMessagePlainText": "MEDICA-SHEGINI 13 ️ THERE ARE 13 places of the car depart from Przemyśl. We go to KRAKIV - Belko-Byala - Zywiec, we also provide accommodation of about 70-100 places NOW !!! \nOlena 519783547 or in private ",
    "gmapLink": null,
    "address": "Przemyśl, Poland",
    "coords": {
      "lat": 49.78,
      "lng": 22.77
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Przemyśl, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.78, lng: 22.77 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "!!![  {    \"category\": \"Food\",    \"probability\": 0.15  },  {    \"category\": \"Shelter\",    \"probability\": 0.6  },  {    \"category\": \"Health Services\",    \"probability\": 0.05  },  {    \"category\": \"Transportation\",    \"probability\": 0.2  },  {    \"category\": \"Translation\",    \"probability\": 0  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "!!!Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "!!!Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 229,
      "type": "message",
      "date": "2022-02-26T18: 23: 19",
      "from": "Nazar Shkribliak",
      "from_id": "user482189988",
      "text": [
        "MEDICA-SHEGINI 13 ️ THERE ARE 13 places of the car depart from Przemyśl. We go to KRAKIV - Belko-Byala - Zywiec, we also provide accommodation of about 70-100 places NOW !!! \nOlena",
        {
          "type": "phone",
          "text": "519783547"
        },
        "or in private"
      ]
    },
    "id": "23",
    "source": "telegram",
    "date": "2022-02-26T18:23:19",
    "sourceMessagePlainText": "MEDICA-SHEGINI 13 ️ THERE ARE 13 places of the car depart from Przemyśl. We go to KRAKIV - Belko-Byala - Zywiec, we also provide accommodation of about 70-100 places NOW !!! \nOlena 519783547 or in private ",
    "gmapLink": null,
    "address": "Przemyśl, Poland",
    "coords": {
      "lat": 49.78,
      "lng": 22.77
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Przemyśl, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.78, lng: 22.77 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "!!![  {    \"category\": \"Food\",    \"probability\": 0  },  {    \"category\": \"Shelter\",    \"probability\": 1  },  {    \"category\": \"Health Services\",    \"probability\": 0  },  {    \"category\": \"Transportation\",    \"probability\": 1  },  {    \"category\": \"Translation\",    \"probability\": 0  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "!!!Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "!!!Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 231,
      "type": "message",
      "date": "2022-02-26T18: 25: 47",
      "from": "Arina",
      "from_id": "user1700053025",
      "text": "Who will go from Lviv to Poland in the near future, can you please pick up 2 women and 5 children."
    },
    "id": "24",
    "source": "telegram",
    "date": "2022-02-26T18:25:47",
    "sourceMessagePlainText": "Who will go from Lviv to Poland in the near future, can you please pick up 2 women and 5 children.",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.2
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.2    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.4    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 233,
      "type": "message",
      "date": "2022-02-26T18: 25: 58",
      "from": "Julia Dunaievska",
      "from_id": "user425021157",
      "text": "Will a man be released from Ukraine who has an emergency request for a non-immigrant visa in Poland?"
    },
    "id": "25",
    "source": "telegram",
    "date": "2022-02-26T18:25:58",
    "sourceMessagePlainText": "Will a man be released from Ukraine who has an emergency request for a non-immigrant visa in Poland?",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 234,
      "type": "message",
      "date": "2022-02-26T18: 26: 13",
      "from": "Arina",
      "from_id": "user1700053025",
      "reply_to_message_id": 231,
      "text": "Katowice course"
    },
    "id": "26",
    "source": "telegram",
    "date": "2022-02-26T18:26:13",
    "sourceMessagePlainText": "Katowice course",
    "address": "Katowice, Poland",
    "coords": {
      "lat": 50.26489,
      "lng": 19.02378
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Katowice, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.26489, lng: 19.02378 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " is designed to help people who are struggling with the language. The course is free of charge and it is open to everyone.[0.125, 0.25, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " for volunteersVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " for volunteersVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 238,
      "type": "message",
      "date": "2022-02-26T18: 29: 11",
      "from": "lithium",
      "from_id": "user932081199",
      "text": "Good evening, someone will go from Przemyśl to the boat, 2 girls need to be transferred"
    },
    "id": "27",
    "source": "telegram",
    "date": "2022-02-26T18:29:11",
    "sourceMessagePlainText": "Good evening, someone will go from Przemyśl to the boat, 2 girls need to be transferred",
    "address": "Przemyśl",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Przemyśl"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Poland{ lat: 49.78, lng: 22.77 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to the boat, we have a car, we can take 3 people.[0.125, 0.25, 0.125, 0.125, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to the refugee camp in Lesbos- Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to the refugee camp in Lesbos- Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 245,
      "type": "message",
      "date": "2022-02-26T18: 33: 36",
      "from": "Victoria",
      "from_id": "user1203741620",
      "text": "Please take 3 girls from Kiev to the border or beyond"
    },
    "id": "28",
    "source": "telegram",
    "date": "2022-02-26T18:33:36",
    "sourceMessagePlainText": "Please take 3 girls from Kiev to the border or beyond",
    "address": "Kiev",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Kiev"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Ukraine{ \"lat\": 50.45, \"lng\": 30.523333 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 247,
      "type": "message",
      "date": "2022-02-26T18: 34: 34",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "text": "I'm leaving Dorohusk in an hour (I hope), the time kiosk will be exactly 2 days as I'm on the road, and 2 days without sleep. Where you can sleep. I just can not go further, and check in at 2 o'clock in the afternoon . "
    },
    "id": "29",
    "source": "telegram",
    "date": "2022-02-26T18:34:34",
    "sourceMessagePlainText": "I'm leaving Dorohusk in an hour (I hope), the time kiosk will be exactly 2 days as I'm on the road, and 2 days without sleep. Where you can sleep. I just can not go further, and check in at 2 o'clock in the afternoon . ",
    "address": "The text is describing a location in Dorohusk, and the person is hoping to leave in an hour. They are also describing a time kiosk, so the location is likely near one.",
    "coords": {
      "lat": 52.204,
      "lng": 23.6
    },
    "sentiment": [
      {
        "Food": 0.2,
        "Shelter": 0.4,
        "Health Services": 0.1,
        "Transportation": 0.1,
        "Translation": 0.05,
        "Legal": 0.05,
        "Volunteering": 0.05,
        "Volunteers Needed": 0.05
      },
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.1,
        "Transportation": 0.1,
        "Translation": 0.1,
        "Legal": 0.1,
        "Volunteering": 0.1,
        "Volunteers Needed": 0.1
      },
      {
        "Food": 0.05,
        "Shelter": 0.1,
        "Health Services": 0.05,
        "Transportation": 0.05,
        "Translation": 0.05,
        "Legal": 0.05,
        "Volunteering": 0.05,
        "Volunteers Needed": 0.05
      }
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is describing a location in Dorohusk, and the person is hoping to leave in an hour. They are also describing a time kiosk, so the location is likely near one."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.204, lng: 23.6 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\": 0.2, \"Shelter\": 0.4, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.05, \"Legal\": 0.05, \"Volunteering\": 0.05, \"Volunteers Needed\": 0.05},{\"Food\": 0.1, \"Shelter\": 0.2, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.1, \"Volunteers Needed\": 0.1},{\"Food\": 0.05, \"Shelter\": 0.1, \"Health Services\": 0.05, \"Transportation\": 0.05, \"Translation\": 0.05, \"Legal\": 0.05, \"Volunteering\": 0.05, \"Volunteers Needed\": 0.05}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 248,
      "type": "message",
      "date": "2022-02-26T18: 35: 09",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "text": "I'm not a big dog with two teenage children"
    },
    "id": "30",
    "source": "telegram",
    "date": "2022-02-26T18:35:09",
    "sourceMessagePlainText": "I'm not a big dog with two teenage children",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.25, 0.125, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 249,
      "type": "message",
      "date": "2022-02-26T18: 35: 33",
      "edited": "2022-02-26T18: 37: 20",
      "from": "Uta Wentzel",
      "from_id": "user1198940182",
      "text": "Two of my friends spontaneously took a minivan to Breslau today and can bring four people (and pets) to northern Germany (optional). We collected money for food and fuel, they also have a child seat on board. In Flensburg / Germany we are ready to help and find accommodation. \nPlease contact me directly to provide my contact details to people looking for a transfer. \nKeep secret! \n \nLove, Uta "
    },
    "id": "31",
    "source": "telegram",
    "date": "2022-02-26T18:35:33",
    "sourceMessagePlainText": "Two of my friends spontaneously took a minivan to Breslau today and can bring four people (and pets) to northern Germany (optional). We collected money for food and fuel, they also have a child seat on board. In Flensburg / Germany we are ready to help and find accommodation. \nPlease contact me directly to provide my contact details to people looking for a transfer. \nKeep secret! \n \nLove, Uta ",
    "address": "The text provides a location of Flensburg, Germany.",
    "coords": {
      "lat": 54.783333,
      "lng": 9.4333333
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text provides a location of Flensburg, Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 54.783333, lng: 9.4333333 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"category\": \"Food\", \"probability\": 0.1}, {\"category\": \"Shelter\", \"probability\": 0.2}, {\"category\": \"Health Services\", \"probability\": 0.1}, {\"category\": \"Transportation\", \"probability\": 0.4}, {\"category\": \"Translation\", \"probability\": 0.1}, {\"category\": \"Legal\", \"probability\": 0.1}, {\"category\": \"Volunteering\", \"probability\": 0.1}, {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 274,
      "type": "message",
      "date": "2022-02-26T18: 54: 38",
      "from": "Oksana",
      "from_id": "user5283327472",
      "reply_to_message_id": 269,
      "text": "And why don't you darlings stop shooting and go home 🤔"
    },
    "id": "32",
    "source": "telegram",
    "date": "2022-02-26T18:54:38",
    "sourceMessagePlainText": "And why don't you darlings stop shooting and go home 🤔",
    "address": "This text was posted on Twitter, so it doesn't have a physical location.",
    "coords": null,
    "sentiment": [
      0.2,
      0.1,
      0.05,
      0.05,
      0.05,
      0.05,
      0.1,
      0.1
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text was posted on Twitter, so it doesn't have a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text was posted on Twitter, so it doesn't have a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.1, 0.05, 0.05, 0.05, 0.05, 0.1, 0.1]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 276,
      "type": "message",
      "date": "2022-02-26T18: 54: 54",
      "from": "yasn",
      "from_id": "user723428389",
      "reply_to_message_id": 274,
      "text": "Ukraine is our land, why leave"
    },
    "id": "33",
    "source": "telegram",
    "date": "2022-02-26T18:54:54",
    "sourceMessagePlainText": "Ukraine is our land, why leave",
    "address": " itUkraine",
    "coords": {
      "lat": 44.366667,
      "lng": 33.3
    },
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " itUkraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 44.366667, lng: 33.3 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " it?[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " it?Volunteers needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " it?Volunteers needed",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 278,
      "type": "message",
      "date": "2022-02-26T18: 55: 09",
      "from": "Oksana",
      "from_id": "user5283327472",
      "reply_to_message_id": 276,
      "text": "Whose is yours?"
    },
    "id": "34",
    "source": "telegram",
    "date": "2022-02-26T18:55:09",
    "sourceMessagePlainText": "Whose is yours?",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.05
      },
      {
        "Transportation": 0.15
      },
      {
        "Translation": 0.1
      },
      {
        "Legal": 0.05
      },
      {
        "Volunteering": 0.2
      },
      {
        "Volunteers Needed": 0.2
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.15},    {\"Translation\": 0.1},    {\"Legal\": 0.05},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 279,
      "type": "message",
      "date": "2022-02-26T18: 55: 15",
      "from": "yasn",
      "from_id": "user723428389",
      "reply_to_message_id": 278,
      "text": "My"
    },
    "id": "35",
    "source": "telegram",
    "date": "2022-02-26T18:55:15",
    "sourceMessagePlainText": "My",
    "address": " cousin is moving to DetroitThe physical location from this text is Detroit.",
    "coords": null,
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " cousin is moving to DetroitThe physical location from this text is Detroit."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " The latitude and longitude of Detroit is 42.3314° N, 83.0458° W.{  lat: 42.3314,  lng: -83.0458}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " name is [insert name], and I am a [insert profession] who is looking to help with [insert volunteering opportunity]. I am available on [insert days of the week] and [insert time of day]. I speak [insert language(s)] and am interested in helping with [insert type of help needed].[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\","
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " organization provides free legal services to low-income residents.Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " organization provides free legal services to low-income residents.Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 280,
      "type": "message",
      "date": "2022-02-26T18: 55: 15",
      "from": "Oksana",
      "from_id": "user5283327472",
      "text": "Show document?"
    },
    "id": "36",
    "source": "telegram",
    "date": "2022-02-26T18:55:15",
    "sourceMessagePlainText": "Show document?",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "```[    {        \"category\": \"Food\",        \"probability\": 0.75    },    {        \"category\": \"Shelter\",        \"probability\": 0.5    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.15    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.05    },    {        \"category\": \"Volunteering\",        \"probability\": 0.03    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.02    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers NeededThe Red Cross is looking for volunteers to help with disaster relief efforts. If you are interested in volunteering, please sign up here."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers NeededThe Red Cross is looking for volunteers to help with disaster relief efforts. If you are interested in volunteering, please sign up here.",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 283,
      "type": "message",
      "date": "2022-02-26T18: 55: 38",
      "edited": "2022-02-26T19: 24: 53",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 281,
      "text": "Ban you?"
    },
    "id": "37",
    "source": "telegram",
    "date": "2022-02-26T18:55:38",
    "sourceMessagePlainText": "Ban you?",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.2
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.05
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.2
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.2},    {\"category\": \"Shelter\", \"probability\": 0.1},    {\"category\": \"Health Services\", \"probability\": 0.05},    {\"category\": \"Transportation\", \"probability\": 0.1},    {\"category\": \"Translation\", \"probability\": 0.2},    {\"category\": \"Legal\", \"probability\": 0.1},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " For what? I haven't done anything wrongVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " For what? I haven't done anything wrongVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 284,
      "type": "message",
      "date": "2022-02-26T18: 55: 40",
      "from": "yasn",
      "from_id": "user723428389",
      "text": "Stop the senseless bloodshed! The Russian people are not your enemy, surrender! And you will be treated well: you will receive delicious hot food and warm clothes, and if you are wounded - medical care. Russian soldiers are your friends!"
    },
    "id": "38",
    "source": "telegram",
    "date": "2022-02-26T18:55:40",
    "sourceMessagePlainText": "Stop the senseless bloodshed! The Russian people are not your enemy, surrender! And you will be treated well: you will receive delicious hot food and warm clothes, and if you are wounded - medical care. Russian soldiers are your friends!",
    "address": "The text is located in Russia.",
    "coords": {
      "lat": 55.755826,
      "lng": 37.6173
    },
    "sentiment": [
      {
        "Food": "1.0"
      },
      {
        "Shelter": "1.0"
      },
      {
        "Health Services": "1.0"
      },
      {
        "Transportation": "1.0"
      },
      {
        "Translation": "0.0"
      },
      {
        "Legal": "0.0"
      },
      {
        "Volunteering": "0.0"
      },
      {
        "Volunteers Needed": "0.0"
      }
    ],
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is located in Russia."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 55.755826, lng: 37.6173 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": \"1.0\"},    {\"Shelter\": \"1.0\"},    {\"Health Services\": \"1.0\"},    {\"Transportation\": \"1.0\"},    {\"Translation\": \"0.0\"},    {\"Legal\": \"0.0\"},    {\"Volunteering\": \"0.0\"},    {\"Volunteers Needed\": \"0.0\"}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 286,
      "type": "message",
      "date": "2022-02-26T18: 55: 47",
      "from": "Oksana",
      "from_id": "user5283327472",
      "text": "No, I don't need it, a document on the ground"
    },
    "id": "39",
    "source": "telegram",
    "date": "2022-02-26T18:55:47",
    "sourceMessagePlainText": "No, I don't need it, a document on the ground",
    "address": " will sufficeThe physical location is \"on the ground.\"",
    "sentiment": null,
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " will sufficeThe physical location is \"on the ground.\""
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"on the ground\", lng: \"will suffice\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " says.[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " says in English and Spanish.Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " says in English and Spanish.Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 287,
      "type": "message",
      "date": "2022-02-26T18: 56: 00",
      "from": "Julia Dunaievska",
      "from_id": "user425021157",
      "reply_to_message_id": 273,
      "text": "Delete these"
    },
    "id": "40",
    "source": "telegram",
    "date": "2022-02-26T18:56:00",
    "sourceMessagePlainText": "Delete these",
    "address": " wordsN/A",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " wordsN/A"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "N/A"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " instructions when you are done[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0.25    },    {        \"category\": \"Legal\",        \"probability\": 0.25    },    {        \"category\": \"Volunteering\",        \"probability\": 0.25    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.25    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " instructions and write your own text hereVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " instructions and write your own text hereVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 288,
      "type": "message",
      "date": "2022-02-26T18: 56: 07",
      "from": "Евгения",
      "from_id": "user730903923",
      "reply_to_message_id": 283,
      "text": "Please"
    },
    "id": "41",
    "source": "telegram",
    "date": "2022-02-26T18:56:07",
    "sourceMessagePlainText": "Please",
    "address": " meet me at the libraryThe library is a physical location.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " meet me at the libraryThe library is a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " see the table below"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " help us provideVolunteers needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " help us provideVolunteers needed",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 289,
      "type": "message",
      "date": "2022-02-26T18: 56: 08",
      "from": "Julia Dunaievska",
      "from_id": "user425021157",
      "reply_to_message_id": 269,
      "text": "And these"
    },
    "id": "42",
    "source": "telegram",
    "date": "2022-02-26T18:56:08",
    "sourceMessagePlainText": "And these",
    "address": " are the days of ElijahThere is no physical location mentioned in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " are the days of ElijahThere is no physical location mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " are the probabilities:[0.1, 0.2, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " are only a few of the categories of need that we address.Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " are only a few of the categories of need that we address.Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 292,
      "type": "message",
      "date": "2022-02-26T18: 56: 48",
      "edited": "2022-02-26T19: 05: 42",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "text": "Please remove everyone who writes nasty things"
    },
    "id": "43",
    "source": "telegram",
    "date": "2022-02-26T18:56:48",
    "sourceMessagePlainText": "Please remove everyone who writes nasty things",
    "address": " about our companyThis text does not contain enough information to extract a physical location.",
    "coords": null,
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " about our companyThis text does not contain enough information to extract a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 293,
      "type": "message",
      "date": "2022-02-26T18: 56: 49",
      "edited": "2022-02-26T18: 57: 12",
      "from": "Oksana",
      "from_id": "user5283327472",
      "text": "Why did you create a group to help Ukrainians. You are liars"
    },
    "id": "44",
    "source": "telegram",
    "date": "2022-02-26T18:56:49",
    "sourceMessagePlainText": "Why did you create a group to help Ukrainians. You are liars",
    "address": "I don't know.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "I don't know."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "![0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " and fascistsVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " and fascistsVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 294,
      "type": "message",
      "date": "2022-02-26T18: 57: 31",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "text": "People are so bad after these bombs and so many hours of travel"
    },
    "id": "45",
    "source": "telegram",
    "date": "2022-02-26T18:57:31",
    "sourceMessagePlainText": "People are so bad after these bombs and so many hours of travel",
    "address": "The physical location from this text is a place that has been bombed, and people are travelling there.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is a place that has been bombed, and people are travelling there."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The latitude and longitude from this text is {-33.45, -70.6667} JSON object."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ". We need more volunteers to help with translation, legal, and transportation.[{\"Food\":0.0,\"Shelter\":0.0,\"Health Services\":0.0,\"Transportation\":0.2,\"Translation\":0.2,\"Legal\":0.2,\"Volunteering\":0.0,\"Volunteers Needed\":0.4}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 297,
      "type": "message",
      "date": "2022-02-26T18: 57: 39",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 292,
      "text": "Deleted"
    },
    "id": "46",
    "source": "telegram",
    "date": "2022-02-26T18:57:39",
    "sourceMessagePlainText": "Deleted",
    "address": ": noThere is no physical location given in the text.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.4
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ": noThere is no physical location given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.4    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 300,
      "type": "message",
      "date": "2022-02-26T18: 58: 30",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 297,
      "text": "Thank you very much)"
    },
    "id": "47",
    "source": "telegram",
    "date": "2022-02-26T18:58:30",
    "sourceMessagePlainText": "Thank you very much)",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.25
      },
      {
        "Shelter": 0.5
      },
      {
        "Health Services": 0.75
      },
      {
        "Transportation": 1
      },
      {
        "Translation": 0.5
      },
      {
        "Legal": 0.75
      },
      {
        "Volunteering": 1
      },
      {
        "Volunteers Needed": 0.5
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\":0.25},    {\"Shelter\":0.5},    {\"Health Services\":0.75},    {\"Transportation\":1.0},    {\"Translation\":0.5},    {\"Legal\":0.75},    {\"Volunteering\":1.0},    {\"Volunteers Needed\":0.5}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 302,
      "type": "message",
      "date": "2022-02-26T18: 59: 03",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 299,
      "text": "What kind of bank do you have?"
    },
    "id": "48",
    "source": "telegram",
    "date": "2022-02-26T18:59:03",
    "sourceMessagePlainText": "What kind of bank do you have?",
    "address": "This text does not contain enough information to extract a physical location.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.3
      },
      {
        "Transportation": 0.4
      },
      {
        "Translation": 0.5
      },
      {
        "Legal": 0.6
      },
      {
        "Volunteering": 0.7
      },
      {
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to extract a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to extract a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This text does not contain enough information to answer the question."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This text does not contain enough information to answer the question.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 305,
      "type": "message",
      "date": "2022-02-26T18: 59: 30",
      "from": "C",
      "from_id": "user1757076400",
      "reply_to_message_id": 297,
      "text": "Turn it off"
    },
    "id": "49",
    "source": "telegram",
    "date": "2022-02-26T18:59:30",
    "sourceMessagePlainText": "Turn it off",
    "address": " at the power stripThe power strip is a physical location.",
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " at the power stripThe power strip is a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: null, lng: null }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[    {\"Food\":0.1},    {\"Shelter\":0.2},    {\"Health Services\":0.3},    {\"Transportation\":0.4},    {\"Translation\":0.5},    {\"Legal\":0.6},    {\"Volunteering\":0.7},    {\"Volunteers Needed\":0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " and on againThis text does not provide enough information to answer the question."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " and on againThis text does not provide enough information to answer the question.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 307,
      "type": "message",
      "date": "2022-02-26T18: 59: 44",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 304,
      "text": "I can't (on the minus card"
    },
    "id": "50",
    "source": "telegram",
    "date": "2022-02-26T18:59:44",
    "sourceMessagePlainText": "I can't (on the minus card",
    "address": ")This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ")This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ")[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ")Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ")Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 309,
      "type": "message",
      "date": "2022-02-26T18: 59: 51",
      "from": "C",
      "from_id": "user1757076400",
      "reply_to_message_id": 297,
      "text": [
        {
          "type": "mention",
          "text": "@yanvssssss"
        },
        "exclude the nit"
      ]
    },
    "id": "51",
    "source": "telegram",
    "date": "2022-02-26T18:59:51",
    "sourceMessagePlainText": "@yanvssssss exclude the nit ",
    "gmapLink": null,
    "address": "The physical location is not included in the text.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is not included in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not included in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.3    },    {        \"category\": \"Transportation\",        \"probability\": 0.4    },    {        \"category\": \"Translation\",        \"probability\": 0.5    },    {        \"category\": \"Legal\",        \"probability\": 0.6    },    {        \"category\": \"Volunteering\",        \"probability\": 0.7    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.8    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 312,
      "type": "message",
      "date": "2022-02-26T19: 00: 49",
      "edited": "2022-02-26T19: 01: 28",
      "from": "List Wallker",
      "from_id": "user751675221",
      "reply_to_message_id": 299,
      "text": "Show balance please"
    },
    "id": "52",
    "source": "telegram",
    "date": "2022-02-26T19:00:49",
    "sourceMessagePlainText": "Show balance please",
    "address": "This text cannot be used to extract a physical location.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.25
      },
      {
        "category": "Shelter",
        "probability": 0.25
      },
      {
        "category": "Health Services",
        "probability": 0.25
      },
      {
        "category": "Transportation",
        "probability": 0.25
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text cannot be used to extract a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text cannot be used to extract a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This text does not provide enough information to answer the question."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This text does not provide enough information to answer the question.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 313,
      "type": "message",
      "date": "2022-02-26T19: 01: 12",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "text": "Someone posted the link of the group not where it is needed (where do these Russians come from?)"
    },
    "id": "53",
    "source": "telegram",
    "date": "2022-02-26T19:01:12",
    "sourceMessagePlainText": "Someone posted the link of the group not where it is needed (where do these Russians come from?)",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.3,
        "Transportation": 0.4,
        "Translation": 0.5,
        "Legal": 0.6,
        "Volunteering": 0.7,
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"Food\": 0.1,        \"Shelter\": 0.2,        \"Health Services\": 0.3,        \"Transportation\": 0.4,        \"Translation\": 0.5,        \"Legal\": 0.6,        \"Volunteering\": 0.7,        \"Volunteers Needed\": 0.8    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 314,
      "type": "message",
      "date": "2022-02-26T19: 01: 35",
      "from": "List Wallker",
      "from_id": "user751675221",
      "text": "Nothing personal, many people make so much money"
    },
    "id": "54",
    "source": "telegram",
    "date": "2022-02-26T19:01:35",
    "sourceMessagePlainText": "Nothing personal, many people make so much money",
    "address": "This text does not contain enough information to extract a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to extract a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to extract a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " that they don't know what to do with it.[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " that they can't spend it all, so they donate it to help others.Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " that they can't spend it all, so they donate it to help others.Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 316,
      "type": "message",
      "date": "2022-02-26T19: 01: 47",
      "edited": "2022-02-26T19: 03: 21",
      "from": "List Wallker",
      "from_id": "user751675221",
      "reply_to_message_id": 315,
      "text": "On the map"
    },
    "id": "55",
    "source": "telegram",
    "date": "2022-02-26T19:01:47",
    "sourceMessagePlainText": "On the map",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " below, you can find all of the different types of resources that are available to refugees in the Seattle area. The colors correspond to the different types of resources, and the numbers correspond to the probability that a resource will be available.[    {\"Food\":0.8},    {\"Shelter\":0.7},    {\"Health Services\":0.6},    {\"Transportation\":0.5},    {\"Translation\":0.4},    {\"Legal\":0.3},    {\"Volunteering\":0.2},    {\"Volunteers Needed\":0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", you can see all of the different categories of resources that are available to you.Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", you can see all of the different categories of resources that are available to you.Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 318,
      "type": "message",
      "date": "2022-02-26T19: 04: 07",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 317,
      "text": "I'm not talking about you"
    },
    "id": "56",
    "source": "telegram",
    "date": "2022-02-26T19:04:07",
    "sourceMessagePlainText": "I'm not talking about you",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", but I'm talking about people who are in the country illegally.[0.125, 0.25, 0.25, 0.125, 0.125, 0.125, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This text does not discuss any of the listed topics, so it is not possible to choose one."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This text does not discuss any of the listed topics, so it is not possible to choose one.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 320,
      "type": "message",
      "date": "2022-02-26T19: 04: 29",
      "edited": "2022-02-26T19: 04: 33",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 319,
      "text": "Nothing scary"
    },
    "id": "57",
    "source": "telegram",
    "date": "2022-02-26T19:04:29",
    "sourceMessagePlainText": "Nothing scary",
    "address": " happenedThere is no physical location mentioned in the text.",
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " happenedThere is no physical location mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: null, lng: null }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " here, just a list of items with a probability.[    {\"Food\":0.1},    {\"Shelter\":0.2},    {\"Health Services\":0.3},    {\"Transportation\":0.4},    {\"Translation\":0.5},    {\"Legal\":0.6},    {\"Volunteering\":0.7},    {\"Volunteers Needed\":0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " about this placeVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " about this placeVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 324,
      "type": "message",
      "date": "2022-02-26T19: 08: 43",
      "from": "Eduard Sesmii",
      "from_id": "user609036395",
      "text": "Who can pick up today from Kropyvnytskyi? My mother, bride and sister are 10 years old 🙏🙏🙏🙏 to Lviv or the Polish border? Please help 🆘"
    },
    "id": "58",
    "source": "telegram",
    "date": "2022-02-26T19:08:43",
    "sourceMessagePlainText": "Who can pick up today from Kropyvnytskyi? My mother, bride and sister are 10 years old 🙏🙏🙏🙏 to Lviv or the Polish border? Please help 🆘",
    "address": "The physical location mentioned in the text is Kropyvnytskyi, Ukraine.",
    "coords": {
      "lat": 49.434,
      "lng": 28.503
    },
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is Kropyvnytskyi, Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.434, lng: 28.503 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🆘🆘🆘[    {\"Food\": 0.1},    {\"Shelter\": 0.1},    {\"Health Services\": 0.1},    {\"Transportation\": 0.1},    {\"Translation\": 0.1},    {\"Legal\": 0.1},    {\"Volunteering\": 0.1},    {\"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "🆘🆘Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "🆘🆘Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 327,
      "type": "message",
      "date": "2022-02-26T19: 10: 11",
      "from": "Nick Rudnev",
      "from_id": "user898567797",
      "text": "Is there any information on the American Embassy, ​​do they accept it at all? In Warsaw"
    },
    "id": "59",
    "source": "telegram",
    "date": "2022-02-26T19:10:11",
    "sourceMessagePlainText": "Is there any information on the American Embassy, ​​do they accept it at all? In Warsaw",
    "address": "The American Embassy in Warsaw is located at ul. Aleje Ujazdowskie 29/31.",
    "coords": {
      "lat": 52.233081,
      "lng": 21.008138
    },
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The American Embassy in Warsaw is located at ul. Aleje Ujazdowskie 29/31."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.233081, lng: 21.008138 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", we have a few organizations that help refugees:- Food: 0.1- Shelter: 0.2- Health Services: 0.3- Transportation: 0.4- Translation: 0.5- Legal: 0.6- Volunteering: 0.7- Volunteers Needed: 0.8"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 329,
      "type": "message",
      "date": "2022-02-26T19: 10: 42",
      "from": "Eduard Sesmii",
      "from_id": "user609036395",
      "reply_to_message_id": 326,
      "text": "Thank you"
    },
    "id": "60",
    "source": "telegram",
    "date": "2022-02-26T19:10:42",
    "sourceMessagePlainText": "Thank you",
    "address": " for your message.This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " for your message.This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " for your interest in volunteering with us. We are currently in need of volunteers in the following categories:[    {\"Food\": 0.125},    {\"Shelter\": 0.125},    {\"Health Services\": 0.125},    {\"Transportation\": 0.125},    {\"Translation\": 0.125},    {\"Legal\": 0.125},    {\"Volunteering\": 0.5},    {\"Volunteers Needed\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " for your interest in volunteering with us!Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " for your interest in volunteering with us!Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 333,
      "type": "message",
      "date": "2022-02-26T19: 12: 04",
      "from": "Irina",
      "from_id": "user179342318",
      "text": "Please tell me who is from the city of Konstantivka, and who was able to leave and where and in what ways?"
    },
    "id": "61",
    "source": "telegram",
    "date": "2022-02-26T19:12:04",
    "sourceMessagePlainText": "Please tell me who is from the city of Konstantivka, and who was able to leave and where and in what ways?",
    "address": "There is no Konstantivka in this text.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no Konstantivka in this text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no Konstantivka in this text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"category\": \"Food\", \"probability\": 0.1},{\"category\": \"Shelter\", \"probability\": 0.2},{\"category\": \"Health Services\", \"probability\": 0.3},{\"category\": \"Transportation\", \"probability\": 0.4},{\"category\": \"Translation\", \"probability\": 0.5},{\"category\": \"Legal\", \"probability\": 0.6},{\"category\": \"Volunteering\", \"probability\": 0.7},{\"category\": \"Volunteers Needed\", \"probability\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 334,
      "type": "message",
      "date": "2022-02-26T19: 12: 35",
      "from": "Oksana",
      "from_id": "user5283327472",
      "reply_to_message_id": 316,
      "text": "And she doesn't even have a name, I doubt something about diapers, a beauty who has a child so her mother won't sign herself 🤔"
    },
    "id": "62",
    "source": "telegram",
    "date": "2022-02-26T19:12:35",
    "sourceMessagePlainText": "And she doesn't even have a name, I doubt something about diapers, a beauty who has a child so her mother won't sign herself 🤔",
    "address": "This text is about a woman who is beautiful and has a child, but her mother will not sign herself. The physical location is not mentioned.",
    "coords": null,
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is about a woman who is beautiful and has a child, but her mother will not sign herself. The physical location is not mentioned."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "N/A"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 337,
      "type": "message",
      "date": "2022-02-26T19: 13: 17",
      "from": "List Wallker",
      "from_id": "user751675221",
      "text": "Admin, write in hp"
    },
    "id": "63",
    "source": "telegram",
    "date": "2022-02-26T19:13:17",
    "sourceMessagePlainText": "Admin, write in hp",
    "address": "The physical location is hp.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is hp."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "com at 37.3388° N, 122.0919° W{ \"lat\": 37.3388, \"lng\": -122.0919 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "w many you need for each category[    {\"category\": \"Food\", \"probability\": 0.2},    {\"category\": \"Shelter\", \"probability\": 0.3},    {\"category\": \"Health Services\", \"probability\": 0.1},    {\"category\": \"Transportation\", \"probability\": 0.1},    {\"category\": \"Translation\", \"probability\": 0.1},    {\"category\": \"Legal\", \"probability\": 0.1},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "w many volunteers are neededVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "w many volunteers are neededVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 341,
      "type": "message",
      "date": "2022-02-26T19: 15: 00",
      "from": "Maya",
      "from_id": "user785947560",
      "text": "Write in Ukrainian to weed out people"
    },
    "id": "64",
    "source": "telegram",
    "date": "2022-02-26T19:15:00",
    "sourceMessagePlainText": "Write in Ukrainian to weed out people",
    "address": " who don't know the languageМи знаходимося на вулиці ГрушевськогоWe are located on Grushevsky Street.",
    "coords": {
      "lat": 50.45466,
      "lng": 30.5238
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " who don't know the languageМи знаходимося на вулиці ГрушевськогоWe are located on Grushevsky Street."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.45466, lng: 30.5238 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " who are not from Ukraine[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.3    },    {        \"category\": \"Transportation\",        \"probability\": 0.4    },    {        \"category\": \"Translation\",        \"probability\": 0.5    },    {        \"category\": \"Legal\",        \"probability\": 0.6    },    {        \"category\": \"Volunteering\",        \"probability\": 0.7    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.8    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " who cannot speak UkrainianVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " who cannot speak UkrainianVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 342,
      "type": "message",
      "date": "2022-02-26T19: 15: 26",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 340,
      "text": "Please try again"
    },
    "id": "65",
    "source": "telegram",
    "date": "2022-02-26T19:15:26",
    "sourceMessagePlainText": "Please try again",
    "address": " laterThis text does not contain enough information to extract a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " laterThis text does not contain enough information to extract a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat, lng }: null"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " later.This text does not provide enough information to answer the question."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " later.This text does not provide enough information to answer the question.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 362,
      "type": "message",
      "date": "2022-02-26T19: 24: 50",
      "from": "Tatiana Gudikova",
      "from_id": "user2832906",
      "text": "Someone help people with blankets and hot water at the intersection of Grushev-Budomezh? Children and women in the car. For the second day: \" Gasoline saves. I turn off the car and the stove do not turn on, so we curl up and heat the car a little \""
    },
    "id": "66",
    "source": "telegram",
    "date": "2022-02-26T19:24:50",
    "sourceMessagePlainText": "Someone help people with blankets and hot water at the intersection of Grushev-Budomezh? Children and women in the car. For the second day: \" Gasoline saves. I turn off the car and the stove do not turn on, so we curl up and heat the car a little \"",
    "address": "The intersection of Grushev-Budomezh",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.3,
        "Health Services": 0.1,
        "Transportation": 0.1,
        "Translation": 0.1,
        "Legal": 0.1,
        "Volunteering": 0.2,
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The intersection of Grushev-Budomezh"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "ny and Kirovsk-Kievskaya Streets{ \"lat\": 55.817, \"lng\": 37.657 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\": 0.1, \"Shelter\": 0.3, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.2, \"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 371,
      "type": "message",
      "date": "2022-02-26T19: 31: 10",
      "from": "Goop",
      "from_id": "user5030297050",
      "text": [
        "Today is our last bus. Driver:",
        {
          "type": "mention",
          "text": "@Madpoguu"
        },
        "I'm going to Kharkiv to the Polish border. At the address (Petra Grigorenko Avenue refueling \"OKKO \" departure today, departure time 13:10. $ 140 per person"
      ]
    },
    "id": "67",
    "source": "telegram",
    "date": "2022-02-26T19:31:10",
    "sourceMessagePlainText": "Today is our last bus. Driver: @Madpoguu I'm going to Kharkiv to the Polish border. At the address (Petra Grigorenko Avenue refueling \"OKKO \" departure today, departure time 13:10. $ 140 per person ",
    "gmapLink": null,
    "address": "The physical location is \"Petra Grigorenko Avenue refueling 'OKKO'\"",
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is \"Petra Grigorenko Avenue refueling 'OKKO'\""
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"Petra Grigorenko Avenue refueling 'OKKO'\", lng: \"\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 372,
      "type": "message",
      "date": "2022-02-26T19: 31: 29",
      "from": "Goop",
      "from_id": "user5030297050",
      "text": "Children under 10 free!"
    },
    "id": "68",
    "source": "telegram",
    "date": "2022-02-26T19:31:29",
    "sourceMessagePlainText": "Children under 10 free!",
    "address": "This text is advertising that children under the age of 10 can enter for free. There is no mention of a specific location.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.05
      },
      {
        "Transportation": 0.15
      },
      {
        "Translation": 0.1
      },
      {
        "Legal": 0.05
      },
      {
        "Volunteering": 0.3
      },
      {
        "Volunteers Needed": 0.05
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is advertising that children under the age of 10 can enter for free. There is no mention of a specific location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no location mentioned in the text, so there is no latitude and longitude that can be extracted."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.15},    {\"Translation\": 0.1},    {\"Legal\": 0.05},    {\"Volunteering\": 0.3},    {\"Volunteers Needed\": 0.05}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 373,
      "type": "message",
      "date": "2022-02-26T19: 32: 04",
      "from": "Goop",
      "from_id": "user5030297050",
      "reply_to_message_id": 370,
      "text": "We provoke you"
    },
    "id": "69",
    "source": "telegram",
    "date": "2022-02-26T19:32:04",
    "sourceMessagePlainText": "We provoke you",
    "address": " to come to our next meetingThe next meeting will be held at the library.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " to come to our next meetingThe next meeting will be held at the library."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to donate to our cause.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to think about the role of volunteers in our societyVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to think about the role of volunteers in our societyVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 374,
      "type": "message",
      "date": "2022-02-26T19: 33: 16",
      "from": "List Wallker",
      "from_id": "user751675221",
      "reply_to_message_id": 370,
      "text": "Why did you come here yourself?"
    },
    "id": "70",
    "source": "telegram",
    "date": "2022-02-26T19:33:16",
    "sourceMessagePlainText": "Why did you come here yourself?",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2, \"Shelter\": 0.1, \"Health Services\": 0.05, \"Transportation\": 0.15, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.2, \"Volunteers Needed\": 0.1},     {\"Food\": 0.1, \"Shelter\": 0.2, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.05, \"Legal\": 0.1, \"Volunteering\": 0.2, \"Volunteers Needed\": 0.1},     {\"Food\": 0.1, \"Shelter\": 0.1, \"Health Services\": 0.05, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.2, \"Volunteering\": 0.2, \"Volunteers Needed\": 0.1},     {\"Food\": 0.1, \"Shelter\": 0.1, \"Health Services\": 0.1, \"Transportation\": 0.2, \"Translation\": 0.1, \"Legal\": 0"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 375,
      "type": "message",
      "date": "2022-02-26T19: 33: 27",
      "from": "List Wallker",
      "from_id": "user751675221",
      "text": "Think and say"
    },
    "id": "71",
    "source": "telegram",
    "date": "2022-02-26T19:33:27",
    "sourceMessagePlainText": "Think and say",
    "address": " the name of the countryThe country is France.",
    "coords": {
      "lat": 46.227638,
      "lng": 2.213749
    },
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " the name of the countryThe country is France."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"46.227638\", lng: \"2.213749\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " the probability of each category.[    {        \"category\": \"Food\",        \"probability\": 0.3    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " out loud what you think the category is for each of the following organizations:FoodShelterHealth ServicesTransportationTranslationLegalVolunteeringVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " out loud what you think the category is for each of the following organizations:FoodShelterHealth ServicesTransportationTranslationLegalVolunteeringVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 376,
      "type": "message",
      "date": "2022-02-26T19: 34: 08",
      "from": "Goop",
      "from_id": "user5030297050",
      "text": "Didn't you know? \nI'll open the news… \nThink the privilege of fools!"
    },
    "id": "72",
    "source": "telegram",
    "date": "2022-02-26T19:34:08",
    "sourceMessagePlainText": "Didn't you know? \nI'll open the news… \nThink the privilege of fools!",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 377,
      "type": "message",
      "date": "2022-02-26T19: 34: 17",
      "from": "Goop",
      "from_id": "user5030297050",
      "text": "See what he writes"
    },
    "id": "73",
    "source": "telegram",
    "date": "2022-02-26T19:34:17",
    "sourceMessagePlainText": "See what he writes",
    "address": "The physical location cannot be determined from the given text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location cannot be determined from the given text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location cannot be determined from the given text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " about each category.[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 378,
      "type": "message",
      "date": "2022-02-26T19: 34: 29",
      "from": "Goop",
      "from_id": "user5030297050",
      "text": "And don't ask stupid questions"
    },
    "id": "74",
    "source": "telegram",
    "date": "2022-02-26T19:34:29",
    "sourceMessagePlainText": "And don't ask stupid questions",
    "address": "The physical location is not specified in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " like \"what's the probability of food?\"[    {\"category\": \"Food\", \"probability\": 0.25},    {\"category\": \"Shelter\", \"probability\": 0.25},    {\"category\": \"Health Services\", \"probability\": 0.25},    {\"category\": \"Transportation\", \"probability\": 0.25},    {\"category\": \"Translation\", \"probability\": 0.0},    {\"category\": \"Legal\", \"probability\": 0.0},    {\"category\": \"Volunteering\", \"probability\": 0.0},    {\"category\": \"Volunteers Needed\", \"probability\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", either.Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", either.Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 379,
      "type": "message",
      "date": "2022-02-26T19: 34: 32",
      "edited": "2022-02-26T19: 35: 00",
      "from": "Alena Kondratenko",
      "from_id": "user778453602",
      "text": "Block him. Stop arguing with him."
    },
    "id": "75",
    "source": "telegram",
    "date": "2022-02-26T19:34:32",
    "sourceMessagePlainText": "Block him. Stop arguing with him.",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 385,
      "type": "message",
      "date": "2022-02-26T19: 42: 13",
      "from": "Arina",
      "from_id": "user1700053025",
      "reply_to_message_id": 358,
      "text": "Russians want to help ???? Oh, this is news. Please tell, what part of Ukraine are you from?"
    },
    "id": "76",
    "source": "telegram",
    "date": "2022-02-26T19:42:13",
    "sourceMessagePlainText": "Russians want to help ???? Oh, this is news. Please tell, what part of Ukraine are you from?",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 391,
      "type": "message",
      "date": "2022-02-26T19: 45: 05",
      "from": "☪️",
      "from_id": "user1999734477",
      "text": "We need help to cross the border for 2 men aged 18 and girls aged 17. I will pay well."
    },
    "id": "77",
    "source": "telegram",
    "date": "2022-02-26T19:45:05",
    "sourceMessagePlainText": "We need help to cross the border for 2 men aged 18 and girls aged 17. I will pay well.",
    "address": "The physical location from this text is a border.",
    "coords": {
      "lat": 38.581572,
      "lng": -121.4944
    },
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is a border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"38.581572\", lng: \"-121.4944\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 392,
      "type": "message",
      "date": "2022-02-26T19: 45: 24",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 370,
      "text": "Well, you know, pigs don't understand us"
    },
    "id": "78",
    "source": "telegram",
    "date": "2022-02-26T19:45:24",
    "sourceMessagePlainText": "Well, you know, pigs don't understand us",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ".Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 397,
      "type": "message",
      "date": "2022-02-26T19: 47: 49",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 396,
      "text": "Well, no one needs people like you."
    },
    "id": "79",
    "source": "telegram",
    "date": "2022-02-26T19:47:49",
    "sourceMessagePlainText": "Well, no one needs people like you.",
    "address": "The physical location from this text is unknown.",
    "coords": null,
    "sentiment": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is unknown."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location from this text is unknown."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 401,
      "type": "message",
      "date": "2022-02-26T19: 49: 07",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 391,
      "text": [
        {
          "type": "link",
          "text": "https://t.me/+XHrjC1uX9ZVjYjZi"
        },
        "- search for drivers from Poland to Germany, English / German \n",
        {
          "type": "link",
          "text": "https://docs.google.com/forms/d/e/1FAIpQLSeycZO_LzG0pqW-63Pq528agtoN7IuuMjBq-Pch3voUMRmi1w/viewform"
        },
        "- from Poland to Germany \n",
        {
          "type": "link",
          "text": "https://docs.google.com/spreadsheets/d/10iUQGLo5T66TjmTpKYha6RKmtxUb6h2tfzbur2Acu2g/edit#gid=0"
        },
        "- list of German volunteer drivers for transportation in Germany and from Poland to Germany \n",
        {
          "type": "email",
          "text": "tessa.pulli@googlemail.com"
        },
        "- Constantine, organizes buses from the Polish border to Germany"
      ]
    },
    "id": "80",
    "source": "telegram",
    "date": "2022-02-26T19:49:07",
    "sourceMessagePlainText": "https://t.me/+XHrjC1uX9ZVjYjZi - search for drivers from Poland to Germany, English / German \n https://docs.google.com/forms/d/e/1FAIpQLSeycZO_LzG0pqW-63Pq528agtoN7IuuMjBq-Pch3voUMRmi1w/viewform - from Poland to Germany \n https://docs.google.com/spreadsheets/d/10iUQGLo5T66TjmTpKYha6RKmtxUb6h2tfzbur2Acu2g/edit#gid=0 - list of German volunteer drivers for transportation in Germany and from Poland to Germany \n tessa.pulli@googlemail.com - Constantine, organizes buses from the Polish border to Germany ",
    "gmapLink": null,
    "address": "Poland and Germany",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.6
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland and Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " are separated by the Oder River{\"lat\": 52.2322,\"lng\": 14.3}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category\": \"Shelter\", \"probability\": 0.1},    {\"category\": \"Health Services\", \"probability\": 0.1},    {\"category\": \"Transportation\", \"probability\": 0.6},    {\"category\": \"Translation\", \"probability\": 0.1},    {\"category\": \"Legal\", \"probability\": 0.1},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 402,
      "type": "message",
      "date": "2022-02-26T19: 50: 11",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "text": "I want to clarify, what if, for example, men with another citizenship (from 18-60 years old) miss the border?"
    },
    "id": "81",
    "source": "telegram",
    "date": "2022-02-26T19:50:11",
    "sourceMessagePlainText": "I want to clarify, what if, for example, men with another citizenship (from 18-60 years old) miss the border?",
    "address": "The physical location from this text would be the border.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text would be the border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The latitude and longitude from this text would be { lat: -32.5, lng: 151.1 }."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "If men with another citizenship miss the border, they may be eligible for food, shelter, health services, transportation, translation, legal, and volunteering services."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "If men with another citizenship miss the border, they may be eligible for food, shelter, health services, transportation, translation, legal, and volunteering services.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 403,
      "type": "message",
      "date": "2022-02-26T19: 50: 47",
      "edited": "2022-02-26T19: 51: 07",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "text": "Or Ukrainian citizenship but European residence permit?"
    },
    "id": "82",
    "source": "telegram",
    "date": "2022-02-26T19:50:47",
    "sourceMessagePlainText": "Or Ukrainian citizenship but European residence permit?",
    "address": "Europe",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Europe"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "/Rome{\"lat\": 41.9,\"lng\": 12.5}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category\": \"Shelter\", \"probability\": 0.2},    {\"category\": \"Health Services\", \"probability\": 0.3},    {\"category\": \"Transportation\", \"probability\": 0.4},    {\"category\": \"Translation\", \"probability\": 0.5},    {\"category\": \"Legal\", \"probability\": 0.6},    {\"category\": \"Volunteering\", \"probability\": 0.7},    {\"category\": \"Volunteers Needed\", \"probability\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 406,
      "type": "message",
      "date": "2022-02-26T19: 53: 27",
      "from": "Eduard Sesmii",
      "from_id": "user609036395",
      "reply_to_message_id": 391,
      "text": "18 years will not be released"
    },
    "id": "83",
    "source": "telegram",
    "date": "2022-02-26T19:53:27",
    "sourceMessagePlainText": "18 years will not be released",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " until he or she has a sponsorVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " until he or she has a sponsorVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 407,
      "type": "message",
      "date": "2022-02-26T19: 55: 02",
      "from": "☪️",
      "from_id": "user1999734477",
      "reply_to_message_id": 406,
      "text": "I know, I'm trying to solve this problem"
    },
    "id": "84",
    "source": "telegram",
    "date": "2022-02-26T19:55:02",
    "sourceMessagePlainText": "I know, I'm trying to solve this problem",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.4, 0.1, 0.1, 0.1, 0.1, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 410,
      "type": "message",
      "date": "2022-02-26T19: 59: 55",
      "edited": "2022-02-26T20: 01: 58",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 402,
      "text": "Men between the ages of 18 and 60 can cross the border under the following conditions (one of the following is enough): \nExistence of documents on deferment of conscription or registration on a special military register. The presence of three or more children under the age of 18. They are the single parent of a minor child. They take care of a child with a disability. Whose close relatives have died or are missing in the environmental protection zone. "
    },
    "id": "85",
    "source": "telegram",
    "date": "2022-02-26T19:59:55",
    "sourceMessagePlainText": "Men between the ages of 18 and 60 can cross the border under the following conditions (one of the following is enough): \nExistence of documents on deferment of conscription or registration on a special military register. The presence of three or more children under the age of 18. They are the single parent of a minor child. They take care of a child with a disability. Whose close relatives have died or are missing in the environmental protection zone. ",
    "address": "The physical location mentioned in the text is the border.",
    "coords": null,
    "sentiment": [
      0.25,
      0.25,
      0.25,
      0.25,
      0.25,
      0.25,
      0.25,
      0.25
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is the border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location mentioned in the text is the border. { lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 414,
      "type": "message",
      "date": "2022-02-26T20: 02: 27",
      "from": "Tatli kız",
      "from_id": "user956342750",
      "reply_to_message_id": 410,
      "text": "Thank you very much) thank you"
    },
    "id": "86",
    "source": "telegram",
    "date": "2022-02-26T20:02:27",
    "sourceMessagePlainText": "Thank you very much) thank you",
    "address": " very muchThis is not a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " very muchThis is not a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This is not a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " very much[0.5, 0.5, 0, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " so much for your time, your help is very much appreciatedVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " so much for your time, your help is very much appreciatedVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 415,
      "type": "message",
      "date": "2022-02-26T20: 02: 47",
      "edited": "2022-02-26T20: 03: 01",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 414,
      "text": ""
    },
    "id": "87",
    "source": "telegram",
    "date": "2022-02-26T20:02:47",
    "sourceMessagePlainText": "",
    "aiErrors": [
      {
        "key": "category",
        "value": null,
        "error": "empty"
      }
    ],
    "category": "Other"
  },
  {
    "sourceData": {
      "id": 416,
      "type": "message",
      "date": "2022-02-26T20: 03: 05",
      "from": "☪️",
      "from_id": "user1999734477",
      "reply_to_message_id": 410,
      "text": "Thank you 🙏"
    },
    "id": "88",
    "source": "telegram",
    "date": "2022-02-26T20:03:05",
    "sourceMessagePlainText": "Thank you 🙏",
    "address": " for being hereThis text was extracted from a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " for being hereThis text was extracted from a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text was extracted from a physical location.{ lat: -33.8688, lng: 151.2093 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏼[    {\"Food\": 0.25},    {\"Shelter\": 0.25},    {\"Health Services\": 0.25},    {\"Transportation\": 0.25},    {\"Translation\": 0},    {\"Legal\": 0},    {\"Volunteering\": 0},    {\"Volunteers Needed\": 0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "🏼 to everyone who has donated to our gofundme to help with legal fees and other costs associated with our fight for justice.Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "🏼 to everyone who has donated to our gofundme to help with legal fees and other costs associated with our fight for justice.Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 418,
      "type": "message",
      "date": "2022-02-26T20: 03: 30",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "reply_to_message_id": 416,
      "text": "Always please 🙏"
    },
    "id": "89",
    "source": "telegram",
    "date": "2022-02-26T20:03:30",
    "sourceMessagePlainText": "Always please 🙏",
    "address": "The physical location is not specified in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏽[    {\"Food\":1.0},    {\"Shelter\":1.0},    {\"Health Services\":1.0},    {\"Transportation\":1.0},    {\"Translation\":1.0},    {\"Legal\":1.0},    {\"Volunteering\":1.0},    {\"Volunteers Needed\":1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " donate blood it's very important for saving lives.Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " donate blood it's very important for saving lives.Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 426,
      "type": "message",
      "date": "2022-02-26T20: 10: 48",
      "from": "Ivan Samoilich",
      "from_id": "user1051425490",
      "text": [
        "🇺🇦 We will deliver to Krakow or another settlement in the direction of Krakow from the border Grebenne # (Rava-Ruska) free of charge",
        {
          "type": "phone",
          "text": "782157105"
        },
        "."
      ]
    },
    "id": "90",
    "source": "telegram",
    "date": "2022-02-26T20:10:48",
    "sourceMessagePlainText": "🇺🇦 We will deliver to Krakow or another settlement in the direction of Krakow from the border Grebenne # (Rava-Ruska) free of charge 782157105 . ",
    "gmapLink": null,
    "address": "Krakow, Poland",
    "coords": {
      "lat": 50.0646501,
      "lng": 19.9449799
    },
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0,
      0,
      0,
      0
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Krakow, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 50.0646501, \"lng\": 19.9449799 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 449,
      "type": "message",
      "date": "2022-02-26T20: 24: 17",
      "from": "Julia Bogdan",
      "from_id": "user660513469",
      "text": "Help !!!!!! Please !!!! find a bus from Lviv today to Poland"
    },
    "id": "91",
    "source": "telegram",
    "date": "2022-02-26T20:24:17",
    "sourceMessagePlainText": "Help !!!!!! Please !!!! find a bus from Lviv today to Poland",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.125, 0.125, 0.5, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 463,
      "type": "message",
      "date": "2022-02-26T20: 33: 30",
      "from": "Ukrainian refugees",
      "from_id": "channel1640284488",
      "text": "Transport from Lviv to the border \n \n0 (50) 789 46 45 - Coordinator Roman1 \n \n0 (73) 370 36 66 - Volodymyr (Lviv) \n \n0 (73) 837 36 66 - Maxim (Lviv) \n \n0 (73) 397 93 33 - Kolya (Lviv) \n \n0 (68) 180 01 35 - Roman2 (Lviv) \n \n0 (98) 566 87 12 - Vitalik (Lviv) \n \n0 (63) 989 26 20 - Rostik (Kyiv) \n \n0 (68) 193 90 23 - Rostik (Kyiv) \n \n0 (50) 789 46 45 - Roman1 (Kyiv) "
    },
    "id": "92",
    "source": "telegram",
    "date": "2022-02-26T20:33:30",
    "sourceMessagePlainText": "Transport from Lviv to the border \n \n0 (50) 789 46 45 - Coordinator Roman1 \n \n0 (73) 370 36 66 - Volodymyr (Lviv) \n \n0 (73) 837 36 66 - Maxim (Lviv) \n \n0 (73) 397 93 33 - Kolya (Lviv) \n \n0 (68) 180 01 35 - Roman2 (Lviv) \n \n0 (98) 566 87 12 - Vitalik (Lviv) \n \n0 (63) 989 26 20 - Rostik (Kyiv) \n \n0 (68) 193 90 23 - Rostik (Kyiv) \n \n0 (50) 789 46 45 - Roman1 (Kyiv) ",
    "address": "Lviv",
    "coords": null,
    "sentiment": [
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Lviv"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Ukraine{\"lat\": 49.839683,\"lng\": 24.029717}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Transportation\",    \"probability\": 1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0.8  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 470,
      "type": "message",
      "date": "2022-02-26T20: 36: 54",
      "from": "Anton",
      "from_id": "user598436946",
      "text": "We are looking for transport from Lviv to Poland \nThree women and four children"
    },
    "id": "93",
    "source": "telegram",
    "date": "2022-02-26T20:36:54",
    "sourceMessagePlainText": "We are looking for transport from Lviv to Poland \nThree women and four children",
    "address": "Lviv, Poland",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Lviv, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.839683, lng: 24.029717 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " need transport[  {    \"category\": \"Transportation\",    \"probability\": 1  },  {    \"category\": \"Food\",    \"probability\": 0  },  {    \"category\": \"Shelter\",    \"probability\": 0  },  {    \"category\": \"Health Services\",    \"probability\": 0  },  {    \"category\": \"Translation\",    \"probability\": 0  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 473,
      "type": "message",
      "date": "2022-02-26T20: 37: 45",
      "edited": "2022-02-26T20: 59: 38",
      "from": "Natali",
      "from_id": "user955786176",
      "text": "We are 20 km left halfway on foot on Shigini, my mother is 70 years old, he will not come to me in despair. HELP !!!! Maybe someone knows the bus, maybe they will pick it up, but I see they are going. But there are no options to buy a ticket "
    },
    "id": "94",
    "source": "telegram",
    "date": "2022-02-26T20:37:45",
    "sourceMessagePlainText": "We are 20 km left halfway on foot on Shigini, my mother is 70 years old, he will not come to me in despair. HELP !!!! Maybe someone knows the bus, maybe they will pick it up, but I see they are going. But there are no options to buy a ticket ",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0
      },
      {
        "category": "Shelter",
        "probability": 0
      },
      {
        "category": "Health Services",
        "probability": 0
      },
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0    },    {        \"category\": \"Shelter\",        \"probability\": 0    },    {        \"category\": \"Health Services\",        \"probability\": 0    },    {        \"category\": \"Transportation\",        \"probability\": 1    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 476,
      "type": "message",
      "date": "2022-02-26T20: 41: 28",
      "from": "Ali Abbas",
      "from_id": "user379691120",
      "text": "Thanks"
    },
    "id": "95",
    "source": "telegram",
    "date": "2022-02-26T20:41:28",
    "sourceMessagePlainText": "Thanks",
    "address": " for your helpThe physical location from this text is unknown.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " for your helpThe physical location from this text is unknown."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location from this text is unknown."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " for your help![    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.15},    {\"Translation\": 0.1},    {\"Legal\": 0.05},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " for considering volunteering with us!Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " for considering volunteering with us!Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 477,
      "type": "message",
      "date": "2022-02-26T20: 42: 22",
      "from": "Paul",
      "from_id": "user496570053",
      "text": "Maybe someone knows if there are volunteers in Medika on the Ukrainian side of the checkpoint, to help the girl with the baby, she has problems with documents, she is very exhausted and very nervous. Because she had to go with her father things, food and children's documents left with him. Please tell me the coordinates if possible. Thank you "
    },
    "id": "96",
    "source": "telegram",
    "date": "2022-02-26T20:42:22",
    "sourceMessagePlainText": "Maybe someone knows if there are volunteers in Medika on the Ukrainian side of the checkpoint, to help the girl with the baby, she has problems with documents, she is very exhausted and very nervous. Because she had to go with her father things, food and children's documents left with him. Please tell me the coordinates if possible. Thank you ",
    "address": "The physical location mentioned in the text is Medika, which is on the Ukrainian side of the checkpoint.",
    "coords": {
      "lat": 44.783333,
      "lng": 20.466667
    },
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.1,
        "Health Services": 0.1,
        "Transportation": 0.1,
        "Translation": 0.1,
        "Legal": 0.1,
        "Volunteering": 0.6,
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is Medika, which is on the Ukrainian side of the checkpoint."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 44.783333, lng: 20.466667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\":0.1,\"Shelter\":0.1,\"Health Services\":0.1,\"Transportation\":0.1,\"Translation\":0.1,\"Legal\":0.1,\"Volunteering\":0.6,\"Volunteers Needed\":0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 481,
      "type": "message",
      "date": "2022-02-26T20: 43: 47",
      "from": "Glory to Ukraine !!!",
      "from_id": "user1872570544",
      "text": "Tell me, if a person is a citizen of another country but knows how to permanently reside in Ukraine, will he be able to get to Poland?"
    },
    "id": "97",
    "source": "telegram",
    "date": "2022-02-26T20:43:47",
    "sourceMessagePlainText": "Tell me, if a person is a citizen of another country but knows how to permanently reside in Ukraine, will he be able to get to Poland?",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 482,
      "type": "message",
      "date": "2022-02-26T20: 46: 13",
      "from": "Today",
      "from_id": "user429843631",
      "text": "Please help, tell me \nWe stopped by Zosin, we don't know where to spend the night, we were on the road for 3 days, we want to put the children away and have a rest ourselves. Hotels in Hrubieszów do not answer😢"
    },
    "id": "98",
    "source": "telegram",
    "date": "2022-02-26T20:46:13",
    "sourceMessagePlainText": "Please help, tell me \nWe stopped by Zosin, we don't know where to spend the night, we were on the road for 3 days, we want to put the children away and have a rest ourselves. Hotels in Hrubieszów do not answer😢",
    "address": "Hrubieszów, Poland",
    "coords": {
      "lat": 50.8333333,
      "lng": 23.9166667
    },
    "sentiment": [
      {
        "category": "Shelter",
        "probability": 0.8
      },
      {
        "category": "Food",
        "probability": 0.6
      },
      {
        "category": "Health Services",
        "probability": 0.4
      },
      {
        "category": "Transportation",
        "probability": 0.2
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.05
      },
      {
        "category": "Volunteering",
        "probability": 0.02
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.01
      }
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Hrubieszów, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.8333333, lng: 23.9166667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Shelter\",    \"probability\": 0.8  },  {    \"category\": \"Food\",    \"probability\": 0.6  },  {    \"category\": \"Health Services\",    \"probability\": 0.4  },  {    \"category\": \"Transportation\",    \"probability\": 0.2  },  {    \"category\": \"Translation\",    \"probability\": 0.1  },  {    \"category\": \"Legal\",    \"probability\": 0.05  },  {    \"category\": \"Volunteering\",    \"probability\": 0.02  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0.01  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 492,
      "type": "message",
      "date": "2022-02-26T20: 51: 13",
      "from": "Alexander Gursky",
      "from_id": "user1679442307",
      "text": "Tell me who can bring water to those people who are on the train? They are very ill there."
    },
    "id": "99",
    "source": "telegram",
    "date": "2022-02-26T20:51:13",
    "sourceMessagePlainText": "Tell me who can bring water to those people who are on the train? They are very ill there.",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.3
      },
      {
        "Transportation": 0.1
      },
      {
        "Translation": 0.05
      },
      {
        "Legal": 0.05
      },
      {
        "Volunteering": 0.2
      },
      {
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.3},    {\"Transportation\": 0.1},    {\"Translation\": 0.05},    {\"Legal\": 0.05},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 497,
      "type": "message",
      "date": "2022-02-26T20: 54: 06",
      "from": "Victoria",
      "from_id": "user1650294535",
      "text": "Good morning. Who knows if it is possible to register abroad if you enter without it? Or be sure to apply for a refugee right away? I have biometrics and my mother does not ("
    },
    "id": "100",
    "source": "telegram",
    "date": "2022-02-26T20:54:06",
    "sourceMessagePlainText": "Good morning. Who knows if it is possible to register abroad if you enter without it? Or be sure to apply for a refugee right away? I have biometrics and my mother does not (",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "she is 60 years old).[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "she is over 60).- Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "she is over 60).- Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 517,
      "type": "message",
      "date": "2022-02-26T21: 04: 53",
      "from": "Laura Vladyka",
      "from_id": "user725726917",
      "reply_to_message_id": 492,
      "text": "I can"
    },
    "id": "101",
    "source": "telegram",
    "date": "2022-02-26T21:04:53",
    "sourceMessagePlainText": "I can",
    "address": "'t find my keysI can't find my keys.",
    "coords": null,
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "'t find my keysI can't find my keys."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "'t speak for every city, but in NYC there are plenty of resources for food, shelter, and transportation. Health services are also widely available, as are translation services. Legal services can be more difficult to come by, but there are still many options. Volunteering is always appreciated, and there are always opportunities for volunteers.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " help with food, shelter, and transportation.Food, shelter, and transportation."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " help with food, shelter, and transportation.Food, shelter, and transportation.",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 518,
      "type": "message",
      "date": "2022-02-26T21: 05: 03",
      "from": "Laura Vladyka",
      "from_id": "user725726917",
      "text": "If it's on the Polish border"
    },
    "id": "102",
    "source": "telegram",
    "date": "2022-02-26T21:05:03",
    "sourceMessagePlainText": "If it's on the Polish border",
    "address": ", it's probably in BelarusPoland",
    "coords": {
      "lat": 53.1324886,
      "lng": 23.1688403
    },
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ", it's probably in BelarusPoland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 53.1324886, lng: 23.1688403 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", it's more likely that the person is a refugee. If it's in the city, it's more likely that the person is a migrant.[    {\"Food\": 0.6, \"Shelter\": 0.5, \"Health Services\": 0.4, \"Transportation\": 0.3, \"Translation\": 0.2, \"Legal\": 0.1, \"Volunteering\": 0.05, \"Volunteers Needed\": 0.01},     {\"Food\": 0.3, \"Shelter\": 0.4, \"Health Services\": 0.5, \"Transportation\": 0.6, \"Translation\": 0.7, \"Legal\": 0.8, \"Volunteering\": 0.9, \"Volunteers Needed\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", you can get free legal aid, a translator, and a place to stay for the night.Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", you can get free legal aid, a translator, and a place to stay for the night.Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 520,
      "type": "message",
      "date": "2022-02-26T21: 05: 10",
      "from": "Beauty",
      "from_id": "user1000832423",
      "text": "How to leave Poland from Pokrovsk"
    },
    "id": "103",
    "source": "telegram",
    "date": "2022-02-26T21:05:10",
    "sourceMessagePlainText": "How to leave Poland from Pokrovsk",
    "address": "Pokrovsk is a city in Russia.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.1,
      0.1,
      0,
      0,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Pokrovsk is a city in Russia."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 521,
      "type": "message",
      "date": "2022-02-26T21: 05: 25",
      "from": "TK",
      "from_id": "user2104039730",
      "reply_to_message_id": 520,
      "text": "We are looking for ourselves"
    },
    "id": "104",
    "source": "telegram",
    "date": "2022-02-26T21:05:25",
    "sourceMessagePlainText": "We are looking for ourselves",
    "address": " in all the wrong placesThere is no physical location mentioned in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " in all the wrong placesThere is no physical location mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " in the other. When we find ourselves in the other, we find ourselves in the world.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " in the otherVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " in the otherVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 522,
      "type": "message",
      "date": "2022-02-26T21: 05: 46",
      "from": "Alexander Gursky",
      "from_id": "user1679442307",
      "reply_to_message_id": 517,
      "text": "Please drive !!"
    },
    "id": "105",
    "source": "telegram",
    "date": "2022-02-26T21:05:46",
    "sourceMessagePlainText": "Please drive !!",
    "address": "!\"The text does not contain enough information to determine a physical location.",
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "!\"The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: null, lng: null }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 523,
      "type": "message",
      "date": "2022-02-26T21: 06: 21",
      "from": "Laura Vladyka",
      "from_id": "user725726917",
      "text": "What is the limit ?!"
    },
    "id": "106",
    "source": "telegram",
    "date": "2022-02-26T21:06:21",
    "sourceMessagePlainText": "What is the limit ?!",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 524,
      "type": "message",
      "date": "2022-02-26T21: 06: 39",
      "from": "Liliia Berehova",
      "from_id": "user688618003",
      "text": "Tell me, is it obligatory to write an application for a refugee? What are the pros and cons? And if you do not write this application, will it be possible to make all the missing documents in Poland to stay legally in Poland, get a job, children to school?"
    },
    "id": "107",
    "source": "telegram",
    "date": "2022-02-26T21:06:39",
    "sourceMessagePlainText": "Tell me, is it obligatory to write an application for a refugee? What are the pros and cons? And if you do not write this application, will it be possible to make all the missing documents in Poland to stay legally in Poland, get a job, children to school?",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.2,
      0.4,
      0.1,
      0.1,
      0.1,
      0.1,
      0,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.4, 0.1, 0.1, 0.1, 0.1, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 525,
      "type": "message",
      "date": "2022-02-26T21: 07: 50",
      "from": "Laura Vladyka",
      "from_id": "user725726917",
      "text": "You are only allowed on the border. There are points for refugees where you can tell everything in detail first hand"
    },
    "id": "108",
    "source": "telegram",
    "date": "2022-02-26T21:07:50",
    "sourceMessagePlainText": "You are only allowed on the border. There are points for refugees where you can tell everything in detail first hand",
    "address": "The physical location from this text is the border.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is the border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The latitude and longitude from this text is the border."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ". After that, you can cross the border.[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 526,
      "type": "message",
      "date": "2022-02-26T21: 08: 00",
      "from": "Laura Vladyka",
      "from_id": "user725726917",
      "text": [
        {
          "type": "link",
          "text": "https://mapahelp.me/"
        }
      ]
    },
    "id": "109",
    "source": "telegram",
    "date": "2022-02-26T21:08:00",
    "sourceMessagePlainText": "https://mapahelp.me/ ",
    "gmapLink": null,
    "address": "The physical location of this text is on a computer screen.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.25
      },
      {
        "category": "Shelter",
        "probability": 0.25
      },
      {
        "category": "Health Services",
        "probability": 0.25
      },
      {
        "category": "Transportation",
        "probability": 0.25
      },
      {
        "category": "Translation",
        "probability": 0.25
      },
      {
        "category": "Legal",
        "probability": 0.25
      },
      {
        "category": "Volunteering",
        "probability": 0.25
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.25
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location of this text is on a computer screen."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "    [        {\"category\": \"Food\", \"probability\": 0.25},        {\"category\": \"Shelter\", \"probability\": 0.25},        {\"category\": \"Health Services\", \"probability\": 0.25},        {\"category\": \"Transportation\", \"probability\": 0.25},        {\"category\": \"Translation\", \"probability\": 0.25},        {\"category\": \"Legal\", \"probability\": 0.25},        {\"category\": \"Volunteering\", \"probability\": 0.25},        {\"category\": \"Volunteers Needed\", \"probability\": 0.25}    ]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 535,
      "type": "message",
      "date": "2022-02-26T21: 12: 18",
      "from": "Djannat)",
      "from_id": "user332990626",
      "reply_to_message_id": 492,
      "text": "What a train"
    },
    "id": "110",
    "source": "telegram",
    "date": "2022-02-26T21:12:18",
    "sourceMessagePlainText": "What a train",
    "address": " wreckThere is no physical location in this text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " wreckThere is no physical location in this text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat, lng } = null"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " wreck.[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " wreck.Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " wreck.Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 536,
      "type": "message",
      "date": "2022-02-26T21: 12: 44",
      "from": "Alexander Andreevich",
      "from_id": "user757687036",
      "text": [
        "Hello, if you need a driver, please contact. \n",
        {
          "type": "phone",
          "text": "+48576982762"
        },
        "\nI'm in Warsaw"
      ]
    },
    "id": "111",
    "source": "telegram",
    "date": "2022-02-26T21:12:44",
    "sourceMessagePlainText": "Hello, if you need a driver, please contact. \n +48576982762 \nI'm in Warsaw ",
    "gmapLink": null,
    "address": "The person is in Warsaw, Poland.",
    "coords": {
      "lat": 52.23,
      "lng": 21.02
    },
    "sentiment": [
      0.125,
      0.125,
      0,
      0.125,
      0,
      0,
      0,
      0
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The person is in Warsaw, Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 538,
      "type": "message",
      "date": "2022-02-26T21: 14: 48",
      "from": "Laura Vladyka",
      "from_id": "user725726917",
      "forwarded_from": "Kyiv City State Administration - official channel",
      "text": [
        {
          "type": "bold",
          "text": "The situation in Kyiv is calm, the capital is completely controlled by the Ukrainian army and terrorist defense. There were several clashes with sabotage groups at night,"
        },
        "Mykola Povoroznyk, First Deputy Head of the Kyiv City State Administration, said. \n \nLet's hold on! 💛💙"
      ]
    },
    "id": "112",
    "source": "telegram",
    "date": "2022-02-26T21:14:48",
    "sourceMessagePlainText": "The situation in Kyiv is calm, the capital is completely controlled by the Ukrainian army and terrorist defense. There were several clashes with sabotage groups at night, Mykola Povoroznyk, First Deputy Head of the Kyiv City State Administration, said. \n \nLet's hold on! 💛💙 ",
    "gmapLink": null,
    "address": "Kyiv, Ukraine",
    "coords": {
      "lat": 50.45466,
      "lng": 30.5238
    },
    "sentiment": {
      "Food": 0.1,
      "Shelter": 0.2,
      "Health Services": 0.3,
      "Transportation": 0.4,
      "Translation": 0.5,
      "Legal": 0.6,
      "Volunteering": 0.7,
      "Volunteers Needed": 0.8
    },
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Kyiv, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{  \"lat\": 50.45466,  \"lng\": 30.5238}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.1,    \"Shelter\": 0.2,    \"Health Services\": 0.3,    \"Transportation\": 0.4,    \"Translation\": 0.5,    \"Legal\": 0.6,    \"Volunteering\": 0.7,    \"Volunteers Needed\": 0.8}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 546,
      "type": "message",
      "date": "2022-02-26T21: 27: 40",
      "from": "Vadim",
      "from_id": "user804990926",
      "text": "I'm going from Dorogusk to Wroclaw. \nThere are 3 seats. \nFREE"
    },
    "id": "113",
    "source": "telegram",
    "date": "2022-02-26T21:27:40",
    "sourceMessagePlainText": "I'm going from Dorogusk to Wroclaw. \nThere are 3 seats. \nFREE",
    "address": "Dorogusk, Wroclaw",
    "coords": null,
    "sentiment": [
      0.33,
      0.33,
      0.33
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Dorogusk, Wroclaw"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Poland{ lat: 51.08, lng: 17.03 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.33, 0.33, 0.33]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 550,
      "type": "message",
      "date": "2022-02-26T21: 29: 23",
      "from": "Irina Nikitenko 🍀",
      "from_id": "user342379551",
      "text": "Rava Russian 20-30 km Ukraine side are volunteers? \nFeed our people and water"
    },
    "id": "114",
    "source": "telegram",
    "date": "2022-02-26T21:29:23",
    "sourceMessagePlainText": "Rava Russian 20-30 km Ukraine side are volunteers? \nFeed our people and water",
    "address": "Rava Russian is located 20-30 km from the Ukraine side.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Rava Russian is located 20-30 km from the Ukraine side."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 552,
      "type": "message",
      "date": "2022-02-26T21: 32: 36",
      "from": "Yulia Fomina",
      "from_id": "user684940775",
      "text": "We stand hedgehog 13 hours advanced by 2 km ("
    },
    "id": "115",
    "source": "telegram",
    "date": "2022-02-26T21:32:36",
    "sourceMessagePlainText": "We stand hedgehog 13 hours advanced by 2 km (",
    "address": "1.2 mi).This text is a set of coordinates. The physical location it describes is 2 km (1.2 mi) ahead of hedgehog 13 hours.",
    "coords": {
      "lat": 1.2,
      "lng": 13
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "1.2 mi).This text is a set of coordinates. The physical location it describes is 2 km (1.2 mi) ahead of hedgehog 13 hours."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 1.2,\"lng\": 13}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "1.24 mi) to the south.[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "1.24 mi).Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "1.24 mi).Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 554,
      "type": "message",
      "date": "2022-02-26T21: 32: 55",
      "from": "Yulia Fomina",
      "from_id": "user684940775",
      "text": "Krakovets"
    },
    "id": "116",
    "source": "telegram",
    "date": "2022-02-26T21:32:55",
    "sourceMessagePlainText": "Krakovets",
    "address": ", UkraineKrakovets is a city in Ukraine.",
    "coords": {
      "lat": 49.416667,
      "lng": 26.716667
    },
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ", UkraineKrakovets is a city in Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.416667, lng: 26.716667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "ka Street, Kyiv, Ukraine[{\"Food\": 0.1, \"Shelter\": 0.2, \"Health Services\": 0.3, \"Transportation\": 0.4, \"Translation\": 0.5, \"Legal\": 0.6, \"Volunteering\": 0.7, \"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " is a village in the Ivano-Frankivsk Oblast of western Ukraine.Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " is a village in the Ivano-Frankivsk Oblast of western Ukraine.Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 562,
      "type": "message",
      "date": "2022-02-26T21: 46: 16",
      "from": "Maria Kozachok",
      "from_id": "user928323125",
      "text": "My daughter has been on Medika for 30 hours"
    },
    "id": "117",
    "source": "telegram",
    "date": "2022-02-26T21:46:16",
    "sourceMessagePlainText": "My daughter has been on Medika for 30 hours",
    "address": "My daughter is in the hospital.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "My daughter is in the hospital."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " now. We have been in contact with the Red Cross and FEMA. We have been told that we are not a priority because we have been able to find food and shelter. We have not been able to find any information about getting her the medication she needs.[    {\"Food\": 0.5},    {\"Shelter\": 1.0},    {\"Health Services\": 0.0},    {\"Transportation\": 0.0},    {\"Translation\": 0.0},    {\"Legal\": 0.0},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " now and she is doing so much better.Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " now and she is doing so much better.Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 564,
      "type": "message",
      "date": "2022-02-26T21: 46: 36",
      "from": "Maria Kozachok",
      "from_id": "user928323125",
      "text": "They move like snails"
    },
    "id": "118",
    "source": "telegram",
    "date": "2022-02-26T21:46:36",
    "sourceMessagePlainText": "They move like snails",
    "address": "They move like snails.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "They move like snails."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", inchingVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", inchingVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 568,
      "type": "message",
      "date": "2022-02-26T21: 56: 39",
      "from": "Lyuba",
      "from_id": "user1264913380",
      "text": "Dolgobychev or Zosin, how long are you waiting?"
    },
    "id": "119",
    "source": "telegram",
    "date": "2022-02-26T21:56:39",
    "sourceMessagePlainText": "Dolgobychev or Zosin, how long are you waiting?",
    "address": "This text does not contain enough information to extract a physical location.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.3,
        "Transportation": 0.4,
        "Translation": 0.5,
        "Legal": 0.6,
        "Volunteering": 0.7,
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to extract a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to extract a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"Food\": 0.1,        \"Shelter\": 0.2,        \"Health Services\": 0.3,        \"Transportation\": 0.4,        \"Translation\": 0.5,        \"Legal\": 0.6,        \"Volunteering\": 0.7,        \"Volunteers Needed\": 0.8    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 573,
      "type": "message",
      "date": "2022-02-26T22: 03: 16",
      "from": "Vadim",
      "from_id": "user804990926",
      "text": "I'm going (Dorogusk-Jagodyn) to Wroclaw. \nThere are 3 seats. \nFREE"
    },
    "id": "120",
    "source": "telegram",
    "date": "2022-02-26T22:03:16",
    "sourceMessagePlainText": "I'm going (Dorogusk-Jagodyn) to Wroclaw. \nThere are 3 seats. \nFREE",
    "address": "Dorogusk-Jagodyn is a village in Ukraine. Wroclaw is a city in Poland.",
    "coords": null,
    "sentiment": [
      0.33,
      0.33,
      0.33
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Dorogusk-Jagodyn is a village in Ukraine. Wroclaw is a city in Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "Dorogusk-Jagodyn: { lat: 49.83333, lng: 24.16667 }Wroclaw: { lat: 51.10714, lng: 17.0385 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.33, 0.33, 0.33]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 577,
      "type": "message",
      "date": "2022-02-26T22: 07: 47",
      "edited": "2022-02-27T15: 26: 50",
      "from": "Ali Abbas",
      "from_id": "user379691120",
      "text": "I am a diplomat with my family in a diplomatic car and a small child who has a high temperature and is in danger. I am on the highway to the Polish border at a distance of 50 km. I want to help to call the emergency services of the Ministry of Foreign Affairs Affairs of Ukraine so that they can pick me up from the route of cars or accompany diplomatic missions by police cars. 50 km to the border of Lviv. Thank you for \ncooperation \nNumber \n \n + 380 63 292 6000 "
    },
    "id": "121",
    "source": "telegram",
    "date": "2022-02-26T22:07:47",
    "sourceMessagePlainText": "I am a diplomat with my family in a diplomatic car and a small child who has a high temperature and is in danger. I am on the highway to the Polish border at a distance of 50 km. I want to help to call the emergency services of the Ministry of Foreign Affairs Affairs of Ukraine so that they can pick me up from the route of cars or accompany diplomatic missions by police cars. 50 km to the border of Lviv. Thank you for \ncooperation \nNumber \n \n + 380 63 292 6000 ",
    "address": "The text is from a person who is 50 km from the Polish border, in Lviv, Ukraine.",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": [
      {
        "Food": 0.1
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.3
      },
      {
        "Transportation": 0.4
      },
      {
        "Translation": 0.5
      },
      {
        "Legal": 0.6
      },
      {
        "Volunteering": 0.7
      },
      {
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is from a person who is 50 km from the Polish border, in Lviv, Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.839683, lng: 24.029717 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 581,
      "type": "message",
      "date": "2022-02-26T22: 18: 25",
      "from": "Ivan Samoilich",
      "from_id": "user1051425490",
      "text": [
        "🇺🇦 We will deliver to Krakow or another settlement in the direction of Krakow from the border Grebenne # (Rava-Ruska) free of charge",
        {
          "type": "phone",
          "text": "782157105"
        },
        "."
      ]
    },
    "id": "122",
    "source": "telegram",
    "date": "2022-02-26T22:18:25",
    "sourceMessagePlainText": "🇺🇦 We will deliver to Krakow or another settlement in the direction of Krakow from the border Grebenne # (Rava-Ruska) free of charge 782157105 . ",
    "gmapLink": null,
    "address": "Krakow, Poland",
    "coords": {
      "lat": 50.06465,
      "lng": 19.9449799
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0
      },
      {
        "category": "Shelter",
        "probability": 0
      },
      {
        "category": "Health Services",
        "probability": 0
      },
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Krakow, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 50.0646500, \"lng\": 19.9449799 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0    },    {        \"category\": \"Shelter\",        \"probability\": 0    },    {        \"category\": \"Health Services\",        \"probability\": 0    },    {        \"category\": \"Transportation\",        \"probability\": 1    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 582,
      "type": "message",
      "date": "2022-02-26T22: 18: 48",
      "from": "Maxim",
      "from_id": "user696946692",
      "text": "Is there anyone here who traveled from Lviv by train directly to Poland ???"
    },
    "id": "123",
    "source": "telegram",
    "date": "2022-02-26T22:18:48",
    "sourceMessagePlainText": "Is there anyone here who traveled from Lviv by train directly to Poland ???",
    "address": "Lviv, Ukraine",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Lviv, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.839683, lng: 24.029717 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category\": \"Shelter\", \"probability\": 0.2},    {\"category\": \"Health Services\", \"probability\": 0.3},    {\"category\": \"Transportation\", \"probability\": 0.4},    {\"category\": \"Translation\", \"probability\": 0.5},    {\"category\": \"Legal\", \"probability\": 0.6},    {\"category\": \"Volunteering\", \"probability\": 0.7},    {\"category\": \"Volunteers Needed\", \"probability\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 586,
      "type": "message",
      "date": "2022-02-26T22: 28: 16",
      "edited": "2022-03-04T07: 08: 17",
      "from": "Svetlana",
      "from_id": "user5197697967",
      "forwarded_from": "EXPORT OF CITIZENS FROM UKRAINE 2.0",
      "text": "‼ ️ MAXIMUM REPOST‼ ️ SITUATION AT THE BORDERS \nPeople who should be picked up by relatives or acquaintances, BLOCK the opportunity to pass to the next group of people. Border guards DO NOT ENTER !! \n‼ ️‼ ️‼ ️‼ ️Bring everyone that YOU NEED TO PUT IN ANY AVAILABLE BUS AND LEAVE THE BORDERS so that mothers with children do not suffer. And relatives will pick up from different cities !!!! queues‼ ️‼ ️‼ ️ "
    },
    "id": "124",
    "source": "telegram",
    "date": "2022-02-26T22:28:16",
    "sourceMessagePlainText": "‼ ️ MAXIMUM REPOST‼ ️ SITUATION AT THE BORDERS \nPeople who should be picked up by relatives or acquaintances, BLOCK the opportunity to pass to the next group of people. Border guards DO NOT ENTER !! \n‼ ️‼ ️‼ ️‼ ️Bring everyone that YOU NEED TO PUT IN ANY AVAILABLE BUS AND LEAVE THE BORDERS so that mothers with children do not suffer. And relatives will pick up from different cities !!!! queues‼ ️‼ ️‼ ️ ",
    "address": "The text is about the situation at the borders, specifically people who are blocking the opportunity for others to pass.",
    "coords": null,
    "sentiment": {
      "Food": 0.2,
      "Shelter": 0.2,
      "Health Services": 0.1,
      "Transportation": 0.3,
      "Translation": 0.1,
      "Legal": 0.1,
      "Volunteering": 0.1,
      "Volunteers Needed": 0.1
    },
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is about the situation at the borders, specifically people who are blocking the opportunity for others to pass."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "N/A"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.2,    \"Shelter\": 0.2,    \"Health Services\": 0.1,    \"Transportation\": 0.3,    \"Translation\": 0.1,    \"Legal\": 0.1,    \"Volunteering\": 0.1,    \"Volunteers Needed\": 0.1}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 600,
      "type": "message",
      "date": "2022-02-26T23: 10: 49",
      "from": "Victoria",
      "from_id": "user1203741620",
      "text": "Take me from Goloseevskaya to the Station, please"
    },
    "id": "125",
    "source": "telegram",
    "date": "2022-02-26T23:10:49",
    "sourceMessagePlainText": "Take me from Goloseevskaya to the Station, please",
    "address": "Goloseevskaya is a neighborhood in Kiev, Ukraine.",
    "coords": {
      "lat": 50.4358,
      "lng": 30.5238
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Goloseevskaya is a neighborhood in Kiev, Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 50.4358, \"lng\": 30.5238 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.25, 0.125, 0.25, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 604,
      "type": "message",
      "date": "2022-02-26T23: 19: 36",
      "from": "Ivan Samoilich",
      "from_id": "user1051425490",
      "text": "There is no pedestrian on the RAVO RAVO. special buses that run between the borders are taken away"
    },
    "id": "126",
    "source": "telegram",
    "date": "2022-02-26T23:19:36",
    "sourceMessagePlainText": "There is no pedestrian on the RAVO RAVO. special buses that run between the borders are taken away",
    "address": "There is no pedestrian on the RAVO RAVO. special buses that run between the borders are taken awayThere is no physical location given in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no pedestrian on the RAVO RAVO. special buses that run between the borders are taken awayThere is no physical location given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 607,
      "type": "message",
      "date": "2022-02-26T23: 22: 14",
      "from": "Ирця❤",
      "from_id": "user1074583741",
      "text": "does anyone know how to go to the Czech Republic?"
    },
    "id": "127",
    "source": "telegram",
    "date": "2022-02-26T23:22:14",
    "sourceMessagePlainText": "does anyone know how to go to the Czech Republic?",
    "address": "Czech Republic",
    "coords": {
      "lat": 49.8,
      "lng": 15.47
    },
    "sentiment": [
      {
        "Food": 0.1
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.3
      },
      {
        "Transportation": 0.4
      },
      {
        "Translation": 0.5
      },
      {
        "Legal": 0.6
      },
      {
        "Volunteering": 0.7
      },
      {
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Czech Republic"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.8, lng: 15.47 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 608,
      "type": "message",
      "date": "2022-02-26T23: 22: 50",
      "from": "Victoria",
      "from_id": "user1203741620",
      "text": "Please take it from Goloseevskaya to Zhd"
    },
    "id": "128",
    "source": "telegram",
    "date": "2022-02-26T23:22:50",
    "sourceMessagePlainText": "Please take it from Goloseevskaya to Zhd",
    "address": "ano-BudimirovskayaGoloseevskaya to Zhdano-Budimirovskaya",
    "coords": null,
    "sentiment": null,
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "ano-BudimirovskayaGoloseevskaya to Zhdano-Budimirovskaya"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "Goloseevskaya to Zhdanovskaya{  \"lat\": 50.45,  \"lng\": 30.5233}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "anskaya, then to the right on the first crossing, then to the left - it will be the third house.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "ana FrankaTranslation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "ana FrankaTranslation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 612,
      "type": "message",
      "date": "2022-02-26T23: 28: 54",
      "from": "Elizabeth",
      "from_id": "user1632882280",
      "reply_to_message_id": 607,
      "text": "An acquaintance left for Krakow yesterday. And there she says there is a bus to the Czech Republic. If it's relevant to you, I'll write you how to get there"
    },
    "id": "129",
    "source": "telegram",
    "date": "2022-02-26T23:28:54",
    "sourceMessagePlainText": "An acquaintance left for Krakow yesterday. And there she says there is a bus to the Czech Republic. If it's relevant to you, I'll write you how to get there",
    "address": "Krakow, Poland",
    "coords": {
      "lat": 50.0647,
      "lng": 19.945
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Krakow, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 50.0647,\"lng\": 19.945}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 615,
      "type": "message",
      "date": "2022-02-26T23: 29: 59",
      "from": "Ирця❤",
      "from_id": "user1074583741",
      "reply_to_message_id": 612,
      "text": "so write please"
    },
    "id": "130",
    "source": "telegram",
    "date": "2022-02-26T23:29:59",
    "sourceMessagePlainText": "so write please",
    "address": "The physical location cannot be determined from the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location cannot be determined from the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location cannot be determined from the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "         [0.2, 0.2, 0.2, 0.2, 0.2][    {        \"category\": \"Food\",        \"probability\": 0.2    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.2    },    {        \"category\": \"Transportation\",        \"probability\": 0.2    },    {        \"category\": \"Translation\",        \"probability\": 0.2    },    {        \"category\": \"Legal\",        \"probability\": 0.2    },    {        \"category\": \"Volunteering\",        \"probability\": 0.2    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.2    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " help meVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " help meVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 620,
      "type": "message",
      "date": "2022-02-26T23: 39: 35",
      "from": "Ирця❤",
      "from_id": "user1074583741",
      "text": "maybe someone has driver's license numbers going from Chernivtsi or Ternopil to the border"
    },
    "id": "131",
    "source": "telegram",
    "date": "2022-02-26T23:39:35",
    "sourceMessagePlainText": "maybe someone has driver's license numbers going from Chernivtsi or Ternopil to the border",
    "address": "Chernivtsi and Ternopil are both in Ukraine.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Chernivtsi and Ternopil are both in Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "Chernivtsi: { lat: 48.29, lng: 25.93 }Ternopil: { lat: 49.55, lng: 25.6 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[    {\"Food\": 0.2},    {\"Shelter\": 0.2},    {\"Health Services\": 0.1},    {\"Transportation\": 0.3},    {\"Translation\": 0.1},    {\"Legal\": 0.1},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 621,
      "type": "message",
      "date": "2022-02-26T23: 40: 02",
      "from": "Irina",
      "from_id": "user179342318",
      "text": "Please write who is coming from Konstantinovka?"
    },
    "id": "132",
    "source": "telegram",
    "date": "2022-02-26T23:40:02",
    "sourceMessagePlainText": "Please write who is coming from Konstantinovka?",
    "address": "Konstantinovka",
    "coords": null,
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Konstantinovka"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Donetsk Oblast, Ukraine{ lat: 48.27, lng: 37.58 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 622,
      "type": "message",
      "date": "2022-02-26T23: 41: 45",
      "from": "Ilya Savchenkov",
      "from_id": "user407136086",
      "text": [
        "Kharkiv, who can take me from the Heroes of Labor to the Southern Railway? I will pay. \n \nThe person really needs help, write:",
        {
          "type": "mention",
          "text": "@avesatanastya"
        },
        ""
      ]
    },
    "id": "133",
    "source": "telegram",
    "date": "2022-02-26T23:41:45",
    "sourceMessagePlainText": "Kharkiv, who can take me from the Heroes of Labor to the Southern Railway? I will pay. \n \nThe person really needs help, write: @avesatanastya  ",
    "gmapLink": null,
    "address": "Kharkiv, Ukraine",
    "coords": {
      "lat": 49.98,
      "lng": 36.25
    },
    "sentiment": [
      {
        "Food": 0.2,
        "Shelter": 0.2,
        "Health Services": 0.2,
        "Transportation": 0.2,
        "Translation": 0.2,
        "Legal": 0.2,
        "Volunteering": 0.2,
        "Volunteers Needed": 0.2
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Kharkiv, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 49.98,\"lng\": 36.25}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\":0.2,\"Shelter\":0.2,\"Health Services\":0.2,\"Transportation\":0.2,\"Translation\":0.2,\"Legal\":0.2,\"Volunteering\":0.2,\"Volunteers Needed\":0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 625,
      "type": "message",
      "date": "2022-02-26T23: 44: 11",
      "from": "Victoria",
      "from_id": "user67716253",
      "text": "Is there a free driver from the Krakovets border to Krakow? There is a car, my grandmother can't go anymore"
    },
    "id": "134",
    "source": "telegram",
    "date": "2022-02-26T23:44:11",
    "sourceMessagePlainText": "Is there a free driver from the Krakovets border to Krakow? There is a car, my grandmother can't go anymore",
    "address": "Krakovets border",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.3,
        "Transportation": 0.4,
        "Translation": 0.5,
        "Legal": 0.6,
        "Volunteering": 0.7,
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Krakovets border"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " crossing (Ukraine){ \"lat\": 50.0667, \"lng\": 24.3167 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\": 0.1, \"Shelter\": 0.2, \"Health Services\": 0.3, \"Transportation\": 0.4, \"Translation\": 0.5, \"Legal\": 0.6, \"Volunteering\": 0.7, \"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 640,
      "type": "message",
      "date": "2022-02-27T00: 19: 32",
      "edited": "2022-02-27T00: 20: 42",
      "from": "Anna Tsybulkina",
      "from_id": "user549004286",
      "text": "How are you at Lviv railway station now?"
    },
    "id": "135",
    "source": "telegram",
    "date": "2022-02-27T00:19:32",
    "sourceMessagePlainText": "How are you at Lviv railway station now?",
    "address": "Lviv railway station",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": [
      {
        "Food": 0.2,
        "Shelter": 0.1,
        "Health Services": 0.05,
        "Transportation": 0.3,
        "Translation": 0.15,
        "Legal": 0.1,
        "Volunteering": 0.05,
        "Volunteers Needed": 0.05
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Lviv railway station"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 49.839683,\"lng\": 24.029717}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\": 0.2, \"Shelter\": 0.1, \"Health Services\": 0.05, \"Transportation\": 0.3, \"Translation\": 0.15, \"Legal\": 0.1, \"Volunteering\": 0.05, \"Volunteers Needed\": 0.05}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 641,
      "type": "message",
      "date": "2022-02-27T00: 19: 38",
      "from": "Anna Tsybulkina",
      "from_id": "user549004286",
      "text": "Really leave?"
    },
    "id": "136",
    "source": "telegram",
    "date": "2022-02-27T00:19:38",
    "sourceMessagePlainText": "Really leave?",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.1,
      0.1,
      0.05,
      0.05,
      0.05
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.1, 0.1, 0.05, 0.05, 0.05]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 653,
      "type": "message",
      "date": "2022-02-27T00: 57: 34",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "forwarded_from": "Alexander Yavorsky",
      "text": [
        "🇵🇱Map of hourly / permanent life based on work / roots for 3/10 years. \n🔑Large experience. \n✍Personal and remote support. \n \nList of agency services: \n- Opening a company / SP. Accounting support. \n- Moving with the whole family: full documentary support; \n- Search for suitable housing (rent / purchase); \n- Registration for the exam on the Polish Card; replacement of the Polish Card with Stały pobyt, replacement of Stałego pobytu with Obywatelstwo. \n - Replacement of Russian / Ukrainian / Belarusian rights with Polish ones. \n- Preparation of documentation (questionnaires, contracts, sworn translation). \n \n☎️Free consultation: \n \n ",
        {
          "type": "phone",
          "text": "+48576382554"
        },
        "Svetlana \n",
        {
          "type": "phone",
          "text": "+48791075264"
        },
        "Alexander \n \nWe work on weekends and holidays"
      ]
    },
    "id": "137",
    "source": "telegram",
    "date": "2022-02-27T00:57:34",
    "sourceMessagePlainText": "🇵🇱Map of hourly / permanent life based on work / roots for 3/10 years. \n🔑Large experience. \n✍Personal and remote support. \n \nList of agency services: \n- Opening a company / SP. Accounting support. \n- Moving with the whole family: full documentary support; \n- Search for suitable housing (rent / purchase); \n- Registration for the exam on the Polish Card; replacement of the Polish Card with Stały pobyt, replacement of Stałego pobytu with Obywatelstwo. \n - Replacement of Russian / Ukrainian / Belarusian rights with Polish ones. \n- Preparation of documentation (questionnaires, contracts, sworn translation). \n \n☎️Free consultation: \n \n  +48576382554 Svetlana \n +48791075264 Alexander \n \nWe work on weekends and holidays ",
    "gmapLink": null,
    "address": "Poland",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.3,
        "Transportation": 0.4,
        "Translation": 0.5,
        "Legal": 0.6,
        "Volunteering": 0.7,
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"Food\": 0.1,        \"Shelter\": 0.2,        \"Health Services\": 0.3,        \"Transportation\": 0.4,        \"Translation\": 0.5,        \"Legal\": 0.6,        \"Volunteering\": 0.7,        \"Volunteers Needed\": 0.8    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 659,
      "type": "message",
      "date": "2022-02-27T01: 18: 02",
      "from": "K0teyk0🍥",
      "from_id": "user375911493",
      "text": "Please tell me how you can get from Odessa to the border without having money on hand"
    },
    "id": "138",
    "source": "telegram",
    "date": "2022-02-27T01:18:02",
    "sourceMessagePlainText": "Please tell me how you can get from Odessa to the border without having money on hand",
    "address": "Odessa is located in Ukraine. The border is located in Russia.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Odessa is located in Ukraine. The border is located in Russia."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 666,
      "type": "message",
      "date": "2022-02-27T01: 30: 24",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "forwarded_from": "Wadim",
      "text": [
        "I will take 3-4 people from Warsaw to the border.",
        {
          "type": "phone",
          "text": "889766162"
        },
        ""
      ]
    },
    "id": "139",
    "source": "telegram",
    "date": "2022-02-27T01:30:24",
    "sourceMessagePlainText": "I will take 3-4 people from Warsaw to the border. 889766162  ",
    "gmapLink": null,
    "address": "The border of Warsaw.",
    "coords": {
      "lat": 52.237049,
      "lng": 21.017532
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.25
      },
      {
        "category": "Shelter",
        "probability": 0.25
      },
      {
        "category": "Health Services",
        "probability": 0.25
      },
      {
        "category": "Transportation",
        "probability": 0.25
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The border of Warsaw."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.237049, lng: 21.017532 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 668,
      "type": "message",
      "date": "2022-02-27T01: 34: 22",
      "from": "Susanna",
      "from_id": "user536735839",
      "text": [
        {
          "type": "link",
          "text": "https://www.facebook.com/1544471475839159/posts/3288256578127298/"
        }
      ]
    },
    "id": "140",
    "source": "telegram",
    "date": "2022-02-27T01:34:22",
    "sourceMessagePlainText": "https://www.facebook.com/1544471475839159/posts/3288256578127298/ ",
    "gmapLink": null,
    "address": "The physical location is Facebook headquarters in Menlo Park, California.",
    "coords": {
      "lat": 37.4832754,
      "lng": -122.148377
    },
    "sentiment": {
      "Food": 0.1,
      "Shelter": 0.2,
      "Health Services": 0.3,
      "Transportation": 0.4,
      "Translation": 0.5,
      "Legal": 0.6,
      "Volunteering": 0.7,
      "Volunteers Needed": 0.8
    },
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Facebook headquarters in Menlo Park, California."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 37.4832754, lng: -122.148377 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{  \"Food\": 0.1,  \"Shelter\": 0.2,  \"Health Services\": 0.3,  \"Transportation\": 0.4,  \"Translation\": 0.5,  \"Legal\": 0.6,  \"Volunteering\": 0.7,  \"Volunteers Needed\": 0.8}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 672,
      "type": "message",
      "date": "2022-02-27T01: 35: 29",
      "from": "Helen",
      "from_id": "user258865955",
      "reply_to_message_id": 659,
      "text": "Today there will be two evacuation flights from the railway station in Odessa. Everything is free, the only thing is that there are a lot of people and not everyone has time. Come and try. It will be on the platform at 6.30 pm. (but at least something "
    },
    "id": "141",
    "source": "telegram",
    "date": "2022-02-27T01:35:29",
    "sourceMessagePlainText": "Today there will be two evacuation flights from the railway station in Odessa. Everything is free, the only thing is that there are a lot of people and not everyone has time. Come and try. It will be on the platform at 6.30 pm. (but at least something ",
    "address": "The physical location from this text is the railway station in Odessa.",
    "coords": {
      "lat": 46.482526,
      "lng": 30.7233095
    },
    "sentiment": [
      0.125,
      0.25,
      0.25,
      0.125,
      0,
      0,
      0.125,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is the railway station in Odessa."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 46.482526, lng: 30.7233095 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.25, 0.125, 0, 0, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "    is being done).Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "    is being done).Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 673,
      "type": "message",
      "date": "2022-02-27T01: 36: 14",
      "edited": "2022-02-27T01: 36: 20",
      "from": "Helen",
      "from_id": "user258865955",
      "text": "And remember the curfew 🙏"
    },
    "id": "142",
    "source": "telegram",
    "date": "2022-02-27T01:36:14",
    "sourceMessagePlainText": "And remember the curfew 🙏",
    "address": "The curfew is in effect from 10 p.m. to 5 a.m.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The curfew is in effect from 10 p.m. to 5 a.m."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏼[    {\"category\": \"Food\", \"probability\": 0.2},    {\"category\": \"Shelter\", \"probability\": 0.1},    {\"category\": \"Health Services\", \"probability\": 0.05},    {\"category\": \"Transportation\", \"probability\": 0.1},    {\"category\": \"Translation\", \"probability\": 0.05},    {\"category\": \"Legal\", \"probability\": 0.05},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "🏽The curfew 🙏🏽"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "🏽The curfew 🙏🏽",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 676,
      "type": "message",
      "date": "2022-02-27T01: 41: 12",
      "from": "Natalia 🥰",
      "from_id": "user450383572",
      "text": "A lot of people at the train station, give free trains to the border but they are not clogged with toilets, take food with you and a lot of water will have to go a long time, we left Lviv at 8.30 am arrived at the border only at one o'clock in the morning"
    },
    "id": "143",
    "source": "telegram",
    "date": "2022-02-27T01:41:12",
    "sourceMessagePlainText": "A lot of people at the train station, give free trains to the border but they are not clogged with toilets, take food with you and a lot of water will have to go a long time, we left Lviv at 8.30 am arrived at the border only at one o'clock in the morning",
    "address": "The text describes a train journey from Lviv to the border, so the physical location is somewhere on the train tracks between Lviv and the border.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text describes a train journey from Lviv to the border, so the physical location is somewhere on the train tracks between Lviv and the border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no specific latitude and longitude given in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.4, 0.1, 0.6, 0.05, 0.05, 0.2, 0.1]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 678,
      "type": "message",
      "date": "2022-02-27T01: 42: 36",
      "edited": "2022-02-27T02: 20: 03",
      "from": "Natalia 🥰",
      "from_id": "user450383572",
      "text": "Meet well give water and food, and free transport to different cities of Poland"
    },
    "id": "144",
    "source": "telegram",
    "date": "2022-02-27T01:42:36",
    "sourceMessagePlainText": "Meet well give water and food, and free transport to different cities of Poland",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.237049, lng: 21.017532 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.25, 0, 0.25, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ".Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 679,
      "type": "message",
      "date": "2022-02-27T01: 43: 02",
      "edited": "2022-02-27T01: 45: 08",
      "from": "Lame Victoria",
      "from_id": "user1013832221",
      "text": [
        "Good afternoon. Please tell me 2 adults and 1 child. Is there any accommodation in TYKY? Now we have crossed the border UGRIN. My number,",
        {
          "type": "phone",
          "text": "+380680560200"
        },
        ""
      ]
    },
    "id": "145",
    "source": "telegram",
    "date": "2022-02-27T01:43:02",
    "sourceMessagePlainText": "Good afternoon. Please tell me 2 adults and 1 child. Is there any accommodation in TYKY? Now we have crossed the border UGRIN. My number, +380680560200  ",
    "gmapLink": null,
    "address": "The text appears to be coming from a person in a vehicle who has just crossed the border from Ukraine into Hungary. They are asking if there are any accommodations available in Tyky, Hungary.",
    "coords": {
      "lat": 47.45,
      "lng": 19.13
    },
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text appears to be coming from a person in a vehicle who has just crossed the border from Ukraine into Hungary. They are asking if there are any accommodations available in Tyky, Hungary."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 47.45, lng: 19.13 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 687,
      "type": "message",
      "date": "2022-02-27T02: 05: 49",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "forwarded_from": "Olya",
      "text": [
        "Hello, I have connected the company through which I work, they are ready to provide a bus to the Polish border. I need data: approximate time of crossing and the number of people who want to leave for Wroclaw. sukon aktova t with me ",
        {
          "type": "phone",
          "text": "511365516"
        },
        ""
      ]
    },
    "id": "146",
    "source": "telegram",
    "date": "2022-02-27T02:05:49",
    "sourceMessagePlainText": "Hello, I have connected the company through which I work, they are ready to provide a bus to the Polish border. I need data: approximate time of crossing and the number of people who want to leave for Wroclaw. sukon aktova t with me  511365516  ",
    "gmapLink": null,
    "address": "The text is not specific enough to provide an answer.",
    "coords": null,
    "sentiment": {
      "Food": 0,
      "Shelter": 0,
      "Health Services": 0,
      "Transportation": 1,
      "Translation": 0,
      "Legal": 0,
      "Volunteering": 0,
      "Volunteers Needed": 0
    },
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is not specific enough to provide an answer."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text is not specific enough to provide an answer."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0,    \"Shelter\": 0,    \"Health Services\": 0,    \"Transportation\": 1,    \"Translation\": 0,    \"Legal\": 0,    \"Volunteering\": 0,    \"Volunteers Needed\": 0}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 688,
      "type": "message",
      "date": "2022-02-27T02: 06: 34",
      "from": "Aleksandra",
      "from_id": "user447467158",
      "text": [
        {
          "type": "link",
          "text": "https://www.facebook.com/100001469832660/posts/4962092883849657/?d=n"
        }
      ]
    },
    "id": "147",
    "source": "telegram",
    "date": "2022-02-27T02:06:34",
    "sourceMessagePlainText": "https://www.facebook.com/100001469832660/posts/4962092883849657/?d=n ",
    "gmapLink": null,
    "address": "The physical location is not mentioned in the text.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.25
      },
      {
        "category": "Shelter",
        "probability": 0.25
      },
      {
        "category": "Health Services",
        "probability": 0.25
      },
      {
        "category": "Transportation",
        "probability": 0.25
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is not mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not mentioned in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 689,
      "type": "message",
      "date": "2022-02-27T02: 07: 26",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "forwarded_from": "Julie Ju",
      "text": [
        "‼ ЬLviv railway station - Poland or the border. 2 women. I will pay $ 300",
        {
          "type": "phone",
          "text": "+447445639054"
        },
        "️"
      ]
    },
    "id": "148",
    "source": "telegram",
    "date": "2022-02-27T02:07:26",
    "sourceMessagePlainText": "‼ ЬLviv railway station - Poland or the border. 2 women. I will pay $ 300 +447445639054 ️ ",
    "gmapLink": null,
    "address": "The text mentions Lviv railway station, which is located in Poland, and the border.",
    "coords": {
      "lat": 51.752725,
      "lng": 19.456064
    },
    "sentiment": {
      "Food": 0.1,
      "Shelter": 0.2,
      "Health Services": 0.3,
      "Transportation": 0.4,
      "Translation": 0.5,
      "Legal": 0.6,
      "Volunteering": 0.7,
      "Volunteers Needed": 0.8
    },
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text mentions Lviv railway station, which is located in Poland, and the border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.752725, lng: 19.456064 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.1,    \"Shelter\": 0.2,    \"Health Services\": 0.3,    \"Transportation\": 0.4,    \"Translation\": 0.5,    \"Legal\": 0.6,    \"Volunteering\": 0.7,    \"Volunteers Needed\": 0.8}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 693,
      "type": "message",
      "date": "2022-02-27T02: 20: 54",
      "from": "Andrew",
      "from_id": "user1170673862",
      "text": "Help the route Kyiv Odessa who to Odessa"
    },
    "id": "149",
    "source": "telegram",
    "date": "2022-02-27T02:20:54",
    "sourceMessagePlainText": "Help the route Kyiv Odessa who to Odessa",
    "address": "The location is Odessa.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The location is Odessa."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The location is Odessa.This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 694,
      "type": "message",
      "date": "2022-02-27T02: 22: 04",
      "from": "lithium",
      "from_id": "user932081199",
      "text": "People, there is a train, a lot of people, they have no water or food, everything that the volunteers brought went away very quickly, help our families"
    },
    "id": "150",
    "source": "telegram",
    "date": "2022-02-27T02:22:04",
    "sourceMessagePlainText": "People, there is a train, a lot of people, they have no water or food, everything that the volunteers brought went away very quickly, help our families",
    "address": "The physical location from this text is a train.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is a train."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", our children, our elders, please, we need water, we need food, we need clothes, we need medicine, we need help, please, help us, we are here in the square, in the main square, please, help us.[    {        \"category\": \"Food\",        \"probability\": 0.8    },    {        \"category\": \"Shelter\",        \"probability\": 0.6    },    {        \"category\": \"Health Services\",        \"probability\": 0.4    },    {        \"category\": \"Transportation\",        \"probability\": 0.2    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.05    },    {        \"category\": \"Volunteering\",        \"probability\": 0.03    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.02   "
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 697,
      "type": "message",
      "date": "2022-02-27T02: 23: 24",
      "from": "Yulia Andial",
      "from_id": "user1259784491",
      "text": "Hello, tell me where to go in Poland to help volunteers and take people out, please give contacts 💙💛"
    },
    "id": "151",
    "source": "telegram",
    "date": "2022-02-27T02:23:24",
    "sourceMessagePlainText": "Hello, tell me where to go in Poland to help volunteers and take people out, please give contacts 💙💛",
    "address": "There is no physical location given in the text.",
    "coords": null,
    "sentiment": {
      "Food": 0.2,
      "Shelter": 0.2,
      "Health Services": 0.2,
      "Transportation": 0.2,
      "Translation": 0.2,
      "Legal": 0.2,
      "Volunteering": 0.2,
      "Volunteers Needed": 0.2
    },
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no physical location given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no physical location given in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{  \"Food\": 0.2,  \"Shelter\": 0.2,  \"Health Services\": 0.2,  \"Transportation\": 0.2,  \"Translation\": 0.2,  \"Legal\": 0.2,  \"Volunteering\": 0.2,  \"Volunteers Needed\": 0.2}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 700,
      "type": "message",
      "date": "2022-02-27T02: 33: 54",
      "edited": "2022-02-27T03: 07: 34",
      "from": "Ivan (Switzerland)",
      "from_id": "user1854681765",
      "reply_to_message_id": 697,
      "text": [
        "There are lists. I don't know how many organizations. \n \n",
        {
          "type": "link",
          "text": "https://docs.google.com/spreadsheets/d/13lT4ja1qVoWKMAVaxApLq_wpx7YYHKLdzJbPYhA46GA/htmlview?usp=drivesdk&pru=AAABf1XETMk%2AG26CRdsAzz"
        },
        "\n \n",
        {
          "type": "link",
          "text": "https://docs.google.com/spreadsheets/d/1tB3tpzsd5ER9P33h3t5b0aa_rvnD3RXkh1WRmR4QOUw/edit#gid=0"
        },
        "\n \n",
        {
          "type": "link",
          "text": "https://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358"
        },
        "\n \nHere are the mega docks that are being updated \n",
        {
          "type": "link",
          "text": "https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.7px20j76hey"
        },
        "\n \n",
        {
          "type": "link",
          "text": "https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.7px20j76hey"
        },
        ""
      ]
    },
    "id": "152",
    "source": "telegram",
    "date": "2022-02-27T02:33:54",
    "sourceMessagePlainText": "There are lists. I don't know how many organizations. \n \n https://docs.google.com/spreadsheets/d/13lT4ja1qVoWKMAVaxApLq_wpx7YYHKLdzJbPYhA46GA/htmlview?usp=drivesdk&pru=AAABf1XETMk%2AG26CRdsAzz \n \n https://docs.google.com/spreadsheets/d/1tB3tpzsd5ER9P33h3t5b0aa_rvnD3RXkh1WRmR4QOUw/edit#gid=0 \n \n https://docs.google.com/spreadsheets/d/1M01NqCGkcT3Hw1e-3_H9V50GIuZqV-1dzYu0GQKMJW8/edit#gid=1923745358 \n \nHere are the mega docks that are being updated \n https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.7px20j76hey \n \n https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.7px20j76hey  ",
    "gmapLink": null,
    "address": "There is no physical location given in the text.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2,
        "Shelter": 0.2,
        "Health Services": 0.2,
        "Transportation": 0.2,
        "Translation": 0.2,
        "Legal": 0.2,
        "Volunteering": 0.2,
        "Volunteers Needed": 0.2
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no physical location given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no physical location given in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"Food\": 0.2,    \"Shelter\": 0.2,    \"Health Services\": 0.2,    \"Transportation\": 0.2,    \"Translation\": 0.2,    \"Legal\": 0.2,    \"Volunteering\": 0.2,    \"Volunteers Needed\": 0.2  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 702,
      "type": "message",
      "date": "2022-02-27T02: 35: 57",
      "edited": "2022-02-27T02: 47: 16",
      "from": "Ivan (Switzerland)",
      "from_id": "user1854681765",
      "text": [
        "Working border crossings with Ukraine: \n1. Dorohusk - Jagodzin (road) \n2. Dorohusk - Jagodzin (railway) \n3. Hrubieszów - Włodzimierz Wołyński \n4. Hrebenne - Rawa Ruska (road) \n5. Werchrata - Ra Ruska (railway) \n6 Korczowa - Krakowiec (21:20 February 26 stopped passing through the pedestrian checkpoint) \n7 Przemyśl - Mościska \n8 Medyka - Szeginie (Very heavy! The queue starts 47 km from the checkpoint. There is no food or water at all, people sit for two days without anything at all) \n9. Budomierz - Hruszew \n10. Zosin - Ustiług \n11. Dołhobyczów - Uhrynów \n12. Krościenko - Smolnica 18:30) \n13. Hrebenne - Rawa Ruska \n14. Krościenko - Chyrów \n \nSource: \n ",
        {
          "type": "link",
          "text": "https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.7px20j76hey"
        },
        ""
      ]
    },
    "id": "153",
    "source": "telegram",
    "date": "2022-02-27T02:35:57",
    "sourceMessagePlainText": "Working border crossings with Ukraine: \n1. Dorohusk - Jagodzin (road) \n2. Dorohusk - Jagodzin (railway) \n3. Hrubieszów - Włodzimierz Wołyński \n4. Hrebenne - Rawa Ruska (road) \n5. Werchrata - Ra Ruska (railway) \n6 Korczowa - Krakowiec (21:20 February 26 stopped passing through the pedestrian checkpoint) \n7 Przemyśl - Mościska \n8 Medyka - Szeginie (Very heavy! The queue starts 47 km from the checkpoint. There is no food or water at all, people sit for two days without anything at all) \n9. Budomierz - Hruszew \n10. Zosin - Ustiług \n11. Dołhobyczów - Uhrynów \n12. Krościenko - Smolnica 18:30) \n13. Hrebenne - Rawa Ruska \n14. Krościenko - Chyrów \n \nSource: \n  https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.7px20j76hey  ",
    "gmapLink": null,
    "address": "1. Dorohusk, Poland 2. Jagodzin, Poland 3. Hrubieszów, Poland 4. Włodzimierz Wołyński, Poland 5. Hrebenne, Poland 6. Korczowa, Poland 7. Przemyśl, Poland 8. Mościska, Poland 9. Budomierz, Poland 10. Hruszew, Poland 11. Zosin, Poland 12. Ustiług, Poland 13. Dołhobyczów, Poland 14. Uhrynów, Poland 15. Krościenko, Poland 16. Smolnica, Poland 17. Chyrów, Poland",
    "coords": null,
    "sentiment": {
      "Food": 0.1,
      "Shelter": 0.2,
      "Health Services": 0.3,
      "Transportation": 0.4,
      "Translation": 0.5,
      "Legal": 0.6,
      "Volunteering": 0.7,
      "Volunteers Needed": 0.8
    },
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "1. Dorohusk, Poland 2. Jagodzin, Poland 3. Hrubieszów, Poland 4. Włodzimierz Wołyński, Poland 5. Hrebenne, Poland 6. Korczowa, Poland 7. Przemyśl, Poland 8. Mościska, Poland 9. Budomierz, Poland 10. Hruszew, Poland 11. Zosin, Poland 12. Ustiług, Poland 13. Dołhobyczów, Poland 14. Uhrynów, Poland 15. Krościenko, Poland 16. Smolnica, Poland 17. Chyrów, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "1. { lat: 52.2333333, lng: 22.2666667 } 2. { lat: 52.1, lng: 20.8333333 } 3. { lat: 50.7833333, lng: 23.8666667 } 4. { lat: 51.2166667, lng: 24.3666667 } 5. { lat: 50.2166667, lng: 23.8166667 } 6. { lat: 50.05, lng: 22.6333333 } 7. { lat: 49.7833333, lng: 22.7666667 } 8. { lat: 50.6, lng: 22.8666667 } 9. { lat: 50.8666667, lng: 23.2166667 } 10. { lat: 51.2166667, lng: 23.8666667 } 11. { lat: 51.7166667, lng: 23.8666667 } 12. { lat: 51.8, lng: 23.8666667 } 13. { lat: 51.8166667, lng: 23.8666667"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.1,    \"Shelter\": 0.2,    \"Health Services\": 0.3,    \"Transportation\": 0.4,    \"Translation\": 0.5,    \"Legal\": 0.6,    \"Volunteering\": 0.7,    \"Volunteers Needed\": 0.8}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 704,
      "type": "message",
      "date": "2022-02-27T02: 40: 25",
      "from": "Victoria",
      "from_id": "user399865403",
      "text": "Tell me, is there a chat for transportation to Hungary or Romania?"
    },
    "id": "154",
    "source": "telegram",
    "date": "2022-02-27T02:40:25",
    "sourceMessagePlainText": "Tell me, is there a chat for transportation to Hungary or Romania?",
    "address": "There is no chat for transportation to Hungary or Romania.",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0,
      0.25,
      0,
      0,
      0,
      0
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no chat for transportation to Hungary or Romania."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no chat for transportation to Hungary or Romania."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0, 0.25, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 709,
      "type": "message",
      "date": "2022-02-27T02: 50: 58",
      "edited": "2022-02-27T02: 52: 37",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "forwarded_from": "Alena Zhukova",
      "text": [
        "🇵🇱Map of hourly / permanent life based on work / roots for 3/10 years. \n🔑Large experience. \n✍Personal and remote support. \n \nList of agency services: \n- Opening a company / SP. Accounting support. \n- Moving with the whole family: full documentary support; \n- Search for suitable housing (rent / purchase); \n- Registration for the exam on the Polish Card; replacement of the Polish Card with Stały pobyt, replacement of Stałego pobytu with Obywatelstwo. \n - Replacement of Russian / Ukrainian / Belarusian rights with Polish ones. \n- Preparation of documentation (questionnaires, contracts, sworn translation). \n \n☎️Free consultation: \n \n ",
        {
          "type": "phone",
          "text": "+48576382554"
        },
        "Svetlana \n",
        {
          "type": "phone",
          "text": "+48791075264"
        },
        "Alexander \n \nWe work on weekends and holidays"
      ]
    },
    "id": "155",
    "source": "telegram",
    "date": "2022-02-27T02:50:58",
    "sourceMessagePlainText": "🇵🇱Map of hourly / permanent life based on work / roots for 3/10 years. \n🔑Large experience. \n✍Personal and remote support. \n \nList of agency services: \n- Opening a company / SP. Accounting support. \n- Moving with the whole family: full documentary support; \n- Search for suitable housing (rent / purchase); \n- Registration for the exam on the Polish Card; replacement of the Polish Card with Stały pobyt, replacement of Stałego pobytu with Obywatelstwo. \n - Replacement of Russian / Ukrainian / Belarusian rights with Polish ones. \n- Preparation of documentation (questionnaires, contracts, sworn translation). \n \n☎️Free consultation: \n \n  +48576382554 Svetlana \n +48791075264 Alexander \n \nWe work on weekends and holidays ",
    "gmapLink": null,
    "address": "Poland",
    "coords": null,
    "sentiment": [
      {
        "Food": 0,
        "Shelter": 0,
        "Health Services": 0,
        "Transportation": 0,
        "Translation": 1,
        "Legal": 1,
        "Volunteering": 0,
        "Volunteers Needed": 0
      }
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.237049, lng: 21.017532 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"Food\": 0,        \"Shelter\": 0,        \"Health Services\": 0,        \"Transportation\": 0,        \"Translation\": 1,        \"Legal\": 1,        \"Volunteering\": 0,        \"Volunteers Needed\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 710,
      "type": "message",
      "date": "2022-02-27T02: 51: 39",
      "from": "Stas Torchyniuk",
      "from_id": "user968966274",
      "text": "If possible, take 2 women with 3 children from Zamosc to Wroclaw or Poznan?"
    },
    "id": "156",
    "source": "telegram",
    "date": "2022-02-27T02:51:39",
    "sourceMessagePlainText": "If possible, take 2 women with 3 children from Zamosc to Wroclaw or Poznan?",
    "address": "Zamosc, Poland",
    "coords": {
      "lat": 50.7,
      "lng": 22.8
    },
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Zamosc, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 50.7,\"lng\": 22.8}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 712,
      "type": "message",
      "date": "2022-02-27T02: 57: 27",
      "from": "Ivan Samoilich",
      "from_id": "user1051425490",
      "text": "White borders are volunteers who take people to big cities for free"
    },
    "id": "157",
    "source": "telegram",
    "date": "2022-02-27T02:57:27",
    "sourceMessagePlainText": "White borders are volunteers who take people to big cities for free",
    "address": "The physical location is a big city.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is a big city."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 715,
      "type": "message",
      "date": "2022-02-27T03: 08: 52",
      "from": "M.",
      "from_id": "user413783302",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 591,
      "height": 1280,
      "text": [
        "Hello, \nPlease distribute, \nInformation verified \nMy friend is a lawyer in Lviv \n",
        {
          "type": "link",
          "text": "https://www.facebook.com/profile.php?id=100017028553727"
        },
        ""
      ]
    },
    "id": "158",
    "source": "telegram",
    "date": "2022-02-27T03:08:52",
    "sourceMessagePlainText": "Hello, \nPlease distribute, \nInformation verified \nMy friend is a lawyer in Lviv \n https://www.facebook.com/profile.php?id=100017028553727  ",
    "gmapLink": null,
    "address": "The physical location in this text is Lviv.",
    "coords": null,
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location in this text is Lviv."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The latitude and longitude of Lviv are 49.83826° N, 24.02324° E.{  \"lat\": 49.83826,  \"lng\": 24.02324}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "Please help[    {        \"category\": \"Food\",        \"probability\": 0    },    {        \"category\": \"Shelter\",        \"probability\": 0    },    {        \"category\": \"Health Services\",        \"probability\": 0    },    {        \"category\": \"Transportation\",        \"probability\": 0    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 1    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 716,
      "type": "message",
      "date": "2022-02-27T03: 10: 28",
      "from": "Victoria Chumak",
      "from_id": "user923932995",
      "text": "H"
    },
    "id": "159",
    "source": "telegram",
    "date": "2022-02-27T03:10:28",
    "sourceMessagePlainText": "H",
    "address": "wy 101Hwy 101 is a highway in the United States.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.1,
      0.1,
      0.1,
      0.1,
      0.1
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "wy 101Hwy 101 is a highway in the United States."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.1, 0.1, 0.1, 0.1, 0.1]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "ousing and food insecurity are two of the main problems that refugees face.Housing and food insecurity are two of the main problems that refugees face."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "ousing and food insecurity are two of the main problems that refugees face.Housing and food insecurity are two of the main problems that refugees face.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 721,
      "type": "message",
      "date": "2022-02-27T03: 35: 26",
      "from": "Ivan",
      "from_id": "user505252583",
      "text": "What help do you need now"
    },
    "id": "160",
    "source": "telegram",
    "date": "2022-02-27T03:35:26",
    "sourceMessagePlainText": "What help do you need now",
    "address": "?The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "?The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "?[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "?What help do you need now?- Food- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "?What help do you need now?- Food- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 722,
      "type": "message",
      "date": "2022-02-27T03: 35: 30",
      "from": "Ivan",
      "from_id": "user505252583",
      "text": "Driver by car"
    },
    "id": "161",
    "source": "telegram",
    "date": "2022-02-27T03:35:30",
    "sourceMessagePlainText": "Driver by car",
    "address": "The physical location is a car.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is a car."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " or bike to pick up food and deliver it to people in need.[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " neededTransportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " neededTransportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 723,
      "type": "message",
      "date": "2022-02-27T03: 36: 19",
      "from": "Ivan",
      "from_id": "user505252583",
      "text": "I can be in Poland in a day. We fly from Asia. Themselves from Kiev. The whole family is there. Stuck here - but we can be where we will be useful"
    },
    "id": "162",
    "source": "telegram",
    "date": "2022-02-27T03:36:19",
    "sourceMessagePlainText": "I can be in Poland in a day. We fly from Asia. Themselves from Kiev. The whole family is there. Stuck here - but we can be where we will be useful",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ".Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 724,
      "type": "message",
      "date": "2022-02-27T03: 40: 47",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "8 people, 3 adults and 5 children, will be in Lviv in the evening. Is there anyone who could transport to Poland? They have been traveling with small children without water for a day, there is a problem with water on the train. "
    },
    "id": "163",
    "source": "telegram",
    "date": "2022-02-27T03:40:47",
    "sourceMessagePlainText": "8 people, 3 adults and 5 children, will be in Lviv in the evening. Is there anyone who could transport to Poland? They have been traveling with small children without water for a day, there is a problem with water on the train. ",
    "address": "The text is about people who are in Lviv, Ukraine and who need to get to Poland.",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": [
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is about people who are in Lviv, Ukraine and who need to get to Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.839683, lng: 24.029717 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Transportation\",    \"probability\": 1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 726,
      "type": "message",
      "date": "2022-02-27T03: 42: 28",
      "from": "Daria Shapovalova",
      "from_id": "user313954059",
      "text": [
        "Tilt truck (70m3, 13m) plans ✓Humanitarian Flight for Delivery of Aid to the Ukrainian border along the route: \n Szczecin- Gorzow wkpl- Miedzyrzecz- Swiebodzin- Wolsztyn - Poznan- Konin - Lodz- Warszawa- Lublin -? R n Please call back from these cities representatives of Helppoints \n \n \n Volunteers from Ukraine, ANNOUNCE WHAT IS NECESSARY,? \nWhat is allowed to deliver? \n \n \n Tel, viber, WhatsApp +48 ",
        {
          "type": "phone",
          "text": "606637911"
        },
        "\n Tel +48 731 323 737, \nviber",
        {
          "type": "phone",
          "text": "+380983131930"
        },
        "."
      ]
    },
    "id": "164",
    "source": "telegram",
    "date": "2022-02-27T03:42:28",
    "sourceMessagePlainText": "Tilt truck (70m3, 13m) plans ✓Humanitarian Flight for Delivery of Aid to the Ukrainian border along the route: \n Szczecin- Gorzow wkpl- Miedzyrzecz- Swiebodzin- Wolsztyn - Poznan- Konin - Lodz- Warszawa- Lublin -? R n Please call back from these cities representatives of Helppoints \n \n \n Volunteers from Ukraine, ANNOUNCE WHAT IS NECESSARY,? \nWhat is allowed to deliver? \n \n \n Tel, viber, WhatsApp +48  606637911 \n Tel +48 731 323 737, \nviber +380983131930 . ",
    "gmapLink": null,
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 734,
      "type": "message",
      "date": "2022-02-27T03: 44: 39",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "Does anyone know if everyone is allowed to enter the situation or if men are not allowed to cross the border into Poland?"
    },
    "id": "165",
    "source": "telegram",
    "date": "2022-02-27T03:44:39",
    "sourceMessagePlainText": "Does anyone know if everyone is allowed to enter the situation or if men are not allowed to cross the border into Poland?",
    "address": "Poland",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{  \"lat\": 52.2296756,  \"lng\": 21.0122287}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 737,
      "type": "message",
      "date": "2022-02-27T03: 44: 54",
      "from": "Maria Pushnina",
      "from_id": "user5220492132",
      "text": [
        "Hello. We are collecting food aid. To feed the children in the shelter. The city authorities do not care at all. Berdyansk. The city is under Russian troops. \nIBAN: UA353077700000026209413474750 \nBENEFICIARY: MOHYLKO OLEKSANDR \nACCOUNT:",
        {
          "type": "bank_card",
          "text": "4323387011092551"
        },
        "BANK OF BENEFICIARY: JSC \"ACCENT-BANK \", Ukraine \nSWIFT CODE: UKCBUAUK \nCORRESPONDENT ACCOUNT: LV70BLIB2001024752002 \nCORRESPONDENT BANK: JSC \"Baltic International BankW 2L \" BLV International Bank \"L 0V \" L  CLR "
      ]
    },
    "id": "166",
    "source": "telegram",
    "date": "2022-02-27T03:44:54",
    "sourceMessagePlainText": "Hello. We are collecting food aid. To feed the children in the shelter. The city authorities do not care at all. Berdyansk. The city is under Russian troops. \nIBAN: UA353077700000026209413474750 \nBENEFICIARY: MOHYLKO OLEKSANDR \nACCOUNT: 4323387011092551 BANK OF BENEFICIARY: JSC \"ACCENT-BANK \", Ukraine \nSWIFT CODE: UKCBUAUK \nCORRESPONDENT ACCOUNT: LV70BLIB2001024752002 \nCORRESPONDENT BANK: JSC \"Baltic International BankW 2L \" BLV International Bank \"L 0V \" L  CLR  ",
    "gmapLink": null,
    "address": "Berdyansk, Ukraine",
    "coords": {
      "lat": 46.7667,
      "lng": 36.7833
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.4
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Berdyansk, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 46.7667,\"lng\": 36.7833}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Food\",    \"probability\": 0.4  },  {    \"category\": \"Shelter\",    \"probability\": 0.2  },  {    \"category\": \"Health Services\",    \"probability\": 0.1  },  {    \"category\": \"Transportation\",    \"probability\": 0.1  },  {    \"category\": \"Translation\",    \"probability\": 0.1  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 748,
      "type": "message",
      "date": "2022-02-27T03: 50: 14",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "forwarded_from": "NO BOUNDARIES News",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1280,
      "height": 853,
      "text": [
        "Chats have been set up to help each other with the situation in Ukraine. If you know current information and can help or have questions, join. \n \nNews Channel: \n",
        {
          "type": "mention",
          "text": "@ bezgranic24"
        },
        "\n \nTelegram Chats: \n \n",
        {
          "type": "mention",
          "text": "@Ukraina_granitsa"
        },
        "Ukraine \n",
        {
          "type": "mention",
          "text": "@Border_Slovakia"
        },
        "Slovakia \n",
        {
          "type": "mention",
          "text": "@Border_Romania"
        },
        "Romania \n",
        {
          "type": "mention",
          "text": "@Border_Moldova"
        },
        "Moldova \n",
        {
          "type": "mention",
          "text": "@Border_of_Europe"
        },
        "Europe \n",
        {
          "type": "mention",
          "text": "@Border_Poland"
        },
        "Poland \n",
        {
          "type": "mention",
          "text": "@Border_Hungary"
        },
        "Hungary \n \n",
        {
          "type": "bold",
          "text": "FAQ question - answer for refugees 🌍 \n \nIf you have up-to-date information on the situation for publication in a news project, send it to us @ Artsiom911"
        },
        ""
      ]
    },
    "id": "167",
    "source": "telegram",
    "date": "2022-02-27T03:50:14",
    "sourceMessagePlainText": "Chats have been set up to help each other with the situation in Ukraine. If you know current information and can help or have questions, join. \n \nNews Channel: \n @ bezgranic24 \n \nTelegram Chats: \n \n @Ukraina_granitsa Ukraine \n @Border_Slovakia Slovakia \n @Border_Romania Romania \n @Border_Moldova Moldova \n @Border_of_Europe Europe \n @Border_Poland Poland \n @Border_Hungary Hungary \n \n FAQ question - answer for refugees 🌍 \n \nIf you have up-to-date information on the situation for publication in a news project, send it to us @ Artsiom911  ",
    "gmapLink": null,
    "address": "The physical location mentioned in the text is Ukraine.",
    "coords": {
      "lat": 49.3,
      "lng": 32
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.125
      },
      {
        "category": "Shelter",
        "probability": 0.125
      },
      {
        "category": "Health Services",
        "probability": 0.125
      },
      {
        "category": "Transportation",
        "probability": 0.125
      },
      {
        "category": "Translation",
        "probability": 0.125
      },
      {
        "category": "Legal",
        "probability": 0.125
      },
      {
        "category": "Volunteering",
        "probability": 0.125
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.125
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.3, lng: 32.0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.125},    {\"category\": \"Shelter\", \"probability\": 0.125},    {\"category\": \"Health Services\", \"probability\": 0.125},    {\"category\": \"Transportation\", \"probability\": 0.125},    {\"category\": \"Translation\", \"probability\": 0.125},    {\"category\": \"Legal\", \"probability\": 0.125},    {\"category\": \"Volunteering\", \"probability\": 0.125},    {\"category\": \"Volunteers Needed\", \"probability\": 0.125}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 762,
      "type": "message",
      "date": "2022-02-27T03: 57: 55",
      "from": "Sinichka",
      "from_id": "user177119067",
      "text": "Hello, can someone rent an apartment in Warsaw? 6 people with a small child."
    },
    "id": "168",
    "source": "telegram",
    "date": "2022-02-27T03:57:55",
    "sourceMessagePlainText": "Hello, can someone rent an apartment in Warsaw? 6 people with a small child.",
    "address": "Warsaw",
    "coords": null,
    "sentiment": [
      {
        "category": "Shelter",
        "probability": 0.6
      },
      {
        "category": "Food",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Warsaw"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Poland{ lat: 52.2296756, lng: 21.0122287 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Shelter\", \"probability\": 0.6},    {\"category\": \"Food\", \"probability\": 0.2},    {\"category\": \"Health Services\", \"probability\": 0.1},    {\"category\": \"Transportation\", \"probability\": 0.1},    {\"category\": \"Translation\", \"probability\": 0.0},    {\"category\": \"Legal\", \"probability\": 0.0},    {\"category\": \"Volunteering\", \"probability\": 0.0},    {\"category\": \"Volunteers Needed\", \"probability\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 766,
      "type": "message",
      "date": "2022-02-27T03: 59: 54",
      "from": "CrazyDriver",
      "from_id": "user1556198921",
      "reply_to_message_id": 762,
      "text": [
        {
          "type": "link",
          "text": "https://www.facebook.com/groups/200498285613392/?ref=share"
        }
      ]
    },
    "id": "169",
    "source": "telegram",
    "date": "2022-02-27T03:59:54",
    "sourceMessagePlainText": "https://www.facebook.com/groups/200498285613392/?ref=share ",
    "gmapLink": null,
    "address": "The physical location is Facebook headquarters in Menlo Park, California.",
    "coords": {
      "lat": 37.4832754,
      "lng": -122.148377
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Facebook headquarters in Menlo Park, California."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 37.4832754, lng: -122.148377 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 769,
      "type": "message",
      "date": "2022-02-27T04: 00: 38",
      "from": "Ukraine.Ukraine",
      "from_id": "user5145220959",
      "text": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔"
    },
    "id": "170",
    "source": "telegram",
    "date": "2022-02-27T04:00:38",
    "sourceMessagePlainText": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔",
    "address": "This is a string of numbers and letters that does not appear to have a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This is a string of numbers and letters that does not appear to have a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This is a string of numbers and letters that does not appear to have a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ")[0.4323, 0.3570, 0.2010, 0.3038]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ").Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ").Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 771,
      "type": "message",
      "date": "2022-02-27T04: 01: 29",
      "from": "Ukraine.Ukraine",
      "from_id": "user5145220959",
      "text": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔"
    },
    "id": "171",
    "source": "telegram",
    "date": "2022-02-27T04:01:29",
    "sourceMessagePlainText": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ")[0.4323, 0.3570, 0.2010, 0.3038]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ").Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ").Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 774,
      "type": "message",
      "date": "2022-02-27T04: 02: 42",
      "edited": "2022-02-27T04: 03: 01",
      "from": ".,.",
      "from_id": "user1150077614",
      "reply_to_message_id": 734,
      "text": "From Ukraine? 😳from 18 to 60 citizens are not allowed, \" men \""
    },
    "id": "172",
    "source": "telegram",
    "date": "2022-02-27T04:02:42",
    "sourceMessagePlainText": "From Ukraine? 😳from 18 to 60 citizens are not allowed, \" men \"",
    "address": "The physical location is Ukraine.",
    "coords": {
      "lat": 44,
      "lng": 32
    },
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 44, lng: 32 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " are allowed to go to the Crimea, but only for the purpose of military service.[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "are not allowed to go out from 8pm to 6amLegal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "are not allowed to go out from 8pm to 6amLegal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 776,
      "type": "message",
      "date": "2022-02-27T04: 03: 29",
      "from": "Ukraine.Ukraine",
      "from_id": "user5145220959",
      "text": "4323 3570 2010 3038 \nGorpenyuk Valentyna \n maybe 1 UAH is already something. \nThank you to everyone who helps. Thank you people now difficult situation I'm sorry, but what we have (oVoyna in Ukraine help people are not indifferent to how to take money from us for transportation "
    },
    "id": "173",
    "source": "telegram",
    "date": "2022-02-27T04:03:29",
    "sourceMessagePlainText": "4323 3570 2010 3038 \nGorpenyuk Valentyna \n maybe 1 UAH is already something. \nThank you to everyone who helps. Thank you people now difficult situation I'm sorry, but what we have (oVoyna in Ukraine help people are not indifferent to how to take money from us for transportation ",
    "address": "This text does not contain a physical location.",
    "coords": null,
    "sentiment": [
      0.4323,
      0.357,
      0.201,
      0.3038
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.4323, 0.3570, 0.2010, 0.3038]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 778,
      "type": "message",
      "date": "2022-02-27T04: 03: 34",
      "from": "꧁ ° ঔৣ | ☬ .ŠØN̷ ¥ Å. ☬ | ঔৣ ° ꧂",
      "from_id": "user1477488663",
      "text": "4 girls are looking for a place to spend the night, is there anyone here who provides a place of rest near the border of Hrushev?"
    },
    "id": "174",
    "source": "telegram",
    "date": "2022-02-27T04:03:34",
    "sourceMessagePlainText": "4 girls are looking for a place to spend the night, is there anyone here who provides a place of rest near the border of Hrushev?",
    "address": "The text does not provide enough information to answer the question.",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not provide enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not provide enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 785,
      "type": "message",
      "date": "2022-02-27T04: 09: 52",
      "from": "Jemchujinka",
      "from_id": "user170059381",
      "reply_to_message_id": 762,
      "text": "I will write information in PM now"
    },
    "id": "175",
    "source": "telegram",
    "date": "2022-02-27T04:09:52",
    "sourceMessagePlainText": "I will write information in PM now",
    "address": "This text was written using a private messaging system, so the author's physical location is not known.",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text was written using a private messaging system, so the author's physical location is not known."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text was written using a private messaging system, so the author's physical location is not known."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This text does not contain enough information to answer the question."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This text does not contain enough information to answer the question.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 790,
      "type": "message",
      "date": "2022-02-27T04: 13: 48",
      "from": "Stas Torchyniuk",
      "from_id": "user968966274",
      "text": "Please tell me where they need the most humanitarian aid?"
    },
    "id": "176",
    "source": "telegram",
    "date": "2022-02-27T04:13:48",
    "sourceMessagePlainText": "Please tell me where they need the most humanitarian aid?",
    "address": "The most humanitarian aid is needed in Syria.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.3
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.1
      },
      {
        "Transportation": 0.05
      },
      {
        "Translation": 0.025
      },
      {
        "Legal": 0.025
      },
      {
        "Volunteering": 0.1
      },
      {
        "Volunteers Needed": 0.2
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The most humanitarian aid is needed in Syria."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.3},    {\"Shelter\": 0.2},    {\"Health Services\": 0.1},    {\"Transportation\": 0.05},    {\"Translation\": 0.025},    {\"Legal\": 0.025},    {\"Volunteering\": 0.1},    {\"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 791,
      "type": "message",
      "date": "2022-02-27T04: 13: 56",
      "from": "Stas Torchyniuk",
      "from_id": "user968966274",
      "text": "On the border"
    },
    "id": "177",
    "source": "telegram",
    "date": "2022-02-27T04:13:56",
    "sourceMessagePlainText": "On the border",
    "address": " of France and SpainThe location is on the border of France and Spain.",
    "coords": {
      "lat": 42.5,
      "lng": 1.5
    },
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " of France and SpainThe location is on the border of France and Spain."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 42.5, lng: 1.5 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", there are many organizations that provide free or low-cost food, shelter, health services, transportation, translation, legal, and volunteering opportunities to immigrants. Volunteers are always needed to help with these services.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " between Mexico and the United States, there are many people who need help.There are many people who need help with food, shelter, transportation, and health services on the border between Mexico and the United States."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " between Mexico and the United States, there are many people who need help.There are many people who need help with food, shelter, transportation, and health services on the border between Mexico and the United States.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 794,
      "type": "message",
      "date": "2022-02-27T04: 16: 43",
      "from": "Ukraine.Ukraine",
      "from_id": "user5145220959",
      "text": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔"
    },
    "id": "178",
    "source": "telegram",
    "date": "2022-02-27T04:16:43",
    "sourceMessagePlainText": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔",
    "address": ")This text was extracted from a Gorpenyuk Valentina's post on a social media platform. The post cannot be found now, but it was probably posted on a platform like Facebook, Twitter, or Instagram.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ")This text was extracted from a Gorpenyuk Valentina's post on a social media platform. The post cannot be found now, but it was probably posted on a platform like Facebook, Twitter, or Instagram."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "\"I'm at Central Park (New York, NY) w/ 2 others\"{ lat: 40.7828647, lng: -73.9653551 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ")[0.4323, 0.3570, 0.2010, 0.3038]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ").Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ").Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 800,
      "type": "message",
      "date": "2022-02-27T04: 21: 46",
      "from": "Eugene Sikorin",
      "from_id": "user1611805557",
      "reply_to_message_id": 797,
      "text": "Admin extradited this figure"
    },
    "id": "179",
    "source": "telegram",
    "date": "2022-02-27T04:21:46",
    "sourceMessagePlainText": "Admin extradited this figure",
    "address": " to the USThe figure was extradited to the US from an unknown location.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " to the USThe figure was extradited to the US from an unknown location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " from the [2011 Census](https://www.census.gov/2010census/data/).    {        \"Food\": [            {                \"probability\": 0.1            }        ],        \"Shelter\": [            {                \"probability\": 0.2            }        ],        \"Health Services\": [            {                \"probability\": 0.3            }        ],        \"Transportation\": [            {                \"probability\": 0.4            }        ],        \"Translation\": [            {                \"probability\": 0.5            }        ],        \"Legal\": [            {                \"probability\": 0.6            }        ],        \"Volunteering\": [            {                \"probability\": 0.7            }        ],        \"Volunteers Needed\": [            {                \"probability\": 0.8            }        ]    }                            "
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to the USLegal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to the USLegal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 819,
      "type": "message",
      "date": "2022-02-27T04: 33: 09",
      "from": "Eduard Sesmii",
      "from_id": "user609036395",
      "reply_to_message_id": 698,
      "text": "What is this?"
    },
    "id": "180",
    "source": "telegram",
    "date": "2022-02-27T04:33:09",
    "sourceMessagePlainText": "What is this?",
    "address": "This is a rock.This is a rock.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.3
      },
      {
        "Transportation": 0.4
      },
      {
        "Translation": 0.5
      },
      {
        "Legal": 0.6
      },
      {
        "Volunteering": 0.7
      },
      {
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This is a rock.This is a rock."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This is not a valid text from which to extract latitude and longitude."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\":0.1},    {\"Shelter\":0.2},    {\"Health Services\":0.3},    {\"Transportation\":0.4},    {\"Translation\":0.5},    {\"Legal\":0.6},    {\"Volunteering\":0.7},    {\"Volunteers Needed\":0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This is a list of resources for people who are experiencing homelessness in the city of Los Angeles."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This is a list of resources for people who are experiencing homelessness in the city of Los Angeles.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 823,
      "type": "message",
      "date": "2022-02-27T04: 33: 46",
      "from": "Eduard Sesmii",
      "from_id": "user609036395",
      "text": "Got it"
    },
    "id": "181",
    "source": "telegram",
    "date": "2022-02-27T04:33:46",
    "sourceMessagePlainText": "Got it",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "![    {\"Food\":0.2},    {\"Shelter\":0.2},    {\"Health Services\":0.2},    {\"Transportation\":0.2},    {\"Translation\":0.2},    {\"Legal\":0.2},    {\"Volunteering\":0.2},    {\"Volunteers Needed\":0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ". So we'll need to find a way to get more volunteers to help with the translation.Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ". So we'll need to find a way to get more volunteers to help with the translation.Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 824,
      "type": "message",
      "date": "2022-02-27T04: 33: 48",
      "from": "Eduard Sesmii",
      "from_id": "user609036395",
      "text": "Thank you"
    },
    "id": "182",
    "source": "telegram",
    "date": "2022-02-27T04:33:48",
    "sourceMessagePlainText": "Thank you",
    "address": " for your interest in our San Francisco officeSan Francisco",
    "coords": {
      "lat": 37.7749,
      "lng": -122.4194
    },
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " for your interest in our San Francisco officeSan Francisco"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 37.7749, lng: -122.4194 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " for your interest in volunteering with the Refugee and Immigrant Center at the Crossroads (RIC-ATC). We are a non-profit organization that provides direct services to refugees, asylees, and other immigrants in the Twin Cities. We are currently seeking volunteers in the following areas:[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " for considering volunteering with us!Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " for considering volunteering with us!Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 834,
      "type": "message",
      "date": "2022-02-27T04: 38: 05",
      "edited": "2022-03-02T07: 54: 34",
      "from": "Maksym Vinskyi",
      "from_id": "user844774496",
      "text": "I'm in Budomé, I'll take 3-4 people to Krakow"
    },
    "id": "183",
    "source": "telegram",
    "date": "2022-02-27T04:38:05",
    "sourceMessagePlainText": "I'm in Budomé, I'll take 3-4 people to Krakow",
    "address": "Budomé is in Poland.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Budomé is in Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ". I'll leave tomorrow at 10 am[{\"category\":\"Food\",\"probability\":0.1},{\"category\":\"Shelter\",\"probability\":0.1},{\"category\":\"Health Services\",\"probability\":0.1},{\"category\":\"Transportation\",\"probability\":0.6},{\"category\":\"Translation\",\"probability\":0.1},{\"category\":\"Legal\",\"probability\":0.1},{\"category\":\"Volunteering\",\"probability\":0.1},{\"category\":\"Volunteers Needed\",\"probability\":0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 842,
      "type": "message",
      "date": "2022-02-27T04: 42: 05",
      "from": "Nika",
      "from_id": "user5178517587",
      "text": "Children will be allowed to enter dogs in Italy without documents? There is a vaccination passport but no analysis for antibodies and chips"
    },
    "id": "184",
    "source": "telegram",
    "date": "2022-02-27T04:42:05",
    "sourceMessagePlainText": "Children will be allowed to enter dogs in Italy without documents? There is a vaccination passport but no analysis for antibodies and chips",
    "address": " are not mandatoryThe text is about dogs in Italy, so the physical location is Italy.",
    "coords": {
      "lat": 41.8719,
      "lng": 12.5674
    },
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " are not mandatoryThe text is about dogs in Italy, so the physical location is Italy."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"41.8719\", lng: \"12.5674\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " are not mandatory.[0.2, 0.6, 0.0, 0.0, 0.0, 0.0, 0.2, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " are not mandatoryHealth Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " are not mandatoryHealth Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 845,
      "type": "message",
      "date": "2022-02-27T04: 43: 10",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "reply_to_message_id": 842,
      "text": "I went to Poland - documents on animals are not checked at all. They say you don't need to show anything"
    },
    "id": "185",
    "source": "telegram",
    "date": "2022-02-27T04:43:10",
    "sourceMessagePlainText": "I went to Poland - documents on animals are not checked at all. They say you don't need to show anything",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 847,
      "type": "message",
      "date": "2022-02-27T04: 43: 41",
      "edited": "2022-02-27T04: 43: 51",
      "from": "Nika",
      "from_id": "user5178517587",
      "text": "I'm in Poland now, but I'm going to go to my sister in Italy and I think they will miss me or not"
    },
    "id": "186",
    "source": "telegram",
    "date": "2022-02-27T04:43:41",
    "sourceMessagePlainText": "I'm in Poland now, but I'm going to go to my sister in Italy and I think they will miss me or not",
    "address": "Poland and Italy",
    "coords": {
      "lat": 52.132633,
      "lng": 21.006776
    },
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland and Italy"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"52.132633\", lng: \"21.006776\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.4, 0.1, 0.05, 0.05, 0.05, 0.05, 0.05]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 848,
      "type": "message",
      "date": "2022-02-27T04: 44: 04",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "text": "And who will miss? There are no borders"
    },
    "id": "187",
    "source": "telegram",
    "date": "2022-02-27T04:44:04",
    "sourceMessagePlainText": "And who will miss? There are no borders",
    "address": "There is no physical location that can be extracted from this text.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no physical location that can be extracted from this text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat, lng } = null"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " in a pandemic.[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " in a pandemic.Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " in a pandemic.Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 849,
      "type": "message",
      "date": "2022-02-27T04: 44: 11",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "text": "There is no veterinary control"
    },
    "id": "188",
    "source": "telegram",
    "date": "2022-02-27T04:44:11",
    "sourceMessagePlainText": "There is no veterinary control",
    "address": " in this areaThere is no veterinary control in this area.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " in this areaThere is no veterinary control in this area."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no latitude and longitude in this text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " in this area.[0.25, 0.25, 0.25, 0.25, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " of the meat, so it may not be safe to eatHealth Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " of the meat, so it may not be safe to eatHealth Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 850,
      "type": "message",
      "date": "2022-02-27T04: 44: 18",
      "from": "Nika",
      "from_id": "user5178517587",
      "text": "They say there are some checkpoints"
    },
    "id": "189",
    "source": "telegram",
    "date": "2022-02-27T04:44:18",
    "sourceMessagePlainText": "They say there are some checkpoints",
    "address": " near the cityThe city mentioned is most likely Baghdad, Iraq.",
    "coords": {
      "lat": 33.3333,
      "lng": 44.3947
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " near the cityThe city mentioned is most likely Baghdad, Iraq."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{  \"lat\": 33.3333,  \"lng\": 44.3947}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " in the city, but we haven't seen any.[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " where volunteers are needed to helpVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " where volunteers are needed to helpVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 852,
      "type": "message",
      "date": "2022-02-27T04: 44: 31",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "Nobody checks anywhere from Poland to Europe"
    },
    "id": "190",
    "source": "telegram",
    "date": "2022-02-27T04:44:31",
    "sourceMessagePlainText": "Nobody checks anywhere from Poland to Europe",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 854,
      "type": "message",
      "date": "2022-02-27T04: 44: 36",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "Go where and where you want"
    },
    "id": "191",
    "source": "telegram",
    "date": "2022-02-27T04:44:36",
    "sourceMessagePlainText": "Go where and where you want",
    "address": "There is no physical location mentioned in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no physical location mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no physical location mentioned in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to go.[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", when you wantTransportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", when you wantTransportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 855,
      "type": "message",
      "date": "2022-02-27T04: 44: 38",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "text": "Yes, but if they stop, then your documents"
    },
    "id": "192",
    "source": "telegram",
    "date": "2022-02-27T04:44:38",
    "sourceMessagePlainText": "Yes, but if they stop, then your documents",
    "address": " will be in the same placeThe documents will be in the same place.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " will be in the same placeThe documents will be in the same place."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " will be invalid.[    {        \"category\": \"Food\",        \"probability\": 0.2    },    {        \"category\": \"Shelter\",        \"probability\": 0.4    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.05    },    {        \"category\": \"Legal\",        \"probability\": 0.05    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.05    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " are no longer valid.Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " are no longer valid.Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 856,
      "type": "message",
      "date": "2022-02-27T04: 44: 39",
      "from": "Nika",
      "from_id": "user5178517587",
      "text": "In general, I do not want to carry a Chihuahua with dogs, they want only 600 euros cheaper"
    },
    "id": "193",
    "source": "telegram",
    "date": "2022-02-27T04:44:39",
    "sourceMessagePlainText": "In general, I do not want to carry a Chihuahua with dogs, they want only 600 euros cheaper",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 857,
      "type": "message",
      "date": "2022-02-27T04: 44: 58",
      "from": "Anfisa Dekkword",
      "from_id": "user1389114684",
      "text": "Hello everyone. Don't you know, now they are allowed to enter Poland without a passport?"
    },
    "id": "194",
    "source": "telegram",
    "date": "2022-02-27T04:44:58",
    "sourceMessagePlainText": "Hello everyone. Don't you know, now they are allowed to enter Poland without a passport?",
    "address": "Poland",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.3,
        "Transportation": 0.4,
        "Translation": 0.5,
        "Legal": 0.6,
        "Volunteering": 0.7,
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.237049, lng: 21.017532 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\": 0.1, \"Shelter\": 0.2, \"Health Services\": 0.3, \"Transportation\": 0.4, \"Translation\": 0.5, \"Legal\": 0.6, \"Volunteering\": 0.7, \"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 858,
      "type": "message",
      "date": "2022-02-27T04: 45: 12",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "They say they let everyone in"
    },
    "id": "195",
    "source": "telegram",
    "date": "2022-02-27T04:45:12",
    "sourceMessagePlainText": "They say they let everyone in",
    "address": "There is no physical location given in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no physical location given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no physical location given in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", but they don't.[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", but they turn away people who don't have certain papersLegal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", but they turn away people who don't have certain papersLegal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 859,
      "type": "message",
      "date": "2022-02-27T04: 45: 14",
      "edited": "2022-02-27T04: 45: 28",
      "from": ".,.",
      "from_id": "user1150077614",
      "reply_to_message_id": 857,
      "text": "Women yes, refugee status"
    },
    "id": "196",
    "source": "telegram",
    "date": "2022-02-27T04:45:14",
    "sourceMessagePlainText": "Women yes, refugee status",
    "address": " noThe physical location of this text is unknown.",
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " noThe physical location of this text is unknown."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: null, lng: null }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " no[0.2, 0.4, 0.1, 0.05, 0.05, 0.1, 0.1, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " noRefugee status"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " noRefugee status",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 860,
      "type": "message",
      "date": "2022-02-27T04: 45: 16",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "Even without documents"
    },
    "id": "197",
    "source": "telegram",
    "date": "2022-02-27T04:45:16",
    "sourceMessagePlainText": "Even without documents",
    "address": " or witnesses,The physical location from this text is unknown.",
    "coords": null,
    "sentiment": null,
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " or witnesses,The physical location from this text is unknown."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location from this text is unknown."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", undocumented immigrants are entitled to emergency medical care, public education and disaster relief.[0.125, 0.125, 0.25, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", all people have the right to emergency medical care, food, and shelter.Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", all people have the right to emergency medical care, food, and shelter.Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 861,
      "type": "message",
      "date": "2022-02-27T04: 45: 25",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "Yes, women with children and besch"
    },
    "id": "198",
    "source": "telegram",
    "date": "2022-02-27T04:45:25",
    "sourceMessagePlainText": "Yes, women with children and besch",
    "address": "werenThe text does not contain enough information to answer this question.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "werenThe text does not contain enough information to answer this question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " families are welcome.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "lossen to leave their home countries are welcome.Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "lossen to leave their home countries are welcome.Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 862,
      "type": "message",
      "date": "2022-02-27T04: 45: 43",
      "from": "🥰😍 🍒🍒🍒",
      "from_id": "user1214756548",
      "text": "I just received a message that Ukrainians are allowed in with or without documents"
    },
    "id": "199",
    "source": "telegram",
    "date": "2022-02-27T04:45:43",
    "sourceMessagePlainText": "I just received a message that Ukrainians are allowed in with or without documents",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 863,
      "type": "message",
      "date": "2022-02-27T04: 45: 46",
      "from": ".,.",
      "from_id": "user1150077614",
      "reply_to_message_id": 860,
      "text": "Ukrainian passport needed"
    },
    "id": "200",
    "source": "telegram",
    "date": "2022-02-27T04:45:46",
    "sourceMessagePlainText": "Ukrainian passport needed",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.05
      },
      {
        "Transportation": 0.05
      },
      {
        "Translation": 0.1
      },
      {
        "Legal": 0.1
      },
      {
        "Volunteering": 0.2
      },
      {
        "Volunteers Needed": 0.2
      }
    ],
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.05},    {\"Translation\": 0.1},    {\"Legal\": 0.1},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 865,
      "type": "message",
      "date": "2022-02-27T04: 45: 52",
      "from": "Sinichka",
      "from_id": "user177119067",
      "text": "Tell me, if you cross the border from Hungary to Poland, do you need a green card for a car?"
    },
    "id": "201",
    "source": "telegram",
    "date": "2022-02-27T04:45:52",
    "sourceMessagePlainText": "Tell me, if you cross the border from Hungary to Poland, do you need a green card for a car?",
    "address": "The physical location mentioned in the text is the border between Hungary and Poland.",
    "coords": {
      "lat": 48.5,
      "lng": 19.5
    },
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is the border between Hungary and Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 48.5, lng: 19.5 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 866,
      "type": "message",
      "date": "2022-02-27T04: 45: 55",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "reply_to_message_id": 857,
      "text": "Let go"
    },
    "id": "202",
    "source": "telegram",
    "date": "2022-02-27T04:45:55",
    "sourceMessagePlainText": "Let go",
    "address": " of your inhibitionsThis text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " of your inhibitionsThis text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " of your preconceptions and assumptions.[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " of all your preconceived notions about who volunteers are.Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " of all your preconceived notions about who volunteers are.Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 867,
      "type": "message",
      "date": "2022-02-27T04: 46: 05",
      "from": "Sinichka",
      "from_id": "user177119067",
      "text": "On Ukrainian numbers"
    },
    "id": "203",
    "source": "telegram",
    "date": "2022-02-27T04:46:05",
    "sourceMessagePlainText": "On Ukrainian numbers",
    "address": ", the country code is 380, followed by a city code and the local number.Ukraine",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ", the country code is 380, followed by a city code and the local number.Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Kyiv (Kiev), +380 (44) 234-5678{\"lat\": 50.45,\"lng\": 30.523333}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", please call:[    {\"Food\": 0.25},    {\"Shelter\": 0.25},    {\"Health Services\": 0.25},    {\"Transportation\": 0.25},    {\"Translation\": 0},    {\"Legal\": 0},    {\"Volunteering\": 0},    {\"Volunteers Needed\": 0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ":Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ":Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 869,
      "type": "message",
      "date": "2022-02-27T04: 46: 48",
      "edited": "2022-02-27T15: 44: 03",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "text": "They didn't ask for a green card in Poland, they didn't inspect the car."
    },
    "id": "204",
    "source": "telegram",
    "date": "2022-02-27T04:46:48",
    "sourceMessagePlainText": "They didn't ask for a green card in Poland, they didn't inspect the car.",
    "address": "Poland",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Greater Poland Voivodeship, Konin, Łączna, 52.21667, 18.26667{ lat: 52.21667, lng: 18.26667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 870,
      "type": "message",
      "date": "2022-02-27T04: 47: 44",
      "from": "Ann Sunny",
      "from_id": "user425148830",
      "reply_to_message_id": 868,
      "text": "Not very much. But the men pass by, one of the border guards invited me to his booth to talk 🤷‍♀️ but many are being deployed before the checkpoint"
    },
    "id": "205",
    "source": "telegram",
    "date": "2022-02-27T04:47:44",
    "sourceMessagePlainText": "Not very much. But the men pass by, one of the border guards invited me to his booth to talk 🤷‍♀️ but many are being deployed before the checkpoint",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to help with the migrants.[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.2, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to catch people who are trying to crossShelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to catch people who are trying to crossShelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 873,
      "type": "message",
      "date": "2022-02-27T04: 50: 58",
      "from": "Anfisa Dekkword",
      "from_id": "user1389114684",
      "reply_to_message_id": 870,
      "text": "What did you talk about or don't you know?"
    },
    "id": "206",
    "source": "telegram",
    "date": "2022-02-27T04:50:58",
    "sourceMessagePlainText": "What did you talk about or don't you know?",
    "address": "I don't know.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.05
      },
      {
        "Transportation": 0.15
      },
      {
        "Translation": 0.3
      },
      {
        "Legal": 0.1
      },
      {
        "Volunteering": 0.05
      },
      {
        "Volunteers Needed": 0.15
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "I don't know."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "I don't know."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.15},    {\"Translation\": 0.3},    {\"Legal\": 0.1},    {\"Volunteering\": 0.05},    {\"Volunteers Needed\": 0.15}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "I don't know."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "I don't know.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 880,
      "type": "message",
      "date": "2022-02-27T04: 54: 29",
      "from": "Алисочка",
      "from_id": "user625312713",
      "text": "Stop manipulating the United States, you bastard! You don't consider us fools! Clear!"
    },
    "id": "207",
    "source": "telegram",
    "date": "2022-02-27T04:54:29",
    "sourceMessagePlainText": "Stop manipulating the United States, you bastard! You don't consider us fools! Clear!",
    "address": "The physical location from this text is the United States.",
    "coords": null,
    "sentiment": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is the United States."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location from this text is the United States.{ lat: 38.8833, lng: -77.0167 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 882,
      "type": "message",
      "date": "2022-02-27T04: 55: 03",
      "edited": "2022-02-27T04: 58: 31",
      "from": "Алисочка",
      "from_id": "user625312713",
      "text": "Ukrainian women and children are running away, old people, men remain protecting! Clear!"
    },
    "id": "208",
    "source": "telegram",
    "date": "2022-02-27T04:55:03",
    "sourceMessagePlainText": "Ukrainian women and children are running away, old people, men remain protecting! Clear!",
    "address": "The physical location is Ukraine.",
    "coords": {
      "lat": 48.379433,
      "lng": 31.16558
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.05
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.05
      },
      {
        "category": "Translation",
        "probability": 0.05
      },
      {
        "category": "Legal",
        "probability": 0.05
      },
      {
        "category": "Volunteering",
        "probability": 0.3
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.2
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": \"48.379433\", \"lng\": \"31.16558\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.05    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.05    },    {        \"category\": \"Translation\",        \"probability\": 0.05    },    {        \"category\": \"Legal\",        \"probability\": 0.05    },    {        \"category\": \"Volunteering\",        \"probability\": 0.3    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.2    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 884,
      "type": "message",
      "date": "2022-02-27T04: 55: 50",
      "from": "Evgeni B",
      "from_id": "user234513121",
      "text": [
        {
          "type": "hashtag",
          "text": "#admin"
        },
        "ban the provocateur baks bani"
      ]
    },
    "id": "209",
    "source": "telegram",
    "date": "2022-02-27T04:55:50",
    "sourceMessagePlainText": "#admin ban the provocateur baks bani ",
    "gmapLink": null,
    "address": "The physical location is not specified in the text.",
    "coords": null,
    "sentiment": [
      0.2,
      0.1,
      0.05,
      0.05,
      0.05,
      0.05,
      0.1,
      0.1
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.1, 0.05, 0.05, 0.05, 0.05, 0.1, 0.1]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 886,
      "type": "message",
      "date": "2022-02-27T04: 55: 58",
      "from": "Euduch Zesh",
      "from_id": "user875397210",
      "text": "You just have to kick it. The channel loses its primary task."
    },
    "id": "210",
    "source": "telegram",
    "date": "2022-02-27T04:55:58",
    "sourceMessagePlainText": "You just have to kick it. The channel loses its primary task.",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 893,
      "type": "message",
      "date": "2022-02-27T04: 58: 00",
      "edited": "2022-02-27T05: 02: 08",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "text": [
        "Who can help a mother with two children panpers and products Odessa .. very hard ..",
        {
          "type": "bank_card",
          "text": "4441114441749718"
        },
        ""
      ]
    },
    "id": "211",
    "source": "telegram",
    "date": "2022-02-27T04:58:00",
    "sourceMessagePlainText": "Who can help a mother with two children panpers and products Odessa .. very hard .. 4441114441749718  ",
    "gmapLink": null,
    "address": "Odessa, Ukraine",
    "coords": {
      "lat": 46.482526,
      "lng": 30.7233095
    },
    "sentiment": [
      0.125,
      0.25,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Odessa, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 46.482526, lng: 30.7233095 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 899,
      "type": "message",
      "date": "2022-02-27T05: 01: 59",
      "from": "bartender Sonya ࿈",
      "from_id": "user451161167",
      "text": "Hello, is there any work in Krakow?"
    },
    "id": "212",
    "source": "telegram",
    "date": "2022-02-27T05:01:59",
    "sourceMessagePlainText": "Hello, is there any work in Krakow?",
    "address": "Krakow",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Krakow"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Poland{ lat: 50.0646501, lng: 19.9449799 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 904,
      "type": "message",
      "date": "2022-02-27T05: 05: 12",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "text": "Someone can help do not ignore, give them at least some answer .. thank you .."
    },
    "id": "213",
    "source": "telegram",
    "date": "2022-02-27T05:05:12",
    "sourceMessagePlainText": "Someone can help do not ignore, give them at least some answer .. thank you ..",
    "address": "The physical location from this text is unknown.",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0.25,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is unknown."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location from this text is unknown."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 908,
      "type": "message",
      "date": "2022-02-27T05: 09: 34",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "reply_to_message_id": 907,
      "text": "But there are situations that really need it now."
    },
    "id": "214",
    "source": "telegram",
    "date": "2022-02-27T05:09:34",
    "sourceMessagePlainText": "But there are situations that really need it now.",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0,
      0,
      0.25,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 912,
      "type": "message",
      "date": "2022-02-27T05: 10: 59",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "reply_to_message_id": 911,
      "text": "How ?? Max are you a man or a rag say it ??"
    },
    "id": "215",
    "source": "telegram",
    "date": "2022-02-27T05:10:59",
    "sourceMessagePlainText": "How ?? Max are you a man or a rag say it ??",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 917,
      "type": "message",
      "date": "2022-02-27T05: 12: 59",
      "edited": "2022-02-27T09: 27: 34",
      "from": "V.Tori",
      "from_id": "user376240545",
      "text": "Respond who is going from Lviv to Kyiv today"
    },
    "id": "216",
    "source": "telegram",
    "date": "2022-02-27T05:12:59",
    "sourceMessagePlainText": "Respond who is going from Lviv to Kyiv today",
    "address": "This text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "?[    {\"category\": \"Food\", \"probability\": 0.2},    {\"category\": \"Shelter\", \"probability\": 0.1},    {\"category\": \"Health Services\", \"probability\": 0.05},    {\"category\": \"Transportation\", \"probability\": 0.4},    {\"category\": \"Translation\", \"probability\": 0.15},    {\"category\": \"Legal\", \"probability\": 0.05},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " by car and can take a refugeeTransportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " by car and can take a refugeeTransportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 918,
      "type": "message",
      "date": "2022-02-27T05: 13: 15",
      "edited": "2022-02-27T05: 17: 14",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "reply_to_message_id": 914,
      "text": "So take the machine gun and defend what you are not going for Ukraine to defend it you men or how many men tick like rats from the Titanic when it goes to the bottom ??"
    },
    "id": "217",
    "source": "telegram",
    "date": "2022-02-27T05:13:15",
    "sourceMessagePlainText": "So take the machine gun and defend what you are not going for Ukraine to defend it you men or how many men tick like rats from the Titanic when it goes to the bottom ??",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 920,
      "type": "message",
      "date": "2022-02-27T05: 17: 20",
      "from": "Tasha_ Natalia",
      "from_id": "user671308268",
      "text": [
        "I ask everyone to distribute this post !!! \n \nThe EMIC Foundation and the headquarters of humanitarian aid volunteers in Bydgoszcz, 128 Gdansk Street WARNING! \n \nFREE TRANSFER TO THE PLACE OF TEMPORARY! Freeware Medical, Psychological, Legal Aid! \nFreeware help with documents needed for legalization, free translator services. \nFreeware assistance to children",
        {
          "type": "phone",
          "text": "+ 48-501-186-730"
        },
        "\nThis phone has all messengers (VIBER, WhatsApp, Telegram) \nCall or write, please!"
      ]
    },
    "id": "218",
    "source": "telegram",
    "date": "2022-02-27T05:17:20",
    "sourceMessagePlainText": "I ask everyone to distribute this post !!! \n \nThe EMIC Foundation and the headquarters of humanitarian aid volunteers in Bydgoszcz, 128 Gdansk Street WARNING! \n \nFREE TRANSFER TO THE PLACE OF TEMPORARY! Freeware Medical, Psychological, Legal Aid! \nFreeware help with documents needed for legalization, free translator services. \nFreeware assistance to children + 48-501-186-730 \nThis phone has all messengers (VIBER, WhatsApp, Telegram) \nCall or write, please! ",
    "gmapLink": null,
    "address": "The physical location from this text is Bydgoszcz, Poland.",
    "coords": {
      "lat": 53.1234,
      "lng": 18.0067
    },
    "sentiment": {
      "Food": 0,
      "Shelter": 1,
      "Health Services": 1,
      "Transportation": 1,
      "Translation": 1,
      "Legal": 1,
      "Volunteering": 0,
      "Volunteers Needed": 1
    },
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is Bydgoszcz, Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 53.1234,\"lng\": 18.0067}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " {  \"Food\": 0,  \"Shelter\": 1,  \"Health Services\": 1,  \"Transportation\": 1,  \"Translation\": 1,  \"Legal\": 1,  \"Volunteering\": 0,  \"Volunteers Needed\": 1}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 922,
      "type": "message",
      "date": "2022-02-27T05: 17: 46",
      "from": "Ukraine.Ukraine",
      "from_id": "user5145220959",
      "text": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔"
    },
    "id": "219",
    "source": "telegram",
    "date": "2022-02-27T05:17:46",
    "sourceMessagePlainText": "4323 3570 2010 3038 \nGorpenyuk Valentina \n maybe 1 UAH is something. \nThank you to everyone who helps. Thanks to the people now difficult situation, I'm sorry, but what we have (😔",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ")[0.4323, 0.3570, 0.2010, 0.3038]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ")Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ")Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 923,
      "type": "message",
      "date": "2022-02-27T05: 19: 16",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "reply_to_message_id": 913,
      "text": "Transfers work only from one bank in Russia."
    },
    "id": "220",
    "source": "telegram",
    "date": "2022-02-27T05:19:16",
    "sourceMessagePlainText": "Transfers work only from one bank in Russia.",
    "address": "Russia",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Russia"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", 55.755826, 37.6173{ lat: 55.755826, lng: 37.6173 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Banking"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Banking",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 924,
      "type": "message",
      "date": "2022-02-27T05: 19: 46",
      "edited": "2022-02-27T05: 20: 12",
      "from": "Wiktoria",
      "from_id": "user1146020100",
      "text": "Who to pick up from the station in Przemyśl, my husband is now there +48 739 280 411"
    },
    "id": "221",
    "source": "telegram",
    "date": "2022-02-27T05:19:46",
    "sourceMessagePlainText": "Who to pick up from the station in Przemyśl, my husband is now there +48 739 280 411",
    "address": "Przemyśl, Poland",
    "coords": {
      "lat": 49.78,
      "lng": 22.77
    },
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Przemyśl, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.78, lng: 22.77 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 928,
      "type": "message",
      "date": "2022-02-27T05: 24: 50",
      "from": "Eugenia",
      "from_id": "user1812857759",
      "text": [
        "Maybe someone can help with the food. Now I'm left alone with my little daughter. I'll be grateful for anything.",
        {
          "type": "bank_card",
          "text": "4441114413072651"
        },
        ""
      ]
    },
    "id": "222",
    "source": "telegram",
    "date": "2022-02-27T05:24:50",
    "sourceMessagePlainText": "Maybe someone can help with the food. Now I'm left alone with my little daughter. I'll be grateful for anything. 4441114413072651  ",
    "gmapLink": null,
    "address": "The physical location from this text is 4441114413072651.",
    "sentiment": [
      0.125,
      0.25,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is 4441114413072651."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 4441114413072651}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "        [0.125, 0.25, 0, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 930,
      "type": "message",
      "date": "2022-02-27T05: 32: 31",
      "from": "Viktoriia Yurchenko",
      "from_id": "user1408342855",
      "forwarded_from": "POLAND.Information🇵🇱🇺🇦",
      "text": [
        "🏫 Checkpoint to be clarified \n \n⌛️ Time to be clarified \n \n🚎 Three buses (167 seats in total) \n \n🗺 From Lviv across the border to various cities in Poland \n \n📞 Instagram: \n \n",
        {
          "type": "text_link",
          "text": "instagram.com/fundacja_unicorn",
          "href": "https://instagram.com/fundacja_unicorn?utm_medium=copy_link"
        },
        "\n \n",
        {
          "type": "text_link",
          "text": "instagram.com/deynn",
          "href": "https://instagram.com/deynn?utm_medium=copy_link"
        },
        ""
      ]
    },
    "id": "223",
    "source": "telegram",
    "date": "2022-02-27T05:32:31",
    "sourceMessagePlainText": "🏫 Checkpoint to be clarified \n \n⌛️ Time to be clarified \n \n🚎 Three buses (167 seats in total) \n \n🗺 From Lviv across the border to various cities in Poland \n \n📞 Instagram: \n \n instagram.com/fundacja_unicorn \n \n instagram.com/deynn  ",
    "gmapLink": null,
    "address": "The physical location is Lviv, Poland.",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Lviv, Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.839683, lng: 24.029717 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " 📧 Email:  📍 Location: Lviv, Ukraine  🌐 Website:  📌 Facebook:   facebook.com/fundacja.unicorn   facebook.com/deynn.lviv  📺 Youtube:   youtube.com/channel/UCc-gv_q7qW3q5_Q-Z3xn5zw{  \"Food\": 0.1,  \"Shelter\": 0.1,  \"Health Services\": 0.1,  \"Transportation\": 0.3,  \"Translation\": 0.1,  \"Legal\": 0.1,  \"Volunteering\": 0.1,  \"Volunteers Needed\": 0.1}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 932,
      "type": "message",
      "date": "2022-02-27T05: 35: 17",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "text": "What help here here alone from a frost created group for what it is not clear."
    },
    "id": "224",
    "source": "telegram",
    "date": "2022-02-27T05:35:17",
    "sourceMessagePlainText": "What help here here alone from a frost created group for what it is not clear.",
    "address": "It is not clear what help from a frost created group here alone is.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "It is not clear what help from a frost created group here alone is."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "It is not clear what help from a frost created group here alone is."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 934,
      "type": "message",
      "date": "2022-02-27T05: 36: 26",
      "edited": "2022-02-27T05: 36: 44",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "reply_to_message_id": 933,
      "text": "So it is here that subscribers are stuffed only discussed and there is nothing more"
    },
    "id": "225",
    "source": "telegram",
    "date": "2022-02-27T05:36:26",
    "sourceMessagePlainText": "So it is here that subscribers are stuffed only discussed and there is nothing more",
    "address": " to be saidThere is no physical location mentioned in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " to be saidThere is no physical location mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " than that.[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to itVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to itVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 936,
      "type": "message",
      "date": "2022-02-27T05: 36: 51",
      "from": "Andrew",
      "from_id": "user1170673862",
      "text": "Here are the Muscovites"
    },
    "id": "226",
    "source": "telegram",
    "date": "2022-02-27T05:36:51",
    "sourceMessagePlainText": "Here are the Muscovites",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " who need help[{\"Food\": 0.2, \"Shelter\": 0.1, \"Health Services\": 0.05, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.1, \"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " who are in need of volunteersVolunteers needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " who are in need of volunteersVolunteers needed",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 939,
      "type": "message",
      "date": "2022-02-27T05: 37: 40",
      "from": "glory to the hero",
      "from_id": "user1291894445",
      "reply_to_message_id": 937,
      "text": "It is unlikely that they want to know who is going where"
    },
    "id": "227",
    "source": "telegram",
    "date": "2022-02-27T05:37:40",
    "sourceMessagePlainText": "It is unlikely that they want to know who is going where",
    "address": "There is no physical location mentioned in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "There is no physical location mentioned in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no physical location mentioned in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " and what they are doing.[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " or what they are doingVolunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " or what they are doingVolunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 940,
      "type": "message",
      "date": "2022-02-27T05: 38: 42",
      "from": "Andrew",
      "from_id": "user1170673862",
      "text": "Read information"
    },
    "id": "228",
    "source": "telegram",
    "date": "2022-02-27T05:38:42",
    "sourceMessagePlainText": "Read information",
    "address": " about the Golden Gate BridgeThe Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide, one-point-seven-mile-long channel between San Francisco Bay and the Pacific Ocean.",
    "coords": {
      "lat": 37.8199,
      "lng": -122.4783
    },
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " about the Golden Gate BridgeThe Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide, one-point-seven-mile-long channel between San Francisco Bay and the Pacific Ocean."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{  \"lat\": 37.8199,  \"lng\": -122.4783}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " about the probability of finding each of the following resources in a refugee camp:[  {\"Food\":0.8},  {\"Shelter\":0.9},  {\"Health Services\":0.6},  {\"Transportation\":0.4},  {\"Translation\":0.2},  {\"Legal\":0.1},  {\"Volunteering\":0.3},  {\"Volunteers Needed\":0.7}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " about different types of assistance available to refugees.Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " about different types of assistance available to refugees.Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 941,
      "type": "message",
      "date": "2022-02-27T05: 39: 05",
      "edited": "2022-02-27T07: 23: 24",
      "from": "Djannat)",
      "from_id": "user332990626",
      "text": "Attention! Buses go to Bucha (Kyiv) to gather women and children to evacuate. This is a LIE, these buses want to run in front of military equipment! \nREPOST !!!"
    },
    "id": "229",
    "source": "telegram",
    "date": "2022-02-27T05:39:05",
    "sourceMessagePlainText": "Attention! Buses go to Bucha (Kyiv) to gather women and children to evacuate. This is a LIE, these buses want to run in front of military equipment! \nREPOST !!!",
    "address": "The physical location mentioned in the text is Bucha, which is located in Kyiv, Ukraine.",
    "coords": {
      "lat": 50.4023,
      "lng": 30.8496
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is Bucha, which is located in Kyiv, Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.4023, lng: 30.8496 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {\"category\": \"Food\", \"probability\": 0.1},  {\"category\": \"Shelter\", \"probability\": 0.2},  {\"category\": \"Health Services\", \"probability\": 0.3},  {\"category\": \"Transportation\", \"probability\": 0.4},  {\"category\": \"Translation\", \"probability\": 0.5},  {\"category\": \"Legal\", \"probability\": 0.6},  {\"category\": \"Volunteering\", \"probability\": 0.7},  {\"category\": \"Volunteers Needed\", \"probability\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 942,
      "type": "message",
      "date": "2022-02-27T05: 39: 34",
      "from": "Andrew",
      "from_id": "user1170673862",
      "text": "That we are not brothers all my life went to Moscow were brothers"
    },
    "id": "230",
    "source": "telegram",
    "date": "2022-02-27T05:39:34",
    "sourceMessagePlainText": "That we are not brothers all my life went to Moscow were brothers",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 960,
      "type": "message",
      "date": "2022-02-27T05: 57: 16",
      "from": "Irina Bunyak",
      "from_id": "user597526540",
      "text": "KRAKOVEC BORDER! My mother's car broke down at the border. 21 km from the KRAKOVEC border. I need a starter and a car. HELP! Let's pay as much as we need !!!"
    },
    "id": "231",
    "source": "telegram",
    "date": "2022-02-27T05:57:16",
    "sourceMessagePlainText": "KRAKOVEC BORDER! My mother's car broke down at the border. 21 km from the KRAKOVEC border. I need a starter and a car. HELP! Let's pay as much as we need !!!",
    "address": "The text is 21 km from the KRAKOVEC border.",
    "sentiment": [
      0.125,
      0.25,
      0,
      0.25,
      0,
      0,
      0.25,
      0
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is 21 km from the KRAKOVEC border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"21 km from the KRAKOVEC border\", lng: \"\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0, 0.25, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 965,
      "type": "message",
      "date": "2022-02-27T05: 59: 48",
      "edited": "2022-02-27T06: 11: 06",
      "from": "Viktoriia Yurchenko",
      "from_id": "user1408342855",
      "forwarded_from": "POLAND.Information🇵🇱🇺🇦",
      "text": [
        "❗️❗️❗️PLEASE DISPLAY THE CHANNEL LINKS IN SOCIAL NETWORKS❗️❗️❗️ \n \n❗️❗️❗️You CAN JUST PUT THE QR CODE IN STORES IN YOUR SOCIAL SOCIETIES ❗️❗️❗️ BORDER - IT IS POSSIBLE TO PRINT CARDS WITH QR-CODE AND GIVE IT TO PEOPLE ON THE SIDE OF UKRAINE❗️❗️❗️ \n \n \n ❗ ",
        {
          "type": "text_link",
          "text": "tthttps: //t.me/kordon_help",
          "href": "https://t.me/kordon_help"
        },
        "❗️"
      ]
    },
    "id": "232",
    "source": "telegram",
    "date": "2022-02-27T05:59:48",
    "sourceMessagePlainText": "❗️❗️❗️PLEASE DISPLAY THE CHANNEL LINKS IN SOCIAL NETWORKS❗️❗️❗️ \n \n❗️❗️❗️You CAN JUST PUT THE QR CODE IN STORES IN YOUR SOCIAL SOCIETIES ❗️❗️❗️ BORDER - IT IS POSSIBLE TO PRINT CARDS WITH QR-CODE AND GIVE IT TO PEOPLE ON THE SIDE OF UKRAINE❗️❗️❗️ \n \n \n ❗  tthttps: //t.me/kordon_help ❗️ ",
    "gmapLink": null,
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "  ❗️❗️❗️You can also find a list of all the services in the \"List of all services\" section of the channel.❗️❗️❗️[    {\"Food\":0.1},    {\"Shelter\":0.1},    {\"Health Services\":0.1},    {\"Transportation\":0.1},    {\"Translation\":0.1},    {\"Legal\":0.1},    {\"Volunteering\":0.1},    {\"Volunteers Needed\":0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 979,
      "type": "message",
      "date": "2022-02-27T06: 39: 43",
      "from": "Lexus",
      "from_id": "user433718480",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 828,
      "height": 569,
      "text": "8 people from the border of Ustyluh women and children are waiting for Warsaw"
    },
    "id": "233",
    "source": "telegram",
    "date": "2022-02-27T06:39:43",
    "sourceMessagePlainText": "8 people from the border of Ustyluh women and children are waiting for Warsaw",
    "address": "The physical location is at the border of Ustyluh.",
    "coords": {
      "lat": 49.916667,
      "lng": 36.166667
    },
    "sentiment": null,
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is at the border of Ustyluh."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.916667, lng: 36.166667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ". They have been on the road for two weeks. They have no money and are hungry.[    {\"Food\": 0.8},    {\"Shelter\": 0.6},    {\"Health Services\": 0.4},    {\"Transportation\": 0.2},    {\"Translation\": 0.1},    {\"Legal\": 0.05},    {\"Volunteering\": 0.02},    {\"Volunteers Needed\": 0.01}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ". They need a place to stay for a night.Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ". They need a place to stay for a night.Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 994,
      "type": "message",
      "date": "2022-02-27T06: 52: 13",
      "from": "Karina Solokh",
      "from_id": "user475594383",
      "text": "Who needs help finding housing in Wroclaw?"
    },
    "id": "234",
    "source": "telegram",
    "date": "2022-02-27T06:52:13",
    "sourceMessagePlainText": "Who needs help finding housing in Wroclaw?",
    "address": "Wroclaw",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.1
      },
      {
        "Transportation": 0.1
      },
      {
        "Translation": 0.05
      },
      {
        "Legal": 0.05
      },
      {
        "Volunteering": 0.2
      },
      {
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Wroclaw"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Poland{ \"lat\": 51.107883, \"lng\": 17.038538 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.2},    {\"Health Services\": 0.1},    {\"Transportation\": 0.1},    {\"Translation\": 0.05},    {\"Legal\": 0.05},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Housing"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Housing",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 997,
      "type": "message",
      "date": "2022-02-27T06: 54: 14",
      "from": "Oleksandra Soltys",
      "from_id": "user1034196064",
      "reply_to_message_id": 979,
      "text": "Are you waiting at the border?"
    },
    "id": "235",
    "source": "telegram",
    "date": "2022-02-27T06:54:14",
    "sourceMessagePlainText": "Are you waiting at the border?",
    "address": "The border is a physical location.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The border is a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1010,
      "type": "message",
      "date": "2022-02-27T06: 57: 28",
      "from": "Ivan (Switzerland)",
      "from_id": "user1854681765",
      "text": [
        "Budomierz - Hruszew (chat tg) \n10. Zosin - Ustiług (chat tg) \n11. Dołhobyczów - Uhrynów (chat tg) \n12. Krościenko - Smolnica (heavy congestion on 26.02., 18:30 (chat tg) \n13. : 30 at the point there are volunteers with food and water) \nPhone: ",
        {
          "type": "phone",
          "text": "+380312649626"
        },
        "2.Maly Berezny - Ublya (multilateral, by car up to 3.5 tons, on foot or by bicycle). \nPhone: ",
        {
          "type": "phone",
          "text": "+421313522090"
        },
        "3.Small Selmentsy - Velke Slementse (pedestrian) \nTelephone: ",
        {
          "type": "phone",
          "text": "+421961764815"
        },
        "\n \n",
        {
          "type": "link",
          "text": "https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.29lxk0civjoe"
        },
        ""
      ]
    },
    "id": "236",
    "source": "telegram",
    "date": "2022-02-27T06:57:28",
    "sourceMessagePlainText": "Budomierz - Hruszew (chat tg) \n10. Zosin - Ustiług (chat tg) \n11. Dołhobyczów - Uhrynów (chat tg) \n12. Krościenko - Smolnica (heavy congestion on 26.02., 18:30 (chat tg) \n13. : 30 at the point there are volunteers with food and water) \nPhone:  +380312649626 2.Maly Berezny - Ublya (multilateral, by car up to 3.5 tons, on foot or by bicycle). \nPhone:  +421313522090 3.Small Selmentsy - Velke Slementse (pedestrian) \nTelephone:  +421961764815 \n \n https://docs.google.com/document/u/0/d/1ZCxrK4520gSGiGy4Cvqbzzn6TkB02j85XlGc5J5cFrQ/mobilebasic#h.29lxk0civjoe  ",
    "gmapLink": null,
    "address": "1. Budomierz, Hruszew - Poland2. Maly Berezny, Ublya - Czech Republic3. Small Selmentsy, Velke Slementse - Slovakia",
    "coords": null,
    "sentiment": {
      "Food": 0.2,
      "Shelter": 0.1,
      "Health Services": 0,
      "Transportation": 0.3,
      "Translation": 0,
      "Legal": 0,
      "Volunteering": 0.4,
      "Volunteers Needed": 0
    },
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "1. Budomierz, Hruszew - Poland2. Maly Berezny, Ublya - Czech Republic3. Small Selmentsy, Velke Slementse - Slovakia"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "1. { lat: 51.9667, lng: 22.8333 }2. { lat: 50.2167, lng: 12.8667 }3. { lat: 48.8333, lng: 19.8333 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.2,    \"Shelter\": 0.1,    \"Health Services\": 0,    \"Transportation\": 0.3,    \"Translation\": 0,    \"Legal\": 0,    \"Volunteering\": 0.4,    \"Volunteers Needed\": 0}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1013,
      "type": "message",
      "date": "2022-02-27T06: 58: 11",
      "from": "Tasha_ Natalia",
      "from_id": "user671308268",
      "text": [
        "Assistance in finding housing, Wloclavik and the surrounding area, many people will be happy to take in families who need to write or call.",
        {
          "type": "phone",
          "text": "+48730259581"
        },
        ""
      ]
    },
    "id": "237",
    "source": "telegram",
    "date": "2022-02-27T06:58:11",
    "sourceMessagePlainText": "Assistance in finding housing, Wloclavik and the surrounding area, many people will be happy to take in families who need to write or call. +48730259581  ",
    "gmapLink": null,
    "address": "Wloclavik, Poland",
    "coords": {
      "lat": 51.08,
      "lng": 16.88
    },
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Wloclavik, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.08, lng: 16.88 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Housing"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Housing",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1022,
      "type": "message",
      "date": "2022-02-27T07: 00: 28",
      "from": "🌍🌎🌏",
      "from_id": "user795305798",
      "text": "Who can help you find housing or asylum in Warsaw or another city?"
    },
    "id": "238",
    "source": "telegram",
    "date": "2022-02-27T07:00:28",
    "sourceMessagePlainText": "Who can help you find housing or asylum in Warsaw or another city?",
    "address": "Warsaw",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.4
      },
      {
        "Health Services": 0.1
      },
      {
        "Transportation": 0.05
      },
      {
        "Translation": 0.05
      },
      {
        "Legal": 0.05
      },
      {
        "Volunteering": 0.1
      },
      {
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Warsaw"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Poland{ \"lat\": 52.23, \"lng\": 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.4},    {\"Health Services\": 0.1},    {\"Transportation\": 0.05},    {\"Translation\": 0.05},    {\"Legal\": 0.05},    {\"Volunteering\": 0.1},    {\"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Housing"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Housing",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1029,
      "type": "message",
      "date": "2022-02-27T07: 05: 30",
      "from": "Irakli Tsaava",
      "from_id": "user5127784264",
      "text": "Glory to Ukraine"
    },
    "id": "239",
    "source": "telegram",
    "date": "2022-02-27T07:05:30",
    "sourceMessagePlainText": "Glory to Ukraine",
    "address": "!This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "!This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "![0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14, 0.14]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "!Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "!Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1030,
      "type": "message",
      "date": "2022-02-27T07: 05: 34",
      "from": "Oleksandra Soltys",
      "from_id": "user1034196064",
      "text": "From Dorokhusk to Warsaw, are there anyone willing? A man is already waiting at the border !!"
    },
    "id": "240",
    "source": "telegram",
    "date": "2022-02-27T07:05:34",
    "sourceMessagePlainText": "From Dorokhusk to Warsaw, are there anyone willing? A man is already waiting at the border !!",
    "address": "The text is from a message board, so the location is unknown.",
    "coords": null,
    "sentiment": [
      0.2,
      0.4,
      0.1,
      0.05,
      0.05,
      0.1,
      0.1,
      0.05
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text is from a message board, so the location is unknown."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text is from a message board, so the location is unknown."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.4, 0.1, 0.05, 0.05, 0.1, 0.1, 0.05]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1032,
      "type": "message",
      "date": "2022-02-27T07: 05: 47",
      "from": "Oleksandra Soltys",
      "from_id": "user1034196064",
      "text": "Can also go to another border to pick up"
    },
    "id": "241",
    "source": "telegram",
    "date": "2022-02-27T07:05:47",
    "sourceMessagePlainText": "Can also go to another border to pick up",
    "address": " some thingsThe text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " some thingsThe text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " supplies[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " more peopleTransportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " more peopleTransportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1034,
      "type": "message",
      "date": "2022-02-27T07: 07: 46",
      "edited": "2022-02-27T07: 08: 47",
      "from": "Halyna Holybovych",
      "from_id": "user1084868513",
      "text": "Looking for housing for 4 adults and 5 children in Zamosc"
    },
    "id": "242",
    "source": "telegram",
    "date": "2022-02-27T07:07:46",
    "sourceMessagePlainText": "Looking for housing for 4 adults and 5 children in Zamosc",
    "address": "Zamosc, Poland",
    "coords": {
      "lat": 50.7,
      "lng": 22.8
    },
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Zamosc, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.7, lng: 22.8 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Shelter",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1041,
      "type": "message",
      "date": "2022-02-27T07: 14: 01",
      "from": "Constantine I",
      "from_id": "user1660685002",
      "text": "Hello everyone. Nobody is going to Spain from Poland?"
    },
    "id": "243",
    "source": "telegram",
    "date": "2022-02-27T07:14:01",
    "sourceMessagePlainText": "Hello everyone. Nobody is going to Spain from Poland?",
    "address": "Poland",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0.5,
      0,
      0,
      0,
      0,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.2296756, lng: 21.0122287 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.5, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1042,
      "type": "message",
      "date": "2022-02-27T07: 14: 58",
      "from": "Kati Ta",
      "from_id": "user1020987352",
      "text": "Guys, please tell me who drove / crossed the border, I'm especially interested in whether men were able to do it, how and how long ago it happened? Friends have been queuing for the second day, it didn't work out through Romania ("
    },
    "id": "244",
    "source": "telegram",
    "date": "2022-02-27T07:14:58",
    "sourceMessagePlainText": "Guys, please tell me who drove / crossed the border, I'm especially interested in whether men were able to do it, how and how long ago it happened? Friends have been queuing for the second day, it didn't work out through Romania (",
    "address": "This text is about the border between Romania and another country. It is not possible to determine the physical location from the text.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is about the border between Romania and another country. It is not possible to determine the physical location from the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "Not possible to determine."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "the queue is too long), and now they're trying to get through Bulgaria, but I'm afraid it won't work out either.[0.125, 0.25, 0.125, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Crossing the border"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Crossing the border",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1044,
      "type": "message",
      "date": "2022-02-27T07: 15: 46",
      "from": "Karina Solokh",
      "from_id": "user475594383",
      "text": [
        "We help in finding housing in Wroclaw. Personal messages or call",
        {
          "type": "phone",
          "text": "+48731197909"
        },
        ""
      ]
    },
    "id": "245",
    "source": "telegram",
    "date": "2022-02-27T07:15:46",
    "sourceMessagePlainText": "We help in finding housing in Wroclaw. Personal messages or call +48731197909  ",
    "gmapLink": null,
    "address": "Wroclaw, Poland",
    "coords": {
      "lat": 51.1078852,
      "lng": 17.0385376
    },
    "sentiment": [
      0.125,
      0.125,
      0,
      0.125,
      0,
      0,
      0,
      0
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Wroclaw, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.1078852, lng: 17.0385376 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Housing"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Housing",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1046,
      "type": "message",
      "date": "2022-02-27T07: 16: 07",
      "from": "Irishka",
      "from_id": "user343292311",
      "text": "Good evening. Tell me the contact of people who can meet a woman with 2 children at the border and took them to a contract address. Help for 3 days already on the way."
    },
    "id": "246",
    "source": "telegram",
    "date": "2022-02-27T07:16:07",
    "sourceMessagePlainText": "Good evening. Tell me the contact of people who can meet a woman with 2 children at the border and took them to a contract address. Help for 3 days already on the way.",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.25,
      0.25,
      0,
      0,
      0.25,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.25, 0.25, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1047,
      "type": "message",
      "date": "2022-02-27T07: 17: 07",
      "edited": "2022-02-27T07: 18: 11",
      "from": "Karina Solokh",
      "from_id": "user475594383",
      "reply_to_message_id": 1046,
      "text": "At what border? And where should I take"
    },
    "id": "247",
    "source": "telegram",
    "date": "2022-02-27T07:17:07",
    "sourceMessagePlainText": "At what border? And where should I take",
    "address": " my passport?The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " my passport?The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " them?[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " them?Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " them?Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1056,
      "type": "message",
      "date": "2022-02-27T07: 27: 03",
      "from": "Lina",
      "from_id": "user1378035020",
      "text": "My mother is now crossing the Polish berry border and wants to get to Warsaw airport. Who can help?"
    },
    "id": "248",
    "source": "telegram",
    "date": "2022-02-27T07:27:03",
    "sourceMessagePlainText": "My mother is now crossing the Polish berry border and wants to get to Warsaw airport. Who can help?",
    "address": "Polish berry border, Warsaw airport",
    "coords": {
      "lat": 52.1657,
      "lng": 20.9674
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.7
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Polish berry border, Warsaw airport"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.1657, lng: 20.9674 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category\": \"Shelter\", \"probability\": 0.1},    {\"category\": \"Health Services\", \"probability\": 0.1},    {\"category\": \"Transportation\", \"probability\": 0.7},    {\"category\": \"Translation\", \"probability\": 0.1},    {\"category\": \"Legal\", \"probability\": 0.1},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1057,
      "type": "message",
      "date": "2022-02-27T07: 27: 20",
      "from": "Lina",
      "from_id": "user1378035020",
      "text": "She has already crossed the Ukrainian border"
    },
    "id": "249",
    "source": "telegram",
    "date": "2022-02-27T07:27:20",
    "sourceMessagePlainText": "She has already crossed the Ukrainian border",
    "address": "The physical location mentioned in the text is the Ukrainian border.",
    "coords": {
      "lat": 44.38,
      "lng": 33.43
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is the Ukrainian border."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 44.38, lng: 33.43 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " and is now in a refugee camp in Moldova.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1059,
      "type": "message",
      "date": "2022-02-27T07: 32: 01",
      "from": "Maria Kozachok",
      "from_id": "user928323125",
      "reply_to_message_id": 1056,
      "text": "There are a lot of volunteers on the border and all of them are with signs with the names of cities: Lodz, Warsaw, Krakow, etc. \nMom just calls these people and says she needs to go to Warsaw for a summer vacation."
    },
    "id": "250",
    "source": "telegram",
    "date": "2022-02-27T07:32:01",
    "sourceMessagePlainText": "There are a lot of volunteers on the border and all of them are with signs with the names of cities: Lodz, Warsaw, Krakow, etc. \nMom just calls these people and says she needs to go to Warsaw for a summer vacation.",
    "address": "The border mentioned is most likely a national border, so the physical location would be a country.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.25,
      0.125
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The border mentioned is most likely a national border, so the physical location would be a country."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.25, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1061,
      "type": "message",
      "date": "2022-02-27T07: 36: 06",
      "from": "Lina",
      "from_id": "user1378035020",
      "reply_to_message_id": 1059,
      "text": "Thank you"
    },
    "id": "251",
    "source": "telegram",
    "date": "2022-02-27T07:36:06",
    "sourceMessagePlainText": "Thank you",
    "address": " for your inquiry.This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " for your inquiry.This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " for your interest in volunteering with the Refugee and Immigrant Center - Asian Association of Utah (RIC-AAU). We are currently in need of volunteers in the following areas:[  {    \"category\": \"Food\",    \"probability\": 0.2  },  {    \"category\": \"Shelter\",    \"probability\": 0.2  },  {    \"category\": \"Health Services\",    \"probability\": 0.2  },  {    \"category\": \"Transportation\",    \"probability\": 0.2  },  {    \"category\": \"Translation\",    \"probability\": 0.2  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0.2  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " for your interest in volunteering with us!Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " for your interest in volunteering with us!Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1063,
      "type": "message",
      "date": "2022-02-27T07: 41: 00",
      "from": "Ihor",
      "from_id": "user1568862091",
      "forwarded_from": "Ihor",
      "text": "Congratulations, parents under Krakow 40 km, the town is ready to accept 150 people, mszana dolna, will help with medicine, food and housing, everything is ready, always by phone"
    },
    "id": "252",
    "source": "telegram",
    "date": "2022-02-27T07:41:00",
    "sourceMessagePlainText": "Congratulations, parents under Krakow 40 km, the town is ready to accept 150 people, mszana dolna, will help with medicine, food and housing, everything is ready, always by phone",
    "address": "Krakow, Poland",
    "coords": {
      "lat": 50.06465009999999,
      "lng": 19.94497990000002
    },
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Krakow, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.06465009999999, lng: 19.94497990000002 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", please contact us, we are waiting for you[0.1, 0.2, 0.3, 0.1, 0.1, 0.0, 0.2, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1064,
      "type": "message",
      "date": "2022-02-27T07: 41: 00",
      "from": "Ihor",
      "from_id": "user1568862091",
      "forwarded_from": "Ihor",
      "text": "Tell the drivers who is taking people"
    },
    "id": "253",
    "source": "telegram",
    "date": "2022-02-27T07:41:00",
    "sourceMessagePlainText": "Tell the drivers who is taking people",
    "address": " to the airport that they are going to Gate AThe drivers who are taking people to the airport are going to Gate A.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " to the airport that they are going to Gate AThe drivers who are taking people to the airport are going to Gate A."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to the airport that they are picking up refugees.[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to appointments and what time to be backTransportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to appointments and what time to be backTransportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1066,
      "type": "message",
      "date": "2022-02-27T07: 44: 05",
      "from": "꧁ ° ঔৣ | ☬ .ŠØN̷ ¥ Å. ☬ | ঔৣ ° ꧂",
      "from_id": "user1477488663",
      "reply_to_message_id": 1065,
      "text": "Yes"
    },
    "id": "254",
    "source": "telegram",
    "date": "2022-02-27T07:44:05",
    "sourceMessagePlainText": "Yes",
    "address": ", I live in the United StatesThe United States",
    "coords": {
      "lat": 38.8833,
      "lng": -77.0167
    },
    "sentiment": null,
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ", I live in the United StatesThe United States"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 38.8833, lng: -77.0167 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", I would like to volunteer.Yes, I would like to volunteer.[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0.0    },    {        \"category\": \"Legal\",        \"probability\": 0.0    },    {        \"category\": \"Volunteering\",        \"probability\": 1.0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", we provide free legal services.Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", we provide free legal services.Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1068,
      "type": "message",
      "date": "2022-02-27T07: 47: 39",
      "edited": "2022-02-27T07: 47: 47",
      "from": "Anastasia",
      "from_id": "user384712922",
      "reply_to_message_id": 1065,
      "text": "No, Ukrainian code +380"
    },
    "id": "255",
    "source": "telegram",
    "date": "2022-02-27T07:47:39",
    "sourceMessagePlainText": "No, Ukrainian code +380",
    "address": "The physical location would be Ukraine.",
    "coords": {
      "lat": 49.3,
      "lng": 31.5
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.2
      },
      {
        "category": "Health Services",
        "probability": 0.3
      },
      {
        "category": "Transportation",
        "probability": 0.4
      },
      {
        "category": "Translation",
        "probability": 0.5
      },
      {
        "category": "Legal",
        "probability": 0.6
      },
      {
        "category": "Volunteering",
        "probability": 0.7
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.8
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location would be Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 49.3,\"lng\": 31.5}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category\": \"Shelter\", \"probability\": 0.2},    {\"category\": \"Health Services\", \"probability\": 0.3},    {\"category\": \"Transportation\", \"probability\": 0.4},    {\"category\": \"Translation\", \"probability\": 0.5},    {\"category\": \"Legal\", \"probability\": 0.6},    {\"category\": \"Volunteering\", \"probability\": 0.7},    {\"category\": \"Volunteers Needed\", \"probability\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " is not currently supported.No, Ukrainian code +380 is not currently supported."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " is not currently supported.No, Ukrainian code +380 is not currently supported.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1069,
      "type": "message",
      "date": "2022-02-27T07: 47: 55",
      "from": "Wiktoria",
      "from_id": "user1146020100",
      "text": "🏫 Przemysl \n \n⌛️ Actual at the moment \n \n🚎 3 places \n \n🗺 Towards Krakow \n \n📞 Roman 509 320 005"
    },
    "id": "256",
    "source": "telegram",
    "date": "2022-02-27T07:47:55",
    "sourceMessagePlainText": "🏫 Przemysl \n \n⌛️ Actual at the moment \n \n🚎 3 places \n \n🗺 Towards Krakow \n \n📞 Roman 509 320 005",
    "address": "Przemysl, Poland",
    "coords": {
      "lat": 49.78,
      "lng": 22.77
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Przemysl, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 49.78,\"lng\": 22.77}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "  📞 Pawel 533 533 533  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 605 605 605  📞 Pawel 509 509 509  📞 Sebastian 6"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1074,
      "type": "message",
      "date": "2022-02-27T07: 48: 44",
      "from": "Oleksandra Soltys",
      "from_id": "user1034196064",
      "reply_to_message_id": 1065,
      "text": "This is not the code of Ukraine"
    },
    "id": "257",
    "source": "telegram",
    "date": "2022-02-27T07:48:44",
    "sourceMessagePlainText": "This is not the code of Ukraine",
    "address": "This is not the code of Ukraine.",
    "coords": null,
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This is not the code of Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This is not the code of Ukraine."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This is not the code of Ukraine"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This is not the code of Ukraine",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1079,
      "type": "message",
      "date": "2022-02-27T07: 49: 52",
      "from": "Petro",
      "from_id": "user1057977195",
      "text": "+48 code of Poland"
    },
    "id": "258",
    "source": "telegram",
    "date": "2022-02-27T07:49:52",
    "sourceMessagePlainText": "+48 code of Poland",
    "address": "Poland",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.1
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.237049, lng: 21.017532 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Food\",    \"probability\": 0.1  },  {    \"category\": \"Shelter\",    \"probability\": 0.1  },  {    \"category\": \"Health Services\",    \"probability\": 0.1  },  {    \"category\": \"Transportation\",    \"probability\": 0.1  },  {    \"category\": \"Translation\",    \"probability\": 0.1  },  {    \"category\": \"Legal\",    \"probability\": 0.1  },  {    \"category\": \"Volunteering\",    \"probability\": 0.1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0.1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1090,
      "type": "message",
      "date": "2022-02-27T07: 54: 14",
      "from": "Maria Pechonkina",
      "from_id": "user1417747936",
      "text": "Please !! Help at least 10 UAH I will collect money for the road to leave, I have already collected some amount I still need to collect I will be very grateful 🙏"
    },
    "id": "259",
    "source": "telegram",
    "date": "2022-02-27T07:54:14",
    "sourceMessagePlainText": "Please !! Help at least 10 UAH I will collect money for the road to leave, I have already collected some amount I still need to collect I will be very grateful 🙏",
    "address": "This text was collected from a person asking for help in Ukraine.",
    "coords": {
      "lat": 48.379433,
      "lng": 31.1655799
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text was collected from a person asking for help in Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"48.379433\", lng: \"31.1655799\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "🏼- Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "🏼- Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1091,
      "type": "message",
      "date": "2022-02-27T07: 54: 24",
      "from": "Pomogator (Creature)",
      "from_id": "user5033081636",
      "text": "Grushev zosen 2 already two empty cars waiting for people"
    },
    "id": "260",
    "source": "telegram",
    "date": "2022-02-27T07:54:24",
    "sourceMessagePlainText": "Grushev zosen 2 already two empty cars waiting for people",
    "address": "This text is referring to two empty cars at Grushev zosen 2.",
    "coords": {
      "lat": 0,
      "lng": 0
    },
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is referring to two empty cars at Grushev zosen 2."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 0, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to fill them.[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to take them to the hospitalHealth Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " to take them to the hospitalHealth Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1092,
      "type": "message",
      "date": "2022-02-27T07: 54: 40",
      "from": "Ekateryna",
      "from_id": "user978902996",
      "text": "They said Israelis need to go somewhere"
    },
    "id": "261",
    "source": "telegram",
    "date": "2022-02-27T07:54:40",
    "sourceMessagePlainText": "They said Israelis need to go somewhere",
    "address": " elseThe text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " elseThe text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " else        [        {\"category\": \"Food\", \"probability\": 0},        {\"category\": \"Shelter\", \"probability\": 0},        {\"category\": \"Health Services\", \"probability\": 0},        {\"category\": \"Transportation\", \"probability\": 0},        {\"category\": \"Translation\", \"probability\": 0},        {\"category\": \"Legal\", \"probability\": 0},        {\"category\": \"Volunteering\", \"probability\": 0},        {\"category\": \"Volunteers Needed\", \"probability\": 0}    ]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " elseVolunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " elseVolunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1097,
      "type": "message",
      "date": "2022-02-27T07: 55: 23",
      "edited": "2022-02-28T03: 00: 28",
      "from": ".",
      "from_id": "user1803993383",
      "text": "Hello everyone! We are going to buy things, water, food, etc. for people at the border tomorrow. Any help is welcome! If anyone wants to join us in purchasing goods tomorrow, they can come in person and buy everything After that, everything will be handed over to volunteers and all this will be taken by car to Ukraine \n \nI will repeat, any help is welcome! Write in personal messages "
    },
    "id": "262",
    "source": "telegram",
    "date": "2022-02-27T07:55:23",
    "sourceMessagePlainText": "Hello everyone! We are going to buy things, water, food, etc. for people at the border tomorrow. Any help is welcome! If anyone wants to join us in purchasing goods tomorrow, they can come in person and buy everything After that, everything will be handed over to volunteers and all this will be taken by car to Ukraine \n \nI will repeat, any help is welcome! Write in personal messages ",
    "address": "The physical location mentioned in the text is the border between Ukraine and another country.",
    "coords": {
      "lat": 50.4501,
      "lng": 30.5234
    },
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0,
      0,
      0.5,
      0
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is the border between Ukraine and another country."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"50.4501\", lng: \"30.5234\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0, 0, 0.5, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1098,
      "type": "message",
      "date": "2022-02-27T07: 56: 14",
      "from": "ALEX BUT",
      "from_id": "user456869783",
      "text": "Tell me, please, to Hungary chop, what are the conditions with the car, green card?"
    },
    "id": "263",
    "source": "telegram",
    "date": "2022-02-27T07:56:14",
    "sourceMessagePlainText": "Tell me, please, to Hungary chop, what are the conditions with the car, green card?",
    "address": "The text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "category": "Legal",
        "probability": 1
      },
      {
        "category": "Transportation",
        "probability": 0.5
      },
      {
        "category": "Translation",
        "probability": 0.5
      }
    ],
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Legal\", \"probability\": 1.0},    {\"category\": \"Transportation\", \"probability\": 0.5},    {\"category\": \"Translation\", \"probability\": 0.5}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1101,
      "type": "message",
      "date": "2022-02-27T07: 56: 54",
      "from": "Natali",
      "from_id": "user739269293",
      "reply_to_message_id": 1098,
      "text": "Green card is mandatory everywhere without it turning cars back"
    },
    "id": "264",
    "source": "telegram",
    "date": "2022-02-27T07:56:54",
    "sourceMessagePlainText": "Green card is mandatory everywhere without it turning cars back",
    "address": "The text does not mention a specific location.",
    "coords": null,
    "sentiment": null,
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not mention a specific location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not mention a specific location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " to the border, getting a job, or opening a bank account is impossible.[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1103,
      "type": "message",
      "date": "2022-02-27T07: 57: 58",
      "from": "ALEX BUT",
      "from_id": "user456869783",
      "reply_to_message_id": 1101,
      "text": "Thank you. And how to design it correctly and where to do it, is it possible?"
    },
    "id": "265",
    "source": "telegram",
    "date": "2022-02-27T07:57:58",
    "sourceMessagePlainText": "Thank you. And how to design it correctly and where to do it, is it possible?",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": [
      0.1,
      0.2,
      0.3,
      0.4,
      0.5,
      0.6,
      0.7,
      0.8
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1106,
      "type": "message",
      "date": "2022-02-27T07: 58: 17",
      "from": "Natali",
      "from_id": "user739269293",
      "text": "It may not be better to come to the place with her"
    },
    "id": "266",
    "source": "telegram",
    "date": "2022-02-27T07:58:17",
    "sourceMessagePlainText": "It may not be better to come to the place with her",
    "address": "The physical location in this text is \"the place.\"",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location in this text is \"the place.\""
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "There is no latitude and longitude given in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ".Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1114,
      "type": "message",
      "date": "2022-02-27T08: 00: 06",
      "edited": "2022-02-27T08: 43: 20",
      "from": "Alena",
      "from_id": "user568857242",
      "text": "Good evening I'm from Kiev, now I'm standing in line at the border… does anyone have the opportunity to take me to the Polish city of Lublin? I'm alone with a big suitcase"
    },
    "id": "267",
    "source": "telegram",
    "date": "2022-02-27T08:00:06",
    "sourceMessagePlainText": "Good evening I'm from Kiev, now I'm standing in line at the border… does anyone have the opportunity to take me to the Polish city of Lublin? I'm alone with a big suitcase",
    "address": "Kiev",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Kiev"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Ukraine{\"lat\": 50.45,\"lng\": 30.523333}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.25, 0, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1121,
      "type": "message",
      "date": "2022-02-27T08: 01: 39",
      "edited": "2022-02-27T08: 12: 09",
      "from": "Natalia",
      "from_id": "user846967459",
      "reply_to_message_id": 1114,
      "text": "There are a lot of volunteers on the Polish side, I was there yesterday, they are taking me in many directions for FREE"
    },
    "id": "268",
    "source": "telegram",
    "date": "2022-02-27T08:01:39",
    "sourceMessagePlainText": "There are a lot of volunteers on the Polish side, I was there yesterday, they are taking me in many directions for FREE",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", including:[{\"category\": \"Volunteering\", \"probability\": 1.0}, {\"category\": \"Volunteers Needed\", \"probability\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1123,
      "type": "message",
      "date": "2022-02-27T08: 02: 08",
      "from": "Alena",
      "from_id": "user568857242",
      "text": "Thank you now I will ask how I will cross the border with Poland"
    },
    "id": "269",
    "source": "telegram",
    "date": "2022-02-27T08:02:08",
    "sourceMessagePlainText": "Thank you now I will ask how I will cross the border with Poland",
    "address": "The border with Poland is located east of Germany.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The border with Poland is located east of Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1124,
      "type": "message",
      "date": "2022-02-27T08: 02: 26",
      "from": "Natalia",
      "from_id": "user846967459",
      "text": "And also provide free water, food, housing"
    },
    "id": "270",
    "source": "telegram",
    "date": "2022-02-27T08:02:26",
    "sourceMessagePlainText": "And also provide free water, food, housing",
    "address": ", and clothingThe physical location is not provided in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ", and clothingThe physical location is not provided in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ", and transportation to the needy.[  {    \"category\": \"Food\",    \"probability\": 1  },  {    \"category\": \"Shelter\",    \"probability\": 1  },  {    \"category\": \"Health Services\",    \"probability\": 0  },  {    \"category\": \"Transportation\",    \"probability\": 1  },  {    \"category\": \"Translation\",    \"probability\": 0  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ", and health care to all refugeesHealth Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ", and health care to all refugeesHealth Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1129,
      "type": "message",
      "date": "2022-02-27T08: 05: 56",
      "from": "Vadim",
      "from_id": "user1105331589",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 784,
      "height": 623,
      "text": "Whoever can, let's help 5168 7520 1091 5810 account in hryvnia can give in zlotys"
    },
    "id": "271",
    "source": "telegram",
    "date": "2022-02-27T08:05:56",
    "sourceMessagePlainText": "Whoever can, let's help 5168 7520 1091 5810 account in hryvnia can give in zlotys",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ":[    {        \"category\": \"Food\",        \"probability\": 0.2    },    {        \"category\": \"Shelter\",        \"probability\": 0.2    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1133,
      "type": "message",
      "date": "2022-02-27T08: 07: 41",
      "from": "Ruslan Akatrinii",
      "from_id": "user947063786",
      "text": "Good morning. I am looking for a passing transport for a woman with three children from the city of Poznan (Poland) to Spain. I ask everyone who is not indifferent to respond. I will be very grateful and not only in words."
    },
    "id": "272",
    "source": "telegram",
    "date": "2022-02-27T08:07:41",
    "sourceMessagePlainText": "Good morning. I am looking for a passing transport for a woman with three children from the city of Poznan (Poland) to Spain. I ask everyone who is not indifferent to respond. I will be very grateful and not only in words.",
    "address": "Poznan, Poland",
    "coords": {
      "lat": 52.406374,
      "lng": 16.9251681
    },
    "sentiment": [
      {
        "Food": 0.1
      },
      {
        "Shelter": 0.2
      },
      {
        "Health Services": 0.3
      },
      {
        "Transportation": 0.4
      },
      {
        "Translation": 0.5
      },
      {
        "Legal": 0.6
      },
      {
        "Volunteering": 0.7
      },
      {
        "Volunteers Needed": 0.8
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poznan, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.406374, lng: 16.9251681 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1139,
      "type": "message",
      "date": "2022-02-27T08: 12: 18",
      "from": "Natalia",
      "from_id": "user846967459",
      "reply_to_message_id": 1133,
      "text": "We can bring to Germany"
    },
    "id": "273",
    "source": "telegram",
    "date": "2022-02-27T08:12:18",
    "sourceMessagePlainText": "We can bring to Germany",
    "address": "Germany",
    "coords": {
      "lat": 51.165691,
      "lng": 10.451526
    },
    "sentiment": null,
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.165691, lng: 10.451526 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ":[{\"Food\":0.2,\"Shelter\":0.1,\"Health Services\":0.05,\"Transportation\":0.05,\"Translation\":0.05,\"Legal\":0.05,\"Volunteering\":0.2,\"Volunteers Needed\":0.3}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " a lot of experience in the field of health care.Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " a lot of experience in the field of health care.Health Services",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1142,
      "type": "message",
      "date": "2022-02-27T08: 12: 46",
      "from": "🇺🇳",
      "from_id": "user1856774104",
      "forwarded_from": "🇺🇳",
      "text": "Help the Ukrainian army is Support! 🇺🇦 \nThe Estonian Charitable Foundation accepts help from caring people for targeted assistance to Ukraine 🇺🇦 Do you want to help the Ukrainian military to overcome the enemy? : 984500F8FB7A03D6DC63 \n Bitcoin wallet: 3PeaGoW3jSrN1hWAmbMdKujGGNXPp9Yg8q \n \nUSDT TRC20 wallet: TUU9USfhBoNXuT51Kc6BSgtv3ZHzZCn2bC \n \nor transfer for IBAN: \nLT783780000041932619 \nSWIFT: TRYULT21 \ndetails payment !: donation for Ukrania \n \nPlease repost "
    },
    "id": "274",
    "source": "telegram",
    "date": "2022-02-27T08:12:46",
    "sourceMessagePlainText": "Help the Ukrainian army is Support! 🇺🇦 \nThe Estonian Charitable Foundation accepts help from caring people for targeted assistance to Ukraine 🇺🇦 Do you want to help the Ukrainian military to overcome the enemy? : 984500F8FB7A03D6DC63 \n Bitcoin wallet: 3PeaGoW3jSrN1hWAmbMdKujGGNXPp9Yg8q \n \nUSDT TRC20 wallet: TUU9USfhBoNXuT51Kc6BSgtv3ZHzZCn2bC \n \nor transfer for IBAN: \nLT783780000041932619 \nSWIFT: TRYULT21 \ndetails payment !: donation for Ukrania \n \nPlease repost ",
    "address": "This text is asking for donations to help the Ukrainian army, and provides a Bitcoin and USDT wallet for people to send money to.",
    "coords": null,
    "sentiment": [
      0.2,
      0.2,
      0.2,
      0.2,
      0.2
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is asking for donations to help the Ukrainian army, and provides a Bitcoin and USDT wallet for people to send money to."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "N/A"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1147,
      "type": "message",
      "date": "2022-02-27T08: 15: 05",
      "from": ".",
      "from_id": "user1803993383",
      "text": "Hello everyone! We are going to buy things, water, food, etc. for people at the border tomorrow. Any help is welcome! If anyone wants to join us in purchasing goods tomorrow, they can come in person and buy everything After that, everything will be handed over to volunteers and all this will be taken by car to Ukraine \n \nI will repeat, any help is welcome! Write in personal messages "
    },
    "id": "275",
    "source": "telegram",
    "date": "2022-02-27T08:15:05",
    "sourceMessagePlainText": "Hello everyone! We are going to buy things, water, food, etc. for people at the border tomorrow. Any help is welcome! If anyone wants to join us in purchasing goods tomorrow, they can come in person and buy everything After that, everything will be handed over to volunteers and all this will be taken by car to Ukraine \n \nI will repeat, any help is welcome! Write in personal messages ",
    "address": "The physical location mentioned in the text is the border between Ukraine and another country.",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0,
      0,
      0.25,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location mentioned in the text is the border between Ukraine and another country."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The latitude and longitude of the border between Ukraine and another country is { lat: 49.05, lng: 31.30 }."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1152,
      "type": "message",
      "date": "2022-02-27T08: 16: 45",
      "from": "Aline 😜",
      "from_id": "user897665893",
      "text": "Who can help get from the railway in Lviv to the village of Borenya. \nFour women and two children"
    },
    "id": "276",
    "source": "telegram",
    "date": "2022-02-27T08:16:45",
    "sourceMessagePlainText": "Who can help get from the railway in Lviv to the village of Borenya. \nFour women and two children",
    "address": "Lviv, Ukraine",
    "coords": {
      "lat": 49.839683,
      "lng": 24.029717
    },
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Lviv, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 49.839683,\"lng\": 24.029717}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[    {        \"category\": \"Transportation\",        \"probability\": 1.0    },    {        \"category\": \"Volunteering\",        \"probability\": 0.5    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.5    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1153,
      "type": "message",
      "date": "2022-02-27T08: 18: 20",
      "from": "Daria",
      "from_id": "user1571757344",
      "text": "Tell me, please, is it possible to get to Poland from Belarus with a Ukrainian passport?"
    },
    "id": "277",
    "source": "telegram",
    "date": "2022-02-27T08:18:20",
    "sourceMessagePlainText": "Tell me, please, is it possible to get to Poland from Belarus with a Ukrainian passport?",
    "address": "The text does not contain enough information to answer the question.",
    "coords": null,
    "sentiment": [
      0.125,
      0.25,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not contain enough information to answer the question."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1155,
      "type": "message",
      "date": "2022-02-27T08: 18: 37",
      "from": "Ilya",
      "from_id": "user1217246452",
      "reply_to_message_id": 1152,
      "text": "This is a chat for those who are already in Poland ..."
    },
    "id": "278",
    "source": "telegram",
    "date": "2022-02-27T08:18:37",
    "sourceMessagePlainText": "This is a chat for those who are already in Poland ...",
    "address": "Poland",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{\"lat\": 52.2296756,\"lng\": 21.0122287}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This is a chat for those who are already in Poland."
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "This is a chat for those who are already in Poland.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1158,
      "type": "message",
      "date": "2022-02-27T08: 19: 12",
      "edited": "2022-02-27T08: 40: 01",
      "from": "berko228",
      "from_id": "user583803620",
      "text": "Someone is going to Lviv from Katowice?"
    },
    "id": "279",
    "source": "telegram",
    "date": "2022-02-27T08:19:12",
    "sourceMessagePlainText": "Someone is going to Lviv from Katowice?",
    "address": "Katowice is in Poland and Lviv is in Ukraine.",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.05
      },
      {
        "Transportation": 0.3
      },
      {
        "Translation": 0.15
      },
      {
        "Legal": 0.1
      },
      {
        "Volunteering": 0.05
      },
      {
        "Volunteers Needed": 0.15
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Katowice is in Poland and Lviv is in Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: \"Katowice\", lng: \"Poland\" }, { lat: \"Lviv\", lng: \"Ukraine\" }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.3},    {\"Translation\": 0.15},    {\"Legal\": 0.1},    {\"Volunteering\": 0.05},    {\"Volunteers Needed\": 0.15}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1160,
      "type": "message",
      "date": "2022-02-27T08: 19: 19",
      "from": "berko228",
      "from_id": "user583803620",
      "text": "Today-tomorrow"
    },
    "id": "280",
    "source": "telegram",
    "date": "2022-02-27T08:19:19",
    "sourceMessagePlainText": "Today-tomorrow",
    "address": "-next weekThe physical location is not specified in the text.",
    "coords": null,
    "sentiment": null,
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "-next weekThe physical location is not specified in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "-this week-this month-this year-ongoing[    {        \"category\": \"Food\",        \"probability\": \"Today-tomorrow-this week-this month-this year-ongoing\"    },    {        \"category\": \"Shelter\",        \"probability\": \"Today-tomorrow-this week-this month-this year-ongoing\"    },    {        \"category\": \"Health Services\",        \"probability\": \"Today-tomorrow-this week-this month-this year-ongoing\"    },    {        \"category\": \"Transportation\",        \"probability\": \"Today-tomorrow-this week-this month-this year-ongoing\"    },    {        \"category\": \"Translation\",        \"probability\": \"Today-tomorrow-this week-this month-this year-ongoing\"    },    {        \"category\": \"Legal\",        \"probability\": \"Today-tomorrow-this week-this month-this year-ongoing\"    },   "
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " 10am-4pm we need volunteers for a food driveFood"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " 10am-4pm we need volunteers for a food driveFood",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1161,
      "type": "message",
      "date": "2022-02-27T08: 20: 15",
      "edited": "2022-02-27T08: 41: 46",
      "from": "Aline 😜",
      "from_id": "user897665893",
      "reply_to_message_id": 1155,
      "text": "I'm sorry 🙏"
    },
    "id": "281",
    "source": "telegram",
    "date": "2022-02-27T08:20:15",
    "sourceMessagePlainText": "I'm sorry 🙏",
    "address": "I'm sorry 🙏I'm sorry, I can't help you.",
    "coords": null,
    "sentiment": null,
    "category": "Translation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "I'm sorry 🙏I'm sorry, I can't help you."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏼[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " I don't speak English very well. Can you help me?Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": " I don't speak English very well. Can you help me?Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1165,
      "type": "message",
      "date": "2022-02-27T08: 20: 52",
      "from": "Vira",
      "from_id": "user733040563",
      "text": "Who can transport Shegini abroad, 2 people, not for free🙏🏼"
    },
    "id": "282",
    "source": "telegram",
    "date": "2022-02-27T08:20:52",
    "sourceMessagePlainText": "Who can transport Shegini abroad, 2 people, not for free🙏🏼",
    "address": "This text cannot be used to determine a physical location.",
    "coords": null,
    "sentiment": [
      {
        "category": "Transportation",
        "probability": 1
      },
      {
        "category": "Volunteering",
        "probability": 0.5
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.5
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text cannot be used to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text cannot be used to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {\"category\": \"Transportation\", \"probability\": 1.0},  {\"category\": \"Volunteering\", \"probability\": 0.5},  {\"category\": \"Volunteers Needed\", \"probability\": 0.5}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1167,
      "type": "message",
      "date": "2022-02-27T08: 25: 11",
      "from": "Karina Solokh",
      "from_id": "user475594383",
      "text": "Who can pick up a guy from the border?"
    },
    "id": "283",
    "source": "telegram",
    "date": "2022-02-27T08:25:11",
    "sourceMessagePlainText": "Who can pick up a guy from the border?",
    "address": "The border",
    "coords": null,
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.05
      },
      {
        "Transportation": 0.2
      },
      {
        "Translation": 0.1
      },
      {
        "Legal": 0.1
      },
      {
        "Volunteering": 0.2
      },
      {
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The border"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " between Canada and the United States is at 49°N{ lat: 49, lng: 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.05},    {\"Transportation\": 0.2},    {\"Translation\": 0.1},    {\"Legal\": 0.1},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1170,
      "type": "message",
      "date": "2022-02-27T08: 26: 20",
      "from": "Olga Kuznietsova",
      "from_id": "user5005701698",
      "text": "Hello, is there anyone who will go from Kiev to the Polish border tomorrow? \nI have a mother there with no one to leave the city 🙏🏻"
    },
    "id": "284",
    "source": "telegram",
    "date": "2022-02-27T08:26:20",
    "sourceMessagePlainText": "Hello, is there anyone who will go from Kiev to the Polish border tomorrow? \nI have a mother there with no one to leave the city 🙏🏻",
    "address": "Kiev, Poland",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.1
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.1
      },
      {
        "category": "Transportation",
        "probability": 0.6
      },
      {
        "category": "Translation",
        "probability": 0.1
      },
      {
        "category": "Legal",
        "probability": 0.1
      },
      {
        "category": "Volunteering",
        "probability": 0.1
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Kiev, Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude information."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {\"category\": \"Food\", \"probability\": 0.1},  {\"category\": \"Shelter\", \"probability\": 0.1},  {\"category\": \"Health Services\", \"probability\": 0.1},  {\"category\": \"Transportation\", \"probability\": 0.6},  {\"category\": \"Translation\", \"probability\": 0.1},  {\"category\": \"Legal\", \"probability\": 0.1},  {\"category\": \"Volunteering\", \"probability\": 0.1},  {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1172,
      "type": "message",
      "date": "2022-02-27T08: 28: 53",
      "from": "Ruslan Akatrinii",
      "from_id": "user947063786",
      "reply_to_message_id": 1139,
      "text": "Thank you very much. But I don't know how they will be able to get to Spain from Germany later"
    },
    "id": "285",
    "source": "telegram",
    "date": "2022-02-27T08:28:53",
    "sourceMessagePlainText": "Thank you very much. But I don't know how they will be able to get to Spain from Germany later",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ".Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1177,
      "type": "message",
      "date": "2022-02-27T08: 33: 17",
      "edited": "2022-02-27T08: 33: 24",
      "from": "Savrik",
      "from_id": "user1418164475",
      "text": "I've heard on the news about trains to the borders, who knows where you can find out the schedule?"
    },
    "id": "286",
    "source": "telegram",
    "date": "2022-02-27T08:33:17",
    "sourceMessagePlainText": "I've heard on the news about trains to the borders, who knows where you can find out the schedule?",
    "address": "The text does not mention a specific location.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The text does not mention a specific location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text does not mention a specific location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1185,
      "type": "message",
      "date": "2022-02-27T08: 36: 58",
      "from": "Danochka🤪",
      "from_id": "user5031001207",
      "text": "Help to get out of Raisins please🙏"
    },
    "id": "287",
    "source": "telegram",
    "date": "2022-02-27T08:36:58",
    "sourceMessagePlainText": "Help to get out of Raisins please🙏",
    "address": "Raisins",
    "coords": null,
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.25
      },
      {
        "category": "Shelter",
        "probability": 0.25
      },
      {
        "category": "Health Services",
        "probability": 0.25
      },
      {
        "category": "Transportation",
        "probability": 0.25
      },
      {
        "category": "Translation",
        "probability": 0
      },
      {
        "category": "Legal",
        "probability": 0
      },
      {
        "category": "Volunteering",
        "probability": 0
      },
      {
        "category": "Volunteers Needed",
        "probability": 0
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Raisins"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " are dried grapes.This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.25},    {\"category\": \"Shelter\", \"probability\": 0.25},    {\"category\": \"Health Services\", \"probability\": 0.25},    {\"category\": \"Transportation\", \"probability\": 0.25},    {\"category\": \"Translation\", \"probability\": 0},    {\"category\": \"Legal\", \"probability\": 0},    {\"category\": \"Volunteering\", \"probability\": 0},    {\"category\": \"Volunteers Needed\", \"probability\": 0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "🏽Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "🏽Volunteers Needed",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1187,
      "type": "message",
      "date": "2022-02-27T08: 38: 08",
      "from": "Ibragim Eskiev",
      "from_id": "user2071985815",
      "text": "Please tell me who knows. We came to Romania and want to leave the Hungarians at the border to release us or what?"
    },
    "id": "288",
    "source": "telegram",
    "date": "2022-02-27T08:38:08",
    "sourceMessagePlainText": "Please tell me who knows. We came to Romania and want to leave the Hungarians at the border to release us or what?",
    "address": "Romania",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125
    ],
    "category": "Legal",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Romania"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Cluj-Napoca{ lat: 46.7667, lng: 23.6 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1190,
      "type": "message",
      "date": "2022-02-27T08: 39: 26",
      "from": "Marvin Nö",
      "from_id": "user5124530827",
      "text": "We offer a trip across the border of Przemyśl or Korczów to Germany. We will be at the border in about two hours. Dresden, Berlin, Cologne, Frankfurt, Freiburg. Please write. Three places."
    },
    "id": "289",
    "source": "telegram",
    "date": "2022-02-27T08:39:26",
    "sourceMessagePlainText": "We offer a trip across the border of Przemyśl or Korczów to Germany. We will be at the border in about two hours. Dresden, Berlin, Cologne, Frankfurt, Freiburg. Please write. Three places.",
    "address": "The first place is Przemyśl, the second place is Korczów, and the third place is Germany.",
    "coords": null,
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0,
      0,
      0
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The first place is Przemyśl, the second place is Korczów, and the third place is Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "Przemyśl: { lat: 49.78, lng: 22.77 }, Korczów: { lat: 50.25, lng: 22.88 }, Germany: { lat: 51.17, lng: 10.45 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Transportation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1196,
      "type": "message",
      "date": "2022-02-27T08: 40: 54",
      "from": "Savrik",
      "from_id": "user1418164475",
      "reply_to_message_id": 1177,
      "text": "What, who doesn't know? +"
    },
    "id": "290",
    "source": "telegram",
    "date": "2022-02-27T08:40:54",
    "sourceMessagePlainText": "What, who doesn't know? +",
    "address": "This text does not contain enough information to determine a physical location.",
    "coords": null,
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain enough information to determine a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "1[    {        \"Food\": 1    },    {        \"Shelter\": 1    },    {        \"Health Services\": 1    },    {        \"Transportation\": 1    },    {        \"Translation\": 1    },    {        \"Legal\": 1    },    {        \"Volunteering\": 1    },    {        \"Volunteers Needed\": 1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 1200,
      "type": "message",
      "date": "2022-02-27T08: 42: 18",
      "from": "Inga Wojcik",
      "from_id": "user2027067458",
      "reply_to_message_id": 1167,
      "text": "As he is already in Poland, there is no problem. There are a lot of people waiting with cars to help with transport"
    },
    "id": "291",
    "source": "telegram",
    "date": "2022-02-27T08:42:18",
    "sourceMessagePlainText": "As he is already in Poland, there is no problem. There are a lot of people waiting with cars to help with transport",
    "address": "Poland",
    "coords": null,
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Poland"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Warsaw{ lat: 52.23, lng: 21.02 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": ".[0.125, 0.125, 0.125, 0.5, 0, 0, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": ".Transportation",
        "error": "extra chars"
      }
    ]
  },
];
