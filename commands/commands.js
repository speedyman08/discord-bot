export const commands = [
    {
      name: "ac-on",
      description: "Turns AC on",
      type: 1,
      options: [
        {
            name: "temperature",
            description: "AC temperature",
            type: 3,
            required: true,
            choices: [
              {
                name: "16c",
                value: "16c"
              },
              {
                name: "17c",
                value: "17c"
              },
              {
                name: "18c",
                value: "18c"
              },
              {
                name: "19c",
                value: "19c"
              },
              {
                name: "20c",
                value: "20c"
              },
              {
                name: "21c",
                value: "21c"
              },
              {
                name: "22c",
                value: "22c"
              },
              {
                name: "23c",
                value: "23c"
              },
              {
                name: "25c",
                value: "25c"
              },
              {
                name: "26c",
                value: "26c"
              },
              {
                name: "27c",
                value: "27c"
              },
              {
                name: "28c",
                value: "28c"
              },
              {
                name: "29c",
                value: "29c"
              },
              {
                name: "30c",
                value: "30c"
              },
              {
                name: "31c",
                value: "31c"
              },
            ]
        },
        {
            name: "time",
            description: "How long to turn the AC on for (in minutes)",
            type: 3,
            required: true,
            choices: [
                {
                    name: "30 min",
                    value: "30"
                },
                {
                    name: "60 min",
                    value: "60"
                },
                {
                    name: "120 min",
                    value: "120"
                },
                {
                    name: "150 min",
                    value: "150"
                },
                {
                    name: "180 min",
                    value: "180"
                },
                {
                    name: "210 min",
                    value: "210"
                },
                {
                    name: "240 min",
                    value: "240"
                },
                {
                    name: "270 min",
                    value: "270"
                },
                {
                    name: "300 min",
                    value: "300"
                },
                {
                    name: "330 min",
                    value: "330"
                },
                {
                    name: "360 min",
                    value: "360"
                },
                {
                    name: "390 min",
                    value: "390"
                },
                {
                    name: "420 min",
                    value: "420"
                },
                {
                    name: "450 min",
                    value: "450"
                },
                {
                    name: "480 min",
                    value: "480"
                },
                {
                    name: "510 min",
                    value: "510"
                },
                {
                    name: "540 min",
                    value: "540"
                },
                {
                    name: "570 min",
                    value: "570"
                },
                {
                    name: "600 min",
                    value: "600"
                },
                {
                    name: "630 min",
                    value: "630"
                },
                {
                    name: "660 min",
                    value: "660"
                },
                {
                    name: "690 min",
                    value: "690"
                },
                {
                    name: "720 min",
                    value: "720"
                },
            ]
        },
        {
            name: "mode",
            description: "hot or cold?",
            type: 3,
            required: true,
            choices: [
                {
                    name: "heat",
                    value: "heat"
                },
                {
                    name: "cool",
                    value: "cool"
                }
            ]
        }
      ]
    },
    {
      name: "ac-off",
      description: "Turns AC off",
      type: 1
    }
  ];