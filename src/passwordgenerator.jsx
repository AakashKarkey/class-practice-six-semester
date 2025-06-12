import { useState } from "react";

const App = () => {
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let chars = "";
    if (includeUppercase) chars += upper;
    if (includeLowercase) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars) {
      setPassword("Select at least one option");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #e0f7fa, #80deea)",
    paddingTop: "50px",
  };

  const boxStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "30px",
    maxWidth: "400px",
    margin: "auto",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#26c6da",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const inputStyle = {
    margin: "5px",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "60px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>Password Generator</h2>

        <label>
          Password Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="4"
            max="30"
            style={inputStyle}
          />
        </label>

        <div style={{ textAlign: "left", marginTop: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase Letters
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase Letters
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Special Characters
          </label>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={generatePassword} style={buttonStyle}>
            Generate Password
          </button>
          <button onClick={copyToClipboard} style={{ ...buttonStyle, backgroundColor: "#00838f" }}>
            Copy Password
          </button>
        </div>

        <h3 style={{ marginTop: "20px", fontSize: "20px" }}>{password}</h3>
      </div>
    </div>
  );
};

export default App;
