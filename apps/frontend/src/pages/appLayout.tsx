import {
  AppShell,
  Avatar,
  Flex,
  Group,
  Menu,
  NavLink,
  Title,
} from "@mantine/core";
import { IconFlag, IconLogout, IconMoon, IconSun } from "@tabler/icons-react";
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

type NavMenuItem = {
  icon: typeof IconFlag;
  link: string;
  label: string;
};

const menuItems: NavMenuItem[] = [
  {
    icon: IconFlag,
    link: "/reports",
    label: "Reports",
  },
];

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const authState = useAuthState();
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (!authState.loggedIn) {
      navigate("/login");
    }
  });

  const currentUser = (authState as AuthStateLoggedIn).user;
  const logout = () => {
    authState.logOut();
    navigate("/login");
  };

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
            {menuItems.map((item) => (
              <NavLink
                key={item.link}
                leftSection={<item.icon />}
                component={RouterNavLink}
                to={item.link}
                label={item.label}
                active={item.link.startsWith(currentPath)}
              />
            ))}
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
