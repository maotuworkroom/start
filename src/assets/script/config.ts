export const deploy = true;
export let endpoint = "https://api.fystart.com";
export let openai_endpoint = "wss://api.chatnio.net";
export const qweather = "3aeef1a01ee248f0bf913993fe3491b4";

if (!deploy) endpoint = "http://localhost:8001";
