import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-berhasil',
  templateUrl: './berhasil.page.html',
  styleUrls: ['./berhasil.page.scss'],
})
export class BerhasilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  next() {
    this.router.navigate(['tabs'])
  }
}
