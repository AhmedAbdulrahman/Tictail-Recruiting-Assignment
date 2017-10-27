import React from 'react'
import styled from 'styled-components'
import placeholder from '../../backend/templates/img/placeholder.png'
const ListItem = styled.li`
  background-color: #fff;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 20%;
`
const CardMember = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${CardMedia}:after {
    background: linear-gradient(-180deg, rgba(255, 219, 73, 0.55) 50%, #ffdb49 100%);
  }
`

const CardMedia = styled.div`
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(-180deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.55) 75%, #fff 100%);
    transition: opacity 2s, background 2s;
  }
`
const CardImageNormal = styled.div`opacity: 1;`

const CardImageHover = styled.div`
  transition: opacity 0.35s;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${CardMember}:hover & {
    opacity: 1;
  }
`
const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  ${CardMember}:hover & {
    filter: grayscale(100%);
  }
`
const CardCaption = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3em;
  color: #fff;
  padding: 10px 14px;
  transition: transform 0.35s, -webkit-transform 0.35s;
  transform: translateY(100%);
  ${CardMember}:hover & {
    transform: translateY(-30%);
  }
`
const CardText = styled.div`flex-grow: 1;`
const CardTitle = styled.h2`
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  transition: transform 0.35s, -webkit-transform 0.35s;
  transform: translateY(200%);
  ${CardMember}:hover & {
    transition-delay: 0.05s;
    transform: translateY(-30%);
  }
`
const CardSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  transition-delay: 0.2s;
  transition: transform 0.35s, -webkit-transform 0.35s;
  transform: translateY(200%);
  opacity: 0.8;
  ${CardMember}:hover & {
    transition-delay: 0.1s;
    text-indent: 0.08em;
    transform: translateY(-30%);
  }
`
const TictailTeam = props => (
  <ListItem>
    <CardMember>
      <CardMedia>
        <CardImageNormal>
          <CardImage src={props.image || placeholder} widht="320" height="320" alt={`Image for ${props.first_name}`} />
        </CardImageNormal>
        <CardImageHover>
          <CardImage src={props.image || placeholder} widht="320" height="320" alt={`Image for ${props.first_name}`} />
        </CardImageHover>
      </CardMedia>
      <CardCaption>
        <CardText>
          <CardTitle>{`${props.first_name} ${props.last_name}`}</CardTitle>
          <CardSubtitle>{`${props.title || 'Ticktailer'}, ${props.location}`}</CardSubtitle>
        </CardText>
      </CardCaption>
    </CardMember>
  </ListItem>
)

export default TictailTeam
