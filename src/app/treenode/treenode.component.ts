import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-treenode',
  templateUrl: './treenode.component.html',
  styleUrls: ['./treenode.component.scss']
})
export class TreenodeComponent implements OnInit {
  zonecount: any;
  toggle: any;
  zone: any;
  togglenode: any;
  country: any = [];
  countryVal:any =[];
  zoneval:any = [];
  show:boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.country = data;
      this.countryVal = this.country.values;
      this.zone=this.countryVal[0]['values'][0]['values'];
      this.zonecount = this.zone.length;
      this.toggle = this.zone.map(i => false);
      this.togglenode =this.countryVal.map(i => false);
    })
  }
  expand(){
    this.show = !this.show;
  }
}
