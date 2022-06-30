let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 8,
            attribution: 'OpenStreetMap contributors',
      })
osm.addTo(map)

function popUPinfo(feature, layer) {
      layer.bindPopup(feature.properties.Aadress)
}


async function addGasStationsGeoJson(url) {
      const response = await fetch(url)
      const data = await response.json()
      const markers = L.geoJson(data)
      const clusters = L.markerClusterGroup()
      clusters.addLayer(markers)
      clusters.addTo(map)
}
addCelltowersGeoJson('geojson/gas_stations.geojson')

function defaultMapSettings() {
      map.setView([58.373523, 26.716045], 12)
}
