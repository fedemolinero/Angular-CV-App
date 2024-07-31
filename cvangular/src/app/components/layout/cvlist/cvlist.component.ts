import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResumeModel } from '@app/models/response.model';
import { DataService } from '@app/services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cvlist',
  templateUrl: './cvlist.component.html',
  styleUrl: './cvlist.component.scss'
})
export class CvlistComponent implements OnInit, OnDestroy {

  cvList!: ResumeModel;
  private cvListSubscription: Subscription = new Subscription;

  constructor(
    private personalDataService: DataService
  ) { }

  ngOnInit(): void {
    this.getCVList();
  }

  ngOnDestroy(): void {
    if (this.cvListSubscription) {
      this.cvListSubscription.unsubscribe();
    }
  }

  getCVList() {
    this.cvListSubscription = this.personalDataService.getCvList()
      .subscribe(
        {
          next: (cvListResponse: ResumeModel) => {
            console.log(cvListResponse)
            this.cvList = cvListResponse;
          },
          error: (e) => {
            console.error(e);
          }
        }
      );
  }

}