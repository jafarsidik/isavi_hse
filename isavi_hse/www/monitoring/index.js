// import './style.css';
// import Map from 'ol/Map.js';
// import OSM from 'ol/source/OSM.js';
// import TileLayer from 'ol/layer/Tile.js';
// import View from 'ol/View.js';
/*
var Map = ol.Map;
var Overlay = ol.Overlay;
var View = ol.View;
var toStringHDMS = ol.coordinate.toStringHDMS;
var TileLayer = ol.layer.Tile;
var toLonLat = ol.proj.toLonLat;
var TileJSON = ol.source.TileJSON;
*/
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: [53.51,56.13],
      zoom: 4
    })
  });
  /*
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});
*/
