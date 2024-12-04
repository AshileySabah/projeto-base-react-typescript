import { useEffect, useState } from "react";
import { useBackdropLoader } from "../BackdropLoader/useBackdropLoader";
import { useAlert } from "../Alert/useAlert";
import { handleApiInstance, handleDownloadPDF } from "./helpers";
import { AlertColor } from "@mui/material";

export type MethodTypes = "get" | "post" | "put" | "delete" | "patch";

export interface UseRequestParams {
  service: string;
  endpoint: string;
  method: MethodTypes;
  showToastOnError?: boolean | string;
  showToastOnSuccess?: string;
  defaultRequest?: boolean;
  callback?: Function;
  download?: string;
  onCloseToast?: (alertSeverity: AlertColor | "none") => void;
}

export interface RequestProps {
  body?: Object;
  queryParams?: Object;
}

export function useRequest<T>({
  service,
  endpoint,
  method,
  showToastOnError = true,
  showToastOnSuccess,
  defaultRequest = false,
  callback,
  download,
  onCloseToast,
}: UseRequestParams) {
  const { setLoading } = useBackdropLoader();
  const { setAlert } = useAlert();

  const [response, setResponse] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [statusCode, setStatusCode] = useState<number | undefined>(undefined);
  const [request, setRequest] = useState<RequestProps | boolean>(false);

  const handleRequest = () => {
    setLoading(true);

    handleApiInstance({
      request,
      download,
      method,
      endpoint,
      service,
    })
      ?.then((responseResult) => {
        setResponse(responseResult?.data);
        setStatusCode(responseResult?.status);

        if (showToastOnSuccess) {
          setAlert({
            title: "Sucesso!",
            message: showToastOnSuccess,
            severity: "success",
            onClose: (alertSeverity) => {
              if (onCloseToast) {
                onCloseToast(alertSeverity);
              }
            },
          });
        }

        if (download) {
          handleDownloadPDF(responseResult, download);
        }
      })
      ?.catch((responseError: any) => {
        setError(responseError?.response?.data?.message);
        setStatusCode(responseError?.response?.status);

        if (showToastOnError) {
          const errorCondition =
            responseError?.response?.status === 400 ||
            responseError?.response?.status === 404 ||
            responseError?.response?.status === 500;

          setAlert({
            title: errorCondition ? "Erro!" : "Atenção!",
            message:
              typeof showToastOnError === "boolean"
                ? responseError?.response?.data?.message
                : showToastOnError,
            severity: errorCondition ? "error" : "warning",
          });
        }
      })
      ?.finally(() => {
        setLoading(false);
        callback?.();
      });
  };

  const handleClearStates = () => {
    setLoading(false);
    setResponse(undefined);
    setError(undefined);
    setStatusCode(undefined);
    setRequest(false);
  };

  useEffect(() => {
    if (endpoint && method && (request || (defaultRequest && !response))) {
      handleClearStates();
      handleRequest();
    }
  }, [endpoint, method, request]);

  return { response, error, statusCode, setRequest, handleClearStates };
}
