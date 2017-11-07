import React, { PureComponent } from 'react';

export default class LogoSpinner extends PureComponent {
	props: {
		spinning: boolean,
	};

	render() {
		const { spinning } = this.props;
		const classNames = [spinning ? 'spinner' : null];

		return (
			<img
				alt="Loading"
				className={classNames.join(' ')}
				src="img/binary-symbol-logo.svg"
			/>
		);
	}
}
