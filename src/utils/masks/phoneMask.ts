export const phoneMask = (phone: string | undefined) => {
  if (!phone) {
    return "";
  }

  let newPhone = phone.replace(/\D/g, "");
  newPhone = newPhone.replace(/^(\d{3})(\d{5})(\d)/, "($1) $2-$3");

  const maxCharacters = 16;
  if (newPhone.length > maxCharacters) {
    newPhone = newPhone.substring(0, maxCharacters);
  }

  return newPhone;
};
