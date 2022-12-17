import React, { useState } from 'react'
import {data} from './Data'
import Single_Item from './Single Item'

function List() {
  const [list, setList] = useState(data)
  console.log(list)

  return (
    <section>
    {
        list.map((item) => 
<Single_Item key = {item.id} {...item}/>
       )
    }
    </section>
  )
}

export default List