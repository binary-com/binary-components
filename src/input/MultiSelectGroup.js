import React, { PureComponent } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

type Option = {
  text: string,
  value: string,
}

export default class MultiSelectGroup extends PureComponent {

  props: {
    className: string,
    label: string,
    labelKey: string,
    options: Option[],
    value: string,
    onChange: (e: SyntheticEvent) => void,
    simpleValue: boolean,
    joinValues: boolean,
  };

  render() {
    const { className } = this.props;
    return (
      <fieldset className={className}>
        <Select {...this.props} multi />
      </fieldset>
    );
  }
}
