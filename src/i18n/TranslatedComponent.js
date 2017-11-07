import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

export default class TranslatedComponent extends PureComponent {
	props: {
		component: string,
		text?: string,
	};

	static defaultProps = {
		text: '',
	};

	render() {
		const { component, text, ...rest } = this.props;

		return (
			<FormattedMessage id={text} defaultMessage={text}>
				{(message: React$Element<TranslatedComponent>) =>
					React.createElement(component, rest, [message])
				}
			</FormattedMessage>
		);
	}
}
