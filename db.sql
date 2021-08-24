Some questions concerning basic SQL statements

name	region	area	population	gdp
Afghanistan	South Asia	652225	26000000	
Albania	Europe	28728	3200000	6656000000
Algeria	Middle East	2400000	32900000	75012000000
Andorra	Europe	468	64000	
...
1. Select the code which produces this table
name	population
Bahrain	1234571
Swaziland	1220000
Timor-Leste	1066409

SELECT name, population
  FROM world
 WHERE population BETWEEN 1000000 AND 1250000

2. Pick the result you would obtain from this code:
      SELECT name, population
      FROM world
      WHERE name LIKE 'Al%'

Table-E
Albania	3200000
Algeria	32900000

3. Select the code which shows the countries that end in A or L
SELECT name FROM world
 WHERE name LIKE '%a' OR name LIKE '%l'

4. Pick the result from the query

SELECT name,length(name)
FROM world
WHERE length(name)=5 and continent='Europe'

name	length(name)
Italy	5
Malta	5
Spain	5

5. Here are the first few rows of the world table:
name	region	area	population	gdp
Afghanistan	South Asia	652225	26000000	
Albania	Europe	28728	3200000	6656000000
Algeria	Middle East	2400000	32900000	75012000000
Andorra	Europe	468	64000	
...
Pick the result you would obtain from this code:
SELECT name, area*2 FROM world WHERE population = 64000

Andorra	936

6. Select the code that would show the countries with an area larger than 50000 and a population smaller than 10000000

SELECT name, area, population
  FROM world
 WHERE area > 50000 AND population < 10000000

7. Select the code that shows the population density of China, Australia, Nigeria and France
 

world
name	continent	area	population	gdp
Afghanistan	South Asia	652225	26000000	
Albania	Europe	28728	3200000	6656000000
Algeria	Middle East	2400000	32900000	75012000000
Andorra	Europe	468	64000	
Brazil	South America	8550000	182800000	564852000000
Colombia	South America	1140000	45600000	
Nauru	Asia-Pacific	21	9900	
Uzbekistan	Central Asia	447000	26000000	
...

SELECT name, population/area
  FROM world
 WHERE name IN ('China', 'Nigeria', 'France', 'Australia')

Score the test
Your score is: 7 out of 7


1. Select the code which gives the name of countries beginning with U

SELECT name
  FROM world
 WHERE name LIKE 'U%'

2. Select the code which shows just the population of United Kingdom?

SELECT population
  FROM world
 WHERE name = 'United Kingdom'

3. Select the answer which shows the problem with this SQL code - the intended result should be the continent of France:
 SELECT continent 
   FROM world 
  WHERE 'name' = 'France'

'name' should be name

4. Select the result that would be obtained from the following code:
 SELECT name, population / 10 
  FROM world 
 WHERE population < 10000

Nauru	990

5. Select the code which would reveal the name and population of countries in Europe and Asia

SELECT name, population
  FROM world
 WHERE continent IN ('Europe', 'Asia')

6. Select the code which would give two rows

SELECT name FROM world
 WHERE name IN ('Cuba', 'Togo')

7. Select the result that would be obtained from this code:
SELECT name FROM world
 WHERE continent = 'South America'
   AND population > 40000000

Brazil
Colombia

Score the test
Your score is: 7 out of 7



nobel
yr	subject	winner
1960	Chemistry	Willard F. Libby
1960	Literature	Saint-John Perse
1960	Medicine	Sir Frank Macfarlane Burnet
1960	Medicine	Peter Medawar
1960	Physics	Donald A. Glaser
1960	Peace	Albert Lutuli
...
1. Pick the code which shows the name of winner's names beginning with C and ending in n

SELECT winner FROM nobel
 WHERE winner LIKE 'C%' AND winner LIKE '%n'

2. Select the code that shows how many Chemistry awards were given between 1950 and 1960

SELECT COUNT(subject) FROM nobel
 WHERE subject = 'Chemistry'
   AND yr BETWEEN 1950 and 1960

3. Pick the code that shows the amount of years where no Medicine awards were given

SELECT COUNT(DISTINCT yr) FROM nobel
 WHERE yr NOT IN (SELECT DISTINCT yr FROM nobel WHERE subject = 'Medicine')

4. Select the result that would be obtained from the following code:
SELECT subject, winner FROM nobel WHERE winner LIKE 'Sir%' AND yr LIKE '196%'

Medicine	Sir John Eccles
Medicine	Sir Frank Macfarlane Burnet


5. Select the code which would show the year when neither a Physics or Chemistry award was given

SELECT yr FROM nobel
 WHERE yr NOT IN(SELECT yr 
                   FROM nobel
                 WHERE subject IN ('Chemistry','Physics'))

6. Select the code which shows the years when a Medicine award was given but no Peace or Literature award was

SELECT DISTINCT yr
  FROM nobel
 WHERE subject='Medicine' 
   AND yr NOT IN(SELECT yr FROM nobel 
                  WHERE subject='Literature')
   AND yr NOT IN (SELECT yr FROM nobel
                   WHERE subject='Peace')

7. Pick the result that would be obtained from the following code:
 SELECT subject, COUNT(subject) 
   FROM nobel 
  WHERE yr ='1960' 
  GROUP BY subject

Chemistry	1
Literature	1
Medicine	2
Peace	1
Physics	1

Score the test
Your score is: 7 out of 7