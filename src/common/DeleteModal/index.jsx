import React from 'react'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import removeImage from '../../assests/remove.svg'
import crossImage from '../../assests/cross.svg'
import tickImage from '../../assests/tick.svg'


const popover = (
    <Popover id="popover-basic" className={`border rounded-xl shadow-md`}>
        <Popover.Header as="h3" className={`flex gap-3 w-[11em] bg-slate-100 h-[2em] items-center pl-2`}>
            <img src={removeImage} alt={`remove`} className={`w-5 h-5`} />
            Remove
        </Popover.Header>
        <Popover.Body className={`flex justify-between bg-white w-[11em] h-[3em] pl-2 items-center`}>
            Are you sure?
            <div className={`flex gap-1 items-center`}>
                <img src={crossImage} alt={`cancel`} className={`w-9 h-9`} />
                <img src={tickImage} alt={`confirm`} className={`w-5 h-5 mt-1`} />
            </div>       
        </Popover.Body>
    </Popover>
);

const DeleteModal = (props) => {
    return (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            {props.overlayButton}
        </OverlayTrigger>
    )
}

export default DeleteModal
