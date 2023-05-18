import React from "react";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";


const ButtonFieldInput = (props) => {
   
    return (
        <Button
            variant={props.variant}
            className={`${props.buttonextracls}`}
            onClick={props.handleClick}
            component={props.component}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            to={props.to}
            disabled={props.disabled}
            type={props.type ? props.type : "submit"}
            data-cy={props.dataCy}
            style={props.style}
        >
            {props.loading === true ? (
                <div className='loaderwithtxt'>
                    <CircularProgress size={18} className={``} color='inherit' />
                </div>
            ) : (
                <div className='flex items-center justify-center w-full'>
                    {props.img && (
                        <div className='mr-2 flex'>
                            <img
                                src={props.img}
                                height={props.height ? props.height : 30}
                                width={props.width ? props.width : 20}
                                alt='Button'
                            />
                        </div>
                    )}
                    <p className={props.extraTextCls}>{props.name}</p>
                </div>
            )}
        </Button>
    );
};

export default ButtonFieldInput;
