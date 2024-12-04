export const onlyNumberMask = (number: string | undefined) => {
  if (number === undefined || number === null) {
    return "";
  }

  return number.replace(/\D/g, "");
};
