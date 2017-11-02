import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { directionClassName } from 'binary-utils';
import NumberPlain from './NumberPlain';

export default class NumberColored extends PureComponent {
	props: {
		className?: string,
		currency?: string,
		digits?: number,
		value: number,
	};

	static defaultProps = {
		digits: 2,
		currency: undefined,
		className: undefined
	};

	render() {
		const { value, currency, digits, className } = this.props;
		const classes = classnames(directionClassName(value), className);

		return (
			<NumberPlain
				className={classes}
				value={value}
				currency={currency}
				digits={digits}
			/>
		);
	}
}
