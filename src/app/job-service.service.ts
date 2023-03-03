import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './models/job';
// import {JobDetails} from './models/job-details';
// import { JobServiceService } from './job-service.service';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService{
  pastJobs: any[] = [
    {
      id: 1,
      title: "Code Enforcement Officer",
      description: "Enforce city Codes and Ordinance" ,
      duration:"7 years",
      employer: "City of Lewisville"
    },

    {
      id: 2,
      title: "Extended School Day Teacher",
      description: "Provide to childcare afterschool for an elementry school",
      duration: "8 months",
      employer: "Lewisville Independent School District"
    },

    {
      id: 3,
      title: "Team Lead of Receiving",
      description: "Manage a team to unload freight and put on shelves of store",
      duration: "3 years",
      employer: "Academy Sports and Outdoors"
    },
  ]

constructor() {}

  getJobs(): Observable<Job[]>{
    return of(this.pastJobs);
  }
  getJob(id: number): Observable<Job>{
    const job = this.pastJobs.find(j => j.id == id);
    return of(job);
  }
}
