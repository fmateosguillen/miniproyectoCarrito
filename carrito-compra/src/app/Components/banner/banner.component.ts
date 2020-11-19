import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner!:String;

  constructor() { }

  ngOnInit(): void {
  }

  comprobarGenero(){
    if(this.banner=="h"){
      return true;
    }else{
      return false;
    }
  }

  cambiarGenero(){
    if(this.banner == "h"){
      this.banner = "m";
    }else{
      this.banner = "h";
    }
  }

}
