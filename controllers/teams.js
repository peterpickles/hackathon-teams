// This is what handles the page teams, most important page
var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.put('/edit/:name', function(req,res){
	var team= teamService.getTeam(req.params.name);
	res.render("teams/edit", {team: team});
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});



router.delete('/:name', function(req, res){
	teamService.deleteTeam(req.params.name);
	res.send("Success");
});

module.exports = router;
