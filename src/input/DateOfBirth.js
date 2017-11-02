import React, { PureComponent } from 'react';
import DobDay from './DobDay';
import DobMonth from './DobMonth';
import DobYear from './DobYear';

export default class DateOfBirth extends PureComponent {
	props: {
		date: Date,
		onDayChange: (e: SyntheticEvent) => void,
		onMonthChange: (e: SyntheticEvent) => void,
		onYearChange: (e: SyntheticEvent) => void,
	};

	static defaultProps = {
		date: new Date(),
	};

	render() {
		const { date, onDayChange, onMonthChange, onYearChange } = this.props;

		return (
			<span className="dob">
				<DobDay day={date.getDate()} onDayChange={onDayChange} />
				<DobMonth month={date.getMonth()} onMonthChange={onMonthChange} />
				<DobYear year={date.getFullYear()} onYearChange={onYearChange} />
			</span>
		);
	}
}
