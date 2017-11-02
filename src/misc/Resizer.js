import React, { PureComponent } from 'react';

export default class Resizer extends PureComponent {
	props: {
		className: string,
		onResize: (e: Event) => void,
	};

	onMouseDown = () => {
		window.addEventListener('mousemove', this.onGlobalMouseMove);
		window.addEventListener('mouseup', this.onGlobalMouseUp);
	}

	onGlobalMouseMove = (e: Event) => {
		this.props.onResize(e);
	}

	onGlobalMouseUp = (e: Event) => {
		this.props.onResize(e);
		window.removeEventListener('mousemove', this.onGlobalMouseMove);
		window.removeEventListener('mouseup', this.onGlobalMouseUp);
	}

	render() {
		return (
			<div
				className={this.props.className}
				onMouseDown={this.onMouseDown}
			>
				<span className="resizer-handle" />
			</div>
		);
	}
}
