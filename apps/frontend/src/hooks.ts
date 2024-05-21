import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";

export const useColorScheme = () => {
  const { setColorScheme } = useMantineColorScheme();
  const currentColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    setColorScheme(currentColorScheme === "dark" ? "light" : "dark");
  };

  return { current: currentColorScheme, toggle: toggleColorScheme };
};
