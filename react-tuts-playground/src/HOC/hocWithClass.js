import React from  'react';

// This is a normal function which returns a functional component
const hocWithCLass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
          <WrappedComponent {...props} />
        </div>
    )
};

export default hocWithCLass;