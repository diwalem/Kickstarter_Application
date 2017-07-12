SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user_account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_account` (
  `USER_NAME` VARCHAR(30) NULL DEFAULT NULL,
  `NAME` VARCHAR(100) NULL DEFAULT NULL,
  `PASSWORD` VARCHAR(45) NULL DEFAULT NULL,
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `USER_NAME_UNIQUE` (`USER_NAME` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 144
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`user_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_category` (
  `categoryID` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NOT NULL,
  `category_desc` VARCHAR(70) NULL DEFAULT NULL,
  `user_id` INT(11) NULL DEFAULT NULL,
  `category_status` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`categoryID`),
  UNIQUE INDEX `category_name_UNIQUE` (`category_name` ASC),
  INDEX `user_id` (`user_id` ASC),
  CONSTRAINT `user_category_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user_account` (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`user_projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_projects` (
  `project_id` INT(11) NOT NULL AUTO_INCREMENT,
  `project_name` VARCHAR(45) NOT NULL,
  `project_desc` VARCHAR(70) NULL DEFAULT NULL,
  `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `project_status` VARCHAR(45) NULL DEFAULT NULL,
  `project_amount` DOUBLE NULL DEFAULT NULL,
  `creator_id` INT(11) NULL DEFAULT NULL,
  `category_id` INT(11) NULL DEFAULT NULL,
  `end_date` TIMESTAMP NULL DEFAULT NULL,
  `remaining_amount` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  UNIQUE INDEX `project_name_UNIQUE` (`project_name` ASC),
  INDEX `creator_id` (`creator_id` ASC),
  INDEX `category_id` (`category_id` ASC),
  CONSTRAINT `user_projects_ibfk_1`
    FOREIGN KEY (`creator_id`)
    REFERENCES `mydb`.`user_account` (`ID`),
  CONSTRAINT `user_projects_ibfk_2`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`user_category` (`categoryID`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`user_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_services` (
  `project_id` INT(11) NOT NULL,
  `service_id` INT(11) NOT NULL AUTO_INCREMENT,
  `service_amount` DOUBLE NULL DEFAULT NULL,
  `service_desc` VARCHAR(70) NULL DEFAULT NULL,
  `service_endDate` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`service_id`),
  INDEX `project_id` (`project_id` ASC),
  CONSTRAINT `user_services_ibfk_1`
    FOREIGN KEY (`project_id`)
    REFERENCES `mydb`.`user_projects` (`project_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`donor_services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`donor_services` (
  `service_id` INT(11) NOT NULL,
  `user_id` INT(11) NULL DEFAULT NULL,
  `card_no` VARCHAR(16) NULL DEFAULT NULL,
  `cvv` INT(11) NULL DEFAULT NULL,
  `expiry` VARCHAR(45) NULL DEFAULT NULL,
  `donor_services_id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`donor_services_id`),
  INDEX `service_id` (`service_id` ASC),
  INDEX `user_id` (`user_id` ASC),
  CONSTRAINT `donor_services_ibfk_1`
    FOREIGN KEY (`service_id`)
    REFERENCES `mydb`.`user_services` (`service_id`),
  CONSTRAINT `donor_services_ibfk_2`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user_account` (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`project_delete_reason`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`project_delete_reason` (
  `project_id` INT(11) NOT NULL,
  `reason` VARCHAR(100) NULL DEFAULT NULL,
  `comments` VARCHAR(100) NULL DEFAULT NULL,
  `project_delete_reason_Id` INT(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`project_delete_reason_Id`),
  INDEX `project_id` (`project_id` ASC),
  CONSTRAINT `project_delete_reason_ibfk_1`
    FOREIGN KEY (`project_id`)
    REFERENCES `mydb`.`user_projects` (`project_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`user_information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_information` (
  `user_id` INT(11) NOT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `address` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_name_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user_account` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `mydb`.`user_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user_project` (
  `user_id` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`, `name`),
  CONSTRAINT `user_project_fk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user_account` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
