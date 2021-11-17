let doTask = (success, failure) => {
  //doing some work
  let flag = false;
  if (flag) {
    success("Working Well");
  } else {
    failure("Not working Well");
  }
};

doTask(
  (message) => {
    console.log(message);
  },
  (err) => {
    console.error(err);
  }
);
