import React from 'react';

const nl2br = (text) => {

  return text.split("\n").map((section, key) => {
    return (
      <span key={ key }>
      { section }
        <br />
      </span>
    );
  });
};

export default nl2br;
