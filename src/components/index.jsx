import React from 'react'
import CheckboxLayout from './Dashboard/CheckBoxComponent'
import Search from '../common/FormFields/SearchBar'
import categoriesImg from '../assests/categories.png'
import TableComponent from './Dashboard/TableComponent';
import nameImage from '../assests/nameImg.png'
import ownerImage from '../assests/owner.png'
import editImage from '../assests/editImage.png'
import deleteImage from '../assests/deleteImage.png'



const checkBoxFirstData = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
const checkBoxSecondData = ['Label 5', 'Label 6'];

const tableData = [
  {
    
    nameImgsrc: nameImage,
    nameImgalt: 'Name',
    name: 'Sample File 1',
    owner: ownerImage,
    nameOwnerAlt: 'owner',
    label: 'Label 1',
    type: 'PDF',
    modified: 'MODIFIED',
    edit: editImage,
    editAlt: 'Edit',
    delete:  deleteImage,
    deleteAlt: 'Delete'
  },
  {

    nameImgsrc: nameImage,
    nameImgalt: 'Name',
    name: 'Sample File 1',
    owner: ownerImage,
    nameOwnerAlt: 'owner',
    label: 'Label 1',
    type: 'PDF',
    modified: 'MODIFIED',
    edit: editImage,
    editAlt: 'Edit',
    delete: deleteImage,
    deleteAlt: 'Delete'
  },
  {

    nameImgsrc: nameImage,
    nameImgalt: 'Name',
    name: 'Sample File 1',
    owner: ownerImage,
    nameOwnerAlt: 'owner',
    label: 'Label 1',
    type: 'PDF',
    modified: 'MODIFIED',
    edit: editImage,
    editAlt: 'Edit',
    delete: deleteImage,
    deleteAlt: 'Delete'
  }
]

const Dashboard = () => {
  return (
    <div className={`flex flex-col gap-2 h-full w-full `}>
      <div className={`flex justify-end w-full`}>
        <Search
          placeholder={`Search by name`}
        />
      </div>
      <div className={`flex `} >
        <div className={`flex flex-col w-1/5`}>
          <div className={`flex gap-5 h-10 items-center`}>
            <p className='font-semibold text-[15px] pt-1 pl-3'>
              CATEGORIES
            </p>
            <img src={categoriesImg} alt={'categories'} width={15} height={15}/>
          </div>
          <CheckboxLayout header={`Category 1`} CheckBoxData={checkBoxFirstData} index={0} />
          <CheckboxLayout header={`Category 2`} CheckBoxData={checkBoxSecondData} index={1}/>
        </div>
        <div className={`w-4/5`}>
          <TableComponent header={`All items`} tableData={tableData} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
