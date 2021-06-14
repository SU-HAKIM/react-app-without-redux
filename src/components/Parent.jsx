import React from 'react';
import Child from './Child';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';

const Parent = React.forwardRef((props, ref) => {
    return (
        ReactDOM.createPortal(
            <div>
                Parent
                <ErrorBoundary>
                    <Child heroName="SuperMan" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Child heroName="BatMan" />
                </ErrorBoundary>
            </div>,
            document.getElementById('portal-root')
        )
    )
})


export default Parent