const roleMapping = require('roleMapping');
const garbageCollector = require('garbageCollector');
const creepsManagement = require('management.creeps');

module.exports.loop = function () {
	roleMapping.exec();
	creepsManagement.exec();
    garbageCollector.exec();
}