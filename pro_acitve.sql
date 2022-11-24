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
INSERT INTO `exercise_info` VALUES ('Declined Pushup','Calisthenics','Chest','Elevate your legs and keeps your hands on the floor. This elevation increases the intensity of the pushup, making it harder in every rep.','../image/exercise/declined-pushup.jpg','Intermediate'),('Diamon Pushup','Calisthenics','Triceps','Form a diamond shape using your palms. Spread your legs wide, and perform pushups.','../image/exercise/diamond-pushup.jpg','Intermediate'),('Full Planche Pushup','Calisthenics','Shoulder','Elevate yourself a little using a pushup bar or a platorm, then lift your legs up like a floating plank. From that positiion, perform pushups without dropping your legs on the floor.','../image/exercise/fullplanche-pushup.jpg','Extreme'),('Handstand Pushup','Calisthenics','Shoulder','Perform a handstand or a supported handstand, then perform pushups.','../image/exercise/handstand-pushup.jpg','Extreme'),('Inclined Pushup','Calisthenics','Triceps','Elevate yourself from the ground using a platform (chair, table, bench, etc.) and perform pushups.','../image/exercise/inclined-pushup.jpg','Beginner'),('One Arm Pushup','Calisthenics','Chest','Pushup using one arm. Keep the legs spread wide for good balance.','../image/exercise/onearm-pushup.jpg','Advanced'),('Pushup','Calisthenics','Triceps','Regular pushups. Go down slow, and explode up.','../image/exercise/pushup.jpg','Intermediate'),('Superman Pushup','Calisthenics','Chest','Perform a pushup, and then explode up. When you are up, spread your hands and legs like a superman flies.','../image/exercise/superman-pushup.jpg','Advanced'),('Wall Pushup','Calisthenics','Triceps','Perform pushup using the wall as support.','../image/exercise/wall-pushup.jpg','Beginner');
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
  PRIMARY KEY (`plan_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition_info`
--

LOCK TABLES `nutrition_info` WRITE;
/*!40000 ALTER TABLE `nutrition_info` DISABLE KEYS */;
INSERT INTO `nutrition_info` VALUES ('High Protein Diet','Tam37','Great for building muscle.','../image/nutrition/high_protein.jpg'),('Ketogenic Diet','Tam37','Great diet if you want to lose fat in a short amount of time.','../image/nutrition/keto.jpg'),('Paleo Diet','Tam37','For balanced diet.','../image/nutrition/paleo.jpg'),('Pescatarian Diet','Tam37','For people who only eat fish as a source of animal protein.','../image/nutrition/pescatarian.jpg'),('Vegan Diet','Tam37','For those who don\'t like flavour.','../image/nutrition/vegan.jpg');
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
  PRIMARY KEY (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainer_info`
--

LOCK TABLES `trainer_info` WRITE;
/*!40000 ALTER TABLE `trainer_info` DISABLE KEYS */;
INSERT INTO `trainer_info` VALUES ('grafix','$2b$10$DRIBKx6RtqirJkwoIf0VyuEW5Cx39Mqs7B1EEwc5PMsSxR.C1PjTG','grafix235@gmail.com',21,165,60,'calisthenics','Protyoy Rafi'),('ProtyRaf','$2b$10$CrZOQ71bmDoGUjDzGtcnmOUfqQl..hQ2tP1GkS2bJbVtD0/TyGN/G','prottoyrafi@iut-dhaka.edu',22,180,70,'calisthenics','Prottoy Rafi'),('ssdsd','$2b$10$AL9yakR6//WEVGXMry1dlu9q1tXvnV3.q4KvyeXtsdyWGAuGbdHl.','s@GMAIL.COM',1,1,-3,'','s'),('taf','$2b$10$aAEkVGeDxJ/8n9T305YyfunBpY3xiQIibes4T0zGvF5duMV4rpgJ.','23@gmail.com',22,22,222,'calisthenics','ere'),('Tah','$2b$10$lX4fZlhmslt8HIswnScrIO6aUCMw51vqnqrgTpyRqU9ANMk9HuRUm','tahmidrahman@iut-dhaka.edu',22,22,222,'calisthenics','Tahm'),('Tam1','$2b$10$LvL96eFifH.PpjTMnDkdTeNonRzNhlorydcR8BLX2C26kr1iPNCEy','1233@gmail.com',22,222,222,'calisthenics','Tam1'),('Tam37','$2b$10$njJO2ZhMia.XJGjVsc5rs.dyS3EZDPVR3QYSq2.SBrAjC4KEHjomu','190041237tr@gmail.com',22,200,70,'weighlifting','Tahmid Rahman');
/*!40000 ALTER TABLE `trainer_info` ENABLE KEYS */;
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
  `focus` varchar(20) DEFAULT NULL,
  `type` varchar(15) DEFAULT NULL,
  `current_level` varchar(15) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
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
INSERT INTO `user_info` VALUES ('grafix','$2b$10$3P/lvN7n5daEtonBflJR3e0GvwBR5J5PfnsRiZDSZsfHfPUtxsOK2','grafix235@gmail.com',21,165,60,'','calisthenics','skinny_fat','Protyoy Rafi','../image/default/default3.jpg'),('Tam37','$2b$10$OINDOkSjOUQD6OfMiuQpg.quS7srRotuLQxxrKa6N6hn3sN4fEgxW','190041237tr@gmail.com',23,170,68,'maintain','weightlifting','muscular','Tahmid Rahman','../image/default/default4.jpg');
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
  CONSTRAINT `trainer_workout_fk` FOREIGN KEY (`plan_name`) REFERENCES `workout_info` (`plan_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout`
--

LOCK TABLES `workout` WRITE;
/*!40000 ALTER TABLE `workout` DISABLE KEYS */;
INSERT INTO `workout` VALUES ('My Plan',1,'A','B','C','d','Undone'),('My Plan',2,'E','F','G','H','Undone'),('My Plan',3,'I','J','K','L','Undone'),('My Plan',4,'M','N','O','P','Undone'),('My Plan',5,'Q','R','S','T','Undone'),('My Plan',6,'U','V','W','X','Undone'),('My Plan',7,'Y','Z','A+','A-','Undone');
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
  PRIMARY KEY (`plan_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workout_info`
--

LOCK TABLES `workout_info` WRITE;
/*!40000 ALTER TABLE `workout_info` DISABLE KEYS */;
INSERT INTO `workout_info` VALUES ('cc','Tam37','calisthenics','intermediate','ccccccccccccccccccccccccccc','../image/trainer_plan/download (5).png'),('dasdasd','Tam37','weightlifting','intermediate','ddddd','../image/trainer_plan/download (5).png'),('fdsfdfsd','Tam37','calisthenics','intermediate','dfsdfdssd','../image/trainer_plan/download (4).png'),('ggg','Tam37','calisthenics','intermediate','gg','../image/trainer_plan/download.png'),('My Plan','Tam37','calisthenics','advanced','It is my plan.','../image/trainer_plan/download (5).png'),('new','Tah','calisthenics','intermediate','ghfghfghf','../image/trainer_plan/download (3).png'),('PlanA','Tah','calisthenics','intermediate','sdsdsaasd','../image/trainer_plan/download (1).jpg'),('PlanB','Tah','calisthenics','intermediate','adfdsfdfs','../image/trainer_plan/download (1).png'),('PlanC','Tah','calisthenics','expert','dsdddfdsdf','../image/trainer_plan/download (2).png');
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

-- Dump completed on 2022-11-25  3:41:07
