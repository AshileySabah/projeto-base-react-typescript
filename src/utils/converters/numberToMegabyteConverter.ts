export const numberToMegabyteConverter = (number: number | undefined) => {
  if (number === undefined) {
    return {
      value: 0,
      formatted: "",
    };
  }

  const megabyte = number * (1024 * 1024);
  const megabyteFormatted = megabyte?.toFixed(2)?.replace(".", ",");

  return {
    value: megabyte,
    formatted: megabyteFormatted,
  };
};
