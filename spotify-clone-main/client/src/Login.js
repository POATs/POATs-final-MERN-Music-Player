import React from "react"
import { Container } from "react-bootstrap"


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=9941b79869674b4b96dc1429f6146eb3&response_type=code&redirect_uri=http://localhost:3000/redirect&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="hero-content text-center text-neutral-content">
      <h1>Search any Songs by clicking here!</h1>
      <a className="btn btn-lg btn-primary" href={AUTH_URL}>
        Search
      </a>
      {' '}
      <a className="btn btn-lg btn-danger" href="http://127.0.0.1:5173/">
        Go Back
      </a>
      </div>
    </Container>
  )
}
