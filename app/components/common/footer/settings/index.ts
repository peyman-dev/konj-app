import { filteredRoutes } from "./filtered-routes";

export const CheckFooterVisibility = (
  setIsRenderableFooter: React.ActionDispatch<any>
) => {
  const path = window.location.pathname;
  const shouldRenderFooter = filteredRoutes.some((route) =>
    !path.includes(route)
  );
  setIsRenderableFooter(shouldRenderFooter);
};
