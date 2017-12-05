import React, { PureComponent } from 'react';
import Label from '../i18n/Label';

type Option = {
	text: string,
	value: string,
	disabled: boolean,
}

export default class SelectGroup extends PureComponent {
	props: {
		hint: string,
		id: string,
		className: string,
		label: string,
		options: Option[],
    disabled: boolean,
		value: string,
		onChange: (e: SyntheticEvent) => void,
	};

	static defaultProps = {
		options: [],
	};

	render() {
		const { className, id, label, hint, value, options, disabled, onChange } = this.props;

		return (
			<fieldset className={className}>
				{label && <Label htmlFor={id} text={label} />}
				<select id={id} disabled={disabled} onChange={onChange} value={value}>
					{options.map((o: Option) => (
						<option key={o.value} value={o.value} disabled={o.disabled}>{o.text}</option>
					))}
				</select>
				{hint && <p className="hint">{hint}</p>}
			</fieldset>
		);
	}
}
