import Image from 'next/image';
import React from 'react';

function Header(props) {
  return (
    <>
    <div className="container">
      <nav className="navbar ">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJ2jkyRGWxx9X5ECO3G5T8E9yxgDsgOx4jQ&usqp=CAU" height="50" width="80" />
              Ecommerce
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Header;