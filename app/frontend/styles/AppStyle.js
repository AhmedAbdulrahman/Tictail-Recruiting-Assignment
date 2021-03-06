import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

// Animations
const BounceIn = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
    text-align: center;
  }
  100% {
    transform: scale(1);
    text-align: center;
  }
`
const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) translateY(0px);
    transition: opacity 750ms, transform 750ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) translateY(0px);
    transition: opacity 750ms, transform 750ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`
const ScaleUp = keyframes`
0% {
  opacity: 0;
  transform: scale(0.79);
}
100% {
  opacity: 1;
  transform: scale(1);
  transition: opacity 500ms, transform 500ms;
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`
export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  border-color: rgba(0, 0, 0, 0.09);
  color: #000;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 0 70px;
  margin-bottom: 2em;
  z-index: 1;
`
export const AddButton = styled.button`
  background-color: #ffdb49;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  color: #5a5a5a;
  outline: none;
  padding: 14px 20px;
  margin-bottom: 30px;
  transition: all 0.1s;
  cursor: pointer;
  box-shadow: 1px 2px 18px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    border-color: #ddc76b;
    color: #000000;
    box-shadow: 1px 5px 18px 0px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease-in-out;
  }
`
export const NavItem = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  flex: 0;
`
export const Hero = styled.div`
  position: relative;
  padding-top: 10px;
  padding-bottom: 50px;
`
export const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 100px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  color: #1f1e1d;
  margin-bottom: 60px;
  animation: ${BounceIn} 1s ease-in-out;
  box-sizing: border-box;
`
export const SubTitle = styled.h2`
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  line-height: 2;
  letter-spacing: 0.04em;
  opacity: 0.7;
  color: #6c6c6c;
  animation: ${FadeIn} 2s ease-in-out forwards;
`
export const Highlight = styled.span`
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 13px;
    margin: 0 auto;
    text-align: center;
    background-color: #ffdb49;
  }
`
export const ListTeam = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
`
// Form Styles
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  & * {
    box-sizing: border-box;
  }
`
export const MemberForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 0;
  padding: 10px 0;
`
export const Input = styled.input.attrs({
  type: 'text'
})`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-width: 2px;
  outline: 0;
  width: 100%;
  min-height: 40px;
  height: auto;
  padding: 0 20px;
  margin: 0 10px 13px 0;
  font-size: 12px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  &:focus {
    border: 1px solid rgba(255, 229, 124, 0.79);
    border-width: 2px;
    box-shadow: inset 0 1px 1px rgba(255, 229, 124, 0.79);
  }
`
export const FormGroup = styled.div`
  margin-bottom: 0;
  margin-right: 10px;
  padding: 10px 0;
  width: 20%;
  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 20%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 28%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
export const Label = styled.label`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 100%;
  margin-bottom: 5px;
`
export const Error = styled.p`
  color: #f81763;
  font-size: 13px;
  margin-top: 0;
`
export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`
export const SubmitButton = styled.input.attrs({
  type: 'submit'
})`
  background-color: #ffdb49;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  color: #5a5a5a;
  outline: none;
  padding: 14px 20px;
  margin-bottom: 30px;
  transition: all 0.1s;
  cursor: pointer;
  box-shadow: 1px 2px 18px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    border-color: #ddc76b;
    color: #000000;
    box-shadow: 1px 5px 18px 0px rgba(0, 0, 0, 0.12);
    transition: all 0.25s ease-in-out;
  }
`
export const CancelButton = AddButton.extend``
// Team Member Style
export const Tr = styled.tr`
  opacity: 0;
  animation: ${FadeIn} 0.7s ease-in-out forwards;
  td {
    line-height: 1.5;
  }
  td:first-child {
    border-radius: 2px 0 0 2px;
  }
  & img {
    width: 14%;
    height: 65px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 1rem;
  }
`
export const ButtonEdit = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #fff;
  border: 1px solid #e2e9f3;
  padding: 0.375rem 0.5rem;
  margin: 0.2rem 0.2rem;
  width: 34%;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5;
  color: #3d4041;
  outline: none;
  border-radius: 0.25rem;
  box-sizing: content-box;
  overflow: hidden;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #ffd262;
    border-color: #e2e9f3;
    color: #000000;
  }
  @media (min-width: 1200px) and (max-width: 1600px) {
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 50%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
// Team Members List
export const Table = styled.table`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 1rem;
  font-size: 15px;
  box-shadow: 0 8px 20px 0px rgba(131, 153, 163, 0.25);

  & td,
  th {
    padding: 0.5em 1.5em;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-radius: 2px;
  }
  @media only screen and (min-width: 993px) {
    width: 85%;
  }
`
export const Thead = styled.thead`
  background-color: transparent;
  line-height: 3;
`
export const Tbody = styled.tbody`
  > tr {
    background-color: #fff;
    border-bottom: 1px solid #e8effa;
  }
`
export const Th = styled.th`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  color: #1f1e1d;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 30px;
    left: 12px;
    width: 5px;
    height: 6px;
    background-color: #ffdb49;
  }
`
export const Td = styled.td`
  text-align: center;
  border: 1px solid #dddddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
// Ticktail Team Page Style
export const ListItem = styled.li`
  background-color: #fff;
  box-sizing: border-box;
  margin: 10px;
  flex-shrink: 0;
  flex-basis: ${props => props.widht}%;
  box-shadow: 7px 10px 15px 1px rgba(0, 0, 0, 0.09);
  width: 17%;
  opacity: 0;
  animation: ${ScaleUp} 0.7s ease-in-out forwards;

  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 20%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`

export const CardMedia = styled.div`
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(-180deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.55) 75%, #fff 100%);
    transition: all 5s;
  }
`
export const CardMember = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${CardMedia}:after {
    background: linear-gradient(-180deg, rgba(255, 219, 73, 0.5) 50%, #ffdb49 100%);
  }
`
export const CardImageNormal = styled.div`opacity: 1;`

export const CardImageHover = styled.div`
  transition: all 14s;
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
export const CardImage = styled.img`
  width: 100%;
  max-width: 100%;
  ${CardMember}:hover & {
    filter: grayscale(100%);
  }
`
export const CardCaption = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3em;
  color: #fff;
  padding: 10px 14px;
  transition: transform 0.4s;
  transform: translateY(100%);
  ${CardMember}:hover & {
    transform: translateY(-90%);
  }
`
export const CardText = styled.div`flex-grow: 1;`
export const CardTitle = styled.h2`
  font-size: 20px;
  line-height: 1.2;
  color: #584f36;
  margin: 0;
  padding: 0;
  transition: transform 0.35s, -webkit-transform 0.35s;
  transform: translateY(200%);
  ${CardMember}:hover & {
    transition-delay: 0.05s;
    transform: translateY(-30%);
  }
`
export const CardSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #967b10;
  margin-top: 10px;
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
