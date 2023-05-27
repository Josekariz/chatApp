import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";
import { DASHBOARD } from "lib/routes";

export function Login() {
  //hookt ot handle login functinality
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  

  async function handleLogin(data) {
    const succeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
    if (succeded) reset();
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" boderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log in
        </Heading>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Gmail</FormLabel>
            <Input
              type="email"
              placeholder="user@gmail.com"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          {/* password here */}
          <FormControl isInvalid={errors.password} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="********"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          {/* submit button */}

          <Button
            mt="4"
            type="submit"
            colorScheme="pink"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Logging in"
          >
            Log In
          </Button>
        </form>
        <Text fontSize="xlg" align="center" mt="6">
          Don't have an account?{"  "}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="pink.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "pink.100" }}
          >
            Register
          </Link>
          {"  "}instead!
        </Text>
      </Box>
    </Center>
  );
}
