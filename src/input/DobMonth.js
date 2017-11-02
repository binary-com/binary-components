import React, { PureComponent } from 'react';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export default class DobMonth extends PureComponent {
	props: {
		month: number,
		onMonthChange: (e: SyntheticEvent) => void,
	};

	render() {
		const { month, onMonthChange } = this.props;

		return (
			<select id="dobmm" name="dobmm" defaultValue={month} onChange={onMonthChange}>
				<option disabled>Month</option>
				{MONTHS.map((o: string, i: number) => (
					<option key={i} value={i}>{o}</option>
				))}
			</select>
		);
	}
}
