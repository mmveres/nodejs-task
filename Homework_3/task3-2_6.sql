    SELECT u.id AS user_id, u.name AS user_name, u.avatar_url, c.photo_url AS channel_photo, c.description AS channel_description, c.created_at AS channel_creation_date
    FROM users u
    JOIN channels c ON u.id = c.user_id
    ORDER BY c.created_at DESC;

    SELECT v.id AS video_id, v.title, v.preview_url, v.duration, v.published_at, COUNT(l.video_id) AS like_count
    FROM videos v
    LEFT JOIN likes l ON v.id = l.video_id AND l.positive = TRUE
    GROUP BY v.id
    ORDER BY like_count DESC
    LIMIT 5;

    SELECT v.id AS video_id, v.title, v.preview_url, v.duration, v.published_at
    FROM videos v
    JOIN subscriptions s ON v.channel_id = s.channel_id
    JOIN users u ON s.user_id = u.id
    WHERE u.name = 'Stephanie Bulger'
    ORDER BY v.published_at DESC;

    SELECT c.id AS channel_id, c.description AS channel_description, COUNT(s.id) AS subscriber_count
    FROM channels c
    LEFT JOIN subscriptions s ON c.id = s.channel_id
    WHERE c.id = '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76'
    GROUP BY c.id;

    SELECT v.id AS video_id, v.title, v.preview_url, v.duration, v.published_at,
    COUNT(CASE WHEN l.positive = TRUE THEN 1 END) AS like_count,
    COUNT(CASE WHEN l.positive = FALSE THEN 1 END) AS dislike_count
    FROM videos v
    JOIN likes l ON v.id = l.video_id
    WHERE v.published_at >= '2021-09-01' AND l.positive = TRUE
    GROUP BY v.id
    HAVING COUNT(CASE WHEN l.positive = TRUE THEN 1 END) > 4
    ORDER BY like_count DESC
    LIMIT 10;

    SELECT u.name AS channel_name, u.avatar_url AS channel_avatar, c.photo_url AS channel_photo,
        c.description AS channel_description, s.level AS subscription_level, s.subscribed_at AS subscription_date
    FROM subscriptions AS s
    JOIN channels AS c ON s.channel_id = c.id
    JOIN users AS u ON c.user_id = u.id
    WHERE s.user_id = (
    SELECT id FROM users WHERE name = 'Ennis Haestier'
    )
    ORDER BY CASE s.level
    WHEN 'vip' THEN 1
    WHEN 'follower' THEN 2
    WHEN 'fan' THEN 3
    WHEN 'standard' THEN 4
    END, s.subscribed_at DESC;