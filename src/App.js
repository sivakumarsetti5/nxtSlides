import './App.css'

import {Component} from 'react'

import SlideContext from './context/SlideContext'

import Header from './components/Header'
import NewSlide from './components/NewSlide'
import SlidesList from './components/SlidesList'
import FullSlide from './components/FullSlide'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlideHeading: initialSlidesList[0].heading,
    activeSlideDescription: initialSlidesList[0].description,
  }

  activeSlideItem = (heading, description) =>
    this.setState({
      activeSlideHeading: heading,
      activeSlideDescription: description,
    })

  creatNewSlide = () => {
    const {slidesList} = this.state
    const emptySlide = {
      id: 'cc6e233c-a063-11ec-b909-0242ac12',
      heading: 'heading',
      description: 'description',
    }
    this.setState(prevState => ({
      slidesList: [...prevState.slidesList, emptySlide],
    }))
  }

  render() {
    const {activeSlideHeading, activeSlideDescription, slidesList} = this.state
    return (
      <SlideContext.Provider
        value={{
          activeSlideHeading,
          activeSlideDescription,
          activeSlideItem: this.activeSlideItem,
          creatNewSlide: this.creatNewSlide,
          slidesList,
        }}
      >
        <Header />
        <NewSlide />
        <div className="slide-show-container">
          <ol className="side-bar-container">
            {slidesList.map(each => (
              <SlidesList key={each.id} slideDetails={each} />
            ))}
          </ol>
          <FullSlide />
        </div>
      </SlideContext.Provider>
    )
  }
}

export default App
