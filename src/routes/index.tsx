import { Route, Routes as ReactRoutes } from "react-router-dom";
import { BaseLayout } from "@/components/BaseLayout";
import { buildRoute } from "./helpers";
import { routesPortal } from "./entities/portal";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="" element={<BaseLayout />}>
        {buildRoute(routesPortal)}
      </Route>
    </ReactRoutes>
  );
};
