import { Injectable } from '@angular/core';

@Injectable()
export class InfoboxLoader {

  private scriptLoadingPromise: Promise<void>;

  load(): Promise<void> {
    if (this.scriptLoadingPromise) {
      return this.scriptLoadingPromise;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = '//rawgit.com/googlemaps/v3-utility-library/master/infobox/src/infobox.js';

    this.scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
      script.onload = () => {
        resolve( window['InfoBox'] );
      };
      script.onerror = (error: Event) => { reject(error); };
    });

    document.body.appendChild(script);
    return this.scriptLoadingPromise;
  }
}
