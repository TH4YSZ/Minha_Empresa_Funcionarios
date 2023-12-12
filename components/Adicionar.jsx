import Modal from  'react-bootstrap/Modal'
import Formulario from './Formulario'

function Adicionar({show, setShow}){
    return(
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Adicionar</h2>
                </Modal.Header>
                <Modal.Body>
                    <Formulario/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Adicionar