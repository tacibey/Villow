import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AuthorizedUser from "./AuthorizedUser";
import { restoreSession, getActiveUser } from "../../store/usersReducer";
import GoogleLoginButton from "./GoogleLoginButton"; // Google Login butonunu import edeceğiz

import villow from "../assets/Logo-Villow.svg"; // Logoyu daha sonra ArsaMax ile değiştireceğiz
import "./Navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector(getActiveUser());

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <nav id="navigation">
          <div className="grid-item left">
            <Link to="/ilanlar">Arsa Al</Link>
            <Link to="/arsa-sat">Arsa Sat</Link>
            <a href="https://github.com/tacibey/Villow" target="_blank" rel="noopener noreferrer">Proje Kodu (GitHub)</a>
          </div>
          <Link to="/">
            <div
              className="grid-item middle"
              style={{ width: "200px", height: "10px" }}
            >
              {/* TODO: Bu logoyu ArsaMax logosuyla değiştireceğiz */}
              <img src={villow} alt="logo" style={{ marginTop: "20px", height: "55px" }} />
            </div>
          </Link>
          <div className="grid-item right">
            {activeUser ? <AuthorizedUser /> : <GoogleLoginButton />}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
