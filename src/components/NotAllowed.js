import React from "react";
import { useNavigate } from "react-router-dom";
function NotAllowed() {
  const navigate = useNavigate()
  const goBack = ()=> navigate(-1)
  return (
    <div>
      <h2>You are not allowed to go there.<span onClick={goBack()}>Go Back</span></h2>
    </div>
  );
}

export default NotAllowed;
