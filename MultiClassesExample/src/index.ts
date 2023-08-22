
import  { ItemGrid }  from './ItemGrid.js';
   

let initFlag : boolean = false;


type   HtmlControl =  HTMLElement | null;


let myGrid : ItemGrid;

function closeBanner() : void {
    console.log('closeBanner 2');


    const promoHeader = document.getElementById("promo-header");


    if ( promoHeader !== null ) {
        promoHeader.style.visibility = "hidden";
    }
   

    console.log(promoHeader);
   
}

export function init() : void {

    // This is a dirty flag, and SHOULD NOT be used! For some reason(s), the index.js is called twice by the browser, but no explanation found for now...
    if (initFlag === true) {
        console.log('We been here before!');
        return;
    }

    initFlag = true;
    console.log(`Testing Typescript exports and imports`);

    setEventHandlers();

    //  let myGrid : ItemGrid;
     myGrid = new ItemGrid("View Traveller");
     console.log(`My Grid ${myGrid.getName()}`);

     myGrid.getDataBank().addItem('daniel');
     myGrid.getDataBank().addItem('Jocelyne');
     myGrid.getDataBank().addItem('Caro');
     


}

const setEventHandlers  = () => {


    console.log("setting the EventHandlers...");

    
     let closeButton : HtmlControl;
     closeButton = document.getElementById("promo-header-close-button");
     
     if ( closeButton !== null)    closeButton.addEventListener("click", closeButtonClickHandler );


     let displayButton : HtmlControl;     
     displayButton = document.getElementById("action-button");
     
     if ( displayButton !== null)  displayButton.addEventListener("click", displayButtonClickHandler );


        

}

const closeButtonClickHandler  = () => {
    
    let promoHeader : HtmlControl;
     
    promoHeader = document.getElementById("promo-header");

    if ( promoHeader !== null ) {
        promoHeader.style.visibility = "hidden";
    }

}

const displayButtonClickHandler  = () => {

    // console.log(`My Grid ${myGrid.getName()}`);

    let data =  myGrid.getDataBank();
    let results = data.getItems();
    let dataContentZone : HtmlControl;
     
    
    
    dataContentZone = document.getElementById("data-content");


    if ( dataContentZone !== null ) { 

        let resultString : string = "";

        results.forEach( element => {
            resultString  += `<div>${element}</div>`;                
           } );
        
           dataContentZone.innerHTML += `${resultString}`;
    }

   

    

    
   
    
   


  
    
}

init();