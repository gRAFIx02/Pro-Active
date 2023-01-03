-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: pro_active
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addtrainersplan`
--

DROP TABLE IF EXISTS `addtrainersplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addtrainersplan` (
  `trainername` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  `trainerplanname` varchar(45) NOT NULL,
  PRIMARY KEY (`username`,`type`),
  KEY `fk_trainer_n_idx` (`trainername`),
  CONSTRAINT `fk_trainer_n` FOREIGN KEY (`trainername`) REFERENCES `trainer_info` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addtrainersplan`
--

LOCK TABLES `addtrainersplan` WRITE;
/*!40000 ALTER TABLE `addtrainersplan` DISABLE KEYS */;
INSERT INTO `addtrainersplan` VALUES ('Tah','grafix','n','hero'),('Tam37','grafix','training','ggg'),('Tah','Tam37','n','hero'),('Tah','Tam37','training','Test1');
/*!40000 ALTER TABLE `addtrainersplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise_info`
--

DROP TABLE IF EXISTS `exercise_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercise_info` (
  `name` varchar(200) NOT NULL,
  `category` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `description` longtext,
  `img` varchar(500) DEFAULT NULL,
  `difficulty` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise_info`
--

LOCK TABLES `exercise_info` WRITE;
/*!40000 ALTER TABLE `exercise_info` DISABLE KEYS */;
INSERT INTO `exercise_info` VALUES ('Crunches','Calisthenics','Abs','Lie flat on your back with your knees bent and feet flat on the floor. Cross your arms over your chest with your palms placed just below your shoulders, or you can put your hands behind your head. Engage your abs, lift your head and shoulders off the floor, and hold the position for 1–2 counts. Make sure to squeeze your abs when you are up. Then, slowly lower yourself back down.','../image/exercise/crunches.jpg','Intermediate'),('Declined Pushup','Calisthenics','Chest','This push-up is for those who are looking some challenge in performing regular push-ups. Elevate your legs using a chair/bench/any kind of platform and keeps your hands on the floor. This elevation increases the intensity of the push-up, making it harder in every rep. You can also include some books to elevate your hands to make it even harder.','../image/exercise/declined-pushup.jpg','Intermediate'),('Diamon Pushup','Calisthenics','Triceps','This is a great exercise for both triceps and chest. Form a diamond shape using your palms. Spread your legs wide, and perform push-ups. Bend the hands backwards if you want it to impact your triceps more. Bend it slightly in an angle if you want it to impact your chest more. Make sure to squeeze your chest as you go up.','../image/exercise/diamond-pushup.jpg','Intermediate'),('Full Planche Pushup','Calisthenics','Shoulder','This push-up will push you to your limit, face you off with a new challenge. A strong core is essential to perform this push-up. Elevate yourself a little using a push-up bar or a platform, then lift your legs up like a floating plank. From that position, perform push-ups without dropping your legs on the floor.','../image/exercise/fullplanche-pushup.jpg','Extreme'),('Handstand Pushup','Calisthenics','Shoulder','One of the hardest push-ups out there, if not the hardest. You need to have string wrists and shoulder to perform this push-up. You can perform it either by a handstand or a supported handstand. Choose your preferred method and perform push-ups in that form.','../image/exercise/handstand-pushup.jpg','Extreme'),('Hanging Leg Raise','Calisthenics','Abs','A harder variation of leg raises. Takes the full advantage of your bodyweight to push your abs to their limit. Hang using a pull-up bar or rings. Pull your legs up as much as possible. Make sure your knees are straight. Go up slow, hold the position for 1-2 seconds, squeeze the abs and then go back down.','../image/exercise/hanging-leg-raise.jpg','Advanced'),('Hip Thrust','Calisthenics','Abs','Start on the floor with your shoulder blades resting against a secured bench (either have it against a wall or secured to the floor). Sitting on the floor with your legs straight, place a barbell across the crease of your hips and place your hands around the bar. If you don’t have barbells, you do use a weighted vest or a weighted backpack. Alternatively, you can hold a dumbbell. Next, bend your knees and have your feet about hip-width apart. Once in position, drive your heels into the ground, brace your core, and push your pelvis upward by squeezing your glutes. At the top of the movement, your shins should be vertical, your torso parallel with the ground, and knees at 90 degrees. Avoid pushing with your lower back and keep your chest in the same position throughout the whole movement. Then, gently bring the weight back down','../image/exercise/hip-thrust.jpg',NULL),('Inclined Pushup','Calisthenics','Triceps','Elevate yourself from the ground using a platform (chair, table, bench, etc.) and perform push-ups. This is a great way to get the beginners confident and set to perform regular push-ups. For intermediate trainees out there, this is also a great exercise for you guys to work on your lower chest.','../image/exercise/inclined-pushup.jpg','Beginner'),('Leg Raise','Calisthenics','Abs','Start by lying down on the floor or a mat. Lay flat with your arms at your sides and legs stretched out next to each other, then raise those legs. Then lower them back down Lower them until they’re hovering just above the ground, and then raise them again.','../image/exercise/leg-raise.jpg','Intermediate'),('One Arm Pushup','Calisthenics','Chest','A challenging push-up, testing your individual arm strength. It requires both triceps and chest strength. Push-up using one arm. Keep the legs spread wide for good balance.','../image/exercise/onearm-pushup.jpg','Advanced'),('Pushup','Calisthenics','Triceps','Most basic push-up out there. The key is to maintain perfect form and take it slow. Keep the core tight, legs and chest straight, head aligned with the body. Go slow and explode up. Don’t go up too fast as it might cause muscle tear.','../image/exercise/pushup.jpg','Intermediate'),('Superman Pushup','Calisthenics','Chest','This is a fun challenge for the calisthenics athletes out there. Perform a push-up, and then explode up. When you are up, spread your hands and legs like the Superman flies. To be noted, this is not recommended to do on a regular basis as it puts a lot of strain on the body. It’s better to do from time to time as a fun challenge or a loose day of training.','../image/exercise/superman-pushup.jpg','Advanced'),('Wall Pushup','Calisthenics','Triceps','Easiest variation of all push-ups. For beginners who have a hard time performing any kind of push-ups. Perform push-up using the wall as support. You can put your legs a bit far to incline yourself with the wall to increase the difficulty.','../image/exercise/wall-pushup.jpg','Beginner');
/*!40000 ALTER TABLE `exercise_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_plan`
--

DROP TABLE IF EXISTS `my_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_plan` (
  `plan_name` varchar(200) NOT NULL,
  `day` int NOT NULL,
  `workout_1` varchar(200) DEFAULT NULL,
  `workout_2` varchar(200) DEFAULT NULL,
  `workout_3` varchar(200) DEFAULT NULL,
  `workout_4` varchar(200) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'Undone',
  PRIMARY KEY (`plan_name`,`day`),
  CONSTRAINT `my_plan_fk` FOREIGN KEY (`plan_name`) REFERENCES `my_plan_info` (`plan_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_plan`
--

LOCK TABLES `my_plan` WRITE;
/*!40000 ALTER TABLE `my_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `my_plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_plan_info`
--

DROP TABLE IF EXISTS `my_plan_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_plan_info` (
  `plan_name` varchar(200) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `difficulty` varchar(45) DEFAULT NULL,
  `desc` longtext,
  PRIMARY KEY (`plan_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_plan_info`
--

LOCK TABLES `my_plan_info` WRITE;
/*!40000 ALTER TABLE `my_plan_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `my_plan_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition`
--

DROP TABLE IF EXISTS `nutrition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition` (
  `plan_name` varchar(200) NOT NULL,
  `day` int NOT NULL,
  `breakfast` varchar(200) DEFAULT NULL,
  `lunch` varchar(200) DEFAULT NULL,
  `snacks` varchar(200) DEFAULT NULL,
  `dinner` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`plan_name`,`day`),
  CONSTRAINT `plan_name` FOREIGN KEY (`plan_name`) REFERENCES `nutrition_info` (`plan_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition`
--

LOCK TABLES `nutrition` WRITE;
/*!40000 ALTER TABLE `nutrition` DISABLE KEYS */;
INSERT INTO `nutrition` VALUES ('High Protein Diet',1,'Protein Pancake','Grilled chicken and veggies','Banana','Pasta with chicken'),('High Protein Diet',2,'Protein Pancake','Grilled salmon and veggies','Apple','Egg fried rice'),('High Protein Diet',3,'Oats','Beef and veggies','Blueberry','Pasta with salmon'),('High Protein Diet',4,'Oats','Chicken salad','Protein shake','Pumpkin pie and yogurt'),('High Protein Diet',5,'Egg sandwich','Steak','Protein bar','Chicken salad and veggies'),('High Protein Diet',6,'Egg sandwich','Salmon and salad','Poached egg','Grilled chicken'),('High Protein Diet',7,'Oats','Cashewnut salad','Boiled egg','Beef curry');
/*!40000 ALTER TABLE `nutrition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition_info`
--

DROP TABLE IF EXISTS `nutrition_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition_info` (
  `plan_name` varchar(200) NOT NULL,
  `uploaded_by` varchar(200) DEFAULT NULL,
  `description` longtext,
  `img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`plan_name`),
  KEY `fk_nutri_idx` (`uploaded_by`),
  CONSTRAINT `fk_nutri` FOREIGN KEY (`uploaded_by`) REFERENCES `trainer_info` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition_info`
--

LOCK TABLES `nutrition_info` WRITE;
/*!40000 ALTER TABLE `nutrition_info` DISABLE KEYS */;
INSERT INTO `nutrition_info` VALUES ('High Protein Diet','igor','This diet plan is perfect for those looking to gain muscles without gaining a lot of body fat.','../image/nutrition/high_protein.jpg');
/*!40000 ALTER TABLE `nutrition_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tips`
--

DROP TABLE IF EXISTS `tips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tips` (
  `uploader` varchar(200) NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `tips_desc` varchar(500) NOT NULL,
  PRIMARY KEY (`uploader`,`tips_desc`),
  CONSTRAINT `uploader` FOREIGN KEY (`uploader`) REFERENCES `trainer_info` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tips`
--

LOCK TABLES `tips` WRITE;
/*!40000 ALTER TABLE `tips` DISABLE KEYS */;
/*!40000 ALTER TABLE `tips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainer_info`
--

DROP TABLE IF EXISTS `trainer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainer_info` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int DEFAULT NULL,
  `height` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `expertise` varchar(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `img` varchar(45) DEFAULT '../image/default/default2.jpg',
  PRIMARY KEY (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainer_info`
--

LOCK TABLES `trainer_info` WRITE;
/*!40000 ALTER TABLE `trainer_info` DISABLE KEYS */;
INSERT INTO `trainer_info` VALUES ('athelanx','$2b$10$bqbyvSTSRHXb0j13cvKJ6uUH7UZdiuvqJ/0w7NffLWUnEvbPhzvAW','athleanx@gmail.com',35,180,77,'Weight-lifting','Jeff Cavaliere','../image/default/jeff.jpg'),('grafix','$2b$10$vvlTIj8CYA.EcY7ecQIh/OSi/J93J2mFqoNhO9EGyStp0sroo.Sr.','grafix235@gmail.com',22,165,60,'Calisthenics','Protyoy Rafi','../image/default/default2.jpg'),('igor','$2b$10$Gz26F7eujgwwAmAde0aAjOxKffnOeRzkF/qZzZ2RzNrVNq/z1ndmm','igorvoitenko@gmail.com',29,177,69,'Calisthenics','Igor Voitenko','../image/default/igor.jpg'),('stan69','$2b$10$hNRSY6C5QB4suRBdR3dbEuPXt/GcV5FejhZZH3n3yLU/H32MLiMha','stanbrowney@gmail.com',23,170,85,'Calisthenics','Stan Browney','../image/default/browney.jpg'),('Tah','$2b$10$lX4fZlhmslt8HIswnScrIO6aUCMw51vqnqrgTpyRqU9ANMk9HuRUm','tahmidrahman@iut-dhaka.edu',22,22,222,'calisthenics','Tahm','../image/default/default1.jpg'),('Tam37','$2b$10$njJO2ZhMia.XJGjVsc5rs.dyS3EZDPVR3QYSq2.SBrAjC4KEHjomu','190041237tr@gmail.com',22,200,70,'weighlifting','Tahmid Rahman','../image/default/default3.jpg');
/*!40000 ALTER TABLE `trainer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trainertips`
--

DROP TABLE IF EXISTS `trainertips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainertips` (
  `username` varchar(200) NOT NULL,
  `tips` longtext CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  KEY `fk_usern_idx` (`username`),
  CONSTRAINT `fk_usern` FOREIGN KEY (`username`) REFERENCES `trainer_info` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainertips`
--

LOCK TABLES `trainertips` WRITE;
/*!40000 ALTER TABLE `trainertips` DISABLE KEYS */;
INSERT INTO `trainertips` VALUES ('igor','Don\'t drink water right before going for a workout.'),('igor','Always stay hydrated.');
/*!40000 ALTER TABLE `trainertips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `username` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `age` int DEFAULT NULL,
  `height` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `focus` varchar(255) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `current_level` varchar(15) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `img` varchar(200) DEFAULT '../image/default/default2.jpg',
  PRIMARY KEY (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES ('aaa','$2b$10$ocXyOQaWN0yBfXNXnxBHROHorVtmHCInws7K1iVZ.emee6M3Q0SJ2','a@gmail.com',22,123,11,'Maintain Current Physique and Weight','Calisthenics','Muscular','aaa','../image/default/default2.jpg'),('Gr','$2b$10$QfcIi0egwtJMx68PU2hnQemTggG0GPCInSLFjZjwQ8r9FdCwh3g1m','rafi190041235@gmail.com',222,222,22,'Maintain Current Physique and Weight','Calisthenics','Athletic','Gr','../image/default/default2.jpg'),('grafix','$2b$10$WC/2TUH3loTeCh/snYyptu3ymaU0.Lixn3qr6RsVhQU4qkD.iVYr.','grafix235@gmail.com',21,165,60,'Fat Burn and Lose Weight','Calisthenics','Skinny Fat','Protyoy Rafi','../image/default/default3.jpg'),('sabry','$2b$10$Wviry/RBZ56li8CPg3KgReqKF6LbpwYuL.NVeNSe20rZ1Gj2Lc4Cy','sabrysaid@iut-dhaka.edu',23,200,100,'Maintain Current Physique and Weight','Calisthenics','Fat','Sabry','../image/default/default2.jpg'),('Tah','$2b$10$hoLSikJPOCYjatZ48yhrdObz1qr.UCYG7gTSY0n59icoKvxX3pcCy','tahmidrahman@iut-dhaka.edu',22,172,69,'Fat Burn and Lose Weight','Calisthenics','Muscular','Tah','../image/default/default2.jpg'),('Tam37','$2b$10$OINDOkSjOUQD6OfMiuQpg.quS7srRotuLQxxrKa6N6hn3sN4fEgxW','190041237tr@gmail.com',23,170,68,'maintain','weightlifting','muscular','Tahmid Rahman','../image/default/default4.jpg');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout`
--

DROP TABLE IF EXISTS `workout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout` (
  `plan_name` varchar(200) NOT NULL,
  `day` int NOT NULL,
  `workout_1` varchar(200) DEFAULT NULL,
  `workout_2` varchar(200) DEFAULT NULL,
  `workout_3` varchar(200) DEFAULT NULL,
  `workout_4` varchar(200) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'Undone',
  PRIMARY KEY (`day`,`plan_name`),
  KEY `trainer_workout_fk_idx` (`plan_name`),
  CONSTRAINT `trainer_workout_fk` FOREIGN KEY (`plan_name`) REFERENCES `workout_info` (`plan_name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout`
--

LOCK TABLES `workout` WRITE;
/*!40000 ALTER TABLE `workout` DISABLE KEYS */;
INSERT INTO `workout` VALUES ('Ultimate Summer Physique',1,'Push-Up','Crunches','Pull-Up','Squats','Undone'),('Ultimate Summer Physique',2,'Push-Up','Sit-ups','Dumbbell Curls','','Undone'),('Ultimate Summer Physique',3,'Rest','Rest','Rest','Rest','Undone'),('Ultimate Summer Physique',4,'Planche','Squats','Burpee','','Undone'),('Ultimate Summer Physique',5,'Push-Up','Pull-up','Lunges','Planche','Undone'),('Ultimate Summer Physique',6,'Push-Up','Squats','Towel Pull-up','','Undone'),('Ultimate Summer Physique',7,'Jumping Jack','Burpee','Planche Push-up','Lunges','Undone');
/*!40000 ALTER TABLE `workout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workout_info`
--

DROP TABLE IF EXISTS `workout_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workout_info` (
  `plan_name` varchar(200) NOT NULL,
  `uploaded_by` varchar(200) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `difficulty` varchar(45) DEFAULT NULL,
  `description` longtext,
  `img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`plan_name`),
  KEY `fk_uploaded_plan_idx` (`uploaded_by`),
  CONSTRAINT `fk_uploaded_plan` FOREIGN KEY (`uploaded_by`) REFERENCES `trainer_info` (`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout_info`
--

LOCK TABLES `workout_info` WRITE;
/*!40000 ALTER TABLE `workout_info` DISABLE KEYS */;
INSERT INTO `workout_info` VALUES ('Ultimate Summer Physique','igor','Calisthenics','Intermediate','Tired of being out of shape? Get the physique of your dreams with my new plan, the ULTIMATE SUMMER PHYSIQUE!!!','../image/trainer_plan/ultimate.jpg');
/*!40000 ALTER TABLE `workout_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-03 14:18:44
