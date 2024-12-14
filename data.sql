-- Insertar datos dummy en la tabla Usuarios
INSERT INTO Usuarios (nombre, apellido, email, contraseña, rol, apiKey) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'pass123', 'admin', 'apiKey1'),
('María', 'Gómez', 'maria.gomez@example.com', 'pass123', 'user', 'apiKey2'),
('Carlos', 'López', 'carlos.lopez@example.com', 'pass123', 'user', 'apiKey3'),
('Ana', 'Ramírez', 'ana.ramirez@example.com', 'pass123', 'admin', 'apiKey4'),
('Luis', 'Martínez', 'luis.martinez@example.com', 'pass123', 'user', 'apiKey5'),
('Laura', 'Torres', 'laura.torres@example.com', 'pass123', 'user', 'apiKey6'),
('Sofía', 'Díaz', 'sofia.diaz@example.com', 'pass123', 'admin', 'apiKey7'),
('Jorge', 'Hernández', 'jorge.hernandez@example.com', 'pass123', 'user', 'apiKey8'),
('Claudia', 'Mejía', 'claudia.mejia@example.com', 'pass123', 'user', 'apiKey9'),
('Andrés', 'Castro', 'andres.castro@example.com', 'pass123', 'admin', 'apiKey10');

-- Insertar datos dummy en la tabla Referidos
INSERT INTO Referidos (apiKey, nombre, email, estado, fechaRegistro, usuarioReferidor) VALUES
('refApi1', 'Pedro', 'pedro.ref@example.com', 'activo', '2024-01-01', 1),
('refApi2', 'Mónica', 'monica.ref@example.com', 'inactivo', '2024-01-02', 2),
('refApi3', 'Diego', 'diego.ref@example.com', 'activo', '2024-01-03', 3),
('refApi4', 'Camila', 'camila.ref@example.com', 'inactivo', '2024-01-04', 4),
('refApi5', 'Fernanda', 'fernanda.ref@example.com', 'activo', '2024-01-05', 5),
('refApi6', 'Javier', 'javier.ref@example.com', 'activo', '2024-01-06', 6),
('refApi7', 'Isabel', 'isabel.ref@example.com', 'inactivo', '2024-01-07', 7),
('refApi8', 'Tomás', 'tomas.ref@example.com', 'activo', '2024-01-08', 8),
('refApi9', 'Paula', 'paula.ref@example.com', 'inactivo', '2024-01-09', 9),
('refApi10', 'Natalia', 'natalia.ref@example.com', 'activo', '2024-01-10', 10);

-- Insertar datos dummy en la tabla Alumnos
INSERT INTO Alumnos (usuario, referido, tipoEducacion, tipoIdentificacion, numeroIdentificacion, sexo, celular, fechaNacimiento, direccion, municipio) VALUES
(1, NULL, 'primaria', 'DNI', '12345678', 'M', '1234567890', '2010-01-01', 'Calle Falsa 123', 'Bogotá'),
(2, 1, 'secundaria', 'DNI', '23456789', 'F', '2345678901', '2005-02-01', 'Calle Real 456', 'Medellín'),
(3, 2, 'universitaria', 'DNI', '34567890', 'M', '3456789012', '2000-03-01', 'Avenida Central 789', 'Cali'),
(4, 3, 'primaria', 'DNI', '45678901', 'F', '4567890123', '2012-04-01', 'Diagonal 123', 'Cartagena'),
(5, 4, 'secundaria', 'DNI', '56789012', 'M', '5678901234', '2008-05-01', 'Transversal 456', 'Barranquilla'),
(6, 5, 'universitaria', 'DNI', '67890123', 'F', '6789012345', '1998-06-01', 'Calle 789', 'Pereira'),
(7, 6, 'primaria', 'DNI', '78901234', 'M', '7890123456', '2011-07-01', 'Carrera 123', 'Manizales'),
(8, 7, 'secundaria', 'DNI', '89012345', 'F', '8901234567', '2006-08-01', 'Avenida Siempre Viva', 'Armenia'),
(9, 8, 'universitaria', 'DNI', '90123456', 'M', '9012345678', '1999-09-01', 'Boulevard 456', 'Cúcuta'),
(10, 9, 'primaria', 'DNI', '01234567', 'F', '0123456789', '2013-10-01', 'Camino del Sol', 'Bucaramanga');

