"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BlackButton,
  CustomTextField,
  LoginContainer,
} from "@/app/styles/MUI/login.styled";
import { Typography, Box, FormControl, Card, CardContent, Button } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/assets/img/logo.png";

export default function Login() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // State to track if the component is mounted
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  const [sending, setSending] = useState(false);


  // ✅ Use `useEffect` to make sure the code runs only on the client side
  useEffect(() => {
    setIsClient(true); // This will run once the component is mounted
  }, []);

  useEffect(() => {
    // If we're on the client side and session exists, redirect to /admin/dashboard
    if (isClient && document.cookie.includes("session=valid")) {
      router.replace("/career-form-enquiry");
    }
  }, [isClient, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateInputs()) return;
    setSending(true);

    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    const res = await fetch("/auth-login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      credentials: 'include', 
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      //   window.location.href = '/career-form-enquiry';
      router.replace("/career-form-enquiry");
    } else {
      const result = await res.json();
      setApiErrorMessage(result.message);
      setSending(false);

    }
  };

  const validateInputs = () => {
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

    if (!username.value) {
      setUsernameError(true);
      setUsernameErrorMessage("Please enter username.");
      isValid = false;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage("");
    }

    if (!password.value) {
      setPasswordError(true);
      setPasswordErrorMessage("Please enter password.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <LoginContainer>
      <Card sx={{ minWidth: 400, margin: "auto" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Image src={logo} height={50} width={50} alt="logo" />
          <Typography
            component="h4"
            variant="body_2"
            fontWeight={500}
            m={"24px 0"}
          >
            Login
          </Typography>
          {apiErrorMessage && (
            <Typography color="error" variant="body2" sx={{ marginBottom: 2 }}>
              {apiErrorMessage}
            </Typography>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <CustomTextField
                error={usernameError}
                helperText={usernameErrorMessage}
                id="username"
                type="text"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                required
                fullWidth
                variant="standard"
                color={usernameError ? "error" : "secondary"}
              />
            </FormControl>
            <FormControl>
              <CustomTextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="standard"
                color={passwordError ? "error" : "secondary"}
              />
            </FormControl>
            { !sending ? 
                <BlackButton
                    sx={{ mt: 2 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Login
                </BlackButton>
            : 
                <Button
                    fullWidth
                    loading
                    loadingPosition="start"
                    variant="outlined"
                >
                    Please wait
                </Button>
            }
          </Box>
        </CardContent>
      </Card>
    </LoginContainer>
  );
}
