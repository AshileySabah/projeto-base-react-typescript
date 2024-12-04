export const cpfMask = (cpf: string | undefined) => {
  if (cpf === undefined || cpf === null) {
    return "";
  }

  let newCpf = cpf.replace(/\D/g, "");
  newCpf = newCpf.replace(/^(\d{3})(\d)/, "$1.$2");
  newCpf = newCpf.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  newCpf = newCpf.replace(/\.(\d{3})(\d)/, ".$1-$2");

  if (newCpf.length > 14) {
    newCpf = newCpf.substring(0, 14);
  }

  return newCpf;
};
