import React,{ useState } from 'react'
import TabNav from '../src/components/TabNav';
import Tab from '../src/components/Tab';
import './App.css'
export default function App() {
  const [selected,setSelected] = useState('Home');

  const setSelectedFunction = (tab)=>{
    setSelected(tab);
  }
  return (
    <div className="container mt-4">
      <TabNav tabs={['Home','Settings','Profile']} selected={selected} setSelected={ setSelectedFunction }>
      <Tab isSelected={ selected === 'Home' }>
            <p>Some test text</p>
          </Tab>
          <Tab isSelected={ selected === 'Settings' }>
            <h1>More test text</h1>
          </Tab>
          <Tab isSelected={ selected === 'Profile' }>
            <ul>
              <li>List test 1</li>
              <li>List test 2</li>
              <li>List test 3</li>
            </ul>
          </Tab>
      </TabNav>
    </div>
  )
}
