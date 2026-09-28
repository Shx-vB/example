import { Navigate } from "react-router-dom";
import { OverviewPage } from "../pages/OverviewPage";
import { DetailsPage } from "../pages/DetailsPage";

/** Tabs shown above the routes. Targets are relative to the module root. */
export const TABS = [
  { label: "Overview", to: "." },
  { label: "Details", to: "details" },
];

/** Route objects for useRoutes. Keep paths relative (no leading slash). */
export function getRoutes({ moduleRoot }) {
  return [
    { index: true, element: <OverviewPage /> },
    { path: "details", element: <DetailsPage /> },
    { path: "*", element: <Navigate to={moduleRoot} replace /> },
  ];
}
