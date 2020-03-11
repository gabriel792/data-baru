import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.page.html',
  styleUrls: ['./interface.page.scss'],
})
export class InterfacePage implements OnInit {
  navCtrl: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pindah() {
    this.router.navigate(['login'])
  }

}
