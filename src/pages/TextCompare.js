import React,{useState} from "react";
import jsPDF from "jspdf";
function TextCompare(){
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [darkMode, setDarkMode] = useState(false);



    const switchTexts = () => {
    const temp = text1;
    setText1(text2);
    setText2(temp);
  };
  const clearAll = () => {
    setText1("");
    setText2("");
    setResult("");
  };
    const compareTexts = () => {
    if (!text1.trim() && !text2.trim()) {
      setResult("⚠️ Please fill the data into both textboxes");
      return;
    }
    if (text1 === text2) {
      setResult("✅ Both texts are same");
    } else {
      setResult("❌ Texts are different");
    }
  };
    const convertToLower = () => {
    setText1(text1.toLowerCase());
    setText2(text2.toLowerCase());
    };
    const toggleBold = () => {
  setIsBold(!isBold);
};

const toggleItalic = () => {
  setIsItalic(!isItalic);
};

const toggleUnderline = () => { setIsUnderline(!isUnderline);};
const convertToUpper = () => {setText1(text1.toUpperCase())
  setText2(text2.toUpperCase())
};

  // copy
  const copyText = () => {
    navigator.clipboard.writeText(text1);
    alert("Copied successfully!");
  };

  // txt download
  const downloadTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([text1], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "text-editor-content.txt";
    document.body.appendChild(element);
    element.click();
  };

  // pdf download
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text(text1, 10, 10);
    doc.save("text-editor-content.pdf");
  };

  // dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
    // counters
  const wordCount = text1.trim() === "" ? 0 : text1.trim().split(/\s+/).length;
  const charCount = text1.length;
  const readingTime = (wordCount / 200).toFixed(2);
    return(
        <>
        
    <div className="container" 
      style={{
        padding: "20px",
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
>
      {/* Header */}
      <header className="header">
        <h1 className="text-5xl font-bold">Text Utilities !</h1>
      </header>
      <p className="p">Words: {wordCount}</p>
      <p className="p">Characters: {charCount}</p>
      <p className="p">Reading Time: {readingTime} min</p>
     
      {/* Buttons */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mt-8">
        
          <button className="button-switch" onClick={convertToLower}>Lower case</button>
          <button className="button-switch" onClick={convertToUpper}>Upper case</button>
          <button className="button-switch" onClick={toggleBold}>Bold</button>
          <button className="button-switch" onClick={toggleItalic}>Italic</button>
          <button className="button-switch" onClick={toggleUnderline}>Underline</button>
          <button className="button-switch" onClick={switchTexts}>Switch texts</button>
          <button className="button-switch" onClick={copyText}>Copy</button>
          <button className="button-switch" onClick={downloadTxt}>TXT</button>
          <button className="button-switch" onClick={downloadPdf}>PDF</button>
          <button className="button-switch" onClick={toggleDarkMode}>Dark Mode</button>

        <button className="button-switch" onClick={compareTexts}>
          Compare Text !
        </button>

        <button className="button-switch" onClick={clearAll}>Clear all</button>
      </div>

      {/* Text areas */}
      <div className="textarea-container">
        <textarea
          className="textarea" value={text1} onChange={(e) => setText1(e.target.value)}
          placeholder="Paste one version of a text here."
            style={{
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
  }}
        />
        <textarea
          className="textarea" value={text2} onChange={(e) => setText2(e.target.value)}
          placeholder="Paste another version of the text here."
            style={{
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
  }}
        />
      </div>
            {result && (
        <div className="max-w-5xl mx-auto pb-10 text-center text-2xl font-semibold">
          {result}
        </div>
      )}

      <footer className="footer">

      </footer>
    </div>

    
    </>
    );
}

 export default TextCompare