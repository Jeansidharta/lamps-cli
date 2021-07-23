import yargs from 'yargs';

let verbosity: number = 0;
export const MAXIMUM_VERBOSITY = 2;

export function setVerbosity(newVerbosity = 0) {
	if (newVerbosity > MAXIMUM_VERBOSITY) {
		throw new Error(
			`verbosity level ${newVerbosity} is larger than maximum verbosity level ${MAXIMUM_VERBOSITY}`,
		);
	}
	verbosity = newVerbosity;
}

export function getVerbosity() {
	return verbosity;
}

export function logIfEnoughVerbosity(minimumVerbosity: number, ...messages: string[]) {
	if (minimumVerbosity <= verbosity) console.log(...messages);
}

export function handleVerbosity(yargs: yargs.Arguments<{ verbosity: number }>) {
	const verbosityLevel = Number(yargs.verbosity || 0);

	if (isNaN(verbosityLevel) || !isFinite(verbosityLevel)) {
		console.log('Invalid verbosity level.');
		return;
	}

	if (verbosityLevel > MAXIMUM_VERBOSITY) {
		console.log(`Verbosity level must be between 0 and ${MAXIMUM_VERBOSITY}, inclusive`);
		return;
	}

	setVerbosity(verbosityLevel);
}
