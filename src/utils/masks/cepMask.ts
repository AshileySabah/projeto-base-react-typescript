export const cepMask = (cep: string | undefined) => {
  if (cep === undefined || cep === null) {
    return "";
  }

  let newCep = cep?.replace(/\D/g, "");
  newCep = newCep?.replace(/^(\d{5})(\d)/, "$1-$2");

  if (newCep?.length > 15) {
    newCep = newCep?.substring(0, 15);
  }

  return newCep;
};
