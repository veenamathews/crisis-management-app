/* tslint:disable:quotemark object-literal-key-quotes */
import { Information } from '../models';

// Telegram: Help for Ukrainians in Germany
export const MESSAGES_DATASET_002: Information[] = [
  {
    "sourceData": {
      "id": 3,
      "type": "message",
      "date": "2022-02-25T00:15:01",
      "edited": "2022-02-25T09:48:13",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Friends! A tax consultant will also join us, who will be able to help with documentation, transfers, issues of withdrawing funds from accounts in Ukraine"
    },
    "id": "3",
    "source": "telegram",
    "date": "2022-02-25T00:15:01",
    "sourceMessagePlainText": "Friends! A tax consultant will also join us, who will be able to help with documentation, transfers, issues of withdrawing funds from accounts in Ukraine",
    "address": "The text does not contain enough information to determine a physical location.",
    "sentiment": null,
    "category": "Legal",
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
        "a": ", etc.[    {        \"category\": \"Food\",        \"probability\": 0    },    {        \"category\": \"Shelter\",        \"probability\": 0    },    {        \"category\": \"Health Services\",        \"probability\": 0    },    {        \"category\": \"Transportation\",        \"probability\": 0    },    {        \"category\": \"Translation\",        \"probability\": 1    },    {        \"category\": \"Legal\",        \"probability\": 1    },    {        \"category\": \"Volunteering\",        \"probability\": 0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": ".Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The text does not contain enough information to determine a physical location.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": ".Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 4,
      "type": "message",
      "date": "2022-02-25T00:21:34",
      "edited": "2022-02-25T09:59:19",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Attention‼️‼️‼️\nIf you have already crossed the EU Border and you/your family needs help with transportation: \n\n",
        {
          "type": "link",
          "text": "https://docs.google.com/forms/d/e/1FAIpQLSeHuzZ3ppgF5iKOXpFKeikguWn0ykZzLruJKZpiQHx23hnYbw/viewform?fbclid=IwAR01x3Oyh8ZUixPUYX4mOZTTX4kHzBsrSDbxibrRd4ZbiZXMTyHtydaDNTc"
        },
        "\n\nWe leave the application and wait for the volunteers to contact you"
      ]
    },
    "id": "4",
    "source": "telegram",
    "date": "2022-02-25T00:21:34",
    "sourceMessagePlainText": "Attention‼️‼️‼️\nIf you have already crossed the EU Border and you/your family needs help with transportation: \n\n https://docs.google.com/forms/d/e/1FAIpQLSeHuzZ3ppgF5iKOXpFKeikguWn0ykZzLruJKZpiQHx23hnYbw/viewform?fbclid=IwAR01x3Oyh8ZUixPUYX4mOZTTX4kHzBsrSDbxibrRd4ZbiZXMTyHtydaDNTc \n\nWe leave the application and wait for the volunteers to contact you ",
    "gmapLink": null,
    "address": "This text does not contain a physical location.",
    "sentiment": null,
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
        "a": "- [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 5,
      "type": "message",
      "date": "2022-02-25T00:22:26",
      "edited": "2022-02-25T22:18:25",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "‼️‼️‼️If you are ready to transport people across the EU to refugee registration \n\n",
        {
          "type": "link",
          "text": "https://docs.google.com/forms/d/e/1FAIpQLSeLQvMqfQM6AFIMYmgJyUltwxpM8kDK-kRc-k5V_APtGpDZmQ/viewform?fbclid=IwAR0Ff5AOfz3yc8aYLtzQia38hFzeerg2954ye7Mfdz3KZffN4otsCxiKY1M"
        },
        "\n\nRegister"
      ]
    },
    "id": "5",
    "source": "telegram",
    "date": "2022-02-25T00:22:26",
    "sourceMessagePlainText": "‼️‼️‼️If you are ready to transport people across the EU to refugee registration \n\n https://docs.google.com/forms/d/e/1FAIpQLSeLQvMqfQM6AFIMYmgJyUltwxpM8kDK-kRc-k5V_APtGpDZmQ/viewform?fbclid=IwAR0Ff5AOfz3yc8aYLtzQia38hFzeerg2954ye7Mfdz3KZffN4otsCxiKY1M \n\nRegister ",
    "gmapLink": null,
    "address": " to be a volunteer driverThis text is a Google Form for people who want to register to be volunteer drivers. There is no physical location mentioned.",
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " to be a volunteer driverThis text is a Google Form for people who want to register to be volunteer drivers. There is no physical location mentioned."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ""
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "Volunteering: 1.0Volunteers Needed: 1.0"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 6,
      "type": "message",
      "date": "2022-02-25T00:23:02",
      "edited": "2022-02-25T20:01:36",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "‼️‼️‼️If you are willing to accept refugees \n\n",
        {
          "type": "link",
          "text": "https://docs.google.com/forms/d/e/1FAIpQLScWDnuCXAxYoJ9WP-U7ZGzGoHqcR7Ll1shKg7Vorwdgw_ibtg/viewform?fbclid=IwAR3hQ-EsQhvlRtSePL1VcWuwxTQMLFQfkUfhbWvZzzWb_dJbOBUx9szGgQ0"
        },
        "\n\nRegister"
      ]
    },
    "id": "6",
    "source": "telegram",
    "date": "2022-02-25T00:23:02",
    "sourceMessagePlainText": "‼️‼️‼️If you are willing to accept refugees \n\n https://docs.google.com/forms/d/e/1FAIpQLScWDnuCXAxYoJ9WP-U7ZGzGoHqcR7Ll1shKg7Vorwdgw_ibtg/viewform?fbclid=IwAR3hQ-EsQhvlRtSePL1VcWuwxTQMLFQfkUfhbWvZzzWb_dJbOBUx9szGgQ0 \n\nRegister ",
    "gmapLink": null,
    "address": "The physical location is not specified in the text.",
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
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not specified in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1},    {\"Shelter\": 0.2},    {\"Health Services\": 0.3},    {\"Transportation\": 0.4},    {\"Translation\": 0.5},    {\"Legal\": 0.6},    {\"Volunteering\": 0.7},    {\"Volunteers Needed\": 0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " to be a volunteer"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The physical location is not specified in the text.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": " to be a volunteer",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 7,
      "type": "message",
      "date": "2022-02-25T01:02:51",
      "edited": "2022-03-11T10:18:49",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "I've created a channel-bound chat where everyone can ask questions, offer suggestions, or get help."
    },
    "id": "7",
    "source": "telegram",
    "date": "2022-02-25T01:02:51",
    "sourceMessagePlainText": "I've created a channel-bound chat where everyone can ask questions, offer suggestions, or get help.",
    "address": "This text does not contain enough information to determine a physical location.",
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
        "a": "[  {    \"category\": \"Food\",    \"probability\": 0.25  },  {    \"category\": \"Shelter\",    \"probability\": 0.25  },  {    \"category\": \"Health Services\",    \"probability\": 0.25  },  {    \"category\": \"Transportation\",    \"probability\": 0.25  },  {    \"category\": \"Translation\",    \"probability\": 0  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 0  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain enough information to determine a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 8,
      "type": "message",
      "date": "2022-02-25T01:03:33",
      "edited": "2022-02-26T08:28:27",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "link",
          "text": "https://t.me/pomoc2022"
        }
      ]
    },
    "id": "8",
    "source": "telegram",
    "date": "2022-02-25T01:03:33",
    "sourceMessagePlainText": "https://t.me/pomoc2022 ",
    "gmapLink": null,
    "address": "This text does not contain a physical location.",
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
        "a": "This text does not contain a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.1,    \"Shelter\": 0.2,    \"Health Services\": 0.3,    \"Transportation\": 0.4,    \"Translation\": 0.5,    \"Legal\": 0.6,    \"Volunteering\": 0.7,    \"Volunteers Needed\": 0.8}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 9,
      "type": "message",
      "date": "2022-02-25T01:03:52",
      "edited": "2022-02-26T04:23:04",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "link",
          "text": "https://t.me/+ZM7gZZfM8Wc2YWM6"
        }
      ]
    },
    "id": "9",
    "source": "telegram",
    "date": "2022-02-25T01:03:52",
    "sourceMessagePlainText": "https://t.me/+ZM7gZZfM8Wc2YWM6 ",
    "gmapLink": null,
    "address": "This text does not contain a physical location.",
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.8
      },
      {
        "category": "Shelter",
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
        "probability": 0.03
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.02
      }
    ],
    "category": "Volunteers Needed",
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
        "a": "[    {\"category\": \"Food\", \"probability\": 0.8},    {\"category\": \"Shelter\", \"probability\": 0.6},    {\"category\": \"Health Services\", \"probability\": 0.4},    {\"category\": \"Transportation\", \"probability\": 0.2},    {\"category\": \"Translation\", \"probability\": 0.1},    {\"category\": \"Legal\", \"probability\": 0.05},    {\"category\": \"Volunteering\", \"probability\": 0.03},    {\"category\": \"Volunteers Needed\", \"probability\": 0.02}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 10,
      "type": "message",
      "date": "2022-02-25T01:04:21",
      "edited": "2022-02-26T03:46:24",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Ссылка на чат ⬆️⬆️⬆️⬆️"
    },
    "id": "10",
    "source": "telegram",
    "date": "2022-02-25T01:04:21",
    "sourceMessagePlainText": "Ссылка на чат ⬆️⬆️⬆️⬆️",
    "address": "The text does not contain enough information to determine a physical location.",
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
        "a": "⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The text does not contain enough information to determine a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 11,
      "type": "message",
      "date": "2022-02-25T01:28:03",
      "edited": "2022-02-25T22:19:15",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "link",
          "text": "https://m.facebook.com/groups/347615063908402/?ref=share"
        },
        "\n\nMoldova has opened its borders. They accept Ukrainians. They rent apartments for free."
      ]
    },
    "id": "11",
    "source": "telegram",
    "date": "2022-02-25T01:28:03",
    "sourceMessagePlainText": "https://m.facebook.com/groups/347615063908402/?ref=share \n\nMoldova has opened its borders. They accept Ukrainians. They rent apartments for free. ",
    "gmapLink": null,
    "address": "The physical location from this text is Moldova.",
    "coords": {
      "lat": 47.411631,
      "lng": 28.369885
    },
    "sentiment": null,
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from this text is Moldova."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 47.411631, \"lng\": 28.369885 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2, \"Shelter\": 0.4, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.1, \"Volunteers Needed\": 0.1},    {\"Food\": 0.2, \"Shelter\": 0.4, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.1, \"Volunteers Needed\": 0.1},    {\"Food\": 0.2, \"Shelter\": 0.4, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \"Volunteering\": 0.1, \"Volunteers Needed\": 0.1},    {\"Food\": 0.2, \"Shelter\": 0.4, \"Health Services\": 0.1, \"Transportation\": 0.1, \"Translation\": 0.1, \"Legal\": 0.1, \""
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 12,
      "type": "message",
      "date": "2022-02-25T01:48:10",
      "edited": "2022-02-25T21:27:30",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Health insurance for refugees. Who can make a memo?\n\n",
        {
          "type": "link",
          "text": "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/aerzte-und-kliniken/medical-supply-von-asylbewerbern-12312"
        },
        ""
      ]
    },
    "id": "12",
    "source": "telegram",
    "date": "2022-02-25T01:48:10",
    "sourceMessagePlainText": "Health insurance for refugees. Who can make a memo?\n\n https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/aerzte-und-kliniken/medical-supply-von-asylbewerbern-12312  ",
    "gmapLink": null,
    "address": "Germany",
    "sentiment": [
      {
        "category": "Health Services",
        "probability": 1
      },
      {
        "category": "Insurance",
        "probability": 0.5
      },
      {
        "category": "Refugees",
        "probability": 1
      }
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Berlin{ lat: 52.5200, lng: 13.4050 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Health Services\", \"probability\": 1.0},    {\"category\": \"Insurance\", \"probability\": 0.5},    {\"category\": \"Refugees\", \"probability\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", Berlin{ lat: 52.5200, lng: 13.4050 }",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 13,
      "type": "message",
      "date": "2022-02-25T01:49:17",
      "edited": "2022-02-25T04:41:31",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Medical care for people without health insurance in Germany \n\n",
        {
          "type": "link",
          "text": "https://www.malteser.de/menschen-ohne-krankenversicherung/unsere-standorte.html"
        },
        ""
      ]
    },
    "id": "13",
    "source": "telegram",
    "date": "2022-02-25T01:49:17",
    "sourceMessagePlainText": "Medical care for people without health insurance in Germany \n\n https://www.malteser.de/menschen-ohne-krankenversicherung/unsere-standorte.html  ",
    "gmapLink": null,
    "address": "This text is from the website of the Malteser, a Catholic organization in Germany. The website provides a list of locations where the Malteser provide medical care for people without health insurance.",
    "sentiment": [
      {
        "Food": 0.2
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.6
      },
      {
        "Transportation": 0.1
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
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is from the website of the Malteser, a Catholic organization in Germany. The website provides a list of locations where the Malteser provide medical care for people without health insurance."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The latitude and longitude of the Malteser organization in Germany is { lat: 50.937531, lng: 6.960279 }."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.6},    {\"Transportation\": 0.1},    {\"Translation\": 0.0},    {\"Legal\": 0.0},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The latitude and longitude of the Malteser organization in Germany is { lat: 50.937531, lng: 6.960279 }.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 14,
      "type": "message",
      "date": "2022-02-25T02:27:28",
      "edited": "2022-02-25T04:20:42",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "link",
          "text": "https://www.instagram.com/p/CaWz0ijN_4s/?utm_medium=copy_link"
        },
        "\n\nHousing for refugees from Ukraine in Frankfurt"
      ]
    },
    "id": "14",
    "source": "telegram",
    "date": "2022-02-25T02:27:28",
    "sourceMessagePlainText": "https://www.instagram.com/p/CaWz0ijN_4s/?utm_medium=copy_link \n\nHousing for refugees from Ukraine in Frankfurt ",
    "gmapLink": null,
    "address": "Frankfurt, Germany",
    "coords": {
      "lat": 50.1109,
      "lng": 8.6821
    },
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
        "Transportation": 0.1
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
        "Volunteers Needed": 0.05
      }
    ],
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Frankfurt, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 50.1109,\"lng\": 8.6821}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.4},    {\"Health Services\": 0.1},    {\"Transportation\": 0.1},    {\"Translation\": 0.05},    {\"Legal\": 0.05},    {\"Volunteering\": 0.1},    {\"Volunteers Needed\": 0.05}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 15,
      "type": "message",
      "date": "2022-02-25T04:41:54",
      "edited": "2022-02-25T08:24:26",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "English speaking group to help Ukrainians in Berlin \n\n",
        {
          "type": "link",
          "text": "https://t.me/+pY4AEUY_0jZhMzQ0"
        },
        ""
      ]
    },
    "id": "15",
    "source": "telegram",
    "date": "2022-02-25T04:41:54",
    "sourceMessagePlainText": "English speaking group to help Ukrainians in Berlin \n\n https://t.me/+pY4AEUY_0jZhMzQ0  ",
    "gmapLink": null,
    "address": "Berlin, Germany",
    "coords": {
      "lat": 52.52,
      "lng": 13.405
    },
    "sentiment": [
      {
        "category": "Volunteering",
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Berlin, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.5200, lng: 13.4050 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Volunteering\",    \"probability\": 1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 16,
      "type": "message",
      "date": "2022-02-25T04:45:18",
      "edited": "2022-02-25T09:49:11",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Transportation of refugees from the borders of Poland and Germany can be carried out by me with two more volunteers."
    },
    "id": "16",
    "source": "telegram",
    "date": "2022-02-25T04:45:18",
    "sourceMessagePlainText": "Transportation of refugees from the borders of Poland and Germany can be carried out by me with two more volunteers.",
    "address": "Poland and Germany",
    "sentiment": [
      {
        "Food": 0
      },
      {
        "Shelter": 0
      },
      {
        "Health Services": 0
      },
      {
        "Transportation": 1
      },
      {
        "Translation": 0
      },
      {
        "Legal": 0
      },
      {
        "Volunteering": 1
      },
      {
        "Volunteers Needed": 1
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
        "a": " are separated by the Oder river{  \"lat\": 0,  \"lng\": 0}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "    [    {\"Food\": 0.0},    {\"Shelter\": 0.0},    {\"Health Services\": 0.0},    {\"Transportation\": 1.0},    {\"Translation\": 0.0},    {\"Legal\": 0.0},    {\"Volunteering\": 1.0},    {\"Volunteers Needed\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": " are separated by the Oder river{  lat: 0,  lng: 0}",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 17,
      "type": "message",
      "date": "2022-02-25T09:02:25",
      "edited": "2022-02-25T09:08:41",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Refugee Registration Berlin Brandenburg \n\n",
        {
          "type": "link",
          "text": "https://www.stadt-brandenburg.de/presse/hilfe-fuer-ukrainische-fluechtlinge?fbclid=IwAR3Bp0apQLDetQaVI7dGc-feZATk5dF2ZSwvbezY5CKd9D-RqJNS8SZK7rY"
        },
        ""
      ]
    },
    "id": "17",
    "source": "telegram",
    "date": "2022-02-25T09:02:25",
    "sourceMessagePlainText": "Refugee Registration Berlin Brandenburg \n\n https://www.stadt-brandenburg.de/presse/hilfe-fuer-ukrainische-fluechtlinge?fbclid=IwAR3Bp0apQLDetQaVI7dGc-feZATk5dF2ZSwvbezY5CKd9D-RqJNS8SZK7rY  ",
    "gmapLink": null,
    "address": "Berlin Brandenburg, Germany",
    "coords": {
      "lat": 52.52,
      "lng": 13.405
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
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Berlin Brandenburg, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.5200, lng: 13.4050 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Food\",    \"probability\": 0.1  },  {    \"category\": \"Shelter\",    \"probability\": 0.1  },  {    \"category\": \"Health Services\",    \"probability\": 0.1  },  {    \"category\": \"Transportation\",    \"probability\": 0.1  },  {    \"category\": \"Translation\",    \"probability\": 0.1  },  {    \"category\": \"Legal\",    \"probability\": 0.1  },  {    \"category\": \"Volunteering\",    \"probability\": 0.1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0.1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 18,
      "type": "message",
      "date": "2022-02-25T09:46:46",
      "edited": "2022-02-25T10:17:18",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1280,
      "height": 400,
      "text": ""
    },
    "id": "18",
    "source": "telegram",
    "date": "2022-02-25T09:46:46",
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
      "id": 19,
      "type": "message",
      "date": "2022-02-25T11:13:32",
      "edited": "2022-02-25T19:58:53",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "A refugee reception center is open in Berlin day and night. \nHaus 2 for registration. \n Oranienburger Straße 285\nD-13437 Berlin\n☏ +49 (0) 30 50 93 06 920\nPeople will be officially registered. "
    },
    "id": "19",
    "source": "telegram",
    "date": "2022-02-25T11:13:32",
    "sourceMessagePlainText": "A refugee reception center is open in Berlin day and night. \nHaus 2 for registration. \n Oranienburger Straße 285\nD-13437 Berlin\n☏ +49 (0) 30 50 93 06 920\nPeople will be officially registered. ",
    "address": "The refugee reception center is located in Haus 2 on Oranienburger Straße 285 in D-13437 Berlin. The phone number for the center is +49 (0) 30 50 93 06 920.",
    "coords": {
      "lat": 52.54764,
      "lng": 13.35573
    },
    "sentiment": [
      {
        "Food": 0.1,
        "Shelter": 0.2,
        "Health Services": 0.3,
        "Transportation": 0.1,
        "Translation": 0.1,
        "Legal": 0.1,
        "Volunteering": 0.1,
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The refugee reception center is located in Haus 2 on Oranienburger Straße 285 in D-13437 Berlin. The phone number for the center is +49 (0) 30 50 93 06 920."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 52.54764, \"lng\": 13.35573 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\":0.1,\"Shelter\":0.2,\"Health Services\":0.3,\"Transportation\":0.1,\"Translation\":0.1,\"Legal\":0.1,\"Volunteering\":0.1,\"Volunteers Needed\":0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Refugees will be provided with- Food- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Refugees will be provided with- Food- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed",
        "error": "extra chars"
      },
      {
        "key": "category",
        "value": "Refugees will be provided withFood- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 20,
      "type": "message",
      "date": "2022-02-25T22:03:07",
      "edited": "2022-02-26T00:36:13",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "file": "(File not included. Change data exporting settings to download.)",
      "thumbnail": "(File not included. Change data exporting settings to download.)",
      "mime_type": "application/pdf",
      "text": ""
    },
    "id": "20",
    "source": "telegram",
    "date": "2022-02-25T22:03:07",
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
      "id": 21,
      "type": "message",
      "date": "2022-02-25T22:03:12",
      "edited": "2022-02-25T22:50:17",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Our team has created memos in Russian and Ukrainian for those who are going to seek shelter in Germany"
    },
    "id": "21",
    "source": "telegram",
    "date": "2022-02-25T22:03:12",
    "sourceMessagePlainText": "Our team has created memos in Russian and Ukrainian for those who are going to seek shelter in Germany",
    "address": "Germany",
    "coords": {
      "lat": 51.165691,
      "lng": 10.451526
    },
    "sentiment": null,
    "category": "Translation",
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
        "a": ".[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Translation",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 23,
      "type": "message",
      "date": "2022-02-25T22:04:00",
      "edited": "2022-02-25T23:47:01",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "file": "(File not included. Change data exporting settings to download.)",
      "thumbnail": "(File not included. Change data exporting settings to download.)",
      "mime_type": "application/pdf",
      "text": ""
    },
    "id": "22",
    "source": "telegram",
    "date": "2022-02-25T22:04:00",
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
      "id": 24,
      "type": "message",
      "date": "2022-02-25T22:08:08",
      "edited": "2022-02-26T00:46:53",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "I remind you ‼️‼️‼️ There is a chat where you can offer or get help 🇺🇦🇺🇦🇺🇦\n\n",
        {
          "type": "link",
          "text": "https://t.me/+ZM7gZZfM8Wc2YWM6"
        },
        ""
      ]
    },
    "id": "23",
    "source": "telegram",
    "date": "2022-02-25T22:08:08",
    "sourceMessagePlainText": "I remind you ‼️‼️‼️ There is a chat where you can offer or get help 🇺🇦🇺🇦🇺🇦\n\n https://t.me/+ZM7gZZfM8Wc2YWM6  ",
    "gmapLink": null,
    "address": "Ukraine",
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Kyiv{ lat: 50.45, lng: 30.523333 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " 🇺🇦🇺🇦🇺🇦[  {\"Food\": 0.2},  {\"Shelter\": 0.1},  {\"Health Services\": 0.05},  {\"Transportation\": 0.1},  {\"Translation\": 0.1},  {\"Legal\": 0.1},  {\"Volunteering\": 0.2},  {\"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", Kyiv{ lat: 50.45, lng: 30.523333 }",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 25,
      "type": "message",
      "date": "2022-02-26T01:31:39",
      "edited": "2022-02-26T01:57:29",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Chat , invitation link ! \n\n",
        {
          "type": "link",
          "text": "https://t.me/+ZM7gZZfM8Wc2YWM6"
        },
        ""
      ]
    },
    "id": "24",
    "source": "telegram",
    "date": "2022-02-26T01:31:39",
    "sourceMessagePlainText": "Chat , invitation link ! \n\n https://t.me/+ZM7gZZfM8Wc2YWM6  ",
    "gmapLink": null,
    "address": "This text does not contain a physical location.",
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
    "category": "Volunteers Needed",
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
        "a": "[  {    \"category\": \"Food\",    \"probability\": 0.1  },  {    \"category\": \"Shelter\",    \"probability\": 0.1  },  {    \"category\": \"Health Services\",    \"probability\": 0.1  },  {    \"category\": \"Transportation\",    \"probability\": 0.1  },  {    \"category\": \"Translation\",    \"probability\": 0.1  },  {    \"category\": \"Legal\",    \"probability\": 0.1  },  {    \"category\": \"Volunteering\",    \"probability\": 0.1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0.1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 26,
      "type": "message",
      "date": "2022-02-26T01:37:24",
      "edited": "2022-02-26T02:06:33",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Friends! I'm struggling, I need help administering the chat. Who wants to help?"
    },
    "id": "25",
    "source": "telegram",
    "date": "2022-02-26T01:37:24",
    "sourceMessagePlainText": "Friends! I'm struggling, I need help administering the chat. Who wants to help?",
    "address": "The text does not contain enough information to determine a physical location.",
    "sentiment": [
      {
        "category": "Volunteering",
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 1
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
        "a": "[    {        \"category\": \"Volunteering\",        \"probability\": 1.0    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 1.0    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The text does not contain enough information to determine a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 27,
      "type": "message",
      "date": "2022-02-26T04:11:03",
      "edited": "2022-02-26T04:11:16",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 731,
      "height": 1110,
      "text": "Friends! Collecting aid to Ukraine for the victims :"
    },
    "id": "26",
    "source": "telegram",
    "date": "2022-02-26T04:11:03",
    "sourceMessagePlainText": "Friends! Collecting aid to Ukraine for the victims :",
    "address": "))This text does not contain enough information to determine a physical location.",
    "sentiment": null,
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "))This text does not contain enough information to determine a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat, lng } JSON object cannot be extracted from this text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "-([0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "-(Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "{ lat, lng } JSON object cannot be extracted from this text.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": "-(Volunteering",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 28,
      "type": "message",
      "date": "2022-02-26T05:22:37",
      "edited": "2022-02-26T05:24:40",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Humanitarian aid in Berlin, where to bring medicines, food, hygiene products: \n\nKrausnickstraße 23, 10115 Berlin \n\nRestaurant KINZA"
    },
    "id": "27",
    "source": "telegram",
    "date": "2022-02-26T05:22:37",
    "sourceMessagePlainText": "Humanitarian aid in Berlin, where to bring medicines, food, hygiene products: \n\nKrausnickstraße 23, 10115 Berlin \n\nRestaurant KINZA",
    "address": ", Krausnickstraße 23, 10115 Berlin",
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ", Krausnickstraße 23, 10115 Berlin"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Germany{ lat: 52.530908, lng: 13.385005 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " Mon-Sun: 11:00-21:00 [{\"category\": \"Food\", \"probability\": 1.0}, {\"category\": \"Shelter\", \"probability\": 0.0}, {\"category\": \"Health Services\", \"probability\": 0.5}, {\"category\": \"Transportation\", \"probability\": 0.0}, {\"category\": \"Translation\", \"probability\": 0.0}, {\"category\": \"Legal\", \"probability\": 0.0}, {\"category\": \"Volunteering\", \"probability\": 0.0}, {\"category\": \"Volunteers Needed\", \"probability\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Mon-Sat: 11:30-14:30, 17:30-22:30Food"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", Germany{ lat: 52.530908, lng: 13.385005 }",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": "Mon-Sat: 11:30-14:30, 17:30-22:30Food",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 29,
      "type": "message",
      "date": "2022-02-26T21:56:28",
      "edited": "2022-02-26T22:32:31",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "I remind you ‼️‼️‼️ There is a chat where you can offer or get help 🇺🇦🇺🇦🇺🇦\n\n",
        {
          "type": "link",
          "text": "https://t.me/+ZM7gZZfM8Wc2YWM6"
        },
        ""
      ]
    },
    "id": "28",
    "source": "telegram",
    "date": "2022-02-26T21:56:28",
    "sourceMessagePlainText": "I remind you ‼️‼️‼️ There is a chat where you can offer or get help 🇺🇦🇺🇦🇺🇦\n\n https://t.me/+ZM7gZZfM8Wc2YWM6  ",
    "gmapLink": null,
    "address": "This text is from a chatbot located in Ukraine.",
    "coords": {
      "lat": 50.45466,
      "lng": 30.5238
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is from a chatbot located in Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{\"lat\": 50.45466,\"lng\": 30.5238}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " 🇺🇦🇺🇦🇺🇦[  {    \"category\": \"Food\",    \"probability\": 0  },  {    \"category\": \"Shelter\",    \"probability\": 0  },  {    \"category\": \"Health Services\",    \"probability\": 0  },  {    \"category\": \"Transportation\",    \"probability\": 0  },  {    \"category\": \"Translation\",    \"probability\": 0  },  {    \"category\": \"Legal\",    \"probability\": 0  },  {    \"category\": \"Volunteering\",    \"probability\": 1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 30,
      "type": "message",
      "date": "2022-02-26T22:18:44",
      "edited": "2022-02-26T22:21:06",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Transport from Ukraine to the border: \n0 (50) 789 46 45 - Coordinator Roman1 \n \n0 (73) 370 36 66 - Vladimir (Lviv) \n \n0 (73) 837 36 66 - Maxim (Lviv) \n \n0 (73) 397 93 33 - Kolya (Lviv) \n \n0 (68) 180 01 35 - Roman2 (Lviv) \n \n0 (98) 566 87 12 - Vitalik (Lviv) \n \n0 (63) 989 26 20 - Rostik (Kyiv) \n \n0 (68) 193 90 23 - Rostik (Kyiv) \n \n0 (50) 789 46 45 - Roman1 (Kyiv) \n \n ",
        {
          "type": "phone",
          "text": "+380961017110"
        },
        ""
      ]
    },
    "id": "29",
    "source": "telegram",
    "date": "2022-02-26T22:18:44",
    "sourceMessagePlainText": "Transport from Ukraine to the border: \n0 (50) 789 46 45 - Coordinator Roman1 \n \n0 (73) 370 36 66 - Vladimir (Lviv) \n \n0 (73) 837 36 66 - Maxim (Lviv) \n \n0 (73) 397 93 33 - Kolya (Lviv) \n \n0 (68) 180 01 35 - Roman2 (Lviv) \n \n0 (98) 566 87 12 - Vitalik (Lviv) \n \n0 (63) 989 26 20 - Rostik (Kyiv) \n \n0 (68) 193 90 23 - Rostik (Kyiv) \n \n0 (50) 789 46 45 - Roman1 (Kyiv) \n \n  +380961017110  ",
    "gmapLink": null,
    "address": " - Sasha (Kyiv)The location mentioned in the text is Ukraine.",
    "coords": {
      "lat": 50.45,
      "lng": 30.523333
    },
    "sentiment": [
      {
        "Food": 0.1
      },
      {
        "Shelter": 0.1
      },
      {
        "Health Services": 0.1
      },
      {
        "Transportation": 0.7
      },
      {
        "Translation": 0.1
      },
      {
        "Legal": 0.1
      },
      {
        "Volunteering": 0.1
      },
      {
        "Volunteers Needed": 0.1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " - Sasha (Kyiv)The location mentioned in the text is Ukraine."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 50.45, lng: 30.523333 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"Food\": 0.1},    {\"Shelter\": 0.1},    {\"Health Services\": 0.1},    {\"Transportation\": 0.7},    {\"Translation\": 0.1},    {\"Legal\": 0.1},    {\"Volunteering\": 0.1},    {\"Volunteers Needed\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 31,
      "type": "message",
      "date": "2022-02-26T22:20:12",
      "edited": "2022-02-26T22:22:06",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "evacuation chat for each city. \n\nLuhansk region",
        {
          "type": "link",
          "text": "https://t.me/luhanskevaquation"
        },
        "\n\n\nIvanovo-Frankivsk",
        {
          "type": "link",
          "text": "https://t.me/+nzeP_stFB3I1MjU0"
        },
        "\n \n \nZaporozhye",
        {
          "type": "link",
          "text": "https://t.me/+ynRJn88RxgswYmU0"
        },
        "\n\n\nужгород ",
        {
          "type": "link",
          "text": "https://t.me/+5WlQQHIKJ4NjMGNk"
        },
        "\n \n \nZhytomyr",
        {
          "type": "link",
          "text": "https://t.me/+QD2EEIJqf_xhYjQ8"
        },
        "\n\n\nднепр ",
        {
          "type": "link",
          "text": "https://t.me/+LpQlRQvCas1jNmI0"
        },
        "\n \nPavlograd",
        {
          "type": "link",
          "text": "https://t.me/pavlogradevak"
        },
        "\n\n\nлуцк ",
        {
          "type": "link",
          "text": "https://t.me/+R49w2c4seXw5MzJk"
        },
        "\n\n\nвинница ",
        {
          "type": "link",
          "text": "https://t.me/+LeEGgnB7RwcxYWI0"
        },
        "\n \n \nBerdychiv",
        {
          "type": "link",
          "text": "https://t.me/+g1vCeKfEve5lNTM6"
        },
        "\n\nЧеркассы - ",
        {
          "type": "link",
          "text": "https://t.me/EvacuationCherkasy"
        },
        "\n\nЧерновцы - ",
        {
          "type": "link",
          "text": "https://t.me/evacuationChernovtsy"
        },
        "\n\nЧернiгiв ",
        {
          "type": "link",
          "text": "https://t.me/+i1Np0FJLhs4zMzli"
        },
        "\n\nDonetsk region (Pokrovsky district) - ",
        {
          "type": "link",
          "text": "https://t.me/pokrovsk_don"
        },
        "\n\n\nКиев  ",
        {
          "type": "link",
          "text": "https://t.me/+68JG-qKNvm9kNjZi"
        },
        "\n\nKhmelnitsky ",
        {
          "type": "link",
          "text": "https://t.me/+qORus3EoBnEzZmNk"
        },
        "\n\nРовно ",
        {
          "type": "link",
          "text": "https://t.me/+hwq625pYpfUzOWI8"
        },
        "\n\nПолтава ",
        {
          "type": "link",
          "text": "https://t.me/+AGqMw2Sl4ABjMmI0"
        },
        "\n\nСумы ",
        {
          "type": "link",
          "text": "https://t.me/+-oVnhuNnwpU1ZWVk"
        },
        "\n\nОдесса ",
        {
          "type": "link",
          "text": "https://t.me/+Dg2rSrkmuN03NGFk"
        },
        "\n \nNikolaev",
        {
          "type": "link",
          "text": "https://t.me/+isy_Cw5MrptmZjlk"
        },
        "\n\nЛьвов ",
        {
          "type": "link",
          "text": "https://t.me/+UNdwIrUYEBgwOWE8"
        },
        "\n \nTernopil",
        {
          "type": "link",
          "text": "https://t.me/+HK4nfvMpAeM1MWZk"
        },
        " \n\nКировоград ",
        {
          "type": "link",
          "text": "https://t.me/+z5TkEVbqiatkOGE0"
        },
        "\n\nBelaya Tserkov ",
        {
          "type": "link",
          "text": "https://t.me/+A4vJpMa-iqY3NzJi"
        },
        "\n \nKharkov",
        {
          "type": "link",
          "text": "https://t.me/+vSsvEw-pfNA4NDdi"
        },
        "\n \nKryvyi Rih",
        {
          "type": "link",
          "text": "https://t.me/+SguKJv2dQGRkM2Zk"
        },
        ""
      ]
    },
    "id": "30",
    "source": "telegram",
    "date": "2022-02-26T22:20:12",
    "sourceMessagePlainText": "evacuation chat for each city. \n\nLuhansk region https://t.me/luhanskevaquation \n\n\nIvanovo-Frankivsk https://t.me/+nzeP_stFB3I1MjU0 \n \n \nZaporozhye https://t.me/+ynRJn88RxgswYmU0 \n\n\nужгород  https://t.me/+5WlQQHIKJ4NjMGNk \n \n \nZhytomyr https://t.me/+QD2EEIJqf_xhYjQ8 \n\n\nднепр  https://t.me/+LpQlRQvCas1jNmI0 \n \nPavlograd https://t.me/pavlogradevak \n\n\nлуцк  https://t.me/+R49w2c4seXw5MzJk \n\n\nвинница  https://t.me/+LeEGgnB7RwcxYWI0 \n \n \nBerdychiv https://t.me/+g1vCeKfEve5lNTM6 \n\nЧеркассы -  https://t.me/EvacuationCherkasy \n\nЧерновцы -  https://t.me/evacuationChernovtsy \n\nЧернiгiв  https://t.me/+i1Np0FJLhs4zMzli \n\nDonetsk region (Pokrovsky district) -  https://t.me/pokrovsk_don \n\n\nКиев   https://t.me/+68JG-qKNvm9kNjZi \n\nKhmelnitsky  https://t.me/+qORus3EoBnEzZmNk \n\nРовно  https://t.me/+hwq625pYpfUzOWI8 \n\nПолтава  https://t.me/+AGqMw2Sl4ABjMmI0 \n\nСумы  https://t.me/+-oVnhuNnwpU1ZWVk \n\nОдесса  https://t.me/+Dg2rSrkmuN03NGFk \n \nNikolaev https://t.me/+isy_Cw5MrptmZjlk \n\nЛьвов  https://t.me/+UNdwIrUYEBgwOWE8 \n \nTernopil https://t.me/+HK4nfvMpAeM1MWZk  \n\nКировоград  https://t.me/+z5TkEVbqiatkOGE0 \n\nBelaya Tserkov  https://t.me/+A4vJpMa-iqY3NzJi \n \nKharkov https://t.me/+vSsvEw-pfNA4NDdi \n \nKryvyi Rih https://t.me/+SguKJv2dQGRkM2Zk  ",
    "gmapLink": null,
    "address": "Cherkassy, Ukraine",
    "coords": {
      "lat": 49.433333,
      "lng": 32.066667
    },
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Cherkassy, Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 49.433333, lng: 32.066667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " Dnipro https://t.me/+DniproEVRM Cherkassy https://t.me/+EvacuationCherkasy Chernovtsy https://t.me/evacuationChernovtsy Chernigiv https://t.me/+i1Np0FJLhs4zMzli Donetsk region (Pokrovsky district) https://t.me/pokrovsk_don Kyiv https://t.me/+68JG-qKNvm9kNjZi Khmelnitsky https://t.me/+qORus3EoBnEzZmNk Rovno https://t.me/+hwq625pYpfUzOWI8 Poltava https://t.me/+AGqMw2Sl4ABjMmI0 Sumy https://t.me/+-oVnhuNnwpU1ZWVk Odesa https://t.me/+Dg2rS"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Chernigov https://t.me/+9v9q1qejYX5jNmI0 Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Chernigov https://t.me/+9v9q1qejYX5jNmI0 Translation",
        "error": "extra chars"
      },
      {
        "key": "category",
        "value": "Chernigov https://tme/+9v9q1qejYX5jNmI0 Translation",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 32,
      "type": "message",
      "date": "2022-02-26T22:24:56",
      "edited": "2022-02-26T22:25:24",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "hashtag",
          "text": "#Гамбург"
        },
        "Help Collection Contact \n \n",
        {
          "type": "link",
          "text": "https://instagram.com/hh.deutsch?utm_medium=copy_link"
        },
        ""
      ]
    },
    "id": "31",
    "source": "telegram",
    "date": "2022-02-26T22:24:56",
    "sourceMessagePlainText": "#Гамбург Help Collection Contact \n \n https://instagram.com/hh.deutsch?utm_medium=copy_link  ",
    "gmapLink": null,
    "address": "Hamburg, Germany",
    "coords": {
      "lat": 53.55,
      "lng": 10
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
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Hamburg, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 53.55, lng: 10.00 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.25    },    {        \"category\": \"Shelter\",        \"probability\": 0.25    },    {        \"category\": \"Health Services\",        \"probability\": 0.25    },    {        \"category\": \"Transportation\",        \"probability\": 0.25    },    {        \"category\": \"Translation\",        \"probability\": 0.25    },    {        \"category\": \"Legal\",        \"probability\": 0.25    },    {        \"category\": \"Volunteering\",        \"probability\": 0.25    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.25    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 33,
      "type": "message",
      "date": "2022-02-26T22:33:34",
      "edited": "2022-02-26T22:33:51",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "hashtag",
          "text": "#Гамбург"
        },
        " ‼️‼️‼️ALL information and help for refugees in Hamburg. Checked! \n\n",
        {
          "type": "link",
          "text": "https://hilfe-ua.de"
        },
        ""
      ]
    },
    "id": "32",
    "source": "telegram",
    "date": "2022-02-26T22:33:34",
    "sourceMessagePlainText": "#Гамбург  ‼️‼️‼️ALL information and help for refugees in Hamburg. Checked! \n\n https://hilfe-ua.de  ",
    "gmapLink": null,
    "address": "Hamburg",
    "sentiment": {
      "food": 0.2,
      "shelter": 0.2,
      "health_services": 0.2,
      "transportation": 0.2,
      "translation": 0.2,
      "legal": 0.2,
      "volunteering": 0.2,
      "volunteers_needed": 0.2
    },
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Hamburg"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Germany{\"lat\": 53.55,\"lng\": 9.99}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"food\": 0.2,    \"shelter\": 0.2,    \"health_services\": 0.2,    \"transportation\": 0.2,    \"translation\": 0.2,    \"legal\": 0.2,    \"volunteering\": 0.2,    \"volunteers_needed\": 0.2}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Refugees in Hamburg can get help with food, shelter, health services, transportation, translation, legal services, and volunteering through the website hilfe-ua.de."
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", Germany{lat: 53.55,lng: 9.99}",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": "Refugees in Hamburg can get help with food, shelter, health services, transportation, translation, legal services, and volunteering through the website hilfe-ua.de.",
        "error": "extra chars"
      },
      {
        "key": "category",
        "value": "Refugees in Hamburg can get help with food, shelter, health services, transportation, translation, legal services, and volunteering through the website hilfe-uade.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 34,
      "type": "message",
      "date": "2022-02-26T23:24:41",
      "edited": "2022-02-26T23:24:55",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "hashtag",
          "text": "#Оснабрюк"
        },
        "refugee registration \n\nim Rehhagen 8, Bramsche ,49565"
      ]
    },
    "id": "33",
    "source": "telegram",
    "date": "2022-02-26T23:24:41",
    "sourceMessagePlainText": "#Оснабрюк refugee registration \n\nim Rehhagen 8, Bramsche ,49565 ",
    "gmapLink": null,
    "address": "This text is the address of a refugee registration center in Bramsche, Germany.",
    "coords": {
      "lat": 52.273056,
      "lng": 7.5
    },
    "sentiment": {
      "Food": 0.2,
      "Shelter": 0.1,
      "Health Services": 0.05,
      "Transportation": 0.1,
      "Translation": 0.05,
      "Legal": 0.05,
      "Volunteering": 0.2,
      "Volunteers Needed": 0.2
    },
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is the address of a refugee registration center in Bramsche, Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.273056, lng: 7.5 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{  \"Food\": 0.2,  \"Shelter\": 0.1,  \"Health Services\": 0.05,  \"Transportation\": 0.1,  \"Translation\": 0.05,  \"Legal\": 0.05,  \"Volunteering\": 0.2,  \"Volunteers Needed\": 0.2}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Refugee registration"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "Refugee registration",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 35,
      "type": "message",
      "date": "2022-02-26T23:33:29",
      "edited": "2022-02-26T23:34:01",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        {
          "type": "hashtag",
          "text": "#штутгарт"
        },
        " ",
        {
          "type": "hashtag",
          "text": "#помощьштутгарт"
        },
        " ",
        {
          "type": "hashtag",
          "text": "#Stuttgart"
        },
        "\n\nWe greet you!\n\n We, Ukrainian girls and men in Stuttgart and the surrounding area, have joined forces and founded the Help🇺🇦 UKRAINE group!\n\n We have now set up a PayPal donation account.\n\n Purpose of collection: purchase of necessary medicines that are not available in Ukraine today.\n\n PayPal: ",
        {
          "type": "email",
          "text": "helpforukraine22@gmail.com"
        },
        ". (Matthias Schmidt)\n\n Medicines are taken to a warehouse in Poland, then a truck with a special permit immediately crosses the border of our country along the green corridor!\n\nWe work directly with ",
        {
          "type": "link",
          "text": "https://www.plast.org.ua/"
        },
        " Together.\n\nOur strength lies in unity!"
      ]
    },
    "id": "34",
    "source": "telegram",
    "date": "2022-02-26T23:33:29",
    "sourceMessagePlainText": "#штутгарт   #помощьштутгарт   #Stuttgart \n\nWe greet you!\n\n We, Ukrainian girls and men in Stuttgart and the surrounding area, have joined forces and founded the Help🇺🇦 UKRAINE group!\n\n We have now set up a PayPal donation account.\n\n Purpose of collection: purchase of necessary medicines that are not available in Ukraine today.\n\n PayPal:  helpforukraine22@gmail.com . (Matthias Schmidt)\n\n Medicines are taken to a warehouse in Poland, then a truck with a special permit immediately crosses the border of our country along the green corridor!\n\nWe work directly with  https://www.plast.org.ua/  Together.\n\nOur strength lies in unity! ",
    "gmapLink": null,
    "address": "Stuttgart, Germany",
    "coords": {
      "lat": 48.78232,
      "lng": 9.17702
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
        "probability": 0.2
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
        "probability": 0.2
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.2
      }
    ],
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Stuttgart, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 48.78232, lng: 9.17702 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[  {    \"category\": \"Food\",    \"probability\": 0.1  },  {    \"category\": \"Shelter\",    \"probability\": 0.1  },  {    \"category\": \"Health Services\",    \"probability\": 0.2  },  {    \"category\": \"Transportation\",    \"probability\": 0.1  },  {    \"category\": \"Translation\",    \"probability\": 0.1  },  {    \"category\": \"Legal\",    \"probability\": 0.1  },  {    \"category\": \"Volunteering\",    \"probability\": 0.2  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 0.2  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 36,
      "type": "message",
      "date": "2022-02-27T01:16:26",
      "edited": "2022-02-27T01:17:05",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1120,
      "height": 522,
      "text": "‼️‼️‼️Be careful when sending money to strangers"
    },
    "id": "35",
    "source": "telegram",
    "date": "2022-02-27T01:16:26",
    "sourceMessagePlainText": "‼️‼️‼️Be careful when sending money to strangers",
    "address": "This text does not contain a physical location.",
    "sentiment": null,
    "category": "Legal",
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
        "a": ".[    {\"Food\":0.2},    {\"Shelter\":0.2},    {\"Health Services\":0.2},    {\"Transportation\":0.2},    {\"Translation\":0.2},    {\"Legal\":0.2},    {\"Volunteering\":0.2},    {\"Volunteers Needed\":0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Legal"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": "- Legal",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 37,
      "type": "message",
      "date": "2022-02-27T01:34:09",
      "edited": "2022-02-27T01:35:03",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1280,
      "height": 433,
      "text": ""
    },
    "id": "36",
    "source": "telegram",
    "date": "2022-02-27T01:34:09",
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
      "id": 38,
      "type": "message",
      "date": "2022-02-27T06:09:52",
      "edited": "2022-02-27T06:40:50",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Friends, we need help with the transportation of humanitarian aid. The truck could not arrive at 15:00 at the Ring Center Frankfurter Allee 113-117. The car will arrive only in the evening. Now we need to go to the ring center, whoever can, and take boxes and packages at Rosa-Valetti-Str., 2a, 12623 Berlin\n\n‼️‼️‼️‼️Urgent !!!!!!"
    },
    "id": "37",
    "source": "telegram",
    "date": "2022-02-27T06:09:52",
    "sourceMessagePlainText": "Friends, we need help with the transportation of humanitarian aid. The truck could not arrive at 15:00 at the Ring Center Frankfurter Allee 113-117. The car will arrive only in the evening. Now we need to go to the ring center, whoever can, and take boxes and packages at Rosa-Valetti-Str., 2a, 12623 Berlin\n\n‼️‼️‼️‼️Urgent !!!!!!",
    "address": "The truck could not arrive at 15:00 at the Ring Center Frankfurter Allee 113-117. The car will arrive only in the evening. Now we need to go to the ring center, whoever can, and take boxes and packages at Rosa-Valetti-Str., 2a, 12623 Berlin",
    "sentiment": null,
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The truck could not arrive at 15:00 at the Ring Center Frankfurter Allee 113-117. The car will arrive only in the evening. Now we need to go to the ring center, whoever can, and take boxes and packages at Rosa-Valetti-Str., 2a, 12623 Berlin"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "‼️‼️‼️‼️We need volunteers for the following tasks:- Food- Shelter- Health Services- Transportation- Translation- Legal- Volunteering- Volunteers Needed[    {\"Food\": 0.125},    {\"Shelter\": 0.125},    {\"Health Services\": 0.125},    {\"Transportation\": 0.5},    {\"Translation\": 0.125},    {\"Legal\": 0.125},    {\"Volunteering\": 0},    {\"Volunteers Needed\": 1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain latitude and longitude coordinates.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 39,
      "type": "message",
      "date": "2022-02-27T07:09:11",
      "edited": "2022-02-27T07:22:27",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Friends, the warehouse on Rosa Valetti is already full. We found the second one - \n\nImbis an der B1\n",
        {
          "type": "link",
          "text": "https://maps.app.goo.gl/1TtR17HEvmYJxEt68"
        },
        ""
      ]
    },
    "id": "38",
    "source": "telegram",
    "date": "2022-02-27T07:09:11",
    "sourceMessagePlainText": "Friends, the warehouse on Rosa Valetti is already full. We found the second one - \n\nImbis an der B1\n https://maps.app.goo.gl/1TtR17HEvmYJxEt68  ",
    "gmapLink": null,
    "address": "The location is \"Imbis an der B1.\"",
    "coords": {
      "lat": 0,
      "lng": 0
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
        "a": "The location is \"Imbis an der B1.\""
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 0, \"lng\": 0 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "{    \"Food\": 0.1,    \"Shelter\": 0.2,    \"Health Services\": 0.3,    \"Transportation\": 0.4,    \"Translation\": 0.5,    \"Legal\": 0.6,    \"Volunteering\": 0.7,    \"Volunteers Needed\": 0.8}"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 40,
      "type": "message",
      "date": "2022-02-27T07:21:29",
      "edited": "2022-02-27T08:48:50",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Hello. There is a crib and furniture for it. Also baby things. Where to take? Berlin."
    },
    "id": "39",
    "source": "telegram",
    "date": "2022-02-27T07:21:29",
    "sourceMessagePlainText": "Hello. There is a crib and furniture for it. Also baby things. Where to take? Berlin.",
    "address": "Berlin",
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
    "category": "Shelter",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Berlin"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " is located 52.5200° N, 13.4050° E{  \"lat\": 52.5200,  \"lng\": 13.4050}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.25, 0.125, 0.125, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": " is located 52.5200° N, 13.4050° E{  lat: 52.5200,  lng: 13.4050}",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 41,
      "type": "message",
      "date": "2022-02-27T08:09:53",
      "edited": "2022-02-27T08:10:28",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "New warehouse to help with the Ring Center :‼️‼️‼️‼️‼️\n\nJessnerstrasse 33 10247 ‼️‼️‼️‼️‼️"
    },
    "id": "40",
    "source": "telegram",
    "date": "2022-02-27T08:09:53",
    "sourceMessagePlainText": "New warehouse to help with the Ring Center :‼️‼️‼️‼️‼️\n\nJessnerstrasse 33 10247 ‼️‼️‼️‼️‼️",
    "address": "",
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": ""
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "\"lat\": 40.7128, \"lng\": -74.0060{ lat: 40.7128, lng: -74.006 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️‼️"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "lat: 40.7128, lng: -74.0060{ lat: 40.7128, lng: -74.006 }",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 42,
      "type": "message",
      "date": "2022-02-27T23:42:07",
      "edited": "2022-02-27T23:42:23",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "‼️‼️‼️Today at 10:00 we will meet as a focus group to further coordinate the work of the group and volunteers. \n\nSpontaneous fundraisers are currently on pause, as we do not have time to check cars, drivers, where and \n\nHumanitarian aid will leave the 'Help to Ukrainians in Germany' group ONLY with verified LKW and to specific destinations. The Verkhovna Rada is in touch with us, and we will focus only on their requests at the moment.\n \n‼️We do not collect furniture, clothes, toys‼️ But we are looking for volunteers who work with refugee centers to donate what we have ALREADY collected."
    },
    "id": "41",
    "source": "telegram",
    "date": "2022-02-27T23:42:07",
    "sourceMessagePlainText": "‼️‼️‼️Today at 10:00 we will meet as a focus group to further coordinate the work of the group and volunteers. \n\nSpontaneous fundraisers are currently on pause, as we do not have time to check cars, drivers, where and \n\nHumanitarian aid will leave the 'Help to Ukrainians in Germany' group ONLY with verified LKW and to specific destinations. The Verkhovna Rada is in touch with us, and we will focus only on their requests at the moment.\n \n‼️We do not collect furniture, clothes, toys‼️ But we are looking for volunteers who work with refugee centers to donate what we have ALREADY collected.",
    "address": "The location mentioned in the text is Germany.",
    "coords": {
      "lat": 51.165691,
      "lng": 10.451526
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
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The location mentioned in the text is Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.165691, lng: 10.451526 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0    },    {        \"category\": \"Shelter\",        \"probability\": 0    },    {        \"category\": \"Health Services\",        \"probability\": 0    },    {        \"category\": \"Transportation\",        \"probability\": 1    },    {        \"category\": \"Translation\",        \"probability\": 0    },    {        \"category\": \"Legal\",        \"probability\": 0    },    {        \"category\": \"Volunteering\",        \"probability\": 1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 43,
      "type": "message",
      "date": "2022-02-27T23:50:33",
      "edited": "2022-02-28T01:14:13",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "List of NEEDED assistance in Ukraine at the moment"
    },
    "id": "42",
    "source": "telegram",
    "date": "2022-02-27T23:50:33",
    "sourceMessagePlainText": "List of NEEDED assistance in Ukraine at the moment",
    "address": "Ukraine",
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.05
      },
      {
        "category": "Shelter",
        "probability": 0.1
      },
      {
        "category": "Health Services",
        "probability": 0.15
      },
      {
        "category": "Transportation",
        "probability": 0.2
      },
      {
        "category": "Translation",
        "probability": 0.25
      },
      {
        "category": "Legal",
        "probability": 0.3
      },
      {
        "category": "Volunteering",
        "probability": 0.35
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.4
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Ukraine"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Kyiv{ lat: 50.45, lng: 30.523333 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.05    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.15    },    {        \"category\": \"Transportation\",        \"probability\": 0.2    },    {        \"category\": \"Translation\",        \"probability\": 0.25    },    {        \"category\": \"Legal\",        \"probability\": 0.3    },    {        \"category\": \"Volunteering\",        \"probability\": 0.35    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.4    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", Kyiv{ lat: 50.45, lng: 30.523333 }",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 44,
      "type": "message",
      "date": "2022-02-27T23:50:33",
      "edited": "2022-02-27T23:51:34",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "file": "(File not included. Change data exporting settings to download.)",
      "thumbnail": "(File not included. Change data exporting settings to download.)",
      "mime_type": "application/pdf",
      "text": ""
    },
    "id": "43",
    "source": "telegram",
    "date": "2022-02-27T23:50:33",
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
      "id": 45,
      "type": "message",
      "date": "2022-02-28T01:00:37",
      "edited": "2022-02-28T01:00:46",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Warehouse help needed right now in BERLIN!!!\nJessnerstrasse 33 10247\n",
        {
          "type": "link",
          "text": "https://goo.gl/maps/cqqBELjpQoukgAaH6"
        },
        "\n\nCome there, they'll explain everything there"
      ]
    },
    "id": "44",
    "source": "telegram",
    "date": "2022-02-28T01:00:37",
    "sourceMessagePlainText": "Warehouse help needed right now in BERLIN!!!\nJessnerstrasse 33 10247\n https://goo.gl/maps/cqqBELjpQoukgAaH6 \n\nCome there, they'll explain everything there ",
    "gmapLink": "https://goo.gl/maps/cqqBELjpQoukgAaH6",
    "address": "Jessnerstrasse 33 10247, BERLIN",
    "coords": {
      "lat": 52.503564,
      "lng": 13.452294
    },
    "sentiment": [
      {
        "category": "Volunteering",
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Jessnerstrasse 33 10247, BERLIN"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.503564, lng: 13.452294 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"category\":\"Volunteering\",\"probability\":1.0},{\"category\":\"Volunteers Needed\",\"probability\":1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 46,
      "type": "message",
      "date": "2022-02-28T01:41:52",
      "edited": "2022-03-01T04:10:50",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "❌",
        {
          "type": "bold",
          "text": "THIS CHAT IS NO LONGER LINKED TO A CHANNEL"
        },
        "❌\n\n",
        {
          "type": "bold",
          "text": "Go to the new general chat at the link: https://t.me/helpUkraine_Gemany\n\n"
        },
        "Канал ",
        {
          "type": "link",
          "text": "https://t.me/germanyhelpsukraine"
        },
        "remains active"
      ]
    },
    "id": "45",
    "source": "telegram",
    "date": "2022-02-28T01:41:52",
    "sourceMessagePlainText": "❌ THIS CHAT IS NO LONGER LINKED TO A CHANNEL ❌\n\n Go to the new general chat at the link: https://t.me/helpUkraine_Gemany\n\n Канал  https://t.me/germanyhelpsukraine remains active ",
    "gmapLink": null,
    "address": "This text does not contain a physical location.",
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
        "a": "This text does not contain a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain a physical location."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "This chat is no longer linked to a channel. Go to the new general chat at the link: https://t.me/helpUkraine_Gemany. The channel https://t.me/germanyhelpsukraine remains active."
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": "This chat is no longer linked to a channel. Go to the new general chat at the link: https://t.me/helpUkraine_Gemany. The channel https://t.me/germanyhelpsukraine remains active.",
        "error": "extra chars"
      },
      {
        "key": "category",
        "value": "This chat is no longer linked to a channel Go to the new general chat at the link: https://t.me/helpUkraine_Gemany. The channel https://t.me/germanyhelpsukraine remains active.",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 47,
      "type": "message",
      "date": "2022-02-28T02:33:11",
      "edited": "2022-02-28T04:01:22",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Guys, we need 15 people at Jessnerstraße 33 to help with the sorting of humanitarian aid. We need to bring boxes, tape and markers. Write to me",
        {
          "type": "phone",
          "text": "+4917661538449"
        },
        "."
      ]
    },
    "id": "46",
    "source": "telegram",
    "date": "2022-02-28T02:33:11",
    "sourceMessagePlainText": "Guys, we need 15 people at Jessnerstraße 33 to help with the sorting of humanitarian aid. We need to bring boxes, tape and markers. Write to me +4917661538449 . ",
    "gmapLink": null,
    "address": "Jessnerstraße 33",
    "sentiment": [
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Jessnerstraße 33"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", 10247 Berlin, Germany{ lat: 52.5074, lng: 13.4514 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", 10247 Berlin, Germany{ lat: 52.5074, lng: 13.4514 }",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 48,
      "type": "message",
      "date": "2022-02-28T03:00:11",
      "edited": "2022-02-28T03:00:45",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Jessnerstrasse - applications closed! Thank you!"
    },
    "id": "47",
    "source": "telegram",
    "date": "2022-02-28T03:00:11",
    "sourceMessagePlainText": "Jessnerstrasse - applications closed! Thank you!",
    "address": "This text is from Jessnerstrasse in Germany.",
    "coords": {
      "lat": 52.49972,
      "lng": 13.42583
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
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "This text is from Jessnerstrasse in Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.49972, lng: 13.42583 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.1},    {\"category\": \"Shelter\", \"probability\": 0.1},    {\"category\": \"Health Services\", \"probability\": 0.1},    {\"category\": \"Transportation\", \"probability\": 0.1},    {\"category\": \"Translation\", \"probability\": 0.1},    {\"category\": \"Legal\", \"probability\": 0.1},    {\"category\": \"Volunteering\", \"probability\": 0.1},    {\"category\": \"Volunteers Needed\", \"probability\": 0.1}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 49,
      "type": "message",
      "date": "2022-02-28T08:39:27",
      "edited": "2022-02-28T08:39:56",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": "Friends! We help other regional groups with shipments! We have cars! \n\nWe can't purposefully deliver to cities, it's dangerous. Volunteers from the Ukrainian side are already taking them where they can get to"
    },
    "id": "48",
    "source": "telegram",
    "date": "2022-02-28T08:39:27",
    "sourceMessagePlainText": "Friends! We help other regional groups with shipments! We have cars! \n\nWe can't purposefully deliver to cities, it's dangerous. Volunteers from the Ukrainian side are already taking them where they can get to",
    "address": " the people who need themThe text is talking about a city.",
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " the people who need themThe text is talking about a city."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The text is not talking about a city."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " the people who need them.[    {\"Food\": 0.2, \"Shelter\": 0.2, \"Health Services\": 0.2, \"Transportation\": 0.2, \"Translation\": 0.2, \"Legal\": 0.2, \"Volunteering\": 0.2, \"Volunteers Needed\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " the people who need them.Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The text is not talking about a city.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": " the people who need them.Volunteering",
        "error": "extra chars"
      },
      {
        "key": "category",
        "value": " the people who need themVolunteering",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 51,
      "type": "message",
      "date": "2022-02-28T23:19:15",
      "edited": "2022-03-01T00:00:33",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "text": [
        "Please sign up for the list of Berlin volunteers. You will be contacted when help is needed: ",
        {
          "type": "link",
          "text": "https://forms.gle/WQC5Y4XRMW7SZ9KaA"
        },
        ""
      ]
    },
    "id": "49",
    "source": "telegram",
    "date": "2022-02-28T23:19:15",
    "sourceMessagePlainText": "Please sign up for the list of Berlin volunteers. You will be contacted when help is needed:  https://forms.gle/WQC5Y4XRMW7SZ9KaA  ",
    "gmapLink": null,
    "address": "Berlin, Germany",
    "coords": {
      "lat": 52.52,
      "lng": 13.405
    },
    "sentiment": [
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.125,
      0.25,
      0.25
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Berlin, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 52.5200, \"lng\": 13.4050 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.25, 0.25]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 52,
      "type": "message",
      "date": "2022-03-01T04:49:59",
      "edited": "2022-03-01T05:36:56",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": "Cardboard boxes for packing are needed at the humanitarian aid point at Otto-Braun str. 70-72 10178."
    },
    "id": "50",
    "source": "telegram",
    "date": "2022-03-01T04:49:59",
    "sourceMessagePlainText": "Cardboard boxes for packing are needed at the humanitarian aid point at Otto-Braun str. 70-72 10178.",
    "address": "Otto-Braun str. 70-72 10178",
    "sentiment": [
      0.125,
      0.125,
      0,
      0.125,
      0,
      0,
      0.5,
      0.125
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Otto-Braun str. 70-72 10178"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": " Berlin{ lat: 52.518611, lng: 13.401667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0, 0.125, 0, 0, 0.5, 0.125]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": " Berlin{ lat: 52.518611, lng: 13.401667 }",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 53,
      "type": "message",
      "date": "2022-03-01T08:16:42",
      "edited": "2022-03-01T09:20:59",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "Open channel to help Ukraine in Germany:",
        {
          "type": "link",
          "text": "https://t.me/helpUkraine_Gemany"
        },
        ""
      ]
    },
    "id": "51",
    "source": "telegram",
    "date": "2022-03-01T08:16:42",
    "sourceMessagePlainText": "Open channel to help Ukraine in Germany: https://t.me/helpUkraine_Gemany  ",
    "gmapLink": null,
    "address": "Germany",
    "coords": {
      "lat": 51.165691,
      "lng": 10.451526
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
        "a": "Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 51.165691, lng: 10.451526 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"Food\":0.1},{\"Shelter\":0.2},{\"Health Services\":0.3},{\"Transportation\":0.4},{\"Translation\":0.5},{\"Legal\":0.6},{\"Volunteering\":0.7},{\"Volunteers Needed\":0.8}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 54,
      "type": "message",
      "date": "2022-03-01T08:23:34",
      "edited": "2022-03-01T11:15:02",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "The reception point for humanitarian aid at Alexanderplatz in Berlin",
        {
          "type": "link",
          "text": "https://goo.gl/maps/oNvYySLUvz5rHT68A"
        },
        "NECESSARY ITEMS: protective equipment (bulletproof vests, helmets, knee pads, etc.), medicines (list below), sleeping bags, karemats, canned food (not glass). Clothing should NOT be carried yet. Please distribute."
      ]
    },
    "id": "52",
    "source": "telegram",
    "date": "2022-03-01T08:23:34",
    "sourceMessagePlainText": "The reception point for humanitarian aid at Alexanderplatz in Berlin https://goo.gl/maps/oNvYySLUvz5rHT68A NECESSARY ITEMS: protective equipment (bulletproof vests, helmets, knee pads, etc.), medicines (list below), sleeping bags, karemats, canned food (not glass). Clothing should NOT be carried yet. Please distribute. ",
    "gmapLink": "https://goo.gl/maps/oNvYySLUvz5rHT68A",
    "address": "The physical location from the text is Alexanderplatz in Berlin, which is located at https://goo.gl/maps/oNvYySLUvz5rHT68A.",
    "coords": {
      "lat": 52.5219184,
      "lng": 13.4132147
    },
    "sentiment": [
      {
        "category": "Food",
        "probability": 0.14285714285714285
      },
      {
        "category": "Shelter",
        "probability": 0.14285714285714285
      },
      {
        "category": "Health Services",
        "probability": 0.14285714285714285
      },
      {
        "category": "Transportation",
        "probability": 0.14285714285714285
      },
      {
        "category": "Translation",
        "probability": 0.14285714285714285
      },
      {
        "category": "Legal",
        "probability": 0.14285714285714285
      },
      {
        "category": "Volunteering",
        "probability": 0.14285714285714285
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.14285714285714285
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location from the text is Alexanderplatz in Berlin, which is located at https://goo.gl/maps/oNvYySLUvz5rHT68A."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{  \"lat\": 52.5219184,  \"lng\": 13.4132147}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"category\":\"Food\",\"probability\":0.14285714285714285},{\"category\":\"Shelter\",\"probability\":0.14285714285714285},{\"category\":\"Health Services\",\"probability\":0.14285714285714285},{\"category\":\"Transportation\",\"probability\":0.14285714285714285},{\"category\":\"Translation\",\"probability\":0.14285714285714285},{\"category\":\"Legal\",\"probability\":0.14285714285714285},{\"category\":\"Volunteering\",\"probability\":0.14285714285714285},{\"category\":\"Volunteers Needed\",\"probability\":0.14285714285714285}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 55,
      "type": "message",
      "date": "2022-03-01T08:32:17",
      "edited": "2022-03-01T11:47:02",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": "Extended list of essential medicines in several languages"
    },
    "id": "53",
    "source": "telegram",
    "date": "2022-03-01T08:32:17",
    "sourceMessagePlainText": "Extended list of essential medicines in several languages",
    "address": "This text does not contain enough information to extract a physical location.",
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
        "Transportation": 0.05
      },
      {
        "Translation": 0.15
      },
      {
        "Legal": 0.1
      },
      {
        "Volunteering": 0.2
      },
      {
        "Volunteers Needed": 0.05
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
        "a": "[    {\"Food\": 0.2},    {\"Shelter\": 0.1},    {\"Health Services\": 0.3},    {\"Transportation\": 0.05},    {\"Translation\": 0.15},    {\"Legal\": 0.1},    {\"Volunteering\": 0.2},    {\"Volunteers Needed\": 0.05}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain enough information to extract a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 56,
      "type": "message",
      "date": "2022-03-01T08:32:17",
      "edited": "2022-03-01T08:33:30",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "forwarded_from": "Jen",
      "file": "(File not included. Change data exporting settings to download.)",
      "thumbnail": "(File not included. Change data exporting settings to download.)",
      "mime_type": "application/pdf",
      "text": "updated medication list"
    },
    "id": "54",
    "source": "telegram",
    "date": "2022-03-01T08:32:17",
    "sourceMessagePlainText": "updated medication list",
    "address": "The physical location of this text is on a computer or other electronic device.",
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
        "probability": 0.3
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
        "a": "The physical location of this text is on a computer or other electronic device."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.2    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.3    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain latitude and longitude coordinates.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 57,
      "type": "message",
      "date": "2022-03-02T02:12:20",
      "edited": "2022-03-03T14:22:21",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "Friends, We need boxes 📦 to the collection point on Alexander Plats",
        {
          "type": "link",
          "text": "https://goo.gl/maps/Tt8pPDQpRzfFgGHU6"
        },
        "Please bring it when you can. Size doesn't matter. There will be a use for everything!"
      ]
    },
    "id": "55",
    "source": "telegram",
    "date": "2022-03-02T02:12:20",
    "sourceMessagePlainText": "Friends, We need boxes 📦 to the collection point on Alexander Plats https://goo.gl/maps/Tt8pPDQpRzfFgGHU6 Please bring it when you can. Size doesn't matter. There will be a use for everything! ",
    "gmapLink": "https://goo.gl/maps/Tt8pPDQpRzfFgGHU6",
    "address": "The collection point is on Alexander Plats, which is a physical location.",
    "coords": {
      "lat": 59.334591,
      "lng": 18.06324
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
        "a": "The collection point is on Alexander Plats, which is a physical location."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 59.334591, \"lng\": 18.063240 }"
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
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 58,
      "type": "message",
      "date": "2022-03-02T02:27:15",
      "edited": "2022-03-02T02:27:34",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Olena Boiko",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 868,
      "height": 1280,
      "text": ""
    },
    "id": "56",
    "source": "telegram",
    "date": "2022-03-02T02:27:15",
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
      "id": 59,
      "type": "message",
      "date": "2022-03-02T06:28:29",
      "edited": "2022-03-02T07:53:57",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Victor BERLIN",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1280,
      "height": 463,
      "text": [
        "🩺",
        {
          "type": "bold",
          "text": "Free medical care:\n\n"
        },
        {
          "type": "link",
          "text": "https://www.malteser.de/menschen-ohne-krankenversicherung.html"
        },
        "you can contact these medical institutions",
        {
          "type": "bold",
          "text": "no insurance, free"
        },
        " (personally called, asked).\n\nThey provide Hausarzt services, that is, ",
        {
          "type": "bold",
          "text": "family doctor"
        },
        "who can examine you, prescribe medications, refer you to a specialist. For example, he cannot perform operations.\n\n",
        {
          "type": "bold",
          "text": "🐣Pregnant (Berlin)\n"
        },
        "Consultation, prevention without insurance, free\n",
        {
          "type": "link",
          "text": "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/gesundheitsamt/zentrum-fuer-sexuale-gesundheit-und-familienplanung/russ_flyer-zentrum-fk-15x15 .pdf"
        },
        "\n\nMore addresses of medical services of various kinds can be found here:\n",
        {
          "type": "link",
          "text": "http://www.gesundheit-ein-menschenrecht.de/kontaktstellen"
        },
        ""
      ]
    },
    "id": "57",
    "source": "telegram",
    "date": "2022-03-02T06:28:29",
    "sourceMessagePlainText": "🩺 Free medical care:\n\n https://www.malteser.de/menschen-ohne-krankenversicherung.html you can contact these medical institutions no insurance, free  (personally called, asked).\n\nThey provide Hausarzt services, that is,  family doctor who can examine you, prescribe medications, refer you to a specialist. For example, he cannot perform operations.\n\n 🐣Pregnant (Berlin)\n Consultation, prevention without insurance, free\n https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/gesundheitsamt/zentrum-fuer-sexuale-gesundheit-und-familienplanung/russ_flyer-zentrum-fk-15x15 .pdf \n\nMore addresses of medical services of various kinds can be found here:\n http://www.gesundheit-ein-menschenrecht.de/kontaktstellen  ",
    "gmapLink": null,
    "address": "Berlin, Germany",
    "coords": {
      "lat": 52.52,
      "lng": 13.405
    },
    "sentiment": {
      "Food": 0.2,
      "Shelter": 0,
      "Health Services": 0.8,
      "Transportation": 0,
      "Translation": 0,
      "Legal": 0,
      "Volunteering": 0,
      "Volunteers Needed": 0
    },
    "category": "Health Services",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Berlin, Germany"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.5200, lng: 13.4050 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " {    \"Food\": 0.2,    \"Shelter\": 0,    \"Health Services\": 0.8,    \"Transportation\": 0,    \"Translation\": 0,    \"Legal\": 0,    \"Volunteering\": 0,    \"Volunteers Needed\": 0  }"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Health Services"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 60,
      "type": "message",
      "date": "2022-03-02T12:51:04",
      "edited": "2022-03-02T13:13:11",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "Guys! Someone will be able to pick up 65 kg of food here by car tomorrow, closer to dinner,",
        {
          "type": "link",
          "text": "https://goo.gl/maps/dGyZTi8vufwmnVYD9"
        },
        "and bring it to the humanitarian aid collection center here",
        {
          "type": "link",
          "text": "https://goo.gl/maps/jwgZNP6xSwePajhu8"
        },
        " ???"
      ]
    },
    "id": "58",
    "source": "telegram",
    "date": "2022-03-02T12:51:04",
    "sourceMessagePlainText": "Guys! Someone will be able to pick up 65 kg of food here by car tomorrow, closer to dinner, https://goo.gl/maps/dGyZTi8vufwmnVYD9 and bring it to the humanitarian aid collection center here https://goo.gl/maps/jwgZNP6xSwePajhu8  ??? ",
    "gmapLink": "https://goo.gl/maps/dGyZTi8vufwmnVYD9",
    "address": "The first location is Guys!, 65 kg of food by car tomorrow, closer to dinner, https://goo.gl/maps/dGyZTi8vufwmnVYD9. The second location is the humanitarian aid collection center, https://goo.gl/maps/jwgZNP6xSwePajhu8.",
    "sentiment": [
      0.65,
      0.65,
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
        "a": "The first location is Guys!, 65 kg of food by car tomorrow, closer to dinner, https://goo.gl/maps/dGyZTi8vufwmnVYD9. The second location is the humanitarian aid collection center, https://goo.gl/maps/jwgZNP6xSwePajhu8."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The first location is { lat: -33.8688, lng: 151.2093 }. The second location is { lat: -33.8688, lng: 151.2093 }."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.65, 0.65, 0, 0, 0, 0, 0, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Food"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The first location is { lat: -33.8688, lng: 151.2093 }. The second location is { lat: -33.8688, lng: 151.2093 }.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 61,
      "type": "message",
      "date": "2022-03-03T00:04:29",
      "edited": "2022-03-03T00:04:57",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Andrii Boiko",
      "text": "Info. Bus, 56 empty seats. Left Berlin by bus to Przemyśl, Polen. If without incident, it should be around 8 o'clock in the evening. Tomorrow morning people can be picked up."
    },
    "id": "59",
    "source": "telegram",
    "date": "2022-03-03T00:04:29",
    "sourceMessagePlainText": "Info. Bus, 56 empty seats. Left Berlin by bus to Przemyśl, Polen. If without incident, it should be around 8 o'clock in the evening. Tomorrow morning people can be picked up.",
    "address": "The text mentions a bus travelling from Berlin, Germany to Przemyśl, Poland.",
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
        "a": "The text mentions a bus travelling from Berlin, Germany to Przemyśl, Poland."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "Berlin, Germany is located at 52.520008, 13.404954. Przemyśl, Poland is located at 49.782222, 22.769722.{  \"lat\": 52.520008,  \"lng\": 13.404954}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "        [0.125, 0.25, 0, 0.25, 0, 0, 0.25, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "Berlin, Germany is located at 52.520008, 13.404954. Przemyśl, Poland is located at 49.782222, 22.769722.{  lat: 52.520008,  lng: 13.404954}",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 63,
      "type": "message",
      "date": "2022-03-03T02:42:47",
      "edited": "2022-03-03T02:53:49",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Andrii Boiko",
      "reply_to_message_id": 62,
      "text": "At the warehouse - lights out. Already released. Many thanks to all who responded!"
    },
    "id": "60",
    "source": "telegram",
    "date": "2022-03-03T02:42:47",
    "sourceMessagePlainText": "At the warehouse - lights out. Already released. Many thanks to all who responded!",
    "address": "The warehouse is most likely in a commercial or industrial area.",
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
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The warehouse is most likely in a commercial or industrial area."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "This text does not contain latitude and longitude coordinates."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain latitude and longitude coordinates.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 64,
      "type": "message",
      "date": "2022-03-03T03:44:11",
      "edited": "2022-03-03T06:54:15",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Victor BERLIN",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1217,
      "height": 1280,
      "text": [
        "Самые ",
        {
          "type": "bold",
          "text": "first steps"
        },
        " after arriving in Berlin by train\n\nFrom Berlin ",
        {
          "type": "bold",
          "text": "travel to final destination is free\n"
        },
        {
          "type": "link",
          "text": "https://t.me/helpUkraine_Gemany/3682"
        },
        ""
      ]
    },
    "id": "61",
    "source": "telegram",
    "date": "2022-03-03T03:44:11",
    "sourceMessagePlainText": "Самые  first steps  after arriving in Berlin by train\n\nFrom Berlin  travel to final destination is free\n https://t.me/helpUkraine_Gemany/3682  ",
    "gmapLink": null,
    "address": "The physical location is Berlin, Germany.",
    "coords": {
      "lat": 52.52,
      "lng": 13.405
    },
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
        "probability": 0.2
      },
      {
        "category": "Transportation",
        "probability": 0.2
      },
      {
        "category": "Translation",
        "probability": 0.2
      },
      {
        "category": "Legal",
        "probability": 0.2
      },
      {
        "category": "Volunteering",
        "probability": 0.2
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.2
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Berlin, Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.5200, lng: 13.4050 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {\"category\": \"Food\", \"probability\": 0.2},    {\"category\": \"Shelter\", \"probability\": 0.2},    {\"category\": \"Health Services\", \"probability\": 0.2},    {\"category\": \"Transportation\", \"probability\": 0.2},    {\"category\": \"Translation\", \"probability\": 0.2},    {\"category\": \"Legal\", \"probability\": 0.2},    {\"category\": \"Volunteering\", \"probability\": 0.2},    {\"category\": \"Volunteers Needed\", \"probability\": 0.2}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 65,
      "type": "message",
      "date": "2022-03-03T04:34:32",
      "edited": "2022-03-03T05:49:33",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Victor BERLIN",
      "photo": "(File not included. Change data exporting settings to download.)",
      "width": 1233,
      "height": 1280,
      "text": "Just arrived by train in Berlin?"
    },
    "id": "62",
    "source": "telegram",
    "date": "2022-03-03T04:34:32",
    "sourceMessagePlainText": "Just arrived by train in Berlin?",
    "address": "The text does not contain enough information to answer the question.",
    "sentiment": null,
    "category": "Other",
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
        "a": " Here are some helpful tips for finding food, shelter, transportation, and more.[    {\"Food\": 0.14285714285714285},    {\"Shelter\": 0.14285714285714285},    {\"Health Services\": 0.0},    {\"Transportation\": 0.14285714285714285},    {\"Translation\": 0.0},    {\"Legal\": 0.0},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " Looking for a place to stay?Shelter"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The text does not contain enough information to answer the question.",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": " Looking for a place to stay?Shelter",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 66,
      "type": "message",
      "date": "2022-03-03T06:10:20",
      "edited": "2022-03-03T06:13:40",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": "Otto-Braun-Straße 70-72, 10178 Berlin needs plastic containers for food packaging and rodent protection. Please bring them if you can. We would also appreciate food for volunteers working in The point is open until 8 pm Thank you 🙏"
    },
    "id": "63",
    "source": "telegram",
    "date": "2022-03-03T06:10:20",
    "sourceMessagePlainText": "Otto-Braun-Straße 70-72, 10178 Berlin needs plastic containers for food packaging and rodent protection. Please bring them if you can. We would also appreciate food for volunteers working in The point is open until 8 pm Thank you 🙏",
    "address": "Otto-Braun-Straße 70-72, 10178 Berlin",
    "coords": {
      "lat": 52.528611,
      "lng": 13.41111
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Otto-Braun-Straße 70-72, 10178 Berlin"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 52.528611, \"lng\": 13.41111 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "🏼[    {\"category\": \"Food\", \"probability\": 1.0},    {\"category\": \"Shelter\", \"probability\": 0.0},    {\"category\": \"Health Services\", \"probability\": 0.0},    {\"category\": \"Transportation\", \"probability\": 0.0},    {\"category\": \"Translation\", \"probability\": 0.0},    {\"category\": \"Legal\", \"probability\": 0.0},    {\"category\": \"Volunteering\", \"probability\": 1.0},    {\"category\": \"Volunteers Needed\", \"probability\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 67,
      "type": "message",
      "date": "2022-03-04T03:49:00",
      "edited": "2022-03-04T03:49:15",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": "Aid collection point Otto-Braun-Straße 70-72, 10178 Berlin needs volunteers to sort things, open until 20:00. Thank you 🙏"
    },
    "id": "64",
    "source": "telegram",
    "date": "2022-03-04T03:49:00",
    "sourceMessagePlainText": "Aid collection point Otto-Braun-Straße 70-72, 10178 Berlin needs volunteers to sort things, open until 20:00. Thank you 🙏",
    "address": "🏼Otto-Braun-Straße 70-72, 10178 Berlin",
    "sentiment": [
      {
        "category": "Volunteering",
        "probability": 1
      },
      {
        "category": "Volunteers Needed",
        "probability": 1
      }
    ],
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "🏼Otto-Braun-Straße 70-72, 10178 Berlin"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": ", Germany{  \"lat\": 52.528871,  \"lng\": 13.426536}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[{\"category\": \"Volunteering\", \"probability\": 1.0}, {\"category\": \"Volunteers Needed\", \"probability\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": ", Germany{  lat: 52.528871,  lng: 13.426536}",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 68,
      "type": "message",
      "date": "2022-03-04T05:04:06",
      "edited": "2022-03-04T05:10:39",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "A new point for receiving humanitarian aid has opened here",
        {
          "type": "link",
          "text": "https://goo.gl/maps/Vu423azGfK7zzCXA7"
        },
        " Philipp-Pforr-Straße 9A, 16761 (KaroMotors garage) Open Mon-Sat 9:00-16:00 Tel: 0176 566 195 47"
      ]
    },
    "id": "65",
    "source": "telegram",
    "date": "2022-03-04T05:04:06",
    "sourceMessagePlainText": "A new point for receiving humanitarian aid has opened here https://goo.gl/maps/Vu423azGfK7zzCXA7  Philipp-Pforr-Straße 9A, 16761 (KaroMotors garage) Open Mon-Sat 9:00-16:00 Tel: 0176 566 195 47 ",
    "gmapLink": "https://goo.gl/maps/Vu423azGfK7zzCXA7",
    "address": "The physical location is Philipp-Pforr-Straße 9A, 16761 (KaroMotors garage).",
    "coords": {
      "lat": 52.3875,
      "lng": 13.05139
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
    "category": "Food",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is Philipp-Pforr-Straße 9A, 16761 (KaroMotors garage)."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ \"lat\": 52.3875, \"lng\": 13.05139 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.1    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.1    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "- Food"
      }
    ],
    "aiErrors": [
      {
        "key": "category",
        "value": "- Food",
        "error": "extra chars"
      }
    ]
  },
  {
    "sourceData": {
      "id": 69,
      "type": "message",
      "date": "2022-03-04T09:12:04",
      "edited": "2022-03-04T13:24:49",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "Guys, we need a bus to transport the gum aid from the collection point",
        {
          "type": "link",
          "text": "https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7"
        },
        "to Berlin Hbf. Who can drive up within an hour, let me know. I'll write a confirmation in a personal message so as not to drive everyone ;)"
      ]
    },
    "id": "66",
    "source": "telegram",
    "date": "2022-03-04T09:12:04",
    "sourceMessagePlainText": "Guys, we need a bus to transport the gum aid from the collection point https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7 to Berlin Hbf. Who can drive up within an hour, let me know. I'll write a confirmation in a personal message so as not to drive everyone ;) ",
    "gmapLink": "https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7",
    "address": "The collection point is https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7 and the destination is Berlin Hbf.",
    "sentiment": [
      {
        "category": "Transportation",
        "probability": 1
      }
    ],
    "category": "Transportation",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The collection point is https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7 and the destination is Berlin Hbf."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The collection point is https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7 and the destination is Berlin Hbf.{  \"lat\": 52.5170365,  \"lng\": 13.3888599}"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "    [{\"category\": \"Transportation\", \"probability\": 1.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Transportation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The collection point is https://goo.gl/maps/a4Jp9bnfMg1Dp6Wo7 and the destination is Berlin Hbf.{  lat: 52.5170365,  lng: 13.3888599}",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 70,
      "type": "message",
      "date": "2022-03-04T13:09:03",
      "edited": "2022-03-04T13:22:43",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": [
        "Hello everyone! We have created a chat to coordinate volunteers at the humanitarian aid collection point in Haus der Statistik (Otto-Braun-Straße 70-72, building B), 10178 Berlin \nIn the chat in the attached message you will find a schedule table. Enter your names to free timeslots.\nPlease forward to anyone who wants to help!\n \n",
        {
          "type": "link",
          "text": "https://t.me/volunteersberlin"
        },
        ""
      ]
    },
    "id": "67",
    "source": "telegram",
    "date": "2022-03-04T13:09:03",
    "sourceMessagePlainText": "Hello everyone! We have created a chat to coordinate volunteers at the humanitarian aid collection point in Haus der Statistik (Otto-Braun-Straße 70-72, building B), 10178 Berlin \nIn the chat in the attached message you will find a schedule table. Enter your names to free timeslots.\nPlease forward to anyone who wants to help!\n \n https://t.me/volunteersberlin  ",
    "gmapLink": null,
    "address": "Haus der Statistik (Otto-Braun-Straße 70-72, building B), 10178 Berlin",
    "coords": {
      "lat": 52.52787,
      "lng": 13.402335
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
        "probability": 0.6
      },
      {
        "category": "Volunteers Needed",
        "probability": 0.6
      }
    ],
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Haus der Statistik (Otto-Braun-Straße 70-72, building B), 10178 Berlin"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.52787, lng: 13.402335 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.1    },    {        \"category\": \"Shelter\",        \"probability\": 0.1    },    {        \"category\": \"Health Services\",        \"probability\": 0.1    },    {        \"category\": \"Transportation\",        \"probability\": 0.1    },    {        \"category\": \"Translation\",        \"probability\": 0.1    },    {        \"category\": \"Legal\",        \"probability\": 0.1    },    {        \"category\": \"Volunteering\",        \"probability\": 0.6    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.6    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 71,
      "type": "message",
      "date": "2022-03-05T03:13:39",
      "edited": "2022-03-05T17:12:27",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Olena Boiko",
      "text": "Friends! PLEASE DO NOT SEND PEOPLE FOR CLOTHES TO THE Otto-Braun-Str."
    },
    "id": "68",
    "source": "telegram",
    "date": "2022-03-05T03:13:39",
    "sourceMessagePlainText": "Friends! PLEASE DO NOT SEND PEOPLE FOR CLOTHES TO THE Otto-Braun-Str.",
    "address": " 110Otto-Braun-Str. 110",
    "sentiment": null,
    "category": "Other",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": " 110Otto-Braun-Str. 110"
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "52 Berlin{ lat: 52.5027778, lng: 13.3916667 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": " 110. We have enough clothes. We need FOOD, SHELTER, HEALTH SERVICES, TRANSPORTATION, TRANSLATION, LEGAL, VOLUNTEERING. We need VOLUNTEERS to help with TRANSLATION, LEGAL, TRANSPORTATION.[  {    \"category\": \"Food\",    \"probability\": 1  },  {    \"category\": \"Shelter\",    \"probability\": 1  },  {    \"category\": \"Health Services\",    \"probability\": 1  },  {    \"category\": \"Transportation\",    \"probability\": 1  },  {    \"category\": \"Translation\",    \"probability\": 1  },  {    \"category\": \"Legal\",    \"probability\": 1  },  {    \"category\": \"Volunteering\",    \"probability\": 1  },  {    \"category\": \"Volunteers Needed\",    \"probability\": 1  }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": " 110. We are overwhelmed with clothes donations and we can not take in any more. We urgently need people who can speak Arabic and Farsi for interpretation services.Translation"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "52 Berlin{ lat: 52.5027778, lng: 13.3916667 }",
        "error": "invalid coords"
      },
      {
        "key": "category",
        "value": " 110. We are overwhelmed with clothes donations and we can not take in any more. We urgently need people who can speak Arabic and Farsi for interpretation services.Translation",
        "error": "extra chars"
      },
      {
        "key": "category",
        "value": " 110 We are overwhelmed with clothes donations and we can not take in any more. We urgently need people who can speak Arabic and Farsi for interpretation services.Translation",
        "error": "unknown"
      }
    ]
  },
  {
    "sourceData": {
      "id": 72,
      "type": "message",
      "date": "2022-03-05T03:29:18",
      "edited": "2022-03-23T10:58:05",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Victor BERLIN",
      "text": [
        "Answers to the most frequently asked questions will be gladly given to you by our chat bot:",
        {
          "type": "mention",
          "text": "@uahelp_FAQ_bot"
        },
        ""
      ]
    },
    "id": "69",
    "source": "telegram",
    "date": "2022-03-05T03:29:18",
    "sourceMessagePlainText": "Answers to the most frequently asked questions will be gladly given to you by our chat bot: @uahelp_FAQ_bot  ",
    "gmapLink": null,
    "address": "The physical location is not given in the text.",
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
    "category": "Volunteering",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "The physical location is not given in the text."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "The physical location is not given in the text."
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "[    {        \"category\": \"Food\",        \"probability\": 0.125    },    {        \"category\": \"Shelter\",        \"probability\": 0.125    },    {        \"category\": \"Health Services\",        \"probability\": 0.125    },    {        \"category\": \"Transportation\",        \"probability\": 0.125    },    {        \"category\": \"Translation\",        \"probability\": 0.125    },    {        \"category\": \"Legal\",        \"probability\": 0.125    },    {        \"category\": \"Volunteering\",        \"probability\": 0.125    },    {        \"category\": \"Volunteers Needed\",        \"probability\": 0.125    }]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "The physical location is not given in the text.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 73,
      "type": "message",
      "date": "2022-03-05T03:56:34",
      "edited": "2022-03-05T03:57:15",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Kirill",
      "text": "❗️❗️❗️Dear friends! Please do not send people to the humanitarian aid collection point at Otto-Braun-Straße 70-72 to receive clothes. Hbf. We send the sorted things there. Thank you for your understanding!"
    },
    "id": "70",
    "source": "telegram",
    "date": "2022-03-05T03:56:34",
    "sourceMessagePlainText": "❗️❗️❗️Dear friends! Please do not send people to the humanitarian aid collection point at Otto-Braun-Straße 70-72 to receive clothes. Hbf. We send the sorted things there. Thank you for your understanding!",
    "address": "Otto-Braun-Straße 70-72 is in Berlin, Germany.",
    "coords": {
      "lat": 52.5167,
      "lng": 13.3833
    },
    "sentiment": null,
    "category": "Volunteers Needed",
    "aiLog": [
      {
        "q": "Extract physical location from this text: ",
        "a": "Otto-Braun-Straße 70-72 is in Berlin, Germany."
      },
      {
        "q": "Extract latitude and longitude from this text as { lat, lng } JSON object: ",
        "a": "{ lat: 52.5167, lng: 13.3833 }"
      },
      {
        "q": "For each of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    assign the probability based on this text as JSON array:",
        "a": "❗️❗️❗️[    {\"Food\": 0.0},    {\"Shelter\": 0.0},    {\"Health Services\": 0.0},    {\"Transportation\": 0.0},    {\"Translation\": 0.0},    {\"Legal\": 0.0},    {\"Volunteering\": 0.0},    {\"Volunteers Needed\": 0.0}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteers Needed"
      }
    ],
    "aiErrors": []
  },
  {
    "sourceData": {
      "id": 74,
      "type": "message",
      "date": "2022-03-11T01:59:06",
      "edited": "2022-03-18T10:41:37",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Victor BERLIN",
      "text": [
        "We remind you that our channel has a chat in the telegram group: ",
        {
          "type": "link",
          "text": "https://t.me/helpUkraine_Gemany"
        },
        ""
      ]
    },
    "id": "71",
    "source": "telegram",
    "date": "2022-03-11T01:59:06",
    "sourceMessagePlainText": "We remind you that our channel has a chat in the telegram group:  https://t.me/helpUkraine_Gemany  ",
    "gmapLink": null,
    "address": "This text does not contain a physical location.",
    "sentiment": [
      {
        "Food": 0.125
      },
      {
        "Shelter": 0.125
      },
      {
        "Health Services": 0.125
      },
      {
        "Transportation": 0.125
      },
      {
        "Translation": 0.125
      },
      {
        "Legal": 0.125
      },
      {
        "Volunteering": 0.125
      },
      {
        "Volunteers Needed": 0.125
      }
    ],
    "category": "Volunteering",
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
        "a": "[    {\"Food\": 0.125},    {\"Shelter\": 0.125},    {\"Health Services\": 0.125},    {\"Transportation\": 0.125},    {\"Translation\": 0.125},    {\"Legal\": 0.125},    {\"Volunteering\": 0.125},    {\"Volunteers Needed\": 0.125}]"
      },
      {
        "q": "Choose one of those categories:\n\n    - Food\n    - Shelter\n    - Health Services\n    - Transportation\n    - Translation\n    - Legal\n    - Volunteering\n    - Volunteers Needed\n    \n    based on this text:",
        "a": "Volunteering"
      }
    ],
    "aiErrors": [
      {
        "key": "coords",
        "value": "This text does not contain a physical location.",
        "error": "invalid coords"
      }
    ]
  },
  {
    "sourceData": {
      "id": 75,
      "type": "message",
      "date": "2022-04-08T16:10:33",
      "edited": "2022-04-08T16:10:50",
      "from": "Help to Ukrainians in Germany",
      "from_id": "channel1650038103",
      "author": "Victor BERLIN",
      "forwarded_from": "Aida",
      "text": [
        "(English below) \n \n🗼 'Ukraine Lighthouse' - a day of humanity, meetings and direct assistance. \n \n ",
        {
          "type": "bold",
          "text": "Для кого?"
        },
        "Immigrants from Ukraine, Berliners and all comers. \n \n",
        {
          "type": "bold",
          "text": "Date: April 10, 2022 \nTime: 10:00 to 18:00 \nPlace: Markthalle 9, Berlin. \nEntrance is free!"
        },
        "Registration",
        {
          "type": "text_link",
          "text": "тут",
          "href": "https://www.eventbrite.com/e/leuchtturm-ukraine-beacon-of-ukraine-registrierung-308477403217"
        },
        ". \n \nWe created",
        {
          "type": "text_link",
          "text": "подію",
          "href": "https://www.eventbrite.com/e/leuchtturm-ukraine-beacon-of-ukraine-registrierung-308477403217"
        },
        "to which a large number of governmental and non-governmental organizations have been invited so that you can find answers to all your questions when you arrive in Berlin. \n \n",
        {
          "type": "bold",
          "text": "What awaits you? \n"
        },
        "30 stands from non-governmental organizations, where you can get information about volunteering opportunities, as well as talk to yourself and find out how it can be useful. \n \nIn addition, temporary migrants will have the opportunity to receive advice in areas such as: \n- advice on registration, \n- job search, \n- health care, \n- kindergartens, schools and further education, \n- legal advice \n- opening a bank account, \n- language courses, \npsychological support, \n- exhibitions, \n- discussion platform. \n \n🧸 There will be a children's corner at the event! \n \n📃The program will be available soon. Details ",
        {
          "type": "text_link",
          "text": "тут",
          "href": "https://www.instagram.com/leuchtturm_ukraine/"
        },
        ". \n\nОрганізатори: Allianz ukrainischer Organisationen, GermanDream і Alliance4Ukraine\n\n🇬🇧\n\n🗼\"Lighthouse Ukraine\" - a day of humanity, personal encounters, and immediate help. \n\n",
        {
          "type": "bold",
          "text": "For whom?"
        },
        " Refugees from Ukraine, residents of Berlin, and anyone interested in knowing more about Ukraine.\n\n",
        {
          "type": "bold",
          "text": "Date: April 10, 2022 \nTime: 10:00 to 18:00 \nLocation: Markthalle 9, Berlin.\nFree admission! \n"
        },
        "Registration ",
        {
          "type": "text_link",
          "text": "here",
          "href": "https://www.eventbrite.com/e/leuchtturm-ukraine-beacon-of-ukraine-registrierung-308477403217"
        },
        ".\n\nWe have created an encounter with a large number of governmental and non-governmental organizations, where you can find answers to many questions you could have had since your arrival in Berlin.\n\n",
        {
          "type": "bold",
          "text": "What you can expect?\n"
        },
        "30 stands from non-governmental organizations (NGOs) where you can get information about volunteering opportunities, talk with NGOs directly and learn how you can be helpful. In addition, temporary refugees will have a chance to receive advice in such areas as:\n- official registration,\n- job search,\n- healthcare,\n- kindergartens, schools, and further education,\n- legal advice,\n- opening of a bank account,\n- language courses,\n- psychological support,\n- exhibitions,\n- discussion platform.\n\n🧸There will be a children's corner at the event!\n\nThe ",
        {
          "type": "text_link",
          "text": "program",
          "href": "https://www.instagram.com/leuchtturm_ukraine/"
        },
        " will be available soon.\n\nOrganizers: Allianz ukrainischer Organisationen, GermanDream and Alliance4Ukraine"
      ]
    },
    "aiErrors": [
      {
        "key": "category",
        "value": null,
        "error": "empty"
      }
    ],
    "category": "Other"
  }
];
