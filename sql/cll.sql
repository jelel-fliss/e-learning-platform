-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 29 Octobre 2020 à 20:06
-- Version du serveur :  8.0.22
-- Version de PHP :  7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cll`
--

-- --------------------------------------------------------

--
-- Structure de la table `Class`
--

CREATE TABLE `Class` (
  `id` int NOT NULL,
  `Department` int NOT NULL,
  `Abbr` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Department`
--

CREATE TABLE `Department` (
  `id` int NOT NULL,
  `Name` varchar(50) NOT NULL,
  `director` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Student`
--

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

-- --------------------------------------------------------

--
-- Structure de la table `Teacher`
--

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
-- Index pour les tables exportées
--

--
-- Index pour la table `Class`
--
ALTER TABLE `Class`
  ADD PRIMARY KEY (`Abbr`),
  ADD UNIQUE KEY `id` (`id`);

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
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Class`
--
ALTER TABLE `Class`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Department`
--
ALTER TABLE `Department`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Student`
--
ALTER TABLE `Student`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Teacher`
--
ALTER TABLE `Teacher`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
