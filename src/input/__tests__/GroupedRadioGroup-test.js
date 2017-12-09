import React from 'react';
import { shallow } from 'enzyme';
import GroupedRadioGroup from '../GroupedRadioGroup';

describe('<GroupedRadioGroup />', () => {
  const options = [{"text":"AUD","value":"AUD","group":"Fiat currency","img":"/img/aud.svg"},{"text":"BCH","value":"BCH","group":"Cryptocurrency","img":"/img/bch.svg","name":"bitcoin_cash"},{"text":"BTC","value":"BTC","group":"Cryptocurrency","img":"/img/btc.svg","name":"bitcoin"},{"text":"ETH","value":"ETH","group":"Cryptocurrency","img":"/img/eth.svg","name":"ether"}];


  it('renders with no properties', () => {
    const wrapper = shallow(<GroupedRadioGroup />);
    expect(wrapper.type()).toEqual('fieldset');
  });

  it('renders a RadioItems per option', () => {
    const wrapper = shallow(
      <GroupedRadioGroup options={options} />
    );
    expect(wrapper.find('RadioItem').length).toEqual(4);
  });

});
