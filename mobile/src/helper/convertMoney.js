function convertToMoney(num, digits) {
    var si = [{
            value: 1,
            symbol: ""
        },
        {
            value: 1e3,
            symbol: " NGHÌN"
        },
        {
            value: 1e6,
            symbol: " TRIỆU"
        },
        {
            value: 1e9,
            symbol: " TỶ"
        }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (
        (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
    );
};

function formatNumber(x, separator, floatSeparator, fixedPoint) {
    if (!separator) separator = ",";
    else separator = separator[0] || ",";
    if (!floatSeparator) floatSeparator = ".";
    else floatSeparator = floatSeparator[0] || ".";
    fixedPoint = fixedPoint || 0;
    var parts = x.toString().split(".");
    return (
        parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator) +
        (parts[1] && fixedPoint >= 0 ?
            floatSeparator +
            (fixedPoint >= 0 ?
                parseFloat(parts[1]).toFixed(fixedPoint) :
                parts[1]) :
            "")
    );
}
export { convertToMoney , formatNumber}