import { Component } from '@angular/core';
@Component({
  selector:"app-server",
  templateUrl:"./server.component.html",
  styles:[
    `.online{
      color: aliceblue;
    }`
  ]
})

export class ServerComponent{
  get serverId(): number {
    return this._serverId;
  }

  set serverId(value: number) {
    this._serverId = value;
  }

  get serverStatus(): string {
    return this._serverStatus;
  }

  set serverStatus(value: string) {
    this._serverStatus = value;
  }
  private _serverId : number = 10;
  private _serverStatus : string ="offline";

  constructor() {
    this.serverStatus=Math.random()>0.5?'online':'offline';
  }
  getColor(){
    return this._serverStatus==='online'?'green':'red';
  }
}
