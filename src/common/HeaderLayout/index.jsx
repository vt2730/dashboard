import React from 'react'
import ButtonFieldInput from '../ButtonFields/Button';

const Headerlayout = (props) => {
    return (
        <div className={`flex w-full justify-between items-center`} >
            <div className={`flex gap-5 items-center h-fit`}>
                <div onClick={props.iconClickHandler} className={`cursor-pointer`}>
                    {props.image}
                </div>
                <div className={`${props.headerNameCls} font-semibold w-11/12 text-2xl `} >
                    {props.name}
                </div>
            </div>
                {props.isbutton ? (
                <ButtonFieldInput
                        name={props.buttonname}
                        type="submit"
                        variant="contained"
                        handleClick={props.handleClick}
                        buttonextracls={`!bg-[#814EE7] w-28 !capitalize !rounded-md `}
                        extraTextCls={`!font-bold`}
                        img={props.img}
                    />
                )
                    :
                    null}


        </div>
    )
}

export default Headerlayout;