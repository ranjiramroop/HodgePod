import React from 'react';
import Modal from 'react-responsive-modal';
 
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
        <button onClick={this.onOpenModal}>More info</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal movie test</h2>
        </Modal>
      </div>
    );
  }
}
 