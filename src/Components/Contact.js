import React from "react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sainirupamkakani@gmail.com";
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Contact Me</h2>
      <div style={{ display: "inline-flex", gap: "1rem", marginTop: "1rem" }}>
        <button onClick={handleEmailClick}>Email Me</button>
        <button onClick={() => openInNewTab("https://github.com/nirupamzenith")}>
          GitHub
       
      </div>
    </section>
  );
};

export default Contact;
