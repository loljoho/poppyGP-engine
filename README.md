poppyGP-engine
==============

Node.js & Express back-end for [poppyGP-player](https://github.com/loljoho/poppyGP-player)


Overview
--------

 * __Schedule__ - parses `xspf` playlist files and generates `json` schedule
 * __Ergast


 * `xspf` playlist parser
 * 
 * S
   * Converts `xml`-based format into `json`



`api/schedule/`

Structure
---------

__Temporary Application Structure__
```
├── data/
│   ├── playlist.xspf
│   └── example.xspf
├── lib/
│   └── Xspf.js
├── routes/
│   ├── utils/
│   │   ├── ergastService.js
│   │   ├── errorHandler.js
│   │   ├── playlistService.js
│   │   ├── raceDataService.js
│   │   └── scheduleService.js
│   └── index.js
├── test/
│   ├── string.js
│   └── test.js
├── .gitignore
├── index.js
├── package.json
├── NOTES.md
├── OVERVIEW.md
└── README.md

```
