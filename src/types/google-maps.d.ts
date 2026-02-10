declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMap;
        Marker: new (options: GoogleMarkerOptions) => GoogleMarker;
        Animation: {
          DROP: any;
          BOUNCE: any;
        };
      };
    };
  }

  interface GoogleMapOptions {
    center?: { lat: number; lng: number };
    zoom?: number;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
    styles?: any[];
  }

  interface GoogleMarkerOptions {
    position?: { lat: number; lng: number };
    map?: GoogleMap;
    title?: string;
    animation?: any;
  }

  interface GoogleMap {
    setCenter(latlng: { lat: number; lng: number }): void;
    setZoom(zoom: number): void;
  }

  interface GoogleMarker {
    setMap(map: GoogleMap | null): void;
    setPosition(latlng: { lat: number; lng: number }): void;
  }
}

export {};