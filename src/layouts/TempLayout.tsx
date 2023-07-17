import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Lottie from 'react-lottie';

import useShortenerStore, { ShortenerState } from '../store/useShortenerStore';
import linkAnimationData from '../lotties/link.json';
import loaderAnimationData from '../lotties/loader.json';

const TempLayout = () => {
  const { generatedURL } = useParams();
  const { getLink, isErrored, isLoading, redirectURL }: ShortenerState = useShortenerStore();

  const linkDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: linkAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const loaderDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    if (generatedURL) {
      getLink(generatedURL);
    }
  }, []);

  useEffect(() => {
    if (redirectURL && !isErrored && !isLoading) {
      console.log(`redirecting to ${redirectURL}`);
      window.location.href = redirectURL;
    }
  }, [redirectURL, isErrored, isLoading]);

  return (
    <div>
      {isLoading && (
        <Lottie
          options={loaderAnimationData}
          height={160}
          width={160}
        />
      )}
      {isErrored && <span>404</span>}
      {!isErrored && !isLoading && (
        <Lottie
          options={linkDefaultOptions}
          height={160}
          width={160}
        />
      )}
    </div>
  );
};

export default TempLayout;
