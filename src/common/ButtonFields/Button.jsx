import React from 'react'
import './index.css'
import { CircularProgress } from '@mui/material'

const Button = (props) => {
  return (
     <div className={`buttonfieldinput ${props.mainbuttonextra}`}>
      <Button
        variant={props.variant}
        className={`w-full mx-auto buttonfield-label ${props.buttonextracls}`}
        onClick={props.handleButton}
        component={props.component}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        to={props.to}
        type="submit"
        data-cy={props.dataCy}
        disabled={props.disabled ? props.disabled : (props.loading === true ? true : false)}
      >
        {props.loading === true ? (
          <div className="loaderwithtxt">
            <CircularProgress
              size={18}
              className="buttonprogressdesign"
              color="inherit"
            />
          </div>
        ) : (
          props.name
        )}
      </Button>
    </div>
  )
}

export default Button