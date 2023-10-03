import "./App.css";
import image from "/logo-qr-generator.svg";
import fondo from "/bg-illustration.svg";
import QRCode from "qrcode.react";
import { useState } from "react";
import html2canvas from "html2canvas";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [url, setUrl] = useState(null);

  const handleSubmit = () => {
    const input = document.getElementById("url");
    setUrl(input.value);
  };

  const handleDownload = () => {
    const qrCodeElement = document.getElementById("qr");
    html2canvas(qrCodeElement)
      .then(function (canvas) {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        console.error("No se pudo generar la imagen: " + error);
      });
  };

  const copyUrl = () => {
    var copyText = url;
    navigator.clipboard.writeText(copyText);
    toast("URL copied into clipboad!!", {
      icon: "👏👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const body = (
    <>
      <img className="imageQR" src={image} alt="QR GENERATOR" />
      <div className="qrContainer">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="qr">
          <QRCode id="qr" className="" value={url} size={300} />
        </div>

        <div className="buttonContainer">
          <button className="buttons" onClick={handleDownload}>
            Download{" "}
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em">
              <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
            </svg>
          </button>
          <button className="buttons" onClick={copyUrl}>
            Share{" "}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
  return (
    <>
      {url ? (
        body
      ) : (
        <>
          <img src={image} alt="QR GENERATOR" />
          <div className="cont">
            <input
              id="url"
              className="input"
              type="text"
              placeholder="Enter an url"
            />
            <button type="submit" onClick={handleSubmit} className="btn">
              QR code
            </button>
          </div>
          <img className="fondo" src={fondo} alt="Imagen Fondo" />
        </>
      )}
    </>
  );
}

export default App;
