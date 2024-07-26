-- Crear las tablas PRODUCTS y CATEGORIES
CREATE TABLE
        PRODUCTS (
                PRODUCT_ID INT PRIMARY KEY,
                PRODUCT_NAME VARCHAR(100),
                PRICE DECIMAL(10, 2)
        );


CREATE TABLE
        CATEGORIES (
                CATEGORY_ID INT PRIMARY KEY,
                CATEGORY_NAME VARCHAR(100),
                PRODUCT_ID INT,
                FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS (PRODUCT_ID)
        );


-- Insertar datos en PRODUCTS
INSERT INTO
        PRODUCTS (PRODUCT_ID, PRODUCT_NAME, PRICE)
VALUES
        (1, 'Product 1', 10.00),
        (2, 'Product 2', 20.00),
        (3, 'Product 3', 30.00),
        (4, 'Product 4', 40.00);


-- Insertar datos en CATEGORIES
INSERT INTO
        CATEGORIES (CATEGORY_ID, CATEGORY_NAME, PRODUCT_ID)
VALUES
        (1, 'Category 1', 1),
        (2, 'Category 2', 2),
        (3, 'Category 3', 3),
        (4, 'Category 4', 4);


-- Consulta para obtener todos los registros de PRODUCTS y CATEGORIES
SELECT
        *
FROM
        PRODUCTS;


SELECT
        *
FROM
        CATEGORIES;


-- Consulta para obtener los productos de una categoría en particular
SELECT
        PRODUCTS.PRODUCT_ID,
        PRODUCTS.PRODUCT_NAME,
        PRODUCTS.PRICE,
        CATEGORIES.CATEGORY_ID,
        CATEGORIES.CATEGORY_NAME
FROM
        PRODUCTS
        INNER JOIN CATEGORIES ON PRODUCTS.PRODUCT_ID = CATEGORIES.PRODUCT_ID
WHERE
        CATEGORIES.CATEGORY_NAME = 'Category 1';


-- Crear las tablas CLASSES y MEMBERS
CREATE TABLE
        CLASSES (
                CLASS_ID INT PRIMARY KEY,
                CLASS_NAME VARCHAR(100),
                CLASS_INSTRUCTOR_NAME VARCHAR(100),
                CLASS_DURATION INT,
                CLASS_MAX_CAPACITY INT
        );


CREATE TABLE
        MEMBERS (
                MEMBER_ID INT PRIMARY KEY,
                MEMBER_NAME VARCHAR(100),
                MEMBER_AGE INT,
                MEMBER_EMAIL VARCHAR(100),
                CLASS_ID INT,
                FOREIGN KEY (CLASS_ID) REFERENCES CLASSES (CLASS_ID)
        );


-- Insertar datos en CLASSES
INSERT INTO
        CLASSES (
                CLASS_ID,
                CLASS_NAME,
                CLASS_INSTRUCTOR_NAME,
                CLASS_DURATION,
                CLASS_MAX_CAPACITY
        )
VALUES
        (1, 'Class 1', 'Instructor 1', 60, 20),
        (2, 'Class 2', 'Instructor 2', 60, 20),
        (3, 'Class 3', 'Instructor 3', 60, 20);


-- Insertar datos en MEMBERS
INSERT INTO
        MEMBERS (MEMBER_ID, MEMBER_NAME, MEMBER_AGE, MEMBER_EMAIL, CLASS_ID)
VALUES
        (1, 'Member 1', 20, 'member1@example.com', 1),
        (2, 'Member 2', 20, 'member2@example.com', 2),
        (3, 'Member 3', 20, 'member3@example.com', 3);


-- Consultar todos los registros de CLASSES y MEMBERS
SELECT
        *
FROM
        CLASSES;


SELECT
        *
FROM
        MEMBERS;


SELECT
        CLASS_NAME
FROM
        CLASSES;


SELECT
        CLASS_NAME,
        CLASS_DURATION
FROM
        CLASSES;


SELECT
        CLASS_NAME,
        CLASS_INSTRUCTOR_NAME
FROM
        CLASSES;


SELECT
        MEMBER_NAME
FROM
        MEMBERS;


SELECT
        MEMBER_NAME,
        MEMBER_AGE
FROM
        MEMBERS;