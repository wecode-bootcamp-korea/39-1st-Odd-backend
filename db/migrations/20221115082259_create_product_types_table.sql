-- migrate:up
CREATE TABLE product_types (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

-- migrate:down

