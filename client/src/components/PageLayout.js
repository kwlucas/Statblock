import React, { useState } from "react";

// Import pages

function PageLayout() {
  const [currentPage, setCurrentPage] = useState("Home");

  const render = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    if (currentPage === "CharacterCreation") {
      return <CharacterCreation />;
    }
    if (currentPage === "CharacterSheet") {
      return <CharacterSheet />;
    }
  };

  //   const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* <NavBar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <main>{render()}</main>
      {/* <FooterNavBar /> */}
    </div>
  );
}

export default PageLayout;
