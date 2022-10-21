import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageRouterService {


  navigateToHome() {
    this.router.navigate([""]);
}

  constructor(private router:Router) { }
}
