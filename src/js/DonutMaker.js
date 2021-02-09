class DonutMaker { 

    constructor() {
        this._donutCount = 0; 
        this._autoClickerCost = 100;
        this._autoClickerCount = 0;
        this._donutMultiplierCost = 10; 
        this._donutMultiplierCount = 0;
        this._donutValue =1;
    }; 


    //dropdown menu functionality



    



    
    recordClick() {
        if (this._donutMultiplierCount===0 && this._autoClickerCount===0) {
            this._donutCount++;
        }
        else if(this._donutMultiplierCount>=1 && this._autoClickerCount===0) {
            this.activateDonutMultiplier();
        }
        else if (this._donutMultiplierCount===0 && this._autoClickerCount>=1) {
            this.activateAutoClicker();
        }
        else if (this._donutMultiplierCount>=1 && this._autoClickerCount>=1) {
            this.activateAutoClickerWithDonutMultiplier();
        }
    };


    //Auto clicker functions
    purchaseAutoClicker() {
        if (this._donutCount>=this._autoClickerCost) {
        this._donutCount -= this._autoClickerCost;
        this.increaseAutoClickerCount(); 
        this.increaseAutoClickerCost();
        } 
        else {
             throw new Error("You don't have enough donuts to purchase that! Keep clicking.");
        }
        };
    
    increaseAutoClickerCount() {
        return this._autoClickerCount ++;
        };

    increaseAutoClickerCost() {
        return this._autoClickerCost += Math.round(this._autoClickerCost*(.1*this._autoClickerCount))
        };

    activateAutoClicker() { 
        // for (let i = 0; i < this._autoClickerCount ; i++) {
        //     this.recordClick();
        //     };
        return this._donutCount += 1*this._autoClickerCount;
        };

    //Donut Multiplier functions
    purchaseDonutMultiplier() {
        if (this._donutCount>=this._donutMultiplierCost) {
        this._donutCount -= this._donutMultiplierCost;
        this.increaseDonutMultiplierCount(); 
        this.increaseDonutMultiplierCost();
        }
        else {
            throw new Error("You don't have enough donuts to purchase that! Keep clicking.");
        }
    }; 

    increaseDonutMultiplierCount() {
        return this._donutMultiplierCount +=1;
      };

    increaseDonutMultiplierCost() {
        return this._donutMultiplierCost += Math.round(this._donutMultiplierCost*(.1*this._donutMultiplierCount))
        };

    activateDonutMultiplier() {
        if (this._donutCount>0) {
            this._donutCount += Math.round(Math.pow(1.2, this._donutMultiplierCount))
        }
     };

    activateAutoClickerWithDonutMultiplier() {
        for (let i = 0; i < this._autoClickerCount ; i++) {
            this.activateDonutMultiplier();
        };
        };

    donutMultiplierValue() {
        return Math.pow(1.2, this._donutMultiplierCount);
        }


    //getters
    getDonutCount() {
      return this._donutCount;
     };

    getAutoClickerCost() {
        return this._autoClickerCost;
       };

    getAutoClickerCount() {
        return this._autoClickerCount;
       };

    getDonutMultiplierCount() {
        return this._donutMultiplierCount;
       };

    getDonutMultiplierCost() {
        return this._donutMultiplierCost;
       };

    getDonutValue() {
        return this._donutValue;
       };

    };

    export {DonutMaker,};


