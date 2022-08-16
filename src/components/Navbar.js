import React from "react";

const Navbar = (props) => {
  const { title} = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h2 className="navbar-brand" >
            {title}
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
            </ul>
            <div className="followme">
            <a href="https://github.com/nileshlad09" target="_blank"><i class="fab fa-github" ></i></a> 
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
