import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({children}){
function onCloseHandler(){

}
    return<>
<div className={classes.backdrop} onClick={onCloseHandler}></div>
<dialog open className={classes.modal} >{children}</dialog>
)
</>
}

export default Modal;