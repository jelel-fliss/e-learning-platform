-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 22 déc. 2020 à 16:04
-- Version du serveur :  8.0.22
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cll`
--

-- --------------------------------------------------------

--
-- Structure de la table `Class`
--

DROP TABLE IF EXISTS `Class`;
CREATE TABLE `Class` (
  `id` int NOT NULL,
  `Department` int NOT NULL,
  `Abbr` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Class`
--

INSERT INTO `Class` (`id`, `Department`, `Abbr`) VALUES
(3, 1, 'IF3'),
(2, 1, 'IF4'),
(1, 1, 'IF5');

-- --------------------------------------------------------

--
-- Structure de la table `Course`
--

DROP TABLE IF EXISTS `Course`;
CREATE TABLE `Course` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `subject` int NOT NULL,
  `file` varchar(200) NOT NULL,
  `downloads` int NOT NULL,
  `uploader` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Course`
--

INSERT INTO `Course` (`id`, `name`, `subject`, `file`, `downloads`, `uploader`) VALUES
(1, 'Chapitre 1 Java', 7, 'java_chapitre1.pdf', 25, 8),
(2, 'Chapitre 1 BDA', 6, 'BDA_1.pdf', 30, 6);

-- --------------------------------------------------------

--
-- Structure de la table `Department`
--

DROP TABLE IF EXISTS `Department`;
CREATE TABLE `Department` (
  `id` int NOT NULL,
  `Name` varchar(50) NOT NULL,
  `director` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Department`
--

INSERT INTO `Department` (`id`, `Name`, `director`) VALUES
(1, 'Informatique', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Student`
--

DROP TABLE IF EXISTS `Student`;
CREATE TABLE `Student` (
  `id` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `birthDate` date NOT NULL,
  `birthPlace` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `class` int NOT NULL,
  `photo` varchar(25) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Student`
--

INSERT INTO `Student` (`id`, `email`, `firstName`, `lastName`, `birthDate`, `birthPlace`, `address`, `class`, `photo`, `password`) VALUES
(4, 'abderrahmen.boubaker@etudiant-fst.utm.tn ', 'Abderrahmen', 'Boubaker', '1998-12-07', 'Monastir', 'Monastir', 2, '', '111222'),
(2, 'ahmedahmed@gmail.com', 'Ahmed', 'Ahmed', '1997-10-01', 'Mehdia', 'Mehdia', 2, '2.jpg', '1234\r\n'),
(7, 'chaima.kacem@etudiant-fst.utm.tn', 'Chaima', 'Kacem', '1998-12-01', 'Nabel', 'Nabel', 2, '', '111222'),
(5, 'eya.boukadhaba@etudiant-fst.utm.tn ', 'Eya', 'Boukadheba', '1997-12-01', 'Monastir', 'Monastir', 2, '', '111222'),
(1, 'jelel.fliss@gmail.com', 'Jalel', 'Jalel', '1997-06-18', 'Bizerta', 'Manar 1', 1, '1.jpg', '1234'),
(3, 'safa.aloui@etudiant-fst.utm.tn ', 'Safa', 'Aloui', '1998-12-07', 'Bizerte', 'Ras Jbal', 2, '', '111222');

-- --------------------------------------------------------

--
-- Structure de la table `Subject`
--

DROP TABLE IF EXISTS `Subject`;
CREATE TABLE `Subject` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `teacher` int NOT NULL,
  `class` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Subject`
--

INSERT INTO `Subject` (`id`, `name`, `teacher`, `class`) VALUES
(1, 'Optimisation Combinatoire', 1, 2),
(1, 'AFDL', 2, 1),
(3, 'Architecture des Ordinateurs', 3, 2),
(4, 'Analyse de Données ', 4, 1),
(6, 'Base de données Avancées', 6, 1),
(7, 'Java', 8, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Teacher`
--

DROP TABLE IF EXISTS `Teacher`;
CREATE TABLE `Teacher` (
  `id` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `birthDate` date NOT NULL,
  `birthPlace` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `hiringDate` date NOT NULL,
  `diploma` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `photo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `Teacher`
--

INSERT INTO `Teacher` (`id`, `email`, `firstName`, `lastName`, `birthDate`, `birthPlace`, `address`, `hiringDate`, `diploma`, `password`, `photo`) VALUES
(1, 'faouzicharada@gmail.com', 'Faouzi', 'Charrada', '1960-11-01', 'Tunis', 'Tunis', '2007-11-01', '', '1234', ''),
(6, 'mohamedali@gmail.com', 'Mohamed Ali', 'Ben Hassine', '1987-06-01', 'Tunis', 'Tunis', '2018-09-01', 'Génie Big Data', '1234', ''),
(8, 'sadoksadok@gmail.com', 'Sedak', 'Sedak', '1970-12-08', 'Tunis', 'Tunis', '2005-12-08', 'Ingénieur Informatique', '111222', ''),
(4, 'salahkhardani@gmail.com', 'Salah', 'Khardani', '1985-12-06', 'Ben Arous', 'Ben Arous', '2020-09-05', '', '1234', ''),
(3, 'samirbenahmad@gmail.com', 'Samir', 'Ben Ahmed', '1960-11-05', 'Tunis', 'Tunis', '2015-09-01', 'Génie Informatique', '1234', ''),
(2, 'yosrhlaoui@gmail.com', 'Yosr', 'Hlaoui', '1975-11-10', 'Tunis', 'Tunis', '2010-11-10', '', '1234', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Class`
--
ALTER TABLE `Class`
  ADD PRIMARY KEY (`Abbr`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `Course`
--
ALTER TABLE `Course`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Department`
--
ALTER TABLE `Department`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Index pour la table `Student`
--
ALTER TABLE `Student`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Index pour la table `Teacher`
--
ALTER TABLE `Teacher`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Class`
--
ALTER TABLE `Class`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Course`
--
ALTER TABLE `Course`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Department`
--
ALTER TABLE `Department`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Student`
--
ALTER TABLE `Student`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `Teacher`
--
ALTER TABLE `Teacher`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
