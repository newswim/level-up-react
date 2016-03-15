import React from 'react'
import ContactsList from './ContactsList'

let contacts = [{
  id : 1,
  name : 'Dani',
  phone : '454 454 4545'
},{
  id : 2,
  name : 'KillerMike',
  phone : '666 666 6666'
},{
  id : 3,
  name : 'Tommy',
  phone : '141 488 8868'
},{
  id : 4,
  name : 'Steve',
  phone : '090 099 9101'
}]

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'))
