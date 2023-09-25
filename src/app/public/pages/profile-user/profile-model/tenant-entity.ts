export class TenantEntity {
    id!:number;
    name!:string;
    lastName!:string;
    iphone!:number;
    gmail!:string;
    numbercar!:number;

  constructor(name:string, lastName:string, iphone:number, gmail:string, numbercar:number) {
    this.id=0;
    this.name='';
    this.lastName='';
    this.iphone=0;
    this.gmail='';
    this.numbercar=0;
  }

  get fullName():string{
    return `${this.name} ${this.lastName} ${this.iphone} ${this.gmail} ${this.numbercar}` .trim();
  }


}

