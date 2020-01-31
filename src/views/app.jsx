import React from 'react';
import { extend } from 'koot';

import Header from '@components/header';

import styles from './app.module.less';

// ============================================================================

const App = extend({
    styles
})(({ className, children, location, ...props }) => (
    <React.StrictMode>
        <div className={className}>
            <Header />
            <main children={children} />
        </div>
    </React.StrictMode>
));
export default App;
