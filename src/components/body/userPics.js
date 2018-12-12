import React, { Component } from 'react';
import "./userPics.css";
import ReactModal from 'react-modal'
import { Query } from "react-apollo";
import gql from "graphql-tag";

class UserPics extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showModal: false,
      currentPic: '',
      posts: []
    }

    //this.setModalState = this.setModalState.bind(this);
  }

  componentDidMount() {
    const {apolloClient} = this.props;

    apolloClient.query({
      query: gql`
        {
          posts(user_id: "a") {
            id
            user {
              nickname
              avatar
            }
            image
            caption
          }
        }
      `
    })
    .then(response => {
      this.setState({ posts: response.data.posts }, console.log(this.state.posts));
      localStorage.setItem("posts", JSON.stringify(response.data.posts));
    });
  }

  
  setModalState(bool, img) {
    console.log(img)
    this.setState({
      showModal: bool,
      currentPic: img
    });
  }

  render() {
    ReactModal.setAppElement('#root');
    const {posts} = this.state
    const {currentPic} = this.state

    return (
      <div className="pics_container">
        <div className="grid">
          {posts.map( (pic, ix) => 
              <div key={ix} className="grid_item">
                <img className='grid_pic' 
                  key={ix} 
                  src={pic.image} 
                  alt="pic"
                  onClick={this.setModalState.bind(this, true, pic.image)}
                />
              </div>
          )}
        </div>

        <ReactModal isOpen={ this.state.showModal } 
          className="modal-content" 
          overlayClassName="modal-overlay">
          
          <img className='full_pic' 
            src={currentPic} 
            alt="pic"
            onClick={this.setModalState.bind(this, false, 0)}
          />
        </ReactModal>
      </div>
    )
  }
}
export default UserPics;