const promise = new Promise((resolve, reject) => {
  resolve("Done.");
});

promise.then((data) => {
  console.log(data);
});
