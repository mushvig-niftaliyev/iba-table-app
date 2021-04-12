import { IconButton, TableCell, TableRow, TextField } from "@material-ui/core";
import React, { FC } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { ETabs, IEmployeeDetails } from "../models";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import DoneIcon from "@material-ui/icons/Done";
import _ from "lodash";

interface ITableContent {
    employeeList: {
        all: IEmployeeDetails[];
        updated: IEmployeeDetails[];
        deleted: IEmployeeDetails[];
    };
    initialEmployeeList: IEmployeeDetails[];
    setModifiedEmployeeList: (obj: any) => void;
    currentTab: ETabs;
}

export const TableContent: FC<ITableContent> = ({
    employeeList,
    setModifiedEmployeeList,
    currentTab,
    initialEmployeeList,
}): JSX.Element => {
    const initialUpdatingData: IEmployeeDetails = {
        id: null,
        name: "",
        surname: "",
        dateOfBirth: "",
        position: "",
        phoneNumber: "",
    };
    const [updatingEmployee, setUpdatingEmployee] = React.useState(
        initialUpdatingData
    );

    const handleNameChange = (event: any) => {
        setUpdatingEmployee({
            ...updatingEmployee,
            name: event.target.value,
        });
    };

    const handleSurnameChange = (event: any) => {
        setUpdatingEmployee({
            ...updatingEmployee,
            surname: event.target.value,
        });
    };

    const handleDateOfBirthChange = (event: any) => {
        setUpdatingEmployee({
            ...updatingEmployee,
            dateOfBirth: event.target.value,
        });
    };

    const handlePositionChange = (event: any) => {
        setUpdatingEmployee({
            ...updatingEmployee,
            position: event.target.value,
        });
    };

    const handlePhoneNumberChange = (event: any) => {
        setUpdatingEmployee({
            ...updatingEmployee,
            phoneNumber: event.target.value,
        });
    };

    const handleDeleteClick = (_employee: IEmployeeDetails): void => {
        const _all = employeeList.all.filter(
            (employee) => employee.id !== _employee.id
        );

        const _updated = employeeList.updated.filter(
            (employee) => employee.id !== _employee.id
        );

        setModifiedEmployeeList({
            all: _all,
            updated: _updated,
            deleted: [...employeeList.deleted, _employee],
        });
    };

    const handleDeleteRecover = (_employee: IEmployeeDetails): void => {
        const _deleted = employeeList.deleted.filter(
            (employee) => employee.id !== _employee.id
        );
        const initialData = initialEmployeeList.find(
            (employee) => employee.id === _employee.id
        );
        if (!_.isEqual(initialData, _employee)) {
            setModifiedEmployeeList({
                deleted: _deleted,
                all: [...employeeList.all, _employee],
                updated: [...employeeList.updated, _employee],
            });
        } else {
            setModifiedEmployeeList({
                ...employeeList,
                deleted: _deleted,
                all: [...employeeList.all, _employee],
            });
        }
    };

    const isEmployeeBeingUpdated = (id: number | null): boolean =>
        updatingEmployee.id === id;

    const handleUpdateClick = (_employee: IEmployeeDetails) => {
        setUpdatingEmployee(_employee);
    };

    const handleUpdateDoneClick = (_employee: IEmployeeDetails) => {
        const initialData = initialEmployeeList.find(
            (employee) => employee.id === _employee.id
        );
        const _altered = employeeList.all.filter(
            (employee) => employee.id !== _employee.id
        );
        if (!_.isEqual(initialData, updatingEmployee)) {
            setModifiedEmployeeList({
                ...employeeList,
                all: [..._altered, updatingEmployee],
                updated: [...employeeList.updated, updatingEmployee],
            });
        } else {
            if (
                employeeList.updated.find(
                    (employee) => employee.id === _employee.id
                )
            ) {
                const _updated = employeeList.updated.filter(
                    (employee) => employee.id !== _employee.id
                );
                setModifiedEmployeeList({
                    ...employeeList,
                    all: [..._altered, updatingEmployee],
                    updated: _updated,
                });
            }
        }
        setUpdatingEmployee(initialUpdatingData);
    };

    return (
        <>
            {(currentTab === ETabs.ALL
                ? employeeList.all
                : currentTab === ETabs.UPDATED
                ? employeeList.updated
                : employeeList.deleted
            ).map((employee) => (
                <TableRow key={employee.id} className="table-row">
                    <TableCell component="th" scope="row" align="left">
                        {employee.id}
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            value={
                                isEmployeeBeingUpdated(employee.id)
                                    ? updatingEmployee.name
                                    : employee.name
                            }
                            disabled={
                                isEmployeeBeingUpdated(employee.id)
                                    ? false
                                    : true
                            }
                            onChange={handleNameChange}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            value={
                                isEmployeeBeingUpdated(employee.id)
                                    ? updatingEmployee.surname
                                    : employee.surname
                            }
                            disabled={
                                isEmployeeBeingUpdated(employee.id)
                                    ? false
                                    : true
                            }
                            onChange={handleSurnameChange}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            value={
                                isEmployeeBeingUpdated(employee.id)
                                    ? updatingEmployee.dateOfBirth
                                    : employee.dateOfBirth
                            }
                            disabled={
                                isEmployeeBeingUpdated(employee.id)
                                    ? false
                                    : true
                            }
                            onChange={handleDateOfBirthChange}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            disabled={
                                isEmployeeBeingUpdated(employee.id)
                                    ? false
                                    : true
                            }
                            value={
                                isEmployeeBeingUpdated(employee.id)
                                    ? updatingEmployee.position
                                    : employee.position
                            }
                            onChange={handlePositionChange}
                        />
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            value={
                                isEmployeeBeingUpdated(employee.id)
                                    ? updatingEmployee.phoneNumber
                                    : employee.phoneNumber
                            }
                            disabled={
                                isEmployeeBeingUpdated(employee.id)
                                    ? false
                                    : true
                            }
                            onChange={handlePhoneNumberChange}
                        />
                    </TableCell>
                    {currentTab === ETabs.ALL && (
                        <TableCell align="right">
                            {!isEmployeeBeingUpdated(employee.id) ? (
                                <IconButton
                                    aria-label="edit"
                                    size="medium"
                                    color="primary"
                                    onClick={() => handleUpdateClick(employee)}
                                >
                                    <EditIcon />
                                </IconButton>
                            ) : (
                                <IconButton
                                    aria-label="edit"
                                    size="medium"
                                    color="primary"
                                    onClick={() =>
                                        handleUpdateDoneClick(employee)
                                    }
                                >
                                    <DoneIcon />
                                </IconButton>
                            )}

                            <div className="icon-separator"></div>
                            <IconButton
                                aria-label="delete"
                                size="medium"
                                color="secondary"
                                onClick={() => handleDeleteClick(employee)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    )}
                    {currentTab === ETabs.DELETED && (
                        <IconButton
                            aria-label="delete"
                            size="medium"
                            color="secondary"
                            onClick={() => handleDeleteRecover(employee)}
                        >
                            <KeyboardReturnIcon />
                        </IconButton>
                    )}
                </TableRow>
            ))}
        </>
    );
};
