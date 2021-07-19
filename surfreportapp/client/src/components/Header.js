import React from 'react'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">The Surfers Report</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/articles">Articles</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/spot/new">Create New Surf Spot</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/article/new">Create New Surf Article</a>
                        </li>
                        {/* <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
