use db;

create table activities (
id int,
name varchar(100),
activity_type varchar(100),
date varchar(100),
duration int,
intensity varchar(50),
time_of_day varchar(10),
day_of_week varchar(20),
end_time varchar(10)
);

-- insert dummy values
insert into activities (
id, name, activity_type, date, duration, intensity, time_of_day, day_of_week, end_time
)
values (1, 'test_name', 'bike', '23/08/2023', '90', 'Z1', '10.00', 'Saturday', '11.30');
