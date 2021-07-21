// eslint-disable-next-line no-redeclare
/* global L:readonly */

const SYMBOL_AFTER_DOT = 5;
const DEFAULT_LATITUDE = 35.6895;
const DEFAULT_LONGITUDE = 139.692;
const DEFAULT_ZOOM = 12;

const MainPinInformation = {
  URL: 'img/main-pin.svg',
  SIZE: [52, 52],
  ANCHOR: [26, 52],
};

const PinInformation = {
  URL: 'img/pin.svg',
  SIZE: [40, 40],
  ANCHOR: [20, 20],
};

const mapContainer = document.querySelector('#map-canvas');
const mainPinIcon = L.icon({
  iconUrl: MainPinInformation.URL,
  iconSize: MainPinInformation.SIZE,
  iconAnchor: MainPinInformation.ANCHOR,
});

const pinIcon = L.icon ({
  iconUrl: PinInformation.URL,
  iconSize: PinInformation.SIZE,
  iconAnchor: PinInformation.ANCHOR,
});

const mainPin = L.marker(
  {
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const address = document.querySelector('#address');

const setMainPinDefaultCoordinates = () => {
  mainPin.setLatLng({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  });
};

const setAddressValue = () => {
  const {lat, lng} = mainPin.getLatLng();
  address.value = `${lat.toFixed(SYMBOL_AFTER_DOT)}, ${lng.toFixed(SYMBOL_AFTER_DOT)}`;
};

mainPin.on('moveend', () => {
  setAddressValue();
});

const map = L.map(mapContainer);
const markerGroup = L.layerGroup().addTo(map);

const clearMarkerGroup = () => {
  markerGroup.clearLayers();
};

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

const addMap = (adFormActivated) => {
  map.on('load', () => {
    adFormActivated();
    address.readOnly = true;
    setAddressValue();
  })
    .setView({
      lat: DEFAULT_LATITUDE,
      lng: DEFAULT_LONGITUDE,
    }, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPin.addTo(map);
};


export {addMap, addPinSimilarAdsOnMap, setAddressValue, setMainPinDefaultCoordinates, clearMarkerGroup};
