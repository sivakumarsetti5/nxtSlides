import React from 'react'

const SlideContext = React.createContext({
  activeSlideHeading: '',
  activeSlideDescription: '',
  activeSlideItem: () => {},
  slidesList: [],
})
export default SlideContext
