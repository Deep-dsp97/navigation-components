import { useState } from 'react';
import Modal from '../components/Model';
import Button from '../components/Button';

const ModalPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const modal = <Modal onClose={handleClose}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem expedita velit inventore repudiandae voluptates nobis autem labore sint, accusantium commodi ex distinctio, nulla aut. Rem laboriosam in fugit alias.</p>
        <div>
            <Button onClick={handleClick} primary> I Accept </Button>
        </div>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            { isOpen && modal}
        </div>
    )
}

export default ModalPage