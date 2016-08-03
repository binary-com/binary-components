import React, { PropTypes, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Label from '../i18n/Label';

const valueTypes = [PropTypes.number, PropTypes.instanceOf(Date), PropTypes.string];

export default class InputGroup extends PureComponent {

	static propTypes = {
		type: PropTypes.string,
		id: PropTypes.string,
		className: PropTypes.string,
		label: PropTypes.string,
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
		maxLength: PropTypes.string,
	};

	render() {
		const { label, className, id, placeholder, ...rest } = this.props;

		return (
			<fieldset className={className}>
				{label && <Label htmlFor={id} text={label} />}
				{placeholder ?
					<FormattedMessage id={placeholder} defaultMessage={placeholder}>
						{message =>
							<input id={id} placeholder={message} {...rest} />
						}
					</FormattedMessage> :
					<input id={id} {...rest} />
				}
			</fieldset>
		);
	}
}
