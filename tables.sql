create table country (
	country_id INT PRIMARY KEY not null,
	province_state character varying(60),
	country_region character varying(60) NOT NULL,
	lat character varying(60) NOT NULL,
	long character varying(60) NOT NULL

);


create table covid_death_count (
	country_id INT PRIMARY KEY not null,
	Day_1	int	not null	,
	Day_2	int	not null	,
	Day_3	int	not null	,
	Day_4	int	not null	,
	Day_5	int	not null	,
	Day_6	int	not null	,
	Day_7	int	not null	,
	Day_8	int	not null	,
	Day_9	int	not null	,
	Day_10	int	not null	,
	Day_11	int	not null	,
	Day_12	int	not null	,
	Day_13	int	not null	,
	Day_14	int	not null	,
	Day_15	int	not null	,
	Day_16	int	not null	,
	Day_17	int	not null	,
	Day_18	int	not null	,
	Day_19	int	not null	,
	Day_20	int	not null	,
	Day_21	int	not null	,
	Day_22	int	not null	,
	Day_23	int	not null	,
	Day_24	int	not null	,
	Day_25	int	not null	,
	Day_26	int	not null	,
	Day_27	int	not null	,
	Day_28	int	not null	,
	Day_29	int	not null	,
	Day_30	int	not null	,
	Day_31	int	not null	,
	Day_32	int	not null	,
	Day_33	int	not null	,
	Day_34	int	not null	,
	Day_35	int	not null	,
	Day_36	int	not null	,
	Day_37	int	not null	,
	Day_38	int	not null	,
	Day_39	int	not null	,
	Day_40	int	not null	,
	Day_41	int	not null	,
	Day_42	int	not null	,
	Day_43	int	not null	,
	Day_44	int	not null	,
	Day_45	int	not null	,
	Day_46	int	not null	,
	Day_47	int	not null	,
	Day_48	int	not null	,
	Day_49	int	not null	,
	Day_50	int	not null	,
	Day_51	int	not null	,
	Day_52	int	not null	
);

create table date (
	date_id INT PRIMARY KEY not null,
	calendar_date date DEFAULT ('now'::text)::date NOT NULL
	
);

create table covid_recovery (
	country_id INT PRIMARY KEY not null,
	Day_1	int	not null	,
	Day_2	int	not null	,
	Day_3	int	not null	,
	Day_4	int	not null	,
	Day_5	int	not null	,
	Day_6	int	not null	,
	Day_7	int	not null	,
	Day_8	int	not null	,
	Day_9	int	not null	,
	Day_10	int	not null	,
	Day_11	int	not null	,
	Day_12	int	not null	,
	Day_13	int	not null	,
	Day_14	int	not null	,
	Day_15	int	not null	,
	Day_16	int	not null	,
	Day_17	int	not null	,
	Day_18	int	not null	,
	Day_19	int	not null	,
	Day_20	int	not null	,
	Day_21	int	not null	,
	Day_22	int	not null	,
	Day_23	int	not null	,
	Day_24	int	not null	,
	Day_25	int	not null	,
	Day_26	int	not null	,
	Day_27	int	not null	,
	Day_28	int	not null	,
	Day_29	int	not null	,
	Day_30	int	not null	,
	Day_31	int	not null	,
	Day_32	int	not null	,
	Day_33	int	not null	,
	Day_34	int	not null	,
	Day_35	int	not null	,
	Day_36	int	not null	,
	Day_37	int	not null	,
	Day_38	int	not null	,
	Day_39	int	not null	,
	Day_40	int	not null	,
	Day_41	int	not null	,
	Day_42	int	not null	,
	Day_43	int	not null	,
	Day_44	int	not null	,
	Day_45	int	not null	,
	Day_46	int	not null	,
	Day_47	int	not null	,
	Day_48	int	not null	,
	Day_49	int	not null	,
	Day_50	int	not null	,
	Day_51	int	not null	,
	Day_52	int	not null	
);


create table influenza (
	country_id INT PRIMARY KEY not null,
	region character varying(60) NOT NULL,
	death_rate character varying(6) NOT NULL,
	population int NOT NULL

);

create table stock (
	date_id INT PRIMARY KEY not null,
	open INT not null,
	high INT not null,
	low INT not null,
	close INT not null,
	volume INT not null,
	ex_dividend INT not null,
	split_ratio INT not null,
	adj_open INT not null,
	adj_high INT not null,
	adj_low INT not null,
	adj_close INT not null,
	adj_volume INT not null
);	
	
create table nasdaq (
	date DATE NOT NULL,
	volume numeric not null
);	

create table sp500 (
	date DATE NOT NULL,
	volume numeric not null
);


create table sector (
	date DATE NOT NULL,
	sector character varying(80) NOT NULL,
	rank character varying(80) NOT NULL,
	value numeric not null
);