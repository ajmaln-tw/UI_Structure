
import { Box } from "@mui/material";
import Header from "../modules/common/header/Header";
import Footer from "../modules/common/footer/Footer";

const DashboardLayout = ({ children }) => {
    return (
        <Box
            sx={{ bgcolor: "secondary.main", minHeight: "100vh", width: 1 }}
        >
            <Header />
            <Box sx={{ display: "flex", justifyContent: "space-between ", height: "100%" }}>
                <Box sx={{ ml: 2, flexGrow: 1, overflowX: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "calc(100vh - 82px) !important ", overflowY: "auto", pr: 4 }}>
                    <Box
                        sx={{ bgcolor: "white.main", borderRadius: "20px", flexGrow: 1 }}
                    >
                        {children}
                    </Box>
                    <Footer />
                </Box>
            </Box>
        </Box >
    );
};

export default DashboardLayout;

