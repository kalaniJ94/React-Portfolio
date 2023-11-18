import React from "react";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
            <h1>Kalani Jones's Portfolio</h1>
        </header>
      </section>
      <section className="hero">
        <h2>Welcome!</h2>
         
        </section>
        </div>

    
  )
}

export default Header;