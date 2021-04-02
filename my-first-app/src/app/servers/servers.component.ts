import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
serverName='Testserver';serverCreated= false;
  constructor() { 

    setTimeout(() =>{
      this.allowNewServer= true;
    },2000);
  }

  ngOnInit(): void {
  }
  onUpdateServername(event: Event){
this.serverName=(<HTMLInputElement>event.target).value;
  }


  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus='Server was created and name is '+ this.serverName;
    setTimeout(() =>{
      this.serverCreationStatus= 'No server was created';
    },2000);
  }
}
