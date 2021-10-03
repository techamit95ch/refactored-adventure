import React from 'react'
import {Card, CardHeader, CardContent, Typography, Divider, Grid} from '@material-ui/core'
import {Doughnut} from "react-chartjs-2"
import useStyles from "./styles"
import Form from './Form/Form'
import DetailsList from './List/List'

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance</Typography>
                <Typography align="center" variant="subtitle1">Try saying: Add income for $100 in Category Salary for Monday...</Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <DetailsList/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
