import React, { PureComponent } from 'react';
import { directionClassName } from 'binary-utils';
import Direction from './Direction';
import NumberPlain from '../i18n/NumberPlain';

export default class DirectionAndValue extends PureComponent {
	props: {
		diff: number,
		value?: number,
	};

	static defaultProps = {
		value: 0,
	};

	render() {
		const { diff, value } = this.props;

		return (
			<span>
				<Direction diff={diff} />
				<NumberPlain className={directionClassName(diff)} value={value} />
			</span>
		);
	}
}
