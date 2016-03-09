-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 09, 2016 at 09:55 PM
-- Server version: 5.5.38
-- PHP Version: 5.5.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `test2-16`
--

-- --------------------------------------------------------

--
-- Table structure for table `subset1`
--

CREATE TABLE `subset1` (
  `itemName` varchar(73) DEFAULT NULL,
  `itemSubhead` varchar(66) DEFAULT NULL,
  `itemDescription` varchar(889) DEFAULT NULL,
  `mediaType` varchar(5) DEFAULT NULL,
  `date` varchar(17) DEFAULT NULL,
  `tags__001` varchar(11) DEFAULT NULL,
  `tags__002` varchar(11) DEFAULT NULL,
  `tags__003` varchar(11) DEFAULT NULL,
  `tags__004` varchar(7) DEFAULT NULL,
  `tags__005` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subset1`
--

INSERT INTO `subset1` (`itemName`, `itemSubhead`, `itemDescription`, `mediaType`, `date`, `tags__001`, `tags__002`, `tags__003`, `tags__004`, `tags__005`) VALUES
('1906 Race Riot', 'Racial Violence Prompts Migration', 'Uncomfortable with the city’s growing Black population and increased visibility, white Atlantans launched an orgy of violence after the city''s main newspapers printed false rumors of Black men raping white women. Rioters targeted prosperous Black-owned downtown businesses like barbershops, as well as establishments along the Decatur Avenue entertainment strip, some of which served an interracial clientele.  At least 25 Blacks (and 2 whites) were killed in the violence which lasted for nearly three days.  Although at least one Eastside Black neighborhood organized a successful armed defense of their community,  the increasingly hostile atmosphere convinced many Black Atlantans to regroup on the Westside.', 'image', 'October 7, 1906', 'racism', 'development', '', '', ''),
('Alonzo Herndon Family Home', 'Economic Diversity in the Early 20th Century', 'The former home of Atlanta’s first Black millionaire, Alonzo Herndon, sits on the southern border of Vine City. Herndon arrived in 1883 and started a prosperous barbering business; he also invested in real estate and in 1905 founded the Atlanta Life Insurance Company, a crucial lifeline at a time when many white-owned companies refused policies to Blacks. Built in 1910, the Herndon family home harks back to an earlier era when the Westside housed residents from a mixture of economic backgrounds.', 'image', '1910', 'racism', 'activism', '', '', ''),
('The Impact of Redlining & Atlanta’s Racial Segregation Laws', 'Government-Backed Racist Housing Policy', 'In the 1930s, the federal government commissioned and circulated a series of maps rating city neighborhoods by supposed mortgage lending risk. These maps specified four “grades,” with all African American residential areas, regardless of income, rated as the lowest, “D” (or “red”) neighborhoods – hence the term “redlining.”, Assessors classified Atlanta’s entire Westside as a high-risk area – setting in motion a self-fulfilling prophecy as banks subsequently refused to lend in the area. Moreover, local whites pursued similar efforts on the municipal level, passing racial segregation ordinances in 1913, 1916, 1929, and 1931 - despite Supreme Court rulings in 1917 and 1924 that such laws were unconstitutional.  Even though these particular attempts failed, it demonstrates how determined whites were to keep African Americans out of “their” neighborhoods.', 'image', '1938', 'activism', 'housing', '', '', ''),
('Fire in the Old Fourth Ward', '1917 Great Atlanta Fire', 'In 1917 The Great Atlanta Fire destroyed many homes on Auburn Avenue and in the 4th Ward, where most Black families lived up until then. This caused mass migration of Black families to the city’s Westside, one of the few areas in Atlanta where whites did not vigorously oppose Black settlement. Many Black families moved to Vine City and nearby areas.', 'image', '1917', 'development', 'housing', '', '', ''),
('Public Housing Developments Displace Residents', 'Supposed “Slums” Demolished to Make Way for New Developments', 'Thousands of Black residents were displaced when the Atlanta Housing Authority started building public housing in the mid-1930s. As in virtually all American cities at the time, these housing projects were racially segregated, formally in the South but informally in the North prior to 1964.  Not all of the housing destroyed fit the description of “slums” that was used to justify these projects. This man, moving his family’s belongings prior to the opening of the Alonzo Herndon Homes in 1941, may have hauled ice for a living, small-scale entrepreneurship being a strategy some Black men successfully used to avoid racial discrimination in the workplace.  Black homeowners in the demolished areas typically did not receive fair market value for their homes, and faced the predicament of finding new housing in a segregated market with many areas off-limits to them.', 'image', '1941', 'activism', 'housing', '', '', ''),
('Life on the Westside in the 1950''s', 'Myrtle Dansby, English Avenue Resident, Remembers the Neighborhood', 'Myrtle Dansby was one of the many Old Fourth Ward residents who moved to the Westside in the 1940’s. She has lived in the area for the last sixty-six years and recalls fond memories of the neighborhood in the 1950’s and 1960’s.', 'video', '1995', 'racism', 'development', '', '', ''),
('Changing Demographics', 'Affordable Housing on the Westside: 1940''s - 1960''s', 'By 1930 Vine City and most of the Westside was majority-Black. Exceptions did exist – working class white families continued to live in the area through the 1940’s, especially in “Bellwood” (present day English Avenue) – but as increasing numbers of Black families moved to the area in the 1940''s and 1950''s, when all Black housing projects were built, white families continued to move out.', 'image', '1940', 'racism', 'housing', '', '', ''),
('Martin Luther King Jr. Leads Demonstrations for Fair Housing in Vine City', 'Rising Tensions Result in Protests', 'In the 1960’s issues over racial discrimination across housing, services and infrastructure erupted in protests. Common issues facing Black families included: overpaying for sub-standard housing; absentee landlords ignoring tenants’ requests; lack of access to affordable and high quality food; and laws, policies and social practices that trapped Black families into the least desirable, low-lying parts of the city where poor drainage and sanitation problems were prevalent. Moreover, in Atlanta, the city refused to pave streets in Black neighborhoods into the 1950s and in the early twentieth century, even refused to pick up garbage. In 1966 Martin Luther King Jr. and Coretta Scott, who in 1965 had moved into a home at 239 Sunset Avenue in Vine City, led a protest in the neighborhood against the unsafe and unfair housing conditions.', 'image', 'January 31, 1966', 'development', 'housing', '', '', ''),
('1960 English Avenue School Bombing', 'Incident Underlines Tensions in the “City too Busy to Hate.”', 'This 1960 Chicago Tribune Coverage of the English Avenue School Bombing describes a horrific scene:<br>“Atlanta, Dec. 12 - A dynamite bomb blasted a Negro elementary school early today...The blast occurred hours before school opened and no one was injured. Sixteen hundred children attend the school. Police theorized that the bomb, composed of 10 sticks of dynamite, was thrown against the school from a passing car…”<br>“The school is in a middle class Negro neighborhood and within two block of white dwellings and 10 blocks from the Georgia Tech campus. There was speculation that the bombing was the work of groups fighting against mixing of the races in Atlanta''s schools.”', 'image', 'December 12, 1960', 'racism', 'activism', 'development', 'housing', 'dome'),
('Civil Rights Schisms Arise in the Mid-Late 60’s', 'Diverse Activism in Vine City in the 1960’s and 70’s.', 'In the mid-1960’s not only were leaders from the Southern Christian Leadership Council (SCLC) and the Student Nonviolent Coordinating Committee (SNCC) active in the community, but area colleges and universities and early public-private initiatives such as the Council on Human Relations of Greater Atlanta, Inc. spearheaded projects as well. An example of such a project is the “Vine City Project: Experiments in Self Help” which paired area college students with community members to work on cleanup and other various self-directed projects. Seen by many as a positive alternative to the more radical wings of the civil rights movement, these initiatives asked residents to do what they had been doing for generations: building and maintaining their own communities.', 'image', 'January 31, 1966', 'racism', '', '', '', ''),
('test', 'test item subhead', 'this is the test items description', 'image', '12-3-2015', 'activism', NULL, NULL, NULL, NULL),
('adding content', 'with the housing theme', 'this is the test items description', 'video', '3-21-1990', 'housing', NULL, NULL, NULL, NULL),
('Jennifer', 'is super awesome!', 'Jennifer is now in my database', 'image', '2015', 'housing', NULL, NULL, NULL, NULL),
('Something', 'Something is going to happen', 'This is a test about something, not sure what though', 'text', '1966', 'racism', 'activism', 'development', 'housing', 'dome'),
('Something Else', 'another Test', 'testing this form with new tag properties', 'image', '1967', 'racism', '', 'development', '', 'dome');
