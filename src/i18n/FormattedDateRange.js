import React, { PureComponent } from 'react';
import { FormattedDate } from 'react-intl';

export default class FormattedDateRange extends PureComponent {
	props: {
		fromDate: Date,
		toDate: Date,
	};

	render() {
		const { fromDate, toDate } = this.props;

		return (
			<span>
				<FormattedDate value={fromDate} />
				&nbps;
				–
				&nbsp;
				<FormattedDate value={toDate} />
			</span>
		);
	}
}
