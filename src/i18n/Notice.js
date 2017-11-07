import React, { PureComponent } from 'react';
import classnames from 'classnames';
import P from './P';

export default class Notice extends PureComponent {
    props: {
        className: string,
        text: string,
    };

    render() {
        const { text, className } = this.props;
        if (!text) return null;
        const classes = classnames('notice-msg', className);

        return <P className={classes} text={text} />;
    }
}
