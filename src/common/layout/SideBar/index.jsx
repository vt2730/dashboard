import { Box, List, ListItemButton, ListItemIcon} from '@mui/material'
import React from 'react'
import logo from '../../../assests/logo.png'
import { sideNavArray } from './sideBarData'


const SideBar = (props) => {

    return (
        <Box className={`bg-[#FFFFFF] gap-12 h-full w-full flex flex-col justify-start truncate customBarCss `}>
            <div className='flex flex-col justify-around gap-10 mx-2'>
                <div className='flex justify-center items-center gap-3 h-[3.85rem]'>
                        {/*Logo Section */}
                    <img src={logo} alt="logo" className='cursor-pointer w-10 h-10'/> 
                    <p className={`text-[1.5em] font-semibold `}>{props?.LogoText}</p>
                    </div>
                {/*Menu List*/}
                <div className='flex flex-col justify-start gap-1 '>
                    {
                        sideNavArray && sideNavArray?.length > 0 && sideNavArray?.map((item, idx) => {
                            return (
                                <nav key={idx} >
                                    <List>
                                        <ListItemButton sx={{
                                            minHeight: "5px", backgroundColor: "#F7F8FA",
                                            "&:hover": {
                                                backgroundColor:"#F7F8FA"
                                            }
                                        }} >
                                            <ListItemIcon sx={{ minWidth: "34px" }}>
                                                <img src={item?.icon} alt='icon' height={25} width={25} />
                                            </ListItemIcon>
                                            <p className={`text-[15px] text-black font-semibold`}> {item?.name} </p>
                                        </ListItemButton>
                                    </List>
                                </nav>
                            )
                        })
                    }
                </div>
            </div>
        </Box>
    )
}

export default SideBar
