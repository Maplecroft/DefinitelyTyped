declare module L {
  export module Util {
    export function ajax(url: string, callback: (any) => void)
  }

  export interface IUtfGridOptions {
    resolution: number;
  }

  export interface IGridEvent {
    latlng: LatLng;
    data: any;
  }

  export interface IGridEventCallback {
    (e: IGridEvent): void;
  }

  export class UtfGrid {
    constructor(urlTemplate: string, options?: IUtfGridOptions);

    onAdd(map: L.Map): void;
    onRemove(): void;

    on(eventType: string, IGridEventCallback): void;
  }

  export function utfGrid(): UtfGrid;
}
