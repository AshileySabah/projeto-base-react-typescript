import { cnpjMask } from "./cnpjMask";
import { cpfMask } from "./cpfMask";

export const cpfCnpjMask = (cpfCnpj: string | undefined) => {
  if (cpfCnpj === undefined || cpfCnpj === null || cpfCnpj === "") {
    return "";
  }

  return cpfCnpj?.replace(/[^\d]+/g, "")?.length > 11
    ? cnpjMask(cpfCnpj)
    : cpfMask(cpfCnpj);
};
