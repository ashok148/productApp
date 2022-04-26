import React from "react";
const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>E-Commerce Shop</h2>
        <div className="left-header">
          <form className="search-form">
            <input
              className="form"
              type="text"
              name='query'
              placeholder='search a product...'
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
