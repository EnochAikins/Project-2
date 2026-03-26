const indicatorMeta = [
  {
    key: "Score_GOV_IIAG",
    label: "IIAG",
    title: "Ibrahim Index of African Governance",
    description: "Broad governance performance across Africa.",
    scaleHint: "Higher scores suggest stronger governance.",
  },
  {
    key: "Score_GOV_EIU_Democracy",
    label: "EIU Democracy",
    title: "Economist Intelligence Unit Democracy Index",
    description: "Electoral process, civil liberties, and political culture.",
    scaleHint: "Higher scores suggest more democratic quality.",
  },
  {
    key: "Score_GOV_VDem_LibDem",
    label: "V-Dem Liberal",
    title: "V-Dem Liberal Democracy",
    description: "Liberal democracy performance from the V-Dem project.",
    scaleHint: "Higher scores suggest stronger liberal democracy.",
  },
  {
    key: "Score_GOV_WGI_GovEffect",
    label: "WGI Effectiveness",
    title: "World Governance Indicators Government Effectiveness",
    description: "State capacity and public service effectiveness.",
    scaleHint: "Higher scores suggest stronger institutions.",
  },
  {
    key: "Score_CPI_Scores_Long",
    label: "Corruption",
    title: "Corruption Perceptions Index",
    description: "Perceived public-sector corruption.",
    scaleHint: "Higher scores generally indicate lower corruption.",
  },
  {
    key: "Score_GOV_ACLED_Conflict",
    label: "ACLED Conflict",
    title: "ACLED Conflict Intensity",
    description: "Conflict exposure captured through ACLED.",
    scaleHint: "Read relative differences carefully across countries.",
  },
  {
    key: "Score_GOV_UCDP_Conflict",
    label: "UCDP Conflict",
    title: "UCDP Conflict Intensity",
    description: "Conflict intensity from the UCDP series.",
    scaleHint: "Read relative differences carefully across countries.",
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

const recentNationalElectionByCountry = {
  Algeria: "People's National Assembly: 12 June 2021",
  Angola: "General election: 24 August 2022",
  Benin: "National Assembly: 8 January 2023",
  Botswana: "National Assembly: 23 October 2019",
  "Burkina Faso": "National Assembly: 22 November 2020",
  Burundi: "National Assembly: 7 June 2020",
  Cameroon: "National Assembly: 9 February 2020; Senate: 13 March 2023",
  "Cabo Verde": "National Assembly: 18 April 2021",
  "Central African Republic": "National election: 27 December 2020; runoff 14 March 2021",
  Chad: "National Assembly: 10 April 2016; runoff 9 May 2016",
  Comoros: "Union Assembly: 19 January 2020; second round 23 February 2020",
  "Republic of the Congo": "National Assembly: 10 July 2022",
  "Democratic Republic of the Congo": "National Assembly: 30 December 2018",
  "Cote d'Ivoire": "National Assembly: 6 March 2021",
  Djibouti: "National Assembly: 24 February 2023",
  Egypt: "People's Assembly: 7-8 November 2020",
  "Equatorial Guinea": "House of Representatives and Senate: 20 November 2022",
  Eritrea: "Transitional National Assembly formed: May 1997",
  Ethiopia: "House of People's Representatives: 21 June 2021",
  Gabon: "National Assembly: 6 October 2018; second round 27 October 2018",
  Gambia: "National Assembly: 9 April 2022",
  Ghana: "National elections: 7 December 2020",
  Guinea: "National Assembly: 22 March 2020",
  "Guinea-Bissau": "People's National Assembly: 10 March 2019",
  Kenya: "National Assembly and Senate: 9 August 2022",
  Lesotho: "National Assembly: 7 October 2022",
  Liberia: "House of Representatives and Senate: 10 October 2017",
  Libya: "Parliamentary election: 20 February 2014",
  Madagascar: "National Assembly: 27 May 2019; Senate: 11 December 2020",
  Malawi: "National Assembly: 21 May 2019",
  Mali: "National Assembly: 29 March 2020; second round 19 April 2020",
  Mauritania: "National Assembly: 1 September 2018; second round 15 September 2018",
  Mauritius: "National Assembly: 7 November 2019",
  Morocco: "House of Representatives: 8 September 2021",
  Mozambique: "General election: 15 October 2019",
  Namibia: "National Assembly: 27 November 2019",
  Niger: "National elections: 27 December 2020; runoff 21 February 2021",
  Nigeria: "National Assembly and Senate: 25 February 2023",
  Rwanda: "Chamber of Deputies: 3 September 2018; Senate: 16-18 September 2019",
  "Sao Tome and Principe": "National Assembly: 25 September 2022",
  Senegal: "National Assembly: 31 July 2022",
  Seychelles: "National Assembly: 22-24 October 2020",
  "Sierra Leone": "National elections: 7 March 2018; runoff 31 March 2018",
  Somalia: "House of the People: 1 November 2021 to 25 February 2022",
  "South Africa": "National Assembly: 8 May 2019",
  "South Sudan": "National election: 9 July 2010",
  Sudan: "National Assembly and Council of States: 2 April 2015",
  Tanzania: "National elections: 28 October 2020",
  Togo: "National Assembly: 20 December 2018",
  Tunisia: "Assembly of Representatives: 17 December 2022; runoff 29 January 2023",
  Uganda: "National elections: 14 January 2021; runoff 10 February 2021",
  Zambia: "National elections: 12 August 2021",
  Zimbabwe: "House of Assembly and Senate: 30 July 2018",
  Eswatini: "House of Assembly: primary 18 August 2018; secondary 21 September 2018",
};

const state = {
  selectedIndicator: indicatorMeta[0].key,
  selectedYear: 1990,
  selectedCountry: null,
  selectedProfileCountry: null,
  selectedAfroCountry: null,
  selectedAfroIndicator: "Score_CPI_Scores_Long",
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

const elements = {
  indicatorGrid: document.getElementById("indicator-grid"),
  yearSlider: document.getElementById("year-slider"),
  activeYearLabel: document.getElementById("active-year-label"),
  playButton: document.getElementById("play-button"),
  mapTitle: document.getElementById("map-title"),
  detailTitle: document.getElementById("detail-title"),
  detailNote: document.getElementById("detail-note"),
  countrySummary: document.getElementById("country-summary"),
  countryProfile: document.getElementById("country-profile"),
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
  latestProfileTitle: document.getElementById("latest-profile-title"),
  latestProfileNote: document.getElementById("latest-profile-note"),
  latestProfileCards: document.getElementById("latest-profile-cards"),
  afroCountrySelect: document.getElementById("afro-country-select"),
  afroCardGrid: document.getElementById("afro-card-grid"),
  afroTitle: document.getElementById("afro-title"),
  afroNote: document.getElementById("afro-note"),
  afroResponseTitle: document.getElementById("afro-response-title"),
  afroResponseNote: document.getElementById("afro-response-note"),
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
state.selectedAfroCountry = state.selectedCountry;
state.selectedYear = dataset.years[0];

function getIndicator() {
  return indicatorMeta.find((item) => item.key === state.selectedIndicator);
}

function formatValue(value) {
  return value === null ? "No data" : value.toFixed(2);
}

function average(values) {
  if (!values.length) {
    return null;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getAfroMetric(country, metricKey) {
  return afrobarometerData[country]?.[metricKey] || null;
}

function getLatestIndicatorProfile(country) {
  const rows = rowsByCountry[country] || [];

  return indicatorMeta.map((indicator) => {
    const latestRow = [...rows].reverse().find((row) => row[indicator.key] !== null);
    let comparison = null;

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
    }

    return {
      key: indicator.key,
      label: indicator.label,
      title: indicator.title,
      description: indicator.description,
      value: latestRow ? latestRow[indicator.key] : null,
      year: latestRow ? latestRow.Year : null,
      comparison,
    };
  });
}

function getAfroLinkedIndicators(country) {
  return indicatorMeta.map((indicator) => {
    const link = afrobarometerIndicatorMap[indicator.key];
    const metrics = link.metrics.map((metric) => ({
      ...metric,
      data: getAfroMetric(country, metric.key),
    }));

    return {
      ...indicator,
      linkTitle: link.title,
      linkDescription: link.description,
      linkType: link.type,
      metrics,
      covered: metrics.some((metric) => metric.data?.coverage === "covered"),
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
    button.innerHTML = `<strong>${indicator.label}</strong><span>${indicator.description}</span>`;
    button.addEventListener("click", () => {
      state.selectedIndicator = indicator.key;
      renderIndicatorButtons();
      renderAll();
    });
    elements.indicatorGrid.appendChild(button);
  });
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

  return {
    validRows,
    values: validRows.map((row) => row.value),
    topRow: validRows.reduce((best, row) => (!best || row.value > best.value ? row : best), null),
    lowRow: validRows.reduce((best, row) => (!best || row.value < best.value ? row : best), null),
  };
}

function renderStats() {
  const indicator = getIndicator();
  const { validRows, values, topRow, lowRow } = buildMapData();
  const avg = average(values);

  elements.avgScore.textContent = avg === null ? "--" : avg.toFixed(2);
  elements.avgScoreNote.textContent = indicator.scaleHint;
  elements.topCountry.textContent = topRow ? topRow.country : "--";
  elements.topCountryNote.textContent = topRow ? `${topRow.value.toFixed(2)} in ${state.selectedYear}` : "No reported values";
  elements.lowCountry.textContent = lowRow ? lowRow.country : "--";
  elements.lowCountryNote.textContent = lowRow ? `${lowRow.value.toFixed(2)} in ${state.selectedYear}` : "No reported values";
  elements.coverageCount.textContent = `${validRows.length}/${dataset.countries.length}`;
  elements.coverageNote.textContent = `Countries with data for ${indicator.label} in ${state.selectedYear}.`;
}

function buildCountryProfileQuery(iso3) {
  return `
SELECT ?country ?countryLabel ?flagImage ?inception ?sovereignSince ?headOfStateLabel ?headOfGovernmentLabel ?nextElection ?nextElectionLabel ?nextElectionDate WHERE {
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
  const leaderName = profile.headOfStateLabel || profile.headOfGovernmentLabel || "Not available";
  const leaderLabel = profile.headOfStateLabel ? "Current head of state" : "Current head of government";
  const recentElection = recentNationalElectionByCountry[country] || "Not available from selected source";
  const flagMarkup = profile.flagImage
    ? `<img class="profile-flag" src="${profile.flagImage}" alt="Flag of ${country}" loading="lazy" />`
    : `<div class="profile-flag" aria-hidden="true"></div>`;

  elements.countryProfile.innerHTML = `
    <article class="profile-card">
      ${flagMarkup}
      <div class="profile-meta">
        <article>
          <p>Country</p>
          <strong>${country}</strong>
        </article>
        <article>
          <p>Independence date</p>
          <strong>${independenceDate}</strong>
        </article>
        <article>
          <p>${leaderLabel}</p>
          <strong>${leaderName}</strong>
        </article>
        <article>
          <p>Most recent national election</p>
          <strong>${recentElection}</strong>
        </article>
        <p class="profile-source">
          Independence dates from
          <a href="https://www.penglobalinc.com/independence-here-are-the-list-of-african-countries-and-their-independence-dates" target="_blank" rel="noreferrer">PEN Global</a>,
          election history from
          <a href="https://www.eisa.org/election-calendar/" target="_blank" rel="noreferrer">EISA</a>,
          and flag/current leadership from
          <a href="${profile.countryUrl}" target="_blank" rel="noreferrer">Wikidata</a>.
        </p>
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
  const { validRows, values } = buildMapData();
  const min = values.length ? Math.min(...values) : 0;
  const rawMax = values.length ? Math.max(...values) : 1;
  const max = rawMax === min ? min + 1 : rawMax;

  const trace = {
    type: "choropleth",
    locationmode: "ISO-3",
    locations: validRows.map((row) => row.iso3),
    z: validRows.map((row) => row.value),
    text: validRows.map((row) => row.country),
    customdata: validRows.map((row) => [row.country, row.value]),
    colorscale: [
      [0, "#f0d7b5"],
      [0.35, "#d49b53"],
      [0.65, "#c15d2a"],
      [1, "#6c2d13"],
    ],
    marker: {
      line: {
        color: "rgba(255,255,255,0.8)",
        width: 0.7,
      },
    },
    colorbar: {
      title: indicator.label,
      tickfont: { size: 11 },
    },
    zmin: min,
    zmax: max,
    hovertemplate: "<b>%{customdata[0]}</b><br>Score: %{customdata[1]:.2f}<extra></extra>",
  };

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    margin: { t: 10, r: 10, b: 10, l: 10 },
    geo: {
      scope: "africa",
      projection: { type: "natural earth" },
      bgcolor: "rgba(0,0,0,0)",
      lakecolor: "#d7e7eb",
      showlakes: true,
      showframe: false,
      showcountries: true,
      countrycolor: "rgba(255,255,255,0.85)",
      showocean: true,
      oceancolor: "#d7e7eb",
      landcolor: "#f6eee1",
    },
  };

  Plotly.react("map", [trace], layout, chartConfig);

  const mapNode = document.getElementById("map");
  if (!state.mapBound) {
    mapNode.on("plotly_click", (event) => {
      const point = event.points?.[0];
      if (!point) {
        return;
      }
      state.selectedCountry = point.customdata[0];
      state.selectedProfileCountry = point.customdata[0];
      state.selectedAfroCountry = point.customdata[0];
      elements.countryProfileSelect.value = state.selectedProfileCountry;
      elements.afroCountrySelect.value = state.selectedAfroCountry;
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
  const series = (rowsByCountry[state.selectedCountry] || []).map((row) => ({
    year: row.Year,
    value: row[indicator.key],
  }));

  const currentRow = series.find((row) => row.year === state.selectedYear);
  const validSeries = series.filter((row) => row.value !== null);
  const highest = validSeries.reduce((best, row) => (!best || row.value > best.value ? row : best), null);
  const lowest = validSeries.reduce((best, row) => (!best || row.value < best.value ? row : best), null);

  const trace = {
    type: "scatter",
    mode: "lines+markers",
    x: series.map((row) => row.year),
    y: series.map((row) => row.value),
    line: {
      color: "#c15d2a",
      width: 3,
      shape: "spline",
    },
    marker: {
      size: 7,
      color: "#6c2d13",
    },
    connectgaps: false,
    hovertemplate: "Year %{x}<br>Score %{y:.2f}<extra></extra>",
  };

  const highlightTrace =
    currentRow && currentRow.value !== null
      ? {
          type: "scatter",
          mode: "markers",
          x: [currentRow.year],
          y: [currentRow.value],
          marker: {
            size: 14,
            color: "#1e2a27",
            line: { width: 2, color: "#fff" },
          },
          hovertemplate: "Selected year %{x}<br>Score %{y:.2f}<extra></extra>",
        }
      : null;

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(255,250,241,0.75)",
    margin: { t: 10, r: 12, b: 42, l: 48 },
    xaxis: {
      title: "Year",
      tickmode: "linear",
      dtick: 5,
      gridcolor: "rgba(30,42,39,0.08)",
      zeroline: false,
    },
    yaxis: {
      title: indicator.label,
      gridcolor: "rgba(30,42,39,0.08)",
      zeroline: false,
    },
    showlegend: false,
  };

  const traces = highlightTrace ? [trace, highlightTrace] : [trace];
  Plotly.react("country-chart", traces, layout, chartConfig);

  elements.detailTitle.textContent = state.selectedCountry;
  elements.detailNote.textContent = indicator.title;
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
  loadCountryProfile(state.selectedCountry);
}

function renderCountryProfileSelect() {
  elements.countryProfileSelect.innerHTML = dataset.countries
    .map(
      (country) =>
        `<option value="${country}"${country === state.selectedProfileCountry ? " selected" : ""}>${country}</option>`,
    )
    .join("");
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
  elements.latestProfileCards.innerHTML = profileRows
    .map(
      (row) => `
        <article class="latest-profile-card">
          <p>${row.title}</p>
          <strong>${row.value === null ? "No data" : row.value.toFixed(2)}</strong>
          <p class="indicator-year">${row.year ? `Latest year: ${row.year}` : "Latest year: not available"}</p>
          <p class="indicator-rank">${
            row.comparison
              ? `Latest-score rank: ${row.comparison.rank} of ${row.comparison.total} countries (${row.comparison.percentile}th percentile in Africa)`
              : "Relative performance: not available"
          }</p>
        </article>
      `,
    )
    .join("");
}

function renderLatestProfileChart() {
  const country = state.selectedProfileCountry;
  const profileRows = getLatestIndicatorProfile(country);
  const chartRows = profileRows.filter((row) => row.value !== null);

  const trace = {
    type: "bar",
    orientation: "h",
    x: chartRows.map((row) => row.value),
    y: chartRows.map((row) => row.label),
    text: chartRows.map((row) => `${row.value.toFixed(2)} (${row.year})`),
    textposition: "auto",
    marker: {
      color: ["#c7562a", "#dd8f2f", "#6f8d3f", "#3f6a42", "#9f4f1a", "#b96b33", "#577736"],
      line: {
        color: "rgba(30,42,39,0.15)",
        width: 1,
      },
    },
    hovertemplate: "<b>%{y}</b><br>Latest score: %{x:.2f}<br>Year: %{text}<extra></extra>",
  };

  const layout = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(255,250,241,0.55)",
    margin: { t: 10, r: 16, b: 40, l: 120 },
    xaxis: {
      title: "Latest score",
      gridcolor: "rgba(30,42,39,0.08)",
      zeroline: false,
    },
    yaxis: {
      automargin: true,
      gridcolor: "rgba(0,0,0,0)",
    },
    showlegend: false,
  };

  Plotly.react("latest-profile-chart", [trace], layout, chartConfig);

  elements.latestProfileTitle.textContent = `${country} latest governance profile`;
  elements.latestProfileNote.textContent = "Latest non-missing value for each indicator, using the newest year available for that country.";
  renderLatestProfileCards(profileRows);
}

function renderAfroCardGrid() {
  const country = state.selectedAfroCountry;
  const linkedIndicators = getAfroLinkedIndicators(country);

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
          <h4>${indicator.label}</h4>
          <p>${indicator.linkDescription}</p>
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
      plot_bgcolor: "rgba(255,250,241,0.55)",
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
          font: { family: "Space Grotesk, sans-serif", size: 22, color: "#7f2f14" },
        },
      ],
    },
    chartConfig,
  );

  elements.afroResponseTitle.textContent = title;
  elements.afroResponseNote.textContent = "This country is not reported in the linked Afrobarometer survey data.";
  elements.afroResponseMeta.innerHTML = `
    <article class="afro-meta-card">
      <p>Coverage</p>
      <strong>Not covered by Afrobarometer</strong>
    </article>
  `;
}

function buildSingleAfroChart(metric, metricDef) {
  const order = responseOrderByMetric[metricDef.key] || Object.keys(metric.raw || {});

  return {
    data: [
      {
        type: "bar",
        x: order.map((label) => metric.raw?.[label] ?? 0),
        y: order,
        orientation: "h",
        marker: {
          color: "#c7562a",
          line: { color: "rgba(30,42,39,0.15)", width: 1 },
        },
        hovertemplate: "%{y}<br>%{x:.1f}%<extra></extra>",
      },
    ],
    layout: {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(255,250,241,0.55)",
      margin: { t: 10, r: 16, b: 40, l: 190 },
      xaxis: {
        title: "Share of respondents (%)",
        gridcolor: "rgba(30,42,39,0.08)",
        zeroline: false,
      },
      yaxis: {
        automargin: true,
        gridcolor: "rgba(0,0,0,0)",
      },
      showlegend: false,
    },
  };
}

function buildGroupedAfroChart(metrics) {
  const responseLabels = ["Not at all", "Just a little", "Somewhat", "A lot"];
  const colors = ["#9f4f1a", "#c7562a", "#dd8f2f", "#5b7a32"];

  return {
    data: responseLabels.map((responseLabel, index) => ({
      type: "bar",
      name: responseLabel,
      x: metrics.map((metric) => metric.label),
      y: metrics.map((metric) => metric.data?.raw?.[responseLabel] ?? 0),
      marker: { color: colors[index] },
      hovertemplate: "%{x}<br>" + responseLabel + ": %{y:.1f}%<extra></extra>",
    })),
    layout: {
      barmode: "group",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(255,250,241,0.55)",
      margin: { t: 10, r: 16, b: 90, l: 50 },
      xaxis: {
        tickangle: -18,
        gridcolor: "rgba(0,0,0,0)",
      },
      yaxis: {
        title: "Share of respondents (%)",
        gridcolor: "rgba(30,42,39,0.08)",
        zeroline: false,
      },
      legend: {
        orientation: "h",
        y: 1.12,
      },
    },
  };
}

function buildGroupedMetricAfroChart(metrics) {
  const colors = ["#c7562a", "#5b7a32"];

  return {
    data: metrics.map((metric, index) => {
      const order = responseOrderByMetric[metric.key] || Object.keys(metric.data?.raw || {});
      return {
        type: "bar",
        name: metric.label,
        x: order,
        y: order.map((response) => metric.data?.raw?.[response] ?? 0),
        marker: { color: colors[index % colors.length] },
        hovertemplate: `${metric.label}<br>%{x}: %{y:.1f}%<extra></extra>`,
      };
    }),
    layout: {
      barmode: "group",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(255,250,241,0.55)",
      margin: { t: 10, r: 16, b: 90, l: 55 },
      xaxis: {
        tickangle: -18,
        gridcolor: "rgba(0,0,0,0)",
      },
      yaxis: {
        title: "Share of respondents (%)",
        gridcolor: "rgba(30,42,39,0.08)",
        zeroline: false,
      },
      legend: {
        orientation: "h",
        y: 1.12,
      },
    },
  };
}

function renderAfroResponseChart() {
  const country = state.selectedAfroCountry;
  const linkedIndicator = afrobarometerIndicatorMap[state.selectedAfroIndicator];
  const selectedIndicator = indicatorMeta.find((item) => item.key === state.selectedAfroIndicator);
  const metrics = linkedIndicator.metrics.map((metric) => ({
    ...metric,
    data: getAfroMetric(country, metric.key),
  }));
  const coveredMetrics = metrics.filter((metric) => metric.data?.coverage === "covered");

  if (!coveredMetrics.length) {
    renderAfroNotCovered(`${selectedIndicator.label} and Afrobarometer`);
    return;
  }

  const chart =
    linkedIndicator.type === "group"
      ? buildGroupedAfroChart(coveredMetrics)
      : linkedIndicator.type === "groupedMetrics"
        ? buildGroupedMetricAfroChart(coveredMetrics)
      : buildSingleAfroChart(coveredMetrics[0].data, coveredMetrics[0]);

  Plotly.react("afro-response-chart", chart.data, chart.layout, chartConfig);

  elements.afroResponseTitle.textContent = "Afrobarometer";
  elements.afroResponseNote.textContent = linkedIndicator.description;
  elements.afroResponseMeta.innerHTML =
    linkedIndicator.type === "group"
      ? coveredMetrics
          .map(
            (metric) => `
              <article class="afro-meta-card">
                <p>${metric.label}</p>
                <strong>Response distribution shown</strong>
              </article>
            `,
          )
          .join("")
      : linkedIndicator.type === "groupedMetrics"
        ? coveredMetrics
            .map(
              (metric) => `
                <article class="afro-meta-card">
                  <p>Linked Afrobarometer question</p>
                  <strong>${metric.label}</strong>
                </article>
              `,
            )
            .join("")
      : `
          <article class="afro-meta-card">
            <p>Linked Afrobarometer question</p>
            <strong>${coveredMetrics[0].label}</strong>
          </article>
        `;
}

function renderAll() {
  elements.activeYearLabel.textContent = state.selectedYear;
  elements.yearSlider.value = state.selectedYear;
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
  elements.countryProfileSelect.addEventListener("change", (event) => {
    state.selectedProfileCountry = event.target.value;
    renderLatestProfileChart();
  });
  elements.afroCountrySelect.addEventListener("change", (event) => {
    state.selectedAfroCountry = event.target.value;
    renderAfroCardGrid();
    renderAfroResponseChart();
  });
}

function init() {
  elements.countryCount.textContent = dataset.countries.length;
  elements.yearRangeStat.textContent = `${dataset.years[0]}-${dataset.years[dataset.years.length - 1]}`;
  elements.indicatorCount.textContent = indicatorMeta.length;
  renderIndicatorButtons();
  renderCountryProfileSelect();
  renderAfroCountrySelect();
  attachEvents();
  renderAll();
  renderLatestProfileChart();
  renderAfroCardGrid();
  renderAfroResponseChart();
}

init();
