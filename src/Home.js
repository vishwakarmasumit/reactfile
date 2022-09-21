import React from 'react'
import Checkbox from './Checkbox';


import Dropdown from './Dropdown';
import Radio from './Radio';

const Home = () => {
  return (
<>

<div className='row'>
<div className='col-lg-4'>
<Dropdown />
</div>
<div className='col-lg-4'>
<Radio />
</div>
<div className='col-lg-4'>
<Checkbox/>
</div>

</div>
</>
  )
}

export default Home;