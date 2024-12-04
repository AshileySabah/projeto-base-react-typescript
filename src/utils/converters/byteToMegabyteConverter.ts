export const byteToMegabyteConverter = (byte: number | undefined) => {
  if (byte === undefined) {
    return {
      value: 0,
      formatted: "",
    };
  }

  const megabyte = byte / (1024 * 1024);
  const megabyteFormatted = megabyte?.toFixed(2)?.replace(".", ",");

  return {
    value: megabyte,
    formatted: megabyteFormatted,
  };
};
