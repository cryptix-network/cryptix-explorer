let SOCKET_SERVER = process.env.WS_SERVER || "http://localhost:8001";
let SUFFIX = ""
let API_SERVER = process.env.REACT_APP_API_SERVER || "http://localhost:8000"
let ADDRESS_PREFIX = "cryptix:";
let CRYPTIX_UNIT = "CYTX";

let BPS = 1

switch (process.env.REACT_APP_NETWORK) {
    case "testnet-10":
        SOCKET_SERVER = "http://localhost:8000";
        ADDRESS_PREFIX = "cryptixtest:"
        if (!API_SERVER) {
            API_SERVER = "http://localhost:8001"
        }
        SUFFIX = " TN10"
        CRYPTIX_UNIT = "TCYTX"
        break;
    case "testnet-11":
        SOCKET_SERVER = "http://localhost:8000";
        ADDRESS_PREFIX = "cryptixtest:"
        if (!API_SERVER) {
            API_SERVER = "http://localhost:8001"
        }
        SUFFIX = " TN11"
        CRYPTIX_UNIT = "TCYTX"
        BPS = 10
        break;

    // mainnet
    default:
        SOCKET_SERVER = "http://localhost:8000";
        if (!API_SERVER) {
            API_SERVER = "http://localhost:8001"
        }
        break;
}

export { SOCKET_SERVER, SUFFIX, API_SERVER, ADDRESS_PREFIX, BPS, CRYPTIX_UNIT }