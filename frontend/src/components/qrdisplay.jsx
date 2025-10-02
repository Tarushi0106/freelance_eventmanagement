import React from "react";

const QRDisplay = ({ qrCode }) => {
    if (!qrCode) return null;

    return (
        <div>
            <h3>Your QR Code:</h3>
            <img src={qrCode} alt="User QR Code" />
        </div>
    );
};

export default QRDisplay;
