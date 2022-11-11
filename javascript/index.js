// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks 
getInstruction('mashedPotatos', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => { 
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 2, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`; 
          getInstruction("mashedPotatoes", 3, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`; 
            getInstruction("mashedPotatoes", 4, (step5) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`; 
              document.querySelector("#mashedPotatoes").innerHTML += '<li>Mashed potatoes are ready!</li>';
              document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            }, (error) => console.log(error)); 
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    });


// Iteration 2 - using promises

let obtain
obtainInstruction('steak', 0)
  .then(() => {obtain = true})
  .then(() => {
    for(let i in steak){
    document.querySelector("#steak").innerHTML += `<li>${steak}</li>`;
    obtainInstruction("steak", i); 
    }
  })
  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute('hidden');
  })
  .catch((err) => {
    console.log("2. catch(): ", err.message);
  })
  .finally(() => {
    console.log(`finally loading after .then and .catch is  ${obtain}`);
  });


// Iteration 3 using async/await
async function makeBroccoli() {
  for(let i in broccoli){
    await obtainInstruction('broccoli', i)
    document.querySelector("#broccoli").innerHTML += `<li>${broccoli[i]}</li>`
  }
  await obtainInstruction('broccoli', 6)
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  document.querySelector("#broccoliImg").removeAttribute('hidden');
}
makeBroccoli();

// Bonus 2 - Promise all
Promise.all(brusselsSprouts)
.then(async(steps)=> {
  for (let i in brusselsSprouts){
    await obtainInstruction('brusselsSprouts', i)
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps[i]}</li>`
  }
  await obtainInstruction('brusselsSprouts', 6)
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts is ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute('hidden');
})
