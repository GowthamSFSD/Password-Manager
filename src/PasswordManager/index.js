import {Component} from 'react'
import {v4 as uniqueId} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const backgroundColor = ['a', 'b', 'b', 'd', 'e', 'f']

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isClickedShowPassword: true,
  }

  removePassword = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachList => eachList.id !== id,
      ),
    }))
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      isClickedShowPassword: !prevState.isClickedShowPassword,
    }))
  }

  addPasswordAndUsername = event => {
    event.preventDefault()
    const style = backgroundColor[Math.floor(Math.random() * 6)]
    const {website, username, password} = this.state
    const id = uniqueId()
    const newList = {
      id,
      website,
      username,
      password,
      style,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
      website: '',
      username: '',
      password: '',
    }))
  }

  filteredList = () => {
    const {passwordList, searchInput} = this.state
    const filterList = passwordList.filter(eachList =>
      eachList.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filterList
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {
      website,
      username,
      password,
      searchInput,
      isClickedShowPassword,
    } = this.state
    const filteredPasswordList = this.filteredList()
    const count = filteredPasswordList.length
    const isZero = count === 0
    return (
      <div className="app-container">
        <div className="password-manager-container">
          <div className="password-manager-heading-container">
            <img
              className="app-logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="password-manager-input-main-container">
            <div className="password-manager-input-inside-container">
              <div className="password-manager-logo-container">
                <img
                  className="password-manager-logo"
                  alt="password manager"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                />
              </div>
              <form className="pm-input-card-container">
                <div className="pm-input-card">
                  <h1 className="pm-input-heading">Add New Password</h1>
                  <div className="input-container">
                    <div className="input-logo-container">
                      <img
                        className="input-logo"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                        alt="website"
                      />
                    </div>
                    <input
                      value={website}
                      onChange={this.onChangeWebsite}
                      className="input"
                      placeholder="Enter Website"
                    />
                  </div>
                  <div className="input-container">
                    <div className="input-logo-container">
                      <img
                        className="input-logo"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                        alt="username"
                      />
                    </div>
                    <input
                      value={username}
                      onChange={this.onChangeUsername}
                      className="input"
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="input-container">
                    <div className="input-logo-container">
                      <img
                        className="input-logo"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                        alt="password"
                      />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={this.onChangePassword}
                      className="input"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="button-container">
                    <button
                      onClick={this.addPasswordAndUsername}
                      type="submit"
                      className="add-button"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="password-main-container">
            <div className="password-inside-container">
              <div className="your-password-heading-and-search-container">
                <div className="your-password-container">
                  <h1 className="your-password-heading">Your Passwords</h1>
                  <p className="count">{count}</p>
                </div>
                <div className="search-input-container">
                  <div className="search-logo-container">
                    <img
                      className="search-logo"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                    />
                  </div>
                  <input
                    type="search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    className="search-input"
                    placeholder="Search"
                  />
                </div>
              </div>
              <hr />
              <div className="show-password-container">
                <div className="checkbox-label-container">
                  <input
                    onChange={this.toggleShowPassword}
                    className="checkbox"
                    id="checkbox"
                    type="checkbox"
                  />
                  <label className="show-password" htmlFor="checkbox">
                    Show Passwords
                  </label>
                </div>
              </div>
              {isZero ? (
                <div className="no-password-container">
                  <img
                    className="no-password-logo"
                    alt="no passwords"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  />
                  <p className="no-passwords-text">No Passwords</p>
                </div>
              ) : null}
              <ul className="main-list-container">
                {filteredPasswordList.map(eachList => (
                  <PasswordItem
                    removePassword={this.removePassword}
                    key={eachList.id}
                    eachList={eachList}
                    isClickedShowPassword={isClickedShowPassword}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
