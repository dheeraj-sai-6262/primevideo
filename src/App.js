import React, { Component, Fragment } from 'react';
import HeaderComponent from './components/Header/HeaderComponent';
import { ToastContainer } from "react-toastify";
import firebase from './firebase'
import "react-toastify/dist/ReactToastify.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent';
import LoginComponent from './components/Auth/LoginComponent';
import RegisterComponent from './components/Auth/RegisterComponent';
import PasswordReset from './components/Auth/PasswordResetComponent';
import PageNotFoundComponent from './components/PageNotFound/PageNotFoundComponent';
import ListMovie from './components/PrimeDetails/ListMovie';
import UpLoadVideoForm from './components/VideosComponent/UploadVideoForm';
import ListVideos from './components/VideosComponent/ListVideos';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        }
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ userData: user });
                this.props.history.push("/");
            }
            else {
                this.setState({ userData: "" });
                this.props.history.push("/login");
            }
            console.log(this.state.userData)
        });
    }
    render() {
        return (
            <Fragment>
                <Router>
                    <header>
                        <HeaderComponent user={this.state.userData} />
                    </header>
                    <ToastContainer />
                    <main>
                        <Switch>
                            <Route path="/" exact component={HomeComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/register" exact component={RegisterComponent} />
                            <Route path="/password-reset" exact component={PasswordReset} />
                            {this.state.userData ? (
                                <Fragment>
                                    <Route path="/list-users" exact component={ListMovie} />
                                    <Route path="/upload-video" exact component={() => (
                                        <UpLoadVideoForm user={this.state.userData} />
                                    )}
                                    />
                                    <Route path="/list-video" exact component={() => (
                                        <ListVideos user={this.state.userData} />
                                    )}
                                    />
                                </Fragment>
                            ) : null}


                            <Route path="**" component={PageNotFoundComponent} />
                        </Switch>
                    </main>
                </Router>
            </Fragment>
        );
    }
}

export default withRouter(App);