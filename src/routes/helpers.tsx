import { Route } from "react-router-dom";
import { RouteProps } from "./types";

export const buildRoute = (routeList: RouteProps[]) =>
  routeList?.map((routeProps, index) => (
    <Route {...routeProps} key={`${routeProps?.path}-${index}`} />
  ));
