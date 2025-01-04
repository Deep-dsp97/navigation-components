import { useEffect } from 'react';
import ReactDOM from 'react-dom' ;

function Model({onClose, children, actionBar}){


    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    },[]);

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
            <div className="fixed inset-40 p-10 bg-white">
                {children}
            </div>
        </div>,

        document.querySelector('.modal-containter')
    );
}

export default Model