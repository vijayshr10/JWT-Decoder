import React, { useState } from "react";
import { jwtDecode } from 'jwt-decode';

import { FaRegPaste as Paste } from "react-icons/fa6";
import { RiDeleteBin6Line as Delete } from "react-icons/ri";


import UserLocation from "./UserLocation";





import "./Home.scss";

const Home = () => {

    const [token, setToken] = useState("");
    const [header, setHeader] = useState(null);
    const [payload, setPayload] = useState(null);
    const [signature, setSignature] = useState(null);
    const [error, setError] = useState("");


    const handlePasteClick = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setToken(text);
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    };

    const handleDeleteClick = () => {
        setToken("");
        setHeader(null);
        setPayload(null);
        setSignature(null);
        setError("");
    };

    const handleDecodeClick = () => {
        if (!token) {
            setError("Please enter a JWT token");
            return;
        }

        try {
            const parts = token.split(".");
            if (parts.length !== 3) throw new Error("Invalid JWT format");

            const decodedHeader = jwtDecode(parts[0], { header: true });
            const decodedPayload = jwtDecode(token);

            setHeader(decodedHeader);
            setPayload(decodedPayload);
            setSignature(parts[2]);
            setError("");
        } catch (err) {
            console.error("Invalid JWT:", err);
            setHeader(null);
            setPayload(null);
            setSignature(null);
            setError("Invalid JWT token");
        }
    };


    const JsonViewer = ({ data }) => {
        if (!data) return <span>-</span>;

        const renderValue = (value) => {
            const type = typeof value;

            if (type === "string") {
                return <span style={{ color: "#d35400" }}>"{value}"</span>; // Orange for strings
            }
            if (type === "number") {
                return <span style={{ color: "#8e44ad" }}>{value}</span>; // Purple for numbers
            }
            if (type === "boolean") {
                return <span style={{ color: "#1D4AD8" }}>{value.toString()}</span>; // Blue for booleans
            }
            if (value === null) {
                return <span style={{ color: "#7f8c8d" }}>null</span>; // Gray for null
            }
            if (Array.isArray(value)) {
                return (
                    <span>
                        [ {value.map((v, i) => <span key={i}>{renderValue(v)}{i < value.length - 1 ? ', ' : ''}</span>)} ]
                    </span>
                );
            }
            if (type === "object") {
                return renderObject(value);
            }
        };

        const renderObject = (obj) => (
            <div style={{ paddingLeft: "16px" }}>
                {Object.entries(obj).map(([key, val], index) => (
                    <div key={index}>
                        <span style={{ color: "#047857" }}>"{key}"</span>: {renderValue(val)}
                    </div>
                ))}
            </div>
        );

        return renderObject(data);
    };



    return (
        <div className='home'>
            <div className="home-contents">

                <div className="content-left">
                    <p className="heading">Encoded</p>

                    <div className="input-field">
                        <textarea
                            className="input-token"
                            type="text"
                            placeholder="Paste the JWT token here...."
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                        />

                        <div className="paste-delete">
                            <div className="paste-delete-button" onClick={handlePasteClick}>
                                <Paste />
                            </div>
                            <div className="paste-delete-button" onClick={handleDeleteClick}>
                                <Delete />

                            </div>
                        </div>

                    </div>


                    <div className="left-bottom">
                        <button className="decode-button" onClick={handleDecodeClick}>
                            Decode
                        </button>
                        <div className="error">

                            {error && <p className="error-text">! {error}</p>}
                        </div>

                    </div>

                </div>

                <div className="content-right">

                    <p className="heading">Decoded</p>

                    <div className="result-area">
                        <div className="header-tile">
                            <b>Header:</b>

                            <div className="json-viewer">
                                <JsonViewer data={header} />
                            </div>

                        </div>

                        <div className="payload-tile">
                            <b>Payload:</b>
                            <div className="json-viewer">
                                <JsonViewer data={payload} />
                            </div>
                        </div>

                        <div className="signature-tile">
                            <b>Signature:</b>
                            <pre>{signature || "-"}</pre>
                        </div>

                    </div>


                </div>



            </div>

            <UserLocation />
        </div>
    )
}

export default Home;