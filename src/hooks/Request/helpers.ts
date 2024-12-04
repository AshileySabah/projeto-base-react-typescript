import axios, { AxiosRequestConfig } from "axios";
import { MethodTypes, RequestProps } from "./useRequest";

interface HandleApiInstanceProps {
  request: boolean | RequestProps;
  method: MethodTypes;
  endpoint: string;
  service: string;
  download?: string;
}

export const handleApiInstance = ({
  request,
  download,
  method,
  endpoint,
  service,
}: HandleApiInstanceProps) => {
  const api = axios?.create({ baseURL: service });

  let config: AxiosRequestConfig<any> | undefined = {
    params: typeof request !== "boolean" ? request?.queryParams : undefined,
  };

  if (download) {
    config.responseType = "blob";
    config.headers = { "Content-Type": "application/json" };
  }

  if (method === "get") {
    return api?.get(endpoint, config);
  }

  return api?.[method]?.(
    endpoint,
    typeof request !== "boolean" ? request?.body : undefined,
    config,
  );
};

export const handleDownloadPDF = (response: any, filename: string) => {
  const blob = new Blob([response?.data], { type: "application/pdf" });
  const urlBlob = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = urlBlob;
  a.download = filename;
  document.body.appendChild(a);

  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(urlBlob);
};
