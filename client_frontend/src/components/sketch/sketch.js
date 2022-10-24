import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "./index.css"
import { AiOutlineArrowDown } from "react-icons/ai";



const styles = {
  border: "none",
  backgroundColor: "#ffff",
  boxShadow: "0 15px 25px rgba(136, 136, 136, 0.6)"
};

const Canvas = () => {
  const canvas = React.createRef();
  const [expand, setexpaned] = React.useState(false)
  const [sketches, setsketches] = React.useState(0)
  const [array, setarray] = React.useState(["Sketch 1", "Sketch 2"])


  const handleExpand = () => {
    setexpaned(!expand)
  }


  const addSkecth = () => {

  }

  return (
    <div className="sketchContainer">
      <div className="">
        <ReactSketchCanvas
          ref={canvas}
          style={styles}
          strokeWidth={5}
          width="1000px"
          height="500px"
          strokeColor="green"
          backgroundImage=" "

          exportWithBackgroundImage={true}
        />
      </div>

      <div className="card">
        <div className="cradHeader">
          <p>SKETCHES</p>
          <button className="buttonCard" onClick={handleExpand}><AiOutlineArrowDown /></button>
        </div>

        <div className={expand ? "" : "SKETCHES"}>
          {array.map((each, index) => <p key={index}>{each}</p>)}
          <button className="btnadd" onClick={addSkecth}>Add new sketch</button>

        </div>
      </div>

    </div>


  );
};

export default Canvas;
