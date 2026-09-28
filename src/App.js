import { useResolvedPath, useRoutes } from "react-router-dom";
import { Typography } from "@mui/material";
import { ModuleTabs } from "@platform/design-system";
import { getRoutes, TABS } from "./routes";

/**
 * Exposed as "example/App". Its routes are relative, so it works at "/example/*"
 * inside the shell and at "/" when running standalone.
 */
export default function App() {
  const moduleRoot = useResolvedPath(".").pathname;
  const element = useRoutes(getRoutes({ moduleRoot }));

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Example Module
      </Typography>
      <ModuleTabs tabs={TABS} ariaLabel="Example module sections" />
      {element}
    </>
  );
}
