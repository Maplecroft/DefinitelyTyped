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

  export class UtfGrid implements IEventPowered {
    constructor(urlTemplate: string, options?: IUtfGridOptions);

    onAdd(map: L.Map): void;
    onRemove(): void;

    ////////////
    //// IEventPowered members
    ////////////

    addEventListener(type: string, fn: (e: LeafletEvent) => void, context?: any): IEventPowered;
    addEventListener(eventMap: any, context?: any): IEventPowered;
    removeEventListener(type: string, fn?: (e: LeafletEvent) => void, context?: any): IEventPowered;
    removeEventListener(eventMap: any, context?: any): IEventPowered;
    hasEventListeners(type: string): boolean;
    fireEvent(type: string, data?: any): IEventPowered;
    on(type: string, fn: (e: LeafletEvent) => void, context?: any): IEventPowered;
    on(eventMap: any, context?: any): IEventPowered;
    off(type: string, fn?: (e: LeafletEvent) => void, context?: any): IEventPowered;
    off(eventMap: any, context?: any): IEventPowered;
    fire(type: string, data?: any): IEventPowered;
  }

  export function utfGrid(): UtfGrid;
}
