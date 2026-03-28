const indicatorMeta = [
  {
    key: "Score_GOV_VDem_LibDem",
    label: "V-Dem Liberal",
    title: "V-Dem Liberal Democracy",
    description: "Liberal democracy performance.",
    scaleHint: "Higher scores suggest stronger liberal democracy.",
    iconSrc: "https://v-dem.net/static/website/img/logo.3a331ab52b88.svg",
    iconAlt: "V-Dem logo",
    firstYear: 1990,
    direction: "Higher is better",
  },
  {
    key: "Score_GOV_EIU_Democracy",
    label: "EIU Democracy",
    title: "Economist Intelligence Unit Democracy Index",
    description: "Democratic quality and pluralism.",
    scaleHint: "Higher scores suggest more democratic quality.",
    iconSrc: "https://www.eiu.com/n/wp-content/themes/eiu/dist/images/Economist_Intelligence_EIU_horizontal.svg",
    iconAlt: "Economist Intelligence Unit logo",
    firstYear: 2006,
    direction: "Higher is better",
  },
  {
    key: "Score_GOV_IIAG",
    label: "IIAG",
    title: "Ibrahim Index of African Governance",
    description: "Broad governance performance.",
    scaleHint: "Higher scores suggest stronger governance.",
    iconSrc: "https://mo.ibrahim.foundation/themes/custom/mif2/assets/img/MIF-logo.svg",
    iconAlt: "Mo Ibrahim Foundation logo",
    firstYear: 2000,
    direction: "Higher is better",
  },
  {
    key: "Score_GOV_WGI_GovEffect",
    label: "WGI Effectiveness",
    title: "World Governance Indicators Government Effectiveness",
    description: "State capacity and service delivery.",
    scaleHint: "Higher scores suggest stronger institutions.",
    iconSrc: "https://www.worldbank.org/content/dam/wbr-redesign/logos/wbg-favicon.png",
    iconAlt: "World Bank logo",
    firstYear: 1996,
    direction: "Higher is better",
  },
  {
    key: "Score_CPI_Scores_Long",
    label: "Corruption",
    title: "Corruption Perceptions Index",
    description: "Perceived public-sector corruption.",
    scaleHint: "Higher scores generally indicate lower corruption.",
    iconSrc: "https://www.transparency.org/assets/meta/favicon-32x32.png",
    iconAlt: "Transparency International logo",
    firstYear: 1995,
    direction: "Higher is better",
  },
  {
    key: "Score_GOV_ACLED_Conflict",
    label: "ACLED Conflict",
    title: "ACLED Conflict Intensity",
    description: "Conflict intensity and exposure.",
    scaleHint: "Read relative differences carefully across countries.",
    iconSrc: "https://acleddata.com/themes/custom/acled/assets/favicon/favicon-32x32.png",
    iconAlt: "ACLED logo",
    firstYear: 1997,
    direction: "Higher is worse",
  },
  {
    key: "Score_GOV_UCDP_Conflict",
    label: "UCDP Conflict",
    title: "UCDP Conflict Intensity",
    description: "Conflict intensity from UCDP.",
    scaleHint: "Read relative differences carefully across countries.",
    iconSrc: "https://ucdp.uu.se/favicon.ico",
    iconAlt: "UCDP logo",
    firstYear: 1990,
    direction: "Higher is worse",
  },
];

const isoByCountry = {
  Algeria: "DZA",
  Angola: "AGO",
  Benin: "BEN",
  Botswana: "BWA",
  "Burkina Faso": "BFA",
  Burundi: "BDI",
  "Cabo Verde": "CPV",
  Cameroon: "CMR",
  "Central African Republic": "CAF",
  Chad: "TCD",
  Comoros: "COM",
  "Republic of the Congo": "COG",
  "Democratic Republic of the Congo": "COD",
  "Cote d'Ivoire": "CIV",
  Djibouti: "DJI",
  Egypt: "EGY",
  "Equatorial Guinea": "GNQ",
  Eritrea: "ERI",
  Eswatini: "SWZ",
  Ethiopia: "ETH",
  Gabon: "GAB",
  Gambia: "GMB",
  Ghana: "GHA",
  Guinea: "GIN",
  "Guinea-Bissau": "GNB",
  Kenya: "KEN",
  Lesotho: "LSO",
  Liberia: "LBR",
  Libya: "LBY",
  Madagascar: "MDG",
  Malawi: "MWI",
  Mali: "MLI",
  Mauritania: "MRT",
  Mauritius: "MUS",
  Morocco: "MAR",
  Mozambique: "MOZ",
  Namibia: "NAM",
  Niger: "NER",
  Nigeria: "NGA",
  Rwanda: "RWA",
  "Sao Tome and Principe": "STP",
  Senegal: "SEN",
  Seychelles: "SYC",
  "Sierra Leone": "SLE",
  Somalia: "SOM",
  "South Africa": "ZAF",
  "South Sudan": "SSD",
  Sudan: "SDN",
  Tanzania: "TZA",
  Togo: "TGO",
  Tunisia: "TUN",
  Uganda: "UGA",
  Zambia: "ZMB",
  Zimbabwe: "ZWE",
};

const countryAliases = {
  Congo: "Republic of the Congo",
  "Congo, Rep.": "Republic of the Congo",
  "Congo, Dem. Rep.": "Democratic Republic of the Congo",
  "Democratic Republic of the Congo": "Democratic Republic of the Congo",
};

const regionByCountry = {
  Algeria: "North Africa",
  Angola: "Southern Africa",
  Benin: "West Africa",
  Botswana: "Southern Africa",
  "Burkina Faso": "West Africa",
  Burundi: "East Africa",
  "Cabo Verde": "West Africa",
  Cameroon: "Central Africa",
  "Central African Republic": "Central Africa",
  Chad: "Central Africa",
  Comoros: "East Africa",
  "Republic of the Congo": "Central Africa",
  "Democratic Republic of the Congo": "Central Africa",
  "Cote d'Ivoire": "West Africa",
  Djibouti: "East Africa",
  Egypt: "North Africa",
  "Equatorial Guinea": "Central Africa",
  Eritrea: "East Africa",
  Eswatini: "Southern Africa",
  Ethiopia: "East Africa",
  Gabon: "Central Africa",
  Gambia: "West Africa",
  Ghana: "West Africa",
  Guinea: "West Africa",
  "Guinea-Bissau": "West Africa",
  Kenya: "East Africa",
  Lesotho: "Southern Africa",
  Liberia: "West Africa",
  Libya: "North Africa",
  Madagascar: "Southern Africa",
  Malawi: "Southern Africa",
  Mali: "West Africa",
  Mauritania: "West Africa",
  Mauritius: "Southern Africa",
  Morocco: "North Africa",
  Mozambique: "Southern Africa",
  Namibia: "Southern Africa",
  Niger: "West Africa",
  Nigeria: "West Africa",
  Rwanda: "East Africa",
  "Sao Tome and Principe": "Central Africa",
  Senegal: "West Africa",
  Seychelles: "East Africa",
  "Sierra Leone": "West Africa",
  Somalia: "East Africa",
  "South Africa": "Southern Africa",
  "South Sudan": "East Africa",
  Sudan: "North Africa",
  Tanzania: "East Africa",
  Togo: "West Africa",
  Tunisia: "North Africa",
  Uganda: "East Africa",
  Zambia: "Southern Africa",
  Zimbabwe: "Southern Africa",
};

const independenceByCountry = {
  Algeria: "5 July 1962",
  Angola: "11 November 1975",
  Benin: "1 August 1960",
  Botswana: "30 September 1966",
  "Burkina Faso": "5 August 1960",
  Burundi: "1 July 1962",
  Cameroon: "1 January 1960",
  "Cabo Verde": "5 July 1975",
  "Central African Republic": "13 August 1960",
  Chad: "11 August 1960",
  Comoros: "6 July 1975",
  "Republic of the Congo": "15 August 1960",
  "Democratic Republic of the Congo": "30 June 1960",
  "Cote d'Ivoire": "7 August 1960",
  Djibouti: "27 June 1977",
  Egypt: "28 February 1922",
  "Equatorial Guinea": "12 October 1968",
  Eritrea: "24 May 1993",
  Ethiopia: "Over 2000 years; never colonized",
  Gabon: "17 August 1960",
  Gambia: "18 February 1965",
  Ghana: "6 March 1957",
  Guinea: "2 October 1958",
  "Guinea-Bissau": "24 September 1973",
  Kenya: "12 December 1963",
  Lesotho: "4 October 1966",
  Liberia: "26 July 1847",
  Libya: "24 December 1951",
  Madagascar: "26 June 1960",
  Malawi: "6 July 1964",
  Mali: "22 September 1960",
  Mauritania: "28 November 1960",
  Mauritius: "12 March 1968",
  Morocco: "2 March 1956",
  Mozambique: "25 June 1975",
  Namibia: "21 March 1990",
  Niger: "3 August 1960",
  Nigeria: "1 October 1960",
  Rwanda: "1 July 1962",
  "Sao Tome and Principe": "12 July 1975",
  Senegal: "4 April 1960",
  Seychelles: "29 June 1976",
  "Sierra Leone": "27 April 1961",
  Somalia: "1 July 1960",
  "South Africa": "11 December 1931; April 1994",
  "South Sudan": "Not listed in the PEN Global source",
  Sudan: "1 January 1956",
  Tanzania: "26 April 1964",
  Togo: "27 April 1960",
  Tunisia: "20 March 1956",
  Uganda: "9 October 1962",
  Zambia: "24 October 1964",
  Zimbabwe: "18 April 1980",
  Eswatini: "6 September 1968",
};

const populationByCountry = {
  Algeria: "48,028,300",
  Angola: "40,215,200",
  Benin: "15,170,400",
  Botswana: "2,603,390",
  "Burkina Faso": "24,601,700",
  Burundi: "14,729,200",
  "Cabo Verde": "529,630",
  Cameroon: "30,640,800",
  "Central African Republic": "5,698,980",
  Chad: "21,560,400",
  Comoros: "899,010",
  "Republic of the Congo": "6,637,780",
  "Democratic Republic of the Congo": "116,452,000",
  "Cote d'Ivoire": "33,494,300",
  Djibouti: "1,199,460",
  Egypt: "120,101,000",
  "Equatorial Guinea": "1,984,470",
  Eritrea: "3,682,670",
  Eswatini: "1,269,860",
  Ethiopia: "138,902,000",
  Gabon: "2,647,400",
  Gambia: "2,884,080",
  Ghana: "35,697,600",
  Guinea: "15,442,000",
  "Guinea-Bissau": "2,297,810",
  Kenya: "58,636,400",
  Lesotho: "2,389,340",
  Liberia: "5,853,950",
  Libya: "7,539,850",
  Madagascar: "33,522,100",
  Malawi: "22,785,500",
  Mali: "25,932,300",
  Mauritania: "5,461,320",
  Mauritius: "1,265,060",
  Morocco: "38,762,400",
  Mozambique: "36,639,900",
  Namibia: "3,153,250",
  Niger: "28,814,900",
  Nigeria: "242,432,000",
  Rwanda: "14,889,700",
  "Sao Tome and Principe": "244,994",
  Senegal: "19,366,500",
  Seychelles: "134,959",
  "Sierra Leone": "8,996,740",
  Somalia: "20,305,900",
  "South Africa": "65,453,100",
  "South Sudan": "12,436,000",
  Sudan: "53,282,700",
  Tanzania: "72,563,800",
  Togo: "9,930,920",
  Tunisia: "12,415,100",
  Uganda: "52,761,500",
  Zambia: "22,521,900",
  Zimbabwe: "17,273,600",
};

