#!/usr/bin/env node

import yargs from 'yargs';
import { turnOff } from './commands/turnoff';
import { turnOn } from './commands/turnon';
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
		'turnon [lampnames..]',
		'Turns on a list of lamps',
		() => {},
		async yargs => {
			handleVerbosity(yargs);
			try {
				await turnOn(yargs);
			} catch (e) {
				console.log(e.message);
			}
		},
	)
	.command(
		'turnoff [lampnames..]',
		'Turns off a list of lamps',
		() => {},
		async yargs => {
			handleVerbosity(yargs);
			try {
				await turnOff(yargs);
			} catch (e) {
				console.log(e.message);
			}
		},
	)
	.demandCommand(1, 1) // demmand at least one command
	.strict() // Makes sure only specified options/commmands are accepted
	.help(); // Creates a help option

if (false) console.log(argv);
