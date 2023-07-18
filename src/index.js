import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './App'

ReactDOM.render(<>
<h1 className='Heading'>Top 5 Netflix Web Series</h1>
<div className='parent'>
<Card imgsrc="https://occ-0-3996-3211.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVLn6xY1bOI5mPeAZpU6v7wafhinJ0mnG3D1TKZM_Zv79mQIdxW9P41ZGyMcyxN4xI5vhRMyfF_6F4tsKCKxsGrXirLt-h32Ar1B.jpg?r=077" title="A webseries that you must Watch" sname="DARK" link="https://www.netflix.com/in/title/80100172?source=35"/>
 <Card imgsrc="https://occ-0-3783-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaJJIdyKMNvEcWhAtI5Xk12MQLY8DLxAkM2k8unVHyRordNL9Jn726cLoEmP_DAn44vwE3_l9dWTpDQTvmzsk6REyj4veXm9bvQ8.jpg?r=e19" title="A webseries that you must Watch" sname="MONEY HIEST" link ="https://www.netflix.com/in/title/80192098?source=35"/>
<Card imgsrc="https://occ-0-3783-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdYkHwZZYZ4cYPZ20OWPg4dml1YWoI5TnX0ALc_4rHEkyvokTlifJKLD2U_ypf2wNi9Jc6Jigr53o-0syqQFrB0TLUIk1A-k1U3z.jpg?r=720" title="A webseries that you must Watch" sname="EXTRACTION" link ="https://www.netflix.com/in/title/81098494?source=35"/>
</div>
<div className='parent2'>
<Card imgsrc="https://occ-0-3783-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW2vHT_kRiIFO3spVWZwdWkXcxqJNrqkwN9mRw8q-yiY0hi3ho64Ce5nh3QXG4F5oaEZUDNYCWK8y-aKlaUMEsTmOd3mOZwIfvEQ.jpg?r=0b1" title="A webseries that you must Watch" sname="SQUID GAME" link="https://www.netflix.com/in/title/81040344?source=35"/>
<Card imgsrc="https://occ-0-3783-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608" title="A webseries that you must Watch" sname="STRANGER THINGS" link="https://www.netflix.com/in/title/80057281?source=35"/> 
</div>
</>
  ,document.getElementById('root')
);
