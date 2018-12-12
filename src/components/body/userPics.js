import React, { Component } from 'react';
import "./userPics.css";
import avatar from '../../assets/profile_pic2.jpg'
import ReactModal from 'react-modal'

class UserPics extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: "j0nathanb",
      avatar: "../profile_pic2.jpg",
      pics: '../../assets/dummy0/',
      pictures: ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'],
      showModal: false,
      pic: '0.jpg'
    }

    //this.setModalState = this.setModalState.bind(this);
  }
  
  setModalState(bool, ix) {
    this.setState({
      showModal: bool,
      pic: ix + '.jpg'
    });
  }

  render() {
    ReactModal.setAppElement('#root');

    return (
      <div className="pics_container">
        <div className="grid">
          {this.state.pictures.map( (pic, ix) => 
              <div key={ix} className="grid_item">
                <img className='grid_pic' 
                  key={ix} 
                  src={require('../../assets/dummy0/' + pic)} 
                  alt="pic"
                  onClick={this.setModalState.bind(this, true, ix)}
                />
              </div>
          )}
        </div>

        <ReactModal isOpen={ this.state.showModal } 
          className="modal-content" 
          overlayClassName="modal-overlay">
          
          <img className='full_pic' 
            src={require('../../assets/dummy0/' + this.state.pic)} 
            alt="pic"
            onClick={this.setModalState.bind(this, false, 0)}
          />
        </ReactModal>
      </div>

      // <article className="Post" ref="Post">
      //   <header>
      //     <div className="Post-user">
      //       <div className="Post-user-avatar">
      //         <img src={avatar} alt="user avatar" />
      //       </div>
      //       <div className="Post-user-nickname">
      //         <span>{this.state.user}</span>
      //       </div>
      //     </div>
      //   </header>
      //   <div className="Post-image">
      //     <div className="Post-image-bg">
      //       <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
      //     </div>
      //   </div>
      //   <div className="Post-caption">
      //     <strong>Chris</strong> Moving the community!
      //   </div>
      // </article>
    )
  }
}
export default UserPics;