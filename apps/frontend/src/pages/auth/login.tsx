import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Flex,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { HoliLogo } from "../../components/holiLogo";
import { useAuthState } from "../../state";
import { gqlClient } from "../../fetcher";
import { LoginMutation } from "../../graphql/mutations/login";
import {
  LoginMutation as LoginMutationResponse,
  LoginMutationVariables,
} from "../../graphql/generated/types";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const authState = useAuthState();
  const form = useForm<{ email: string; password: string }>({
    mode: "uncontrolled",
  });

  const login = async (email: string, password: string): Promise<void> => {
    const response = await gqlClient().request<
      LoginMutationResponse,
      LoginMutationVariables
    >(LoginMutation, { email, password });

    if (response.login?.token) {
      authState.logIn({
        id: response.login.userId,
        email,
        token: response.login.token,
      });

      navigate("/reports");
    }
  };

  return (
    <Stack px="25%" h="100vh" justify="center">
      <Flex justify="center">
        <HoliLogo />
      </Flex>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) =>
            login(values.email, values.password),
          )}
        >
          <TextInput
            label="Email"
            placeholder="you@holi.social"
            required
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Stack>
  );
};
