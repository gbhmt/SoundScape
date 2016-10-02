# Database Schema

## users
column name     | data type | details
----------------|-----------|------------------------
id              | integer   | not null, primary key
username        | string    | not null, unique, indexed
email           | string    | not null, unique, indexed
password_digest | string    | not null, 
session_token   | string    | not null, unique, indexed

## tracks
column name     | data type | details
----------------|-----------|-------------------------
id              | integer   | not null, primary key
title           | string    | not null
description     | string    | not null
track_url       | string    | not null
track_img_url   | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed

## playlists
column name     | data type | details
----------------|-----------|-------------------------
id              | integer   | not null, primary key
title           | string    | not null
description     | string    | not null
playlist_img_url| string    | not null
user_id         | integer   | not null, foreign key (references users), indexed

## playlist_adds
column name    | data type  | details
---------------|------------|-------------------------
id             | integer    | not null, primary key
playlist_id    | integer    | not null, foreign key (references playlists), indexed
track_id       | integer    | not null, foreign key (references tracks), indexed

## comments
column name      | data type  | details
-----------------|------------|-------------------------
id               | integer    | not null, primary key
body             | text       | not null
user_id          | integer    | not null, foreign key (references users), indexed
commentable_id   | integer    | not null, foreign key (references playlists or tracks), indexed
commentable_type | string     | not null
