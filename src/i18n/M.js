import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

export default class M extends PureComponent {
	props: {
		id?: string,
		className?: string,
		m: string,
		values?: Object,
	};

	static defaultProps = {
		id: undefined,
		values: undefined,
		className: undefined
    };

	render() {
		const { m, values, id, className } = this.props;

		return (
			<FormattedMessage id={m} defaultMessage={m} values={values}>
				{(message: string) => (
					<span id={id} className={className}>
						{message}
					</span>
				)}
			</FormattedMessage>
		);
	}
}
