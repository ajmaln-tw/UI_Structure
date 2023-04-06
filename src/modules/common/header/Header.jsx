import { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Avatar, ButtonBase, Typography } from "@mui/material";
import { Components } from "../../../common/components";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

import ProfileMenu from "./ProfileMenu";


const { Box, Grid } = Components;

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let rotate = open === false ? "rotate(-90deg)" : "rotate(-270deg)";
    // const { userDetails: { data: { activeProfile: { imageId = "" } = {}, firstName = "", lastName = "" } } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    let firstName = "Aj", lastName = "N", imageId = "";
    return (
        <Grid
            component="header"
            sx={{ width: "100%", height: "82px", position: "sticky", top: 0, zIndex: 100, backgroundColor: "secondary.main", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box sx={{ width: "240px" }}>
                <Box sx={{ display: "flex", pl: 6 }}>
                    <Avatar sx={{ height: "48px", width: "48px" }} src={imageId ? `${process.env.REACT_APP_API_URL}/resource/api/auth/multimedia/download?id=${imageId}` : ""}></Avatar>
                    <Typography sx={{
                        fontSize: "18px", color: "#fff", alignSelf: "center", pl: 1, fontWeight: 400,
                        whiteSpace: "break-spaces", width: "8rem", textAlign: "center", fontFamily: "Clash Display"
                    }}>{`${firstName} ${lastName}`}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex", justifyContent: "end", alignItems: "center", mr: 5, borderRadius: "10px", p: 1, position: "relative", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
                }}
                variant="contained" component="div"
            >
                <ButtonBase sx={{}} onClick={handleClick}>
                    <SettingsOutlinedIcon sx={{ width: "30px", height: "33px", color: "white.main" }} />
                    <ChevronLeftOutlinedIcon sx={{ color: "white.main", transform: rotate }} />
                </ButtonBase>
            </Box>
            <ProfileMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
        </Grid >
    );
};

export default Header;