const capitalByCountry = {
  Algeria: "Algiers",
  Angola: "Luanda",
  Benin: "Porto-Novo",
  Botswana: "Gaborone",
  "Burkina Faso": "Ouagadougou",
  Burundi: "Bujumbura",
  "Cabo Verde": "Praia",
  Cameroon: "Yaounde",
  "Central African Republic": "Bangui",
  Chad: "N'Djamena",
  Comoros: "Moroni",
  "Republic of the Congo": "Brazzaville",
  "Democratic Republic of the Congo": "Not available from Whereig source",
  "Cote d'Ivoire": "Yamoussoukro",
  Djibouti: "Djibouti",
  Egypt: "Cairo",
  "Equatorial Guinea": "Malabo",
  Eritrea: "Asmara",
  Eswatini: "Mbabane and Lobamba",
  Ethiopia: "Addis Ababa",
  Gabon: "Libreville",
  Gambia: "Banjul",
  Ghana: "Accra",
  Guinea: "Conakry",
  "Guinea-Bissau": "Bissau",
  Kenya: "Nairobi",
  Lesotho: "Maseru",
  Liberia: "Monrovia",
  Libya: "Tripoli",
  Madagascar: "Antananarivo",
  Malawi: "Lilongwe",
  Mali: "Bamako",
  Mauritania: "Nouakchott",
  Mauritius: "Port Louis",
  Morocco: "Rabat",
  Mozambique: "Maputo",
  Namibia: "Windhoek",
  Niger: "Niamey",
  Nigeria: "Abuja",
  Rwanda: "Kigali",
  "Sao Tome and Principe": "Sao Tome",
  Senegal: "Dakar",
  Seychelles: "Victoria",
  "Sierra Leone": "Not available from Whereig source",
  Somalia: "Mogadishu",
  "South Africa": "Cape Town (Legislative), Pretoria (Administrative), and Bloemfontein (Judicial)",
  "South Sudan": "Not available from Whereig source",
  Sudan: "Not available from Whereig source",
  Tanzania: "Dar es Salaam",
  Togo: "Lome",
  Tunisia: "Tunis",
  Uganda: "Kampala",
  Zambia: "Lusaka",
  Zimbabwe: "Harare",
};

const incomeGroupByCountry = {
  Algeria: "Upper-middle income",
  Angola: "Lower-middle income",
  Benin: "Lower-middle income",
  Botswana: "Upper-middle income",
  "Burkina Faso": "Low income",
  Burundi: "Low income",
  "Cabo Verde": "Upper-middle income",
  Cameroon: "Lower-middle income",
  "Central African Republic": "Low income",
  Chad: "Low income",
  Comoros: "Lower-middle income",
  "Republic of the Congo": "Lower-middle income",
  "Democratic Republic of the Congo": "Low income",
  "Cote d'Ivoire": "Lower-middle income",
  Djibouti: "Lower-middle income",
  Egypt: "Lower-middle income",
  "Equatorial Guinea": "Upper-middle income",
  Eritrea: "Low income",
  Eswatini: "Lower-middle income",
  Ethiopia: "Temporarily unclassified for FY2026",
  Gabon: "Upper-middle income",
  Gambia: "Low income",
  Ghana: "Lower-middle income",
  Guinea: "Lower-middle income",
  "Guinea-Bissau": "Low income",
  Kenya: "Lower-middle income",
  Lesotho: "Lower-middle income",
  Liberia: "Low income",
  Libya: "Upper-middle income",
  Madagascar: "Low income",
  Malawi: "Low income",
  Mali: "Low income",
  Mauritania: "Lower-middle income",
  Mauritius: "Upper-middle income",
  Morocco: "Lower-middle income",
  Mozambique: "Low income",
  Namibia: "Lower-middle income",
  Niger: "Low income",
  Nigeria: "Lower-middle income",
  Rwanda: "Low income",
  "Sao Tome and Principe": "Lower-middle income",
  Senegal: "Lower-middle income",
  Seychelles: "High income",
  "Sierra Leone": "Low income",
  Somalia: "Low income",
  "South Africa": "Upper-middle income",
  "South Sudan": "Low income",
  Sudan: "Low income",
  Tanzania: "Lower-middle income",
  Togo: "Low income",
  Tunisia: "Lower-middle income",
  Uganda: "Low income",
  Zambia: "Lower-middle income",
  Zimbabwe: "Lower-middle income",
};

const recentNationalElectionByCountry = {
  Algeria: "2024 - 2024 Algeria Presidential Election: 7th September, 2024",
  Angola: "Not available from African Elections",
  Benin: "Not available from African Elections",
  Botswana: "Not available from African Elections",
  "Burkina Faso": "Not available from African Elections",
  Burundi: "Not available from African Elections",
  Cameroon: "2025 - Cameroon Presidential Election 2025: 12th October, 2025",
  "Cabo Verde": "Not available from African Elections",
  "Central African Republic": "Not available from African Elections",
  Chad: "Not available from African Elections",
  Comoros: "2024 - 2024 Comoros Presidential Election: 14th January, 2024",
  "Republic of the Congo": "Not available from African Elections",
  "Democratic Republic of the Congo": "2023 - 2023 Democratic Republic of Congo General Election: 20th December, 2023",
  "Cote d'Ivoire": "2025 - 2025 Cote d'Ivoire Presidential Elections: 25th October, 2025",
  Djibouti: "Not available from African Elections",
  Egypt: "2023 - 2023 Egypt Presidential Elections: 1st December, 2023",
  "Equatorial Guinea": "Not available from African Elections",
  Eritrea: "Not available from African Elections",
  Ethiopia: "Not available from African Elections",
  Gabon: "Not available from African Elections",
  Gambia: "Not available from African Elections",
  Ghana: "2024 - 2024 General Elections: 7th December, 2024",
  Guinea: "Not available from African Elections",
  "Guinea-Bissau": "Not available from African Elections",
  Kenya: "Not available from African Elections",
  Lesotho: "Not available from African Elections",
  Liberia: "Not available from African Elections",
  Libya: "Not available from African Elections",
  Madagascar: "Not available from African Elections",
  Malawi: "2025 - General Election 2025: 16th September, 2025",
  Mali: "Not available from African Elections",
  Mauritania: "Not available from African Elections",
  Mauritius: "Not available from African Elections",
  Morocco: "Not available from African Elections",
  Mozambique: "2024 - 2024 Mozambican Presidential Election: 9th October, 2024",
  Namibia: "Not available from African Elections",
  Niger: "Not available from African Elections",
  Nigeria: "Not available from African Elections",
  Rwanda: "Not available from African Elections",
  "Sao Tome and Principe": "Not available from African Elections",
  Senegal: "2024 - 2024 Senegal Presidential Election: 5th March, 2024",
  Seychelles: "2025 - Seychelles Presidential Election 2025: 9th October, 2025",
  "Sierra Leone": "Not available from African Elections",
  Somalia: "Not available from African Elections",
  "South Africa": "Not available from African Elections",
  "South Sudan": "Not available from African Elections",
  Sudan: "Not available from African Elections",
  Tanzania: "Not available from African Elections",
  Togo: "Not available from African Elections",
  Tunisia: "2024 - 2024 Tunisia Presidential Election: 6th October, 2024",
  Uganda: "Not available from African Elections",
  Zambia: "Not available from African Elections",
  Zimbabwe: "Not available from African Elections",
  Eswatini: "Not available from African Elections",
};

const state = {
  activeTab: "africa",
  selectedIndicator: indicatorMeta[0].key,
  selectedYear: 1990,
  selectedCountry: null,
  selectedProfileCountry: null,
  compareMode: "africa",
  compareCountry: null,
  selectedProfileSummaryIndicator: null,
  hoverProfileSummaryIndicator: null,
  selectedAfroCountry: null,
  selectedAfroIndicator: "Score_CPI_Scores_Long",
  showRollingAverage: false,
  playing: false,
  playbackHandle: null,
  mapBound: false,
  profileCache: {},
  profileRequestCountry: null,
};

const chartConfig = {
  responsive: true,
  displayModeBar: false,
};

const themeColors = {
  terracotta: "#c95d31",
  terracottaDark: "#8d3b1a",
  accentDark: "#8d3b1a",
  olive: "#7a8d58",
  oliveDark: "#5f7144",
  sage: "#8fa77a",
  rust: "#a04b2b",
  rustSoft: "#c86b40",
  gold: "#cfab62",
  goldSoft: "#e3c78e",
  noData: "#b7b2a5",
  textStrong: "#13211c",
  textMuted: "#556258",
  panelPlot: "rgba(250,244,236,0.7)",
  panelPlotSoft: "rgba(250,244,236,0.5)",
  grid: "rgba(27,45,37,0.1)",
  borderSoft: "rgba(27,45,37,0.12)",
  mapSea: "#d8e1d7",
  mapLand: "#f1e6d8",
  mapRamp: [
    [0, "#f3e0bf"],
    [0.35, "#ddb67a"],
    [0.68, "#cf8453"],
    [1, "#a54a28"],
  ],
};

const afrobarometerData = window.AFROBAROMETER_DATA || {};

const afrobarometerIndicatorMap = {
  Score_CPI_Scores_Long: {
    title: "CPI linked to Afrobarometer corruption",
    description: "Afrobarometer levels of corruption.",
    type: "single",
    metrics: [{ key: "corruption", label: "Levels of corruption" }],
  },
  Score_GOV_EIU_Democracy: {
    title: "EIU democracy linked to Afrobarometer democracy views",
    description: "Afrobarometer extent of democracy and satisfaction with democracy.",
    type: "groupedMetrics",
    metrics: [
      { key: "extent_democracy", label: "Extent of democracy" },
      { key: "satisfaction_democracy", label: "Satisfaction with democracy" },
    ],
  },
  Score_GOV_VDem_LibDem: {
    title: "V-Dem democracy linked to Afrobarometer democracy views",
    description: "Afrobarometer extent of democracy and satisfaction with democracy.",
    type: "groupedMetrics",
    metrics: [
      { key: "extent_democracy", label: "Extent of democracy" },
      { key: "satisfaction_democracy", label: "Satisfaction with democracy" },
    ],
  },
  Score_GOV_IIAG: {
    title: "IIAG governance linked to country direction",
    description: "Afrobarometer overall direction of the country.",
    type: "single",
    metrics: [{ key: "direction_country", label: "Overall direction of the country" }],
  },
  Score_GOV_ACLED_Conflict: {
    title: "ACLED linked to government performance on conflict",
    description: "Afrobarometer ratings of government handling of violent conflict.",
    type: "single",
    metrics: [{ key: "conflict_handling", label: "Government performance on conflict" }],
  },
  Score_GOV_UCDP_Conflict: {
    title: "UCDP linked to government performance on conflict",
    description: "Afrobarometer ratings of government handling of violent conflict.",
    type: "single",
    metrics: [{ key: "conflict_handling", label: "Government performance on conflict" }],
  },
  Score_GOV_WGI_GovEffect: {
    title: "Government effectiveness linked to institutional trust",
    description: "Afrobarometer trust in the president, police, parliament, army, and courts of law.",
    type: "group",
    metrics: [
      { key: "trust_president", label: "President" },
      { key: "trust_police", label: "Police" },
      { key: "trust_parliament", label: "Parliament" },
      { key: "trust_army", label: "Army" },
      { key: "trust_courts", label: "Courts of law" },
    ],
  },
};

