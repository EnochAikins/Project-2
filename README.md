# Africa Governance Atlas

Interactive choropleth map for exploring governance indicators across African countries from 1990 to 2025.

## Files

- `index.html`: main app shell
- `styles.css`: layout and visual styling
- `app.js`: map logic, filters, and country trend chart
- `data/africa-governance.csv`: copied source dataset
- `data/governance-data.js`: browser-ready version of the dataset

## Open it

Open `index.html` in a browser. Because the data is bundled into `data/governance-data.js`, the app does not need a local server just to load the dataset.

Note: the chart library is loaded from the Plotly CDN, so an internet connection is still needed unless you later vend a local copy of Plotly.
