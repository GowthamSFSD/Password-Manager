import './index.css'

const PasswordItem = props => {
  const {eachList, isClickedShowPassword, removePassword} = props
  const {website, username, password, id, style} = eachList
  const firstLetter = website.slice(0, 1).toUpperCase()
  const deleteList = () => {
    removePassword(id)
  }
  return (
    <li className="password-list">
      <div className="inside-container">
        <div className="password-list-inside">
          <div className="password-dp-content">
            <div className={`${style} first-letter-container`}>
              <p className="first-letter">{firstLetter}</p>
            </div>
            <div className="web-user-pass-container">
              <p className="website">{website}</p>
              <p className="username">{username}</p>
              {isClickedShowPassword ? (
                <img
                  alt="stars"
                  className="star"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                />
              ) : (
                <p className="password">{password}</p>
              )}
            </div>
          </div>
        </div>
        <button
          data-testid="delete"
          onClick={deleteList}
          className="trashButton"
          type="button"
        >
          <img
            className="trash-logo"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
