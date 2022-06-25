import React, { Component } from 'react'
const UserContext = React.createContext()

const App = () => (
  <Parent>
    <Child />
  </Parent>
)

//***************************************/

class Parent extends Component {

  state = {
    editGroup: false
  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

//***************************************/

const Child = () => {
  return (
    <React.Fragment>
      <UserContext.Consumer>
        {(value) => (
          <p>Inside consumer {console.log(value)}</p>
        )}
      </UserContext.Consumer>
    </React.Fragment>
  );
}

export default App
