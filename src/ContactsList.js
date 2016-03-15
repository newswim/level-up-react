import React from 'react'
import Contact from './Contact.js'

class ContactsList extends React.Component {
  constructor () {
    super()
    this.state = {
      search : ''
    }
  }

  _updateSearch (event) {
    this.setState({
      search : event.target.value.substr(0, 20)
    })
  }

  render () {
    let filteredContacts = this.props.contacts.filter((contact) => {
        // if character within search is not found,
        // then do not return that contact
        // FIXME: doesn't seem to be returning any objects to
        // the map function below
        // FIXED: 'searcb' != 'search'
        return contact.name.indexOf(this.state.search) !== -1
      }
    )
    return (
      <div>
        <input type  = "text"
               value = {this.state.search}
               onChange = {this._updateSearch.bind(this)}/>
        <ul>
          {
            filteredContacts.map((contact) => {
              return <Contact contact={contact} key={contact.id} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default ContactsList
