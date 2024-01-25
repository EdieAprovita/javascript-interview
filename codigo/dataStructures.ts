import axios from "axios";

interface StudentList {
	n: number;
	m: number;
	ids: number[];
}

interface Student {
	id: number;
	name: string;
	surname: string;
	pga: number;
	scholarship: boolean;
}

interface Error {
	message: string;
}

const canClassBeDivided = async () => {
	try {
		// Obtén la lista de estudiantes
		const { data: studentList } = await axios.get<StudentList>(
			"http://localhost/studentList"
		);

		const studentSurnames: { [key: string]: number } = {};

		// Mapear sobre cada ID de estudiante y crear una lista de promesas
		const studentPromises = studentList.ids.map(id =>
			axios.get<Student | Error>(`http://localhost/student?student_id=${id}`)
		);

		// Resolver todas las promesas
		const studentResults = await Promise.all(studentPromises);

		for (const result of studentResults) {
			const studentOrError = result.data;

			if ("message" in studentOrError) {
				console.log("Error retrieving student:", studentOrError.message);
				continue;
			}

			const student = studentOrError as Student;

			// If the surname already exists in the object, the class can't be divided
			if (student.surname in studentSurnames) {
				console.log("The class cannot be divided");
				return;
			} else {
				// Add the surname to the object
				studentSurnames[student.surname] = 1;
			}
		}

		console.log("The class can be divided");
	} catch (error) {
		console.log("Error retrieving the student list:", error.message);
	}
};

canClassBeDivided();
