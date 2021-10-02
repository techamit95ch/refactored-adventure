import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from "react-chartjs-2"
const App = () => {
  return (
    <Card>
    <CardHeader title="Income"/>
    <CardContent>
      <Typography variant="">$50</Typography>
      <Doughnut data="data"/>
    </CardContent>
      
    </Card>
  )
}

export default App
