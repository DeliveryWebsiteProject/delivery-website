CREATE DATABASE basileus;

-- --------------------------------------------------------
-- Table structure for table 'USERS'
-- --------------------------------------------------------
CREATE TABLE basileus.users (
	id varchar(120) NOT NULL,
	cpf varchar(11) NOT NULL,
	name varchar(120) NOT NULL,
	password varchar(120) NOT NULL,
	phone varchar(11) NOT NULL,
	address varchar(120) NULL,
	role smallint NOT NULL,
	state smallint NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PIZZA'
-- --------------------------------------------------------
CREATE TABLE basileus.pizzas (
	id varchar(50) NOT NULL,
	name varchar(20) NOT NULL,
	price DOUBLE NOT NULL,
	category smallint NOT NULL,
	photo varchar(200) NOT NULL,
	state smallint NOT NULL,
  CONSTRAINT pizz_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PIZZA_MAPPING'
-- --------------------------------------------------------
CREATE TABLE basileus.pizza_mapping (
	ref_pizza varchar(100) NOT NULL,
	ref_ingredient varchar(100) NOT NULL
);

-- --------------------------------------------------------
-- Table structure for table 'INGREDIENT'
-- --------------------------------------------------------
CREATE TABLE basileus.ingredient (
	id varchar(50) NOT NULL,
	name varchar(30) NOT NULL,
	CONSTRAINT ingredient_pk PRIMARY KEY (id)
);