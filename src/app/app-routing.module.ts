import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { JobDetailsComponent } from './job-details/job-details.component';
// import {NotfoundComponent} from './components/notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "jobs", component: JobsComponent},
  { path: "jobs/:jobId", component: JobDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

