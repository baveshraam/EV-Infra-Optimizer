import { MappingAPI } from "../app/services/mapping/interfaces/mapping";

export const environment = {
  name: 'dev',
  version: '8.7.0-dev',
  production: false,
  analyticsId: '',
  googleMapsKey: '',
  mapBoxToken: '', // remove token, not used
  mapKitToken: '',
  enableStaticMaps: false,

  // ✅ Change this to use MapLibre (custom tiles)
  defaultMapProvider: MappingAPI.MAPLIBRE, // ← Replace 4 with MappingAPI.MAPLIBRE

  apiBase: 'https://api-01.openchargemap.io',
  apiKey: '1d192491-c085-4563-9dbb-b1f09a2e9c66',

  // ✅ Add this custom tile provider config
  mapLibreTileSource: {
    tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
    attribution: "&copy; OpenStreetMap contributors"
  },

  enabledFeatures: [
    'MAP',
    'ADD_COMMENT',
    'ADD_PHOTO',
    'FAVOURITES',
    'FILTER_OPTIONS_BY_COUNTRY',
    'ADD_POI',
    'EDIT_POI',
    'LAYERS'
  ]
};
// Note: This is a development environment configuration file.    
// It is used for local development and testing purposes.
// Do not use this configuration in production environments.
// For production, use the environment.prod.ts file.
// The API key and base URL are set for development purposes.
// Ensure to replace the API key and base URL with production values in environment.prod.ts.
// The default map provider is set to MapLibre for custom tiles.
// The mapLibreTileSource is configured to use OpenStreetMap tiles.
// The enabledFeatures array lists the features available in this environment.
// The version is set to '8.7.0-dev' indicating a development version.
// The analyticsId is left empty for development purposes.
// The googleMapsKey and mapKitToken are also left empty for development.
// The enableStaticMaps is set to false, indicating static maps are not enabled in this environment.



