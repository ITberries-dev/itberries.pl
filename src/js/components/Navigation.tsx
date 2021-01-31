import React from "react";
import logo from "../../assets/itberries-logo.svg";
import { useState, useEffect } from "react";

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    //żeby usunąć klase 'open' z cssa, gdy ktos probuje zmienic rozmiar okna przegladarki na wlaczonym hamburger menu;
    function handleResize() {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <div className="logo">
        <img src={logo} alt="Logo koła naukowego ITBerries" />
      </div>
      <div className={isOpen ? "nav-content open" : "nav-content"}>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li className="link-item">O nas</li>
          <li className="link-item">Portfolio</li>
          <li className="link-item">Wydarzenia</li>
          {/*Fancy Button pojdzie zamiast tego li*/}
          <li className="link-item">Dołącz do Nas</li>
        </ul>
        <div className={isOpen ? "social-icons open" : "social-icons"}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ITberries/"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9914 4.14982L16.6381 4.15086C14.793 4.15086 14.4358 5.0277 14.4358 6.3145V9.1518H18.8363L18.8347 13.596H14.4358V25H9.84583V13.596H6.00854V9.1518H9.84583V5.87465C9.84583 2.07114 12.1692 0 15.5623 0L18.9916 0.00545585L18.9914 4.14982Z"
                fill="#8845E8"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/itberries/"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7912 0H3.20884C1.44412 0 0.000253677 1.30654 0.000253677 3.20858V21.7914C0.000253677 23.6935 1.44412 25 3.20884 25H21.7912C23.5564 25 25 23.6935 25 21.7914V3.20858C25 1.30654 23.5564 0 21.7912 0ZM6.78859 2.77761C7.40772 2.77761 7.91365 3.28379 7.91365 3.90318V6.5971C7.91365 7.21623 7.40772 7.72268 6.78859 7.72268H3.96298C3.34385 7.72268 2.83741 7.21623 2.83741 6.5971V3.90318C2.83741 3.28379 3.34385 2.77761 3.96298 2.77761H6.78859ZM2.8256 10.5724H5.02592C4.81775 11.2521 4.70506 11.9721 4.70506 12.717C4.70506 16.8754 8.18471 20.2462 12.4763 20.2462C16.7675 20.2462 20.2467 16.8754 20.2467 12.717C20.2467 11.9716 20.1342 11.2519 19.9258 10.5724H22.2219V21.1328C22.2219 21.6792 21.7747 22.1266 21.228 22.1266H3.81898C3.27224 22.1266 2.82509 21.6795 2.82509 21.1328V10.5724H2.8256ZM12.4765 7.58073C15.2492 7.58073 17.4973 9.75871 17.4973 12.4457C17.4973 15.1327 15.2492 17.3107 12.4765 17.3107C9.70352 17.3107 7.45521 15.1327 7.45521 12.4457C7.45521 9.75871 9.70327 7.58073 12.4765 7.58073Z"
                fill="#B4B5B7"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/itberries/"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M3.33214 0.0175781C1.49616 0.0175781 0.00134426 1.51211 0 3.34952C0 5.18694 1.49482 6.68176 3.33214 6.68176C5.16878 6.68176 6.66283 5.18694 6.66283 3.34952C6.66283 1.5123 5.16869 0.0175781 3.33214 0.0175781Z"
                  fill="#B4B5B7"
                />
                <path
                  d="M5.83295 8.02051H0.830956C0.593022 8.02051 0.400024 8.21341 0.400024 8.45154V24.5515C0.400024 24.7895 0.593022 24.9824 0.830956 24.9824H5.83286C6.07089 24.9824 6.26388 24.7894 6.26388 24.5515V8.45154C6.26398 8.21331 6.07098 8.02051 5.83295 8.02051Z"
                  fill="#B4B5B7"
                />
                <path
                  d="M18.6203 7.83105C16.7898 7.83105 15.1812 8.38844 14.1996 9.29736V8.45162C14.1996 8.2135 14.0066 8.0206 13.7686 8.0206H8.97046C8.73243 8.0206 8.53943 8.2135 8.53943 8.45162V24.5516C8.53943 24.7896 8.73243 24.9825 8.97046 24.9825H13.9677C14.2057 24.9825 14.3987 24.7895 14.3987 24.5516V16.5861C14.3987 14.3007 14.8191 12.8841 16.917 12.8841C18.9839 12.8866 19.1385 14.4056 19.1385 16.7227V24.5516C19.1385 24.7896 19.3315 24.9825 19.5697 24.9825H24.5692C24.8071 24.9825 25.0001 24.7895 25.0001 24.5516V15.72C25 12.047 24.2749 7.83105 18.6203 7.83105Z"
                  fill="#B4B5B7"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <Burger isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
}

// mam to przeniesc do osobnego pliku?

const Burger = ({ isOpen, setOpen }: { isOpen: boolean; setOpen: any }) => {
  return (
    <div className="mobile-menu">
      <div
        className={isOpen ? "mobile-btn open" : "mobile-btn"}
        onClick={() => {
          setOpen(!isOpen);
        }}
      ></div>
    </div>
  );
};

export default Navigation;
