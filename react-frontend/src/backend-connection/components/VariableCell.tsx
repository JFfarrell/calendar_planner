import React from "react";
import Activity from "../Activity";
import { styled } from '@mui/material/styles';
import { TableCell } from "@mui/material";
import { border } from "@mui/system";


interface Props {
    activity?: Activity;

}


const customCell = ({activity}: Props) => {


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: 'cyan',
    margin: 0 
    }));

    if (activity == null) {
        return <TableCell></TableCell>
    }

    else { return (
        <StyledTableCell align="center">{activity.activity_type}</StyledTableCell>
    )}

}

export default customCell;