CREATE TABLE INSTRUCTURS (
        INSTRUCTORID INT PRIMARY KEY,
        FIRSTNAME VARCHAR(50),
        LASTNAME VARCHAR(50),
        AGE INT,
        EMAIL VARCHAR(100),
        LOADDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE STUDENTS (
        STUDENTID INT PRIMARY KEY,
        FIRSTNAME VARCHAR(50),
        LASTNAME VARCHAR(50),
        AGE INT,
        EMAIL VARCHAR(100),
        LOADDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UPDATEDATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE COURSES (
        COURSE INT PRIMARY KEY,
        COURSENAME VARCHAR(100),
        DESCRIPTION TEXT,
        INSTRUCTORID INT,
        DURATIONHOURS INT,
        LOAD_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UPDATE_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (INSTRUCTORID) REFERENCES INSTRUCTURS(INSTRUCTORID)
);

CREATE TABLE STUDENT_COURSE (
        STUDENT_COURSE_ID INT PRIMARY KEY,
        STUDENTID INT,
        COURSEID INT,
        ENROLLMENT_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        LOAD_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UPDATE_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (STUDENTID) REFERENCES STUDENTS(STUDENTID),
        FOREIGN KEY (COURSEID) REFERENCES COURSES(COURSEID)
);