function download() {
  return new Promise((resolve,reject) => {
    setTimeout (() => {
      resolve("Download selama 3 detik");
    },3000);
  });
}

function verify() {
  1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Verify selama 2 detik");
    }, 2000);
  });
}

function notify() {
  console.log("Download Selesai");
}

function main() {
  // gunakan promise
  download().then((hasil) => {
    console.log(hasil);

    verify()
    .then((hasil) => {
      console.log(hasil);

      notify()
    })
    .catch((error) => {
      console.log(error);
    });
  });
}
main();