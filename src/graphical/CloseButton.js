import React, { PureComponent } from 'react';

export default class CloseButton extends PureComponent {
    render() {
        return (
            <a className="close-btn" {...this.props}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 18 18" className="close-svg">
                    <path
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47
                                1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                </svg>
            </a>
        );
    }
}
