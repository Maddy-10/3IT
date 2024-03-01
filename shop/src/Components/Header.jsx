import React from "react";

export default function Header() {
  return (
    <section>
    
      <div className="containers">
        <nav class="navbar  navbar-light bg-primary ">
          <div class="container">
            <a class="navbar-brand" href="#">
              <h1 id="head" className="text-light">Shop</h1>
            </a>

            <div className="btngrp">
              <div className="btn btn-danger">Cart</div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
