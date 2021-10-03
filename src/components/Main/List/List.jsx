import * as React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Fade } from '@mui/material';
import Box from '@mui/material/Box';


import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles'
const List = () => {
    const classes = useStyles()
    const transactions = [
        {
            id: 1,
            type: 'Income',
            category: 'Salary',
            amount: 100,
            date: new Date()
        }
    ];
    return (
        <MUIList dense={false} className={classes.list}>
              {/* <Box sx={{ width: `calc(100px + 16px)` }}> */}

            {
                transactions.map((transaction,index)=>(
                    <>
                    <div  in={true} key={index}>
                        <ListItemAvatar>
                            <Avatar className={transaction.type==='Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="" >
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </div>
                    </>
                ))
            }
            {/* </Box> */}

        </MUIList>
    )
}

export default List
