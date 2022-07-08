import Head from "next/head";
import Banner from "sections/banner";
import icon from "./l.png";
import Layout from "components/layout";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Link from "next/link";
import { FcHome } from "react-icons/fc";
import Modal from "react-modal";
import { FcCancel } from "react-icons/fc";
import { firebase } from "../../lib/firebase";
import { AiFillHome } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import Noentry from "./Noentry";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "9%",
    left: "9%",
    right: "9%",
    bottom: "9%",
    backgroundColor: "#fdf9f0",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};

function Dashboard({ plan }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalnote, setModalnote] = useState(false);

  const [formValue, setFormValue] = useState("");
  const [des, setDes] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState([]);
  //notes state end here

  //notes function start here
  const handleSubmit = () => {
    firebase.firestore().collection("plans").add({
      title: formValue,
      description: des,
      Link: link,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      user: "admin",
    });

    setFormValue("");
    setDes("");
    setLink("");
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("plans")
      .onSnapshot((snapshot) => {
        setNotes(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const deleteopt = () => {
    // delete the whole datbase collection
    firebase
      .firestore()
      .collection("plans")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
      });
  };


  if(firebase.auth().currentUser != null){
    return (
      <>
        <Head>
          <title>ZEAL Education</title>
          <link rel="icon" href={icon} />
        </Head>
        <ThemeProvider theme={theme}>
          <div style={{ height: "85px", background: "white" }}>
            <Link href={"./"}>
              <AiFillHome
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
              <h1> Welcome Admin </h1>
            </center>
  
            <div style={{ overflow: "hidden" }}>
              <div style={{ marginTop: "10px" }}>
                <center>
                  <br />
                  <div className="inline-block md:flex  md:mx-16">
                    <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-6 m-6">
                      <h2 className="text-gray-700 text-lg font-semibold">
                        Add Month plan
                      </h2>
                      <div>
                        <button
                          type="submit"
                          className="button"
                          style={{
                            backgroundColor: "#FFC059",
                            marginTop: "10px",
                            padding: "20px",
                            color: "azure",
                            borderRadius: "7px",
                            border: "none",
                            fontSize: "18px",
                          }}
                          onClick={() => setModalnote(true)}
                        >
                          Add plan
                        </button>
                      </div>
  
                      <Modal
                        isOpen={modalnote}
                        onRequestClose={() => setModalnote(false)}
                        shouldCloseOnOverlayClick={false}
                        style={customStyles}
                      >
                        <div
                          className="flex"
                          style={{
                            justifyContent: "space-between",
                            display: "flex",
                          }}
                        >
                          <h1 style={{ margin: "8px", fontSize: "20px" }}>
                            Zeal{" "}
                          </h1>
                          <button
                            style={{
                              fontSize: "25px",
                              margin: "10px",
                              border: "none",
                              backgroundColor: "transparent",
                            }}
                            onClick={() => setModalnote(false)}
                          >
                            <FcCancel />
                          </button>
                        </div>
                        <div style={{ margin: "8px" }}>
                          <center>
                            <h2 style={{ fontSize: "25px", margin: "10px" }}>
                              Upload Plan
                            </h2>
                            <input
                              type="text"
                              value={formValue}
                              onChange={(e) => setFormValue(e.target.value)}
                              required
                              style={{
                                marginBottom: "13px",
                                background: "transparent",
                                marginBottom: "15px",
                                marginTop: "7px",
                                padding: "18px",
                                borderRadius: "6px",
                                color: "black",
                                border: "1px solid gray",
                                fontSize: "20px",
                              }}
                              placeholder="Plan Name"
                              className="input"
                            />{" "}
                            <br />
                            <input
                              type="text"
                              value={des}
                              onChange={(e) => setDes(e.target.value)}
                              required
                              style={{
                                marginBottom: "13px",
                                background: "transparent",
                                background: "transparent",
                                marginBottom: "15px",
                                marginTop: "7px",
                                padding: "18px",
                                borderRadius: "6px",
                                color: "black",
                                border: "1px solid gray",
                                fontSize: "20px",
                              }}
                              placeholder="Plan Description"
                              className="input"
                            />{" "}
                            <br />
                            <input
                              type="url"
                              value={link}
                              onChange={(e) => setLink(e.target.value)}
                              required
                              style={{
                                marginBottom: "13px",
                                background: "transparent",
                                background: "transparent",
                                marginBottom: "15px",
                                marginTop: "7px",
                                padding: "18px",
                                borderRadius: "6px",
                                color: "black",
                                border: "1px solid gray",
                                fontSize: "20px",
                              }}
                              placeholder="Plan Link"
                              className="input"
                            />
                            <br />
                            <button
                              type="submit"
                              onClick={handleSubmit}
                              className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
                              Upload
                            </button>
                          </center>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <br />
                  <br />
  
                  <h2>Manage previous Plans</h2>
  
                  {notes.map((plan, pos) => (
                    //note.title
                    //note.description
                    //note.link
                    //create a note card with the above data
                    <center>
                      <div key={pos}>
                        <div
                          style={{
                            padding: "25px",
                            margin: "10px",
                            borderRadius: "7px",
                          }}
                        >
                          <div className="font-semibold ">
                            <h2>{plan.title}</h2>
                          </div>
                          <div className="font-normal my-1"></div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
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
                            <button
                              onClick={deleteopt}
                              style={{
                                fontSize: "30px",
                                padding: "18px",
                                borderRadius: "6px",
                                color: "black",
                                border: "none",
                                background: "white",
                              }}
                            >
                              <MdDelete />
                            </button>
                          </div>
                        </div>
                      </div>
                    </center>
                  ))}
                </center>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </>
    );
  }
  else{
    return <Noentry/>
  }
  }
  

export default Dashboard;
