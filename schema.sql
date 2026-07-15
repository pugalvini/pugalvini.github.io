CREATE TABLE task_node (
    id         SERIAL PRIMARY KEY,
    start_date DATE,
    end_date   DATE,
    text       TEXT,       
    tag        TEXT,
    parent_id  INTEGER,
    path       TEXT
);

ALTER TABLE task_node
    ADD CONSTRAINT fk_task_node_parent
    FOREIGN KEY (parent_id) REFERENCES task_node(id) ON DELETE SET NULL;

CREATE TABLE "user" (
    id       SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE
);

CREATE TABLE role (
    id   SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE permission (
    id   SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE user_role (
    user_id INTEGER NOT NULL REFERENCES user(id),
    node_id INTEGER NOT NULL REFERENCES task_node(id),
    role_id INTEGER NOT NULL REFERENCES role(id),

    PRIMARY KEY (user_id, node_id, role_id)
);

CREATE TYPE node_scope AS ENUM ('node_only', 'descendants', 'ancestors');

CREATE TABLE role_permission (
    role_id       INTEGER    NOT NULL REFERENCES role(id),
    permission_id INTEGER    NOT NULL REFERENCES permission(id),
    node_scope    node_scope NOT NULL,

    PRIMARY KEY (role_id, permission_id, node_scope)
);

-- Sample query to get all permissions for a user on a specific node
SELECT
    p.name AS permission,
    r.name AS granted_by_role,
    rp.node_scope AS granted_via_scope,
    ur.node_id AS granted_from_node_id,
    gn.text AS granted_from_node_name

FROM task_node target
JOIN task_node gn ON (
    (gn.id = target.id)
    OR
    (target.path LIKE gn.path || '%' AND gn.id != target.id)
    OR
    (gn.path LIKE target.path || '%' AND gn.id != target.id)
)

JOIN user_role ur ON ur.node_id = gn.id
                 AND ur.user_id = :userId

JOIN role_permission rp ON rp.role_id = ur.role_id
                       AND rp.node_scope = CASE
                           WHEN gn.id = target.id THEN 'node_only'
                           WHEN target.path LIKE gn.path || '%' THEN 'ancestors'
                           WHEN gn.path LIKE target.path || '%' THEN 'descendants'
                       END::node_scope

JOIN permission p ON p.id = rp.permission_id
JOIN role r ON r.id = ur.role_id

WHERE target.id = :targetNodeId
ORDER BY p.name, r.name;