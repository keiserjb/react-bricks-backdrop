import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root';
import JsonApiProvider from "./components/context/JsonApiProvider";
import BrickProvider from "./components/context/BrickProvider";
import BrickList from "./components/BrickList";



const Main = hot(() => (
  <div>
    <BrickList />
  </div>
));

ReactDOM.render
(<JsonApiProvider><BrickProvider><Main/></BrickProvider></JsonApiProvider>, document.getElementById('react-bricks-app'));

/*ReactDOM.render
(<p>AMA Walk of Fame Bricks</p>,
  document.getElementById('react-bricks-app')
);*/



