import React, { useState } from 'react';

const Header = () => {
    const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className='my-header'>
        <div>Header</div>
        <h2 style={{color: 'blue'}}>header</h2>
        <button onClick={() => setVisible(prev => !prev)}>Button</button>
        {visible && <p>just simple p lol</p>}
    </div>
  )
}

export default Header