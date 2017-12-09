import React, { PureComponent } from 'react';
import Label from '../i18n/Label';
import RadioItem from './RadioItem';

type Options = {
  img: string,
  text: string,
  value: string,
  group: string,
}

export default class GroupedRadioGroup extends PureComponent {
  props: {
    className?: string,
    name: string,
    options: Options[],
    onChange: (e: SyntheticEvent) => void,
    value: any,
    id: string,
  };

  static defaultProps = {
    className: 'radio-selector',
    options: [],
  };

  render() {
    const { className, onChange, name, options, value, id } = this.props;
    const labels = options.map((a: Object) => a.group).filter((elem: string, index: number, self: Array<any>) => index === self.indexOf(elem));

    return (
      <fieldset className={className}>
        {labels.map((l: string) => (
          <div key={l}>
            {l && <Label htmlFor={id} text={l} />}
            {options.map((o: Options) => (o.group === l &&
              <RadioItem
                key={name + o.value}
                checked={o.value === value}
                img={o.img}
                label={o.text}
                name={name}
                onChange={onChange}
                value={o.value}
              />
            ))}
          </div>
        ))}
      </fieldset>
    );
  }
}
