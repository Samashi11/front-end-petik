/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  return new Promise((resolve) => {
    setTimeout (() => {
      console.log(result);
      resolve();
    },2000);
  });
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = () => {
  console.log("Downloading File...");
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve("Microsoft-10.iso");
    },2000);
  });
}

const main = async () => {
  try {
    const result = await download();
    console.log(`Download Completed : ${result}`);
  } catch (error) {
    console.error("Download Failed",error)
  }
}

main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
