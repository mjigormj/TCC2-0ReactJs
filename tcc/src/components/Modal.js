import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "../css/modal.css";

import RadBtn from '../containers/RadBtn'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Cadastro
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <strong>Cadastrar</strong>
                        <br />
                        <RadBtn />

                        <div className="cad_labels">
                        <form>
                            <div className="input-block">
                                <label htmlFor="nome_pessoa">Nome</label>
                                <input name="nome_pessoa" id="nome_pessoa" required />
                            </div>

                            <div className="input-block">
                                <label htmlFor="CPF">CPF</label>
                                <input name="CPF" id="CPF" required />
                            </div>

                            <div className="input-block">
                                <label htmlFor="RG">RG</label>
                                <input name="RG" id="RG" required />
                            </div>

                            <div className="input-block">
                                <label htmlFor="CPF">CPF</label>
                                <input name="CPF" id="CPF" required />
                            </div>


                            <button type="submit">Salvar</button>
                            <button type="btn" onClick={handleClose}>Cancelar</button>
                        </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}