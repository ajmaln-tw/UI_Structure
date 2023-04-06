import { Form, withFormik } from "formik";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { fetchUserById } from "../actions";
import { getUserDetails } from "../selectors";

import { actions as sliceActions } from "../slice";
import { STATE_REDUCER_KEY } from "../constants";
import { Components, FormController } from "../../../common/components";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
const { Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography, Button } = Components;


const CreateUser = (props) => {
    const dispatch = useDispatch();
    const { id = 0 } = useParams();
    const { setFieldValue, handleSubmit } = props;
    const requestInProgress = useSelector(state => state[STATE_REDUCER_KEY]).lookUpCategoryTypeDetails.requestInProgress;

    useEffect(() => {
        if (id) {
            setFieldValue("id", id);
            dispatch(fetchUserById(id));
        }
        return () => dispatch(sliceActions.clearAll());
    }, []);
    return (
        <Card sx={{ m: 2, overflow: "visible" }} >
            <LoadingCustomOverlay active={requestInProgress}>
                <Form onSubmit={handleSubmit}>
                    <CardHeader title={"User Details"} component={Typography} />
                    <Divider />
                    <CardContent sx={{ ml: 2, mr: 2 }}>
                        <Grid container spacing={2} sx={{ mb: 3 }} >
                            <Grid item xs={12} md={6} lg={6} >
                                <FormController control="input" label={"name"} name="name" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} >
                                <FormController control="input" label={"description"} name="email" isMandatory={true} />
                            </Grid>

                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid sx={{ mb: 2 }} container justifyContent="center">
                            <Button type="submit"> {id ? "update" : "save"}</Button>
                        </Grid>
                    </CardActions>
                </Form >
            </LoadingCustomOverlay>
        </Card >
    );
};


const mapStateToProps = createStructuredSelector({
    userDetails: getUserDetails
});

const mapDispatchToProps = () => ({
    // submitValues: (data) => dispatch(submitCategoryTypeValues(data))
});

const user = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.userDetails.data;
    },
    // validationSchema: lookUpCategoryTypeSchema,
    handleSubmit: (values, { props }) => {
        props.submitValues(values);
    },
    displayName: "CreateUser"
})(CreateUser);

export default connect(mapStateToProps, mapDispatchToProps)(user);