const afrobarometerCardDefinitions = [
  {
    key: "Score_CPI_Scores_Long",
    indicatorKeys: ["Score_CPI_Scores_Long"],
    label: "Corruption",
  },
  {
    key: "democracy_combined",
    indicatorKeys: ["Score_GOV_EIU_Democracy", "Score_GOV_VDem_LibDem"],
    label: "EIU / V-Dem democracy",
  },
  {
    key: "Score_GOV_IIAG",
    indicatorKeys: ["Score_GOV_IIAG"],
    label: "IIAG governance",
  },
  {
    key: "conflict_combined",
    indicatorKeys: ["Score_GOV_ACLED_Conflict", "Score_GOV_UCDP_Conflict"],
    label: "ACLED / UCDP conflict",
  },
  {
    key: "Score_GOV_WGI_GovEffect",
    indicatorKeys: ["Score_GOV_WGI_GovEffect"],
    label: "Government effectiveness",
  },
];

const responseOrderByMetric = {
  corruption: ["Increased a lot", "Increased somewhat", "Stayed the same", "Decreased somewhat", "Decreased a lot"],
  extent_democracy: ["Not a democracy", "A democracy; with major problems", "A democracy; but with minor problems", "A full democracy"],
  satisfaction_democracy: ["The country is not a democracy", "Not at all satisfied", "Not very satisfied", "Fairly satisfied", "Very satisfied"],
  direction_country: ["Going in the wrong direction", "Going in the right direction"],
  conflict_handling: ["Very badly", "Fairly badly", "Fairly well", "Very well"],
  trust_president: ["Not at all", "Just a little", "Somewhat", "A lot"],
  trust_police: ["Not at all", "Just a little", "Somewhat", "A lot"],
  trust_parliament: ["Not at all", "Just a little", "Somewhat", "A lot"],
  trust_army: ["Not at all", "Just a little", "Somewhat", "A lot"],
  trust_courts: ["Not at all", "Just a little", "Somewhat", "A lot"],
};

const afroQuestionTextConfig = {
  extent_democracy: {
    responseLabels: {
      "Not a democracy": "Not a democracy",
      "A democracy; with major problems": "Democracy with major problems",
      "A democracy; but with minor problems": "Democracy with minor problems",
      "A full democracy": "Full democracy",
    },
  },
  satisfaction_democracy: {
    responseLabels: {
      "The country is not a democracy": "Not a democracy",
      "Not at all satisfied": "Not at all satisfied",
      "Not very satisfied": "Not very satisfied",
      "Fairly satisfied": "Fairly satisfied",
      "Very satisfied": "Very satisfied",
    },
  },
};

const surveyYearLabel = "Afrobarometer Round 10 (2024/2025)";

const responseScaleByMetric = {
  corruption: [
    { label: "Increased a lot", side: "negative", color: themeColors.rust },
    { label: "Increased somewhat", side: "negative", color: themeColors.rustSoft },
    { label: "Stayed the same", side: "neutral", color: themeColors.gold },
    { label: "Decreased somewhat", side: "positive", color: themeColors.sage },
    { label: "Decreased a lot", side: "positive", color: themeColors.oliveDark },
  ],
  extent_democracy: [
    { label: "Not a democracy", side: "negative", color: themeColors.rust },
    { label: "A democracy; with major problems", side: "negative", color: themeColors.rustSoft },
    { label: "A democracy; but with minor problems", side: "positive", color: themeColors.sage },
    { label: "A full democracy", side: "positive", color: themeColors.oliveDark },
  ],
  satisfaction_democracy: [
    { label: "The country is not a democracy", side: "negative", color: themeColors.rust },
    { label: "Not at all satisfied", side: "negative", color: themeColors.rust },
    { label: "Not very satisfied", side: "negative", color: themeColors.rustSoft },
    { label: "Fairly satisfied", side: "positive", color: themeColors.sage },
    { label: "Very satisfied", side: "positive", color: themeColors.oliveDark },
  ],
  direction_country: [
    { label: "Going in the wrong direction", side: "negative", color: themeColors.rust },
    { label: "Going in the right direction", side: "positive", color: themeColors.oliveDark },
  ],
  conflict_handling: [
    { label: "Very badly", side: "negative", color: themeColors.rust },
    { label: "Fairly badly", side: "negative", color: themeColors.rustSoft },
    { label: "Fairly well", side: "positive", color: themeColors.sage },
    { label: "Very well", side: "positive", color: themeColors.oliveDark },
  ],
  trust_president: [
    { label: "Not at all", side: "negative", color: themeColors.rust },
    { label: "Just a little", side: "negative", color: themeColors.rustSoft },
    { label: "Somewhat", side: "positive", color: themeColors.sage },
    { label: "A lot", side: "positive", color: themeColors.oliveDark },
  ],
  trust_police: [
    { label: "Not at all", side: "negative", color: themeColors.rust },
    { label: "Just a little", side: "negative", color: themeColors.rustSoft },
    { label: "Somewhat", side: "positive", color: themeColors.sage },
    { label: "A lot", side: "positive", color: themeColors.oliveDark },
  ],
  trust_parliament: [
    { label: "Not at all", side: "negative", color: themeColors.rust },
    { label: "Just a little", side: "negative", color: themeColors.rustSoft },
    { label: "Somewhat", side: "positive", color: themeColors.sage },
    { label: "A lot", side: "positive", color: themeColors.oliveDark },
  ],
  trust_army: [
    { label: "Not at all", side: "negative", color: themeColors.rust },
    { label: "Just a little", side: "negative", color: themeColors.rustSoft },
    { label: "Somewhat", side: "positive", color: themeColors.sage },
    { label: "A lot", side: "positive", color: themeColors.oliveDark },
  ],
  trust_courts: [
    { label: "Not at all", side: "negative", color: themeColors.rust },
    { label: "Just a little", side: "negative", color: themeColors.rustSoft },
    { label: "Somewhat", side: "positive", color: themeColors.sage },
    { label: "A lot", side: "positive", color: themeColors.oliveDark },
  ],
};

const elements = {
  tabButtons: Array.from(document.querySelectorAll("[data-tab]")),
  tabPanels: Array.from(document.querySelectorAll("[data-tab-panel]")),
  indicatorGrid: document.getElementById("indicator-grid"),
  indicatorMeta: document.getElementById("indicator-meta"),
  indicatorEmptyState: document.getElementById("indicator-empty-state"),
  indicatorEmptyText: document.getElementById("indicator-empty-text"),
  jumpFirstYearButton: document.getElementById("jump-first-year-button"),
  yearSlider: document.getElementById("year-slider"),
  activeYearLabel: document.getElementById("active-year-label"),
  playButton: document.getElementById("play-button"),
  mapTitle: document.getElementById("map-title"),
  detailTitle: document.getElementById("detail-title"),
  detailNote: document.getElementById("detail-note"),
  countrySummary: document.getElementById("country-summary"),
  countryProfile: document.getElementById("country-profile"),
  chartControls: document.getElementById("chart-controls"),
  rollingAverageToggle: document.getElementById("rolling-average-toggle"),
  chartChangeSummary: document.getElementById("chart-change-summary"),
  avgScore: document.getElementById("avg-score"),
  avgScoreNote: document.getElementById("avg-score-note"),
  topCountry: document.getElementById("top-country"),
  topCountryNote: document.getElementById("top-country-note"),
  lowCountry: document.getElementById("low-country"),
  lowCountryNote: document.getElementById("low-country-note"),
  coverageCount: document.getElementById("coverage-count"),
  coverageNote: document.getElementById("coverage-note"),
  countryCount: document.getElementById("country-count"),
  yearRangeStat: document.getElementById("year-range-stat"),
  indicatorCount: document.getElementById("indicator-count"),
  countryProfileSelect: document.getElementById("country-profile-select"),
  compareModeButtons: Array.from(document.querySelectorAll("[data-compare-mode]")),
  compareCountryWrap: document.getElementById("compare-country-wrap"),
  compareCountrySelect: document.getElementById("compare-country-select"),
  latestProfileTitle: document.getElementById("latest-profile-title"),
  latestProfileNote: document.getElementById("latest-profile-note"),
  latestProfileCards: document.getElementById("latest-profile-cards"),
  afroCountrySelect: document.getElementById("afro-country-select"),
  afroCardGrid: document.getElementById("afro-card-grid"),
  afroTitle: document.getElementById("afro-title"),
  afroNote: document.getElementById("afro-note"),
  afroResponseTitle: document.getElementById("afro-response-title"),
  afroResponseNote: document.getElementById("afro-response-note"),
  afroSurveySummary: document.getElementById("afro-survey-summary"),
  afroResponseLegend: document.getElementById("afro-response-legend"),
  afroResponseMeta: document.getElementById("afro-response-meta"),
};

function normalizeCountry(country) {
  return countryAliases[country] || country;
}

