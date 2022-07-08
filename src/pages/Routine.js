import Head from "next/head";
import Banner from "sections/banner";
import icon from "./l.png";
import Layout from "components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { firebase } from "../../lib/firebase";
import React, { useState, useEffect } from "react";
import { FcFeedback } from "react-icons/fc";

function Routine() {
  const [formValue, setFormValue] = useState("");
  const [des, setDes] = useState("");
  const [link, setLink] = useState("");

  const [notes, setNotes] = useState([]);
  // const [user] = useAuthState(firebase.auth());

  useEffect(() => {
    firebase
      .firestore()
      .collection("plans")
      .onSnapshot((snapshot) => {
        setNotes(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

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
        <div>
          <center>
            <h1> Monthly Plan </h1>
          </center>
        </div>

        {notes.map((plan, pos) => (
          //note.title
          //note.description
          //note.link
          //create a note card with the above data
          <center>
            <div key={pos}>
              <div
                style={{ padding: "25px", margin: "10px", borderRadius: "7px" }}
              >
                <div className="font-semibold ">
                  <h2>{plan.title}</h2>
                </div>
                <div className="font-normal my-1"></div>
                <a
                  href={plan.Link}
                  style={{ textDecoration: "none", color: "azure" }}
                  target="_blank"
                >
                  <button
                    style={{
                      marginBottom: "15px",
                      marginTop: "5px",
                      padding: "18px",
                      borderRadius: "6px",
                      color: "azure",
                      background: "#FFC059",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    View in Docs
                  </button>
                </a>
              </div>
            </div>
          </center>
        ))}
      </ThemeProvider>
    </>
  );
}

export default Routine;
