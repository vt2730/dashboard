import React from 'react'
import { Checkbox} from '@mui/material'
import DeleteModal from '../../../common/DeleteModal'

const TableComponent = (props) => {
  return (
    <div>
      <div className={`w-full bg-[#FFFFFF]`}>
        <div className={`h-20 flex pl-5 justify-start items-center text-2xl `}>
          {props.header}
        </div>
        <div>
          <table className={`table table-auto w-full`}>
            <thead className={`border-b`} >

              <tr>
                <th className={`text-left`}>
                  <Checkbox sx={{
                  '&.Mui-checked': {
                    color: "#673ab7",
                  },
                }} /></th>
                <th className={`text-left`}>NAME</th>
                <th className={`text-left`}>OWNER</th>
                <th className={`text-left`}>LABELS</th>
                <th className={`text-left`}>TYPE</th>
                <th className={`text-left`}>MODIFIED</th>
                <th className={`text-left`}>ACTION</th>
              </tr>
            </thead>
              <tbody>
                {props?.tableData?.map((items) => {
                  return <tr>
                    <td className={``} >
                      <Checkbox sx={{
                      '&.Mui-checked': {
                        color: "#673ab7",
                      },
                    }} /></td>
                  <td className={`flex gap-3 mt-2`}>
                    <img src={items?.nameImgsrc} alt={items?.nameImgalt} className={`rounded-md w-6 h-6`} />
                    <p>{items?.name}</p>
                  </td>
                    <td className={``}>
                      <img src={items?.owner} alt={items?.nameOwnerAlt} className={`rounded-full w-8 h-8`} />
                  </td>
                    <td className={``}>
                    {items?.label}
                  </td>
                    <td className={``}>{items.type}</td>
                    <td className={``}>{items.modified}</td>
                    <td className={`flex text-left gap-2 mt-1`}>
                      <img src={items.edit} alt={props.editAlt} className={`w-5 h-5 cursor-pointer`} />
                      <DeleteModal overlayButton={<img src={items.delete} alt={props.deleteAlt} className={`w-5 h-5 cursor-pointer`} />} />
                    </td>
                </tr>})}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableComponent
