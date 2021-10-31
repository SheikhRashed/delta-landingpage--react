import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  margin-top: 4rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1100px) {
    grid-row-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// Feature card
export const FeatureColumn = styled(motion.div)`
  padding: 24px;
  display: flex;
  cursor: pointer;
  flex-flow: column;
  align-items: center;
  border-radius: 20px;
  background: #f3f3f3;
  justify-content: center;
  transition: all 0.3s linear;
  &:hover {
    box-shadow: 0 0 32px 8px #d0d0d0;
  }
`;

export const FeatureImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  border-radius: 50%;
  border-radius: 50%;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
  border: 2px solid #000;
  svg {
    width: 40px;
    height: 40px;
  }
`;
export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;
  /* 
  @media screen and (max-width: 768px) {
    display: none;
  } */
`;
