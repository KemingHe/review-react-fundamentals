'use client';

{/* 
  This is how you def a client component in Next. 
  Only use useState on cliend side.
*/}

import { useState } from 'react';

export default function ButtonLike() {

  const [numLikes2, setNumLikes2] = useState(99);

  function clickHandler2() {
    setNumLikes2(numLikes2 + 1);
  }

  return (<button onClick={clickHandler2}>
            Here's num likes: ({numLikes2})
          </button>);
}

