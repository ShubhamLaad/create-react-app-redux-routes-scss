import React from 'react';
interface Props {
    children: () => JSX.Element | null;
}

const Root: React.FC<Props> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
}
export default Root