import React, { PropTypes, Component } from 'react';
import M from './M';

const valueTypes = [PropTypes.number, PropTypes.instanceOf(Date), PropTypes.string];

export default class InputGroup extends Component {
	static propTypes = {
		type: PropTypes.string,
		id: PropTypes.string,
		className: PropTypes.string,
		label: PropTypes.string,
		hint: PropTypes.string,
		list: PropTypes.string,
		defaultValue: PropTypes.oneOfType(valueTypes),
		value: PropTypes.oneOfType(valueTypes),
		min: PropTypes.oneOfType(valueTypes),
		max: PropTypes.oneOfType(valueTypes),
		step: PropTypes.any,
		readOnly: PropTypes.bool,
		placeholder: PropTypes.string,
		onChange: PropTypes.func,
		autoComplete: PropTypes.string,
	};

	render() {
		const { id, className, type, hint, value, min, max, list,
			readOnly, placeholder, onChange, autoComplete, defaultValue, step } = this.props;
		const strLabel = this.props.label;

		return (
			<fieldset className={className}>
				{strLabel && <label htmlFor={id}>
					<M m={strLabel} />
				</label>}
				<input
					id={id}
					type={type}
					value={value}
					step={step}
					list={list}
					defaultValue={defaultValue}
					readOnly={readOnly}
					placeholder={placeholder}
					onChange={onChange}
					min={min}
					max={max}
					autoComplete={autoComplete}
				/>
				{hint && <p className="hint">
					<M m={hint} />
				</p>}
			</fieldset>
		);
	}
}
