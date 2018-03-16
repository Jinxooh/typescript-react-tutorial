import * as React from 'react';
import Profile from './components/Profile';
import CounterContainer from './containers/CounterContainer';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name="jeckson"
          job="front-end"
        />
        <CounterContainer />
        <TodoList />
      </div>
    );
  }
}

export default App;