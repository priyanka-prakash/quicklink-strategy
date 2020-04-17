// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })


// export class OnDemandPreloadOptions {
//   constructor(public routePath: string, public preload = true) {}
// }

// export class OnDemandPreloadService {
//   private subject = new Subject<OnDemandPreloadOptions>();
//   state = this.subject.asObservable();

//   startPreload(routePath: string) {
//     const message = new OnDemandPreloadOptions(routePath, true);
//     this.subject.next(message);
//   }
// }