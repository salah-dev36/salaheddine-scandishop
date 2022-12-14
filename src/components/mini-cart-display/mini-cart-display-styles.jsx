import styled from "styled-components";

export const Container = styled.div`
  width: 325px;
  max-height: 677px;
  background-color: white;
  padding: 32px 12px 32px 16px;
  position: absolute;
  right: 72px;
  top: 78px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  z-index: 3;

  @media screen and (max-width: 642px) {
    right: 17px;
    max-height: 545px;
  }
`;

export const Title = styled.div`
  & > span {
    font-weight: 700;
  }
`;
export const ItemsContainer = styled.div`
  widht: 293px;
  max-height: 440px;
  display: flex;
  padding-right: 1px;
  flex-direction: column;
  gap: 40px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 25px;
  }
`;

export const CartEmpty = styled(ItemsContainer)`
  justify-content: center;
  align-items: center;
  font-size: 21px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  text-transform: capitalize;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
