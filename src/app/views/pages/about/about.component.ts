import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface about_page {
  title: string,
  imgUrl:string,
  img_1:string,
  img_2:string,
  img_3:string,
  description:string[],
  direction:boolean,
  display:boolean
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  subscribe: Observable<about_page[]>;
  constructor(firestore: Firestore) {
    const _collection = collection(firestore, 'about');
    this.subscribe = collectionData(_collection) as Observable<about_page[]>;
  }
  
  ngOnInit(): void {
  }

}
