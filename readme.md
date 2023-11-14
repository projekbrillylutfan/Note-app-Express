kata nya ini projek iseng buat app note pake express dan terintregrasi ke DB(posgres dan redis)

fitur yang akan dibuat

notes (collection) (yang akan dibuat) --- _id --- title --- content --- createdAt --- updatedAt

users (collection) - (comming soon) --- _id --- username --- password (hashed) --- other_profile_data

categories (collection) - comming soon --- _id --- name --- notes (referensi ke notes)