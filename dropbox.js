const { Dropbox } = require('dropbox');
const fs = require('fs');
const readline = require('readline');

const dbx = new Dropbox({ accessToken: 'sl.u.AGA6abMO4ndVzWn_QhfbsdYGMUjW1yif9TjuYX-F8nk4UOYH8XfV7WUwqu6keE1AD41DKIimXd8qMLbsh3usomY0_nMU7adWMb8m-3ooqMMHYspTk6Ja7Hhy67sKG-HtCAAARGSWgQ-WNO9KJFKWC22rc2Lhj5aMDJex_WqKhodRV0J1mbC6GdmrFQO6Dfcq3A_uHsxEA7DrTN_KMW1wKOC-kSCnDrmtWOBH1Sb01ryPjBJD9MDx9p3iqLWaYU4qFYwmnrOuegfY7xIeI4Mp9unASHU_TSfTMm93Nu9LR2UOyPXOGQ0EY4AeJzsd4sXX6nWXwqTxFn5j_0s-cR-b15WfxSBfS8UtTGoU3auSpQVYszJPKj3jR7PpdkqiyjXSvpyqHGygtcdKzcvFuyoO_pUyWooR85nYSN49Wf-Q9_ZeAcw-aIMUo3C5hIFWHB9E2pBoSKSt5IsskAbWtmLDX2AUeeCmbbnVE7pndj42GBgmVGjM1hbFxnEzbUsfaF4Pl7XqEhtqzit6EIpOeBDDIYt9eYT7Ni5hESaxvazTekplA0vJkzluSkkP0gZLRPTUKIc7i3x4CLdkrwy1GY7_Ux1pPFl40TuBt4yyHPZvQ_PGhwx3T4ZkY04bIPvXJ-kXlrOwF9-ByO5aJnsrVBhHQfGHV9Sj4eCuVZlE8xAhDenSClmga2Wi3lqFdmw9ZHnyMv-0iT-oByzW0HIlzJyz-yUuILY4pJSJUDkmGusi1EnbL2B4cOqklI8nByQ_XegfJmEQc-Vn-2R-3P5AzEmiJ8i58kAry6tsDK6O4YeAsA0kFLjizYnBuiJf-rQVOgoXQWy9BL79ohHuQf0m7jOP_33hw_fS2QUHQtjxtu_r6zwoU1zX-3I1HSkjUMAAxz3enItubbQfGB2O7tkC5-s1agg_sC_ago7wiI7ZlabmPq6ubPPYM5EAY1MJULIhp0KqVx-TwczCnLfUmbJYk456RPmTrQ32Q_q5PuH-uRZO4Qh8fkXm7b235YXhTHwhT0eCJnmhOC1OoqLEqrTsJqEk4bgSIOdi-HOmIzJb6X46wsu_VzdPehbreySyS6h6x472_MJBAQgn2vaN9eb6GW8Zx5yPWksdr-RYZWAuDOi6prIYNmTbDB5sqsj-rD5VmS0PQ5XErJWRIRvja4Se1f6U0taIf4BUN-zXXSbE6Z5aVCbSo2wBLNTJ1YhgRzZY2AFXtoGnmzyXQ75F-CxCjHw441XBcMejul6MyN_8i7H3MnFS3zZjfaH2uvaQ602q_-SCH3b1Fo_RzRVWLn4LHg-la5CZiJNvVvRaJZ59j8k9QulLeZCT2RpaUmFz-9UWx439L5tNNGTg0AsV3NY3GRuBUI8lbA1_bZHj1S88TzVgV36LIZ_TrlrRpcOzQvBp7VGj6T8eEgCYCnVb753tCYPkSjhC2pC9a4KstbSMOVi3TdR3vA' }); // 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --- Dropbox actions ---
async function uploadFile() {
  await dbx.filesUpload({ path: '/test.txt', contents: fs.readFileSync('test.txt'), mode: 'overwrite' });
  console.log('File uploaded!');
}

async function listFiles() {
  const res = await dbx.filesListFolder({ path: '' });
  console.log('Files:');
  res.result.entries.forEach(f => console.log('-', f.name));
}

async function downloadFile() {
  const res = await dbx.filesDownload({ path: '/test.txt' });
  fs.writeFileSync('downloaded_test.txt', res.result.fileBinary, 'binary');
  console.log('File downloaded!');
}

async function deleteFile() {
  await dbx.filesDeleteV2({ path: '/test.txt' });
  console.log('File deleted!');
}

// --- Menu ---
function menu() {
  console.log(`
1. Upload file
2. List files
3. Download file
4. Delete file
5. Exit
  `);

  rl.question('Enter choice: ', async (ch) => {
    try {
      if (ch == '1') await uploadFile();
      else if (ch == '2') await listFiles();
      else if (ch == '3') await downloadFile();
      else if (ch == '4') await deleteFile();
      else if (ch == '5') return rl.close();
      else console.log('Invalid choice!');
    } catch (e) {
      console.log('Error:', e.message);
    }
    menu();
  });
}


menu();

//npm install dropbox,node dropbox.js