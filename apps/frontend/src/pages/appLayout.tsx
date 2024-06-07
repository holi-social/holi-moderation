import {
  AppShell,
  Avatar,
  Button,
  Flex,
  Group,
  Menu,
  Title,
} from "@mantine/core";
import {
  IconFlag,
  IconLogout,
  IconMoon,
  IconSun,
  IconUsers,
} from "@tabler/icons-react";
import React, { PropsWithChildren, useEffect } from "react";
import {
  NavLink as RouterNavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HoliLogo } from "../components/holiLogo";
import { AuthStateLoggedIn, useAuthState } from "../state";
import { initialsFromEmail } from "../utils";
import { useColorScheme } from "../hooks";
import { RoleGuard } from "../components/auth/roleGuard";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const authState = useAuthState();

  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  const colorScheme = useColorScheme();

  const logout = () => {
    authState.logOut();
    navigate("/login");
  };

  useEffect(() => {
    if (!authState.loggedIn) {
      navigate("/login");
    }

    if (authState.tokenExpired()) {
      logout();
    }
  });

  const currentUser = (authState as AuthStateLoggedIn).user;
  if (!currentUser) {
    return <></>;
  }

  return (
    <AppShell header={{ height: 60 }} padding="sm">
      <AppShell.Header
        display="flex"
        style={{ alignContent: "center", justifyContent: "space-between" }}
      >
        <Flex style={{ height: "100%", padding: 10 }} align="center">
          <HoliLogo />
          <Title ml="lg" order={4}>
            Backoffice 3000
          </Title>
          <Group ml="xl">
            <Button
              leftSection={<IconFlag />}
              component={RouterNavLink}
              to="/reports"
              variant={currentPath.startsWith("/reports") ? "light" : "subtle"}
              color={currentPath.startsWith("/reports") ? "blue" : "gray"}
            >
              Reports
            </Button>
            <RoleGuard allowedRoles={["ADMIN"]}>
              <Button
                leftSection={<IconUsers />}
                component={RouterNavLink}
                to="/users"
                variant={currentPath.startsWith("/users") ? "light" : "subtle"}
                color={currentPath.startsWith("/users") ? "blue" : "gray"}
              >
                Users
              </Button>
            </RoleGuard>
          </Group>
        </Flex>
        <Group align="center" pr="md">
          <Menu withArrow>
            <Menu.Target>
              <Avatar style={{ cursor: "pointer" }}>
                {initialsFromEmail(currentUser.email)}
              </Avatar>
            </Menu.Target>

            <Menu.Dropdown>
              {colorScheme.current === "light" && (
                <Menu.Item
                  leftSection={<IconMoon />}
                  onClick={colorScheme.toggle}
                  closeMenuOnClick={false}
                >
                  Switch to Dark Mode
                </Menu.Item>
              )}
              {colorScheme.current === "dark" && (
                <Menu.Item
                  leftSection={<IconSun />}
                  onClick={colorScheme.toggle}
                  closeMenuOnClick={false}
                >
                  Switch to Light Mode
                </Menu.Item>
              )}
              <Menu.Item
                color="red"
                leftSection={<IconLogout />}
                onClick={logout}
              >
                Log Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </AppShell.Header>

      <AppShell.Main style={{ width: "100vw" }}>{children}</AppShell.Main>
    </AppShell>
  );
};