function parseValue(value) {
  if (value === undefined || value === null || value === "") {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function buildDataset(rawRows) {
  const merged = new Map();

  rawRows.forEach((row) => {
    const country = normalizeCountry(row.Country);
    const year = Number(row.Year);
    const mapKey = `${country}-${year}`;
    const existing = merged.get(mapKey) || { Country: country, Year: year };

    indicatorMeta.forEach((indicator) => {
      const value = parseValue(row[indicator.key]);
      if (existing[indicator.key] === undefined || existing[indicator.key] === null) {
        existing[indicator.key] = value;
      }
    });

    merged.set(mapKey, existing);
  });

  const rows = Array.from(merged.values()).filter((row) => isoByCountry[row.Country]);
  const years = [...new Set(rows.map((row) => row.Year))].sort((a, b) => a - b);
  const countries = [...new Set(rows.map((row) => row.Country))].sort((a, b) => a.localeCompare(b));

  return { rows, years, countries };
}

const dataset = buildDataset(window.GOVERNANCE_DATA || []);
const indicatorAvailabilityByKey = indicatorMeta.reduce((acc, indicator) => {
  const availableYears = dataset.rows
    .filter((row) => row[indicator.key] !== null)
    .map((row) => row.Year);
  const uniqueYears = [...new Set(availableYears)].sort((a, b) => a - b);
  acc[indicator.key] = {
    firstAvailableYear: uniqueYears[0] ?? null,
    lastAvailableYear: uniqueYears[uniqueYears.length - 1] ?? null,
    years: uniqueYears,
  };
  indicator.firstAvailableYear = uniqueYears[0] ?? null;
  indicator.lastAvailableYear = uniqueYears[uniqueYears.length - 1] ?? null;
  return acc;
}, {});
const rowsByCountry = dataset.rows.reduce((acc, row) => {
  if (!acc[row.Country]) {
    acc[row.Country] = [];
  }
  acc[row.Country].push(row);
  acc[row.Country].sort((a, b) => a.Year - b.Year);
  return acc;
}, {});

state.selectedCountry = dataset.countries.includes("Ghana") ? "Ghana" : dataset.countries[0];
state.selectedProfileCountry = state.selectedCountry;
state.compareCountry = dataset.countries.find((country) => country !== state.selectedCountry) || dataset.countries[0];
state.selectedAfroCountry = state.selectedCountry;
state.selectedYear = dataset.years[0];

function getIndicator() {
  return indicatorMeta.find((item) => item.key === state.selectedIndicator);
}

function formatValue(value) {
  return value === null ? "No data" : value.toFixed(2);
}

function formatChartValue(value) {
  return value === null || value === undefined ? "No data" : value.toFixed(2);
}

function average(values) {
  if (!values.length) {
    return null;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getCountryRowForYear(country, year) {
  return (rowsByCountry[country] || []).find((row) => row.Year === year) || null;
}

function getCountriesInRegion(country) {
  const region = regionByCountry[country];
  if (!region) {
    return [];
  }
  return dataset.countries.filter((item) => regionByCountry[item] === region);
}

function getCompareLabel(baseCountry = state.selectedProfileCountry) {
  if (state.compareMode === "region") {
    const region = regionByCountry[baseCountry] || "Region";
    return `${region} average`;
  }
  if (state.compareMode === "country") {
    return state.compareCountry || "Comparison country";
  }
  return "Africa average";
}

function getComparisonValue(mode, baseCountry, indicatorKey, year, compareCountry = state.compareCountry) {
  if (!year) {
    return null;
  }

  if (mode === "country") {
    if (!compareCountry || compareCountry === baseCountry) {
      return null;
    }
    const row = getCountryRowForYear(compareCountry, year);
    return row ? row[indicatorKey] : null;
  }

  const peerCountries = mode === "region" ? getCountriesInRegion(baseCountry) : dataset.countries;
  const values = peerCountries
    .map((country) => getCountryRowForYear(country, year))
    .map((row) => (row ? row[indicatorKey] : null))
    .filter((value) => value !== null);

  return average(values);
}

function buildComparisonSeries(baseCountry, indicatorKey) {
  const rows = rowsByCountry[baseCountry] || [];
  return rows.map((row) => ({
    year: row.Year,
    value: getComparisonValue(state.compareMode, baseCountry, indicatorKey, row.Year),
  }));
}

function getLatestAvailableRow(country, indicatorKey) {
  const rows = rowsByCountry[country] || [];
  return [...rows].reverse().find((row) => row[indicatorKey] !== null) || null;
}

function isNoisyIndicator(indicatorKey) {
  return indicatorKey === "Score_GOV_ACLED_Conflict" || indicatorKey === "Score_GOV_UCDP_Conflict";
}

function rollingAverage(values, windowSize = 5) {
  return values.map((row, index) => {
    const windowRows = values.slice(Math.max(0, index - windowSize + 1), index + 1).filter((item) => item.value !== null);
    if (!windowRows.length) {
      return { ...row, rolling: null };
    }
    const avg = windowRows.reduce((sum, item) => sum + item.value, 0) / windowRows.length;
    return { ...row, rolling: avg };
  });
}

function formatDelta(delta) {
  if (delta === null || delta === undefined) {
    return "No data";
  }
  const prefix = delta > 0 ? "+" : "";
  return `${prefix}${delta.toFixed(2)}`;
}

function syncSharedCountry(country) {
  state.selectedCountry = country;
  state.selectedProfileCountry = country;
  state.selectedAfroCountry = country;

  if (elements.countryProfileSelect) {
    elements.countryProfileSelect.value = country;
  }
  if (elements.afroCountrySelect) {
    elements.afroCountrySelect.value = country;
  }
}

function renderTabs() {
  elements.tabButtons.forEach((button) => {
    const active = button.dataset.tab === state.activeTab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  elements.tabPanels.forEach((panel) => {
    const active = panel.dataset.tabPanel === state.activeTab;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

function navigateToTab(tabKey) {
  state.activeTab = tabKey;
  renderTabs();

  const panel = elements.tabPanels.find((item) => item.dataset.tabPanel === tabKey);
  if (!panel) {
    return;
  }

  window.requestAnimationFrame(() => {
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
    panel.focus({ preventScroll: true });
  });
}

function buildCountryNarrative(country, indicatorKey) {
  const indicator = indicatorMeta.find((item) => item.key === indicatorKey);
  const rows = rowsByCountry[country] || [];
  const validRows = rows.filter((row) => row[indicatorKey] !== null);

  if (!validRows.length) {
    return `${country} has no recorded ${indicator.label} values in this dataset yet, so the story panel is waiting for the first available observation.`;
  }

  const first = validRows[0];
  const latest = validRows[validRows.length - 1];
  const change = latest[indicatorKey] - first[indicatorKey];
  const directionText =
    Math.abs(change) < 0.01
      ? "has stayed broadly stable"
      : change > 0
        ? "has improved overall"
        : "has weakened overall";

  const contextText =
    indicator.direction === "Higher is worse"
      ? "Higher values indicate greater intensity or exposure."
      : "Higher values indicate stronger performance.";

  return `${country} ${directionText} on ${indicator.label} from ${first.Year} to ${latest.Year}, moving from ${first[indicatorKey].toFixed(2)} to ${latest[indicatorKey].toFixed(2)}. ${contextText}`;
}

function getIndicatorAvailability(indicatorKey = state.selectedIndicator) {
  return indicatorAvailabilityByKey[indicatorKey] || {
    firstAvailableYear: null,
    lastAvailableYear: null,
    years: [],
  };
}

function yearHasDataForIndicator(year, indicatorKey = state.selectedIndicator) {
  return dataset.rows.some((row) => row.Year === year && row[indicatorKey] !== null);
}

function syncYearForIndicator(indicatorKey = state.selectedIndicator) {
  const availability = getIndicatorAvailability(indicatorKey);
  if (!availability.firstAvailableYear) {
    return;
  }
  if (!yearHasDataForIndicator(state.selectedYear, indicatorKey)) {
    state.selectedYear = availability.firstAvailableYear;
  }
}

function getAfroMetric(country, metricKey) {
  return afrobarometerData[country]?.[metricKey] || null;
}

function normalizeAfroIndicatorKey(key) {
  if (key === "Score_GOV_EIU_Democracy" || key === "Score_GOV_VDem_LibDem") {
    return "democracy_combined";
  }
  if (key === "Score_GOV_ACLED_Conflict" || key === "Score_GOV_UCDP_Conflict") {
    return "conflict_combined";
  }
  return key;
}

function formatAfroLinkHeading(description) {
  const cleaned = (description || "")
    .replace(/^Afrobarometer\s+/i, "")
    .replace(/\.$/, "");
  return cleaned ? `${cleaned.charAt(0).toUpperCase()}${cleaned.slice(1)}` : "";
}

function getLatestIndicatorProfile(country) {
  const rows = rowsByCountry[country] || [];

  return indicatorMeta.map((indicator) => {
    const latestRow = [...rows].reverse().find((row) => row[indicator.key] !== null);
    let comparison = null;
    let distribution = null;

    if (latestRow) {
      const peerRows = dataset.rows
        .filter((row) => row.Year === latestRow.Year && row[indicator.key] !== null)
        .sort((a, b) => b[indicator.key] - a[indicator.key]);

      const rank = peerRows.findIndex((row) => row.Country === country) + 1;
      const total = peerRows.length;
      const percentile = total > 1 ? Math.round(((total - rank) / (total - 1)) * 100) : 100;

      comparison = {
        rank,
        total,
        percentile,
      };

      distribution = peerRows.map((row) => row[indicator.key]);
    }

    return {
      key: indicator.key,
      label: indicator.label,
      title: indicator.title,
      description: indicator.description,
      direction: indicator.direction,
      value: latestRow ? latestRow[indicator.key] : null,
      year: latestRow ? latestRow.Year : null,
      compareLabel: getCompareLabel(country),
      compareValue: latestRow ? getComparisonValue(state.compareMode, country, indicator.key, latestRow.Year) : null,
      distribution,
      comparison,
      trendAnalysis: getIndicatorTrendAnalysis(country, indicator.key),
    };
  });
}

function getIndicatorTrendAnalysis(country, indicatorKey) {
  const series = (rowsByCountry[country] || [])
    .filter((row) => row[indicatorKey] !== null)
    .map((row) => ({ year: row.Year, value: row[indicatorKey] }));

  if (series.length < 2) {
    return {
      summary: "Trend analysis: Not enough data to assess change over time.",
      overallDelta: null,
      recentDelta: null,
      firstYear: series[0]?.year || null,
      latestYear: series[series.length - 1]?.year || null,
    };
  }

  const first = series[0];
  const latest = series[series.length - 1];
  const overallDelta = latest.value - first.value;
  const fiveYearBaseline = [...series].reverse().find((row) => row.year <= latest.year - 5) || null;
  const recentDelta = fiveYearBaseline ? latest.value - fiveYearBaseline.value : null;

  const overallPhrase =
    Math.abs(overallDelta) < 0.01
      ? `has stayed broadly flat since ${first.year}`
      : `${overallDelta > 0 ? "is up" : "is down"} ${Math.abs(overallDelta).toFixed(2)} points since ${first.year}`;

  const recentPhrase = fiveYearBaseline
    ? Math.abs(recentDelta) < 0.01
      ? `Over the last five years, it has remained broadly steady.`
      : `Over the last five years, it ${recentDelta > 0 ? "rose" : "fell"} ${Math.abs(recentDelta).toFixed(2)} points since ${fiveYearBaseline.year}.`
    : `A five-year comparison is not available yet.`;

  return {
    summary: `Trend analysis: The indicator ${overallPhrase}. ${recentPhrase}`,
    overallDelta,
    recentDelta,
    firstYear: first.year,
    latestYear: latest.year,
  };
}

function getAfroLinkedIndicators(country) {
  return afrobarometerCardDefinitions.map((card) => {
    const baseLink = afrobarometerIndicatorMap[card.indicatorKeys[0]];
    const metrics = baseLink.metrics.map((metric) => ({
      ...metric,
      data: getAfroMetric(country, metric.key),
    }));
    const covered = metrics.some((metric) => metric.data?.coverage === "covered");

    return {
      key: card.key,
      label: card.label,
      linkTitle: baseLink.title,
      linkDescription: baseLink.description,
      cardHeading: formatAfroLinkHeading(baseLink.description),
      linkType: baseLink.type,
      metrics,
      covered,
      indicatorKeys: card.indicatorKeys,
    };
  });
}

function renderResponseListMarkup(metrics) {
  const blocks = metrics.map((metric) => {
    if (!metric.data || metric.data.coverage !== "covered") {
      return `
        <div class="indicator-survey-block">
          <p class="indicator-survey-title">${metric.label}</p>
          <p class="indicator-survey-subtitle">Not covered by Afrobarometer</p>
        </div>
      `;
    }

    const order = responseOrderByMetric[metric.key] || Object.keys(metric.data.raw || {});
    const items = order
      .filter((response) => metric.data.raw && metric.data.raw[response] !== undefined)
      .map(
        (response) => `
          <div class="indicator-survey-item">
            <span>${response}</span>
            <span class="indicator-survey-value">${Number(metric.data.raw[response]).toFixed(1)}%</span>
          </div>
        `,
      )
      .join("");

    return `
      <div class="indicator-survey-block">
        <p class="indicator-survey-title">${metric.label}</p>
        <p class="indicator-survey-subtitle">Afrobarometer responses</p>
        <div class="indicator-survey-list">${items}</div>
      </div>
    `;
  });

  return blocks.join("");
}

function renderIndicatorButtons() {
  elements.indicatorGrid.innerHTML = "";

  indicatorMeta.forEach((indicator) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `indicator-button${state.selectedIndicator === indicator.key ? " active" : ""}`;
    button.setAttribute("aria-pressed", state.selectedIndicator === indicator.key ? "true" : "false");
    button.setAttribute("aria-label", `${indicator.title}. ${indicator.description}`);
    button.innerHTML = `
      <div class="indicator-button-head">
        <span class="indicator-icon">
          <img src="${indicator.iconSrc}" alt="${indicator.iconAlt}" class="indicator-icon-image" loading="lazy" />
        </span>
        <strong>${indicator.label}</strong>
      </div>
      <span>${indicator.description}</span>
    `;
    button.addEventListener("click", () => {
      state.selectedIndicator = indicator.key;
      syncYearForIndicator(indicator.key);
      renderIndicatorButtons();
      renderAll();
    });
    elements.indicatorGrid.appendChild(button);
  });

  renderSelectedIndicatorMeta();
}

function renderSelectedIndicatorMeta() {
  const indicator = getIndicator();
  elements.indicatorMeta.innerHTML = `
    <div class="indicator-meta-grid">
      <article class="indicator-meta-item">
        <p>Scale</p>
        <strong>${indicator.scaleHint}</strong>
      </article>
      <article class="indicator-meta-item">
        <p>First available year</p>
        <strong>${indicator.firstAvailableYear ?? "Not available"}</strong>
      </article>
      <article class="indicator-meta-item">
        <p>Last available year</p>
        <strong>${indicator.lastAvailableYear ?? "Not available"}</strong>
      </article>
      <article class="indicator-meta-item">
        <p>Direction</p>
        <strong>${indicator.direction}</strong>
      </article>
    </div>
  `;
}

function getYearRows() {
  return dataset.rows.filter((row) => row.Year === state.selectedYear);
}

function buildMapData() {
  const indicator = getIndicator();
  const yearRows = getYearRows();
  const validRows = yearRows
    .filter((row) => row[indicator.key] !== null)
    .map((row) => ({
      country: row.Country,
      iso3: isoByCountry[row.Country],
      value: row[indicator.key],
    }));
  const averageValue = average(validRows.map((row) => row.value));
  const rankedRows = [...validRows].sort((a, b) => b.value - a.value);
  const rankByCountry = rankedRows.reduce((acc, row, index) => {
    acc[row.country] = index + 1;
    return acc;
  }, {});
  const missingRows = dataset.countries
    .filter((country) => !validRows.some((row) => row.country === country))
    .map((country) => {
      const latestRow = getLatestAvailableRow(country, indicator.key);
      return {
        country,
        iso3: isoByCountry[country],
        latestAvailableYear: latestRow ? latestRow.Year : null,
      };
    });

  return {
    validRows,
    missingRows,
    values: validRows.map((row) => row.value),
    topRow: validRows.reduce((best, row) => (!best || row.value > best.value ? row : best), null),
    lowRow: validRows.reduce((best, row) => (!best || row.value < best.value ? row : best), null),
    averageValue,
    rankByCountry,
  };
}

function renderIndicatorEmptyState() {
  const indicator = getIndicator();
  const availability = getIndicatorAvailability();
  const hasData = yearHasDataForIndicator(state.selectedYear, indicator.key);

  if (hasData || !availability.firstAvailableYear) {
    elements.indicatorEmptyState.hidden = true;
    return;
  }

  elements.indicatorEmptyState.hidden = false;
  elements.indicatorEmptyText.textContent = `No ${indicator.label} data is available in ${state.selectedYear}.`;
}

function renderStats() {
  const indicator = getIndicator();
  const { validRows, values, topRow, lowRow } = buildMapData();
  const avg = average(values);

  elements.avgScore.textContent = avg === null ? "--" : avg.toFixed(2);
  elements.avgScoreNote.textContent = avg === null ? `No ${indicator.label} values are available in ${state.selectedYear}.` : indicator.scaleHint;
  elements.topCountry.textContent = topRow ? topRow.country : "--";
  elements.topCountryNote.textContent = topRow ? `${topRow.value.toFixed(2)} in ${state.selectedYear}` : "No reported values";
  elements.lowCountry.textContent = lowRow ? lowRow.country : "--";
  elements.lowCountryNote.textContent = lowRow ? `${lowRow.value.toFixed(2)} in ${state.selectedYear}` : "No reported values";
  elements.coverageCount.textContent = `${validRows.length}/${dataset.countries.length}`;
  elements.coverageNote.textContent = `Countries with data for ${indicator.label} in ${state.selectedYear}.`;
}

function buildCountryProfileQuery(iso3) {
  return `
SELECT ?country ?countryLabel ?flagImage ?inception ?sovereignSince ?headOfStateLabel ?headOfGovernmentLabel ?headOfStateImage ?headOfGovernmentImage ?nextElection ?nextElectionLabel ?nextElectionDate WHERE {
  ?country wdt:P298 "${iso3}".
  OPTIONAL { ?country wdt:P41 ?flagImage. }
  OPTIONAL { ?country wdt:P571 ?inception. }
  OPTIONAL {
    ?country p:P31 ?sovereignStatement.
    ?sovereignStatement ps:P31 wd:Q3624078.
    OPTIONAL { ?sovereignStatement pq:P580 ?sovereignSince. }
  }
  OPTIONAL { ?country wdt:P35 ?headOfState. }
  OPTIONAL { ?country wdt:P6 ?headOfGovernment. }
  OPTIONAL { ?headOfState wdt:P18 ?headOfStateImage. }
  OPTIONAL { ?headOfGovernment wdt:P18 ?headOfGovernmentImage. }
  OPTIONAL {
    {
      SELECT ?country ?nextElection ?nextElectionLabel ?nextElectionDate WHERE {
        ?country wdt:P298 "${iso3}".
        ?nextElection wdt:P17 ?country;
                      wdt:P31/wdt:P279* wd:Q40231.
        OPTIONAL { ?nextElection wdt:P585 ?pointInTime. }
        OPTIONAL { ?nextElection wdt:P580 ?startTime. }
        BIND(COALESCE(?pointInTime, ?startTime) AS ?nextElectionDate)
        FILTER(BOUND(?nextElectionDate) && ?nextElectionDate >= NOW())
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
      }
      ORDER BY ?nextElectionDate
      LIMIT 1
    }
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
`.trim();
}

function renderCountryProfileLoading(country) {
  elements.countryProfile.innerHTML = `
    <article class="profile-card loading">
      <div>
        <p class="profile-source">Loading profile for <strong>${country}</strong>...</p>
      </div>
    </article>
  `;
}

function renderCountryProfileError(country) {
  elements.countryProfile.innerHTML = `
    <article class="profile-card error">
      <div>
        <p class="profile-source">Live country metadata could not be loaded for <strong>${country}</strong>.</p>
      </div>
    </article>
  `;
}

function renderCountryProfileCard(country, profile) {
  const independenceDate = independenceByCountry[country] || "Not available from selected source";
  const population = populationByCountry[country] || "Not available from World Population Review";
  const capital = capitalByCountry[country] || "Not available from Whereig source";
  const incomeGroup = incomeGroupByCountry[country] || "Not available from World Bank source";
  const leaderName = profile.headOfStateLabel || profile.headOfGovernmentLabel || "Not available";
  const leaderLabel = profile.headOfStateLabel ? "Current head of state" : "Current head of government";
  const leaderImage = profile.headOfStateImage || profile.headOfGovernmentImage || "";
  const recentElection = recentNationalElectionByCountry[country] || "Not available from selected source";
  const region = regionByCountry[country] || "Region not classified";
  const flagMarkup = profile.flagImage
    ? `<img class="profile-flag" src="${profile.flagImage}" alt="Flag of ${country}" loading="lazy" />`
    : `<div class="profile-flag" aria-hidden="true"></div>`;
  const leaderMarkup = leaderImage
    ? `
        <span class="profile-leader">
          <img class="profile-leader-photo" src="${leaderImage}" alt="${leaderName}" loading="lazy" />
          <span>${leaderName}</span>
        </span>
      `
    : leaderName;

  elements.countryProfile.innerHTML = `
    <article class="profile-card">
      ${flagMarkup}
      <div class="profile-story">
        <div class="profile-identity">
          <h3>${country}</h3>
          <span class="profile-region">${region}</span>
        </div>
        <details class="profile-secondary" open>
          <summary>Political and historical details</summary>
          <div class="profile-meta">
            <article>
              <p>Total population</p>
              <strong>${population}</strong>
            </article>
            <article>
              <p>Capital city</p>
              <strong>${capital}</strong>
            </article>
            <article>
              <p>Income group</p>
              <strong>${incomeGroup}</strong>
            </article>
            <article>
              <p>Independence date</p>
              <strong>${independenceDate}</strong>
            </article>
            <article>
              <p>${leaderLabel}</p>
              <strong>${leaderMarkup}</strong>
            </article>
            <article>
              <p>Most recent national election</p>
              <strong>${recentElection}</strong>
            </article>
          </div>
          <p class="profile-source">
            Population from
            <a href="https://worldpopulationreview.com/country-rankings/countries-in-africa" target="_blank" rel="noreferrer">World Population Review</a>,
            capitals from
            <a href="https://www.whereig.com/world-countries-and-capitals/africa.html" target="_blank" rel="noreferrer">Whereig</a>,
            income groups from
            <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups" target="_blank" rel="noreferrer">World Bank</a>,
            Independence dates from
            <a href="https://www.penglobalinc.com/independence-here-are-the-list-of-african-countries-and-their-independence-dates" target="_blank" rel="noreferrer">PEN Global</a>,
            election history from
            <a href="https://www.africanelections.org/elections/" target="_blank" rel="noreferrer">African Elections</a>,
            and flag/current leadership from
            <a href="${profile.countryUrl}" target="_blank" rel="noreferrer">Wikidata</a>.
          </p>
        </details>
      </div>
    </article>
  `;
}

async function loadCountryProfile(country) {
  const iso3 = isoByCountry[country];
  if (!iso3) {
    renderCountryProfileError(country);
    return;
  }

  if (state.profileCache[country]) {
    renderCountryProfileCard(country, state.profileCache[country]);
    return;
  }

  renderCountryProfileLoading(country);
  state.profileRequestCountry = country;

  const query = buildCountryProfileQuery(iso3);
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/sparql-results+json",
      },
    });

    if (!response.ok) {
      throw new Error(`Profile request failed with status ${response.status}`);
    }

    const data = await response.json();
    const binding = data.results?.bindings?.[0];
    if (!binding) {
      throw new Error("No profile data returned");
    }

    const profile = {
      flagImage: binding.flagImage?.value || "",
      headOfStateLabel: binding.headOfStateLabel?.value || "",
      headOfGovernmentLabel: binding.headOfGovernmentLabel?.value || "",
      headOfStateImage: binding.headOfStateImage?.value || "",
      headOfGovernmentImage: binding.headOfGovernmentImage?.value || "",
      countryUrl: binding.country?.value || "https://www.wikidata.org/",
    };

    state.profileCache[country] = profile;
    if (state.profileRequestCountry === country) {
      renderCountryProfileCard(country, profile);
    }
  } catch (error) {
    if (state.profileRequestCountry === country) {
      renderCountryProfileError(country);
    }
  }
}

function renderMap() {
  const indicator = getIndicator();
  const { validRows, missingRows, values, rankByCountry, averageValue } = buildMapData();
  if (!validRows.length) {
    Plotly.react(
      "map",
      [],
      {
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        margin: { t: 10, r: 10, b: 10, l: 10 },
        xaxis: { visible: false },
        yaxis: { visible: false },
        annotations: [
          {
            text: `No ${indicator.label} data available in ${state.selectedYear}`,
            x: 0.5,
            y: 0.5,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            font: { family: "Space Grotesk, sans-serif", size: 22, color: themeColors.accentDark || themeColors.terracottaDark },
          },
        ],
      },
      chartConfig,
    );
    elements.mapTitle.textContent = `${indicator.title} in ${state.selectedYear}`;
    return;
  }
  const min = values.length ? Math.min(...values) : 0;
  const rawMax = values.length ? Math.max(...values) : 1;
  const max = rawMax === min ? min + 1 : rawMax;
  const noDataColor = themeColors.noData;

  const missingTrace = {
    type: "choropleth",
    locationmode: "ISO-3",
    locations: missingRows.map((row) => row.iso3),
    z: missingRows.map(() => 1),
    text: missingRows.map((row) => row.country),
    customdata: missingRows.map((row) => [row.country, "No data", "N/A", averageValue, row.latestAvailableYear ?? "N/A"]),
    colorscale: [
      [0, noDataColor],
      [1, noDataColor],
    ],
    showscale: false,
    hovertemplate:
      "<b>%{customdata[0]}</b><br>Selected value: %{customdata[1]}<br>Africa rank: %{customdata[2]}<br>Africa average: %{customdata[3]:.2f}<br>Latest available year: %{customdata[4]}<extra></extra>",
    marker: {
      line: {
        color: "rgba(255,255,255,0.8)",
        width: 0.7,
      },
    },
    showlegend: false,
  };

  const trace = {
    type: "choropleth",
    locationmode: "ISO-3",
    locations: validRows.map((row) => row.iso3),
    z: validRows.map((row) => row.value),
    text: validRows.map((row) => row.country),
    customdata: validRows.map((row) => [
      row.country,
      row.value,
      rankByCountry[row.country],
      averageValue,
      getLatestAvailableRow(row.country, indicator.key)?.Year ?? "N/A",
    ]),
    colorscale: themeColors.mapRamp,
    marker: {
      line: {
        color: "rgba(255,255,255,0.8)",
        width: 0.7,
      },
    },
    colorbar: {
      title: `${indicator.label} score`,
      tickfont: { size: 11 },
    },
    zmin: min,
    zmax: max,
    hovertemplate:
      "<b>%{customdata[0]}</b><br>Selected value: %{customdata[1]:.2f}<br>Africa rank: %{customdata[2]}<br>Africa average: %{customdata[3]:.2f}<br>Latest available year: %{customdata[4]}<extra></extra>",
    showlegend: false,
  };

  const noDataLegendTrace = {
    type: "scattergeo",
    mode: "markers",
    name: "No data",
    lat: [0],
    lon: [0],
    visible: "legendonly",
    showlegend: true,
    marker: {
      size: 12,
      color: noDataColor,
      symbol: "square",
      line: { color: themeColors.borderSoft, width: 1 },
    },
    hoverinfo: "skip",
  };

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    margin: { t: 10, r: 10, b: 10, l: 10 },
    transition: {
      duration: 350,
      easing: "cubic-in-out",
    },
    legend: {
      title: { text: "Map Legend" },
      orientation: "h",
      x: 0,
      y: 1.02,
      bgcolor: "rgba(252,246,237,0.9)",
      bordercolor: themeColors.borderSoft,
      borderwidth: 1,
    },
    geo: {
      scope: "africa",
      projection: { type: "natural earth" },
      bgcolor: "rgba(0,0,0,0)",
      lakecolor: themeColors.mapSea,
      showlakes: true,
      showframe: false,
      showcountries: true,
      countrycolor: "rgba(255,255,255,0.85)",
      showocean: true,
      oceancolor: themeColors.mapSea,
      landcolor: themeColors.mapLand,
    },
  };

  Plotly.react("map", [missingTrace, trace, noDataLegendTrace], layout, chartConfig);

  const mapNode = document.getElementById("map");
  if (!state.mapBound) {
    mapNode.on("plotly_click", (event) => {
      const point = event.points?.[0];
      if (!point) {
        return;
      }
      syncSharedCountry(point.customdata[0]);
      renderCountryDetail();
      renderLatestProfileChart();
      renderAfroCardGrid();
      renderAfroResponseChart();
    });
    state.mapBound = true;
  }

  elements.mapTitle.textContent = `${indicator.title} in ${state.selectedYear}`;
}

function renderCountryDetail() {
  const indicator = getIndicator();
  const baseCountry = state.selectedProfileCountry || state.selectedCountry;
  const compareLabel = getCompareLabel(baseCountry);
  const series = (rowsByCountry[baseCountry] || []).map((row) => ({
    year: row.Year,
    value: row[indicator.key],
  }));
  const comparisonSeries = buildComparisonSeries(baseCountry, indicator.key);
  const seriesWithRolling = rollingAverage(series);
  const comparisonWithRolling = rollingAverage(comparisonSeries);

  const currentRow = seriesWithRolling.find((row) => row.year === state.selectedYear);
  const currentCompareRow = comparisonWithRolling.find((row) => row.year === state.selectedYear);
  const validSeries = seriesWithRolling.filter((row) => row.value !== null);
  const highest = validSeries.reduce((best, row) => (!best || row.value > best.value ? row : best), null);
  const lowest = validSeries.reduce((best, row) => (!best || row.value < best.value ? row : best), null);
  const first = validSeries[0] || null;
  const showRolling = isNoisyIndicator(indicator.key);
  const selectedComparableValue =
    currentRow && (state.showRollingAverage && showRolling ? currentRow.rolling : currentRow.value) !== null
      ? state.showRollingAverage && showRolling
        ? currentRow.rolling
        : currentRow.value
      : null;
  const fiveYearBaseline =
    currentRow && currentRow.year
      ? [...validSeries].reverse().find((row) => row.year <= currentRow.year - 5) || null
      : null;
  const selectedTraceValues = state.showRollingAverage && showRolling ? seriesWithRolling.map((row) => row.rolling) : seriesWithRolling.map((row) => row.value);
  const comparisonTraceValues = state.showRollingAverage && showRolling
    ? comparisonWithRolling.map((row) => row.rolling)
    : comparisonWithRolling.map((row) => row.value);

  const trace = {
    type: "scatter",
    mode: "lines+markers",
    x: seriesWithRolling.map((row) => row.year),
    y: selectedTraceValues,
    name: baseCountry,
    line: {
      color: themeColors.terracotta,
      width: 3,
      shape: "spline",
    },
    marker: {
      size: 7,
      color: themeColors.terracotta,
    },
    connectgaps: false,
    hovertemplate: `${baseCountry}<br>Year %{x}<br>${indicator.label}: %{y:.2f}<extra></extra>`,
  };

  const comparisonTrace = {
    type: "scatter",
    mode: "lines",
    x: comparisonWithRolling.map((row) => row.year),
    y: comparisonTraceValues,
    name: compareLabel,
    line: {
      color: themeColors.olive,
      width: 3,
      dash: "dot",
      shape: "spline",
    },
    connectgaps: false,
    hovertemplate: `${compareLabel}<br>Year %{x}<br>${indicator.label}: %{y:.2f}<extra></extra>`,
  };

  const highlightTrace =
    currentRow && (state.showRollingAverage && showRolling ? currentRow.rolling !== null : currentRow.value !== null)
      ? {
          type: "scatter",
          mode: "markers",
          x: [currentRow.year],
          y: [state.showRollingAverage && showRolling ? currentRow.rolling : currentRow.value],
          marker: {
            size: 16,
            color: themeColors.terracotta,
            line: { width: 3, color: "#fff5e0" },
            symbol: "diamond",
          },
          hovertemplate: "Selected year %{x}<br>Value %{y:.2f}<extra></extra>",
        }
      : null;

  const peakTrace =
    highest
      ? {
          type: "scatter",
          mode: "markers+text",
          x: [highest.year],
          y: [highest.value],
          text: [`Peak ${highest.value.toFixed(2)} (${highest.year})`],
          textposition: "top center",
          marker: {
            size: 10,
            color: themeColors.oliveDark,
            line: { width: 2, color: "#fff5e0" },
          },
          hovertemplate: "%{text}<extra></extra>",
        }
      : null;

  const troughTrace =
    lowest
      ? {
          type: "scatter",
          mode: "markers+text",
          x: [lowest.year],
          y: [lowest.value],
          text: [`Trough ${lowest.value.toFixed(2)} (${lowest.year})`],
          textposition: "bottom center",
          marker: {
            size: 10,
            color: themeColors.rust,
            line: { width: 2, color: "#fff5e0" },
          },
          hovertemplate: "%{text}<extra></extra>",
        }
      : null;

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: themeColors.panelPlot,
    margin: { t: 10, r: 12, b: 42, l: 48 },
    xaxis: {
      title: "Year",
      tickmode: "linear",
      dtick: 5,
      gridcolor: themeColors.grid,
      zeroline: false,
    },
    yaxis: {
      title: `${indicator.label} score`,
      gridcolor: themeColors.grid,
      zeroline: false,
    },
    legend: {
      orientation: "h",
      y: 1.08,
      x: 0,
      bgcolor: "rgba(252,246,237,0.88)",
    },
  };

  const traces = [trace, comparisonTrace];
  if (peakTrace) {
    traces.push(peakTrace);
  }
  if (troughTrace) {
    traces.push(troughTrace);
  }
  if (highlightTrace) {
    traces.push(highlightTrace);
  }
  Plotly.react("country-chart", traces, layout, chartConfig);

  elements.detailTitle.textContent = baseCountry;
  elements.detailNote.textContent = `${indicator.title} compared with ${compareLabel}`;
  elements.chartControls.hidden = !showRolling;
  elements.rollingAverageToggle.checked = state.showRollingAverage && showRolling;
  elements.chartChangeSummary.innerHTML = `
    <article class="chart-change-card">
      <p>Change since first available year</p>
      <strong>${first && currentRow && selectedComparableValue !== null ? `${formatDelta(selectedComparableValue - first.value)} since ${first.year}` : "No data"}</strong>
    </article>
    <article class="chart-change-card">
      <p>5-year change</p>
      <strong>${currentRow && selectedComparableValue !== null && fiveYearBaseline ? `${formatDelta(selectedComparableValue - fiveYearBaseline.value)} since ${fiveYearBaseline.year}` : "No data"}</strong>
    </article>
    <article class="chart-change-card">
      <p>${compareLabel} in ${state.selectedYear}</p>
      <strong>${currentCompareRow && currentCompareRow.value !== null ? formatValue(currentCompareRow.value) : "No data"}</strong>
    </article>
  `;
  elements.countrySummary.innerHTML = `
    <article>
      <p>Selected year</p>
      <strong>${currentRow && currentRow.value !== null ? formatValue(currentRow.value) : "No data"}</strong>
    </article>
    <article>
      <p>Peak value</p>
      <strong>${highest ? `${formatValue(highest.value)} (${highest.year})` : "No data"}</strong>
    </article>
    <article>
      <p>Lowest value</p>
      <strong>${lowest ? `${formatValue(lowest.value)} (${lowest.year})` : "No data"}</strong>
    </article>
  `;
  loadCountryProfile(baseCountry);
}

function renderCountryProfileSelect() {
  elements.countryProfileSelect.innerHTML = dataset.countries
    .map(
      (country) =>
        `<option value="${country}"${country === state.selectedProfileCountry ? " selected" : ""}>${country}</option>`,
    )
    .join("");
}

function renderCompareCountrySelect() {
  const availableCountries = dataset.countries.filter((country) => country !== state.selectedProfileCountry);
  if (!availableCountries.length) {
    elements.compareCountrySelect.innerHTML = "";
    elements.compareCountryWrap.hidden = true;
    return;
  }

  if (!availableCountries.includes(state.compareCountry)) {
    state.compareCountry = availableCountries[0];
  }

  elements.compareCountrySelect.innerHTML = availableCountries
    .map(
      (country) =>
        `<option value="${country}"${country === state.compareCountry ? " selected" : ""}>${country}</option>`,
    )
    .join("");
  elements.compareCountryWrap.hidden = state.compareMode !== "country";
}

function renderCompareControls() {
  elements.compareModeButtons.forEach((button) => {
    const active = button.dataset.compareMode === state.compareMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  renderCompareCountrySelect();
}

function renderAfroCountrySelect() {
  elements.afroCountrySelect.innerHTML = dataset.countries
    .map(
      (country) =>
        `<option value="${country}"${country === state.selectedAfroCountry ? " selected" : ""}>${country}</option>`,
    )
    .join("");
}

function renderLatestProfileCards(profileRows) {
  const activeKey = state.hoverProfileSummaryIndicator || state.selectedProfileSummaryIndicator;
  const row = profileRows.find((item) => item.key === activeKey);

  if (!row) {
    elements.latestProfileCards.innerHTML = `
      <article class="latest-profile-card latest-profile-card-empty">
        <p>Indicator summary</p>
        <strong>Hidden until selected</strong>
        <p class="indicator-summary">Hover over or click an indicator box plot on the left to reveal its country performance summary here.</p>
      </article>
    `;
    return;
  }

  elements.latestProfileCards.innerHTML = `
    <article class="latest-profile-card">
      <p>${row.title}</p>
      <strong>${row.value === null ? "No data" : row.value.toFixed(2)}</strong>
      <p class="indicator-year">${row.year ? `Latest year: ${row.year}` : "Latest year: not available"}</p>
      <p class="indicator-summary">${buildCountryNarrative(state.selectedProfileCountry, row.key)}</p>
      <p class="indicator-summary">${buildIndicatorPerformanceSummary(row)}</p>
      <p class="indicator-trend">${row.trendAnalysis?.summary || "Trend analysis: not available."}</p>
      <p class="indicator-compare">${
        row.compareValue !== null && row.value !== null && row.year
          ? `${row.compareLabel}: ${row.compareValue.toFixed(2)} in ${row.year} (${formatDelta(row.value - row.compareValue)} gap)`
          : `${row.compareLabel}: not available`
      }</p>
      <p class="indicator-rank">${
        row.comparison
          ? `Latest-score rank: ${row.comparison.rank} of ${row.comparison.total} countries (${row.comparison.percentile}th percentile in Africa)`
          : "Relative performance: not available"
      }</p>
    </article>
  `;
}

function buildIndicatorPerformanceSummary(row) {
  if (row.value === null || !row.comparison) {
    return "No summary is available because the latest observation is missing.";
  }

  const percentile = row.comparison.percentile;
  let standing = "mid-range";
  if (percentile >= 75) {
    standing = row.direction === "Higher is worse" ? "among the highest levels in Africa" : "among the strongest performers in Africa";
  } else if (percentile <= 25) {
    standing = row.direction === "Higher is worse" ? "among the lowest levels in Africa" : "among the weakest performers in Africa";
  }

  if (row.compareValue !== null) {
    const difference = row.value - row.compareValue;
    if (Math.abs(difference) < 0.01) {
      return `This latest result is broadly in line with ${row.compareLabel.toLowerCase()} and sits ${standing}.`;
    }
    const compareDirection = difference > 0 ? "above" : "below";
    return `This latest result sits ${standing} and is ${Math.abs(difference).toFixed(2)} points ${compareDirection} ${row.compareLabel.toLowerCase()}.`;
  }

  return `This latest result sits ${standing} for the latest reported year.`;
}

function toProfileMiniChartId(key) {
  return `latest-profile-mini-${key.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

function renderLatestProfileChart() {
  const country = state.selectedProfileCountry;
  renderCompareControls();
  const profileRows = getLatestIndicatorProfile(country);
  const compareLabel = getCompareLabel(country);
  const chartRows = profileRows;
  const latestProfileChartNode = document.getElementById("latest-profile-chart");
  Plotly.purge("latest-profile-chart");
  latestProfileChartNode.innerHTML = `
    <div class="latest-profile-note-inline">Each indicator uses its own scale for readability.</div>
    <div class="latest-profile-small-multiples">
      ${chartRows
        .map(
          (row) => `
            <article
              class="latest-profile-mini-card${(state.hoverProfileSummaryIndicator || state.selectedProfileSummaryIndicator) === row.key ? " active" : ""}"
              data-profile-summary-indicator="${row.key}"
              tabindex="0"
            >
              <div class="latest-profile-mini-head">
                <div>
                  <strong class="latest-profile-mini-title">${row.title}</strong>
                </div>
                <div class="latest-profile-mini-meta">
                  <strong>${row.value !== null && row.year ? `${row.value.toFixed(2)} (${row.year})` : "No data"}</strong>
                </div>
              </div>
              <div id="${toProfileMiniChartId(row.key)}" class="latest-profile-mini-plot"></div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  chartRows.forEach((row) => {
    const boxTrace = {
      type: "box",
      orientation: "h",
      x: row.distribution || [],
      y: new Array((row.distribution || []).length).fill("Africa distribution"),
      name: "Africa distribution",
      boxpoints: false,
      fillcolor: "rgba(207, 171, 98, 0.24)",
      line: {
        color: "rgba(95, 113, 68, 0.5)",
        width: 1.5,
      },
      marker: {
        color: "rgba(207, 171, 98, 0.55)",
      },
      hoverinfo: "skip",
    };

    const traceCountry = {
      type: "scatter",
      mode: "markers",
      x: row.value !== null ? [row.value] : [],
      y: row.value !== null ? ["Africa distribution"] : [],
      name: country,
      marker: {
        size: 12,
        color: themeColors.terracotta,
        line: { color: "#fff5e0", width: 2 },
        symbol: "diamond",
      },
      hoverinfo: "skip",
    };

    const traceCompare = {
      type: "scatter",
      mode: "markers",
      x: row.compareValue !== null ? [row.compareValue] : [],
      y: row.compareValue !== null ? ["Africa distribution"] : [],
      name: compareLabel,
      marker: {
        size: 11,
        color: themeColors.olive,
        line: { color: "#fff5e0", width: 2 },
        symbol: "circle",
      },
      hoverinfo: "skip",
    };

    const miniLayout = {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: themeColors.panelPlotSoft,
      margin: { t: 4, r: 10, b: 24, l: 28 },
      xaxis: {
        gridcolor: themeColors.grid,
        zeroline: false,
      },
      yaxis: {
        automargin: true,
        gridcolor: "rgba(0,0,0,0)",
        showticklabels: false,
      },
      hovermode: false,
      showlegend: false,
    };

    Plotly.react(toProfileMiniChartId(row.key), [boxTrace, traceCountry, traceCompare], miniLayout, chartConfig);
  });

  Array.from(latestProfileChartNode.querySelectorAll("[data-profile-summary-indicator]")).forEach((card) => {
    const key = card.dataset.profileSummaryIndicator;
    const activateHover = () => {
      state.hoverProfileSummaryIndicator = key;
      renderLatestProfileCards(profileRows);
      latestProfileChartNode
        .querySelectorAll("[data-profile-summary-indicator]")
        .forEach((node) => node.classList.toggle("active", node.dataset.profileSummaryIndicator === key || node.dataset.profileSummaryIndicator === state.selectedProfileSummaryIndicator));
    };

    const clearHover = () => {
      state.hoverProfileSummaryIndicator = null;
      renderLatestProfileCards(profileRows);
      latestProfileChartNode
        .querySelectorAll("[data-profile-summary-indicator]")
        .forEach((node) =>
          node.classList.toggle("active", node.dataset.profileSummaryIndicator === state.selectedProfileSummaryIndicator),
        );
    };

    card.addEventListener("mouseenter", activateHover);
    card.addEventListener("focus", activateHover);
    card.addEventListener("mouseleave", clearHover);
    card.addEventListener("blur", clearHover);
    card.addEventListener("click", () => {
      state.selectedProfileSummaryIndicator = key;
      state.hoverProfileSummaryIndicator = null;
      renderLatestProfileChart();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.selectedProfileSummaryIndicator = key;
        state.hoverProfileSummaryIndicator = null;
        renderLatestProfileChart();
      }
    });
  });

  elements.latestProfileTitle.textContent = `${country} latest governance profile`;
  elements.latestProfileNote.textContent = `Small multiple comparison charts of the latest non-missing value for each indicator, comparing ${country} with ${compareLabel}.`;
  renderLatestProfileCards(profileRows);
}

function renderAfroCardGrid() {
  const country = state.selectedAfroCountry;
  const linkedIndicators = getAfroLinkedIndicators(country);
  state.selectedAfroIndicator = normalizeAfroIndicatorKey(state.selectedAfroIndicator);
  if (!linkedIndicators.some((indicator) => indicator.key === state.selectedAfroIndicator)) {
    state.selectedAfroIndicator = linkedIndicators[0]?.key || "Score_CPI_Scores_Long";
  }

  elements.afroTitle.textContent = `${country} and Afrobarometer`;
  elements.afroNote.textContent = "Hover or click an indicator card to update the linked Afrobarometer response chart.";

  elements.afroCardGrid.innerHTML = linkedIndicators
    .map(
      (indicator) => `
        <button
          type="button"
          class="afro-link-card${indicator.key === state.selectedAfroIndicator ? " active" : ""}"
          data-afro-indicator="${indicator.key}"
        >
          <h4>${indicator.cardHeading}</h4>
          <p class="afro-link-status">${indicator.covered ? "Afrobarometer covered" : "Not covered by Afrobarometer"}</p>
        </button>
      `,
    )
    .join("");

  Array.from(elements.afroCardGrid.querySelectorAll("[data-afro-indicator]")).forEach((button) => {
    const activate = () => {
      state.selectedAfroIndicator = button.dataset.afroIndicator;
      renderAfroCardGrid();
      renderAfroResponseChart();
    };

    button.addEventListener("mouseenter", activate);
    button.addEventListener("focus", activate);
    button.addEventListener("click", activate);
  });
}

function renderAfroNotCovered(title) {
  Plotly.react(
    "afro-response-chart",
    [],
    {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: themeColors.panelPlotSoft,
      margin: { t: 10, r: 10, b: 10, l: 10 },
      xaxis: { visible: false },
      yaxis: { visible: false },
      annotations: [
        {
          text: "Not covered by Afrobarometer",
          x: 0.5,
          y: 0.5,
          xref: "paper",
          yref: "paper",
          showarrow: false,
          font: { family: "Space Grotesk, sans-serif", size: 22, color: themeColors.accentDark },
        },
      ],
    },
    chartConfig,
  );

  elements.afroResponseTitle.textContent = "Afrobarometer";
  elements.afroResponseNote.textContent = "This country is not reported in the linked Afrobarometer survey data.";
  elements.afroResponseLegend.innerHTML = "";
  elements.afroSurveySummary.innerHTML = `
    <span class="afro-survey-year">${surveyYearLabel}</span>
    <p class="afro-interpretation">No survey distribution is available for this country in the linked Afrobarometer question.</p>
  `;
  elements.afroResponseMeta.innerHTML = `
    <article class="afro-meta-card">
      <p>Coverage</p>
      <strong>Not covered by Afrobarometer</strong>
    </article>
  `;
}

function buildAfroInterpretation(metrics) {
  const balances = metrics.map((metric) => getAfroMetricBalance(metric));
  const avgPositive = average(balances.map((item) => item.positive).filter((value) => value !== null));
  const avgNegative = average(balances.map((item) => item.negative).filter((value) => value !== null));
  const avgNeutral = average(balances.map((item) => item.neutral).filter((value) => value !== null));

  if (avgPositive === null || avgNegative === null) {
    return "Survey balance is not available for this question.";
  }

  if (Math.abs(avgPositive - avgNegative) < 1) {
    return `Opinion is broadly balanced, with favorable views at ${avgPositive.toFixed(1)}% and unfavorable views at ${avgNegative.toFixed(1)}%${avgNeutral ? `, alongside ${avgNeutral.toFixed(1)}% neutral or middle responses.` : "."}`;
  }

  return avgPositive > avgNegative
    ? `Opinion leans favorable, with ${avgPositive.toFixed(1)}% favorable versus ${avgNegative.toFixed(1)}% unfavorable responses${avgNeutral ? ` and ${avgNeutral.toFixed(1)}% in the middle.` : "."}`
    : `Opinion leans unfavorable, with ${avgNegative.toFixed(1)}% unfavorable versus ${avgPositive.toFixed(1)}% favorable responses${avgNeutral ? ` and ${avgNeutral.toFixed(1)}% in the middle.` : "."}`;
}

function getAfroMetricScale(metricKey) {
  return responseScaleByMetric[metricKey] || [];
}

function getAfroDisplayLabel(metricKey, label) {
  return afroQuestionTextConfig[metricKey]?.responseLabels?.[label] || label;
}

function getAfroResponseScaleLabel(metricKey) {
  return (responseOrderByMetric[metricKey] || []).map((label) => getAfroDisplayLabel(metricKey, label)).join(" -> ");
}

function getAfroMetricBalance(metric) {
  const scale = getAfroMetricScale(metric.key);
  return scale.reduce(
    (acc, item) => {
      const value = Number(metric.data?.raw?.[item.label] ?? 0);
      if (item.side === "positive") {
        acc.positive += value;
      } else if (item.side === "negative") {
        acc.negative += value;
      } else {
        acc.neutral += value;
      }
      return acc;
    },
    { positive: 0, negative: 0, neutral: 0 },
  );
}

function getAfroSummaryStats(metrics) {
  const balances = metrics.map((metric) => getAfroMetricBalance(metric));
  return {
    favorable: average(balances.map((item) => item.positive).filter((value) => value !== null)),
    unfavorable: average(balances.map((item) => item.negative).filter((value) => value !== null)),
    neutral: average(balances.map((item) => item.neutral).filter((value) => value !== null)),
  };
}

function buildAfroLegendMarkup(metrics) {
  const trustMetricKeys = ["trust_president", "trust_police", "trust_parliament", "trust_army", "trust_courts"];
  const hasTrustMetrics = metrics.some((metric) => trustMetricKeys.includes(metric.key));
  const trustLegendMarkup = hasTrustMetrics
    ? `
        <section class="afro-legend-group">
          <p class="afro-legend-title">Trust scale</p>
          <div class="afro-legend-items">
            ${getAfroMetricScale("trust_president")
              .map(
                (item) => `
                  <div class="afro-legend-item">
                    <span class="afro-legend-swatch" style="background:${item.color};"></span>
                    <span class="afro-legend-label">${getAfroDisplayLabel("trust_president", item.label)}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      `
    : "";

  return metrics
    .filter((metric) => !trustMetricKeys.includes(metric.key))
    .map((metric) => {
      const scale = getAfroMetricScale(metric.key);
      const ordered = [
        ...scale.filter((item) => item.side === "negative"),
        ...scale.filter((item) => item.side === "neutral"),
        ...scale.filter((item) => item.side === "positive"),
      ];

      return `
        <section class="afro-legend-group">
          <p class="afro-legend-title">${metric.label}</p>
          <div class="afro-legend-items">
            ${ordered
              .map(
                (item) => `
                  <div class="afro-legend-item">
                    <span class="afro-legend-swatch" style="background:${item.color};"></span>
                    <span class="afro-legend-label">${getAfroDisplayLabel(metric.key, item.label)}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("") + trustLegendMarkup;
}

function buildDivergingAfroChart(metrics) {
  const traceOrder = [];
  const seen = new Set();

  metrics.forEach((metric) => {
    const scale = getAfroMetricScale(metric.key);
    const negative = scale.filter((item) => item.side === "negative").reverse();
    const neutral = scale.filter((item) => item.side === "neutral");
    const positive = scale.filter((item) => item.side === "positive");
    [...negative, ...neutral, ...positive].forEach((item) => {
      const key = `${item.label}-${item.side}`;
      if (!seen.has(key)) {
        seen.add(key);
        traceOrder.push(item);
      }
    });
  });

  return {
    data: [
      ...traceOrder.map((item) => ({
        type: "bar",
        name: item.label,
        showlegend: false,
        orientation: "h",
        y: metrics.map((metric) => metric.label),
        x: metrics.map((metric) => {
          const scale = getAfroMetricScale(metric.key);
          const present = scale.find((scaleItem) => scaleItem.label === item.label && scaleItem.side === item.side);
          if (!present) {
            return 0;
          }
          const value = Number(metric.data?.raw?.[item.label] ?? 0);
          return item.side === "negative" ? -value : value;
        }),
        customdata: metrics.map((metric) => {
          const scale = getAfroMetricScale(metric.key);
          const present = scale.find((scaleItem) => scaleItem.label === item.label && scaleItem.side === item.side);
          return [metric.label, item.label, present ? Number(metric.data?.raw?.[item.label] ?? 0) : null];
        }),
        marker: {
          color: item.color,
          line: { color: themeColors.borderSoft, width: 1 },
        },
        hovertemplate:
          "<b>%{customdata[0]}</b><br>" +
          "%{customdata[1]}: %{customdata[2]:.1f}%<extra></extra>",
      })),
    ],
    layout: {
      barmode: "relative",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: themeColors.panelPlotSoft,
      margin: { t: 10, r: 16, b: 60, l: 190 },
      xaxis: {
        title: "Response distribution (%)",
        tickvals: [-100, -50, 0, 50, 100],
        ticktext: ["100", "50", "0", "50", "100"],
        gridcolor: themeColors.grid,
        zeroline: false,
      },
      yaxis: {
        automargin: true,
        categoryorder: "array",
        categoryarray: metrics.map((metric) => metric.label),
        gridcolor: "rgba(0,0,0,0)",
      },
      showlegend: false,
    },
  };
}

function renderAfroResponseChart() {
  const country = state.selectedAfroCountry;
  state.selectedAfroIndicator = normalizeAfroIndicatorKey(state.selectedAfroIndicator);
  const linkedIndicator = getAfroLinkedIndicators(country).find((item) => item.key === state.selectedAfroIndicator);
  const selectedIndicator = linkedIndicator || { label: "Afrobarometer" };
  if (!linkedIndicator) {
    renderAfroNotCovered(selectedIndicator.label);
    return;
  }
  const metrics = linkedIndicator ? linkedIndicator.metrics : [];
  const coveredMetrics = metrics.filter((metric) => metric.data?.coverage === "covered");

  if (!coveredMetrics.length) {
    renderAfroNotCovered(`${selectedIndicator.label} and Afrobarometer`);
    return;
  }

  const chart = buildDivergingAfroChart(coveredMetrics);
  const summary = getAfroSummaryStats(coveredMetrics);

  Plotly.react("afro-response-chart", chart.data, chart.layout, chartConfig);
  elements.afroResponseLegend.innerHTML = buildAfroLegendMarkup(coveredMetrics);

  elements.afroResponseTitle.textContent = "Afrobarometer";
  elements.afroResponseNote.textContent = linkedIndicator.description;
  elements.afroSurveySummary.innerHTML = `
    <div class="afro-summary-topline">
      <span class="afro-survey-year">${surveyYearLabel}</span>
      <div class="afro-balance-strip">
        <article class="afro-balance-card">
          <p>Favorable</p>
          <strong>${summary.favorable !== null ? `${summary.favorable.toFixed(1)}%` : "N/A"}</strong>
        </article>
        <article class="afro-balance-card">
          <p>Unfavorable</p>
          <strong>${summary.unfavorable !== null ? `${summary.unfavorable.toFixed(1)}%` : "N/A"}</strong>
        </article>
        ${
          summary.neutral && summary.neutral > 0
            ? `<article class="afro-balance-card">
                 <p>Neutral / middle</p>
                 <strong>${summary.neutral.toFixed(1)}%</strong>
               </article>`
            : ""
        }
      </div>
    </div>
    <p class="afro-interpretation">${buildAfroInterpretation(coveredMetrics)}</p>
  `;
  elements.afroResponseMeta.innerHTML =
    linkedIndicator.type === "group"
      ? coveredMetrics
          .map(
            (metric) => `
              <article class="afro-meta-card">
                <p>Question label</p>
                <strong>${metric.label}</strong>
              </article>
            `,
          )
          .join("")
      : linkedIndicator.type === "groupedMetrics"
        ? coveredMetrics
            .map(
              (metric) => `
                <article class="afro-meta-card">
                  <p>Question label</p>
                  <strong>${metric.label}</strong>
                </article>
              `,
            )
            .join("")
      : `
          <article class="afro-meta-card">
            <p>Question label</p>
            <strong>${coveredMetrics[0].label}</strong>
          </article>
          <article class="afro-meta-card">
            <p>Response scale</p>
            <strong>${getAfroResponseScaleLabel(coveredMetrics[0].key)}</strong>
          </article>
        `;
}

function renderAll() {
  elements.activeYearLabel.textContent = state.selectedYear;
  elements.yearSlider.value = state.selectedYear;
  renderIndicatorEmptyState();
  renderStats();
  renderMap();
  renderCountryDetail();
}

function togglePlayback() {
  if (state.playing) {
    window.clearInterval(state.playbackHandle);
    state.playbackHandle = null;
    state.playing = false;
    elements.playButton.textContent = "Play";
    return;
  }

  state.playing = true;
  elements.playButton.textContent = "Pause";
  state.playbackHandle = window.setInterval(() => {
    const currentIndex = dataset.years.indexOf(state.selectedYear);
    const nextYear = dataset.years[(currentIndex + 1) % dataset.years.length];
    state.selectedYear = nextYear;
    renderAll();
  }, 1000);
}

function attachEvents() {
  elements.yearSlider.min = dataset.years[0];
  elements.yearSlider.max = dataset.years[dataset.years.length - 1];
  elements.yearSlider.addEventListener("input", (event) => {
    state.selectedYear = Number(event.target.value);
    renderAll();
  });

  elements.playButton.addEventListener("click", togglePlayback);
  elements.rollingAverageToggle.addEventListener("change", (event) => {
    state.showRollingAverage = event.target.checked;
    renderCountryDetail();
  });
  elements.jumpFirstYearButton.addEventListener("click", () => {
    const availability = getIndicatorAvailability();
    if (availability.firstAvailableYear !== null) {
      state.selectedYear = availability.firstAvailableYear;
      renderAll();
    }
  });
  elements.countryProfileSelect.addEventListener("change", (event) => {
    syncSharedCountry(event.target.value);
    renderLatestProfileChart();
    renderCountryDetail();
    renderAfroCardGrid();
    renderAfroResponseChart();
  });
  elements.compareModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.compareMode = button.dataset.compareMode;
      renderLatestProfileChart();
      renderCountryDetail();
    });
  });
  elements.compareCountrySelect.addEventListener("change", (event) => {
    state.compareCountry = event.target.value;
    renderLatestProfileChart();
    renderCountryDetail();
  });
  elements.afroCountrySelect.addEventListener("change", (event) => {
    syncSharedCountry(event.target.value);
    renderLatestProfileChart();
    renderCountryDetail();
    renderAfroCardGrid();
    renderAfroResponseChart();
  });
  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navigateToTab(button.dataset.tab);
    });
  });
}

function init() {
  elements.countryCount.textContent = dataset.countries.length;
  elements.yearRangeStat.textContent = `${dataset.years[0]}-${dataset.years[dataset.years.length - 1]}`;
  elements.indicatorCount.textContent = indicatorMeta.length;
  syncYearForIndicator();
  renderTabs();
  renderIndicatorButtons();
  renderCountryProfileSelect();
  renderCompareControls();
  renderAfroCountrySelect();
  attachEvents();
  renderAll();
  renderLatestProfileChart();
  renderAfroCardGrid();
  renderAfroResponseChart();
}

init();
