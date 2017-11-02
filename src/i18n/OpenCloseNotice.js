import React, { PureComponent } from 'react';
import M from './M';

export default class OpenCloseNotice extends PureComponent {
    props: {
        isOpen?: boolean,
    }

    static defaultProps = {
        isOpen: false,
    }

    render() {
        const { isOpen } = this.props;

        return isOpen ?
            <M m="Open" className="open-notice" /> :
            <M m="Closed" className="closed-notice" />;
    }
}
