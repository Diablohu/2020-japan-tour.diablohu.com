import React from 'react';
import { extend } from 'koot';

import Header from '@components/header';

import styles from './app.module.less';

// ============================================================================

const App = extend({
    pageinfo: {
        title: 'Diablohu 2020 日本游',
        metas: [{ description: 'Diablohu 2020 日本游 相册' }]
    },
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
