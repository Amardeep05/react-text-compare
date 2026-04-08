import React,{useState} from "react";
function TextCompare(){
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");

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
    return(
        <>
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="text-5xl font-bold">Text Compare!</h1>
      </header>

     

      {/* Buttons */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mt-8">
        
          <button className="button-switch" >Edit texts ...</button>
          <button className="button-switch" onClick={switchTexts}>Switch texts</button>
    

        <button className="button" onClick={compareTexts}>
          Compare!
        </button>

        <button className="button-clear" onClick={clearAll}>Clear all</button>
      </div>

      {/* Text areas */}
      <div className="textarea-container">
        <textarea
          className="textarea" value={text1} onChange={(e) => setText1(e.target.value)}
          placeholder="Paste one version of a text here."
        />
        <textarea
          className="textarea" value={text2} onChange={(e) => setText2(e.target.value)}
          placeholder="Paste another version of the text here."
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