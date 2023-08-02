import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent
{
  constructor(public srvApi:ApiService)
  {}
}
