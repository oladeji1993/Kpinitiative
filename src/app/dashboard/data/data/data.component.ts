import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  mtnComp:boolean=true;
  gloComp:boolean=false;
  airtelComp:boolean=false;
  etisalatComp:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  mtn(){
    this.mtnComp=true,
    this.gloComp=false;
    this.airtelComp=false;
    this.etisalatComp=false;
  }

  glo(){
    this.mtnComp=false,
    this.gloComp=true;
    this.airtelComp=false;
    this.etisalatComp=false;
  }

  airtel(){
    this.mtnComp=false,
    this.gloComp=false;
    this.airtelComp=true;
    this.etisalatComp=false;
  }

  etisalat(){
    this.mtnComp=false,
    this.gloComp=false;
    this.airtelComp=false;
    this.etisalatComp=true;
  }

}
