-- Lists all the cities of California that can be found in the database hbtn_0d_usa.
-- Result are ordered by ascending cities.id.
SELECT 'id', 'name'
FROM 'cities'
WHERE 'state_id' IN
	(SELECT 'id'
	FROM 'states'
	WHERE 'name' = "California")
ORDER BY 'id';
