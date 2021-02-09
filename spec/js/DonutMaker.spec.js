// describe("I1 - FEATURE 1: Have a way to count donuts.", () => {
//     describe('Can add to dunut count', () => {  
//         let underTest;  

//         beforeEach(() => {
//             underTest = new DonutMaker;
//         });
//         it('should start with a click count of 0', () => {
//             expect(underTest._donutCount).toBe(0);
//         });

//         it('should add one click to the click counter when it records a click', () => {
//             underTest.recordClick(); 
//             expect(underTest._donutCount).toBe(1); 
//         });
//         it('should have a click of 2 when it records 2 click', () => {
//             underTest.recordClick(); 
//             underTest.recordClick(); 
//             expect(underTest._donutCount).toBe(2); 
//         });
//     });
// });

//     describe("I1 - FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.", () => {   
//         describe('Subtract the Auto Clicker cost from your donut count', () => { 
//             it('Should subtract 100 record clicks when an AutoClick is purchased', () => {
//                 let underTest;
//                 let maxClicks = 100;
//                 underTest = new DonutMaker;
//                 var i;
//                 for (i = 0; i < maxClicks; i++) {
//                     underTest.recordClick();
//                 }
//                 underTest.purchaseAutoClicker();
//                 expect(underTest._donutCount).toBe(0);
//             });
//         })
//     });

//     describe("I1 - FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.", () => {
//         describe('Increase the cost of the second Auto Clicker by an additional ten percent.', () => {  
//             let underTest;  
    
//             beforeEach(() => {
//                 underTest = new DonutMaker;
//             });
//             it('Should subtract 110 donuts when a second AutoClick is purchased', () => {
            
//                  var i;
//                  for (i = 0; i < 400; i++) {
//                      underTest.recordClick();
//                  }
//                 underTest.purchaseAutoClicker();
//                 underTest.purchaseAutoClicker();
//                 underTest.purchaseAutoClicker();
//                 expect(underTest._donutCount).toBe(58);
//             });
//             it('Auto Clicker Count should be 2 when Auto Clicker Count method is called twice ', () => {
            
//                  underTest.increaseAutoClickerCount();
//                  underTest.increaseAutoClickerCount(); 
//                  expect(underTest._autoClickerCount).toBe(2);
//             });
//             it('Auto Clicker Cost should be 110 when Increase Auto Clicker Cost is called  ', () => {
                
//                 underTest.increaseAutoClickerCount();
//                 underTest.increaseAutoClickerCost(); 
//                 expect(underTest._autoClickerCost).toBe(110);
//            });
//         });
//     });

//     describe("I1 - FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.", () => { 
//             let underTest;  
    
//             beforeEach(() => {
//                 underTest = new DonutMaker;
//             });
//             it('Donut count, Auto Clicker Count and Auto Clicker Cost should stay consistent if lower than Auto Clicker cost', () => {
//                 var i;
//                 for (i = 0; i < 80; i++) {
//                     underTest.recordClick();
//                 }

//                 underTest.purchaseAutoClicker();
//                 expect(underTest._autoClickerCount).toBe(0);
//                 expect(underTest._autoClickerCost).toBe(100);
//                 expect(underTest._donutCount).toBe(80);
//             });
//         });

//     describe('I1 - FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an Activate Auto Clickers event is called.', () => {
//             let underTest;  
    
//             beforeEach(() => {
//                 underTest = new DonutMaker;
//             });   
        
//             it('When the activate Auto Clickers event is executed, increase the donut total by the amount of Auto Clickers owned.', () => {
//                 var i;
//                 for (i = 0; i < 120; i++) {
//                     underTest.recordClick();
//                 }

