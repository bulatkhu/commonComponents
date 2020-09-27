import React from 'react'
import Select from "react-select"


const Selector = () => {


  const initialSelectors = [
    { value: 'card', label: 'Card' },
    { value: 'kaspi', label: 'Kaspi' },
  ]

  const selectorStyles = {
    singleValue: styles => ({
      ...styles,
      color: '#626267',
      fontWeight: 'normal',
      fontSize: '24px',
      lineHeight: '32px',
    }),
    control: styles => ({
      ...styles,
      borderRadius: 34,
      border: '2px solid #626267',
    }),
    option: styles => ({
      ...styles,
    }),
    indicatorSeparator: styles => ({
      ...styles,
      display: 'none'
    }),
    dropdownIndicator: (styles, state) => ({
      ...styles,
      transition: 'all .3s',
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0)',
      color: '#626267'
    })
  }


  return (
    <div className="App-selector">


      <div className="App-selector__select">
        <Select
          name="type"
          defaultValue={initialSelectors[0]}
          options={initialSelectors}
          styles={selectorStyles}
        />
      </div>

    </div>
  )
}

export default Selector