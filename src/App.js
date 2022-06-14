import React from 'react';
import './App.css';
import Header from './container/Header';
import Body from './container/Body';
import Footer from './container/Footer';
import Upload from './container/Upload';
import { Modal, useModal } from './component/Modal';
import Button from './component/Button';

function App() {
    const {isShowing, toggle} = useModal();

    return (
        <div className="App">
            <Modal isShowing={isShowing} hide={toggle}>
                <Upload />
            </Modal>
            <Header />

            <Button primary onClick={toggle} className='show-modal-btn'>
                Show Modal
            </Button>

            <Body />
            <Footer />
            {/* <Modal>
                <Upload />
            </Modal> */}
        </div>
    );
}

export default App;
