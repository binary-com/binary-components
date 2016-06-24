import React, { PropTypes } from 'react';

const PurchaseFailed = ({ failure }) => (
    <div>
        <p>{failure}</p>
    </div>
);

PurchaseFailed.propTypes = {
    failure: PropTypes.string,
};

export default PurchaseFailed;
