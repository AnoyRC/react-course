function Modal(props){
   return(
      <div className="modal">
        <p>Are You Sure?</p>
        <button className="btn btn--alt">Cancel</button>
        <button className="btn">Confirm</button> 
      </div>
   );
}

export default Modal;