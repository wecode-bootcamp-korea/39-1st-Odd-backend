-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_status_id INT NOT NULL,
    user_address_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT orders_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status(id),
    CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT orders_user_address_id_fkey FOREIGN KEY (user_address_id) REFERENCES user_address(id)
);
-- migrate:down
DROP TABLE orders;
