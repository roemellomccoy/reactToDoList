import './App.css';
import React from 'react';
import Modal from 'react-modal';

class SplashGIF extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: true
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
      this.setState({ showModal: true });
    }

    handleCloseModal () {
      this.setState({ showModal: false });
    }

    render () {
      return (
        <div>
          <ReactModal
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      );
    }
  }


  function splashGIF() {
    return (
        <SplashGIF />
    )
}

  export default splashGIF