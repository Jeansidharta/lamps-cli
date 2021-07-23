import { logIfEnoughVerbosity } from '../verbosity';

export async function test(yargs: any) {
	logIfEnoughVerbosity(0, 'Logging from verbosity 0');
	logIfEnoughVerbosity(1, 'Logging from verbosity 1');
	logIfEnoughVerbosity(2, 'Logging from verbosity 2');

	console.log(`Required arg is ${yargs.requiredArg}`);
	console.log(`Optional arg is ${yargs.optionalArg}`);
}
