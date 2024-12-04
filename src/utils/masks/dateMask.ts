import { format as formatDateFNS } from "date-fns";
import { brazilDateRegex } from "../regex/brazilDateRegex";
import { backendDateRegex } from "../regex/backendDateRegex";
import { iso8601DateRegex } from "../regex/iso8601DateRegex";

const normalizeDate = (date: string) => {
  let treatedDate = date?.replaceAll("/", "-");

  if (brazilDateRegex?.test(date)) {
    treatedDate = treatedDate?.split("-")?.reverse()?.join("-");
  }

  return treatedDate + "T00:00:00";
};

export const dateMask = (
  date: Date | string | null | undefined,
  format = "dd/MM/yyyy",
) => {
  if (!date) return "";

  const testBrazilDateRegex = brazilDateRegex?.test(date as string);
  const testBackendDateRegex = backendDateRegex?.test(date as string);
  const testIso8601DateRegex = iso8601DateRegex?.test(date as string);

  if (typeof date === "string") {
    if (testBrazilDateRegex || testBackendDateRegex) {
      return formatDateFNS(normalizeDate(date), format);
    }
  }

  if (typeof date === "object" || testIso8601DateRegex) {
    return formatDateFNS(date, format);
  }

  return "invalid date";
};
