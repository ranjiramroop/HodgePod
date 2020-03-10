import React from 'react';
import Modal from 'react-responsive-modal';
import PCDetail from '../PCDetail';
import "./modal.css";
export default class App extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button class ="modalbtn" onClick={this.onOpenModal}> More Info</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          {/* <PCDetail
           Publisher={props.podcasts} 
           Genre={props.podcasts} 
          Go to Podcast={props.podcast} 
          /> */}
        </Modal>
        <button class ="modalbtn"> Save </button>
      </div>
    );
  }
}
 
