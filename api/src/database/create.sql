CREATE DATABASE basileus;

-- --------------------------------------------------------
-- Table structure for table 'USERS'
-- --------------------------------------------------------
CREATE TABLE basileus.users (
	id varchar(100) NOT NULL,
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
-- Table structure for table 'PIZZAS'
-- --------------------------------------------------------
CREATE TABLE basileus.pizzas (
	id varchar(100) NOT NULL,
	ref_photo varchar(100) NOT NULL,
	name varchar(20) NOT NULL,
	price DOUBLE NOT NULL,
	category smallint NOT NULL,
	state smallint NOT NULL,
  CONSTRAINT pizz_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PIZZA_MAPPING'
-- --------------------------------------------------------
CREATE TABLE basileus.pizza_mapping (
	ref_pizza varchar(100) NOT NULL,
	ref_ingredient varchar(100) NOT NULL,
	CONSTRAINT pizza_mapping_pk PRIMARY KEY (ref_pizza, ref_ingredient)
);

-- --------------------------------------------------------
-- Table structure for table 'INGREDIENTS'
-- --------------------------------------------------------
CREATE TABLE basileus.ingredients (
	id varchar(100) NOT NULL,
	name varchar(30) NOT NULL,
	CONSTRAINT ingredient_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PHOTOS'
-- --------------------------------------------------------
CREATE TABLE basileus.photos (
	id varchar(100) NOT NULL,
	path text NOT NULL,
	CONSTRAINT photo_pk PRIMARY KEY (id)
);