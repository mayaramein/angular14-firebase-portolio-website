import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface portfolio_project {
  title: string,
  type: string,
  project_type:string,
  subcategory: string,
  live_link: string,
  code_link: string,
  category: string,
  started_date: Timestamp,
  end_date: Timestamp,
  imgUrl:string,
  org_name:string,
  org_location:string,
  org_link:string,
  display:string,
  description:string[],
  direction:boolean,
  vidoeUrl:string
};

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  subscribe: Observable<portfolio_project[]>;
  constructor(firestore: Firestore) {
    const _collection = collection(firestore, 'portfolio');
    this.subscribe = collectionData(_collection) as Observable<portfolio_project[]>;
    
  }

  
  ngOnInit(): void {
  }

}
