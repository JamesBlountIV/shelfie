UPDATE shelfie
SET name = $1 WHERE product_id = $1,
SET description = $2 WHERE product_id = $1,
SET price = $3 WHERE product_id = $1,
SET image_url = $4 WHERE product_id = $1