import React from 'react'

interface Props {
  title: string
}

const Title = ({ title }: Props): JSX.Element => (
  <h1 className='text-3xl font-medium tracking-widest text-center'>
   {title}
  </h1>
)

export default Title
