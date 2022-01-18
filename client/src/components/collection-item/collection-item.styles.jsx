import styled from "styled-components";
import {CustomButton} from "../custom-button/custom-button.component";


export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: .7;
  position: absolute;
  top: 255px;
  display: none;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${props => props.imageUrl})
`;


export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.div`
  width: 10%;
`;


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${CustomButtonContainer} {
    opacity: .85;
    display: flex;
  }

  &:hover ${ImageContainer} {
    opacity: .8;
  }
`

