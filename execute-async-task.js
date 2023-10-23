/**
 * 每次間隔一秒鐘依序打印陣列中的 item
 */

const arr = [1, 2, 3, 4, 5];

const tasks = arr.map((e) => {
  return () =>
    new Promise((reslove) =>
      setTimeout(() => {
        console.log(e);
        reslove();
      }, 1000)
    );
});

async function run() {
  for (const task of tasks) {
    await task();
  }
}

run();
