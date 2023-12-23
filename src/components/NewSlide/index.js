import './index.css'
import SlideContext from '../../context/SlideContext'

const NewSlide = () => (
  <SlideContext.Consumer>
    {value => {
      const {creatNewSlide} = value
      const onClickNewTab = () => {
        creatNewSlide()
      }
      return (
        <button
          type="button"
          className="new-btn new-text"
          onClick={onClickNewTab}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png "
            className="plus-btn"
            alt="new plus icon"
          />
          New
        </button>
      )
    }}
  </SlideContext.Consumer>
)

export default NewSlide
