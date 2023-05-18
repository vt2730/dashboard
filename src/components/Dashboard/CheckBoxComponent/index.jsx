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
      <div className={`flex flex-col gap-1`}>
        <div className={`font-semibold text-[16px] text-[#172B4E] pt-3 pl-3`}>
          {props?.header}
        </div>
        <div className={`flex flex-col`}>
          {categoryArr && categoryArr.length > 0 && categoryArr[0]?.Labels?.map((item) => {
            return (
              <p className={`text-[13px] flex justify-start items-center`}>
                <Checkbox size="small" className={`checkboxCss`} sx={{
                  '&.Mui-checked': {
                    color: "#673ab7",
                  },
                }} />
                <label className={`text-[15px] mt-1`}>{item?.Name}</label>
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
