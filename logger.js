var logger = null;

function init(log_level) {
    logger = exports;
    logger.debugLevel = 'INFO';
    if (log_level != undefined) {
        logger.debugLevel = log_level;
    }
}
module.exports.init = init;

function log(level, date, message) {
    if (!logger) {
        console.error("Logger is not initialized");
    }
    else {
        var levels = ['ERROR', 'WARN', 'INFO', 'DEBUG'];
        if (levels.indexOf(level) <= levels.indexOf(logger.debugLevel)) {
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
            }
            if (level == 'ERROR') {
                console.error('('+level + ' : '+date+') ' + message);
            }
            else if (level == 'DEBUG'){
                console.log('('+level + ' : '+date+') ' + message);
            }
            else if(level == 'WARN'){
                console.log('('+level + '  : '+date+') ' + message);
            }
            else if(level == 'INFO'){
                console.log('('+level + '  : '+date+') ' + message);
            }
        }
    }
}
module.exports.log = log;


function getFormattedNow() {
    var date = new Date();

    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1; //months from 1-12
    var year = date.getUTCFullYear();

    return day + "/" + month + "/" + year + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
}

function info(message) {
    log('INFO', getFormattedNow(), message);
}
module.exports.info = info;

function warn(message) {
    log('WARN', getFormattedNow(), message);
}
module.exports.warn = warn;

function error(message) {
    log('ERROR', getFormattedNow(), message);
}
module.exports.error = error;

function debug(message) {
    log('DEBUG', getFormattedNow(), message);
}
module.exports.debug = debug;

function setTraceLevel(val) {
    if (val == 0) {
        logger.debugLevel = null;
        return 'No traces will be displayed';
    }
    else if (val == 1) {
        logger.debugLevel = 'ERROR';
        return 'Trace level set to : ERROR';
    }
    else if (val == 2) {
        logger.debugLevel = 'WARN';
        return 'Trace level set to : WARN';
    }
    else if (val == 3) {
        logger.debugLevel = 'INFO';
        return 'Trace level set to : INFO';
    }
    else if (val == 4) {
        logger.debugLevel = 'DEBUG';
        return 'Trace level set to : DEBUG';
    }
    else {
        logger.debugLevel = null;
        return "Incorrect parameter, no traces will be displayed";
    }
}
module.exports.setTraceLevel = setTraceLevel;

function getTraceLevel() {
    return logger.debugLevel;
}
module.exports.getTraceLevel = getTraceLevel;


