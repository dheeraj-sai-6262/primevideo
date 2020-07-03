import React, { Component, Fragment } from 'react';
import './HomeComponent.Styles.css'
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let homePageStyles = {
            "background-color": "#000",
            "background-image":
                "linear-gradient(to right, #000 40%, transparent 58%),url('https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg')",
            "background-position": "right top",
            height: "100vh",
        };
        return (
            <Fragment>
                <div>
                    <div className="jumbotron  jumbotron-cust dv-ms-su-mlp-1 font-weight-bold text-light">
                        <section className="text-box-cust  text-white">
                            <h1 className="display-4">Welcome to Prime Video</h1>
                            <p className="lead">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals
               </p>
                            <hr className="my-4" />
                            <p></p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">start your 30-days free trial</a>
                        </section>
                    </div>
                    <div className="jumbotron  jumbotron-cust dv-ms-su-mlp-2 font-weight-bold text-light">
                        <section className="text-box-cust">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                            to
                  featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </section>
                    </div>
                    <div className="jumbotron jumbotron-cust dv-ms-su-mlp-3 font-weight-bold text-light">
                        <section className="text-box-cust  ml-auto">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                            to
                  featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </section>
                    </div>
                    <div className="jumbotron jumbotron-cust dv-ms-su-mlp-5 font-weight-bold   ">
                        <section className="text-box-cust  ">
                            <h1 className="display-4  ">Firestick</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                            to
                  featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </section>
                    </div>
                    <div className="jumbotron jumbotron-cust dv-ms-su-mlp-6  font-weight-bold">
                        <section className="text-box-cust  ml-auto">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                            to
                  featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </section>
                    </div>
                    <div className="jumbotron jumbotron-cust  dv-ms-su-mlp-7 font-weight-bold">
                        <section className=" d-flex justify-content-center align-content-between">
                            <div className="card-cust text-center">
                                <header>
                                    <img src="images\PV_Benefits_Download_IN (1).jpg" alt="image" />
                                </header>
                                <h2>Watch anywhere</h2>
                                <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up
                                to 3 devices at once.
                                Data Saver
                                Data Saver
                    Control data usage while downloading and </p>
                            </div>
                            <div className="card-cust text-center">
                                <header>
                                    <img src="images\PV_Benefits_Download_IN (1).jpg" alt="image" />
                                </header>
                                <h2>Watch anywhere</h2>
                                <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up
                                to 3 devices at once.
                                Data Saver
                                Data Saver
                    Control data usage while downloading and </p>
                            </div>
                            <div className="card-cust text-center">
                                <header>
                                    <img src="images\300x300_Tile_1234.png" alt="image" />
                                </header>
                                <h2>Watch anywhere</h2>
                                <p>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up
                                to 3 devices at once.
                                Data Saver
                                Data Saver
                    Control data usage while downloading and </p>
                            </div>
                        </section>
                    </div>
                    <div className="jumbotron  jumbotron-cust dv-ms-su-mlp-8  font-weight-bold text-light">
                        <section className="text-box-cust">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                            to
                  featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </section>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomeComponent;