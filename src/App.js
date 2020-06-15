import React,{useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import marked from 'marked';
const purify = require('dompurify');

function App() {
const [markdown,setMarkdown] = useState("")

  const inputStyle = {
    width: "400px",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px"
  }
  const outputStyle = {
    width: "400px",
    height: "50vh",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px"
  }

  const updateMarkdown=(markdown)=>{
    setMarkdown(markdown)
  }
  const resetMarkdown = ()=>{
    setMarkdown('')
  }

  const getMarkdownText = (markdown) =>{
    let rawMarkup = marked(markdown);
    //sanitize 
    let cleanMarkup = purify.sanitize(rawMarkup)
    return {__html: cleanMarkup};
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
                </Badge>
            </h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
          <button onClick={resetMarkdown} className="btn btn-danger">Reset</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Markdown Input
                  </Badge>
              </h4>
              <div className="mark-input">
                <textarea 
                  style={inputStyle} 
                  className="input"
                  value={markdown}
                  onChange={(e)=>{updateMarkdown(e.target.value)}}>
                </textarea>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" variant="secondary">
                  Preview
                  </Badge>
              </h4>
              <div  
                style={outputStyle} 
                dangerouslySetInnerHTML={getMarkdownText(markdown)}>

              </div>
            </div>
          </div>
      

        </div>
    
      </div>
    </div>
  );
}

export default App;
