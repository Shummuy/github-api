import React from 'react'
import * as S from './styled'

function Profile() {
  return (
    <S.Wrapper>
          <S.WrapperImage
            src="https://avatars.githubusercontent.com/u/99032204?v=4"
            alt="Picture of User"
          />
            <S.WrapperInfoUser>
          <div>
          <h1>Gabriel Campos</h1>
          <S.WrapperUsername>
          <h3>Username: </h3>
          <a href="https://github.com/Shummuy"
          target="_blank"
          rel="noreferrer"
            >Shummuy</a>
          </S.WrapperUsername>
          </div>
          <S.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Starred</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>10</span>
            </div>
          </S.WrapperStatusCount>
          </S.WrapperInfoUser>
        </S.Wrapper>
  )
}

export default Profile