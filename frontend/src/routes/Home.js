import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default () => {
    const noSession = () => {
        alert("로그인이 필요합니다.");
    }
    const [auth, setAuth] = useState("");

    useEffect(() => {
      if (localStorage.getItem('token') !== null){
        setAuth(true);
      }
      else {
        setAuth(false);
      }
    }, [])
    return(
        <div className="contents1">
            {auth ? 
                    <>
                        <button className="lightest bigBtn boxShadow" onClick={noSession}>푸시업</button>
                        <button className="neutral bigBtn boxShadow" onClick={noSession}>스쿼트</button>
                        <button className="darkest bigBtn boxShadow" onClick={noSession}>통계</button>
                    </>
                :
                    <>
                        <Link to='/pushup/guideLine'><button className="lightest bigBtn boxShadow">푸시업</button></Link>
                        <Link to='/squat/guideLine'><button className="neutral bigBtn boxShadow">스쿼트</button></Link>
                        <Link to='/statistics'><button className="darkest bigBtn boxShadow">통계</button></Link>
                    </>
            }
        </div>
    )
};