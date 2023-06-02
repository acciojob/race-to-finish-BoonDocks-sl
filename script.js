window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`


function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const time = getRandomTime(1000, 5000);
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${time / 1000} seconds`);
    }, time);
  });
  
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    document.getElementById("output").innerText = result;
  })
  .catch((error) => {
    console.error(error);
  });

