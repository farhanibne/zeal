import Head from "next/head";
import Banner from "sections/banner";
import icon from "./l.png";
import Layout from "components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {firebase} from '../../lib/firebase';
import { useRouter } from "next/router";

function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  // login to firebase 
  const login = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = emailRef.current.value
    const password = passwordRef.current.value
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      router.push("/Dashboard")
      console.log("login success")
      console.log(firebase.auth().currentUser)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }





  return (
    <>
      <Head>
        <title>ZEAL Education</title>
        <link rel="icon" href={icon} />
      </Head>
      <ThemeProvider theme={theme}>
        <div style={{ height: "85px", background: "white" }}>
          <Link href={"./"}>
            <IoMdArrowRoundBack
              style={{
                fontSize: "28px",
                color: "black",
                marginTop: "28px",
                marginLeft: "25px",
                marginBottom: "10px",
              }}
            />
          </Link>
          <hr />
        </div>
        <br />

        {/* make a login form  */}
        <center>
          <div style={{ marginLeft: "25px", marginRight: "25px" }}>
            <h1>Admin Login Zeal</h1>
            <form >
              <label>Email</label>
              <br />
              <input
                type="email"
                id="email"
                ref={emailRef}
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                  padding: "18px",
                  borderRadius: "6px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "20px",
                }}
                placeholder="Enter your email"
                autoComplete="block"
              />{" "}
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                id="password"
                ref={passwordRef}
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                  padding: "18px",
                  borderRadius: "6px",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "20px",
                }}
                placeholder="Enter your password"
              />
              <br />
              <button
                id="loginbtn"
                type="submit"
                onClick={login}
                
                style={{
                  marginBottom: "15px",
                  marginTop: "15px",
                  padding: "18px",
                  borderRadius: "6px",
                  color: "azure",
                  background: "#FFC059",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </center>
      </ThemeProvider>
    </>
  );
}

export default Login;
