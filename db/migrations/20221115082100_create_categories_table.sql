-- migrate:up
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_type_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    CONSTRAINT category_product_type_id_fkey FOREIGN KEY (product_type_id) REFERENCES product_types(id)
);


-- migrate:down
DROP TABLE categories;
