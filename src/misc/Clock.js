import React, { PureComponent } from 'react';
import { dateToGMTString } from 'binary-utils';

type Props = {
    serverTimeDiff?: number,
};

export default class Clock extends PureComponent {
    props: Props;

    state: {
        time: number;
    };

    interval: number;

    static defaultProps = {
        serverTimeDiff: 0,
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            time: Date.now(),
        };
    }

    componentDidMount() {
        this.interval = setInterval((): void =>
            this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount() {
		clearInterval(this.interval);
	}

    render() {
        const { time } = this.state;
        const { serverTimeDiff } = this.props;
        const adjustedTime = new Date(time + serverTimeDiff);
        const displayTimeGMT = dateToGMTString(adjustedTime);

        return (
            <div>
                <span>{displayTimeGMT} GMT</span>
                <div className="tooltip">
                    {adjustedTime.toString()}
                </div>
            </div>
        );
    }
}
