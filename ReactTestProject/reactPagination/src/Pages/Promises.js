let myPromise = new Promise(function (myResolve, myReject) {
    let x = 2;
  
    // The producing code (this may take some time)
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise
    .then((result) => {
      console.log(result); // This will run if the promise is resolved.
    })
    .catch((error) => {
      console.error(error); // This will run if the promise is rejected.
    });
  