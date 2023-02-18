import React from "react";

const Navbar = (props) => {
  const { title } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h2 className="navbar-brand" >
            {title}
          </h2>
          <div className="followme">
            <a href="https://github.com/nileshlad09" target="_blank"><i class="fab fa-github" ></i></a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
