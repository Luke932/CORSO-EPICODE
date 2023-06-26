import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ActivePostsComponent } from './component/active-posts/active-posts.component';
import { InactivePostsComponent } from './component/inactive-posts/inactive-posts.component';
import { HomeComponent } from './component/home/home.component';
import { CustomComponent } from './component/custom/custom.component';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'primo', component: ActivePostsComponent },
  { path: 'secondo', component: InactivePostsComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    HomeComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
