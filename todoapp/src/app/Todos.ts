export class Todos
{
  title:string;
  sno:string;
  desc:string;
  active:boolean;
  constructor(title:string, sno:string, desc:string, active:boolean){
    this.title = title;
    this.sno = sno;
    this.desc=desc;
    this.active=active;

  }
}
