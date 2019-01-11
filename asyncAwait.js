//loadingProgress async and await Es8

const buildingWeapon = require('./weaponPlans.js');

async function progressMonitor() {
    let superWeapon = await buildingWeapon();
    console.log(` 
    
    ||||||||||||||||||||||||||||||||||||||||||||||||||
    
    ${superWeapon}[ready] on your command              
  
    ||||||||||||||||||||||||||||||||||||||||||||||||||
   




    `);
}

progressMonitor();