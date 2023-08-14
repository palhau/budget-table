import React from 'react';

const Header = () => {
  return (
    <section className="container mt-20">
      <div className="flex py-2 border rounded-lg border-black font-mono">
        <h1
          data-testid="projectTitle"
          className="content-center font-bold text-left text-2xl px-4 py-2"
        >
          Personal Budget App
        </h1>
      </div>
    </section>
  );
};

export default Header;
