import React, { PureComponent } from 'react';

export default class BackButton extends PureComponent {
  render() {
    return (
      <a className="back-btn" {...this.props}>
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 100 100"
        >
          <path
            d="m 31.155133,53.603715 c 0,-1.061 0.422,-2.078 1.172,-2.829 l 30.013,-30.007 c 1.562,-1.562 4.095,-1.562 5.657,0.001 1.562,1.563 1.562,4.096 0,5.7 l -27.185,27.178 27.185,27.178 c 1.562,1.562 1.562,4.095 0,5.7 -1.6,1.562 -4.1,1.6 -5.657,0 l -30.013,-30.092 c -0.713,-0.751 -1.213,-1.74 -1.172,-2.84 z"
          />
        </svg>
      </a>
    );
  }
}
