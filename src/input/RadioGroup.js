import React, { PureComponent } from 'react';
import RadioItem from './RadioItem';

type Options = {
	img: string,
	text: string,
	value: string,
}

export default class RadioGroup extends PureComponent {
	props: {
		className?: string,
		name: string,
		options?: Options[],
		onChange: (e: SyntheticEvent) => void,
		value: any,
	};

	static defaultProps = {
		className: 'radio-selector',
		options: [],
	};

	render() {
		const { className, onChange, name, options, value } = this.props;

		return (
			<fieldset className={className}>
				{options.map((o: Options) => (
					<RadioItem
						key={name + o.value}
						checked={o.value === value}
						img={o.img}
						label={o.text}
						name={name}
						onChange={onChange}
						value={o.value}
					/>
				))}
			</fieldset>
		);
	}
}
