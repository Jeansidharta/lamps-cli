import yargs from 'yargs';
import { test } from './commands/test';
import { handleVerbosity, MAXIMUM_VERBOSITY } from './verbosity';

const { argv } = yargs
	.option('verbosity', {
		type: 'number',
		alias: ['v', 'verbose'],
		default: 0,
		requiresArg: false,
		description: `The verbosity level of the command. Number. Default is 0. Higher numbers makes more verbosity. Lower numbers, less verbosity. A verbosity smaller than 0 is silent. Maximum verbosity level is ${MAXIMUM_VERBOSITY}.`,
	})
	.command(
		'test <requiredArg> [optionalArg]',
		'forces worker process to check for an update on all hostnames',
		() => {},
		yargs => {
			handleVerbosity(yargs);
			test(yargs);
		},
	)
	.demandCommand(1, 1) // demmand at least one command
	.strict() // Makes sure only specified options/commmands are accepted
	.help(); // Creates a help option

if (false) console.log(argv);
