export const getExtensions = (acceptedFileTypes: string[]) =>
  acceptedFileTypes?.map((extension) => {
    const positionStartExtension = extension?.indexOf("/");
    if (positionStartExtension === -1) {
      return extension;
    }
    return extension?.substring(positionStartExtension + 1);
  });

export const fileExtensionValidation = (
  fileName: string,
  acceptedFileTypes: string[],
) => {
  const positonExtension = fileName?.lastIndexOf(".") + 1;
  const treatExtension = fileName?.substring(positonExtension)?.toLowerCase();

  if (getExtensions(acceptedFileTypes)?.includes(treatExtension)) {
    return true;
  }
  return false;
};
