export const BASE_URL = 'https://www.ee979.com';
// export const API_URL = 'https://api.ee979.com/api';
// export const API_URL = 'https://dev.ee979.com/api';
export const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.ee979.com/api' : 'https://dev.ee979.com/api';

export const ALI_URL = 'https://ee979-tmp.oss-cn-hangzhou.aliyuncs.com';