import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../app.component';
import { WelcomedataService } from '../service/data/welcomedata.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message  = 'some welcome message';
  welcomeMessageFromService: string;
  errorMessageFromServer: string;
  name ='';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomedataService) { 

  }

  ngOnInit()  {
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("last line of getWelcomeMessage");
  }

  getWelcomeMessageWithParam() {
    this.service.executeHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log("last line of getWelcomeMessage");
  }


  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log(response.message);
  }

  handleErrorResponse(error) {
    console.log(error.error.message);
    this.errorMessageFromServer = error.error.message;
  }

}
