import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Label from '../i18n/Label';
import P from '../i18n/Notice';

export default class InputGroup extends PureComponent {
	props: {
		id: string,
		className: string,
		label: string,
		hint: string,
		placeholder: string,
		readOnly: boolean,
	};

	render() {
		const { label, hint, className, id, placeholder, readOnly, ...rest } = this.props;

		return (
			<fieldset className={className}>
				{label && <Label htmlFor={id} text={label} />}
				{placeholder ?
					<FormattedMessage id={placeholder} defaultMessage={placeholder}>
						{(message: string) =>
							<input id={id} placeholder={message} readOnly={readOnly} {...rest} />
						}
					</FormattedMessage> :
					<input id={id} {...rest} />
				}
				{hint && <P text={hint} />}
			</fieldset>
		);
	}
}
