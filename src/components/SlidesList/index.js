import './index.css'
import SlideContext from '../../context/SlideContext'

const SlidesList = props => {
  const {slideDetails} = props
  const {id, heading, description} = slideDetails

  return (
    <SlideContext.Consumer>
      {value => {
        const {activeSlideItem} = value
        const onClickSlideBtn = () => {
          activeSlideItem(heading, description)
        }
        return (
          <li className="slide-container">
            <button
              type="button"
              className="slide-btn"
              onClick={onClickSlideBtn}
            >
              <p>1</p>
              <h1 className="slide-heading">{heading}</h1>
              <p className="slide-description">{description}</p>
            </button>
          </li>
        )
      }}
    </SlideContext.Consumer>
  )
}

export default SlidesList
