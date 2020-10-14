import React, {useEffect, useRef, useState} from 'react'
import './FlipBook.scss'
import HTMLFlipBook from 'react-pageflip'


const FlipBookComponent = () => {
  const [pagesCounter, setPagesCounter] = useState({ page: 0, totalPage: 0 })
  let flipBook = useRef(null)

  useEffect(() => {
    setPagesCounter(prev => ({
      ...prev,
      totalPage: flipBook.getPageFlip().getPageCount()
    }))
  }, [flipBook])

  const flipBookSettings = {
    width: '550',
    height: '733',
    size: 'stretch',
    minWidth: '315',
    maxWidth: '1000',
    minHeight: '400',
    maxHeight: '1533',
    maxShadowOpacity: '0.5',
    mobileScrollSupport: 'true',
  }


  const flipControlHandler = info => {
    if (info === 'toFirst') {
      flipBook.getPageFlip().flip(0)
    }
    if (info === 'prev') {
      flipBook.getPageFlip().flipPrev()
    }
    if (info === 'next') {
      flipBook.getPageFlip().flipNext()
    }
    if (info === 'toEnd') {
      const lastPage = flipBook.getPageFlip().getPageCount()
      flipBook.getPageFlip().flip(lastPage - 1)
    }
  }

  const onPage = e => {
    setPagesCounter(prev => ({...prev, page: e.data}))
  }

  return (
    <div className="HTML-flipBook">
      <div className="HTML-flipBook__wrapper">
        <HTMLFlipBook
          onFlip={onPage}
          ref={comp => flipBook = comp}
          {...flipBookSettings}
        >
          <div className="demoPage">
            1.
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet,
              ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. Facilisi vel
              consectetur vestibulum, laoreet aliquet interdum tempor nullam posuere. Luctus ut id quam et blandit
              congue orci platea pharetra. Tort</p>

            <div className="demoPage__block"/>
          </div>
          <div className="demoPage">
            2.
            <div className="demoPage__block demoPage__color"/>
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet, ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. t</p>
          </div>
          <div className="demoPage">
            3.
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet,
              ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. Facilisi vel
              consectetur vestibulum, laoreet aliquet interdum tempor nullam posuere. Luctus ut id quam et blandit
              congue orci platea pharetra. Tort</p>

            <div className="demoPage__block"/>
          </div>
          <div className="demoPage">
            4.
            <div className="demoPage__block demoPage__color"/>
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet, ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. t</p>
          </div>
          <div className="demoPage">
            5.
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet,
              ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. Facilisi vel
              consectetur vestibulum, laoreet aliquet interdum tempor nullam posuere. Luctus ut id quam et blandit
              congue orci platea pharetra. Tort</p>

            <div className="demoPage__block"/>
          </div>
          <div className="demoPage">
            6.
            <div className="demoPage__block demoPage__color"/>
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet, ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. t</p>
          </div>
          <div className="demoPage">
            7.
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet,
              ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. Facilisi vel
              consectetur vestibulum, laoreet aliquet interdum tempor nullam posuere. Luctus ut id quam et blandit
              congue orci platea pharetra. Tort</p>

            <div className="demoPage__block"/>
          </div>
          <div className="demoPage">
            8.
            <div className="demoPage__block demoPage__color"/>
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet, ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. t</p>
          </div>
          <div className="demoPage">
            9.
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet,
              ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. Facilisi vel
              consectetur vestibulum, laoreet aliquet interdum tempor nullam posuere. Luctus ut id quam et blandit
              congue orci platea pharetra. Tort</p>

            <div className="demoPage__block"/>
          </div>
          <div className="demoPage">
            10.
            <div className="demoPage__block demoPage__color"/>
            <p className="demoPage__text">Quis duis quam pretium est velit, arcu a egestas. Non et nisl ut amet, ut non neque, ut fusce. In
              quis lectus ipsum nisl. Id feugiat pellentesque tristique pellentesque tellus in nibh ultrices ac.
              Arcu, aliquam semper egestas sodales lorem lobortis vivamus pretium. Egestas lorem mi facilisis
              tortor magna tortor odio dolor. Eget bibendum mauris, et sit nulla risus magna. t</p>
          </div>
        </HTMLFlipBook>
      </div>
      <div className="HTML-flipBook__controls">
        <div className="">
          <span className="HTML-control__counter">{pagesCounter.page + 2}/{pagesCounter.totalPage}</span>
          <button className="HTML-control HTML-control__toFirst" onClick={() => flipControlHandler('toFirst')}>to first</button>
          <button className="HTML-control HTML-control__prev" onClick={() => flipControlHandler('prev')}>prev</button>
          <button className="HTML-control HTML-control__next" onClick={() => flipControlHandler('next')}>next</button>
          <button className="HTML-control HTML-control__toLast" onClick={() => flipControlHandler('toEnd')}>to end</button>
        </div>
      </div>
    </div>
  )
}

export default FlipBookComponent