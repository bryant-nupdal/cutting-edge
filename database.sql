
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- Create Client Table
CREATE TABLE "client" (
    "id" SERIAL PRIMARY KEY,
    "company_name" VARCHAR(225)
);

-- Values for Client Table
INSERT INTO "client" ("company_name")
	VALUES ('PRG'), ('Epic'), ('Meridian'), ('Valley Oral'), ('New Perspective'), ('Capital Credit Union'),
	('Crestwood Condos'), ('Hatch Reality'), ('Fargo Dermatology'), ('N/A');

-- Test Statements : Select Everything / Drop Table
SELECT * FROM "client";
DROP TABLE "client";

-- Create Property Table
CREATE TABLE "property" (
	"id" SERIAL PRIMARY KEY,
	"property_name" VARCHAR(225),
	"street" varchar(225),
	"city" VARCHAR(225),
	"state" VARCHAR(2),
	"zip" VARCHAR(12),
	"address_type" VARCHAR(25),
	"client_id" integer REFERENCES client,
	"route_id" integer REFERENCES route
);

-- Values for Property Table
INSERT INTO "property" ("property_name", "street", "city", "state", "zip", "address_type", "client_id", "route_id" )
	VALUES ('Galleria', '5675 26 Ave S', 'Fargo', 'ND', '58104', 'Commerical', 1,1),
	('Aurora Plaza', '816 24 Ave E', 'West Fargo', 'ND', '58078', 'Commercial', 1,1),
	('Boulevard Square', '745 31 Ave E', 'West Fargo', 'ND','58078', 'Commercial', 2,1),
	('Oakridge Strip Mall', '635 32 Ave E', 'West Fargo', 'ND', '58078', 'Commercial',1, 1),
	('ATA Building', '665 32 Ave E', 'West Fargo', 'ND', '58078', 'Commercial', 1,1),
	('Valley Oral', '3280 6 St E', 'West Fargo', 'ND', '58078', 'Commercial', 4,1),
	('New Perspective', '645 33 Ave E', 'West Fargo', 'ND', '58078', 'Commercial', 5,1),
	('Capital Credit Union', '3216 Veterans Blvd', 'West Fargo', 'ND', '58078', 'Commercial', 6,1),
	('Starbucks', '3240 Veterans Blvd', 'Fargo', 'ND', '58104', 'Commercial', 1,1),
	('Crestwood Condos', '2990 Calico Dr S', 'Fargo', 'ND', '58104', 'Commercial', 7,1),
	('Hatch Reality', '4215 31 Ave S', 'Fargo', 'ND', '58104', 'Commercial', 8,2),
	('Fargo Dermatology', '3173 43 St S', 'Fargo', 'ND', '58104', 'Commercial', 9,2),
	('Integron', '3247 47 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,2), 
	('BLU32', '3265 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,2),
	('Designer Homes', '3250 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,2),
	('Shoppes At Blu', '3265 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,2),
	('Blu Water Corporate', '4601 33 Ave S', 'Fargo', 'ND', '58104', 'Commercial', 1, 2),
	('FBS', '4601 33 Ave S', 'Fargo', 'ND', '58104', 'Commercial', 10, 2),
	('BOP', '3409, 3475, 3501, 3424, 2575 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10, 2),
	('Montessori School', '3587 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10, 2),
	('13th Ave Office Center', '4357 13 Ave SW', 'Fargo', 'ND', '58103', 'Commercial', 1, 2),
	('Corner Investments', '4150 19 Ave S', 'Fargo', 'ND', '58103', 'Commercial', 1,3),
	('The Nest 1 & 2', '1781, 1709 35 St S', 'Fargo', 'ND', '58103', 'Commerical', 3,3),
	('Amber Valley Office Park', '4612 - 4668 Amber Valley Pkwy S', 'Fargo', 'ND', '58104', 'Commercial', 1,3),
	('Amber Valley Office Park 2', '4725 - 4749 Amber Valley Pkwy S', 'Fargo', 'ND', '58104', 'Commercial', 1,3),
	('Amber Valley Retail', '2551 45 St SW', 'Fargo', 'ND', '58104', 'Commercial', 1,3),
	('Shoppes of 45th', '2877 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,3),
	('Wild Bills Saloon', '1776 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,3),
	('Fieldstone Village', '4574 44 Ave S', 'Fargo', 'ND', '58104', 'Commercial', 10,3),
	('Patterson Dental', '4821 45 St S', 'Fargo', 'ND', '58104', 'Commercial', 10,4),
	('Shotwell Floral', '4000 40 Ave S', 'Fargo', 'ND', '58104', 'Commercial', 10,4),
	('Timber Creek Retail', '5050 Timber Pkwy S', 'Fargo', 'ND', '58104', 'Commercial', 1,4),
	('Timber Creek Offices', '5120, 5170, 5180 Prospertity Way', 'Fargo', 'ND', '58104', 'Commercial', 1,4),
	('Bishop Blvd Townhomes', '5212 Biship Blvd S', 'Fargo', 'ND', '58104', 'Commercial', 3,4),
	('Eaglebrook 1 & 2', '5450, 5652 26 St S', 'Fargo', 'ND', '58104', 'Commercial', 3,4),
	('Media Shack', '214 12 St W', 'West Fargo', 'ND', '58078', 'Commercial', 10,4),
	('Pioneer Place', '300 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('The Firm', '344 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('Payroll Express', '301 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('Sheyanne Plaza', '444 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('Berg Auto Lot', '502 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('The Lights', '3100 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('The Northern Lights', '2920 Sheyanne St', 'West Fargo', 'ND', '58078', 'Commercial', 2,5),
	('Westport Beach Townhomes', '1112-1283 Westport Beach Way', 'Fargo', 'ND', '58104', 'Commercial', 10,5),
	('VA Community Resource', '721 1 Ave N', 'Fargo', 'ND', '58102', 'Commercial', 10,5),
	('Bristol Place', '320 N 5 St', 'Fargo', 'ND', '58102', 'Commercial', 2,6),
	('Northern Plains Surgery', '44 4St S', 'Fargo', 'ND', '58102', 'Commercial', 10,6),
	('Gateway Square', '300 Main Ave', 'Fargo', 'ND', '58102', 'Commercial', 10,6),
	('Red Door', '802, 808 7 Ave S', 'Moorhead', 'MN', '56560', 'Commercial', 2,6),
	('Comstock', '600 8 St S', 'Moorhead', 'MN', '56560', 'Commercial', 2,6),
	('Block E', '801 Main Ave', 'Moorhead', 'MN', '56560', 'Commercial', 2,6),
	('Vanne', '1530 1 Ave N', 'Moorhead', 'MN', '56560', 'Commercial', 2,6),
	('Rochester Armored Car', '732 40 St N', 'Fargo', 'ND', '58102', 'Commercial', 10,6),
	('Fuhrman Property', '3431 4 Ave S', 'Fargo', 'ND', '58103', 'Commercial', 10,7),
	('Healing Arts Chiropractic', '3240 15 St S', 'Fargo', 'ND', '58103', 'Commercial', 10,7),
	('Taco Shop', '420 University Dr N', 'Fargo', 'ND', '58103', 'Commercial', 10,7),
	('Emergency Food Pantry', '1101 4 Ave N', 'Fargo', 'ND', '58102', 'Commercial', 10,7),
	('909 Page Investments', '909 Page Dr', 'Fargo', 'ND', '58103', 'Commercial', 10,7),
	('Northland Apartments', '1115 23 St S', 'Fargo', 'ND', '58103', 'Commercial', 10,7),
	('Holiday Lights at Lindenwood', '1905 Roger Maris Dr', 'Fargo', 'ND', '58103', 'Commercial', 10,7);
	
-- Test Statements : Select Everything / Drop Table
SELECT * FROM "property";
DROP TABLE "property";

-- Create User Table
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(100),
	"last_name" VARCHAR(100),
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"primary_position" VARCHAR(100),
	"is_admin" BOOLEAN DEFAULT false
);	

-- Test Statements : Select Everything / Drop Table
SELECT * FROM "user";
DROP TABLE "user";

-- Create Machine Table
CREATE TABLE "machine" (
	"id" SERIAL PRIMARY KEY,
	"machine_name" VARCHAR(100),
	"machine_number" INT,
	"route_id" integer REFERENCES route
);

-- Values For Machine Table
INSERT INTO "machine" ("machine_name", "machine_number", "route_id")
	VALUES ('1025R', 1, 7),('X-Series', 1, 1), ('X-Series', 2, 1), ('X-Series', 3, 2), ('X-Series', 4, 2), ('3-Series', 1, 1), ('3-Series', 2, 2), ('3-Series', 3, 3),
	('3-Series', 4, 4), ('3-Series', 5, 4), ('4066', 1, 3), ('4066', 2, 4), ('4066', 3, 7), ('5125', 1, 3), ('5125', 2, 4), ('344', 1, 2), ('344', 2, 1), ('344', 3, 2),
	('344', 4, 5), ('344', 5, 2),('544', 1, 1), ('truck-plow', 1, 6), ('truck-plow', 2, 7);

-- Test Statements : Select Everything / Drop Table
SELECT * FROM "machine";
DROP TABLE "machine";

-- Create Route Table
CREATE TABLE "route" (
	"id" SERIAL PRIMARY KEY,
	"route_number" INTEGER NOT NULL
);

-- Values For Route
INSERT INTO "route" ("route_number")
	VALUES (1), (2), (3), (4), (5), (6), (7);

-- Test Statements : Select Everythign / Drop Table
SELECT * FROM "route";
DROP TABLE "route";

-- Test Statement : Joins Property and Route and Selects at a Specific Route Number
SELECT "route"."route_number", "property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip", "property"."address_type" FROM "route" 
JOIN "property" ON "property"."route_id" = "route"."id" WHERE "route"."route_number" = 2;

-- Create Time Card Table
CREATE TABLE "time_card" (
	"id" SERIAL PRIMARY KEY,
	"clock_in" TIMESTAMP DEFAULT NOW() NOT NULL,
	"clock_out" TIMESTAMP DEFAULT NOW() NOT NULL,
	"task_id" INTEGER REFERENCES "task" ON DELETE CASCADE,
	"user_id" INTEGER REFERENCES "user"
);

-- Test Statement : Massive Join Table for all Data
SELECT "task"."date", "clock_in", "clock_out",
	"route"."route_number",
	"property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip", "property"."address_type",
	"user"."first_name", "user"."last_name" FROM "time_card" 
JOIN "user" ON "user"."id" = "time_card"."user_id"
JOIN "task" ON "task"."id" = "time_card"."task_id"
JOIN "work_order" ON "work_order"."id" = "task"."work_order_id"
JOIN "property" ON "property"."id" = "task"."property_id"
JOIN "route" ON "route"."id" = "property"."route_id"
;

-- Test Statement : Updates the Timecard Entry 
UPDATE "time_card"
SET "clock_in" = NOW()
WHERE "id"='60';

-- Test Statement : Select Everything / Drop Table
SELECT * FROM "time_card";
DROP TABLE "time_card";

-- Test Statement : Used for Timestamp to get Current Time
select NOW();

-- Create Task Table 
CREATE TABLE "task" (
	"id" SERIAL PRIMARY KEY,
	"date" TIMESTAMP DEFAULT NOW() NOT NULL,
	"property_id" INTEGER REFERENCES "property",
	"work_order_id" INTEGER REFERENCES "work_order"
);

-- Test Statement : Selects Needed Fields From Task, Property, and Work Order
SELECT "date", "property"."property_name", "property"."street", "property"."city", "property"."state", "property"."zip",
	 "work_order"."is_complete", "work_order"."timestamp" FROM "task"
JOIN "property" ON "property"."id" = "task"."property_id"
JOIN "work_order" ON "work_order"."id" = "task"."work_order_id"
;

-- Test Statement : Grabs all Tasks on a Specific Work Order
SELECT * FROM "task" WHERE "task"."work_order_id" = 1;

-- Test Statements : delete task(s)
DELETE FROM "task" WHERE "task"."id" = 1;
DELETE FROM "task";

--Test Statements : Select everything / Drop Table
SELECT * FROM "task";
DROP TABLE "task";

-- Create Work Order Table
CREATE TABLE "work_order" (
	"id" SERIAL PRIMARY KEY,
	"is_complete" BOOLEAN DEFAULT false,
	"timestamp" TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Values For Work Order
INSERT INTO "work_order" ("is_complete")
VALUES (false) RETURNING *;

-- Test Statements : Select Everything / Drop Table
SELECT * FROM "work_order";
DROP TABLE "work_order";

-- Test Statement : Updates the Record to Complete and Changes the Original Timestamp to the Current Time 
UPDATE "work_order" SET "is_complete" = true, "timestamp" = NOW();