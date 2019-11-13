import React from 'react';
import Nav from '../components/global/Nav';
import CTA from '../components/global/CTA';
import Footer from '../components/global/Footer';
const Stylesheet = () => {
    return(
        <div>
            <Nav />

            {/* TYPOGRAPHY */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1">
                        <h1>Template: Style Sheet</h1>
                        <h2>H2 Headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu. <a href="/">Link Style</a>. <a href="/">Link Hover</a>.</p>
                        <h3>H3 Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                        <h4>H4 Headline</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                        <h5>H5 Headline</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                        <h6>H6 Headline</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                </div>
            </div> 

            {/* COLORS */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1">
                        <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="rounded-circle"></div>
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 

            {/* List */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">  
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h2>Unorder List</h2>
                                <ul>
                                    <li>Bulleted list item</li>
                                    <li>Bulleted list item with wrapped text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum.</li>
                                    <li>Bulleted list item
                                        <ul>
                                            <li>Indented bulleted list item</li>
                                            <li>Indented bulleted list item</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6">
                                <h2>Order List</h2>
                                <ol>
                                    <li>Bulleted list item</li>
                                    <li>Bulleted list item with wrapped text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum.</li>
                                    <li>Bulleted list item
                                        <ul>
                                            <li>Indented bulleted list item</li>
                                            <li>Indented bulleted list item</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">  
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h2>Primary Button</h2>
                                <button type="button" className="btn btn-primary">Primary</button>
                            </div>
                            <div className="col-12 col-md-6">
                                <h2>Secondary Button</h2>
                                <button type="button" className="btn btn-outline-primary">Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Forms */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <h2>Form Fields</h2> 
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <label htmlFor="exampleFormControlSelect1">Example text input</label>
                                <input type="text" className="form-control" placeholder="Text Here" />
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <label htmlFor="exampleFormControlSelect1">Example checkboxes</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Default checkbox
                                    </label>
                                </div>
                                <label htmlFor="exampleFormControlSelect1">Example radio buttons</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Second default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option3" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Third default radio
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CTA />
            <Footer />
        </div>
    );
}

export default Stylesheet;