-- Insertar datos dummy en la tabla Incentivos
INSERT INTO Incentivos (tipo, valor) VALUES
('descuento', 10.5),
('bono', 20.0),
('credito', 15.75),
('descuento', 12.3),
('bono', 25.5),
('credito', 18.0),
('descuento', 8.0),
('bono', 30.0),
('credito', 22.0),
('descuento', 5.0);

-- Insertar datos dummy en la tabla UsuarioIncentivo
-- Insertar datos dummy en la tabla Usuarios
INSERT INTO Usuarios (nombre, apellido, email, contraseña, rol, apiKey) VALUES
('Juan', 'Pérez', 'juan.perez@example.com', 'pass123', 'admin', 'apiKey1'),
('María', 'Gómez', 'maria.gomez@example.com', 'pass123', 'user', 'apiKey2'),
('Carlos', 'López', 'carlos.lopez@example.com', 'pass123', 'user', 'apiKey3'),
('Ana', 'Ramírez', 'ana.ramirez@example.com', 'pass123', 'admin', 'apiKey4'),
('Luis', 'Martínez', 'luis.martinez@example.com', 'pass123', 'user', 'apiKey5'),
('Laura', 'Torres', 'laura.torres@example.com', 'pass123', 'user', 'apiKey6'),
('Sofía', 'Díaz', 'sofia.diaz@example.com', 'pass123', 'admin', 'apiKey7'),
('Jorge', 'Hernández', 'jorge.hernandez@example.com', 'pass123', 'user', 'apiKey8'),
('Claudia', 'Mejía', 'claudia.mejia@example.com', 'pass123', 'user', 'apiKey9'),
('Andrés', 'Castro', 'andres.castro@example.com', 'pass123', 'admin', 'apiKey10');

-- Insertar datos dummy en la tabla Referidos
INSERT INTO Referidos (apiKey, nombre, email, estado, fechaRegistro, usuarioReferidor) VALUES
('refApi1', 'Pedro', 'pedro.ref@example.com', 'activo', '2024-01-01', 1),
('refApi2', 'Mónica', 'monica.ref@example.com', 'inactivo', '2024-01-02', 2),
('refApi3', 'Diego', 'diego.ref@example.com', 'activo', '2024-01-03', 3),
('refApi4', 'Camila', 'camila.ref@example.com', 'inactivo', '2024-01-04', 4),
('refApi5', 'Fernanda', 'fernanda.ref@example.com', 'activo', '2024-01-05', 5),
('refApi6', 'Javier', 'javier.ref@example.com', 'activo', '2024-01-06', 6),
('refApi7', 'Isabel', 'isabel.ref@example.com', 'inactivo', '2024-01-07', 7),
('refApi8', 'Tomás', 'tomas.ref@example.com', 'activo', '2024-01-08', 8),
('refApi9', 'Paula', 'paula.ref@example.com', 'inactivo', '2024-01-09', 9),
('refApi10', 'Natalia', 'natalia.ref@example.com', 'activo', '2024-01-10', 10);

-- Insertar datos dummy en la tabla Alumnos
INSERT INTO Alumnos (usuario, referido, tipoEducacion, tipoIdentificacion, numeroIdentificacion, sexo, celular, fechaNacimiento, direccion, municipio) VALUES
(1, NULL, 'primaria', 'DNI', '12345678', 'M', '1234567890', '2010-01-01', 'Calle Falsa 123', 'Bogotá'),
(2, 1, 'secundaria', 'DNI', '23456789', 'F', '2345678901', '2005-02-01', 'Calle Real 456', 'Medellín'),
(3, 2, 'universitaria', 'DNI', '34567890', 'M', '3456789012', '2000-03-01', 'Avenida Central 789', 'Cali'),
(4, 3, 'primaria', 'DNI', '45678901', 'F', '4567890123', '2012-04-01', 'Diagonal 123', 'Cartagena'),
(5, 4, 'secundaria', 'DNI', '56789012', 'M', '5678901234', '2008-05-01', 'Transversal 456', 'Barranquilla'),
(6, 5, 'universitaria', 'DNI', '67890123', 'F', '6789012345', '1998-06-01', 'Calle 789', 'Pereira'),
(7, 6, 'primaria', 'DNI', '78901234', 'M', '7890123456', '2011-07-01', 'Carrera 123', 'Manizales'),
(8, 7, 'secundaria', 'DNI', '89012345', 'F', '8901234567', '2006-08-01', 'Avenida Siempre Viva', 'Armenia'),
(9, 8, 'universitaria', 'DNI', '90123456', 'M', '9012345678', '1999-09-01', 'Boulevard 456', 'Cúcuta'),
(10, 9, 'primaria', 'DNI', '01234567', 'F', '0123456789', '2013-10-01', 'Camino del Sol', 'Bucaramanga');

