/**
 * @component SearchBar
 */
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import searchIcon from "../../assests/Search.svg";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #E5E7EB",
    borderRadius: "5px",

    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "75ch",
        },
    },
}));
export default function SearchBar(props) {
    const [searchData, setsearchData] = React.useState("");


    const onKeyPress = (ev) => {
        if (ev.key === "Enter") {
            if (props.onKeyPress) {
                ev.preventDefault();
                props.searchClicked(searchData);
            }
        }
    };

    return (
        <div className="search-container">
            <Toolbar className="search-main">
                <Search className={`${props.searchCls}`}>
                    <SearchIconWrapper>
                        <img
                            src={searchIcon}
                            alt="icon"
                           className={props.searchImgCls}
                        />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder={props.placeholder}
                        inputProps={{ "aria-label": "search" }}
                        onChange={props.onChange}
                        onKeyPress={onKeyPress}
                        className={`${props.extraCls}`}
                    />
                </Search>
            </Toolbar>
        </div>
    );
}
