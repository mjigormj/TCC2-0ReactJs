import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "../css/modal.css";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import "../css/acao.css";


import cadIcon from "../img/cad.png";

export function RadBtn() {
    const [value, setValue] = React.useState('female');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Gênero</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Femenino" />
          <FormControlLabel value="male" control={<Radio />} label="Masculino" />
          <FormControlLabel value="other" control={<Radio />} label="Outro" />
        </RadioGroup>
      </FormControl>
    );
  }

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

    const preview = () => {
        var imagem = document.querySelector('input[name=foto]')
        
        var reader = new FileReader();

        reader.onloadend = function() {

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
                            <strong>Novo Morador</strong>
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
                                    <label htmlFor="foto">Foto</label>
                                    <input type="file" name="foto" id="foto" onChange="preview()" required />
                                </div>


                                <button type="submit">Salvar</button>
                                <button type="btn" onClick={handleClose}>Cancelar</button>
                            </form>

                            <script src="https://ajax.googleapis.com/ajax/libs/d3js/5.15.1/d3.min.js"></script>
                            
                            
                                
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}