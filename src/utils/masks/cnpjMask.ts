export const cnpjMask = (cnpj: string | undefined) => {
  if (cnpj === undefined || cnpj === null) {
    return "";
  }

  let newCnpj = cnpj.replace(/\D/g, "");
  newCnpj = newCnpj.replace(/^(\d{2})(\d)/, "$1.$2");
  newCnpj = newCnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  newCnpj = newCnpj.replace(/\.(\d{3})(\d)/, ".$1/$2");
  newCnpj = newCnpj.replace(/(\d{4})(\d)/, "$1-$2");

  if (newCnpj.length > 18) {
    newCnpj = newCnpj.substring(0, 18);
  }

  return newCnpj;
};
