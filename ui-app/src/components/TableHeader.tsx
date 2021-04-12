import { FC } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export const TableHeader: FC = (): JSX.Element => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>#id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Surname</TableCell>
                <TableCell align="left">Date of birth</TableCell>
                <TableCell align="left">Position</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>
    );
};