-- Insertar datos dummy en la tabla Incentivos
INSERT INTO Incentivos (tipo, valor) VALUES
('descuento', 10.5),
('bono', 20.0),
('credito', 15.75),
('descuento', 12.3),
('bono', 25.5),
('credito', 18.0),
('descuento', 8.0),
('bono', 30.0),
('credito', 22.0),
('descuento', 5.0);

-- Insertar datos dummy en la tabla UsuarioIncentivo
INSERT INTO UsuarioIncentivo (usuario, incentivo, fechaAsignacion, estado) VALUES
(1, 1, '2024-01-01', true),
(2, 2, '2024-01-02', true),
(3, 3, '2024-01-03', true),
(4, 4, '2024-01-04', true),
(5, 5, '2024-01-05', true),
(6, 6, '2024-01-06', true),
(7, 7, '2024-01-07', true),
(8, 8, '2024-01-08', true),
(9, 9, '2024-01-09', true),
(10, 10, '2024-01-10', false);

-- Insertar datos dummy en la tabla Notificaciones
INSERT INTO Notificaciones (mensaje, fechaEnvio, destinatario, tipoUsuario, idReferencia) VALUES
('Bienvenido al sistema', '2024-01-01', 'juan.perez@example.com', 'admin', 1),
('Su referido se ha registrado', '2024-01-02', 'maria.gomez@example.com', 'user', 2),
('Tiene un nuevo incentivo', '2024-01-03', 'carlos.lopez@example.com', 'user', 3),
('Actualización de estado', '2024-01-04', 'ana.ramirez@example.com', 'admin', 4),
('Su referido ha sido inactivo', '2024-01-05', 'luis.martinez@example.com', 'user', 5),
('Nuevo bono disponible', '2024-01-06', 'laura.torres@example.com', 'user', 6),
('Cambios en su cuenta', '2024-01-07', 'sofia.diaz@example.com', 'admin', 7),
('Notificación de seguimiento', '2024-01-08', 'jorge.hernandez@example.com', 'user', 8),
('Nuevo incentivo aplicado', '2024-01-09', 'claudia.mejia@example.com', 'user', 9),
('Su registro está completo', '2024-01-10', 'andres.castro@example.com', 'admin', 10);


-- Insertar datos dummy en la tabla Notificaciones
INSERT INTO Notificaciones (mensaje, fechaEnvio, destinatario, tipoUsuario, idReferencia) VALUES
('Bienvenido al sistema', '2024-01-01', 'juan.perez@example.com', 'admin', 1),
('Su referido se ha registrado', '2024-01-02', 'maria.gomez@example.com', 'user', 2),
('Tiene un nuevo incentivo', '2024-01-03', 'carlos.lopez@example.com', 'user', 3),
('Actualización de estado', '2024-01-04', 'ana.ramirez@example.com', 'admin', 4),
('Su referido ha sido inactivo', '2024-01-05', 'luis.martinez@example.com', 'user', 5),
('Nuevo bono disponible', '2024-01-06', 'laura.torres@example.com', 'user', 6),
('Cambios en su cuenta', '2024-01-07', 'sofia.diaz@example.com', 'admin', 7),
('Notificación de seguimiento', '2024-01-08', 'jorge.hernandez@example.com', 'user', 8),
('Nuevo incentivo aplicado', '2024-01-09', 'claudia.mejia@example.com', 'user', 9),
('Su registro está completo', '2024-01-10', 'andres.castro@example.com', 'admin', 10);