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

router.get('/edit/:name', function(req,res){
	var team= teamService.getTeam(req.params.name);
	res.render("teams/edit", {team: team});
});

router.delete('/:name', function(req, res){
	teamService.deleteTeam(req.params.name);
	res.send("Success");
});


router.put('/:name', function(req, res){
	teamService.editTeam(req.params.name, req.body);
	res.send(Success);
});

module.exports = router;
