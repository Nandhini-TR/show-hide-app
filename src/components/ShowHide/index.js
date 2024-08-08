import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowFirstName: false, isShowLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({
      isShowFirstName: !prevState.isShowFirstName,
    }))
  }

  showLastName = () => {
    this.setState(prevState => ({
      isShowLastName: !prevState.isShowLastName,
    }))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="card-container">
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isShowFirstName ? <p className="card-name-container">Joe</p> : ''}
          </div>
          <div className="card-container">
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide LastName
            </button>
            {isShowLastName ? <p className="card-name-container">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
