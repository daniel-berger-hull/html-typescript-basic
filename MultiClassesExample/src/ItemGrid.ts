import { DataBank } from './DataBank.js';


export class ItemGrid {
    private items : string[] = [];
    private name : string = "";

    private dataBank : DataBank;


    constructor(name : string) {
        
        this.name = name;
        this.dataBank = new DataBank();
        
    }
    
    getName() : string         {  return this.name;     }
    getItems() : string[]      {  return this.items;    }
    getDataBank() : DataBank   {  return this.dataBank; }

    addData(newData: string) {
        this.dataBank.addItem(newData);
    }
}


