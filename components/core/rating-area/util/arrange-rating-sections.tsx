import React from "react";

interface GridProps {
    children: React.ReactNode[];
}

const Grid: React.FC<GridProps> = ({ children }) => {
    const numberOfChildren = React.Children.count(children);
    const rowsLargeScreen = Math.ceil(numberOfChildren / 2);
    const rowsSmallScreen = numberOfChildren;

    return (
        <div
            className={`grid lg:grid-rows-${rowsLargeScreen} lg:grid-cols-2 grid-rows-${rowsSmallScreen} grid-cols-1 gap-4`}
        >
            {children}
        </div>
    );
};

export default Grid;
