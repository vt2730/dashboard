import React from 'react'
import { Checkbox} from '@mui/material'
import DeleteModal from '../../../common/DeleteModal'
import { useSelector } from 'react-redux'
import moment from 'moment'
import editImage from '../../../assests/editImage.png'
import deleteImage from '../../../assests/deleteImage.png'
import nameImage from '../../../assests/nameImg.png'
import styles from './Index.module.css'


const TableComponent = (props) => {
  const tableiItems = useSelector((state) => state.dashboard.items)

  return (
    <div>
      <div className={`w-full bg-[#FFFFFF] rounded-lg px-5 pb-10 shadow-md`}>
        <div className={`h-20 flex pl-5 justify-start items-center text-2xl `}>
          {props.header}
        </div>
        <div>
          <table className={`table table-auto w-full `}>
            <thead className={`border-b-2`} >

              <tr className={`flex items-center`}>
                <th className={`text-left w-[10%]`}>
                  <Checkbox size="small" sx={{
                  '&.Mui-checked': {
                    color: "#673ab7",
                  },
                }} /></th>
                <th className={`text-left text-sm text-[#4E535A] font-bold w-[45%]`}>NAME</th>
                <th className={`text-left text-sm text-[#4E535A] font-bold w-[20%]`}>OWNER</th>
                <th className={`text-left text-sm text-[#4E535A] font-bold w-[20%]`}>LABELS</th>
                <th className={`text-left text-sm text-[#4E535A] font-bold w-[20%]`}>TYPE</th>
                <th className={`text-left text-sm text-[#4E535A] font-bold w-[20%]`}>MODIFIED</th>
                <th className={`text-left text-sm text-[#4E535A] font-bold w-[20%]`}>ACTION</th>
              </tr>
            </thead>
              <tbody>
                {tableiItems && tableiItems?.length > 0 &&
                 tableiItems?.map((items) => {
                   return <tr className={`border-b py-4`}>
                    <td className={`flex items-center pt-2 w-[10%]`} >
                      <Checkbox size="small" sx={{
                      '&.Mui-checked': {
                        color: "#673ab7",
                      },
                    }} /></td>
                  <td className={`flex items-center gap-3 mt-2 w-[48%] text-[#172B4E] font-semibold`}>
                    <img src={items?.file ? items?.file : nameImage} alt={items?.nameImgalt} className={`rounded-md w-12 h-12`} />
                    <p>{items?.Name}</p>
                  </td>
                    <td className={`flex items-center w-[20%]`}>
                      <img src={items?.Owner} alt={items?.nameOwnerAlt} className={`rounded-full w-8 h-8`} />
                  </td>
                    <td className={`flex items-center w-[20%] text-[#979797]`}>
                    Label 1
                  </td>
                    <td className={`flex items-center w-[20%] text-[#979797]`}>{items.Type}</td>
                    <td className={`flex items-center w-[20%] text-[#979797]`}>{moment(items.ModifietAt).format('LL')}</td>
                    <td className={`flex items-center  text-left gap-4 mt-1 w-[20%]`}>
                      <img src={editImage} alt={props.editAlt} className={`w-5 h-5 cursor-pointer`} />
                      <DeleteModal overlayButton={<img src={deleteImage} alt={props.deleteAlt} className={`w-5 h-5 cursor-pointer`} />} />
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
