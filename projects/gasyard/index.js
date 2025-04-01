const { sumTokensExport } = require("../helper/unwrapLPs");

const gasyardGateway = "0xe11a5e282b3b42bbff665309536b6f787c2d3f38";

// module.exports.methodology = '';

module.exports = {
    ethereum: {
        tvl: sumTokensExport({
            owner: gasyardGateway,
            fetchCoValentTokens: true
        })
    },
    base: {
        tvl: sumTokensExport({
            owner: gasyardGateway,
            fetchCoValentTokens: true
        })
    },
    bsc: {
        tvl: sumTokensExport({
            owner: gasyardGateway,
            fetchCoValentTokens: true
        })
    },
    arbitrum: {
        tvl: sumTokensExport({
            owner: gasyardGateway,
            fetchCoValentTokens: true
        })
    },

};
