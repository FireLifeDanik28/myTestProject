--CREATE TABLE grades (
--    id SERIAL PRIMARY KEY,
--    student_id INTEGER NOT NULL,
--    course_id INTEGER NOT NULL,
--    grade INTEGER NOT NULL,
--    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--)
INSERT INTO grades (student_id, course_id, grade) VALUES
(1, 1, 5),
(1, 1, 2),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6),
(14, 1, 6);