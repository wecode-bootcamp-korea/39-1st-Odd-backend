-- migrate:up
CREATE TABLE product_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    CONSTRAINT image_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE product_images;
