let doTask = new Promise((resolve, reject) => {
  //do some task
  let flag = false;
  if (flag) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
doTask
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
