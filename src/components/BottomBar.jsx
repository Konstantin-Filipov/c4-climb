import React, { useRef } from "react";
import SliderGrade from "./SliderGrade";

export default function BottomBar(props) {
  const { handleOkDifficulty, handleToggleModal } = props;
  const sliderRef = useRef();

  function handleClickOk() {
    const selectedGrade = sliderRef.current.getGrade();
    handleOkDifficulty(selectedGrade);
    handleToggleModal();
  }

  return (
    <div className="bottomBar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="bottomBarContents">
        <button className="buttonOk" onClick={handleClickOk}>
          Ok
        </button>
        <SliderGrade ref={sliderRef} />
      </div>
    </div>
  );
}
