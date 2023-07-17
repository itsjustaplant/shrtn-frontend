import axios from 'axios';

const BASE_URL = import.meta.env.PROD ? 'https://justaplant.dev/api' : 'http://localhost:8081/';

import { GetRequestResponse } from '../types';

export const postLinkRequest = async (link: string) => {
  try {
    const res = await axios.post(BASE_URL, { original_url: link });
    const { data: { generated_url: generatedURL } } = res;
    return generatedURL;
  } catch (e) {
    return false;
  }
};

export const getLinkRequest = async (link: string): Promise<GetRequestResponse> => {
  try {
    const res = await axios.get(`${BASE_URL}${link}`);
    const { data: { status_code: statusCode, original_url: originalURL } } = res;
    return { statusCode, originalURL };
  } catch (e) {
    return { statusCode: '404', originalURL: 'empty' };
  }
};
