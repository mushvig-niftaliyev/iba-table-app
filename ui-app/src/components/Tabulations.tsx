import { Badge, Tab, Tabs } from "@material-ui/core";
import React, { FC } from "react";
import ListIcon from "@material-ui/icons/List";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { ETabs } from "../models";

interface TabProps {
    currentTab: number;
    setCurrentTab: (tabIndex: number) => void;
    deletedItemsCount: number;
    updatedItemsCount: number;
}

export const Tabulations: FC<TabProps> = ({
    currentTab,
    setCurrentTab,
    deletedItemsCount,
    updatedItemsCount,
}): JSX.Element => {
    return (
        <Tabs
            value={currentTab}
            onChange={() => null}
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon tabs example"
        >
            <Tab
                icon={<ListIcon />}
                onClick={() => setCurrentTab(ETabs.ALL)}
                label="All active"
            />
            <Tab
                icon={
                    <Badge badgeContent={updatedItemsCount} color="primary">
                        <EditAttributesIcon />
                    </Badge>
                }
                onClick={() => setCurrentTab(ETabs.UPDATED)}
                disabled={!Boolean(updatedItemsCount)}
                label="Updated"
                color="primary"
            />
            <Tab
                icon={
                    <Badge badgeContent={deletedItemsCount} color="primary">
                        <DeleteOutlineIcon />
                    </Badge>
                }
                onClick={() => setCurrentTab(ETabs.DELETED)}
                disabled={!Boolean(deletedItemsCount)}
                label="Deleted"
            />
        </Tabs>
    );
};
