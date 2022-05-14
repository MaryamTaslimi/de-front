import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';import {grey} from "@mui/material/colors";

export default function Chevron() {
    return (
        <div className = {"flex flex-col justify-center items-center"}>
            <ExpandMoreRoundedIcon sx = {{color: grey[500], fontSize: 35}}/>
        </div>
    )
}