import React, { PureComponent } from 'react';
import { sequence } from 'binary-utils';

export default class DobDay extends PureComponent {
	props: {
		day: number,
		onDayChange: (e: SyntheticEvent) => void,
	}

	render() {
		const { day, onDayChange } = this.props;
		const days = sequence(31);

		return (
			<select id="dobdd" name="dobdd" defaultValue={day} onChange={onDayChange}>
				<option disabled>Day</option>
				{days.map((o: number, i: number) => (
					<option key={i} value={i + 1}>{i + 1}</option>
				))}
			</select>
		);
	}
}
