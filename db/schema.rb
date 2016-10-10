# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161010035300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string   "body",             null: false
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "author_id",        null: false
  end

  add_index "comments", ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                                null: false
    t.text     "description",             default: ""
    t.integer  "user_id",                              null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "track_file_file_name"
    t.string   "track_file_content_type"
    t.integer  "track_file_file_size"
    t.datetime "track_file_updated_at"
  end

  add_index "tracks", ["user_id"], name: "index_tracks_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                                       null: false
    t.string   "password_digest",                             null: false
    t.string   "session_token",                               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "profile_picture_file_name"
    t.string   "profile_picture_content_type"
    t.integer  "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
    t.string   "display_name",                   default: ""
    t.string   "first_name",                     default: ""
    t.string   "last_name",                      default: ""
    t.string   "city",                           default: ""
    t.string   "country",                        default: ""
    t.string   "header_background_file_name"
    t.string   "header_background_content_type"
    t.integer  "header_background_file_size"
    t.datetime "header_background_updated_at"
    t.text     "bio",                            default: ""
  end

  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree

end
