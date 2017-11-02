import React, { PureComponent } from 'react';
import Label from '../i18n/Label';

export default class RangeGroup extends PureComponent {
	props: {
		items?: number[],
		id: string,
		label: string,
	};

	static defaultProps = {
		items: [],
	};

	render() {
		const { id, label, items, ...rest } = this.props;

		return (
			<fieldset className="range-selector">
				{label && <Label htmlFor={id} text={label} />}
				<input
					type="range"
					{...rest}
				/>
				<div className="range-selector-items">
					{items.map((i: number) => <span key={i}>{i}</span>)}
				</div>
			</fieldset>
		);
	}
}
