const {
    REACT_APP_PRODUCTION : productionAPI
} = process.env

const config = {
    productionSocket : productionAPI,
    productionAPI : `${productionAPI}/api/`
}

export default config