-- migrate:up
CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    content VARCHAR(500) NOT NULL,
    rate DECIMAL(2,1) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT comments_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE comments;
