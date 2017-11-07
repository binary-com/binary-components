import React, { PureComponent } from 'react';
import M from '../i18n/M';

export default class RadioItem extends PureComponent {
	props: {
		checked: boolean,
		defaultChecked?: boolean,
		img: string,
		label: string,
		name: string,
		onChange: (e: SyntheticEvent) => void,
		value: any,
	};

	static defaultProps = {
		defaultChecked: false,
	}

	render() {
		const { checked, defaultChecked, img, label, name, onChange, value } = this.props;

		return (
			<span className="radio-item">
				<input
					id={value}
					checked={checked}
					type="radio"
					name={name}
					value={value}
					defaultChecked={defaultChecked}
					onChange={onChange}
				/>
				<label htmlFor={value}>
					{img ? <img src={img} alt="" /> : null}
					{typeof label === 'string' ? <M m={label} /> : label}
				</label>
			</span>
		);
	}
}
