function Modal_37(props) {

    return(
        <div className="modal">
            <p>{props.text}</p>
            <button className="btn btn--alt" onClick={props.onClose}>Cancel</button>
            <button className="btn" onClick={props.onClose}>confirm</button>
        </div>
    )
}                                   

export default Modal_37;