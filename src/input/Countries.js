import React, { PureComponent } from 'react';

type Residence = {
	disabled: boolean,
	text: string,
	value: string,
}

export default class Countries extends PureComponent {
	props: {
		value: string,
		onChange: (e: SyntheticEvent) => void,
		residenceList: Residence[],
		disabled: boolean,
	};

	static defaultProps = {
		residenceList: [],
	};

	render() {
		const { onChange, value, residenceList, disabled } = this.props;

		return (
			<select name="residence" onChange={onChange} defaultValue={value} disabled={disabled}>
				<option value="">Country of Residence</option>
				{residenceList.map((x: Residence) => (
					<option
						key={x.value}
						value={x.value}
						disabled={x.disabled}
					>
						{x.text}
					</option>
				))}
			</select>
		);
	}
}
