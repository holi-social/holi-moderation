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
import { ListReportsFromUser } from "./pages/reports/fromUser";
import { ListUsers } from "./pages/moderationUsers/list";
import { ModalsProvider } from "@mantine/modals";

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
    path: "/reports/user/:reporterId",
    element: (
      <Layout>
        <ListReportsFromUser />
      </Layout>
    ),
  },
  {
    path: "/users",
    element: (
      <Layout>
        <ListUsers />
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
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </SWRConfig>
  );
}

export default App;
