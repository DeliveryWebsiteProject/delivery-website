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
	description varchar(250) NOT NULL,
  requests int DEFAULT 0 NOT NULL,
  CONSTRAINT pizz_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'PHOTOS'
-- --------------------------------------------------------
CREATE TABLE basileus.photos (
	id varchar(100) NOT NULL,
	path text NOT NULL,
	CONSTRAINT photo_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'ITEMS'
-- --------------------------------------------------------
CREATE TABLE basileus.items (
	id varchar(100) NOT NULL,
	ref_pizza varchar(100) NOT NULL,
	quantity int NOT NULL,
	state smallint NOT NULL,
	CONSTRAINT item_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'CARTS'
-- --------------------------------------------------------
CREATE TABLE basileus.carts (
	ref_user varchar(100) NOT NULL,
	ref_item varchar(100) NOT NULL,
	CONSTRAINT carts_pk PRIMARY KEY (ref_user, ref_item)
);

-- --------------------------------------------------------
-- Table structure for table 'ORDERS'
-- --------------------------------------------------------
CREATE TABLE basileus.orders (
	id varchar(100) NOT NULL,
	ref_user varchar(100) NOT NULL,
	total DOUBLE NOT NULL,
	created datetime NOT NULL,
	state smallint NOT NULL,
	payment smallint NOT NULL,
	type smallint NOT NULL,
	CONSTRAINT order_pk PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- Table structure for table 'ORDERS_ITEMS'
-- --------------------------------------------------------
CREATE TABLE basileus.orders_items (
	ref_order varchar(100) NOT NULL,
	ref_item varchar(100) NOT NULL,
	CONSTRAINT orders_items_pk PRIMARY KEY (ref_order, ref_item)
);

-- --------------------------------------------------------
-- Table structure for table 'SETTINGS'
-- --------------------------------------------------------
CREATE TABLE basileus.settings (
	days varchar(50) NULL,
	`begin` varchar(5) NULL,
	`end` varchar(5) NULL,
	state SMALLINT NULL,
	phone varchar(11) NULL,
	instagram varchar(50) NULL
);

-- --------------------------------------------------------
-- Table structure for table 'MESSAGES'
-- --------------------------------------------------------
CREATE TABLE basileus.messages (
	welcome varchar(250) NULL,
	start varchar(250) NULL,
	finish varchar(250) NULL
);