//                 underTest.purchaseAutoClicker();
//                 underTest.activateAutoClicker();
//                 expect(underTest._donutCount).toBe(21);
//              })
//         });

    describe("I2 - FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 donuts from your donut count.", () => {   
        describe('Subtract the Donut Multiplier cost from your donut count', () => {
            // let underTest;  
    
            // beforeEach(() => {
            //     underTest = new DonutMaker;
            // }); 
         

            it('Should subtract 10 record clicks when a Donut Multiplier is purchased', () => {
                let underTest;
                underTest = new DonutMaker;

                var i;
                for (i = 0; i < 100; i++) {
                        underTest.recordClick();
                    }
                    underTest.purchaseDonutMultiplier();
                    expect(underTest._donutCount).toBe(90);
                });
            })
        });
        describe("I2 - FEATURE 2 : The cost of each Donut Multiplier will go up with each purchase.", () => {
            describe('Increase the cost of the second Donut Multiplier by an additional ten percent.', () => {  
                let underTest;  
        
                beforeEach(() => {
                    underTest = new DonutMaker;
                });
                it('Should subtract 13 donuts when a third Donut Multiplier is purchased', () => {
                
                     var i;
                     for (i = 0; i < 100; i++) {
                         underTest.recordClick();
                     }
                    underTest.purchaseDonutMultiplier();
                    underTest.purchaseDonutMultiplier();
                    underTest.purchaseDonutMultiplier();
                    expect(underTest._donutCount).toBe(66);
                });
                it('Donut Multiplier Count should be 2 when Donut Multiplier Count method is called twice ', () => {
                
                     underTest.increaseDonutMultiplierCount();
                     underTest.increaseDonutMultiplierCount(); 
                     expect(underTest._donutMultiplierCount).toBe(2);
                });
                it('Donut Multiplier Cost should be 110 when Increase Donut Multiplier Cost is called  ', () => {
                    
                    underTest.increaseDonutMultiplierCount();
                    underTest.increaseDonutMultiplierCost(); 
                    expect(underTest._donutMultiplierCost).toBe(11);
               });
            });
        });
        // describe("I2 - FEATURE 3 : Ensure that there are enough clicks to buy a Donut Multiplier.", () => { 
        //     let underTest;  
    
        //     beforeEach(() => {
        //         underTest = new DonutMaker;
        //     });
        //     it('Donut count, Donut Multiplier Count and Donut Multiplier Cost should stay consistent if lower than Donut Multiplier cost', () => {
        //         var i;
        //         for (i = 0; i < 8; i++) {
        //             underTest.recordClick();
        //         }

        //         underTest.purchaseDonutMultiplier();
        //         expect(underTest._donutMultiplierCount).toBe(0);
        //         expect(underTest._donutMultiplierCost).toBe(10);
        //         expect(underTest._donutCount).toBe(8);
        //     });
        // });
        // describe("I2 - FEATURE 4 : The first Donut Multiplier should increase the value of a click 1.2x.", () => { 
        //     describe('Increase the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased.', () => {
        //         let underTest;  
    
        //         beforeEach(() => {
        //             underTest = new DonutMaker;                                      
        //         });
            
        //     it('Donut count should be at 1.2 after 1 Donut Multiplier are purchased', () => {

        //         underTest.increaseDonutMultiplierCount();
        //         underTest.activateDonutMultiplier();
        //         expect(underTest._donutCount).toBe(1.2);             
        //         });
        //     });
        // });  
        // describe("I2 - FEATURE 5 : The subsequen Donut Multiplier should increase the value of a click exponentially.", () => { 
        //     describe('Increase the click value multiplier to 1.2 to the xth power, where _x_ is the amount of the Donut Multipliers count.', () => {
        //         let underTest;  
    
        //         beforeEach(() => {
        //             underTest = new DonutMaker;                                      
        //         });
            
        //     it('Donut count should be at 2.4 after 2 Donut Multipliers are purchased', () => {

        //         underTest.increaseDonutMultiplierCount();
        //         underTest.increaseDonutMultiplierCount();
        //         underTest.activateDonutMultiplier();
        //         expect(underTest._donutCount).toBe(2.4);             
        //         });
        //     });
        // }); 
        // describe("I2 - FEATURE 6 : FEATURE 6 : The Donut Multipliers click bonus will apply to clicks from the Auto Clicker.", () => { 
        //     describe('When an Add Auto Clickers event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier.', () => {
        //         let underTest;  
    
        //         beforeEach(() => {
        //             underTest = new DonutMaker;                                      
        //         });
            
        //     it('When the activate Auto Clickers with Donut Multiplier event is executed, increase the donut total by the amount of Auto Clickers owned, at a rate of 1.2 donuts/click.', () => {

        //         underTest.increaseDonutMultiplierCount();
        //         underTest.increaseAutoClickerCount()
        //         underTest.increaseAutoClickerCount()
        //         underTest.activateAutoClickerWithDonutMultiplier();
        //         expect(underTest._donutCount).toBe(2.4);             
        //         });
        //     });
        // });   