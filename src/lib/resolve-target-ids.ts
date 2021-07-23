const LAMP_ID_JEAN = 361773898;
const LAMP_ID_TV = 392094406;
const LAMP_ID_MIDDLE = 392100665;
const LAMP_ID_WINDOW = 360880487;
const LAMP_ID_RAFA = 392100092;

const nameToIdResolver = {
	jean: LAMP_ID_JEAN,
	tv: LAMP_ID_TV,
	middle: LAMP_ID_MIDDLE,
	window: LAMP_ID_WINDOW,
	rafa: LAMP_ID_RAFA,
	kitchen: [LAMP_ID_MIDDLE, LAMP_ID_WINDOW],
	all: [LAMP_ID_JEAN, LAMP_ID_TV, LAMP_ID_MIDDLE, LAMP_ID_WINDOW, LAMP_ID_RAFA],
};

export function resolveTargetIdFromName(lampName: string) {
	return (nameToIdResolver as any)[lampName] as number | number[] | undefined;
}

export function getPossibleLampNames() {
	return Object.keys(nameToIdResolver);
}

export function getDefaultLampId() {
	return LAMP_ID_JEAN;
}

export function resolveTargetIdFromNamesArray(lampNames: string[]) {
	const targets: number[] = [];
	for (const name of lampNames) {
		const target = resolveTargetIdFromName(name);
		if (!target) {
			throw new Error(
				`Could not resolve id of lamp ${target}. Valid lamps are ${getPossibleLampNames().join(
					', ',
				)}`,
			);
		}
		if (Array.isArray(target)) targets.push(...target);
		else targets.push(target);
	}
	if (targets.length === 0) targets.push(getDefaultLampId());
	return targets;
}
