import React from 'react'

interface Props {
  desktop: string
  tablet: string
  mobile: string
  text: string
}

const AudioGear = ({ desktop, tablet, mobile, text }: Props) => {
  return (
    <section>
      <div>
        <div>
          <h2>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>{text}</p>
        </div>
        <div>
          <picture>
            <source media='(min-width: 573px)' srcSet={desktop} />
            <source media='(min-width: 375px)' srcSet={tablet} />
            <img src={mobile} alt='best audio gear' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default AudioGear
