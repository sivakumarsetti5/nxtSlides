import './index.css'
import SlideContext from '../../context/SlideContext'

const FullSlide = () => (
  <SlideContext.Consumer>
    {value => {
      const {activeSlideHeading, activeSlideDescription} = value
      return (
        <div className="full-slide-container">
          <h1 className="full-slide-heading">{activeSlideHeading}</h1>
          <p className="full-slide-description">{activeSlideDescription}</p>
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default FullSlide
