import {DonutMaker} from "./DonutMaker.js";
const donutMaker1 = new DonutMaker();




//consts
const donutButton = document.querySelector(".donut-button");
const donutCount = document.querySelector(".donut-count");
const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
const donutMultiplierButton = document.querySelector(".donut-multiplier-button");
const autoClickerCount = document.querySelector(".auto-clicker-count");
const autoClickerButton = document.querySelector(".auto-clicker-button");
const resetButton = document.querySelector(".reset-button");
const autoClickerCost = document.querySelector(".auto-clicker-price");
const donutMultiplierCost = document.querySelector(".donut-multiplier-price");
const aboutUsButton = document.querySelector(".au-button");
const aboutUsDropdownContent = document.getElementById("au-dropdown-content");
const inspirationButton = document.querySelector(".ins-button");
const inspirationDropdownContent = document.getElementById("ins-dropdown-content");
const contactButton = document.querySelector(".contact-button");
const contactDropdownContent = document.getElementById("contact-dropdown-content");
const donutValue = document.querySelector(".donut-value");



//Nav dropdown functionality

aboutUsButton.addEventListener("click", () => { 
    if (aboutUsDropdownContent.style.visibility='hidden') {
    aboutUsDropdownContent.style.visibility='visible';
    console.log("was hidden");
    }
    else if (aboutUsDropdownContent.style.visibility='visible'){
    aboutUsDropdownContent.style.visibility='hidden';
    console.log("wasn't hidden");
    };
});

inspirationButton.addEventListener("click", () => { 
    if (inspirationDropdownContent.style.visibility='hidden') {
        inspirationDropdownContent.style.visibility='visible';
    console.log("was hidden");
    }
    else if (inspirationDropdownContent.style.visibility='visible'){
            inspirationDropdownContent.style.visibility='hidden';
    console.log("wasn't hidden");
    };
});

contactButton.addEventListener("click", () => { 
    if (contactDropdownContent.style.visibility='hidden') {
        contactDropdownContent.style.visibility='visible';
    console.log("was hidden");
    }
    else if (contactDropdownContent.style.visibility='visible'){
            contactDropdownContent.style.visibility='hidden';
    console.log("wasn't hidden");
    };
});

//Reset button functionality

resetButton.addEventListener("click", () => {
    location.reload();
    autoClickerButton.removeEventListener();
});


function autoClickerEnable() {
    if (donutMaker1.getDonutCount()<donutMaker1.getAutoClickerCost()) {
        autoClickerButton.disabled = true; 
         
    }
    else {
        autoClickerButton.disabled = false;  
    }
};

function donutMultiplierEnable() {
    if (donutMaker1.getDonutCount()<donutMaker1.getDonutMultiplierCost()) {
        donutMultiplierButton.disabled = true;
    }
    else {
        donutMultiplierButton.disabled = false;  

    }

};


//Donut clicker functionality

donutButton.addEventListener("click", () => {
    donutMaker1.recordClick();
    donutCount.innerText = donutMaker1.getDonutCount() ;
    donutMultiplierEnable()
    autoClickerEnable()
    }); 


function updateDonutValue() {
donutValue.innerText = `Donut Value: 
${donutMaker1.donutMultiplierValue()} donuts/click`;
}

//Donut Multiplier functionality

donutMultiplierButton.addEventListener("click", () => {
    donutMaker1.purchaseDonutMultiplier();
    donutMaker1.recordClick();
    updateDonutValue()
    donutMultiplierCount.innerText = donutMaker1.getDonutMultiplierCount() + " Donut Multipliers";
    donutMultiplierCost.innerText = `Price: $${donutMaker1.getDonutMultiplierCost()}`;
    donutCount.innerText = donutMaker1.getDonutCount();
    donutMultiplierEnable()
    autoClickerEnable()
    
});



    // donutCount.addEventListener("change", () => {
    //     donutMultiplierEnable() 
    //     console.log("changed")
    // });  


//Auto Clicker functionality

autoClickerButton.addEventListener("click", () => {
  
      donutMaker1.purchaseAutoClicker();
      console.log(donutMaker1.getAutoClickerCount());  
      console.log(donutMaker1.getDonutCount());
    

      setInterval(() => {
      autoClickerCount.innerText = donutMaker1.getAutoClickerCount() + " Auto Clickers";
      donutMaker1.recordClick();
      autoClickerCost.innerText = donutMaker1.getAutoClickerCost();
      autoClickerCost.innerText = `Price: $${donutMaker1.getAutoClickerCost()}`;
      donutCount.innerText = donutMaker1.getDonutCount();
      donutMultiplierEnable()
      autoClickerEnable()
    }, 1000);  
  });

    // autoClickerButton.addEventListener("click", () => {
    //     if (donutCount<autoClickerCost) {
    //         autoClickerButton.disabled = true; 
    //     }
    //     else {
    //         autoClickerButton.disabled = false;  
    //     }
    // });

    // donutMultiplierButton.addEventListener("click", () => {
    //     donutMultiplierEnable()
    // });


  //Price text 

  donutMultiplierCost.innerText = `Price: $${donutMaker1.getDonutMultiplierCost()}`;
  autoClickerCost.innerText = `Price: $${donutMaker1.getAutoClickerCost()}`;

 
  donutMultiplierEnable()
  autoClickerEnable()







