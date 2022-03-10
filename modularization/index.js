// TODO 3: Impor class Tiger dari berkas Tiger.js.
// TODO 4: Impor class Wolf dari berkas Wolf.js.

const Tiger = require('./Tiger');// TODO 3
const Wolf = require('./Wolf');// TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength < tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);