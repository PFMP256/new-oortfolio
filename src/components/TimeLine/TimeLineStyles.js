
import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  margin-left: 0;
  margin-top: 32px;
  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
    gap: 16px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  background: linear-gradient(135deg, rgba(23, 42, 69, 0.8) 0%, rgba(15, 22, 36, 0.9) 100%);
  border-radius: 12px;
  max-width: 320px;
  min-width: 280px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  flex: 1;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 260px;
    min-width: 200px;
    padding: 20px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 16px;
    min-width: 260px;
    padding: 16px;
    align-content: start;
    scroll-snap-align: start;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => (props.active === props.index || props.final) ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.02em;
  display: flex;
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 12px;
    padding-bottom: 10px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 10px;
    padding-bottom: 8px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.85);
  padding-right: 0;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 24px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 13px;
    line-height: 22px;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
