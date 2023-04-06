import { Components } from "../../../common/components";

const { Grid, Typography } = Components;
const listStyle = {
    px: 2,
    borderRight: "1px solid #009992",
    fontSize: "12px",
    display: {
        xs: "none",
        md: "block"
    }
};

const Footer = () => {
    return (
        <Grid sx={{ display: "flex", justifyContent: "end", width: "100%", pr: { md: "80px", sm: "40px", xs: "20px" }, color: "white.main", py: 2, backgroundColor: "secondary.main" }}>
            <Typography sx={listStyle}>{"terms_of_service"}</Typography>
            <Typography sx={listStyle}>{"privacy_policy"}</Typography>
            <Typography sx={{ pl: 2, fontSize: "12px" }}>{"copyright"}</Typography>
        </Grid >
    );
};

export default Footer;
