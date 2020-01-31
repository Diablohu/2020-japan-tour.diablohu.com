import React from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

// ============================================================================

// interface ComponentProps {
// }

// Functional Component =======================================================

const Header = extend<{}>({
    styles
})(
    React.memo(
        ({ className }): JSX.Element => (
            <header className={className}>
                <h1>Diablohu 2020 日本游</h1>
            </header>
        )
    )
);

export default Header;
