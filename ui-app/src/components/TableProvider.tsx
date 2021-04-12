import { Button, Table, TableContainer } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { FC } from "react";
import { useQuery } from "react-query";
import { ERequestStatus } from "../models";
import "./style.css";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { TableSkeleton } from "./TableSkeleton";
import { Tabulations } from "./Tabulations";

const fetchEmployeeList = async () => {
    const list = await fetch("http://localhost:8080/get-employee-list");
    return list.json();
};

export const TableProvider: FC = (): JSX.Element => {
    const [initialEmployeeList, setInitialEmployeeList] = React.useState([]);
    const [modifiedEmployeeList, setModifiedEmployeeList] = React.useState({
        all: [],
        updated: [],
        deleted: [],
    });
    const [currentTab, setCurrentTab] = React.useState(0);
    const { data, status } = useQuery("employeeList", fetchEmployeeList);

    React.useEffect(() => {
        if (status === ERequestStatus.SUCCESS) {
            setInitialEmployeeList(data);
            setModifiedEmployeeList({
                ...modifiedEmployeeList,
                all: data,
            });
        }
    }, [status]);

    const handleUndoClick = (): void => {
        setModifiedEmployeeList({
            ...modifiedEmployeeList,
            all: initialEmployeeList,
            updated: [],
            deleted: [],
        });
    };

    return (
        <div className="table-provider">
            {status === ERequestStatus.SUCCESS ? (
                <>
                    <div className="heading-actions">
                        <Tabulations
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}
                            deletedItemsCount={
                                modifiedEmployeeList.deleted.length
                            }
                            updatedItemsCount={
                                modifiedEmployeeList.updated.length
                            }
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUndoClick}
                            disabled={
                                !Boolean(modifiedEmployeeList.deleted.length) &&
                                !Boolean(modifiedEmployeeList.updated.length)
                            }
                        >
                            Undo changes
                        </Button>
                    </div>
                    <TableContainer>
                        <Table
                            aria-label="simple table"
                            className="table-content"
                        >
                            <TableHeader />
                            <TableContent
                                employeeList={modifiedEmployeeList}
                                initialEmployeeList={initialEmployeeList}
                                setModifiedEmployeeList={
                                    setModifiedEmployeeList
                                }
                                currentTab={currentTab}
                            />
                        </Table>
                    </TableContainer>
                </>
            ) : status === ERequestStatus.ERROR ? (
                <h1>ERROR</h1>
            ) : (
                <TableSkeleton />
            )}
        </div>
    );
};
