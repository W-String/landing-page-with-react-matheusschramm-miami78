import React from "react";

const navbar = () => {
    return (
        <>
            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="d-flex">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Link</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default navbar;