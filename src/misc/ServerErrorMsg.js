import React, { PureComponent } from 'react';
import classnames from 'classnames';

export default class ServerErrorMsg extends PureComponent {
	props: {
		className: string,
		text: string,
	};

	render() {
		const { text, className } = this.props;

		if (!text) return null;

		const classes = classnames('errorfield', className);

		return (
			<p className={classes}>{text}</p>
		);
	}
}
