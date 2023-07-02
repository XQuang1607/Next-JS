import React from 'react'

const HeaderBottom = () => {
    return (
        <div>
            <div className="header-bottom ">
                <nav className="container main-nav ">
                    <ul className=" d-flex">
                        <li>
                            <a className="actived" href="index.html">
                                Home
                            </a>
                        </li>
                        <li className="has-child">
                            <a href="category.html">Category</a>
                            <div className="childs">
                                <a href="#">Tech</a>
                                <a href="#">Fashion</a>
                                <a href="#">Sport</a>
                            </div>
                        </li>
                        <li>
                            <a href="product.html">Product</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="contact-us.html">Contact-us</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default HeaderBottom