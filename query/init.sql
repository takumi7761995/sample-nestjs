CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (id, name, email) VALUES
(1, '太郎', 'taro@mail.com'),
(2, '次郎', 'jiro@mail.com')
ON CONFLICT DO NOTHING;