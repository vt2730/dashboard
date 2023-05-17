import { Checkbox } from '@mui/material'
import React from 'react'

const CheckboxLayout = (props) => {
  return (
    <div>
      <div className={`flex flex-col gap-3`}>
        <div className={`font-semibold text-[15px] pt-3`}>
          {props?.header}
        </div>
        <div className={`flex flex-col gap-2`}>
          {props?.CheckBoxData?.map((item) => {
            return (
              <p className={`text-[13px] flex gap-2 justify-start items-center`}>
                <input type="checkbox" className={``}/>
                <label>{item}</label>
              </p>
            )
          })
          }
      </div>
       
      </div>
    </div>
  )
}

export default CheckboxLayout
