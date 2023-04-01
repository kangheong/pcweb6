import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Container, Form,Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function LoginPage() {
  const [user, loading] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) return navigate("/");
  }, [navigate, user, loading]);

  return (
    <>
    <Container>
      <h1 className="my-3">Login to your account</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/signup">Sign up for an account</a>
        </Form.Group>
        <Button
        variant="primary"
        onClick={async (e) => {
          setError("");
          const canLogin = username && password;
          if (canLogin)
            try {
              await signInWithEmailAndPassword(auth, username, password);
              navigate("/");
            } catch (error) {
              setError(error.message);
            }
        }}
        >
          Login
        </Button>
      </Form>
      <p>{error}</p>
    </Container>
    </>
  );
}