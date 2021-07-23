import { sendLampAction } from '../lamps-api';
import { resolveTargetIdFromNamesArray } from '../lib/resolve-target-ids';
import { logIfEnoughVerbosity } from '../verbosity';

export async function turnOn(yargs: any) {
	const targets = resolveTargetIdFromNamesArray(yargs.lampnames || []);

	try {
		await sendLampAction(targets, 'set_power', ['on', 'smooth', 100, 0]);
		logIfEnoughVerbosity(0, 'Lamps successfuly turned on');
	} catch (e) {
		logIfEnoughVerbosity(0, 'Error turning lamps on:', e);
	}
}
