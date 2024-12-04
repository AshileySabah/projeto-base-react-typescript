import { EnumRoutePaths, RouteProps } from "../types";
import { Home } from "@/pages/Portal/Home";
import { NotFound } from "@/pages/Portal/NotFound";

export const routesPortal: RouteProps[] = [
  {
    path: EnumRoutePaths?.Home,
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
