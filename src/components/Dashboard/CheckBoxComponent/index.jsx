import { Checkbox } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const CheckboxLayout = (props) => {
  const category = useSelector((state) => state.dashboard.category)
  const category1 = category && category.length > 0  &&
                    category?.filter((item)=>item?.Name === "Category 1")

  const category2 = category && category.length > 0 && category?.filter((item)=>item?.Name === "Category 2")

  const categoryArr = props?.index === 0 ? category1 : category2;

  return (
    <div>
      <div className={`flex flex-col gap-3`}>
        <div className={`font-semibold text-[15px] pt-3`}>
          {props?.header}
        </div>
        <div className={`flex flex-col gap-2`}>
          {categoryArr && categoryArr.length > 0 && categoryArr[0]?.Labels?.map((item) => {
            return (
              <p className={`text-[13px] flex gap-2 justify-start items-center`}>
                <input type="checkbox" className={``}/>
                <label>{item?.Name}</label>
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
