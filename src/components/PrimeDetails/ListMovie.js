// import React, { Component, Fragment } from 'react';
// import AddMovieForm from './AddMovieForm';
// import { uuid } from "uuidv4"
// class ListMovie extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//         }
//         this.addVideo = this.addVideo.bind(this)
//     }
//     renderVideo()   {
//         return(
//             <Fragment>
//             <table className="table  table-bordered"  
//             </Fragment>
//         )
//     }
//     addVideo(video) {
//         let newVideo = { ...video, id: uuid() }
//         this.setState((state) => ({
//             items: [...this.state.items, newVideo]
//         }))



//     }
//     render() {
//         return (
//             <Fragment>

//                 <AddMovieForm addVideo={this.addVideo} />
//             </Fragment>
//         );
//     }
// }

// export default ListMovie;