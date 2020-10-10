const logger = require('helpers.logger');

const verifyHaversters = () => {
    const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    
    const { length: actualQuantity } = harvesters;
    const idealQuantity = 4;
    
    logger.info('Harvesters: ' + actualQuantity);

    if(actualQuantity < idealQuantity) {
        const newName = 'Harvester' + Game.time;
        logger.info('Spawning new harvester: ' + newName);
        Game.spawns['Spinning Spawn'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'harvester'}});
    }
}

const verifyBuilders = () => {
    const builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    const { length: actualQuantity } = builders;
    const idealQuantity = 4;

    logger.info('Builders: ' + actualQuantity);

    if(actualQuantity < idealQuantity) {
        const newName = 'builder' + Game.time;
        logger.info('Spawning new builder: ' + newName);
        Game.spawns['Spinning Spawn'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'builder'}});
    }
}

const verifyUpgraders = () => {
    const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
    const { length: actualQuantity } = upgraders;
    const idealQuantity = 2;
    
    logger.info('upgraders: ' + actualQuantity);

    if(actualQuantity < idealQuantity) {
        const newName = 'upgrader' + Game.time;
        logger.info('Spawning new upgrader: ' + newName);
        Game.spawns['Spinning Spawn'].spawnCreep([WORK,CARRY,MOVE], newName,
            {memory: {role: 'upgrader'}});
    }
}

module.exports = {
    exec: () => {
        verifyHaversters();
        verifyBuilders();
        verifyUpgraders();

        if(Game.spawns['Spinning Spawn'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Spinning Spawn'].spawning.name];
            Game.spawns['Spinning Spawn'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spinning Spawn'].pos.x + 1, 
                Game.spawns['Spinning Spawn'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
    }
}
