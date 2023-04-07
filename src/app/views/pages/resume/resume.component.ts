import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface resume {
  type:string;
  title:string;
  desc:string[];
  key_achievement:string[];
  location:string;
  org_name:string;
  org_link:string;
  achievement_link:string;
  start_date:Timestamp;
  end_date:Timestamp;
  current:boolean;
}
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  subscribe: Observable<resume[]>;
  constructor(firestore: Firestore) {
    const _collection = collection(firestore, 'resume');
    this.subscribe = collectionData(_collection) as Observable<resume[]>;
  }
  ngOnInit(): void {
  }

}
