const spinner = (period) => {
  let symbol = '|/-\\';
  let count = 0;
  const repeat = () => {
    for (const char of symbol) {
      count++;
      setTimeout(() => {
        process.stdout.write(`\r${char}   `);
      }, 100 + 200 * (count - 1));
      if (count === period * 8 + 1) {
        return;
      } else if (count % 4 === 0) {
        return repeat();
      }
    }
  };
  return repeat;
};

spinner(1)();