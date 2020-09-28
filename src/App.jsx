import React, {useRef} from 'react'
import './App.css'
import Selector from './components/selector'
import FlipPage from 'react-flip-page'
// import FlipBookComponent from './components/FlipBook/FlipBook'
import RatingCircle from './components/RatingCircle/RatingCircle'
import CanvasCircle from './components/CanvasCircle/CanvasCircle'
import CounterWrapper from './components/CounterWrapper/CounterWrapper'
import OutputCounter from './components/OutputCounter/OutputCounter'
import Counter from './components/Counter/Counter'
import UsersComp from './components/Users/UsersComp'
import Auth from './components/Auth/Auth'


function App() {
  let flipPageSecond = useRef(null)
  const flipBookOptions = {
    orientation: 'horizontal',
    width: '100 ',
    style: {
      height: '700',
      width: '100%'
    },
    uncutPages: true,
    responsive: true
  }


  const changeBooksPage = info => {
    if (info === 'prev') {
      flipPageSecond.gotoPreviousPage()
    } else {
      flipPageSecond.gotoNextPage()
    }
  }

  const rating = {
    right: 5,
    wrong: 4,
    empty: 4,
    width: 60,
    wrapClassName: 'responsiveCircle'
  }

  return (
    <div className="App">


      <div className="App-workplace light-bg" style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>

        <Auth/>

      </div>


      <div className="App-workplace light-bg" style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>

        <UsersComp/>

      </div>

      <div className="App-workplace light-bg" style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>
        <CounterWrapper>
          <OutputCounter/>
          <Counter/>
        </CounterWrapper>
      </div>

      <div className="App-workplace light-bg" style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>



        <CanvasCircle
          {...rating}
        />


      </div>

      <div className="App-workplace light-bg">

        <RatingCircle/>

      </div>

      <div className="App-workplace light-bg ">

        <div className="HTML-flipBook__overplay">
          {/*<div className="HTML-flipBook p-50-10 d-flex-center d-flex-dir-column">*/}

            {/*<FlipBookComponent/>*/}

          {/*</div>*/}
        </div>

      </div>

      <div className="App-workplace dark-bg">

        <div className="flipBook__wrapper">

          <FlipPage ref={comp => flipPageSecond = comp} {...flipBookOptions}>
            <article>
              <h1>My awesome first article</h1>
              <p>My awesome first content</p>
              <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet,
                ut non neque, ut fusce. In
                quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
                Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
                tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. Facilisi vel
                consectetur vestibulum, laoreet aliquet interdum tempor nullam posuere. Luctus ut id quam et blandit
                congue orci platea pharetra. Tort</p>
            </article>
            <article>
              <h1>My wonderful second article</h1>
              <p>My wonderful second content</p>
            </article>
            <article>
              <h1>My excellent third article</h1>
              <p>My excellent third content</p>
            </article>
          </FlipPage>


          <div className="flipBook__controls">
            <button onClick={() => changeBooksPage('prev')}>prev</button>
            <button onClick={() => changeBooksPage('next')}>next</button>
          </div>

        </div>

      </div>

      <div className="App-workplace">
        <h1>Test</h1>
      </div>

      <div className="App-workplace">
        <Selector/>

        {/*<VimeoVideo/>*/}
      </div>


    </div>
  );
}

export default App;
