import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import svg from "./Verivizyon logo.svg";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 3.75 seconds to match the preloader animation duration

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <PreloaderContainer>
                <SvgLogo src={svg} />
            </PreloaderContainer>
        );
    }


};

export default Preloader;

const filler = keyframes`
  0% {
    transform: scale(.97);
  }
  25% {
    opacity: 1;
    transform: scale(1)
  }
  65% {
    opacity: 1;
    transform: scale(1)
  }
  100% {
    opacity: .5;
    transform: scale(.925);
  }
`;

const background = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const PreloaderContainer = styled.div`
  background-color: #ffffff;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${background} 0.5s ease-out 2s both;
`;

const SvgLogo = styled.img`
  position: absolute;
  width: 30vw;
  opacity: 0.2;
  animation: ${filler} 2s ease-in-out 1s both;

  &#progress.start {
    animation: ${filler} 1.2s cubic-bezier(0.3, 0.3, 0.3, 1) 1.5s both;
  }
`;

const MainContent = styled.div`
  /* Add your main content styles here */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;
