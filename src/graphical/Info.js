import React, { PureComponent } from 'react';

export default class Clock extends PureComponent {
    props: {
        tooltip: string,
    };

    render() {
        const { tooltip } = this.props;

        return (
            <span>
                <img
                    className="info-icon"
                    src="img/info.svg"
                    alt=""
                />
                {tooltip && <div className="tooltip">{tooltip}</div>}
            </span>
        );
    }
}
