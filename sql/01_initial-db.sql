CREATE TABLE users(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  age INT DEFAULT NULL
);

INSERT INTO users (name, email, age) VALUES
('test', 'test@example.com', 20),
('test2', 'test2@example.com', 22),
('test3', 'test3@example.com', 23),
('test4', 'test4@example.com', 24),
('test5', 'test5@example.com', 25);