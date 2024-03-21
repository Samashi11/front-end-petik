function download() {
  return new Promise((resolve,reject) => {
    setTimeout (() => {
      resolve("Download selama 3 detik");
    },3000);
  });
}

function verify() {
  return new Promise((resolve,reject) => {
    setTimeout (() => {
      resolve("Verify selama 2 detik");
    }, 2000);
  });
}

function notify() {
  console.log("Download Selesai");
}

// async unutk memberi tahu bahwa ada oprasi asynchronous 
async function main() {
  // 
  console.log(await download());
  console.log(await verify());
  notify();
}
main();