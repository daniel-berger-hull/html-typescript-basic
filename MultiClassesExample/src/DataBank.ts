export class DataBank {
    private items : string[] = [];

    getItems() : string[]           {  return this.items; }

    addItem(newItem : string) {
        if (newItem === null)  return;

        this.items.push(newItem);
    }
}