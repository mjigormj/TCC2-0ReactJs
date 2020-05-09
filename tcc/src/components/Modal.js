import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "../css/modal.css";

import Progress from './barraProgreco';

import "../css/acao.css";

import cadIcon from "../img/cad.png";

export default function TransitionsModal() {

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
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const preview = () => {
        var imagem = document.querySelector('input[name=foto]')

        var reader = new FileReader();

        reader.onloadend = function () {

        }
    }

    return (
        <div>
            <button type="button" onClick={handleOpen} className="opcao">
                <div className="" id="cad">
                    <img src={cadIcon} alt="cadIcon" />
                    <p>Cadastrar</p>
                </div>
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

                        <div className="cad_labels">
                            <Progress/>
                            <form>
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