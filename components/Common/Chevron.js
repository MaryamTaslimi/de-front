import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';import {grey} from "@mui/material/colors";

export default function Chevron() {
    return (
        <div className = {"flex flex-col justify-center items-center -mt-2"}>
            <KeyboardDoubleArrowDownRoundedIcon sx = {{color: grey[50], fontSize: 35}}/>
        </div>
    )
}