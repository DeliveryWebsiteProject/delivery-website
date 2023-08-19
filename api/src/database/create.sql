CREATE DATABASE basileus;

-- --------------------------------------------------------
-- Table structure for table 'USERS'
-- --------------------------------------------------------
CREATE TABLE basileus.user (
	id INT auto_increment NOT NULL,
	cpf varchar(11) NOT NULL,
	phone varchar(11) NOT NULL,
	password varchar(30) NOT NULL,
	address varchar(120) NULL,
	role ENUM('Admin', 'Cliente') NOT NULL,
	state BIT DEFAULT 0 NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PIZZA'
-- --------------------------------------------------------
CREATE TABLE basileus.pizza (
	id INT auto_increment NOT NULL,
	name varchar(20) NOT NULL,
	price DOUBLE NOT NULL,
	category ENUM('Salgada', 'Doce') NOT NULL,
	photo varchar(200) NOT NULL,
	state BIT DEFAULT 0 NOT NULL,
  CONSTRAINT pizz_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PIZZA_MAPPING'
-- --------------------------------------------------------
CREATE TABLE basileus.pizza_mapping (
	ref_pizza INT NOT NULL,
	ref_ingr INT NOT NULL
);

-- --------------------------------------------------------
-- Table structure for table 'INGREDIENT'
-- --------------------------------------------------------
CREATE TABLE basileus.ingredient (
	id INT auto_increment NOT NULL,
	name varchar(30) NOT NULL,
	CONSTRAINT ingredient_pk PRIMARY KEY (id)
);