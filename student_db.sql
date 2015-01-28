
DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(20) default NULL,
  `marks` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `students` */

insert  into `students`(`id`,`name`,`marks`) values (1,'deveshdsf',90),(2,'singhal',99),(5,'dfsdfs',434),(6,'sddsfsdf',3343);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;