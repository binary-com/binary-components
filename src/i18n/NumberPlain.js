import React, { PureComponent } from 'react';
import { FormattedNumber } from 'react-intl';

export default class NumberPlain extends PureComponent {
	props: {
		className: string,
		currency: string,
		digits?: number,
		style?: 'decimal' | 'currency' | 'percent',
		value: number,
	};

	static defaultProps = {
		style: 'decimal',
		digits: 2,
	};

	render() {
		const { currency, className, digits, style } = this.props;
		const value = +this.props.value;

		if (Number.isNaN(value)) return null;

		return (
			<span className={className}>
				<FormattedNumber
					style={currency ? 'currency' : style}
					currency={currency}
					value={value}
					currencyDisplay="symbol"
					minimumFractionDigits={digits}
					maximumFractionDigits={digits}
				/>
			</span>
		);
	}
}
