import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
pastJobs: any = [];
  constructor(private service: JobServiceService) { }

  ngOnInit(): void {
    this.service.getJobs().subscribe(s => this.pastJobs = s);
  }

}
