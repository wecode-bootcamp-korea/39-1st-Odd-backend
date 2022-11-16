-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(10000) NOT NULL,
    price VARCHAR(100) NOT NULL,
    thumbnail_image_url VARCHAR(500) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id) 
);

-- migrate:down
DROP TABLE products;
