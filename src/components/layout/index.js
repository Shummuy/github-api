import React from 'react'
import * as S from './styled'

function Layout({ children }) {
  return (
    <S.WrapperLayour>
      <header>header</header>
      {children}
    </S.WrapperLayour>
  )
}

export default Layout
