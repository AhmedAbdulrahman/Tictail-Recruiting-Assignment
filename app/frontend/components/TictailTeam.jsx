import React from 'react'
import {
  ListItem,
  CardMember,
  CardMedia,
  CardImageNormal,
  CardImageHover,
  CardImage,
  CardCaption,
  CardText,
  CardTitle,
  CardSubtitle
} from '../styles/AppStyle'

//Image Placeholder
import placeholder from '../../backend/templates/img/placeholder.png'

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
          <CardTitle>
            {(props.first_name && props.last_name) === null ? 'No Name' : props.first_name + ' ' + props.last_name}
          </CardTitle>
          <CardSubtitle>{`${props.title || 'Ticktailer'}, ${props.location}`}</CardSubtitle>
        </CardText>
      </CardCaption>
    </CardMember>
  </ListItem>
)

export default TictailTeam
