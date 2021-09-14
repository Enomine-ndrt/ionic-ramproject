import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//importar libreria
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
profileId: string;
character;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');//va de acuerdo al nombre dado en el routing
    this.http.get('https://rickandmortyapi.com/api/character/'+this.profileId)
        .subscribe(res => 
            //console.log(res)
            this.character = res
        )
  }

}
