import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule, PreloadAllModules } from '@angular/router'; //for preloading all modules 
import { RouterModule } from '@angular/router';

import {QuicklinkStrategy, QuicklinkModule} from 'ngx-quicklink';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestlinkComponent } from './testlink/testlink.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TestlinkComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    QuicklinkModule,// for quicklink
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'nyan',
        loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      }
      // {
      //   path: 'books',
      //   loadChildren: () =>
      //     import('./testlink/testlink.module').then(
      //       m => m.TestlinkModule
      //     ),
      //   data: { preload: true }
      // }
    ] , {
      // preloadingStrategy: PreloadAllModules // For loading all modules which are lazyloaded
      preloadingStrategy: QuicklinkStrategy
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
