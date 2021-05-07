import React from "react";
import styled from "styled-components";

export const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Note: For AWS Free Tier you will need a credit or debit card. The
          easiest way for Pakistani students is to open a bank account in Meezan
          Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan
          Bank will charge Rs. 1100 for ATM Debit Card and there is a
          requirement of Rs. 100 minimum deposit.{" "}
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    position: absolute;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    left: 0;
    opacity: 0.7;
    background-image: url("/images/login-background.jpg");
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  width: 100%;
`;
