-- Table 1: create blog table
CREATE TABLE blog(
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(500) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    author VARCHAR(100) NOT NULL,
    content TEXT NOT NULL
);

-- Table 2: create category table
CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Table 3: Junction Table for blog and category
CREATE TABLE blog_category(
    blog_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY (blog_id, category_id),
    FOREIGN KEY (blog_id) REFERENCES blog(blog_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE
);

-- Index blog table for faster queries for getting most recent data in date order
CREATE INDEX idx_blog_date ON blog(date DESC);

-- Index blog_category junction tabel for faster queries on getting all blogs of a ceratin category
CREATE INDEX idx_blog_category_category_id ON blog_category(category_id);