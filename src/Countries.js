import React, { PureComponent, PropTypes } from 'react';

export default class Countries extends PureComponent {

	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func,
		residenceList: PropTypes.array.isRequired,
	}

	render() {
		const { onChange, value, residenceList } = this.props;

		return (
			<select name="residence" onChange={this.onResidenceChange}>
                <option value="">Country of Residence</option>
                 {
                    residenceList.map((obj) =>
                        <option
                            value={obj.value}
                            key={obj.value}
                            disabled={obj.disabled ? 'disabled' : false}
                        >
                            {obj.text}
                        </option>
                     )
                 }

            </select>
		);
	}
}
