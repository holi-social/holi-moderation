import "@mantine/core/styles.css";
import "mantine-react-table/styles.css";
import {
  AppShell,
  Flex,
  Group,
  MantineProvider,
  NavLink,
  Title,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  NavLink as RouterNavLink,
} from "react-router-dom";
import { ReportsList } from "./pages/reports/list";
import { ViewReport } from "./pages/reports/view";
import { ThemeSwitcher } from "./components/themeSwitcher";
import { IconFlag } from "@tabler/icons-react";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider>
    <Notifications />

    <AppShell header={{ height: 60 }} padding="sm">
      <AppShell.Header
        display="flex"
        style={{ alignContent: "center", justifyContent: "space-between" }}
      >
        <Flex style={{ height: "100%", padding: 10 }} align="center">
          <svg
            height="35"
            viewBox="0 0 151 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1611149986_1897"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M150.113 10.3544C150.113 15.7525 145.745 20.1285 140.355 20.1285C134.966 20.1285 130.598 15.7525 130.598 10.3544C130.598 4.95634 134.966 0.580322 140.355 0.580322C145.745 0.580322 150.113 4.95634 150.113 10.3544ZM0.88662 1.77089H16.7571V14.3814C16.8311 20.0067 18.2628 21.9647 22.9119 19.2606C23.1758 19.1052 23.4496 18.9316 23.7338 18.7513L23.734 18.7512L23.734 18.7512C24.0017 18.5815 24.2786 18.4058 24.5655 18.2339C25.3739 17.7312 26.2191 17.2814 27.0909 16.8951C29.3045 15.932 31.6872 15.4292 34.0963 15.4239C36.5582 15.3975 38.999 15.9425 41.2179 17.0115C43.3734 18.0593 45.1855 19.6998 46.4429 21.7424C47.8165 24.0497 48.498 26.7009 48.4135 29.3786V63.7282H32.4638V34.57C32.4638 32.5008 31.9196 30.9133 30.8366 29.802C29.7641 28.696 28.2743 28.0874 26.7316 28.135C25.041 28.1615 23.4085 28.7171 22.0455 29.7226C20.3972 30.9344 19.0922 32.5485 18.2522 34.4165C17.1956 36.7238 16.6778 39.2427 16.7412 41.7828V63.7282H0.88662V1.77089ZM64.6432 61.13C60.8394 59.0239 57.7118 55.8805 55.6249 52.0545C51.5728 44.577 51.5992 35.5438 55.7042 28.0928C57.865 24.2456 61.056 21.0758 64.9179 18.9432C68.9965 16.5936 73.9256 15.4135 79.7054 15.4135C85.4851 15.4135 90.055 16.5618 94.0279 18.8638C97.8212 20.9858 100.949 24.1292 103.046 27.9394C107.141 35.4062 107.125 44.45 103.009 51.901C100.843 55.7482 97.6574 58.918 93.7954 61.0507C89.7169 63.4055 84.7877 64.5803 79.008 64.5803C73.4343 64.5803 68.6425 63.432 64.6432 61.13ZM89.9229 40.8462C89.9229 34.0442 84.8845 27.5054 78.5431 27.5054C72.2017 27.5054 68.7905 32.6721 68.7905 39.137C68.7905 45.6018 73.619 52.4037 80.1756 52.4037C86.7321 52.4037 89.9229 47.6483 89.9229 40.8462ZM126.229 1.77089H110.358V63.7335H126.229V1.77089ZM132.42 24.3673H148.291V63.7283H132.42V24.3673Z"
              fill="currentColor"
            ></path>
          </svg>
          <Title ml="lg" order={4}>
            Backoffice 3000
          </Title>
          <Group ml="xl">
            <NavLink
              leftSection={<IconFlag />}
              component={RouterNavLink}
              to="/reports"
              label="Reports"
              active
            />
          </Group>
        </Flex>
        <Flex align="center" pr="md">
          <ThemeSwitcher />
        </Flex>
      </AppShell.Header>

      <AppShell.Main style={{ width: "100vw" }}>{children}</AppShell.Main>
    </AppShell>
  </MantineProvider>
);

const RouterLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "reports",
        element: <ReportsList />,
      },
      {
        path: "reports/:reportId",
        element: <ViewReport />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
