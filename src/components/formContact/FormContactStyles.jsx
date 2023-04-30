import styled from 'styled-components';

export const Box = styled.div`
  background: ${({ theme }) => theme.contact.backgroundDispo};
  border-radius: 12px;
  height: 344px;
  border-bottom: solid 0.5em;
  width: 100%;
  border-bottom-color: #2fdd2f;
  padding: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 210px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 140px;
    padding: 12px;
  }
`;
export const BoxTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.backgroundText};
  font-weight: 400;
  font-size: 2.125rem;
`;

export const BoxTitle2 = styled.h1`
  font-size: 85px;
  color: ${({ theme }) => theme.backgroundText};
  font-weight: 700;
  line-height: 1.25;
  margin-top: 5vh;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 35px;
    margin-top: 2vh;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;

export const ContactWrapper = styled.section`
  margin-bottom: 200px;
  height: 100%;
  width: 80%;
  @media (max-width: 478px) {
    width: 100%;
  }
`;

export const ContactBox = styled.div`
  width: calc(100% - 30px);
  position: relative;
  height: 400px;
  margin-bottom: 10vh;
  margin-top: 150px;
  background: ${({ theme }) => theme.contact.backgroundLeft};
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 10px;
    margin-top: 50px;
  }
`;
export const LeftContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 3%;
  width: fit-content;
  text-align: center;
  &,
  p,
  h3 {
    color: #f8f8f8;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContactForm = styled.form`
  position: absolute;
  width: 70%;
  top: -50px;
  right: -40px;
  padding: 50px 30px;
  background: ${({ theme }) => theme.contact.backgroundForm};
  border-radius: 10px;
  min-height: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'email name'
    'textarea textarea'
    '. button';
  label span {
    font-size: 0.85em;
    color: ${({ theme }) => theme.contact.label};
  }
  textarea,
  input {
    color: ${({ theme }) => theme.contact.label};
  }
  .label__email {
    grid-area: email;
  }
  .label__name {
    grid-area: name;
  }
  .label__message {
    grid-area: textarea;
  }
  .submit__btn {
    grid-area: button;
  }
  @media (max-width: 768px) {
    grid-template-areas:
      'email email'
      'name name'
      'textarea textarea'
      '. button';
  }
  input,
  textarea {
    padding: 15px 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.contact.backgroundInput};
    border: none;
    margin: 10px 0;
    width: 100%;
    @media ${(props) => props.theme.breakpoints.sm} {
      height: 50%;
    }
  }
  textarea {
    margin: 10px 0;
    width: 100%;
    height: 200px;
    resize: none;
    @media ${(props) => props.theme.breakpoints.sm} {
      height: 100px;
    }
  }
  @media (max-width: 1000px) {
    input,
    textarea {
      padding: 20px 15px;
    }
    padding: 30px 25px 20px;
    position: unset;
    width: 100%;
    top: 0px;
    right: 0px;
  }
`;
export const Recieved = styled.div`
  width: calc(100% - 30px);
  position: relative;
  height: 400px;
  margin-bottom: 50px;
  margin-top: 200px;
  transform: translateY(-50%);
  text-align: center;
  &,
  p,
  h3 {
    color: #f8f8f8;
  }
`;
