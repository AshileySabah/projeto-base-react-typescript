export const monetaryMask = (value: string | number | undefined) => {
  if (value === undefined || value === null) {
    return "";
  }

  let newValue = Number(value);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(newValue);
};
