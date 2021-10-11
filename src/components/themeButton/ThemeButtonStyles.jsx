const Button = styled.button`
  align-items: center;
  background: ${props => props.background};
  border: none;
  outline: none;
  border-radius: 4px 20% 4px 20%;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33);
  color: #333;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  width: 100%;
  transition: all 0.25s;
  ${media.phone`
    font-size: 1.8rem;
  `}
  &:focus {
    box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.33), 0 0 0 3px var(--secondary);
  }
`;

const ButtonContainer = styled.div`
  height: 4rem;
  margin-right: 2rem;
  margin-top: 0.5rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 4rem;
  ${media.phone`
    height: 3rem;
    margin-right: 0.5rem;
    width: 3rem;
  `}
`;