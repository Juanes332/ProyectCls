const development = {
    API_URL: 'http://10.187.19.137/WSTest/',
}

const production = {
    API_URL: 'http://test/WSTest',
}

const config = process.env.NODE_ENV === 'development' ? development : production;

export default config;