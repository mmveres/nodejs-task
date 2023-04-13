CREATE TABLE Concerts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    duration TIME NOT NULL,
    description TEXT NOT NULL,
    address VARCHAR(255) NOT NULL,
    age_limit INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Visitors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE Categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE Concerts_Categories (
    concert_id INT,
    category_id INT,
    PRIMARY KEY (concert_id, category_id),
    FOREIGN KEY (concert_id) REFERENCES Concerts(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);