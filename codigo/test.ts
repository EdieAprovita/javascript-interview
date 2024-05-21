const versions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function isBadVersion(version: number): boolean {
	return version >= 2;
}

function firstBadVersion(versions: number[]): number | void {
	for (let version of versions) {
		if (isBadVersion(version)) {
			return version;
		}
	}
	return console.log("No bad version found");
}

console.log(firstBadVersion(versions));
