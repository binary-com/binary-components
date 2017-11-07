import React, { PureComponent } from 'react';
import M from './M';

export default class LabeledText extends PureComponent {
    props: {
        id: string,
        label: string,
        value?: string,
    };

    static defaultProps = {
        value: 'N/A',
    };

    render() {
        const { id, label, value } = this.props;

        return (
            <div id={id} className="name-val-pair">
                <M className="name" m={label} />
                <span className="val">{value}</span>
            </div>
        );
    }
}
