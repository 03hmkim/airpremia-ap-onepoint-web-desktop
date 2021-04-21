import Lottie from 'react-lottie';
import animationData from 'public/images/loading.json';
import styled from 'styled-components';

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.container className="loading">
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
      />
    </S.container>
  );
}

const S = {
  container: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.85);
    z-index: 50;
  `,
};

export default Loading;
