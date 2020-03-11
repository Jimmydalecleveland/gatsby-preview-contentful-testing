import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => (
  <p style={{ color: 'indianred' }} className="align-center">
    {children}
  </p>
);
const Button = ({ destination, children }) => (
  <button href={destination}>{children}</button>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Text>{children}</Text>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      console.log(
        '%cEmbedded Entry encountered:',
        'color: goldenrod; font-weight: bold; font-size: 18px;',
        node.data.target
      );
      const { buttonText, destination } = node.data.target.fields;

      return (
        <Button destination={destination['en-US']}>
          {buttonText['en-US']}
        </Button>
      );
    },
  },
};

export default options;
