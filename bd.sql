CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL,
    apiKey VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE Referidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apiKey VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    estado VARCHAR(50) NOT NULL,
    fechaRegistro DATE NOT NULL,
    usuarioReferidor INT,
    FOREIGN KEY (usuarioReferidor) REFERENCES Usuarios(id)
);

CREATE TABLE Alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario INT,
    referido INT,
    tipoEducacion VARCHAR(50) NOT NULL,
    tipoIdentificacion VARCHAR(50) NOT NULL,
    numeroIdentificacion VARCHAR(50) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    celular VARCHAR(20) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    municipio VARCHAR(255) NOT NULL,
    FOREIGN KEY (usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (referido) REFERENCES Referidos(id)
);

CREATE TABLE Incentivos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    valor FLOAT NOT NULL
);

CREATE TABLE UsuarioIncentivo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario INT,
    incentivo INT,
    fechaAsignacion DATE NOT NULL,
    estado BOOLEAN,
    FOREIGN KEY (usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (incentivo) REFERENCES Incentivos(id)
);

CREATE TABLE Notificaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mensaje TEXT NOT NULL,
    fechaEnvio DATE NOT NULL,
    destinatario VARCHAR(255) NOT NULL,
    tipoUsuario VARCHAR(50) NOT NULL,
    idReferencia INT NOT NULL
);
