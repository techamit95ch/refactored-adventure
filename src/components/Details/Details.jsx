import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from "react-chartjs-2"
import useStyles from "./styles"
const Details = ({title}) => {
    const classes = useStyles();
    const [cardStyle, setCardStyle]= React.useState('');
    React.useEffect(() => {
        if(title==='Income') {
            setCardStyle(classes.income);
        }
        if(title==='Expense'){
            setCardStyle(classes.expense);
        }
    }) 
    return (
        <Card className={cardStyle }>
        <CardHeader title={title}/>
        <CardContent>
          <Typography variant="">$50</Typography>
          {/* <Doughnut data="data"/> */}
        </CardContent>
          
        </Card>
    )
}

export default Details
