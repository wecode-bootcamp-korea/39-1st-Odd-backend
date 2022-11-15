-- migrate:up
CREATE TABLE users_address (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address VARCHAR(200) NOT NULL,
    CONSTRAINT address_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) 
);
-- migrate:down

