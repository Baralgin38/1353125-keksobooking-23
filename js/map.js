// eslint-disable-next-line no-redeclare
/* global L:readonly */

const SYMBOL_AFTER_DOT = 5;

const mapContainer = document.querySelector('#map-canvas');
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon ({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20,40],
});

const mainPin = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const address = document.querySelector('#address');

const setAddressValue = () => {
  const {lat, lng} = mainPin.getLatLng();
  address.value = `${lat.toFixed(SYMBOL_AFTER_DOT)}, ${lng.toFixed(SYMBOL_AFTER_DOT)}`;
};

mainPin.on('moveend', () => {
  setAddressValue();
});

const map = L.map(mapContainer);
const markerGroup = L.layerGroup().addTo(map);

const createPinSimilarAd = (ad, cardAd) => {
  const {lat, lng} = ad.location;

  const pin = L.marker (
    {
      lat,
      lng,
    },
    {
      icon: pinIcon,
    },
  );

  pin
    .addTo(markerGroup)
    .bindPopup(
      cardAd,
    );
};

const addPinSimilarAdsOnMap = (ad, cardAd) => {
  createPinSimilarAd(ad, cardAd);
};

const addMap = (adFormActivated, mapFiltersFormActivated) => {
  map.on('load', () => {
    adFormActivated();
    mapFiltersFormActivated();
    address.readOnly = true;
    setAddressValue();
  })
    .setView({
      lat: 35.6895,
      lng: 139.692,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPin.addTo(map);
};


export {addMap, addPinSimilarAdsOnMap};
