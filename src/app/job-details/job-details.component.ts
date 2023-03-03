import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from '../job-service.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobID: number = 0;
  job: Job = new Job();
  // description: Description = "";
  constructor(private actRoute: ActivatedRoute,  private service : JobServiceService) { }

  ngOnInit(): void {
    this.jobID = parseInt(this.actRoute.snapshot.paramMap.get("jobId")!) ?? 0;
    this.service.getJob(this.jobID).subscribe(s => this.job = s);
    
  // 
  }
 
}
