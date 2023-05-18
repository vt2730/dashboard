import React from 'react'
import TwohalfLayout from '../../common/layout/TwoHalfLayout'
import Headerlayout from '../../common/HeaderLayout'
import Dashboard from '../../components'
import SideBar from '../../common/layout/SideBar'
import add from '../../assests/add.svg'

const DashBoardIndex = () => {
  return (
    <div className={`bg-[#EEF3FA] bg-cover h-screen`}>
          <TwohalfLayout
              sidebarsection={<SideBar LogoText='Stealth' />}
              rendercomponent={<Dashboard /> }
              isHeader={true}
              commonheader={<Headerlayout
                  name={"File Manager"}
                  isbutton={true}
                  buttonname={`Upload`}
                  img={add}
              />}
          />
    </div>
  )
}

export default DashBoardIndex
