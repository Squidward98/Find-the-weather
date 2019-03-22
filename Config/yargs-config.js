const argv = require ('yargs')
                    .command('temp', 'Shows the temperature of an specific place.', {
                        description: {
                            alias: 'd',
                            desc: 'Place you want to find',
                            demmand: true
                        }
                    })
                    .help()
                    .argv;

module.exports = {
    argv
}
