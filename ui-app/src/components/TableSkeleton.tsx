import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

export const TableSkeleton: React.FC = (): JSX.Element => {
    return (
        <div className="flex-container">
            <div className="flex-items">
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={170} height={50} />
                <Skeleton animation="wave" width={150} height={50} />
            </div>
            <div className="flex-items">
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={120} height={50} />
                <Skeleton animation="wave" width={190} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
            </div>
            <div className="flex-items">
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={190} height={50} />
            </div>
            <div className="flex-items">
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
                <Skeleton animation="wave" width={200} height={50} />
            </div>
        </div>
    );
};
