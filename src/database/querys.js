export default { 
    getAll: `SELECT * FROM Movies`,
    createMovie: 'INSERT INTO Movies (Titulo, Director, Comentario, Actores, Year, Trailer) VALUES (@titulo, @director, @comentario, @actores, @year, @trailer)',
    getById: `SELECT * FROM Movies WHERE ID = @id`,
    delete: `DELETE FROM Movies WHERE ID = @id`,
    update: `UPDATE Movies SET Titulo = @titulo, Director = @director, Comentario = @comentario, Actores = @actores, Year = @year, Trailer = @trailer WHERE ID = @id`
}