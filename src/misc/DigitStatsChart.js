import React, { PureComponent } from 'react';
import { arrayMin, arrayMax } from 'binary-utils';

export default class DigitStatsChart extends PureComponent {
	props: {
		orientation: string,
		stats: number[],
	};

	static defaultProps = {
		orientation: 'horizontal',
		stats: [],
	};

	render() {
		const { stats, orientation } = this.props;
		const min = arrayMin(stats);
		const max = arrayMax(stats);

		return (
			<div className={'digit-stats-chart ' + orientation}>
				{stats.map((x: number, i: number) => (
					<div key={i} className="digit-stats-col">
						<div
							className="digit-stats-percentage"
						>
							{x.toFixed(2)}%
						</div>
						<div
							className={'digit-stats-bar'
								+ (x === max ? ' max' : '')
								+ (x === min ? ' min' : '')}
							style={{ transform: `scale(${x / max}, 1)` }}
						/>
						<div className="digit-stats-digit">{i}</div>
					</div>
				))}
			</div>
		);
	}
}
