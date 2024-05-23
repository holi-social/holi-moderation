import "@mantine/core/styles.css";
import "mantine-react-table/styles.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ListReports } from "./pages/reports/list";
import { ViewReport } from "./pages/reports/view";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { SWRConfig } from "swr";
import { fetcher } from "./fetcher";
import { Login } from "./pages/auth/login";
import { Layout } from "./pages/appLayout";

// const RouterLayout = () => (
//   <Layout>
//     <Outlet />
//   </Layout>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <></>
      </Layout>
    ),
  },
  {
    path: "/reports",
    element: (
      <Layout>
        <ListReports />
      </Layout>
    ),
  },
  {
    path: "/reports/:reportId",
    element: (
      <Layout>
        <ViewReport />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <MantineProvider>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
    </SWRConfig>
  );
}

export default App;
