import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data :any  = [] 

  constructor(
    private userService : UserServiceService
  ) { }

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

}
