import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedServer=true;
  serverCreateStatus="not created";
  serverName ='Testserver';
  serverCreated= false;
  servers =['Testserver','Testserver 2'];
  constructor(){
    setTimeout(()=>{
      this.allowedServer=false;
    },2000);
  }
  ngOnInit(){
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated=true;
    this.serverCreateStatus="Created";
  }
  onServeChange(event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
