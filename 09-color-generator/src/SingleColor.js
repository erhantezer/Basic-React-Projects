import React, { useEffect, useState } from 'react'
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  console.log((48).toString(16)) //! hexadesimal şeklinde çevirir ve string yapar

  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`

  console.log(bcg);
  console.log(hex);
  console.log(hexValue);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => clearTimeout(timeout)
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ background: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >

      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor