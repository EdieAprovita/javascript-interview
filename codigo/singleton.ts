class Singleton {
	private static instance: Singleton;
	private version: string;

	private constructor(version: string) {
		this.version = version;
	}
	public static getInstance(version: string): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton(version);
		}
		return Singleton.instance;
	}
}

function appSingleton() {
	const singleton1 = Singleton.getInstance("1.0.0");
	const singleton2 = Singleton.getInstance("2.0.0");
	console.log(singleton1.version);
	console.log(singleton2.version);
	console.log(singleton1 === singleton2);
}

appSingleton();
