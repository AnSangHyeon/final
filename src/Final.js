import { useState } from "react";
import './Final.css'

let Final = () => {
  // color를 받아올 훅
  const [color, setColor] = useState("Purple");
  return(
    <div className="ContentsWrap"
      // backgroundColor를 state의 변수로 설정
      style={{
        background: color
      }}
    >
      <div className="flexBox">
        {/* 사용자가 입력한 색 출력 */}
        <span>Background Color : {color}</span>&nbsp;

        {/* input이벤트로 텍스트가 바뀔떄마다 input의value를 가져와서 setColor로 색상 동적으로 바꿔줌 */}
        <input type="text" value={color} onInput={() => setColor(document.querySelector("input[type=text]").value)}/>
      </div>
    </div>
  );
}
export default Final;